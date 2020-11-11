<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Events

<div class="slide-link"><a href="https://go.raybo.org/2Czb"><i class="fab fa-slideshare"></i> go.raybo.org/2Czb</a></div>

> >

Let's take a look at how events work in Vue.js


---

# Events with **v-on**

```html
<div v-on:event="expression"></div>
```

> >

The `v-on` directive can listen to the DOM and run some JavaScript when events are triggered.

The expression can be either regular javascript or a call to a method.

The event is a normal javascript event like as @click or @keyup or @blur

---

# **@** Shortcut

```js[1|4|5]
<div @event="myMethod()"></div>

methods: {
  myMethod(myEvent) {
    console.log(myEvent.target)
  }
}
```

> >

Although the directive is technically `v-on`, you can shorten it by using the AT symbol and that's the way you'll normally see it used. If you use a method, the parenthesis are optional.

When called, it automatically passes along information about the event

...you can use that inside the method.

---

# Passing Arguments

```html[1|4]
<div @event="myMethod(someVar, $event)"></div>
...
methods: {
  myMethod(myVar, myEvent) {
    console.log(myEvent.target)
  }
}
```

> >

Of course you can also pass variables to the method if you want. If you still need to pass event info, you can send it with a special variable callend `$event`.

You can then capture that event into a javascript variable on your function.

---

# Multiple Methods

```
<div @event="firstMethod, secondMethod"></div>
```

> >

You can also have an event run multiple methods by separating them like arguments with commas.

---

# Event Modifiers

<code class="code-primary tip  position-relative">.stop<span>Stop propagation</span></code> <code class="code-primary tip  position-relative">.prevent<span>Prevent default behavior</span></code> <code class="code-primary tip  position-relative">.capture<span>Capture an inner element</span></code> <code class="code-primary tip  position-relative">.self <span>Only trigger on self events</span></code><code class="code-primary tip  position-relative">.once<span>Trigger only once</span></code>
<code class="code-primary tip  position-relative">.passive<span>Don't call preventDefault</span></code>

```html
<div @event.stop.prevent="myMethod"></div>
```

<a class="tip" href="https://go.raybo.org/2Czm" target="_blank"><code class="code-exciting">Docs</code><span>go.raybo.org/2Czm</span></a>

> >

You can add one or more modifiers that control how the events are handled. These events are similar to the options you'd pass to a javascript event listener. So for example you can use prevent to stop a form from submitting.

You can pass along multiple modifiers, but be careful because the order makes a difference.

For more information look at the documentation for event listener parameters.

---

# Key Modifiers

<code class="code-primary">.enter</code> <code class="code-primary">.tab</code> <code class="code-primary">.delete</code> <code class="code-primary">.esc</code><br><code class="code-primary">.space</code> <code class="code-primary">.up</code> <code class="code-primary">.down</code> <code class="code-primary">.left</code> <code class="code-primary">.right</code>

<code class="code-royal">.ctrl</code> <code class="code-royal">.alt</code> <code class="code-royal">.shift</code> <code class="code-royal">.meta</code>

```html
<input @keyevent.ctrl.enter="submit" />
```

> >

Some of the key methods have their own special modifiers

**Note:** the meta key is the command key on a mac and the windows key on a PC.

---

# **exact** modifier

<code class="code-primary">.exact</code>

```
<div @event.modifier.exact="myMethod">A</div>

```

```
<button @click.ctrl.exact="myMethod">A</button>

```

> >

There's a special modifier called exact. If you add it to an event, then it will only trigger our script if the combination matches exactly.

For example here, it would only execute myMethod if the ctrl key was pressed when the button was clicked. If you removed the modifier, then the method would only be called if no keys were pressed.

---

# Mouse Modifiers

<code class="code-primary">.left</code> <code class="code-primary">.right</code> <code class="code-primary">.middle</code>

> > You can also check for clicks on specific buttons with the mouse button modifiers.

<div @event.right="myMethod"></div>

<a class="tip" href="https://go.raybo.org/2Czh" target="_blank"><code class="code-exciting">Docs</code><span> go.raybo.org/2Czh</span></a>

---

<!-- .slide: data-state="layout-title" data-transition="zoom" class="bg-dark"-->

# Practice

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://go.raybo.org/2Czj" target="_blank">Problem<span>go.raybo.org/2Czj</span></a>
  <a type="button" class="animate__animated animate__zoomInDown tip btn btn-lg btn-royal text-white" href="https://go.raybo.org/2C-A" target="_blank">Diff<span>https://go.raybo.org/2C-A</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://go.raybo.org/2Czi" target="_blank">Solution<span>go.raybo.org/2Czi</span></a>
</div>

1. Create a `cart` array
1. Click `plus` to add items
1. Display cart items
1. Make cart icon toggle menu

**bonus:** Show cart `total` and `qty` on menu


> >

Here's a good practice project. Here's the link to the starting code.

I have a simpler version of our previous code that displays our items.

First, create a currency filter that formats the number used for pricing so that they all have consistent decimal points. Apply that filter to the pricing of each item.

Next we want to display the amount of items the user has filtered when they change the max price.

However the original array never changes, but you can filter the array based on the choice and calculate the quantity properly.

That means that we'll need to change the array we're using in v-for with our new array.

It also means that we can remove the v-if statement that filters our display.

Use the new filtered array to display a label with the amount of elements based on the value of max.
