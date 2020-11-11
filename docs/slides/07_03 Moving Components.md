<!-- .slide: data-state="layout-title" class="bg-dark"-->
 
# Moving Components

<div class="slide-link"><a href="https://go.raybo.org/2JJM"><i class="fab fa-slideshare"></i> go.raybo.org/2JJM</a></div>
 
> >  

Next, we'll start tackling the reorganization of our application, sometimes known as refactoring.  

---
<!-- .slide: data-state="layout-title" data-transition="zoom" class="bg-dark"-->

# Practice

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://go.raybo.org/2JJI" target="_blank">Begin<span> go.raybo.org/2JJI</span></a>
  <a type="button" class="animate__animated animate__zoomInDown tip btn btn-lg btn-royal text-white" href="https://go.raybo.org/2JJL" target="_blank">Diff<span> go.raybo.org/2JJL</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://go.raybo.org/2JJK" target="_blank">End<span> go.raybo.org/2JJK</span></a>
</div>

1. Move `RangeSelector.vue`
1. `v-model` in components
1. `ProductList.vue`
1. Move methods, rewire as needed

> >

In order to take care of this, first we'll do some housekeeping and remove the alert.

Then we'll take out the navigation from the home.vue component and move it to it's own spot.

I also want to remove the cart so that it's accessible by the homepage as well as the navigation, so we'll need to move it from the home page to App.vue.

