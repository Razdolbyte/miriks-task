import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    company: {
      ru: [
        {
          name: 'ruApple',
          inn: '123456789',
          contactPhone: '79753331263',
        },
        {
          name: 'ruMicrosoft',
          inn: '987654321',
          contactPhone: '79754531897',
        },
        {
          name: 'ruBlizzard',
          inn: '123789456',
          contactPhone: '79757845235',
        },
        {
          name: 'ruEpic Games',
          inn: '456123789',
          contactPhone: '79757891245',
        },
      ],
      uk: [
        {
          name: 'ukApple',
          inn: '123456789',
          contactPhone: '79753331263',
        },
        {
          name: 'ukMicrosoft',
          inn: '987654321',
          contactPhone: '79754531897',
        },
        {
          name: 'ukBlizzard',
          inn: '123789456',
          contactPhone: '79757845235',
        },
        {
          name: 'ukEpic Games',
          inn: '456123789',
          contactPhone: '79757891245',
        },
      ],
      usa: [
        {
          name: 'usaApple',
          inn: '123456789',
          contactPhone: '79753331263',
        },
        {
          name: 'usaMicrosoft',
          inn: '987654321',
          contactPhone: '79754531897',
        },
        {
          name: 'usaBlizzard',
          inn: '123789456',
          contactPhone: '79757845235',
        },
        {
          name: 'usaEpic Games',
          inn: '456123789',
          contactPhone: '79757891245',
        },
      ],
      ua: [
        {
          name: 'uaApple',
          inn: '123456789',
          contactPhone: '79753331263',
        },
        {
          name: 'uaMicrosoft',
          inn: '987654321',
          contactPhone: '79754531897',
        },
        {
          name: 'uaBlizzard',
          inn: '123789456',
          contactPhone: '79757845235',
        },
        {
          name: 'uaEpic Games',
          inn: '456123789',
          contactPhone: '79757891245',
        },
      ],
    },
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
