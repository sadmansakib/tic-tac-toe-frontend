import { createStore } from "vuex";
import game from "./modules/game";
import board from "./modules/board";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    game,
    board,
  },
});
