import { toggleModal } from '../services/modal';
import * as exercises from '../services/exercises';
import { modalRefs, refs } from '../constants/refs.js';

const modal = document.querySelector('[data-modal="rating"]');
const form = modal?.querySelector('form');
const ratingInputs = form?.querySelectorAll('input[name="rating"]');
const ratingValue = form?.querySelector('.rating-value');
const closeBtn = modal?.querySelector('[data-modal-close]');

ratingInputs?.forEach(input => {
  input.addEventListener('change', () => {
    ratingValue.textContent = input.value + '.0';
  });
});

form?.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const rating = +form.querySelector('[name="rating"]:checked')?.value || 0;
  const email = form.querySelector('[name="email"]').value.trim();
  const comment = form.querySelector('[name="comment"]').value.trim();

  if (!rating || !email || !comment) {
    iziToast.error({ title: 'Please fiil in all fields' });
    return;
  }

  const emailRegex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!emailRegex.test(email)) {
    iziToast.error({ title: 'Type valid email' });
    return;
  }

  try {
    const exerciseData = modalRefs.modalRating.exerciseData;
    if (!exerciseData) {
      throw new Error('Exercise data is not available.');
    }
    const updateExerciseRatingId = exerciseData._id;

    const updateExerciseRatingBody = {
      rate: rating,
      email: email,
      review: comment,
    };
    const data = await exercises.handleUpdateExerciseRating(
      updateExerciseRatingId,
      updateExerciseRatingBody
    );

    closeRatingModal();
  } catch (error) {
  } finally {
  }
}

closeBtn?.addEventListener('click', closeRatingModal);

function closeRatingModal() {
  modal?.classList.add('hidden');
  toggleModal();
}
