<template>
  <div class="grid place-content-center min-h-screen">
    <h1 class="new-game">Choose Cross or Circle to start the game</h1>
    <h1 class="new-game">
      Option will be automatically chosen for second player based on first player's choice
    </h1>
    <div class="options">
      <option-selector
        ref="x"
        @click="x.selectOption('CROSS')"
        @playerTypeHasBeenSet="redirectToBoardConfig"
      >
        <span class="material-icons-outlined text-5xl"> close </span>
      </option-selector>
      <option-selector
        ref="o"
        @click="o.selectOption('CIRCLE')"
        @playerTypeHasBeenSet="redirectToBoardConfig"
      >
        <span class="material-icons-outlined text-5xl"> circle </span>
      </option-selector>
    </div>
  </div>
</template>
<script>
import OptionSelector from "@/components/OptionSelector.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "NewGame",
  components: { OptionSelector },
  setup() {
    const router = useRouter();
    const x = ref(null);
    const o = ref(null);
    const redirectToBoardConfig = () => router.replace({ name: "setBoardSize" });
    return { x, o, redirectToBoardConfig };
  },
};
</script>
<style lang="postcss" scoped>
.new-game {
  @apply font-bold text-3xl py-4 text-white;
}

.options {
  @apply flex flex-auto place-content-center gap-1.5 mt-5;
}
</style>
