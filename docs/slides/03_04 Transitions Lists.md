<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Options and Lists

<div class="slide-link"><a href="https://go.raybo.org/2F2k"><i class="fab fa-slideshare"></i> go.raybo.org/2F2k</a></div>

> > 

Let's take a look at a couple of other options when it comes to transitions and then we'll take a look at working with lists.

---

# Appear

```
<transition appear></transition>
```


> >

If you want to animate an element as it enters the screen, you can simply add the appear property.

---

# Transition Mode

```html
<transition mode="direction">
  ...
</transition>
```

<code class="code-primary tip">in-out<span>New element, then current element</span></code>
<code class="code-primary tip">out-in<span>Current element, then new element</span></code> 

<a class="tip" href="https://go.raybo.org/2EhR" target="_blank"><code class="code-exciting">Try it</code><span>go.raybo.org/2EhR</span></a>


> >

The transition mode changes the order of how transitions inside the transition component play. Normally animations inside the transition object would all trigger at once. And that can be good and bad, depending on what you want to accomplish.

---

# Other Properties


<code class="code-primary tip position-relative">css<span>Wether to apply other CSS transition classes</span></code>
<code class="code-primary tip">persisted<span>Hide/shows intead of insert/remove</span></code> 
<code class="code-primary tip position-relative">type<span>The type of transition</span></code> 
<code class="code-primary tip position-relative">duration<span>Duration of transition</span></code> 


<a class="tip" href="https://go.raybo.org/2Ens" target="_blank"><code class="code-exciting">Docs</code><span>go.raybo.org/2Ens</span></a>

> >

There's a few other properties you can add to the transition element that are not as useful, but still available. For example the css property lets you tell Vue wether or not you want to apply transition classes, so they won't get confused with other CSS.

Then there is persisted, which is for elements that you don't want inserted and deleted from the DOM, but that you want to persist, like when using v-show.

You can also specify the type of transition that you want to apply, wether it's a transition or an animation.

Finally, duration lets you control the length of the transition.

---

# Transition Groups

```html
<transition-group name="groupName"></transition>
```
- `tag=name` element
- Modes not available
- `:key` required on the list

<a class="tip" href="https://go.raybo.org/2F1G" target="_blank"><code class="code-exciting">Try it</code><span>go.raybo.org/2F1G</span></a>


> >

If you have a list of items that you want to animate, Vue provides a different component called a transition group, it has a few differences.

Unlike a regular transition, it can render and element which will be the container of the list. You can control which element it is by using a tag property.

Transition modes aren't available on transition groups and that makes sense because it's already assumed that you're transforming a list of elements

A key is required on the v-for that creates the list or the special animation features won't work.

---

# Shuffling with **v-move**

- `v-move`  and `move-class` available


<a class="tip" href="https://go.raybo.org/2F2B" target="_blank"><code class="code-royal">Try it</code><span>go.raybo.org/2F2B</span></a> <a class="tip" href="https://go.raybo.org/2F2C" target="_blank"><code class="code-exciting">Docs</code><span>go.raybo.org/2F2C</span></a>

> >

There is an additional animation property you can use called v-move, which lets you control the animation if you shuffle items. Of course if you use a name property on the `transition-group` tag, the v will be replaced with the name. amd there is a move-class if you want to pass a class instead.

You can learn more about list transitions and some other features like state transitions, which is just using watchers to control animations on the docs. There's quite a lot of additional examples there.

---

<!-- .slide: data-state="layout-title" data-transition="zoom" class="bg-dark"-->

# Practice

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://go.raybo.org/2F2i" target="_blank">Problem<span>go.raybo.org/2F2i</span></a>
  <a type="button" class="animate__animated animate__zoomInDown tip btn btn-lg btn-royal text-white" href="https://go.raybo.org/2F2j" target="_blank">Diff<span>go.raybo.org/2F2j</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://go.raybo.org/2F2f" target="_blank">Solution<span>go.raybo.org/2F2f</span></a>
</div>

1. `transition-group` for products
1. Use the `appear` option
1. Use different `from`/`to` transforms

> >

For this exercise, we'll create a transition group for our products list.

Add the appear option to see an animation happen when the products enter.

Try using different from and to transforms.
