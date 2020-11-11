<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Moving Dropdown

<div class="slide-link"><a href="https://go.raybo.org/2JmU"><i class="fab fa-slideshare"></i> go.raybo.org/2JmU</a></div>

> >  

Let's take the dropdown out of our navigation and see how that  affects our project. 

---
<!-- .slide: data-state="layout-title" data-transition="zoom" class="bg-dark"-->

# Practice 

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://go.raybo.org/2Jmx" target="_blank">Begin<span> go.raybo.org/2Jmx</span></a>
  <a type="button" class="animate__animated animate__zoomInDown tip btn btn-lg btn-royal text-white" href="https://go.raybo.org/2Jmq" target="_blank">Diff<span> go.raybo.org/2Jmq</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://go.raybo.org/2Jmy" target="_blank">End<span> go.raybo.org/2Jmy</span></a>
</div>

1. Move `products` to `App.vue`
1. Remove  dropdown from `Navbar.vue`
1. Move code to `CartDropdown.vue`

> >

We're going to do a seemingly simple move of code in our app. First. we'll take care of moving the cart code to the main app component. Eventually we're going to want the cart to be available to multiple pages.


Then, I'm going to move the dropdown part of the component out of the navigation.

That code will go in the cartdropdown.vue file.