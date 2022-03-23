import { createRouter, createWebHistory } from "vue-router";
import NewGame from "@/views/NewGame.vue";
import BoardSize from "@/views/BoardSize.vue";
import CreateGame from "@/views/CreateGame.vue";
import PlayGame from "@/views/PlayGame.vue";

const routes = [
  {
    path: "/",
    redirect: {
      name: "newGame",
    },
  },
  {
    path: "/new-game",
    name: "newGame",
    component: NewGame,
  },
  {
    path: "/set-board-size",
    name: "setBoardSize",
    component: BoardSize,
  },
  {
    path: "/create-game",
    name: "createGame",
    component: CreateGame,
  },
  {
    path: "/play",
    name: "playGame",
    component: PlayGame,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
