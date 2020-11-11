<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Transitions

<div class="slide-link"><a href="https://go.raybo.org/2EPv"><i class="fab fa-slideshare"></i> go.raybo.org/2EPv</a></div>

> >

Of course you can animate using CSS styles and classes, but Vue gives you additional feature that makes items easier to animate with transitions.


---

# **transition** tag

```html
  <transition name="transitionName"></transition>
```
- `name` parameter
- Creates classes
- Trigger animations


> >

The transition tag gives you a way to modify your apps when items are inserted, updated or removed from your page. You wrap the transition tag around the element you wish to animate.

The name parameter is optional, but if you add it, it will become a prefix in a group of transition classes that are automatically created during the life of your content.

These will allow you to control the items are animated based on different triggers that happen in the lifecycle of the items.



---

# Enter/Leave Classes

<code class="code-primary tip position-relative">.v-enter-from<span>Before element inserted</span></code>
<code class="code-primary tip position-relative">.v-enter-active<span>During entering phase</span></code> 
<code class="code-primary tip position-relative">.v-enter-to<span>After element inserted</span></code><br> 
<code class="code-primary tip position-relative">.v-leave-from<span>When leaving triggered</span></code> 
<code class="code-primary tip position-relative">.v-leave-active<span>During leaving phase</span></code> 
<code class="code-primary tip position-relative">.v-leave-to<span>After leaving triggered</span></code> 


- `v-` default prefix
- `enter` vs `leave` triggers
- `from` vs `to` triggers
- `active` sequences

<a class="tip" href="https://go.raybo.org/2EEA" target="_blank"><code class="code-exciting">Try it</code><span>go.raybo.org/2EEA</span></a>

> >

There are six classes you can use and here they are.

- if you don't include a name parameter in the transition tag, then the classes will have a default prefix of `v-`, but if you do, the v will be replaced by with whatever you placed in the name parameter, that way you can have more than one transition playing.

- There are two events that you're interested in when animating, wether the items you're animating are entering the scene, or leaving the scene.

- Then the `from` option option lets you set up the beginning state of your animation, the `to` option lets you control the ending frame of your animation.

- The `active` state lets you control how that animation will play, so this is a good place to set up easing curves.

---

# Enter/Leave Properties

<code class="code-primary tip">enter-from-class<span>Before element inserted</span></code>
<code class="code-primary tip">enter-active-class<span>During entering phase</span></code> 
<code class="code-primary tip">enter-to-class<span>After element inserted</span></code><br>
<code class="code-primary tip">leave-from-class<span>When leaving triggered</span></code> 
<code class="code-primary tip">leave-active-class<span>During leaving phase</span></code> 
<code class="code-primary tip">leave-to-class<span>After leaving triggered</span></code> 

```html
<transition property-class="some-class">
  ...
</transition>
```
- Libraries [animate.css](https://animate.style/)

<a class="tip" href="https://go.raybo.org/2EE5" target="_blank"><code class="code-exciting">Animate.css</code><span>animate.style</span></a>
<a class="tip" href="https://go.raybo.org/2EEM" target="_blank"><code class="code-exciting">Try it</code><span>https://go.raybo.org/2EEM</span></a>

> >

If you'd rather work with existing classes instead of manually creating them, you can use a set of properties on the template to call them.

They go inside the transition component tag as properties and link to an existing class.


---

# Enter/Leave Hooks


<code class="code-primary tip">@before-enter<span>Before element inserted</span></code>
<code class="code-primary tip">@enter<span>During entering phase</span></code> 
<code class="code-primary tip">@after-enter<span>After element inserted</span></code> 
<code class="code-royal tip">@enter-cancelled<span>After element inserted</span></code><br>
<code class="code-primary tip">@before-leave<span>When leaving triggered</span></code> 
<code class="code-primary tip">@leave<span>During leaving phase</span></code> 
<code class="code-primary tip">@after-leave<span>After leaving triggered</span></code> 
<code class="code-royal tip">@leave-cancelled<span>After element inserted</span></code> 

```html
<transition @hook="myMethod">
  ...
</transition>
```

```js
myMethod(el, done) {
  done()
}
```

<a class="tip" href="https://go.raybo.org/2EJV" target="_blank"><code class="code-exciting">Try it</code><span>go.raybo.org/2EJV</span></a>

<a class="tip" href="https://go.raybo.org/2E0l" target="_blank"><code class="code-exciting">Docs</code><span>go.raybo.org/2E0l</span></a>

> >

There's a full set of events that you can use in your templates and scripts to take care of things throughout the animation evens.

The events will receive an `el` parameter and some events can pass along a `done` callback in certain instances.


---

<!-- .slide: data-state="layout-title" data-transition="zoom" class="bg-dark"-->

# Practice

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://go.raybo.org/2EMo" target="_blank">Problem<span>go.raybo.org/2EMo</span></a>
  <a type="button" class="animate__animated animate__zoomInDown tip btn btn-lg btn-royal text-white" href="https://go.raybo.org/2Dgu" target="_blank">Diff<span>go.raybo.org/2Dgu</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://go.raybo.org/2ELO" target="_blank">Solution<span>go.raybo.org/2ELO</span></a>
</div>

1. Animate the `cart` dropdown
1. Use the `<transition>` tag
1. Add `name` property to the transition
1. Make `total` red on dropdown

> >

Let's try using classes instead of inline styles on the cart button.
Try using an object to control how the classes work.
Use a computed class

