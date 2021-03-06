import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    title: "32 Bits",
    subtitle: "Juegos de PC y Consolas",
    games: [
      { code: '0001', name: 'Sekiro', stock: 100, price: 30000, color: 'red', onSale: true },
      { code: '0002', name: 'Fifa 21', stock: 100, price: 25000, color: 'blue', onSale: false },
      { code: '0003', name: 'Gears of War 4', stock: 100, price: 15000, color: 'green', onSale: true },
      { code: '0004', name: 'Mario Tennis Aces', stock: 100, price: 35000, color: 'yellow', onSale: false },
      { code: '0005', name: 'Bloodborne', stock: 100, price: 10000, color: 'blue', onSale: false },
      { code: '0006', name: 'Forza Horizon 4', stock: 100, price: 20000, color: 'red', onSale: true }
    ]
  },
  getters: {
    findGame: (state) => (code) => {
      return state.games.filter((prod) => {
        return prod.code == code;
      })
    }
  },
  mutations: {

  },
  actions: {}
});

export default store;
