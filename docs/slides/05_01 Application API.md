<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Application API

<div class="slide-link"><a href="https://go.raybo.org/2HHI"><i class="fab fa-slideshare"></i> go.raybo.org/2HHI</a></div>

> > 

So far, we've built projects using what's called the Global API, let's explore the other way to create projects..the Application API

---

# Application API

- Single Page Apps
- Component Structure
- Build Process

> >

The Application API was designed to build Apps, so it's not made for creating pages, but entire websites.

If you've enjoyed how we worked with components in the previous chapter, you'll be happy to know that everything in the application API  is centered around components.

Because of it's more complex nature, you can't add this to an existing project using a script tag, it requires build processes, which are managed by a platform called Node.js

---

# Pre-requisites

- <a class="tip" href="https://nodejs.org/en" target="_blank"><code class="code-exciting">Node.js</code><span>nodejs.org/en</span></a>
- <a class="tip" href="https://git-scm.com/" target="_blank"><code class="code-exciting">Git</code><span>git-scm.com/</span></a>
- Terminal Tool

> >

That does mean that before you get going, you'll need to have some experience working with Node.js, specifically npm...the Node Package Manager that allows you to install modules. Modules are little plugins or extensions that help you build apps.

You'll also need to understand how to work with Git and Github. Git is how developers use version control to manage projects, and Github is a version control system where most modules and applications are stored including the Vue.js project itself.

Finally, you'll need to be comfortable using a terminal tool. When you Install Git on a PC you'll have the option of installing Gitbash. It makes it easier to run the linux commands that are common when working with node projects.

---

# Official CLI

<a class="tip" href="https://go.raybo.org/2Ci4" target="_blank"><code class="code-primary">Command Line Interface</code><span>go.raybo.org/2Ci4</span></a>

```bash
npm install -g @vue/cli  # npm
```

> >

Vue.js has an official CLI project. A CLI is a command line interface...normally a terminal tool that sets up a process that helps you build an application.

You can find more information about the Vue CLI at [this URL](https://cli.vuejs.org). &raquo;

You can install the CLI using npm, the Node Package manager that comes when you install node.js with a command like this.

If prefer using the yarn project, you can use this command instead.

