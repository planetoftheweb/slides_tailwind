<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Using Classes

<div class="slide-link"><a href="https://go.raybo.org/2E0m"><i class="fab fa-slideshare"></i> go.raybo.org/2E0m</a></div>

> >

In the same way that you can use inline styles, Vue lets you control how classes are added and deleted in your apps in different ways.


---

# Binding classes

Connect classes to variables

```html
<div v-bind:class="{ myClass: myBool }"></div>
```
- `v-bind` optional
- Control state
- Quote hyphenated classes


> >

Class-binding means connecting your classes to the variables in the data section of your script. 

The variables in that section is sometimes called the state of your app.

Just as you'd expect, you can use the `v-bind` directive with the `class` attribute, and of course, the `v-bind` keyword is optional, so you can just use `:class`

This is a simple way of toggling a class on and off depending on the value of a bool variable.

So, we could assign this to a class named `lead`, which is a valid class from the bootstrap framework class, or a class named `display-2`. If the class has a hyphen, then you need to put the names in quotes because hypens aren't valid in JavaScript names.

---

# Using Objects

```html
<div class="myClass" :class="{ 'class-a': boolA, 'class-b': boolB }"></div>
```
```js
data() {
  return {
    boolA: true,
    boolB: false
  }
}
```

```html
<div class="myClass class-a"></div>
```

> >

You don't need to pass a single value, it can be an object with a list of bool variables, whose values will toggle the different classes.

You can also have add a `class` attribute in your HTML tag while using a variable or object. What would happen is that myClass here would always be applied and the other classes would be added or removed depending on the values of the variables..

So if we had an example like this, it would render a `div` tag with the `class` named `myClass`. Because `boolOne` is `true`, then the `div` would have the `class-a` class as well, but not the `class-b` class.

---

# Classes as data

```html
<div class="myClass" :class="myObject"></div>
...
data() {
  return {
    myObject: { 
      'class-a': true,
      classB: false
    }
  }
}
```

> >

If you're passing along a lot of variables, it might be more convenient to create a separate object in your data section, which will make thing easier to find and maintain.

JavaScript doesn't allow hypens in variable names, so if the class name doesn't have a hyphen, you don't need to use the quotes on the left part of the statement.


---

# Computed Properties

```js
<div :class="myObject"></div>
...
data() {
  return {
    myToggle: true,
    myBool: false,
    myVar: null
  }
},
computed: {
  myObject() {
    return {
      active: this.myToggle && !this.myBool,
      'other-class': myVar >= 50
    }
  }
}
```

> >

You don't have to pass along the objects directly , you can pass along objects as computed properties, that is a powerful pattern that lets you do some computation on each of the classes. 



---

# Arrays

```js
data() {
  return {
    classVarA: 'lead',
    classVarB: 'badge-primary',
    myBool: true,
    myVar: 30
  }
}
```

```html
<div :class="[classVarA, classVarB]"></div>
```
```html
<div :class="[classVarA, myVar > 50 ? 'badge-primary':'badge-secondary]"></div>
```
```html
<div :class="[classVarA, {'badge-primary': myBool}]"></div>
```


<a class="tip" href="https://go.raybo.org/2E0l" target="_blank"><code class="code-exciting">Docs</code><span>go.raybo.org/2E0l</span></a>

> >

You can pass along an array to the class directive and then use variables as values or you can use ternary statements, which are shortcuts to if then else statements.

You can even use objects inside arrays and sometimes that can be shorter and more maintainable than a series of ternary statements.

There's quite a lot of options for working with classes in Vue.js, here's where you can find out more info.

---

<!-- .slide: data-state="layout-title" data-transition="zoom" class="bg-dark"-->

# Practice

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://go.raybo.org/2E0k" target="_blank">Problem<span>go.raybo.org/2E0k</span></a>
  <a type="button" class="animate__animated animate__zoomInDown tip btn btn-lg btn-royal text-white" href="https://go.raybo.org/2ENu" target="_blank">Diff<span>go.raybo.org/2ENu</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://go.raybo.org/2E0M" target="_blank">Solution<span>go.raybo.org/2E0M</span></a>
</div>

1. Modify `cart` button to use classes
1. Use a variable to control classes
1. Try a computed property

> >

Let's try using classes instead of inline styles on the cart button.
Try using an object to control how the classes work.
Use a computed class

