# RayVeal

Rayveal is an opinionated version of the awesome [reveal.js](https://revealjs.com/). The main difference an approach to creating slides that is [markdown focused](https://github.github.com/gfm/) with the ability to create multiple presentations in the same project.

It's designed so you can focus on writing, not on designing the presentation with many built in layouts, styles and colors.

This, plus the pre-installation of convenient plugins and libraries make it easier to create your presentations quickly using markdown. That helps me focus on writing and not on laying out presentations.

You can see the demo at [rayveal.tech](http://rayveal.tech).

## Instructions

Instead of creating HTML files, you simply create one or more `*.md` files in the `docs/slides` folder. A server is required in order to use RayVeal properly...since the markdown files have to be loaded dynamicaly, so upload the contents of the `build` folder to a server.

## Installing Locally with NPM (optional)

Optionally, you can just run the presentation locally (great when you can't guarantee a network connection), There's a live preview server provided.

1. Grab/Fork from [repo](http://github.com/planetoftheweb/rayveal)
1. `docs` folder has presentation
1. `docs/slides/demo.md` subfolder has sample markdown
1. `slides/index.json` has a list of presentations (optional)

## Running locally

1. Run `$ npm install` from your terminal
1. Edit `docs/slides/demo.md` or add `*.md files`
1. Run `$ npm start` from your terminal

- Generates the `docs/slides/index.json` file (index)
- Runs `gulpfile.js` process
- Creates a live reload server

## Pre-installed libraries

Pre-installed libraries let you easily add icons, animations and even emojis to your presentations. Here's the libraries that come with the default intallation.

- [Font Awesome](https://fontawesome.com/?from=io)
- [Animate.css](https://animate.style/)
- [Tweetmoji Amazing](https://github.com/SebastianAigner/twemoji-amazing/)
- [Lightweight Bootstrap](https://getbootstrap.com)

### Lightweight Bootstrap

A lightweight version of bootstrap, which you can customize for your own needs, lets you use things like buttons, table, cards, list-groups and form styles if you need them. You can customize what's included with an `npm run bootstrap-light` command

If you want to control what gets included in the `bootstrap-light.css` file, you can edit the `src/bootstrap-light/scss/bootstrap.scss` file.

#### Disabled components

**Disabled by default**: `grid`, `transitions`, `dropdown`, `nav`, `navbar`, `modal`, `tooltip`, `popover`, `carousel`.

#### Colors

There is also a set of variables that you can customize `src/bootstrap-light/scss/_variables-bootstrap-light.scss`.

In addition to the traditional colors available in Bootstrap, there are two more theme colors: `royal` (purple) and `exciting` (pink), so you can use that in addition to the traditional: `primary`, `secondary`, `success`.

There are also a few more color css variables: `gray-lighter`, `gray-light`, `gray-dark`, `beige`, which you can use in your own CSS `var(--bs-gray-light);`

## Additional plugins

In addition to the [built-in plugins](https://revealjs.com/plugins/#built-in-plugins) that come with [reveal.js](https://revealjs.com/), I added a few [other plugins](https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware) to handle a couple of additional features:

- [Chart](https://rajgoel.github.io/reveal.js-demos/chart-demo.html#/)
- [Menu](https://denehyg.github.io/reveal.js-menu/#/home)

## Persistent toolbar

One of the problems I often have when doing presentation is making sure that people have the URL to the presentation as well as contact and other important information. So, I created a persistent toolbar at the bottom of every slide.

````html
<!-- ADD PERSISTENT NAVBAR CODE HERE -->
<footer class="footer fadein">
  <div class="persistent">YOUR CODE HERE</div>
</footer>
<!-- ADD PERSISTENT NAVBAR CODE HERE -->```
````

It auto-hides after 5 seconds, but you can bring it back by using the `t` key. You can find a sample of it in the index.html file and put your own HTML there. You can also just remove it

## Fragments by default

One of the key ways in which RayVeal differs from reveal is in the way it handles fragments. I don't like to show a lot of text in my presentations, but write short bullet points that I want people to consume one at a time. Therefore, fragments are on by default, just write your normal bullet points and they will show one at a time.

By default the fragment class is added to all list items, paragraphs, code, embeds, iframes, tables and the canvas element.

You can also turn that off on a slide by slide basis by adding a `data-state` property to a slide comment.

&lt;!-- .slide: data-state="no-fragment" --&gt;

## contenteditable code

When you write code blocks by either using the <code>&grave;</code> character or <code>&grave;&grave;&grave;</code> codeblocks, Rayveal makes those automatically have the `contenteditable` attribute. I demo a lot of code, so it's nice to be able to edit my codeblocks or even anything with the code tag.

I'm also a developer, so since Reveal.js added line numbers, it's also available to you. You can even highlight and animate line numbers. To activate it, just include an array.

## Code options

I created some additional styles that are not in bootstrap.

### Colored code blocks

You can use `code` blocks with different colors. The default color is gray, but you can use custom bootstrap like colors including the additional two colors

```html
<code class="code-primary">primary</code>
<code class="code-success">success</code>
<code class="code-info">info</code>
<code class="code-warning">warning</code>
<code class="code-danger">danger</code>
<code class="code-royal">royal</code>
<code class="code-exciting">exciting</code>
```

### Tooltips

I'm not importing the Bootstrap JavaScript or the Bootstrap Grid, so I created my own way of doing a simple tooltip using CSS.

```html
<a class="tooltip" href="#">`tooltips`<span>For overlay explanations</span></a>
on rollover
```

### Code Sample Lists

There's also a style that I need for some of my own coursework, which lets you create lists with code samples that change color in each line. Here's the code:

```md
- `sample`
  - NUM: `one` `two` `three`
  - NUM: `four` `five` `six`
  - NUM: `seven` `eight` `nine`
  - NUM: `ten` `eleven` `twelve`
  - NUM: `thirteen` `fourteen` `fifteen`
```

But it's better if you look at these in the [demo](docs/slides/)

## Slide Templates

It lets you add style tags, classes and data attributes in comments, so I used these to create different slide templates. There are three right now.

### Title Slide

`<!-- .slide: data-state="layout-title" -->`

This is the title slide that appears at the beginning of the [demo](https://rayveal.tech). You can also add a `style` or a `class` property and it will appear on the slides, so you can easily add bootstrap background colors.

Here are some of the other layouts: `layout-has-icon`, `layout-circles`, `layout-background-image`, `layout-mostly-image`, `layout-background-video`, `layout-quote`, `layout-code-list`,

## More

Take a look at the [demo](https://rayveal.tech) for more examples, I'm really excited about some of the stuff you can do with Bootstrap's card and list-group components. I'd love to add more components and other layouts in the future.
