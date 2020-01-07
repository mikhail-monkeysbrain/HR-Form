<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>Главная</h1>
        <router-link class="user-main" to="/users/">Список соискателей</router-link>
      </div>
    </section>
  </div>
</template>


<script>
import Users from '@/components/Users.vue'
export default {
  components: {
    Users
  },
  data () {
    return {
      usersList: null,
      finders: null
    }
  },
  created () {
    this.$store.getters.getusersList
  },
}
</script>