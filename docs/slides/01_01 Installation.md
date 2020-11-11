<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Installation

<div class="slide-link"><a href="https://go.raybo.org/2Cg0"><i class="fab fa-slideshare"></i> go.raybo.org/2Cg0</a></div>

> >

Vue has some of the most comprehensive toolsets of any library. Let's take a look at the installation options.
 

---

# Setting up Project

<code class="code-primary">Script</code> vs <code class="code-royal">App</code>

```html 
<script src="https://unpkg.com/vue@next"></script>
``` 

```bash
npm install vue@next
```

> >

First, you need to decide how you want to set up the project.

&raquo; Vue is one of the only modern frameworks that allows you to use it with a single script tag in your HTML, versus a complex, but more app friendly build process.

It's one of the reasons that it's called a 'Progressive Framework'. If you're just getting started, it's perfectly fine to use a &raquo; script tag with this URL, it's also fine to include Vue like this in an existing project or HTML page.

If you want to create an App, where Vue is running the whole thing, then it's best to learn the app build process. &raquo; You can install this using the terminal with this command, but there's a better way.

---

# Official CLI

<a class="tip" href="https://go.raybo.org/2Ci4" target="_blank"><code class="code-primary">Command Line Interface</code><span>go.raybo.org/2Ci4</span></a>

```bash
npm install -g @vue/cli  # npm
```

```bash
yarn global add @vue/cli # yarn
```

> >

Vue.js has an official CLI project. A CLI is a command line interface...normally a terminal tool that sets up a process that helps you build an application.

You can find more information about the Vue CLI at [this URL](https://cli.vuejs.org). &raquo;

You can install the CLI using npm, the Node Package manager that comes when you install node.js with a command like this.

If prefer using the yarn project, you can use this command instead.

---

# Creating a Project

<code class="code-primary">Terminal</code> or <code class="code-royal">GUI</code>

```bash
vue create project
```

```bash
vue ui
```

> >


There are two ways to create a project. You can use a terminal command or use a GUI, or Graphical User Interface.

Once you've installed the CLI, you create a project using the CLI with a **vue** command and then use the **create** option with the name of the project you want to create.

There's also a separate GUI you can use by issuing a **ui** command. The GUI is a nice visual way to set up your build process.

---

# Developer Tools

Available for different platforms

<a class="tip" href="https://go.raybo.org/2Ci6"><code class="code-primary">Chrome</code><span>go.raybo.org/2Ci6</span></a>
<a class="tip" href="https://go.raybo.org/2Ci7"><code class="code-primary">Firefox</code><span>go.raybo.org/2Ci7</span></a>
<a class="tip" href="https://go.raybo.org/2Ci9"><code class="code-primary">Electron</code><span>go.raybo.org/2Ci9</span></a>

> >

Before you start with Vue.js, you want to install the Developer tools, which are available for either chrome or Firefox. You can find the links here. The developer tools allow you to debug and analyze what is going on when you're working with Vue.js. Trust me, it's worth it.

There's also an Electron tool that helps you if you want to test Vue in mobile platforms, which you can find here.

Everyone gets started by using the CLI and eventually grow to try the CLI tools. In this course, we'll get started with the script tag and then move on to the CLI in later videos.

---

<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Templates

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://go.raybo.org/2CgL" target="_blank">Starter<span>go.raybo.org/2CgL</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://go.raybo.org/2CgM" target="_blank">Exercises<span>go.raybo.org/2CgM</span></a>
</div>

> > 

Finally, let's take a look at  a couple of pages where I created samples of what Vue.js files can look like.

First, I've created a sample page we'll be using for the first half of this course. I've got a link to vue.js in this part.

In addition to that, I'm loading two libraries. First just the CSS part of the Bootstrap framework, as well as the fontawesome library, since I often use icons in my projects.

There are two important sections on this page. Where the App template goes. This is usually the `div` where you place the template for an app and the `DIV` often has an `ID` of `app`. More on how this works later.

Then there is a separate `script` section where the JavaScript related to and driving the template.

There's a couple of cosmetic additions to this template, a container as well as a bootstrap margin class, to make the results look good.

In order to show you how Vue.js works. I'm going to use CodePen, which lets you play around with code quickly.

This is equivalent the page we just looked at, but with most of the code hidden so we can focused in specifics.

Now, my version of codepen might look a bit different than yours, I have a template with a lighter template for clarity, but it's functionally the same. The links to the libraries are still there, but a bit harder to find.

So you can go to `settings`, then click on CSS to see the CSS libraries installed, to JS to see Vue.js installed and in the HTML section you can see the two classes added here.

This is going to make some of the exercises and examples easier to work with.