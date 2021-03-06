<template>
  <div>
    <div class="container-fluid mt-4">
      <div class="d-flex justify-content-center mb-4">
        <img src="@/assets/img/hero2.svg" alt="hero" class="img-fluid" />
      </div>
      <p class="display-6 text-center mb-5">
        Track your grocery items and their prices as you shop
      </p>
      <div class="d-flex justify-content-center mb-5">
        <router-link to="/bags" class="btn btn-lg btn-primary">
          Start Using
        </router-link>
      </div>

      <div class="d-flex justify-content-center my-5">
        <hr class="hr-short bg-secondary" />
      </div>

      <div class="d-flex justify-content-center my-5">
        <p class="lead col-lg-10">
          You probably put together a grocery list before heading to the store —
          whether it's in your head or on a piece of paper. But how often do you
          actually remember to bring that list with you so you can grocery shop
          faster and track corresponding prices with your budget for future use?
          Instead of wandering the market aimlessly wondering how much tomatoes
          you have left or struggling to remember each item on your list, switch
          up how you create a shopping list in the first place. Next time, use
          ShopBag web app on your phone as your personal grocery shopping
          assistant.
        </p>
      </div>

      <div class="d-flex justify-content-center my-5">
        <hr class="hr-short bg-secondary" />
      </div>

      <div class="container-fluid my-5">
        <div class="row">
          <div class="col-lg-6 text-center">
            <img
              src="@/assets/img/stock_shopbag_list.png"
              height="300"
              width="300"
              alt="image"
              class="img-fluid"
            />
          </div>
          <div class="col-lg-6 my-auto">
            <span class="display-6">Quickly type on the go</span>
            <p class="lead">
              ShopBag is simple and easy to use. In a hurry for shopping or to
              the market, you can quickly create grocery lists. Write all the
              items you need in one place, optionally with your budget.
              <!-- Imagine the
            wahala when you return from the market find out that you forgot to
            buy spices for the jollof. -->
            </p>
          </div>
        </div>
      </div>

      <hr class="bg-primary" />

      <div class="container-fluid my-5">
        <div class="row">
          <div class="col-lg-6 text-center">
            <img
              src="@/assets/img/stock_shopbag_prices.png"
              height="300"
              width="300"
              alt="image"
              class="img-fluid"
            />
          </div>
          <div class="col-lg-6 my-auto">
            <span class="display-6">Easily track prices</span>
            <p class="lead">
              ShopBag helps you to track prices and quantities of the items you
              will buy, and have bought by providing spaces to enter your budget
              and the price you bought.
              <!-- ShopBag will
            automatically calculate the difference and totals for you without
            you taking out a calculator to crunch numbers like Professor
            Allotey. -->
            </p>
          </div>
        </div>
      </div>

      <hr class="bg-primary" />

      <div class="container-fluid my-5">
        <div class="row">
          <div class="col-lg-6 text-center">
            <img
              src="@/assets/img/offline.png"
              height="300"
              width="300"
              alt="image"
              class="img-fluid"
            />
          </div>
          <div class="col-lg-6 my-auto">
            <span class="display-6">No boundaries at all</span>
            <p class="lead">
              ShopBag is a web app which is accessible on every device. And can
              be used offline because its also a progressive web app(PWA).
            </p>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center mb-5">
        <router-link to="/bags" class="btn btn-lg btn-primary">
          Start Using
        </router-link>
      </div>
    </div>

    <footer class="text-center bg-secondary p-5">
      <a
        class="text-decoration-none text-muted mx-3"
        href="https://twitter.com/QuistKofi"
        target="blank"
        >My Twitter</a
      >
      <a
        class="text-decoration-none text-muted mx-4"
        href="https://github.com/GuyTito/shopping_tracker"
        target="blank"
        >GitHub Source</a
      >
    </footer>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.hr-short {
  border-top: 2px dotted;
  width: 25%;
}
</style>