/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import cardService from './card.service';

jest.mock('./card.service');

describe('Card Services', () => {
  const cards = [
    {
      id: 'h9cccne4J',
      name: 'sdt',
      pan: '79927398713',
      limit: '23432',
      balance: 0,
    },
    {
      id: 'FYjE_YUJs',
      name: 'ee',
      pan: '79927398713',
      limit: '11',
      balance: 0,
    },
  ];
  const mockedResponse = {
    data: cards,
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
  };
  const mockedAddCardResponse = {
    data: cards[0],
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
  };
  beforeEach(() => {
    cardService.getAll.mockResolvedValue(mockedResponse);
    cardService.add.mockResolvedValue(mockedAddCardResponse);
  });

  test('should call the service annd return cards list', async () => {
    expect(cardService.getAll).not.toHaveBeenCalled();
    const data = await cardService.getAll();
    expect(cardService.getAll).toHaveBeenCalled();
    expect(data.data).toEqual(cards);
  });
  test('should call the add card service annd return the card with id', async () => {
    expect(cardService.add).not.toHaveBeenCalled();
    const data = await cardService.add({
      name: 'sdt',
      pan: '79927398713',
      limit: '23432',
    });
    expect(cardService.add).toHaveBeenCalled();
    expect(data.data).toEqual(cards[0]);
  });
});
