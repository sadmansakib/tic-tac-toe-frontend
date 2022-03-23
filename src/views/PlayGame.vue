<template>
  <main class="pt-8 text-center h-2/6">
    <h1 class="mb-8 text-3xl font-bold uppercase">Tic Tac Toe</h1>
    <div class="text-white min-h-screen text-center pt-8">
      <div class="flex flex-col items-center">
        <div v-for="(row, x) in board" :key="x" class="flex">
          <div
            v-for="(cell, y) in row"
            :key="y"
            @click="makeMove(x, y)"
            @keypress="bar"
            :class="` cell material-icons-outlined ${
              cell === 'CROSS' ? 'text-pink-500' : 'text-blue-400'
            }`"
          >
            {{ cell === "CROSS" ? "close" : cell === "CIRCLE" ? "circle" : "" }}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "PlayGame",
  setup() {
    const store = useStore();
    const boardSize = store.getters.getSize;
    const firstPlayer = store.getters.getPlayerOneIsUsing;
    const secondPlayer = store.getters.getPlayerTwoIsUsing;
    const currentPlayer = ref(store.getters.getPlayerOneIsUsing);
    let board = new Array(boardSize);
    for (let index = 0; index < board.length; index += 1) {
      board[index] = new Array(boardSize).fill("");
    }

    board = ref(board);

    const makeMove = (x, y) => {
      // if (winner.value) return;
      if (board.value[x][y]) return;
      board.value[x][y] = currentPlayer.value;
      const move = `${currentPlayer.value} ${x} ${y}`;
      store.dispatch("updateMovesAction", move);
      currentPlayer.value = currentPlayer.value === firstPlayer ? secondPlayer : firstPlayer;
    };

    return {
      board,
      makeMove,
    };
  },
};
</script>
<style lang="postcss" scoped>
.cell {
  @apply border border-white w-20 h-20 flex items-center justify-center text-4xl cursor-pointer;
}

.cell:hover {
  @apply bg-gray-700;
}
</style>
