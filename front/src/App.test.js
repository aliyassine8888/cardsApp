/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import cardService from './services/card.service';

jest.mock('./services/card.service');
describe('App()', () => {
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
  beforeEach(() => {
    cardService.getAll.mockResolvedValue(mockedResponse);
  });

  test('should call the service annd return cards list', async () => {
    expect(cardService.getAll).not.toHaveBeenCalled();
    const data = await cardService.getAll();
    expect(cardService.getAll).toHaveBeenCalled();
    expect(data.data).toEqual(cards);
  });

  test('renders the App Container Correclty', () => {
    render(<App />);
    const appContainer = screen.getAllByTestId(/App/i);
    expect(appContainer).toBeTruthy();
  });
});
