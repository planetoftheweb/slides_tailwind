<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Modifying Cart

<div class="slide-link"><a href="https://go.raybo.org/2K7x"><i class="fab fa-slideshare"></i> go.raybo.org/2K7x</a></div>

> >  

We're pretty much  done moving items around, so let's focus on adding some functionality. 
  
---
<!-- .slide: data-state="layout-title" data-transition="zoom" class="bg-dark"-->

# Practice 

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://go.raybo.org/2K7L" target="_blank">Begin<span> go.raybo.org/2K7L</span></a>
  <a type="button" class="animate__animated animate__zoomInDown tip btn btn-lg btn-royal text-white" href="https://go.raybo.org/2K7Z" target="_blank">Diff<span> go.raybo.org/2K7Z</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://go.raybo.org/2K7R" target="_blank">End<span> go.raybo.org/2K7R</span></a>
</div>

1. Move `cartTotal` to `App.vue`
1. Create new `addItem` method
1. Create `cartQty`<br>computed properties
1. Update files to display cart.
> >

For this practice, we'll modify our cart so that we can calculate the items in a better way. Right now we get a simple list of items in the cart, but it'd be better to organize them by item.

We'll move cartTottal to App.vue so prepare for this.

I'm going to rename the addToCart method to addItem and I'll rewrite it to filter by items.

I'll also create a computed property to calculate how many items are in the cart.

Finally, I'll modify the files to display the new version of the cart.
