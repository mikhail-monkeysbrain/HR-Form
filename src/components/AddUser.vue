<template>
  <transition name="slide-fade">
    <div @click="$emit('close')" class="overlay">
      <section @click.stop="" class="add-user">
        <div @click="$emit('close')" class="add-user__close">×</div>
        <form class="form">
          <h2 class="form__title">добавление соискателя</h2>
          <section class="form-section">
            <h3 class="form-section__title">основные данные</h3>
            <label class="label-title" for="name">ФИО</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Введите ФИО"
              v-model="user.name"
            >

            <p class="label-title">вакансия</p>
            <v-select
              v-model="user.descr"
              :options="this.options"
              placeholder="Выберите вакансию"
            >
            </v-select>

            <!-- input file -->
            <div class="input__wrapper input__wrapper--phone">
              <p class="label-title">Фотография</p>
              <input
                name="file"
                type="file"
                id="add-photo"
                class="input input__file"
                @change="addPhoto"
              >
              <span class="small">Размер файла вложения не должен превышать 5 Мб, для загрузки допустимы следующие форматы файлов: jpg, png</span>
              <label for="add-photo" class="input__file-button">
                  <span class="input__file-icon-wrapper">
                    <div class="btn btn--primary btn--middle">Выберите файл</div>
                  </span>
                  <span v-if="!files.photoName" class="input__file-button-text">Файл не выбран</span>
                  <span v-else class="input__file-button-text">{{files.photoName}}</span>
              </label>
            </div>
            <!-- end input file -->
          </section>

          <section class="form-section">
            <h3 class="form-section__title">Контактные данные</h3>
            <div class="add-contact">
              <label class="label-title" for="phone">номер телефона</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Введите номер телефона"
                v-model="user.phone"
              >
              <a class="link--small" href="javascript:void(0)">Добавить еще один номер телефона</a>
            </div>
            <div class="add-contact">
              <label class="label-title" for="mail">E-mail</label>
              <input
                type="text"
                name="mail"
                id="mail"
                placeholder="Введите e-mail"
                v-model="user.mail"
              >
              <a class="link--small" href="javascript:void(0)">Добавить еще один e-mail</a>
            </div>
          </section>

          <section class="form-section form-section--small-padding">
            <h3 class="form-section__title">Резюме и результаты тестового задания</h3>

            <!-- input file -->
            <div class="input__wrapper">
              <span class="label-title">
              Резюме
              <span class="small">Размер файла вложения не должен превышать 50 Мб, для загрузки допустимы следующие форматы файлов: pdf, doc</span>
              </span>
              <input
                name="file"
                type="file"
                id="add-cv"
                class="input input__file"
                @change="addCV"
              >
              <label for="add-cv" class="input__file-button add-cv">
                  <span class="input__file-icon-wrapper">
                    <div class="btn btn--primary btn--middle">Выберите файл</div>
                  </span>
                  <span v-if="!files.cvName" class="input__file-button-text">Файл не выбран</span>
                  <span v-else class="input__file-button-text">{{files.cvName}}</span>
              </label>
            </div>
            <!-- end input file -->

            <!-- input file -->
            <div class="input__wrapper input__wrapper-second">
              <span class="label-title">
              Архив с результатами тестового задания
              <span class="small">Размер файла вложения не должен превышать 50 Мб, для загрузки допустимы следующие форматы файлов: zip, rar</span>
              </span>
              <input
                name="file"
                type="file"
                id="add-test"
                class="input input__file"
                @change="addTest"
              >
              <label for="add-test" class="input__file-button">
                  <span class="input__file-icon-wrapper">
                    <div class="btn btn--primary btn--middle">Выберите файл</div>
                  </span>
                  <span v-if="!files.testName" class="input__file-button-text">Файл не выбран</span>
                  <span v-else class="input__file-button-text">{{files.testName}}</span>
              </label>
            </div>
            <!-- end input file -->
          </section>

          <section class="form-section--score">
            <h3 class="form-section__title">Оценка соискателя</h3>
            <div class="form-section-inner">
              <div class="score score-cv">
                Оценка резюме
                <div :class="'rate-'+stars">
                  <star-rating
                    @mouseleave="showCurrentRating(0)"
                    v-bind:max-rating="5"
                    :show-rating="false"
                    v-bind:star-size="20"
                    @current-rating="showCurrentRating"
                    @rating-selected="setCurrentSelectedRating"
                  >
                  </star-rating>
                </div>



              </div>
              <div class="score score-test">
                Оценка тестового задания
                <div :class="'rate-'+stars">
                  <star-rating
                    @mouseleave="showCurrentRating(0)"
                    v-bind:max-rating="5"
                    :show-rating="false"
                    v-bind:star-size="20"
                    @current-rating="showCurrentRating"
                    @rating-selected="setCurrentSelectedRating"
                  >
                  </star-rating>
                </div>
              </div>
              <div class="score score-call">
                Оценка собеседования
                <div :class="'rate-'+stars">
                  <star-rating
                    @mouseleave="showCurrentRating(0)"
                    v-bind:max-rating="5"
                    :show-rating="false"
                    v-bind:star-size="20"
                    @current-rating="showCurrentRating"
                    @rating-selected="setCurrentSelectedRating"
                  >
                  </star-rating>
                </div>
              </div>
            </div>
          </section>

          <section class="form-submit">
            <div @click="$emit('close')" class="btn btn--transparent btn--fluid">Отменить</div>
            <span>&nbsp;&nbsp;</span>
            <div @click="addUser" class="btn btn--primary btn--fluid">Добавить соискателя</div>
          </section>

        </form>
      </section>
      <!-- <section style="background: #fff; width:200px" v-for="user in users" :key="user.name">
        <p>{{user.name}}</p>
        <p>{{user.descr}}</p>
        <p>{{user.photo}}</p>
        <p>{{user.phone}}</p>
        <p>{{user.mail}}</p>
        <p>{{user.cv}}</p>
        <p>{{user.test}}</p>
      </section> -->
    </div>
  </transition>
