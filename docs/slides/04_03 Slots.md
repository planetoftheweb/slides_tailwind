<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Slots

<div class="slide-link"><a href="https://go.raybo.org/2Gzy"><i class="fab fa-slideshare"></i> go.raybo.org/2Gzy</a></div>

> > 

Slots are a special element you can use within components that can make it easier to create templated content.

---

# Basic Slots

**On Parent**
```html
  <my-component>Some Content</my-component>
```

**In Component Template**

```html
  <div><slot>Default</slot></div>
```

<a class="tip" href="https://go.raybo.org/2GF3" target="_blank"><code class="code-exciting">Try it</code><span>go.raybo.org/2GF3</span></a>

> >

In the parent component, you place some content in between the custom component tags like you would in an HTML tag and that will automatically be available to you in a slot element inside the template. It doesn't have to be just text, you can add other content including other components

Inside the template, you simply use a slot tag and the content will be placed there. Also, the slot  has access to any variables where it is inserted, inside the parent component.

In the component template, inside the slot tag, you can pass along some text that will render if nothing is passed to the component.

---

# Named Slots

**On Parent Instance**

```
  <my-component>
    <template v-slot:header>Header Text</template>
    <template v-slot:default>Default Text</template>
    <template #footer>Footer Text</template>
  </my-component>

```
**Component Template**
```
  <slot name="header"></slot>
  <slot></slot>
  <slot name="footer"></slot>

```

<a class="tip" href="https://go.raybo.org/2Gch" target="_blank"><code class="code-exciting">Try it</code><span>go.raybo.org/2Gch</span></a>

> >

You can also create slots that have names using the `v-slot` property. You'll need to use the template tag and give them a name.

If you're passing a lot of slots, you can also identify the default text with the name default.

Like other directives, there's a shortcut you can use by using a hashtag and then the name of the slot.

In the component template, you use the slot with a name attribute and pass along the name of the slot. You don't need to pass along the name of the default slot.

---

# Passing Props

**On Parent Instance**

```
  <my-component v-bind:pass-down=parentVar>
```
**Component Script**
```
  props: ['passDown'],
```

**Component Template**
```
  <h1>{{passDown}}</h1>
```



<a class="tip" href="https://go.raybo.org/2HGW" target="_blank"><code class="code-exciting">Try it</code><span>go.raybo.org/2HGW</span></a>

> >

There's a couple of ways to pass information with slots. You can pass something down to a slot and also receive some data from the slots. It's a bit hard to understand.

This should feel pretty familiar. You can use a prop on the parent that uses the component to send something down.

A couple of things to note. You can pass along a straight string if you just use a normal looking prop without the colo like pass-down="Some String".

You can also use v-bind and it's shortcut using just the colon to pass along a variable or expression. Notice that if I'm using more than one word, I should use kebob case here with the hyphen. This is just like an html property.

In the component script, I need to receive this as a prop. Here, I have to use camelCase, not kebob case, since this is javascript.

Then in the template, I can just use this variable.

---

# Scoped Slots

**On Parent Instance**

```
<template v-slot="slotData">
  <p>{{slotData.mySlotVar}}</p>
</template>
```

**Component Template**
```
  <p><slot v-bind:mySlotVar="componentVar"></slot></p>
```



<a class="tip" href="https://go.raybo.org/2Gmu" target="_blank"><code class="code-exciting">Try it</code><span>go.raybo.org/2Gmu</span></a>

> >

You can also pass something from one of the slots back up to the instance.  This is called a scoped slot. 

Ignore  what's happening on the parent for now. It's better if you think of it backwards.

Looking at the component template, you see that we're using v-bind to create a prop that's going to be passed to the instance. Just like before this prop can just send some text. Here we're passing along a variable that is inside the component script called componentVar.

Back to the parent instance on top. To receive this, we can create a template with a v-slow parameter and create a variable we're calling slotData for anything we send from the slot.

The variable called mySlotVar will be inside this variable as a property.


I know, you gotta see this. Here's an example. Honestly, this is one that you're going to want to spend some quality time playing with.

---

# Lone Slot Shortcut

```
<my-component>
  <template v-slot="slotData">
    ...
  </template>
</my-component>
```

```
<my-component v-slot="slotData">
  ...
</my-component>
```

> >

By the way, if you only have one slot, you can use a shortcut and put the v-slot parameter in the same line as the component call, just don't get too used to it because it doesn't work with multiple slots.


---

<!-- .slide: data-state="layout-title" data-transition="zoom" class="bg-dark"-->

# Practice

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://go.raybo.org/2GzK" target="_blank">Problem<span>go.raybo.org/2GzK</span></a>
  <a type="button" class="animate__animated animate__zoomInDown tip btn btn-lg btn-royal text-white" href="https://go.raybo.org/2Gzw" target="_blank">Diff<span>go.raybo.org/2Gzw</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://go.raybo.org/2GzR" target="_blank">Solution<span>go.raybo.org/2GzR</span></a>
</div>

1. Create a `custom-alert` component
1. Include option to specify color
1. Include option to close alert
1. Add alert when `cartTotal > 100`

> >

In this example, we're creating an alert component that will show up when the cart total is above 100. It will be flexible enough to receive a color as well as an option parameter to show a close button.