import { sample } from '$lib/utils/utils';
import { writable } from 'svelte/store';

export interface Question {
  episode: number;
  title: string;
  subtitle: string;
  corrects: string[];
  separatedTitle: string[];
  inputs?: string[];
}

export const questions = writable<Question[]>([]);

export const initPlay = async (questionSize: number): Promise<void> => {
  const allQuestions = (await import('$lib/data/questions.json')).default;
  const qs = sample(allQuestions, questionSize).map((q) => {
    const separatedTitle = q.title.split('###');
    return {
      ...q,
      separatedTitle,
      inputs: separatedTitle.map(() => '')
    };
  });

  questions.set(qs);
};

export const scene = writable<'title' | 'play' | 'result'>('title');
