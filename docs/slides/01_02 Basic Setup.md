<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Basic Setup

<div class="slide-link"><a href="https://go.raybo.org/2CjJ"><i class="fab fa-slideshare"></i> go.raybo.org/2CjJ</a></div>

> >

Besides adding a script tag or building a project, let's examine what makes Vue.js special and talk about how it's different from building regular javascript apps.

---

# Vue Template

```html[1|2]
<div id="app">
  <h1>{{ name }}</h1>
</div>
```

> >

## Target DOM Element

To use Vue.js in your code, you'll need to create an HTML element that you can target so that Vue.js can control it.

That's usually done by adding an **ID** to the element and that's often the keyword **app**, but it can really be anything else. This also means that you can add vue to more than one place on your page.

## Use Vue Features

Once you have that ID, then you can use Vue.js features inside your container, So for example here we can use a template expression.

The template expression looks just like HTML with some extra directives (which are what we call vue commands, but the directives get converted by Vue and replaced with the code needed to build your app.

One of the directives you can use is the expression syntax, which uses double curly braces (also called mustaches) to print the value of a variable.

---

# Vue APIs

<a class="tip" href="https://go.raybo.org/2CjL" target="_blank"><code class="code-primary ">Global API</code><span>go.raybo.org/2CjK</span></a>

<a class="tip" href="https://go.raybo.org/2CjN" target="_blank"><code class="code-royal mt-3">Application API</code><span>go.raybo.org/2CjK</span></a>


> >

Vue.js has two slightly different APIs or Application Programming Interfaces...think of them as slightly different flavors of your favorite sodas. Which one you use depends on how you've installed it.

The Global API, is what you use when you add the script tag to an HTML page. We'll be using that for about the first half of the course.

The Application API is what you use when you install Vue with the CLI or a Package Manager like NPM.

---

# Global API Initialization

```js[1|2-6|4|7]
Vue.createApp({
  data() {
    return {
      name: 'Bamboo Thermal Ski Coat',
    };
  },
}).mount('#app');
```

> >

If you use the Global API, you'll get access to the `Vue` object, which you can use to create content in your HTML page using the `createApp` method.

createApp takes a configuration object with a series of methods.

One of the most important methods sets up the data for our project.

The method needs to return an object with the data you want our application to have. in this case, we're returning a simple variable called name with some text.

To load this onto our page, we use the mount method to replace our template with our Vue application.

---

<!-- .slide: data-state="no-fragment" -->

# Separate App Object

```js
const App = {
  data() {
    return {
      name: 'Bamboo Thermal Ski Coat',
    };
  },
};

Vue.createApp(App).mount('#app');
```

> >

You'll often see the object written out like this a separate variable to keep things simpler.

---

# Vue Features

- Declarative rendering
- Text interpolation
- Reactive data

> >

There's a few things happening behind the scenes we should mention that make Vue.js special.

Vue uses something called **Declarative Rendering**. Vue makes you feel like you're writing HTML, but in reality you're using a language that looks like HTML, but allows us to use features that extend the capabilities of HTML. Those commands are then converted...or rendered into code that the browser displays.

One of the features we get when using Vue is called **text interpolation**...using double curly braces to print out variables and other code...The curly braces are sometimes called mustaches because of their shape. Inside you can put more than just variables, but more complex formulas also called **expressions**. 

One thing that's not obvious from our example is that the data assigned to the template in our script is reactive. That means that if something modifies our data, Vue would take care of modifying the template for us automatically. This is one of the best features of Vue.js because you don't have to worry about updating your HTML, just writing commands that modify the data.

---

<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Practice

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://go.raybo.org/2CjQ" target="_blank">Problem<span>go.raybo.org/2CjQ</span></a>
  <a type="button" class="animate__animated animate__zoomInDown tip btn btn-lg btn-royal text-white" href="https://go.raybo.org/2CjR" target="_blank">Diff<span>go.raybo.org/2CjR</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://go.raybo.org/2CjS" target="_blank">Solution<span>raybo.org/2CjS</span></a>
</div>

1. Create more than one App
1. Change `name` in new app
1. Feed `createApp` an <br> object instead of a variable

> >

I've created a codepen for you with this starter code. Here's some things you can try.

First, you can try adding another variable to the data section and then see if you can add it to the page using an expression.

To see that you can create more than one app on the same page, try creating another app with a separate `createApp` command. Remember that you'll need another ID as well as a variable name.

Experiment using the Object notation instead of creating a separate variable. I'll be using the variable notation on this course, but you might like it better the other way.
