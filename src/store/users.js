export default {
  state: {
    usersList: [
      {
        id: 1,
        name: 'Бинман Иван Натанович',
        descr: 'Full-stack разработчик',
        photo: require('../assets/img/1.jpg'),
        phones: [
          {
            phone: '+7 (900) 800-70-60'
          },
          {
            phone: '+7 (900) 800-70-60'
          }
        ],
        mails: [
          {
            mail: 'ioan@binman.ru'
          }
        ],
        score_cv: '4',
        score_test: '4',
        score_call: '4',
        cv: require('../assets/img/1.jpg'),
        test: require('../assets/img/1.jpg')
      },
      {
        id: 2,
        name: 'Дурков Павел Валерьевич',
        descr: 'Full-stack разработчик',
        photo: require('../assets/img/2.jpg'),
        phones: [
          {
            phone: ''
          }
        ],
        mails: [
          {
            mail: 'ioan@binman.ru'
          },
          {
            mail: 'ioan1@binman.ru'
          }
        ],
        score_cv: '4',
        score_test: '4',
        score_call: '4',
        cv: require('../assets/img/1.jpg'),
        test: require('../assets/img/1.jpg')
      },
      {
        id: 3,
        name: 'Лебедин Артеймий Андреевич',
        descr: 'Full-stack разработчик',
        photo: require('../assets/img/3.jpg'),
        phones: [
          {
            phone: '+7 (900) 800-70-60'
          }
        ],
        mails: [
          {
            mail: ''
          },
        ],
        score_cv: '4',
        score_test: '4',
        score_call: '4',
        cv: require('../assets/img/1.jpg'),
        test: require('../assets/img/1.jpg')
      },
      {
        id: 4,
        name: 'Чулков Олег',
        descr: 'Full-stack разработчик',
        photo: '',
        phones: [
          {
            phone: '+7 (900) 800-70-60'
          }
        ],
        mails: [
          {
            mail: 'ioan@binman.ru'
          }
        ],
        score_cv: '4',
        score_test: '4',
        score_call: '4',
        cv: require('../assets/img/1.jpg'),
        test: require('../assets/img/1.jpg')
      },
      {
        id: 5,
        name: 'Федора Линукс Линусович',
        descr: 'Full-stack разработчик',
        photo: require('../assets/img/5.jpg'),
        phones: [
          {
            phone: '+7 (900) 800-70-60'
          }
        ],
        mails: [
          {
            mail: 'ioan@binman.ru'
          }
        ],
        score_cv: '4',
        score_test: '4',
        score_call: '4',
        cv: require('../assets/img/1.jpg'),
        test: require('../assets/img/1.jpg')
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getusersList (state) {
      return state.usersList
    },
    getUser: (state) => (id) => {
      return state.usersList.find(user => user.id == id)
    },
  }
}