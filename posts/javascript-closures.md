---
title: "JavaScript Closures Explained"
date: "2026-02-22"
description: "Understanding closures in JavaScript with simple examples"
---

## What is a Closure ?

A closure is created when a function remembers variables from it's lexical scope even after the outer scope has finished executing

## Why does it happens ?

When a function is created it stores a reference to it's outer scope in memory
so even after the outer function execution completed . Those variables are not being garbage collected if they are being referenced.

## Simple Example

```js
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
```

Closures are used everywhere in JavaScript!
