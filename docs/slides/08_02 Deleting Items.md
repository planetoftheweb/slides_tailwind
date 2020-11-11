<!-- .slide: data-state="layout-title" class="bg-dark"-->

# Deleting &amp; Template

<div class="slide-link"><a href="https://go.raybo.org/2KAQ"><i class="fab fa-slideshare"></i> go.raybo.org/2KAQ</a></div>

> >  

To finish up the application, we'll create a delete button and start working on our checkout page.
  
---

# Checkout HTML

```html
<div class="container">
  <h1>Checkout</h1>

  <table class="table table-hover">
    <caption class="text-right h3">
      <b>Total:</b>
      Total
    </caption>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Item</th>
        <th scope="col" class="text-center">Qty</th>
        <th scope="col" class="text-right">Price</th>
        <th scope="col" class="text-right">Sub-total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-center">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button class="btn btn-success">
              +
            </button>
            <button class="btn btn-outline-success">
              -
            </button>
          </div>
        </td>
        <th scope="row">item name</th>
        <td class="text-center">item qty</td>
        <td class="text-right">
          price
        </td>
        <td class="text-right">
          subtotal
        </td>
      </tr>
    </tbody>
  </table>
  <router-link class="btn btn-sm btn-success" to="/"
    >Keep Shopping</router-link
  >
</div>
```
<!-- .element: style="height: 450px; overflow: scroll" -->


> >  

We'll take this and add it to the checkout template.Let's go ahead and select it, then copy it to the clipborard.

---
<!-- .slide: data-state="layout-title" data-transition="zoom" class="bg-dark"-->

# Practice 

<div class="btn-group mt-3" role="group" aria-label="Basic example">
  <a type="button" class="animate__animated animate__backInLeft tip btn btn-lg btn-exciting text-white" href="https://go.raybo.org/2KAR" target="_blank">Begin<span> go.raybo.org/2KAR</span></a>
  <a type="button" class="animate__animated animate__zoomInDown tip btn btn-lg btn-royal text-white" href="https://go.raybo.org/2KAT" target="_blank">Diff<span> go.raybo.org/2KAT</span></a>
  <a type="button" class="animate__animated animate__backInRight animate__slow tip btn btn-lg btn-primary text-white" href="https://go.raybo.org/2KAS" target="_blank">End<span> go.raybo.org/2KAS</span></a>
</div>

1. Create `deleteItem` method
1. Add `delete` button to `cart`
1. Add `checkout` code
1. Link to `checkout` page

> >

For this practice, we'll modify our cart so that we can calculate the items in a better way. Right now we get a simple list of items in the cart, but it'd be better to organize them by item.

We'll move cartTottal to App.vue so prepare for this.

I'm going to rename the addToCart method to addItem and I'll rewrite it to filter by items.

I'll also create a computed property to calculate how many items are in the cart.

Finally, I'll modify the files to display the new version of the cart.
