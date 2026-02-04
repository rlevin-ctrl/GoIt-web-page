import { handleGetQuoteOfTheDay } from '../services/quotes.js';
import { getTodayDate } from '../utils/getTodayDate.js';

export async function renderQuoteOfTheDay() {
  console.log('QUOTE FUNCTION STARTED');

  console.log('[QUOTE] renderQuoteOfTheDay() started');

  const quoteTextcontainer = document.querySelector('.quote-day-card-text');
  const quoteAuthorContainer = document.querySelector('.quote-day-card-author');

  console.log('[QUOTE] DOM elements:', {
    quoteTextcontainer,
    quoteAuthorContainer,
  });

  if (!quoteTextcontainer || !quoteAuthorContainer) {
    console.warn('[QUOTE] DOM elements NOT FOUND — quote cannot be rendered');
    return;
  }

  try {
    const ls_data_raw = localStorage.getItem('quoteOfTheDay');
    console.log('[QUOTE] Raw LS data:', ls_data_raw);

    const ls_data = JSON.parse(ls_data_raw);
    const todayDate = getTodayDate();

    console.log('[QUOTE] Today date:', todayDate);
    console.log('[QUOTE] Parsed LS data:', ls_data);

    let authorName;
    let authorQuote;

    if (ls_data && ls_data.date === todayDate) {
      console.log('[QUOTE] Using cached quote from localStorage');
      authorName = ls_data.author;
      authorQuote = ls_data.quote;
    } else {
      console.log('[QUOTE] Fetching new quote from API...');
      const requestData = await handleGetQuoteOfTheDay();

      console.log('[QUOTE] API response:', requestData);

      authorName = requestData?.author;
      authorQuote = requestData?.quote;

      console.log('[QUOTE] Saving new quote to localStorage');

      localStorage.setItem(
        'quoteOfTheDay',
        JSON.stringify({
          date: todayDate,
          author: authorName,
          quote: authorQuote,
        })
      );
    }

    console.log('[QUOTE] Final quote:', { authorName, authorQuote });

    quoteTextcontainer.textContent = authorQuote || 'No quote available';
    quoteAuthorContainer.textContent = authorName || 'Unknown author';

    console.log('[QUOTE] Quote successfully rendered');
  } catch (error) {
    console.error('[QUOTE] Error loading quote of the day:', error);
  }
}
