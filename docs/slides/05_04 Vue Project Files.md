<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Project Files

> > 

There are two folders, the public folder and the source or src folder where all of the files for Vue.js exist.

First, let's look at the public folder. This is where you place things that you want Vue to move to the distribution folder when your project compiles. So it's a good place to add images and json files that you want directly available in your final project.

You can see a favicon.ico file, which is the small icon that appears on the browser bar as well as an index.html.

That's the actual page that your project loads into. You can technically add things here like scripts to libraries, but there are generally better ways to add those using node.js

This file will be modified...also known as injected with the actual code for your app.

The most important part of this page is the div with an id of app. That's where your vue modules will be loaded. Your whole app lives in that div.

In there, you can see that there is an assets folder with a logo. You could have placed this in the public folder, but you can also insert images from this folder and have your build process manage the image.

That means that it could be compressed or modified by your modules...fancy.

The next file to peek at is the main.js file. This is the file that creates your Vue application and mounts it into the div with the id of app in the index.html file.

You can see that it's loading up a createApp method from the vue library and then loading another file, which is a module from the App.vue file.

Pro tip...technically, you don't need the .vue extension for this file.

The code to load things should be familiar although it looks a bit different, you create an App from whatever is in the App.vue file and then mount your app into the div.

Let's look at the App.vue file.

This is what we call a single app component

It has three parts...the template, which is where your HTML goes, the script, obviously where your script goes and something we haven't seen before a styles section.

You can see that the template displays an image and also loads a sub-component and passes along a prop to it.

In our script you'll see that in order to use our component we have to import it from a separate file. This one is in the components folder.

Although some things like imports will go in this section, most of our content will go in the export default statement.

Here, each component gets a name...this one's called App and if it's importing a component it's listed under components.

Lets take a look at HelloWorld.

This is where most of our page content resides. You It has three parts like the previous page.

In the template you can see that we're using an expression to output the prop we received from the parent component.

Our script has a name for our component like before as well as a props section. This is how we receive props in single file components. In this demo, you can see that we're specifying that the prop has a type. You could just use array notation as well.

Our style has one more trick. It uses a scoped attribute. That means that the css is scoped to this component only. Although this component inherits css from it's parents, any sub-components we place here would not be inherit the css.

Hopefully that gives you a good idea of the differences between the Global API format and the Application API format. They're similar, but written differently.

