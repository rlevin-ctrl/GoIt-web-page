// js/services/subscriptions.js

import * as api from './api/subscriptions-api.js';

export const handleSubscription = async email => {
  try {
    const { message } = await api.createSubscription(email);

    return message;

  } catch (error) {
    const status = error?.status;
    const message =
      error?.message || `Unexpected error (${status || 'unknown'})`;

    throw {
      code: status,
      message,
    };
  }
};
