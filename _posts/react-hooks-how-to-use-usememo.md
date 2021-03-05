---
title: 'React Hooks: How to Use useMemo'
date: '2021-03-05T21:29:51.159Z'
---

>"In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again."  
[Memoization - Wikipedia](https://en.wikipedia.org/wiki/Memoization)

`useMemo` is a hook used to memoize values inside a React component. It's a performance optimization to avoid recalculating expensive values on every render. You might be familiar with React's `memo` function, which is similar, but is used to memoize React components themselves, to avoid said re-renders in the first place.

The TypeScript function signature of `useMemo`:

```ts
type useMemo = <T>(factory: () => T, deps: Array<any>) => T;
```

The first argument is a factory function returning the value we want to memoize. Like `useEffect` and `useCallback`, the second argument to this hook, `deps`, is a dependency array. Changes to the values passed to this array will trigger our factory function to rerun, returning a new value. If the values in the dependency array do not change, we'll instead receive the memoized value saved during the most recent execution of the factory function.

## Example
```jsx
function Todos({ todos, filterByStatus }) {
  const filteredTodos = useMemo(() => {
    return todos.filter(todo => todo.status === filterByStatus);
  }, [todos, filterByStatus]);

  return (
    <ul>
      {filteredTodos.map((todo, i) =>
        <li key={i}>{todo.name}</li>
      )}
    </ul>
  );
}
```

We receive the props `todos`, an array of todo objects, and `filterByStatus`, a string indicating the status we want to filter by, such as 'completed', 'in-progress', etc. If todo objects are added or removed from the `todos` array, that will affect the resulting `filteredTodos`. Likewise, the result will change if our `filterByStatus` changes from 'in-progress' to 'completed'. We include both of these variables in the dependency array to signal to `useMemo` that changes to these variables should trigger a recalculation of our computed `filteredTodos` value.

Note that for `useMemo` to detect that the `todos` array is unchanged between renders, it must be equal by reference. The variables included in the dependency array will be compared to their previous values using strict equality (`===`). Remember that arrays, objects, and functions are only equal by reference:
```js
[1, 2, 3] === [1, 2, 3] // false
let x = [1, 2, 3];
x === x // true;
```

Using our example with the `todos` array prop, if that prop comes from a parent component storing the value as state:
```js
const [todos, setTodos] = useState([]);
```
...then `todos` will remain referentially equal _until_ `setTodos` is called. You can test this out for yourself, by placing a `console.log` statement inside your `useMemo`'s factory function, to see when it is triggered.

`useMemo` has a lot of concepts in common with `useEffect` and `useCallback`, and yet, at least to me, `useMemo` is a lot easier to understand. Perhaps that's because it seems less intuitive to memoize functions, in the case of `useEffect` and `useCallback`.

For a more detailed explanation of the dependency array, and other related concepts, you can check out:
* My post on useEffect: [React Hooks: How to Use useEffect](/blog/react-hooks-how-to-use-useeffect)
* [Object & array dependencies in the React useEffect Hook](https://www.benmvp.com/blog/object-array-dependencies-react-useEffect-hook)

