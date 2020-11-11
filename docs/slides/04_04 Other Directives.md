<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Lifecycle Events

<div class="slide-link"><a href="URL"><i class="fab fa-slideshare"></i> URL</a></div>

> >

Sometimes you'll want to take care of things at certain 


---

# Binding classes

Connect classes to variables

```html
<div v-bind:class="{ myClass: myBoolean }"></div>
```
- `v-bind` optional
- Control state
- Toggle classes on/off


> >

Class-binding means connecting your classes to the variables in the data section of your script. 

The variables in that section is sometimes called the state of your app.

Just as you'd expect, you can use the `v-bind` directive with the `class` attribute, and of course, the `v-bind` keyword is optional, so you can just use `:class`

This is a simple way of toggling a class on and off depending on the value of a boolean variable.

So, we could assign this to a class named `lead`, which is a valid class from the bootstrap framework class, or a class named `display-2`. If the class has a hyphen, then you need to put the names in quotes because hypens aren't valid in JavaScript names.

---

# Using Objects

```html
<div class="myClass" :class="{ 'class-one': booleanOne, 'class-two': booleanTwo }"></div>
...
data() {
  return {
    booleanOne: true,
    booleanTwo: false
  }
}
```

```html
<div class="myClass class-one">
```

> >

Because this is JavaScript, you don't need to pass a single value, it can be an object with a list of boolean variables, whose values will toggle the different classes.

You can also have add a `class` attribute in your HTML tag while using a variable or object. What would happen is that myClass here would always be applied and the other classes would be added or removed depending on the values of the variables..

So if we had an example like this, it would render a `div` tag with the `class` named `myClass`. Because `booleanOne` is `true`, then the `div` would have the `class-one` class as well, but not the `class-two` class.

---

# Classes as data

```html
<div class="myClass" :class="myObject"></div>
...
data() {
  return {
    myObject: { 
      'class-one': true,
      classTwo: false
    }
  }
}
```

> >

If you're passing along a lot of variables, it might be more convenient to create a separate object in your data section, which will make thing easier to find and maintain.

JavaScript doesn't allow hypens in variable names, so if the class name doesn't have a hyphen, you don't need to use the quotes on the left part of the statement.


---

# Classes as Computed Properties

```js[1|4|5]
<div class="myClass" :class="myObject"></div>
...
data() {
  return {
    myObject: { 
      'class-one': true,
      'class-two': false
    }
  }
}
```





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

<a class="tip" href="https://mzl.la/36EDIhg" target="_blank"><code class="code-exciting">Docs</code><span>mzl.la/36EDIhg</span></a>

> >

You can add one or more modifiers that control how the events are handled. These events are similar to the options you'd pass to a javascript event listener. So for example you can use prevent to stop a form from submitting.

You can pass along multiple modifiers, but be careful because the order makes a difference.

For more information look at the documentation for event listener parameters.

---

# Key Modifiers

<code class="code-primary">.enter</code> <code class="code-primary">.tab</code> <code class="code-primary">.delete</code> <code class="code-primary">.esc</code><br><code class="code-primary">.space</code> <code class="code-primary">.up</code> <code class="code-primary">.down</code> <code class="code-primary">.left</code> <code class="code-primary">.right</code>

<code class="code-royal">ctrl</code> <code class="code-royal">alt</code> <code class="code-royal">shift</code> <code class="code-royal">meta</code>

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

<a class="tip" href="https://bit.ly/3npgqSo" target="_blank"><code class="code-exciting">Docs</code><span>bit.ly/3npgqSo</span></a>

---

<!-- .slide: data-state="layout-title" data-transition="zoom" class="bg-dark"-->

# Practice

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://bit.ly/3iGUAWU" target="_blank">Problem<span>bit.ly/3iGUAWU</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://bit.ly/2F92Lh1" target="_blank">Solution<span>bit.ly/2F92Lh1</span></a>
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
