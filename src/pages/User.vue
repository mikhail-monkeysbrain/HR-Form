<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="product__wrapper">
          <div class="product-content">
            <h1 class="title">{{user.name}}</h1>
            <p>{{user.descr}}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: null
    }
  },
  created () {
    let id      = this.$route.params.id
    this.user   = this.$store.getters.getUser(id)
  }
}
</script>

<style lang="stylus">

</style>