<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Conditional Data

<div class="slide-link"><a href="https://go.raybo.org/2CsS"><i class="fab fa-slideshare"></i> go.raybo.org/2CsS</a></div>

> >

Vue has a few different directives that display content depending on the value of variables or formulas.

---

# Conditionals

Family of conditional statements

<code class="code-primary">v-if</code> <code class="code-primary">v-else</code> <code class="code-primary">v-else-if</code> <code class="code-primary">v-show</code>

> >

There's a whole family of directives similar to javascript statements, but designed to work on your templates instead. Let's go through them.

---

# Test with **v-if**

Test statement's truthiness

```html
<div v-if="myBool">I made it!</div>
```

> >

The `v-if` directive will display an element if the expression is true.

---

# Otherwise **v-else**

Alternative statements

```html
<div v-if="myBool">I made it!</div>
<div v-else="myBool">Awww shucks!</div>
```

> >

`v-else` will display an alternative statement if the expression is false.

---

# Optionally **v-else-if**

Test for different values

```html
<div v-if="myMeal=='breakfast'">Cereal or Yogurt</div>
<div v-else-if="myMeal=='lunch'">Tomato Soup with lentils</div>
<div v-else-if="myMeal=='dinner'">Pork Chops and Rice</div>
<div v-else>How about a nice snack!</div>
```

> >

`v-else-if` lets you display different elements depending on the value of a variable. You start off with an `v-if` statement and then use one or more `v-else-if` statements. You can finish it off with an `v-else` for any other values.

---

# Containers with **template**s

Hide containers using `<template>`

```html
<div v-if="myBool">
  <h1>Congrats</h1>
  <p>You made it!</p>
</div>
```

```html
<template v-if="myBool">
  <h1>Congrats</h1>
  <p>You made it!</p>
</template>
```

> >

If you want to show a group of elements, but without a container, you can use a template tag with an if statement. In the first case, the div would should with the headline and paragraph, but the second shows only the headline and paragraph.

---

# Hide with **v-show**

Always rendered `v-if`

```html
<div v-show="myBool">I'm hiding!</div>
```

- Only hides `display`
- Doesn't support `template`, or `v-else`

> >

Another statement you can use, v-show is similar to v-if with some important differences.

v-show only hides the display property of the elememt, so it will render the element always, just not show it.

v-show also doesn't support the template tag or v-else. However it can be useful if you're creating an element whose display you want to toggle often.

---

# **v-if** with **v-for**

Not recommended

```html
<div v-for="myAlias in myArray" v-if="myAlias.myBool">{{ myAlias.myBool }}</div>
```

```html
<template v-for="myAlias in myArray">
  <div v-if="myAlias.myBool">{{ myAlias.myBool }}</div>
</template>
```

<a class="tip" href="https://go.raybo.org/2Crx" target="_blank"><code class="code-exciting">Docs</code><span>go.raybo.org/2Crx</span></a>

> >

Vue doesn't recommend using v-for and v-if together on the same element. v-if has a higher priority than v-for so in this first example the v-if statement wouldn't have access to the variable myBool.

You can fix this by splitting the conditions. If you don't need to output the tag, you can use a template element.

---

<!-- .slide: data-state="layout-title" data-transition="zoom" class="bg-dark"-->

# Practice

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://go.raybo.org/2Cry" target="_blank">Problem<span>go.raybo.org/2Cry</span></a>
  <a type="button" class="animate__animated animate__zoomInDown tip btn btn-lg btn-royal text-white" href="https://go.raybo.org/2CsF" target="_blank">Diff<span>go.raybo.org/2CsF</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://go.raybo.org/2Cs9" target="_blank">Solution<span>go.raybo.org/2Cs9</span></a>
</div>

1. `v-if` to show `products` cheaper than `$99`
1. Use a `<template>` tag
1. Try `v-if` vs `v-show`
1. Use `v-else` and `v-else-if` to show badges<br>depending on price

> >

Here's a good practice project. Here's the link to the starting code.

We're starting with a longer list of products, but other than that the template looks pretty similar. I've added a few badges that you're going to need for the exercise.

Here's the plan: try using `v-if` to show only the products that are cheaper than 99 dollars.

You'll need a container, so try using a `<template>` tag that won't show up in your HTML.

Once you implement it, try changing your `v-if` to a `v-show` and see what happens

Finally, use `v-else` and `v-else-if` to show the badges depending on price. Say that badges more expensive than $90 get a premier badge, between $10-90 get a value badge and anything lower gets a sale badge.

Before you can pause the video to try it and then see my solution. Here's where you can find my solution.
