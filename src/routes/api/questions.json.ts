import type { RequestHandler } from '@sveltejs/kit';
import { getQuestions } from '$lib/questions';

export const get: RequestHandler = async () => {
  const body = await getQuestions();
  return { body };
};
