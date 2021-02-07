---
title: 'Common Tasks: JavaScript and Python Equivalents'
date: '2019-11-13T05:06:20.818Z'
---

## Template Strings

```javascript
// JavaScript
let name = 'Timmy';
console.log(`${name}: ${3+9} btw haHAA`);  // Timmy: 12 btw haHAA
```

```python
# Python (3.6+)
name = 'Timmy';
print(f"{name}: {3+9} btw haHAA");  # Timmy: 12 btw haHAA
```

## Ternary Operator

```javascript
// JavaScript
let x = 0;
x += true ? 1 : 0;
console.log(x);  // 1
```

```python
# Python
x = 0
x += 1 if True else 0
print(x)  # 1
```

## Array / List Manipulation

```javascript
// JavaScript
let x = [3];  // x: [3]
x.push(5);  // x: [3, 5]
let y = x;  // x: [3, 5], y: [3, 5]
console.log(x == y);  // true
// Clone an array (shallow copy)
y = [...x];  // x: [3, 5], y: [3, 5]
// Or
y = x.slice()
console.log(x == y);  // false
// Check for equality
console.log(x.length === y.length && x.every((e, i) => e === y[i]))  // true
x.pop()  // x: [3], y: [3, 5]
console.log(x.length === y.length && x.every((e, i) => e === y[i]))  // false
```

```python
# Python
x = [3]  # x: [3]
x.append(5)  # x: [3, 5]
y = x  # x: [3, 5], y: [3, 5]
print(x is y)  # True
# Clone a list (shallow copy)
y = x.copy()  # x: [3, 5], y: [3, 5]
# Or
y = list(x)
print(x is y)  # False
# Check for equality
print(x == y)  # True
x.pop()  # x: [3], y: [3, 5]
print(x == y)  # False
```

## Reading & Writing JSON Files

```javascript
// JavaScript
const fs = require('fs');

fs.writeFileSync('data.json', JSON.stringify({a: 1, b: 2}, null, 4));
let data = JSON.parse(fs.readFileSync('data.json'));
console.log(data);  // {a: 1, b: 2}
```

```python
# Python
import json

with open('data.json', 'w') as file:
    json.dump({'a': 1, 'b': 2}, file, indent=4)
with open('data.json', 'r') as file:
    data = json.load(file)
print(data)  # {'a': 1, 'b': 2}
```

## For Loops and Iteration

```javascript
// JavaScript
const arr = ['a', 'b'];

for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);  // 0 'a' , 1 'b'
}

for (const x of arr) {
  console.log(x);  // a , b
}

const obj = {a: 1, b: 2};

for (const key in obj) {
  console.log(key, obj[key]);  // a 1 , b 2
}

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);  // a 1 , b 2
}
```

```python
# Python
arr = ['a', 'b']

for i in range(len(arr)):
    print(i, arr[i])  # 0 a , 1 b

for x in arr:
    print(x)  # a , b

obj = {'a': 1, 'b': 2}

for key in obj:
    print(key, obj[key])  # a 1 , b 2

for key, value in obj.items():
    print(key, value)  # a 1 , b 2
```

## List Comprehension / Array Map

```javascript
// JavaScript
let arr = Array.from({length: 4}, _ => null);
console.log(arr);  // [null, null, null, null]

arr = [1, 2, 3, 4].map(x => x % 2 === 0 ? true : false);
console.log(arr);  // [false, true, false, true]

arr = [1, 2, 3, 4].filter(x => x % 2 === 0).map(x => x + 100);
console.log(arr);  // [102, 104]
// OR in a single iteration:
arr = [1, 2, 3, 4].reduce((filtered, x) => {
  if (x % 2 === 0) filtered.push(x + 100);
  return filtered;
}, []);
console.log(arr);  // [102, 104]
```

```python
# Python
arr = [None for i in range(4)]
print(arr)  # [None, None, None, None]

arr = [True if x % 2 == 0 else False for x in [1, 2, 3, 4]]
print(arr)  # [False, True, False, True]

arr = [x + 100 for x in [1, 2, 3, 4] if x % 2 == 0]
print(arr)  # [102, 104]
```

More to come

\_\_\_
