<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <header class="header">
        <router-link to="/" class="header-logo">
          <div class="header-logo" v-html="logo"></div>
        </router-link>
      </header>

      <aside class="main-menu">
        <ul class="navbar-list">
          <li v-for="link in links" :key="link.title" class="navbar-item">
            <router-link class="navbar-link" title="link.title" :to="link.url">
              <div class="navbar-link__icon" :class="link.title" v-html="link.img"></div>
            </router-link>
          </li>
        </ul>
      </aside>

      <router-view class="dynamic-container"></router-view>

    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      logo: require('./assets/img/logo.svg'),
      links: [
        {
          title: 'home',
          url: '/',
          img: require('./assets/img/home.svg')
        },
        {
          title: 'users',
          url: '/users',
          img: require('./assets/img/users.svg')
        },
        {
          title: 'reports',
          url: '/reports',
          img: require('./assets/img/reports.svg')
        }
      ]
    }
  }
}
</script>

<style lang="stylus">

.dynamic-container
  padding 66px 0 0 80px

.header
  position fixed
  height 66px
  width 100%
  background #29313C
  z-index 1
  padding 15px 27px

.header-logo
  width 132px
  height 36px

.main-menu
  width 80px
  height calc(100vh - 66px)
  left 0
  top 66px
  position fixed
  background #323A45
  z-index 1

.navbar-list
  display flex
  flex-direction column
  align-items center
  justify-content center
  padding-top 15px

.navbar-item
  width 50px
  height 40px
  border-radius 4px
  transition .25s ease-out
  margin-bottom 10px
  background transparent
  &:hover
    background #282E37

.navbar-link
  path
    transition .25s ease-out all
  &.router-link-exact-active
    path
      fill #00D4FF !important

</style>