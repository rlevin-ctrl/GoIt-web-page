import * as api from './api/quotes-api';
import { getTodayDate } from '../utils/getTodayDate';

export const handleGetQuoteOfTheDay = async () => {
  try {
    const quote = await api.getQuoteOfTheDay();

    console.log('[QUOTE API] Raw API response:', quote);

    const today = getTodayDate();

    const quoteWithDate = {
      ...quote,
      date: today,
    };

    localStorage.setItem('quoteOfTheDay', JSON.stringify(quoteWithDate));

    return quoteWithDate;
  } catch (error) {
    console.error('Error fetching quote of the day:', error);

    throw {
      code: error.status || 500,
      message: error.message || 'Unexpected error',
    };
  }
};
