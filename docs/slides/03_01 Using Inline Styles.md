<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Inline Styles

<div class="slide-link"><a href="https://go.raybo.org/2Dgs"><i class="fab fa-slideshare"></i> go.raybo.org/2Dgs</a></div>

> >

One of the way to control styles in Vue.js by binding them through the style attribute.

---

# Binding with **:style**

```html
  <div :style="{ color: 'blue', 'font-weight': myWeight, fontSize: mySize + 'em' }">Headline</div>
```

```js
data() {
  return {
    myColor: 'red',
    myWeight: 100,
    mySize: 3
  }
}
```

> >

The style binding is like adding a style tag with some important differences.

You can pass along an object with the style name on the left and either a string on the right, a variable name or a simple formula for the value.

Notice that you can use camel case or `kabob-case` for properties that have hyphens in them. If you want to use kabob-case then you need to put the name in quotes.

---

# Object Notation

```html
  <div :style="myStyles">Headline</div>
```

```js
data() {
  return {
    myStyles: { 
      color: 'blue', 
      fontWeight: 100,
      fontSize: '5em'
    }
  }
}
```

> >

It's definitely cleaner to use object notation if you have a lot of styles.

---

# Array Syntax

```html
  <div :style="[stylesA, stylesB]">Headline</div>
```

```js
data() {
  return {
    stylesA: { 
      color: 'blue',
      bgColor: 'yellow'
    },
    stylesB: { 
      fontWeight: 100,
      fontSize: '5em'
    }
  }
}
```

> >

You can also use array notation on styles and call different objects.

---

# Prefixing

- auto-prefixing (-webkit, -ms, etc)

```html
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

<a class="tip" href="https://go.raybo.org/2Dgt" target="_blank"><code class="code-exciting">Docs</code><span>go.raybo.org/2Dgt</span></a>

> >

Vue.js will automatically prefix the css that your write for you.

On ocassion, you may want further  control, so you can use this object/array combo notation and it will apply whichever prefix the browser supports.


---

<!-- .slide: data-state="layout-title" data-transition="zoom" class="bg-dark"-->

# Practice

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://go.raybo.org/2Dgd" target="_blank">Problem<span>go.raybo.org/2Dgd</span></a>
  <a type="button" class="animate__animated animate__zoomInDown tip btn btn-lg btn-royal text-white" href="https://go.raybo.org/2Dgu" target="_blank">Diff<span>go.raybo.org/2Dgu</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://go.raybo.org/2Dge" target="_blank">Solution<span>go.raybo.org/2Dge</span></a>
</div>

1. Change + button radius to circle
1. Add a green border to + button
1. Modify cart background when cartTotal >=100

> >

Here's a project you can try out.

To get started, change the plus buttons on our cart so that they display as circles as opposed to rounded rectangles.

Also add a green border. Try doing this with embedded object or a separate object variable.

Now change the cart so that if your cart total is larger than or equal to 100 dollars, the cart icon has a red background.

