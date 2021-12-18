import type { RequestHandler } from '@sveltejs/kit';
import { getQuestions } from '$lib/utils/questions';

export const get: RequestHandler = async () => {
  const questions = await getQuestions();
  return { body: JSON.stringify(questions) };
};