</template>

<script>

export default {
  data () {
    return {
      files: {
        photoName: null,
        cvName: null,
        testName: null,
      },
      users: [
        {
          name: 'Бинман Иван Натанович',
          descr: 'Full-stack разработчик',
          photo: require('../assets/img/1.jpg'),
          phone: '+7 (900) 800-70-60',
          mail: 'ioan@binman.ru',
          cv: require('../assets/img/1.jpg'),
          test: require('../assets/img/1.jpg')
        },
      ],
      user: {
          name: '',
          descr: '',
          photo: '',
          phone: '',
          mail: '',
          cv: '',
          test: ''
      },
      options: [
        'Full-Stack разработчик',
        'Back-End разработчик',
        'Front-End разработчик',
        'UX-дизайнер',
        'Маркетолог',
      ],
      stars: 0
    }
  },
  methods: {
    addUser () {
      this.users.push({
        name: this.user.name,
        descr: this.user.descr,
        phone: this.user.phone,
        mail: this.user.mail
      })
    },

    showCurrentRating (rating) {
      this.stars = rating
    },

    setCurrentSelectedRating (rating) {
      console.log(rating)
    },

    addPhoto (e) {
      let file = e.target.files[0] || e.dataTransfer.files[0]
      if (file.type == "image/png" || "image/jpg" && file.size < 50000) {
        this.files.photoName = file.name
      } else {
        this.files.photoName = 'Файл не соответствует требованиям'
      }
    },

    addCV (e) {
      let file = e.target.files[0] || e.dataTransfer.files[0]
      console.log(file)
      this.files.cvName = file.name
      if (file.type = "image/pdf" || "image/doc" && file.size < 500000) {
        this.files.cvName = file.name
      } else {
        this.files.cvName = 'Файл не соответствует требованиям'
      }
    },

    addTest (e) {
      let file = e.target.files[0] || e.dataTransfer.files[0]
      console.log(file)
      this.files.testName = file.name
      if (file.type = "image/pdf" || "image/doc" && file.size < 500000) {
        this.files.testName = file.name
      } else {
        this.files.testName = 'Файл не соответствует требованиям'
      }
    }

  },
  mounted () {
    document.body.addEventListener('keyup', e => {
      if(e.keyCode === 27) this.$emit('close')
    })
  }
}
</script>

<style lang="stylus">

.overlay
  position fixed
  z-index 1
  width calc(100% - 80px)
  height calc(100% - 66px)
  left 80px
  top 66px
  background rgba(71, 83, 100, .8)
  cursor pointer

.add-user
  position absolute
  right 0
  width 650px
  height 100%
  background #fff
  padding 17px 0px 17px 25px
  cursor default

  &__close
    position absolute
    left -40px
    top 12px
    width 30px
    height 30px
    box-shadow 0 0 4px rgba(0,0,0,.2)
    background #fff
    display flex
    justify-content center
    align-items center
    border-radius 3px
    cursor pointer
    font-size 25px
    transition .25s ease-out all
    &:hover
      box-shadow 0 0 5px 2px rgba(0,0,0,.8)

.score
  font-weight: bold
  font-size: 11px
  line-height: 11px
  text-transform: uppercase
  color: #475364

.add-cv
  margin-bottom 1px

.score
    flex-shrink: 0
    width: 31%


.add-user
  transition .3s .5s cubic-bezier(1.0, 0.5, 0.8, 1.0) all
  transform translateX(0)
  opacity 1

.slide-fade-enter-active
  transition: all .3s ease
.slide-fade-leave-active
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)


.slide-fade-enter,
.slide-fade-leave-to
  transform translateY(100%)
  .add-user
    transform translateX(100%)
    opacity 0
</style>