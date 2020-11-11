<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Checkout

<div class="slide-link"><a href="https://go.raybo.org/2KBl"><i class="fab fa-slideshare"></i> go.raybo.org/2KBl</a></div>

> >

Let's go ahead and take care of our checkout page. 

---
<!-- .slide: data-state="layout-title" data-transition="zoom" class="bg-dark"-->

# Practice 

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://go.raybo.org/2KBh" target="_blank">Begin<span> go.raybo.org/2KBh</span></a>
  <a type="button" class="animate__animated animate__zoomInDown tip btn btn-lg btn-royal text-white" href="https://go.raybo.org/2KBg" target="_blank">Diff<span> go.raybo.org/2KBg</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://go.raybo.org/2KBi" target="_blank">End<span> go.raybo.org/2KBi</span></a>
</div>

1. Pass `cart-total` to checkout
1. Receive `cart`, `cart-total` props
1. Loop through `cart`
1. Display price, total, etc.

> >

Here, we'll need to make sure we pass the total, which is already calculated on the homepage to the checkout page (Why calculate it again when it's already done)

We'll receive cart and cart-total as props.

We will loop and display the cart items

Make sure we display the price, total and other elements. I've already created placeholders for you.