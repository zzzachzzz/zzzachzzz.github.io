---
title: 'React Hooks: How to Use useEffect'
date: '2021-03-04T18:04:42.446Z'
---

Of all the hooks built into React, `useEffect` is arguably the most difficult to understand. When I was learning React Hooks, I had just begun to get comfortable with class-based components and the lifecycle methods, such as `componentDidMount`. Part of the difficulty I had when learning `useEffect` was due to the fundamental differences between `useEffect` and the legacy React lifecycle methods. The best tutorials I've read on `useEffect` advise you to "unlearn what you have learned" in regard to lifecycle methods.

[Dan Abramov has an excellent blog post on useEffect](https://overreacted.io/a-complete-guide-to-useeffect). It's very thorough, and thus a long read. This post will summarize many of the points Dan covers, and I'll cover some of the issues and solutions I've discovered while using `useEffect`.

First, here is the function signature for `useEffect` as a TypeScript definition:

```ts
type useEffect = (effect: EffectCallback, deps?: Array<any>) => void;
type EffectCallback = () => (void | (() => void));
```

`EffectCallback` is our function to execute as the effect, which can optionally return a [cleanup function](https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect) that will be executed when the component unmounts, or when the effect is redefined. The optional second argument to `useEffect`, `deps`, is a "dependency array". If `deps` is omitted, then the effect will be executed (and redefined) after every render. When `deps` is included, the effect is only redefined and executed if any of the values provided to the array change from one execution to the next. Consequently, providing no values to the dependency array, `[]`, will result in the effect only being executed after the initial render. In determining if a dependency has changed, as far as I know, a strict equality comparison is performed (`===`). Note that arrays, objects, and functions are only equal by reference. In some situations this can be problematic. This blog post provides several solutions:  
[Object & array dependencies in the React useEffect Hook](https://www.benmvp.com/blog/object-array-dependencies-react-useEffect-hook)

Why is it even necessary to have a dependency array? How could we be accessing stale values inside an effect?

Consider the following snippet of vanilla JS:
```js
let arr = [];
let y = 0;

function pushFunc() {
  y++;
  let x = y;
  arr.push(() => x);
}

pushFunc();
pushFunc();

console.log(arr[0]()); // 1
console.log(arr[1]()); // 2
```
We push two functions to an array, `() => x`, and each time this function is created, it captures `x` from its [closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) within `pushFunc`. `x` from the first execution of `pushFunc` is not the same `x` in the second execution of `pushFunc`. When dealing with React, the same rules apply, whether those values come from props or state, as they're also just variables. This is because a React component is just a function, and plays by the same rules concerning function execution context.  
1 render = 1 function call.

If we were to provide a function to `useEffect` with no dependency array; `useEffect(() => {...})`, the effect function we provide would be redefined after every render, receiving fresh values from the current execution context. The effect would also re-execute after every render. The dependency array serves two purposes:
1. Tell React when to execute our effect
2. Tell React when to redefine our effect

## Example 1: Basic Usage with `fetch`
The most common use case for `useEffect` is fetching data from an API, and then updating the state of a component to render that data in the UI.

```jsx
function Todo({ id }) {
  const [todo, setTodo] = useState();

  useEffect(() => {
    fetch(`/api/todos/${id}`)
      .then(res => res.json())
      .then(json => setTodo(json));
  }, []);

  if (!todo) return null;
  return <div>{todo.title}</div>;
}
```

While we should avoid making too many comparisons to the class lifecycle methods, the above usage of `useEffect` with an empty dependency array `[]` is the rough equivalent of `componentDidMount`. The above does work in its current form, but we're lying to React about the dependency array. Running the above snippet through `eslint` configured with the rule `react-hooks/exhaustive-deps` gives us this warning:
```
React Hook useEffect has a missing dependency: 'id'.
Either include it or remove the dependency array
```
We can fix this to become:

```jsx
useEffect(() => {
  ...
}, [id]);
```

By providing `id` to the dependency array we are saying:  
"Whenever `id` changes, redefine and rerun this effect."

`id` may or may not change depending on how the parent component of our `Todo` component gets a todo id, and provides that prop. If our `Todo` component were to receive a different `id` prop, then we probably would want to fetch the todo corresponding to that new id, calling our effect provided to `useEffect` again.

Technically `setTodo` should be included in the dependency array too. However, since it is a function we get from our `useState` hook, its identity is guaranteed to be stable, so it will never change. Furthermore, **in newer versions of the `react-hooks/exhaustive-deps` rule, the linter won't tell us to include a `useState` `set_` function, nor the `dispatch` function returned by `useReducer`.** It's safe to omit these specific functions from the dependency array. Just not other functions, as we will see in the next section.

## Example 2: Functions as Dependencies
Next, let's take a look at functions as effect dependencies:

```jsx
function Todo({ id }) {
  const [todo, setTodo] = useState();

  function fetchTodo() {
    return fetch(`/api/todos/${id}`);
  }

  useEffect(() => {
    fetchTodo()
      .then(res => res.json())
      .then(json => setTodo(json));
  }, []);

  if (!todo) return null;
  return <div>{todo.title}</div>;
}
```

In this example, our effect calls a function, `fetchTodo`. This code contains a bug. :bug: Because we omit `fetchTodo` from our effect's dependency array, our effect captures only the original definition of `fetchTodo`, and in turn, that instance of `fetchTodo` only captures the initial value of the `id` prop. If `id` changes, our effect will reference the original stale value. Like in the first example, `id` is a dependency we need to inform our effect about. The difference is, we've now made that dependency indirect by accessing `id` inside `fetchTodo` rather than directly inside our effect callback.

There's a problem with simply adding `fetchTodo` to the dependency array to solve this. Because `fetchTodo` will be redefined on each render / execution of our `Todo` component, `fetchTodo` will have a new "value" / "function identity" each time, resulting in the effect being triggered on every render. There are two solutions to this problem:

### Solution #1
Include `fetchTodo` in the dependency array, and define `fetchTodo` with [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback). Like `useEffect`, `useCallback` also accepts a dependency array. Because `fetchTodo` references `id` in its function body, we need to include `id` in its dependency array:

```jsx
const fetchTodo = useCallback(() => {
  return fetch(`/api/todos/${id}`);
}, [id]); // Whenever `id` changes, `fetchTodo` will be redefined

useEffect(() => {
  fetchTodo()
    .then(res => res.json())
    .then(json => setTodo(json));
}, [fetchTodo]); // Add `fetchTodo` to the effect's dependency array
```

### Solution #2
The other solution is to extract `fetchTodo` from the component entirely. Being outside the closure of the `Todo` component, it won't have access to the `id` prop, but we can supply that as an argument to the function. Extracting `fetchTodo` will allow its function identity to be stable across renders of `Todo`:
```jsx
function Todo({ id }) {
  const [todo, setTodo] = useState();

  useEffect(() => {
    fetchTodo(id) // Pass `id` as an argument
      .then(res => res.json())
      .then(json => setTodo(json));
  }, [id]); // `fetchTodo` now has a stable function identity

  if (!todo) return null;
  return <div>{todo.title}</div>;
}

function fetchTodo(id) { // Make `id` an argument
  return fetch(`/api/todos/${id}`);
}
```

## Example 3: Access Updated `props` Without Rerunning an Effect
Let's look at another example. This one is a fairly unique case, as we need to access updated values in our effect, but re-executing the effect actually breaks the functionality we're going for:

```jsx
function Counter({ incrementBy }) {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const handle = setInterval(() => {
      setNum(num + incrementBy);
    }, 3000);

    return () => clearInterval(handle);
  }, [num, incrementBy]);

  return <div>{num}</div>;
}
```

`setNum` won't change, but `num` and `incrementBy` are both problematic. With `num` in the dependency array, and our effect updating `num` via `setNum`, this will cause our effect to be triggered every time `setNum(num + incrementBy)` is run. For setting state relying on previous state values, we can use the callback form of `setState`, and remove `num` as a dependency.

If `num` is omitted from the dependency array, the linter will actually suggest this solution to us:

```
React Hook useEffect has a missing dependency: 'num'.
Either include it or remove the dependency array.
You can also do a functional update 'setNum(n => ...)'
if you only need 'num' in the 'setNum' call
```

To use the functional update form of `setState`, we can change this to:

```jsx
function Counter({ incrementBy }) {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const handle = setInterval(() => {
      setNum(prevNum => prevNum + incrementBy); // `num` is no longer used here
    }, 3000);

    return () => clearInterval(handle);
  }, [incrementBy]); // `num` removed from dependency array

  return <div>{num}</div>;
}
```

Now we're left to deal with `incrementBy`. If this prop is updated, say from `10` to `20`, we do want that updated value to be referenced in our effect, rather than referencing a stale value. However, when our effect is redefined, we lose the timing of our interval, and a new interval is created. We have it setup to call `setNum(prevNum => prevNum + incrementBy)` every 3 seconds.

What happens if just 1.5 seconds have passed for the interval, and the value of `incrementBy` changes?
1. Our effect cleanup function we provided to React will be executed, `() => clearInterval(handle)`, clearing our current 3 second interval.
2. Our effect will be redefined, creating a new 3 second interval, along with a new cleanup function.
3. From there, 3 more seconds must pass before `setNum(...)` is called, for a total of 4.5 seconds since the last interval call (wrong behavior).

This example with `setInterval` provides us with a unique challenge. We want the updated values present in our effect, but we don't want the timing of our interval to be messed up, as a result of redefining our effect. `useReducer` can help us achieve this, by accessing updated props in our reducer function, rather than in `useEffect`:
```jsx
function Counter({ incrementBy }) {
  const [num, incrementNum] = useReducer(
    prevNum => prevNum + incrementBy, // Our "setter" (reducer function)
    0 // Initial state
  );

  useEffect(() => {
    const handle = setInterval(() => {
      incrementNum();
    }, 3000);

    return () => clearInterval(handle);
  }, []);

  return <div>{num}</div>;
}
```
We use `useReducer` in a similar fashion to `useState`, but with the ability to specify what our "setter" function does, and for it to access updated props. `useReducer` is flexible in how you use it for your state. It can be used for simple, single value state, or more complex state objects. By convention, you'd normally see `useReducer` used like this: `const [state, dispatch] = useReducer(...)`. We instead choose to name these `num` & `incrementNum`. `incrementNum` is our `dispatch` function that `useReducer` returns to us, and it is guaranteed to have a stable function identity, preventing it from triggering `useEffect` to rerun. Since `incrementNum` is the `dispatch` function returned to us by `useReducer`, it can be omitted from the dependency array and the exhaustive deps linter won't complain.


## Conclusion
Hopefully this post helped in understanding `useEffect`. As you can tell, the design of this hook by the React team is something that's opinionated and strict in how it is intended to be used, though that's not a bad thing. Being honest about an effect's dependencies is important in avoiding subtle bugs. We looked at some tricks that can be used to limit the number of dependencies in our effects. These recommended workarounds to reduce dependencies are something I wish was documented a little better in the official React docs. One of the more helpful parts of the docs is the [Hooks FAQ #Performance Optimizations](https://reactjs.org/docs/hooks-faq.html#performance-optimizations) section, which to me seems like more of a general usage guide. Knowing these recommended strategies for working with `useEffect` is crucial, as I've found that it's very easy to "break the rules" of `useEffect` when building real world applications.
