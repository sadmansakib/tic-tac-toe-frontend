const GAME_ID = "game_id";

const storage = () => {
  const saveGameID = (payload) => {
    window.sessionStorage.setItem(GAME_ID, payload);
  };

  const getGameID = () => window.sessionStorage.getItem(GAME_ID);

  return {
    saveGameID,
    getGameID,
  };
};
export default storage;
