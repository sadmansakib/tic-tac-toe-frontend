const board = {
  state: () => ({
    size: 0,
    moves: [],
  }),
  mutations: {
    updateSize: (state, size) => {
      state.size = size;
    },
    updateMoves: (state, move) => {
      state.moves.push(move);
    },
    clearMoves: (state) => {
      state.moves = [];
    },
  },
  actions: {
    updateSizeAction: (context, size) => {
      context.commit("updateSize", size);
    },
    updateMovesAction: (context, move) => {
      context.commit("updateMoves", move);
    },
    clearMovesAction: (context) => context.commit("clearMoves"),
  },
  getters: {
    getSize: (state) => state.size,
    getMoves: (state) => state.moves,
  },
};

export default board;
