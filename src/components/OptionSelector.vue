<template>
  <div class="option-selector">
    <slot></slot>
  </div>
</template>
<script>
import { useStore } from "vuex";

export default {
  name: "OptionSelector",
  emits: ["playerTypeHasBeenSet"],
  setup(props, context) {
    const store = useStore();
    const selectOption = (option) => {
      switch (option) {
        case "CIRCLE":
          store.dispatch("setPlayerOneIsUsingAction", "CIRCLE");
          store.dispatch("setPlayerTwoIsUsingAction", "CROSS");
          context.emit("playerTypeHasBeenSet");
          break;
        case "CROSS":
          store.dispatch("setPlayerOneIsUsingAction", "CROSS");
          store.dispatch("setPlayerTwoIsUsingAction", "CIRCLE");
          context.emit("playerTypeHasBeenSet");
          break;
        default:
          console.log("unable to process option");
      }
    };
    return { selectOption };
  },
};
</script>

<style lang="postcss" scoped>
.option-selector {
  @apply ring-2 py-10 px-4 h-auto w-36 mx-2 rounded ring-white text-white;
}

.option-selector:hover {
  @apply cursor-pointer bg-gray-700;
}
</style>
