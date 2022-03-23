<template>
  <div class="grid place-content-center h-screen">
    <span class="text-4xl text-white">Please select a board configuration to continue</span>
    <div class="flex flex-wrap mt-5 place-content-center">
      <li v-for="(item, index) in config" :key="index" class="text-white list-none p-2">
        <option-selector @click="setBoardSize(item)">
          <span>{{ item }} x {{ item }}</span>
        </option-selector>
      </li>
    </div>
  </div>
</template>
<script>
import OptionSelector from "@/components/OptionSelector.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "BoardSize",
  components: { OptionSelector },
  setup() {
    const config = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const router = useRouter();
    const store = useStore();
    const setBoardSize = (value) => {
      store.dispatch("updateSizeAction", value);
      router.push({ name: "createGame" });
    };
    return { config, setBoardSize };
  },
};
</script>
