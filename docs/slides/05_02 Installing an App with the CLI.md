<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Using the Vue CLI

<div class="slide-link"><a href="URL"><i class="fab fa-slideshare"></i> URL</a></div>

> > 

Let's walk through the different options that you're presented with when working with the CLI.


---

# Creating A Project

**Create Project**
```
cd ~/Desktop
vue create my-app
```

**Using Gitbash**
```
winpty vue.cmd create my-app
```
> >

We're going to be using terminal commands for this project.

Before we do this, I want to make sure I'm in the right folder. I'll use the desktop, so I'll need to switch to that folder

To create an app, we simply type in the `vue create` command and then add our application name.

This is going to give you a menu of options to pick from and that won't work if you're on a PC using Github.

If you're using Gitbash, you run the command like this.

---

# Version

![Version Options](http://pixelprowess.com/i/2020-10-30_18-30-45.png)

> >

Next, you'll be presented with a number of options depending on how many times you've run these commands.

As of this video, Vue 3 is under Preview, so the first option is Vue 2 and the second option is to use Vue 3. That might change by the time you run this.

---

# Manual Features

![Manual Install](http://pixelprowess.com/i/2020-10-30_19-18-12.png)

- Choose Vue version
- Babel
- TypeScript
- Progressive Web App (PWA) Support
- Router
- Vuex
- CSS Pre-processors
- Linter / Formatter
- Unit Testing
- E2E Testing

> >

If you choose to go manual, you'll be presented with more options and if you choose some of these, more sub-options will appear.

Babel helps you write javascript with a module structure that gets converted into javascript that can be more backwards compatible.

TypeScript is a language that is similar to JavaScript but gives you additional features like strong typing.
Progressive Web Apps makes it easier to create sites that run well as phone applications.

Router helps you build single page applications using Vue.js.

Vuex is an advanced way to manage data in your applications.

CSS Pre-processcd ors allow you to work with Sass, Less or Stylus which gives additional features to your CSS.

Linter/Formatter lets you choose a module that will check your app for errors like ESLint and formatting modules like Prettier.

Unit and End to End testing lets you choose options for running unit tests with your applications liek Mocha/Chai or Jest

You'll also be asked for how you want to store configuration for these projects. You can choose to either store then in their own files or as part of the package.json file.

Finally, once you finish setting things up, you'll have the option to saving your preset so that you can start new projects with the same settings.

---

# Default Install

> >

Let's choose the default Vue 3 installation.

This is going to take a while and install a number of things for you plus initialize a git repository as well.

Once it's done you'll be given some commands you can run to change to the app directory and start a default environment. We're going to ignore that and open this up with VSCode. But we'll get to that in the next video.

