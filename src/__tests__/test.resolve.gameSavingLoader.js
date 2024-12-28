import read from '../js/reader';
import json from '../js/parser';
import GameSaving from '../js/gameSaving';
import GameSavingLoader from '../js/gameSavingLoader';

jest.mock('../js/reader');
jest.mock('../js/parser');

describe('GameSavingLoader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should load game saving successfully', async () => {
    const mockData = new ArrayBuffer(100);
    const mockJsonData = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    const mockParsedData = JSON.parse(mockJsonData);

    read.mockResolvedValue(mockData);
    json.mockResolvedValue(mockJsonData);

    const saving = await GameSavingLoader.load();

    expect(saving).toBeInstanceOf(GameSaving);
    expect(saving.id).toBe(mockParsedData.id);
    expect(saving.created).toBe(mockParsedData.created);
    expect(saving.userInfo).toEqual(mockParsedData.userInfo);
  });
});
