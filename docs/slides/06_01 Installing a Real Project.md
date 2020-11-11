<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Realistic Projects

<div class="slide-link"><a href="https://go.raybo.org/2Hw1"><i class="fab fa-slideshare"></i> go.raybo.org/2Hw1</a></div>

> > 

In this chapter, we'll take a look at a more realistic setup and installation of a Vue Project.

---

# Realistic Application

- Routing
- Additional Modules
- Pre-processors
- Tooling
- Tests?

> >

If I was building more of a realistic project, here's some of the things I would want in my installation.

First, I would want to take advantage of some of the routing features of Vue.js so I could create a single page application with different 'pages'

Next, I'd probably want to add other modules to my installation. I like use the Bootstrap framework, and you've seen that in codepen, we've been using Font Awesome for icons as well as animate.css.

A better way to work with bootsrap and other frameworks is to use Sass because bootstrap is built with sass and adding it would give you additional features.

I'd also want to make sure I had the best tooling available for Vue, which means things like setting up the Prettier module to more consistently format my code and making sure my editor was ready to use Vue.js

You may also want to install unit and end to end testing, but those are advanced features that I'm not going to cover on this course.

Let's go ahead and use the cli to create a project called `vue-shop`.

We'll add the router, as well as the CSS preprocessor options

For the questions I get, I'll choose 3.x preview and I won't use the history mode to make my site more compatible.

I'll choose  Sass/SCSS (with dart-sass)

For a linter/formatter, I'll choose ESLint ( I mean, it's really the ONLY option) as well as Prettier, which is a formatter I enjoy using.

Finally, I'll choose lint on save, so that the formatting will happen when I save files.

I'm going to pick separate files for this project, since I think it will make things easier for you to visualize.

I don't need to save this as a preset, so I'll say now. Now let's let it install.


---

# Tooling

**Chrome Extensions**

<a class="tip" href="https://go.raybo.org/2Hgm">`Developer Tools`<span>go.raybo.org/2Hgm</span></a> 


**VS Code Extensions**

<a class="tip" href="https://go.raybo.org/2Hgk">`Vetur`<span>go.raybo.org/2Hgk</span></a>  <a class="tip" href="https://go.raybo.org/2HwC">`Prettier`<span>go.raybo.org/2HwC</span></a>  <a class="tip" href="https://go.raybo.org/2Hw7">`ESLint`<span>go.raybo.org/2Hw7</span></a>



> >

Next, I'd make sure I have some tooling available to me. You're going to want to install some plugins for Visual Studio Code. 

---

# Linting

**.eslint.js**

```json
"no-multi-spaces": ["error"],
"vue/no-multiple-template-root": "off",
"no-unused-vars": "off",
"no-use-before-define": "off",
```

> >

Most of our linting defaults are fine, but we'll make some changs to our eslint to fix potential issues with our code.

`no-multi-spaces` will delete multiple spaces on some parts of your code.

`vue/no-multiple-template-root` will turn off an error that shows up when you try to add multiple items into a vue template. Something that was unallowed in version 2, but not in 3.

These next two I'd probably leave out, but are useful while you take this course.

`no-unused-vars` checks to make sure you don't create variables you don't use. In this course, I sometimes set things up in one video that I don't complete until the next, so this will give you a cleaner experience.

`no-use-before-define` Same thing for this error, it will allow you to use some code before you define it.

---

# Formatting Settings

**.prettierrc**

```json
{
  "tabWidth": 2,
  "singleQuote": true,
  "arrowParens": "avoid",
  "semi": false,
  "trailingComma": "none",
  "bracketSpacing": true 
}
```


> >

I'm also going to change the way prettier is working on this course. I'm going to create a new file called `.prettierrc` and add the following code.

`tabWidth`: I'll make tabs take only two spaces. That's going to make it easier to see more code on these videos, which are recorded on small screens.

`singleQuote`: I like using single quotes in javascript because it's easier to put double quotes inside them.

`arrowParens`: This will make your arrow functions cleaner by removing parenthesis for you when necessary.

`semi`: This is controversial, but in javascript you don't always need trailing semicolons, so they're off.

`trailingComma`: Same thing for the trailing comma, you don't need any ugly trailing commas.

`bracketSpacing`: You can make your brackets and curly braces shorter with this setting.

---

# VS Code Settings

**.vscode/settings.json**

```json
{
  "eslint.validate": ["vue", "html", "javascript"],
  "editor.formatOnSave": true,
  "vetur.validation.template": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

**.gitignore**

```
- .vscode
```

> >

I'm using Visual Studio Code, so there's some changes I want to do to the settings. You can create a file that others can use with the same project.

Here's the settings

`editor.validate`. This is which file types I want Visual Studio Code to fix.

`editor.formatOnSave` I like the editors to fix my files whenever I save, so I'm specifying here.

`vetur.validation.template` makes sure that Vetur checks your validates your Vue.js

Finally `source.fixAll.eslint` 