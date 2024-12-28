import GameSavingLoader from './js/gameSavingLoader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log('Game saving loaded:', saving);
  } catch (error) {
    console.error(error.message);
  }
})();
