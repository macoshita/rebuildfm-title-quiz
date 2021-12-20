import { sample } from '$lib/utils/utils';
import { derived, writable } from 'svelte/store';

export interface Question {
  episode: number;
  title: string;
  separatedTitle: string[];
  subtitle: string;
  answers: string[];
}

export interface Answer {
  forms: string[];
}

export const questions = writable<Question[]>([]);

export const step = writable(1);

export const currentQuestion = derived(
  [questions, step],
  ([$questions, $step]) => $questions[$step - 1]
);

export const answers = writable<Answer[]>([]);

export const initPlay = async (questionSize: number): Promise<void> => {
  const allQuestions = (await import('$lib/data/questions.json')).default;
  const qs = sample(allQuestions, questionSize).map((q) => ({
    ...q,
    separatedTitle: q.title.split('###')
  }));

  questions.set(qs);
};
