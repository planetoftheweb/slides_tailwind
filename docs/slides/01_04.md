<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Rendering Lists

<div class="slide-link"><a href="https://go.raybo.org/2CqA"><i class="fab fa-slideshare"></i> go.raybo.org/2CqA</a></div>

> >

One of the most useful things that vue can help you with is rendering lists of data.

---

# v-for directive

```html
<div v-for="myItem in myElements">{{ myItem.myName }}</div>
```

> >

To do that, we use a directive called `v-for`. Here's what it looks like. The `v-for` directive lets you create a temporary variable, which I'm calling here `myItem` from a number, an array or an object that I'm calling here `myElements`. Then you can use that temporary variable in an expression or a more complicated template as you loop through each of the values in myElements.

---

# Using a Number

```html
<div v-for="myNumber in 10">{{ myNumber }}</div>
```

> >

If you just want to repeat a something a few times, you can use a number for the element and then the loop will repeat the expression or template that many times. 

---

# Using of

```html
<div v-for="myAlias of myArray">{{ myAlias.myName }}</div>
```

> >

You can use `of` instead of `in` so that it looks more like how JavaScript's similar command would be written. You'll probably see the `in` notation more often when looking at Vue code.

---

# Getting an Index

```html
<div v-for="(myAlias, myIndex) in myArray">
  {{ myIndex }}: {{ myAlias.myName }}
</div>
```

> >

You can add an index variable and this will give you a number of each instance of the array. Like with any other array, the number starts with 0 instead of 1.

---

# Providing a Key

```html
<div v-for="myAlias in myArray" :key="myAlias.id">{{ myAlias.myName }}</div>
```

> >

Let's go back to arrays. Vue.js will keep track of changes to your list, but it uses a strategy where it patches elements displayed in place without moving them. If you want Vue to be more precise, it's a good idea to include a unique key for each element separately.

---

# Looping through Objects

```html
<div v-for="(myAlias, myKey, myIndex) in myObject">
  {{ myIndex }} : {{ myKey }} -- {{ myAlias }}
</div>
```

> >

You can use v-for to loop through an `Object` instead of an `Array` and that would let you navigate through all the properties in an object, which can be useful.

If you include a second parameter, you can use that to output the key of the object, a third parameter will become the index.

**Note:** Just like with JavaScript, the order of the object's keys isn't guaranteed to be consistent.

---

# Using a template

```html
<ul v-for="myAlias in myObject">
  <li>{{myAlias}}</li>
</ul>
```

```html
<template v-for="myAlias in myObject">
  <span>{{myAlias}}</span>
</template>
```

> >

Because you're rendering lists of items, it's natural to use HTML list tags which have a parent UL or OL container. However, sometimes you just want to render items without having to display a parent container. In that case you can use an html template tag, which will not be rendered. Instead, you'll get copies of the content inside.

---

# Array Change Detection

<span class="h3 text-secondary font-weight-bold">Mutation</span><br><code class="code-primary">push()</code> <code class="code-primary">pop()</code> <code class="code-primary">shift()</code> <code class="code-primary">unshift()</code><br><code class="code-primary">splice()</code> <code class="code-primary">sort()</code> <code class="code-primary">reverse()</code>

<span class="h3 text-secondary font-weight-bold">Replacement</span><br><code class="code-royal">filter()</code> <code class="code-royal">concat()</code> <code class="code-royal">slice()</code>

<a class="tip" href="https://go.raybo.org/2CrM" target="_blank"><code class="code-exciting">Docs</code><span> go.raybo.org/2CrM</span></a>

> >

v-for supports javascript mutation methods, which change arrays and trigger updates to your project. You can also use replacement methods like filter and concat, which won't change the array.

---

<!-- .slide: data-state="layout-title" data-transition="zoom" class="bg-dark"-->

# Practice

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://go.raybo.org/2CrN" target="_blank">Problem<span>go.raybo.org/2CrN</span></a>
  <a type="button" class="animate__animated animate__zoomInDown tip btn btn-lg btn-royal text-white" href="https://go.raybo.org/2CrO" target="_blank">Diff<span>go.raybo.org/2CrO</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://go.raybo.org/2CrP" target="_blank">Solution<span>go.raybo.org/2CrP</span></a>
</div>

1. Use `v-for` to repeat 10 times
1. Modify to display `products`
1. Display item number with `index`
1. Pass `products.id` as a `key`

**Bonus:** Change the displayed list so that it starts with 1 instead of 0.

> >

Let's take a look at how you can practice this. Let's take a look at some sample code.

I've prepared some code with a products array in the data object. Each of the elements has several name/value pairs like the name and price of the item. There's also a unique ID for each of the products.

Our template has a div with an id of display-list which is where we'll add our v-for statement.

Start by using the v-for directive to repeat our template 10 times.

Modify the template so that it displays the products array in the javascript section.

Use an index to display an item number

Pass the id in the products array as a key to each element.

As a bonus, modify list so that the item number starts with a 1 instead of a 0
