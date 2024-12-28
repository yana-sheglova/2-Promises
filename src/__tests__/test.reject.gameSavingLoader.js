import read from '../js/reader';
import GameSavingLoader from '../js/gameSavingLoader';

jest.mock('../js/reader');
jest.mock('../js/parser');

describe('GameSavingLoader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should throw an error when loading game saving fails', async () => {
    const readError = new Error('Failed to read data');

    read.mockRejectedValue(readError);

    await expect(GameSavingLoader.load()).rejects.toThrow('Failed to load game saving: Failed to read data');
  });
});
