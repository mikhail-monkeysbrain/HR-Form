<template>
  <div class="user table-row">

    <div class="table-cell table-user">
      <div class="hide">
        Соискатель
      </div>
      <router-link class="user-main" :to="/users/ + user.id">
        <article class="user-info">
          <img class="user-photo" :src="user.photo ? user.photo : nophoto" :alt="user.name">
          <p>
            {{user.name}}
            <span class="small">Вакансия: {{user.descr}}</span>
          </p>
        </article>
      </router-link>
    </div>

    <div class="table-cell">
      <div class="hide">
        телефон
      </div>
      <article class="user-phone">
        <div class="cell__icon" v-html="phone"></div>
        <div>
          <div v-for="obj in user.phones" :key="obj.id" class="phones">
            <p v-if="obj.phone">
              {{obj.phone}}
              <a v-if="obj.phone.length > 1" href="javascript:void(0)" class="small">Показать еще 1 номер</a>
            </p>
            <p v-else>Телефон не указан</p>
          </div>
        </div>
      </article>
    </div>
    <div class="table-cell">
      <div class="hide">
        e-mail
      </div>
      <article class="user-mail">
        <div class="cell__icon" v-html="mail"></div>
        <div>
          <div v-for="obj in user.mails" :key="obj.id" class="emails">
            <p v-if="obj.mail">
              {{obj.mail}}
              <a v-if="obj.mail.length > 1" href="javascript:void(0)" class="small">Показать еще 1 e-mail</a>
            </p>
            <p v-else>E-mail не указан</p>
          </div>
        </div>
      </article>
    </div>
    <div class="table-cell">
      <div class="hide">
        оценка соискателя
      </div>
      <!--TODO realize it! -->
      <img src="@/assets/img/Group 4.png" alt="">
      <p>
        <span class="small small--inline">Средний балл:</span>&nbsp;4.0
      </p>
    </div>
    <article class="table-cell">
      <a :href="user.cv" class="table-cell--files open-cv" v-html="cv" target="_blank"></a>
      <a :href="user.test" class="table-cell--files open-test" v-html="tests" target="_blank"></a>
      <a @click="addBookmarks" class="table-cell--files add-top-bookmarks" v-html="favorites"></a>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    },
  },
  data () {
    return {
      nophoto: require('../assets/img/nophoto.png'),
      favorites: require('../assets/img/favorites.svg'),
      tests: require('../assets/img/archive.svg'),
      cv: require('../assets/img/resume.svg'),
      phone: require('../assets/img/phone.svg'),
      mail: require('../assets/img/mail.svg'),
    }
  },
  created () {
    this.message = this.$store.getters.getMessage
  },
  methods: {
    addBookmarks () {
      alert(`Соискатель ${this.user.name} добавлен в закладки`)
    }
  },
}
</script>

<style lang="stylus">
.user
  p
    font-weight: bold
    font-size: 12px
    line-height: 14px
    color #475364

.cell__icon
  background #E8EFF1
  width 36px
  height 36px
  border-radius 3px
  flex-shrink 0
  margin-right 10px
  display flex
  justify-content center
  align-items center
  svg
    width 18px

.user-photo
  width 40px
  height 40px
  border-radius 50%
  flex-shrink 0
  margin-right 10px

article
  display flex
  align-items center

.small
  display block
  font-size: 10px
  line-height: 12px
  color #8EA4B5
  font-weight 400
  padding 5px 0
  &--inline
    display inline

.table-cell--files
  display block
  width 36px
  height 36px
  padding 5px 11px
  background: #FFFFFF
  border: 1px solid #DBE4E7
  border-radius: 3px
  margin-left 5px
  box-shadow inset 0 0 0 0 black
  transition .5s ease-in-out all
  &.open-test
    padding 5px 9px
  &.open-cv
    padding 5px 10px
  &:hover
    box-shadow inset 0 0 40px -20px black

.phones,
.emails
  &:nth-child(2)
    display none

</style>