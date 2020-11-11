<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Application API

<div class="slide-link"><a href="URL"><i class="fab fa-slideshare"></i> URL</a></div>

> > 

So far, we've built projects using what's called the Global API, let's explore the other way to create projects..the Application API

# Commands Available

```
npm run serve
npm run build
npm run lint
```

> >

A few commands available to you once you install the project. You can find these in the README document. `npm run serve` will work in a live-reload environment during development.

`npm run build` converts the application from Vue code to regular javascript and will create a `dist` (distribution) folder for you. That folder has what people would see if they visited a website created with Vue.js. This is what you'd upload to a server if you were doing that manually.

npm run lint would check the file for errors. Let's run the npm run serve to see what our sample app looks like.

`npm run serve`

To see this, you'll need to open up a browser at the URL: `http://localhost:8080/`

---

# Pre-requisites

- `package.json`
- `package-lock.json`

> >

Let's go over the setup files that are part of your installation.

The package.json file is what the Node Package Manager users to organize the project.

You can see that the name and version of our app is there.

Also, you can see that there is a section for the scripts. When you run these scripts, what you're actually running is in this section. You're running something called the vue-cli-service to run the different commands. More on that in a second.


There's two sections that follow. One is dependencies and the other is dev Dependencies. Dependencies are plugins or modules that are required to run the project, whereas devDependencies only during development, like what we're doing right now.

The rest of the files are configuration files for what you installed. Depending on how you did your install, some of these would be in separate files in the main folder. You can see that we can configure eslint as well as a browserlist, which will attempt to make our project compatible with some older browsers.

The package.lock.json is related to the package.json. Since every module you install is dependent on other modules, this file has a list of everything that was installed on your machine and which versions were installed.

That brings me to the node_modules folder, which is where all of these modules are installed. You might notice it's grayed out and that's because it doesn't get copied to Github.

If you open it, you'll see a lot of folders. Notice that some of these are related to what you saw under Dependencies and devDependencies.

Here is where the @vue folder is and where you can find the cli-service that is running and building our application for us.

You can see that there are also a lot of things that we didn't use in our default installation like the router and vuex.

The reason the folder is grayed out is because of another file called `.gitignore`. This is a special file that tells git not to upload certain folder. As you can see the node_modules is massive and can easily be rebuilt by using an npm install command.

There is also a separate configuration file for babel if you need to adjust how that works.

That's the basic structure of our default project. I'll cover the last two folders in the next video.
