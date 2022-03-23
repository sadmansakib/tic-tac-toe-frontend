<template>
  <div class="grid place-content-center min-h-screen text-white">
    <div class="flex gap-2 place-content-center">
      <span class="text-4xl"> Player one is using:</span>
      <span class="text-4xl material-icons-outlined">
        {{ playerOneType === "CIRCLE" ? "circle" : playerOneType == "CROSS" ? "close" : "" }}</span
      >
    </div>
    <div class="flex gap-2 place-content-center">
      <span class="text-4xl">Player two is using:</span>
      <span class="text-4xl material-icons-outlined">
        {{ playerTwoType === "CIRCLE" ? "circle" : playerTwoType == "CROSS" ? "close" : "" }}</span
      >
    </div>

    <span class="text-4xl">Board configuration is: {{ boardSize }} x {{ boardSize }}</span>
    <button class="ring mt-10 rounded ring-white p-4 text-2xl hover:bg-gray-700" @click="startGame">
      Start Game
    </button>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { createGame } from "@/composables/network";

export default {
  name: "CreateGame",
  setup() {
    const store = useStore();
    const router = useRouter();
    const playerOneType = store.getters.getPlayerOneIsUsing;
    const playerTwoType = store.getters.getPlayerTwoIsUsing;
    const boardSize = store.getters.getSize;
    const startGame = () => {
      createGame(boardSize);
      router.push({ name: "playGame" });
    };

    return {
      playerOneType,
      playerTwoType,
      boardSize,
      startGame,
    };
  },
};
</script>
