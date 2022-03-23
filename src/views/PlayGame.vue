<template>
  <div class="pt-8 text-center">
    <div class="flex flex-row text-white mb-5">
      <div class="flex-auto justify-center items-center">
        <h1 class="pl-48 text-center text-4xl">Tic Tac Toe</h1>
      </div>
      <button
        class="flex-none justify-end rounded ring p-2 mr-5 ring-white text-xl hover:bg-gray-700"
        @click="checkWinner"
      >
        Submit Result
      </button>
    </div>
    <div v-if="winningMessage !== null" class="mt-2 mb-2 bg-yellow-500 font-bold text-2xl">
      {{ winningMessage }}
    </div>
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
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { submitMoves } from "@/composables/network";

export default {
  name: "PlayGame",
  setup() {
    const store = useStore();
    const boardSize = store.getters.getSize;
    const firstPlayer = store.getters.getPlayerOneIsUsing;
    const secondPlayer = store.getters.getPlayerTwoIsUsing;
    const currentPlayer = ref(store.getters.getPlayerOneIsUsing);
    const winningMessage = ref(null);
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

    const moves = store.getters.getMoves;
    const checkWinner = () => {
      submitMoves(moves).then((r) => {
        if (r.data.gameStatus === "FINISHED") {
          if (r.data.winner === null) {
            winningMessage.value = "Game drawn";
          } else if (r.data.winner === firstPlayer) {
            winningMessage.value = `${firstPlayer}WON!`;
          } else {
            winningMessage.value = `${secondPlayer}WON!`;
          }
        }
      });
    };

    return {
      board,
      makeMove,
      checkWinner,
      winningMessage,
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
