<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Refactoring Navigation

<div class="slide-link"><a href="https://go.raybo.org/2JI6"><i class="fab fa-slideshare"></i> go.raybo.org/2JI6</a></div>

> >  

Next, we'll start tackling the reorganization of our application, sometimes known as refactoring.  

---
<!-- .slide: data-state="layout-title" data-transition="zoom" class="bg-dark"-->

# Practice

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://go.raybo.org/2JI4" target="_blank">Begin<span> go.raybo.org/2JI4</span></a>
  <a type="button" class="animate__animated animate__zoomInDown tip btn btn-lg btn-royal text-white" href="https://go.raybo.org/2JI2" target="_blank">Diff<span>go.raybo.org/2JI2</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://go.raybo.org/2JI5" target="_blank">End<span>go.raybo.org/2JI5</span></a>
</div>

1. Remove `CustomAlert.vue`
1. `Home.vue` nav to `Navbar.vue`
1. Move `:cart` to `App.vue`
1. Move methods, rewire as needed

> >

In order to take care of this, first we'll do some housekeeping and remove the alert.

Then we'll take out the navigation from the home.vue component and move it to it's own spot.

I also want to remove the cart so that it's accessible by the homepage as well as the navigation, so we'll need to move it from the home page to App.vue.

