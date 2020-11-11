<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Components

<div class="slide-link"><a href="https://go.raybo.org/2FmD"><i class="fab fa-slideshare"></i> go.raybo.org/2FmD</a></div>

> > 

Components help you organize a complex project into smaller pieces. It helps you build reusable items.

---

# Creating Components

```js
const App = Vue.createApp({})
App.component('name', { template: `template` })
App.mount('#App')
```

```html
<div id="App"><name></name></div>

```

<a class="tip" href="https://go.raybo.org/2FDf" target="_blank"><code class="code-exciting">Try it</code><span>go.raybo.org/2FDf</span></a>

> >

To create a component, you have to split up our app into two parts, creating the app and mounting the app.

That why, we can use the component method to create a component. You pass along the name of the component, which becomes the name of a tag you can use in the HTML that calls this component.

The components become reusable instances, so you can use them as many times as you want.

---

# Component Options

<code class="code-primary">data</code>
<code class="code-primary">computed</code>
<code class="code-primary">watch</code>
<code class="code-primary">methods</code>
<code class="code-primary">lifecycle hooks</code>

- can be nested
- `global` or `local` registration


> >

You can also use almost every method that you can inside a regular app.

Components can also be used...or nested inside other components.

They can also be added as global components, which is what we did with the previous component, but you can also register them locally.

---

# Receiving Props

```js
App.component('myComponent', { 
  props: ['myProp'],
  template: `{{myProp}}`
})
```

```html
<my-component my-prop="myValue"></my-component>
```

<a class="tip" href="https://go.raybo.org/2FHg" target="_blank"><code class="code-exciting">Try it</code><span>go.raybo.org/2FHg</span></a>

> >

Of course, that button wouldn't be particularly useful without some options, to pass along some information to a component, we use props, which is a shorthand for properties. They look like HTML tag properties and pass along a value to the component

Notice that although the props name in the script is in camel case, you can use it in the template as kebob case with the hyphens and lowercase.

---

# Binding Props

```js
const App = Vue.createApp({
  data() { return { myVar: 'myValue' } }
})

App.component('myComponent', { 
  props: ['myProp'], template: `{{myProp}}`
})
App.mount('#App')
```

```html
<my-component :my-prop="myVar"></my-component>
```


<a class="tip" href="https://go.raybo.org/2FJC" target="_blank"><code class="code-exciting">Try it</code><span>go.raybo.org/2FJC</span></a>

> >

Passing along hard-coded values isn't always optimal, sometimes you want to pass a along a series of values and you can do that using v-bind, of course you can use the colon shortcut and pass along a variable name from the data section.

---

<!-- .slide: data-state="layout-title" data-transition="zoom" class="bg-dark"-->

# Practice

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://go.raybo.org/2FJr" target="_blank">Problem<span>go.raybo.org/2FJr</span></a>
  <a type="button" class="animate__animated animate__zoomInDown tip btn btn-lg btn-royal text-white" href="https://go.raybo.org/2FLs" target="_blank">Diff<span>go.raybo.org/2FLs</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://go.raybo.org/2FKJ" target="_blank">Solution<span>go.raybo.org/2FKJ</span></a>
</div>

1. Rewrite `App` calls
1. Create `Currency` Component
1. Replace template calls

> >

For this exercise, we'll need to modify the application so that it will work with components, so we'll need to separate the creation from the mounting of the app.

Then we're going to recreate the currency method into it's own component

Finaly, we'll replace method calls in our template.

The advantage to putting things in components is that they're reusable and help you organize code into logical pieces.