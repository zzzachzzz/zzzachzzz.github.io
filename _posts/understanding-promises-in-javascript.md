---
title: 'Understanding Promises in JavaScript'
date: '2019-08-29T20:35:44.000Z'
---

Promises are really confusing. There's a lot of keywords associated with promises and async JS:

-   Promise
-   resolve
-   reject
-   then
-   catch
-   async
-   await

From MDN:

```javascript
new Promise(executor);
```

`executor`

> A function that is passed with the arguments resolve and reject. The executor function is executed immediately by the Promise implementation, passing resolve and reject functions...

So if we break this down further, the expected arguments look like this:

```javascript
new Promise(function executor(resolve, reject));
```

We define the `executor` function, which receives `resolve` and `reject` callback functions as arguments.

```javascript
new Promise(function executor(resolve, reject) {
  if (true) {  // Success
    resolve('Resolved the promise');
  } else {  // Error
    reject('Rejected the promise');
  }
});
```

The `executor` function doesn't have to be named, I'm just making my example explicit.

Once the promise has been resolved or rejected, that will trigger either a chained `then` or `catch` to be called.

```javascript
new Promise(function(resolve, reject) {
  if (true) {  // Success
    resolve('Resolved');
  } else {  // Error
    reject('Rejected');
  }
})
.then(function(result) {
  console.log(result);  // 'Resolved'
})
.catch(function(error) {
  console.log(error);  // 'Rejected'
});
```

An alternative syntax (that I think is more confusing), is to pass a second argument to `then`, which will handle `reject` in place of `catch`. I would not recommend this but it's good to know.

```javascript
new Promise(function executor(resolve, reject) {
  if (true) {  // Success
    resolve('Resolved');
  } else {  // Error
    reject('Rejected');
  }
})
.then(function(result) {
  console.log(result);  // 'Resolved'
}, function(error) {
  console.log(error);  // 'Rejected'
});
```

Now that we understand the general behavior of Promises, let's break down this example `sleep` function.

```javascript
function sleep(ms) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve('Resolved Value');
    }, ms);
  })
}

async function main() {
  console.log('Before sleep');
  const resolvedValue = await sleep(5000);  // 5 seconds
  console.log('After sleep');
  console.log(resolvedValue);  // 'Resolved Value'
}

main();
```

Normally if we were to call `sleep` without `await`, there would be no 5 second pause between the two log statements. That's because our `sleep` function returns a promise, so we must wait for it to be resolved if we want our `main` function to be executed synchronously.

In order to use the `await` keyword, the surrounding function, `main`, must be given the `async` keyword.

`setTimeout` is an asynchronous function, one of few in JS's built in library. However, `setTimeout`_ is not a Promise-based asynchronous function, it is callback-based_. In order to `await` for `setTimeout` to complete, we must wrap it in a promise, and `resolve` that promise inside the callback function we provide to `setTimeout`.

Here's a shorthand version of the above using arrow functions.

```javascript
const sleep = ms => new Promise(resolve => setTimeout(() => resolve('Resolved Value'), ms));

async function main() {
  console.log('Before sleep');
  const resolvedValue = await sleep(5000);  // 5 seconds
  console.log('After sleep');
  console.log(resolvedValue);  // 'Resolved Value'
}

main();
```

Promises are confusing. If you don't understand them fully, don't worry about it. Check out other resources, and most importantly, play around with the code yourself.
