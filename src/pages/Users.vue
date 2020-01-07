<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="users-top">
          <div class="users-top__heading">
            <h1>Ваши соискатели</h1>
            <h2>Всего соискателей: {{usersList.length}}</h2>
          </div>
          <div class="users-top__buttons">
            <a href="javascript:void(0)" class="btn btn--transparent">
              <div class="favorites" v-html="favorites"></div>
              избранные
            </a>
            <a @click="openUserModal" class="btn btn--primary">
              <span>+</span>
              добавить соискателя
            </a>
          </div>
        </div>
        <div class="item__wrapper">

          <div class="table">
            <div class="table-row table-heading">
              <div class="table-cell">
                Соискатель
              </div>
              <div class="table-cell">
                телефон
              </div>
              <div class="table-cell">
                e-mail
              </div>
              <div class="table-cell">
                оценка соискателя
              </div>
              <div class="table-cell">
              </div>
            </div>

            <Users
              v-for="user in usersList"
              :key="user.id"
              :user="user">
            </Users>

            <AddUser
              v-show="addUserModal"
              @close="addUserModal = !addUserModal"
            >

            </AddUser>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Users from '@/components/Users.vue'
import AddUser from '@/components/AddUser.vue'

export default {
  components: {
    Users,
    AddUser
  },
  data () {
    return {
      usersList: null,
      favorites: require('../assets/img/favorites.svg'),
      addUserModal: false
    }
  },
  created () {
    this.usersList = this.$store.getters.getusersList
  },
  methods: {
    openUserModal () {
      this.addUserModal = true
    }
  }
}
</script>

<style lang="stylus">

.table
  display flex
  flex-direction column
  padding-top 30px
  padding-left 20px

.table-row
  display grid
  grid-template-columns: 25.31% 19.6% 31.5% 14.12% auto
  padding-bottom 30px

.table-heading
  font-weight: bold
  font-size: 11px
  line-height: 12px
  text-transform uppercase

.hide
  display none

.users-top
  display flex
  width 100%
  justify-content space-between
  &__buttons
    width 310px
    display flex
    justify-content space-between
    align-items center
    position relative
    right -17px
</style>