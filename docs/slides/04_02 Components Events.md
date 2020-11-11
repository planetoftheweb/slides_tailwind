<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Component Events

<div class="slide-link"><a href="https://go.raybo.org/2G4t"><i class="fab fa-slideshare"></i> go.raybo.org/2G4t</a></div>

> > 

When you create an event inside a component, it can trigger something in the parent and passes along some information as well.

---

# Events on Parents

```html
@evt=$emit('myEvent', myValue)
```

```html
@my-event=doSomething
```

-  emits: ['my-event']
- `@my-event=$event` value
- `@my-event=doSomething` method


<a class="tip" href="https://go.raybo.org/2FsC" target="_blank"><code class="code-exciting">Try it</code><span>go.raybo.org/2FsC</span></a>

> >

To pass an event from a child to a parent component, you can use the special $emit variable in the child template and use a regular javascript event like a click to trigger a new custom event in the parent component.

You can include an emits property with the list of events that the component is sending up. This will allow you to validate things.

In the parent template, you add the custom event like a regular event to the component. In the parent, you can then execute a local method or something simpler.

---

# **v-model** in Components

```html
  <input v-model="myVar" />
```

**Translates to**

```html
  <input :value="myVar" @input="myVar = $event.target.value" />
```

**Passed to Custom Component**

```html
  <custom :model-value="myVar" @update:model-value="myVar = $event"></custom>
```

> >

If you want to use v-model with custom components, then there's a bit more setup that you have to do. You have to be more detailed inside your custom component.

Here's the scoop. When you use v-model directive in an input field it works like a shortcut, behind the scenes, Vue is doing a few things for you.

First, it's passing along the variable as a prop and then it's looking for an input event and setting the value of your variable, as the value of the input.

The same thing will happen when you add v-model to a component, however, the value gets passed as a prop called `model-value` and an update event is expected from the custom component. You can then use the $event variable to populate your local variable.


---

# **v-model** in Custom


**Receive modelValue as Prop**

```js
  props: ['modelValue']
```

**Pass it in $emit**

```html
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
```

<a class="tip" href="https://go.raybo.org/2Fsl" target="_blank"><code class="code-exciting">Try it</code><span>go.raybo.org/2Fsl</span></a>


<a class="tip" href="https://go.raybo.org/2FtB" target="_blank"><code class="code-exciting">Docs</code><span>go.raybo.org/2FtB</span></a>

> >

That means that inside our custom component, we need to write it out more explicitly. First, we'll need to receive the modelValue as a prop.

And then we need to emit the proper event and pass along the value. This is definitely a good time for an example.


---

<!-- .slide: data-state="layout-title" data-transition="zoom" class="bg-dark"-->

# Practice

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://go.raybo.org/2FvB" target="_blank">Problem<span>https://go.raybo.org/2FvB</span></a>
  <a type="button" class="animate__animated animate__zoomInDown tip btn btn-lg btn-royal text-white" href="https://go.raybo.org/2FwT" target="_blank">Diff<span>go.raybo.org/2FwT</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://go.raybo.org/2FwR" target="_blank">Solution<span>go.raybo.org/2FwR</span></a>
</div>

1. Create a `product` component
1. Emit an `addToCart` method 

**Bonus:** Clean up styles

> >

In this exercise we're going to create a new product component which has our Plus button.

We'll also need to emit an Add To Cart method back up to the main application.

Finally, this would be a good time to clean up a lot of the syles we created earlier.