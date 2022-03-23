import axios from "axios";
import storage from "@/composables/storage";

const BASE_URL = "http://localhost:8080/api/v1/tictactoe";
const { saveGameID, getGameID } = storage();

const request = axios.create({
  baseURL: BASE_URL,
});

const createGame = (boardSize) => {
  const data = {
    size: boardSize,
  };
  request
    .post("/create", data)
    .then((r) => {
      saveGameID(r.data.game_ID);
    })
    .catch((e) => console.error(e.message));
};

const submitMoves = (moves) => {
  const data = {
    game_ID: getGameID(),
    moves,
  };
  return request.post("/get-winner", data);
};
export { createGame, submitMoves };
