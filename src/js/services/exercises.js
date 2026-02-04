import * as api from './api/exercises-api.js';

export const handleGetExercisesByFilters = async query => {
  try {
    const exercises = await api.getExercisesByFilters(query);
    return exercises;
  } catch (error) {
    console.error('Error loading exercises by filters:', error);
    throw error;
  }
};

export const handleUpdateExerciseRating = async (id, body) => {
  try {
    const response = await api.updateExerciseRating(id, body);
    console.log('Rating updated successfully');
    return response;
  } catch (error) {
    console.error('Error updating exercise rating:', error);
    throw error;
  }
};

export const handleGetExerciseById = async id => {
  try {
    const exercise = await api.getExerciseById(id);
    return exercise;
  } catch (error) {
    console.error('Error loading exercise by ID:', error);
    throw error;
  }
};
