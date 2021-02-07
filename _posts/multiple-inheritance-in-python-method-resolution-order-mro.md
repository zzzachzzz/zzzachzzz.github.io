---
title: 'Multiple Inheritance in Python: Method Resolution Order (MRO)'
date: '2019-08-30T16:08:56.000Z'
---

```python
class A:
    def __init__(self):
        print('A')

class B(A):
    def __init__(self):
        super().__init__()
        print('B')

class C(A):
    def __init__(self):
        super().__init__()
        print('C')

class D(B, C):
    def __init__(self):
        super().__init__()
        print('D')

d = D()
```

When class `D` is instantiated, what do you think will be the order of the print statements?

Python's way of determining the order in which multiple inheritance is resolved is called the Method Resolution Order (MRO). The answer to the question is:

```python
A
C
B
D
```

Lets see why.

```python
class D(B, C):
    def __init__(self):
        super().__init__()
        print('D')
```

We begin in class D, which inherits from both B and C. Here, Python resolves from right to left. What this means is that the first class listed takes precedence. If both class B and C defined a method, class B's version would be the one inherited by class D. Resolving right to left, `B <- C`, B's definition of the method would overwrite C's.

Since Python resolves the inheritance of class `C` first, we jump into `C.__init__`.

```python
class C(A):
    def __init__(self):
        super().__init__()
        print('C')
```

Before even reaching our print statement, we get redirected to `A.__init__`. Once in class A, there's nothing left to inherit, so we reach our first print statement `print('A')`. After that, we go back up the chain that got us to A. Next we hit `print('C')`, then finally we return to class D.

```python
class D(B, C):
    def __init__(self):
        super().__init__()
        print('D')
```

We're still not done with `super().__init()`. We've resolved class C, now we're onto B.

```python
class B(A):
    def __init__(self):
        super().__init__()
        print('B')
```

Since B inherits from class A, don't we go back there again? Python keeps track of the order of inheritance, and disregards duplicate entries. We have already visited class A during our inheritance journey, so Python will skip going there again altogether. This is where Method Resolution Order comes in. `__mro__` is an attribute that can be called on a class (not an instance). Lets see what it returns:

```python
print(D.__mro__)
# (<class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>)
```

Look at that, the order of our print statements was `A, C, B, D`. Python begins with the class 'object', and builds on it with each level of inheritance. `__mro__` and the order of our print statements are the same but reversed.

Finishing our example, we skip going to class A inherited by B, since we already visited A when it was inherited by C. We hit `print('B')`, then finally return to class D and hit `print('D')`.
