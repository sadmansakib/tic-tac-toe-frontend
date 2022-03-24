import axios from "axios";
import storage from "@/composables/storage";

const BASE_URL = "https://tic-tac-toe-api-sadman.herokuapp.com/api/v1/tictactoe";

const { getGameID } = storage();

const request = axios.create({
  baseURL: BASE_URL,
});

const createGame = (boardSize) => {
  const data = {
    size: boardSize,
  };
  return request.post("/create", data);
};

const submitMoves = (moves) => {
  const data = {
    game_ID: getGameID(),
    moves,
  };
  return request.post("/get-winner", data);
};
export { createGame, submitMoves };
