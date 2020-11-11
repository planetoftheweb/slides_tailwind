<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Modules

<div class="slide-link"><a href="https://go.raybo.org/2HxD"><i class="fab fa-slideshare"></i> go.raybo.org/2HxD</a></div>

> > 

In a real project, you wouldn't just use what the CLI installs, but add your own modules. Lets take a look at how that works.

---

# Adding Modules

**npm modules**

<a class="tip" href="https://go.raybo.org/2Hws">`Bootstrap`<span>go.raybo.org/2Hws</span></a>  

<a class="tip" href="https://go.raybo.org/2Hwt">`Font Awesome`<span>https://go.raybo.org/2Hx1</span></a>  

<a class="tip" href="https://go.raybo.org/2Hx1">`Vue Font Awesome`<span>go.raybo.org/2Hx1</span></a>

<a class="tip" href="https://go.raybo.org/2Hx3">`animate.css`<span>go.raybo.org/2Hx3</span></a>

> >

We're going to install some additional libraries to make our project work. First, we'll add the bootstrap framework to add styles from the most popular css framework of all time. We won't be using the JavaScript, just the CSS and because we installed pre-processors. We'll be working with the sass version.

Some icons would be great, and one library that's always popular and easy to use is Font Awesome, which you can find here.

We're also going to install a module called Vue Font Awesome that makes it easier to work with Font Awesome. It will also show you how to add Vue related modules from third parties.

Finaly because we've used some of it's animation features, we'll add Animate.css so that we'll get some built in animation sequences.




---

# Install

```sh
npm i @fortawesome/fontawesome-free @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/vue-fontawesome@prerelease bootstrap@next popper.js animate.css
```

> > 

This will install all of our modules. You can take a peek at the package.json file for the additions.

---

# **main.js**

```js
import router from "./router";
...
createApp(App)
  .use(router)
```

> >

Let's take a peek of what's changed in our application since we added routing to our project.

Let's start by runnin the `npm start` command.

In our main.js file, which is the entry point for our application, we're adding an import statement for the router function, this is how you would add any additional module to an application.

In order to use it in our app, we need to add a use method to add the router functionality.

---

# **App.vue**

```js
<div id="nav">
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
</div>
<router-view />
```


> >

In our App.vue file, you'll see that we have a new `<router-link>` component links to the different documents. This would replace anchor tags where the href attributes are 

The router-view component is where our pages will be displayed.

Other than that our project is pretty much the same as before.