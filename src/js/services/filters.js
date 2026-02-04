import * as api from './api/filters-api.js';

export const handleGetFilters = async query => {
  try {
    const filters = await api.getFilters(query);
    return filters;
  } catch (error) {
    console.error('Error loading filters:', error);
    throw error;
  }
};
