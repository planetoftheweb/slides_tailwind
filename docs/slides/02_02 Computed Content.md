<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Computed Content

<div class="slide-link"><a href="https://go.raybo.org/2Cys"><i class="fab fa-slideshare"></i> go.raybo.org/2Cys</a></div>

> >

Using expressions in your templates is pretty powerful, but after a while...they can get pretty complicated and hard to maintain. There's are better ways.

---

# Computed Properties

Calculations cached on reactive data

```javascript
data() {
  return {
    myArray : [22, 45, 53, 99]
  }
},
computed: {
  filteredArray() {
    return this.myArray.filter( item => (item < 50))
  }
}
```

```html
<div>{{ filteredArray }}</div>
```

> >

One way of doing this is through computed properties. It's a property you can use to create a variable that can return some calculation on your data.

The code here, for example, would return a new array with the numbers 22 and 45.

This creates a new variable called filteredArray which you can use in your templates.

The variable is rembered...or cached into memory and tracks reactive dependencies (which are variables that Vue has been programmed to keep track of). So, for example if the vaue of myArray changes, then the display would be updated.

---

# Methods

Calculation methods that don't cache

```javascript
data() {
  return {
    myArray : [22, 45, 53, 99]
  }
},
methods: {
  filteredArray() {
    return this.myArray.filter( item => (item < 50))
  }
}
```

```html
<div>{{ filteredArray() }}</div>
```

<a class="tip" href="https://go.raybo.org/2Cyt" target="_blank"><code class="code-exciting">What's the difference?</code><span>go.raybo.org/2Cyt</span></a>

> >

There's another almost indentical way you can do this and that's by creating methods. The code is very similar, except we use a function call when calling the method.

The difference is that where a computed property gets calculated only if the data is being tracked by Vue (called Reactive Data), whereas a method gets calculated everytime.

That makes computed properties more efficient, but there's definitely places where you'll want methods instead.

This is one that you should try out yourself. I'm creating a random number for a list and you'll notice that if I set this thing up as a computed property, then it generates the same number everytime,

However if I make this a computed property, I get a different number for each of the instances.

That's because random is a regular javascript method and is not a reactive property.

---

# Getters and Setters

Set a value defining computed property

```js
...
  computed: {
    rand: {
      get() {
        return Math.floor(Math.random() * this.howBig);
      },
      set(myNumber) {
        this.howBig = myNumber;
      },
    },
  },
```

<a class="tip" href="https://go.raybo.org/2Cyx" target="_blank"><code class="code-exciting">Try it</code><span>go.raybo.org/2Cyx</span></a>

> >

Computed property are normally properties you read from, but there's a different way to write them that allows you to write values to them.

If you write the script like this, you can see that we defined rand as a property and then added two methods. The get() method works the same way, the set method allows you to modify something in your app.

---

# Watchers

Generic tracking of changes

```html
watch: { someVariable(myValue) { ... }
```

<a class="tip" href="https://go.raybo.org/2Cy_" target="_blank"><code class="code-exciting">Try it</code><span>go.raybo.org/2Cy_</span></a> <a class="tip" href="https://bit.ly/3npgqSo" target="_blank"><code class="code-royal">Docs</code><span>bit.ly/3npgqSo</span></a>
> >

There is a more generic way to track changes in your variables using watchers.

It looks similar to computed properties and methods. With watchers, your asking Vue to keep track of a variable and when some event changes it, you can execute some method.

Notice that we have an expression waiting for a message, but it's initialized to an empty string here.

The v-model has the .lazy modifier so that it doesn't keep checking for a change when I type, but just when I hit enter or tab.

My watcher is keeping track of the value of max and if I ever enter an amount bigger than 100,then it shows Over Budget in the alert. Once the value goes back under 100, it shows the text 'much better'

If you take out the .lazy modifier, this won't work as well because it wouldn't wait until you enter a value over 100, it would immediately start displaying the text 'much better'

Watchers work well when constantly checking for changes might be too expensive of an operation.

---

<!-- .slide: data-state="layout-title" data-transition="zoom" class="bg-dark"-->

# Practice

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://go.raybo.org/2Cz0" target="_blank">Problem<span>go.raybo.org/2Cz0</span></a>
  <a type="button" class="animate__animated animate__zoomInDown tip btn btn-lg btn-royal text-white" href="https://go.raybo.org/2Cz2" target="_blank">Diff<span>go.raybo.org/2Cz2</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://go.raybo.org/2Cz1" target="_blank">Solution<span>go.raybo.org/2Cz1</span></a>
</div>

1. Create a currency filter
1. Display count based on `max`
1. Use filtered array on `v-for`
1. Remove `v-if` statement
1. Show label with qty based<br>on price selection

> >

Here's a good practice project. Here's the link to the starting code.

I have a simpler version of our previous code that displays our items.

First, create a currency filter that formats the number used for pricing so that they all have consistent decimal points. Apply that filter to the pricing of each item.

Next we want to display the amount of items the user has filtered when they change the max price.

However the original array never changes, but you can filter the array based on the choice and calculate the quantity properly.

That means that we'll need to change the array we're using in v-for with our new array.

It also means that we can remove the v-if statement that filters our display.

Use the new filtered array to display a label with the amount of elements based on the value of max.
