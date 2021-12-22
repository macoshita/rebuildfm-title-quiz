import { sample } from '$lib/utils/utils';
import { writable } from 'svelte/store';

export interface Question {
  episode: number;
  title: string;
  separatedTitle: string[];
  subtitle: string;
  corrects: string[];
}

export interface Answer {
  inputs?: string[];
}

export const questions = writable<Question[]>([]);

export const answers = writable<Answer[]>([]);

export const initPlay = async (questionSize: number): Promise<void> => {
  const allQuestions = (await import('$lib/data/questions.json')).default;
  const qs = sample(allQuestions, questionSize).map((q) => ({
    ...q,
    separatedTitle: q.title.split('###')
  }));

  questions.set(qs);
  answers.set(qs.map(() => ({})));
};
