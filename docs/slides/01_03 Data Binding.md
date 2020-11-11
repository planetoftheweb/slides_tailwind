<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Binding with Directives

<div class="slide-link"><a href="https://go.raybo.org/2Cjn"><i class="fab fa-slideshare"></i> go.raybo.org/2Cjn</a></div>

> >

In Vue.js, you don't use double curly braces inside html tags. Instead we use a directive that looks like an HTML attribute when we want to bind...or connect a variable to an HTML tag.

---

# Regular HTML

```html
<img src="image.png" alt="Some Image" />
```

- Mustaches `{{imgSrc}}` don't work

> >

This is the way a typical attribute would look in HTML a name and then a value. When you first get started, you might be tempted to try to use the expression syntax with the double curly quotes.

Type in: `{{imgSrc}}` instead of img.png

But that won't work. The mustache syntax doesn't work inside tag attributes, you have to use different syntax.

---

# Using Directives

```html
<img v-bind:src="imgSrc" alt="Some Image" />
```

- The `v-bind:id="expression"` directive

> >

In attributes we have to use something called a directive. This is a fancy word for a command that is understood by Vue.js and handles some  functionality.

In this case, we using this directive to bind...or connect the attribute like `src` to a variable in our Vue code. So, the page would display whatever is in the `imgSrc` variable

You can bind to lots of different attributes using this syntax. You can see the formula here `v-bind`, then some `id` like `src` and an expression. So you can add more than just a variable value, but a calculation or some sort if you need to.

---

# Shortcut to v-bind

```html
<img :src="myVariable" alt="Some Image" />
```

> >

There's a shortcut to v-bind that removes the keyword and just uses a colon instead. It's so much easier to write that you'll probably never USE the v-bind keyword.

---

# Directives

- Attributes with `v-` prefix
- Take arguments (v-**bind**)
- Single JavaScript expressions
- Reactive Binding

<a class="tip" href="https://go.raybo.org/2Cji" target="_blank"><code class="code-exciting">Docs</code><span>go.raybo.org/2Cji</span></a>

> >

v-bind is part of a family of commands called directives. Here's some of the features.

They look like attributes and all start with the keyword v-dash

They take arguments, so for example the keyword bind is an argument, but there are lots of others.

Normally they expect single javascript expressions with a couple of exceptions like the `v-for` and `v-on` directives. This means that the formulas you add here can't be very complicated. However they can and often do use the ternary operator, which is a shortened if then else statement. If you're not familiar with that don't worry, keep watching and you'll get plenty of experience with it.

The job of directives is to provide Vue's Reactive Binding feature. This means that Vue modifies the DOM for you when the value of a variable changes magically.

That's enough about directives for now, although there are lots of other options. For a full list, check out this URL for more info.

---

<!-- .slide: data-state="layout-title" data-transition="zoom" class="bg-dark"-->

# Practice

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://go.raybo.org/2Cjw" target="_blank">Problem<span>go.raybo.org/2Cjw</span></a>
  <a type="button" class="animate__animated animate__zoomInDown tip btn btn-lg btn-royal text-white" href="https://go.raybo.org/2Cjx" target="_blank">Diff<span>go.raybo.org/2Cjx</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://go.raybo.org/2Ck0" target="_blank">Solution<span>go.raybo.org/2Ck0</span></a>
</div>

1. Add an `img` tag
1. Use `v-bind` with `imgSrc` variable
1. Try the shortcut `:src` version
1. Add `:alt` with the `name` variable

**Bonus:** Add `img-fluid` bootstrap class

> >

I've created a codepen for you with this starter code for you to practice.

First, Add an image tag on underneath the heading.

Use the v-bind directive using the `imgSrc` variable from the data

You can get rid of the v-bind keyword and use the shortcut.

Don't forget to add the alt attribute using the name variable.
