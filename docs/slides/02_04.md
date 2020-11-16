<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Lifecycle Hooks

<div class="slide-link"><a href="https://go.raybo.org/2DKO"><i class="fab fa-slideshare"></i> go.raybo.org/2DKO</a></div>

> >

Sometimes you'll need to take care of things at different points in the life of a Vue application, and to do that, you use LifeCycle hooks.

---

# Events


<code class="code-primary">beforeCreate</code> <code class="code-primary">created</code> <code class="code-primary">beforeMount</code> <code class="code-primary">mounted</code> <code class="code-primary">beforeUpdate</code> <code class="code-primary">updated</code> <code class="code-royal">activated</code> <code class="code-royal">deactivated</code> <code class="code-primary">beforeUnmount</code> <code class="code-primary">unmounted</code> <code class="code-success">errorCaptured</code> <code class="code-success">renderTracked</code> <code class="code-success">renderTriggered</code>


> >

Here's all of the lifecycle events that are available to you. Some of these in blue are available to you during the regular lifecycle of your Vue App and some deal with dynamic components in purple.

So, for example, if you need to do something like load some data after the component has been initialized but not rendered, you could use the `created` hook in your application.

What you use depends on what you need access to, so although more than one of the methods might work for your needs, you need to be mindful of what's available at each level.

---

<!-- .slide: data-state="layout-scroll-image" -->
  <img src="https://v3.vuejs.org/images/lifecycle.png" alt="Lifecycle Methods">

> >

Here's a visual representation of when most of the hook events take place. This is pretty technical, but Vue does a great job giving you access to just about every useful point in your app's lifecycle.

---

# **this** context

**not this**
```js
created: () => this.doSomething()
```

**this**
```js
created() { this.doSomething() } 
```

> >


Here's a couple of things to watch out for. 

In lifecycle hooks, the value of `this` is bound to the hook and that can create a problem with es6's arrow functions, which change the meaning of the this keyword, so although it's tempting, remember to use regular functional syntax.

---

# Where?

```js
  data() { ... },
  created() { ... },
  beforeMount() { ... }
```

<a class="tip" href="https://go.raybo.org/2DJH" target="_blank"><code class="code-exciting">Docs</code><span>go.raybo.org/2DJH</span></a>

> >

Lifecycle hooks are created at the same level of data just like methods and computed properties...the order isn't important, just that it's at the same level.

This is one place where you're going to want to look at the docs to make sure you have what you need from Vue.js.

---

<!-- .slide: data-state="layout-title" data-transition="zoom" class="bg-dark"-->

# Practice

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://go.raybo.org/2DK7" target="_blank">Problem<span>go.raybo.org/2DK7</span></a>
  <a type="button" class="animate__animated animate__zoomInDown tip btn btn-lg btn-royal text-white" href="https://go.raybo.org/2DK9" target="_blank">Diff<span>go.raybo.org/2DK9</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://go.raybo.org/2DK3" target="_blank">Solution<span>go.raybo.org/2DK3</span></a>
</div>

1. Clear out `products`
1. Create a `lifecycle hook`
1. Use javascript's <a class="tip" href="https://go.raybo.org/2DKH" target="_blank"><code class="code-exciting">Fetch API</code><span>go.raybo.org/2DKH</span></a>
1. Load from<br>`https://hplussport.com/api/products/order/price`
1. Try different hooks

**bonus:** Show cart `total` and `qty` on menu


> >

For this project, we're goin to clear out our products array, which manually lists all the products.

We'll create a lifecycle hook in our application

You can use JavaScript's fetch API to load from this URL.

You should try different hooks to see which ones work. Try at least created and keep going down the list until it no longer works.