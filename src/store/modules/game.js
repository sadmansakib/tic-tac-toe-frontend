const game = {
  state: () => ({
    playerOneIsUsing: "",
    playerTwoIsUsing: "",
  }),
  mutations: {
    setPlayerOneIsUsing: (state, type) => {
      state.playerOneIsUsing = type;
    },
    setPlayerTwoIsUsing: (state, type) => {
      state.playerTwoIsUsing = type;
    },
  },

  actions: {
    setPlayerOneIsUsingAction: (context, type) => {
      context.commit("setPlayerOneIsUsing", type);
    },
    setPlayerTwoIsUsingAction: (context, type) => {
      context.commit("setPlayerTwoIsUsing", type);
    },
  },

  getters: {
    getPlayerOneIsUsing: (state) => state.playerOneIsUsing,
    getPlayerTwoIsUsing: (state) => state.playerTwoIsUsing,
  },
};

export default game;
