const SYNONYMS_API_ROOT = 'https://api.datamuse.com/words';

export interface Synonym {
  word: string;
  score: number;
}

const loadSynonyms = async (word: string): Promise<Synonym[]> => {
  const response = await fetch(`${SYNONYMS_API_ROOT}?rel_syn=${word}`);
  if (!response.ok || response.status !== 200) {
    throw new Error('Failed to load synonyms');
  }
  return response.json();
};

export {
  loadSynonyms
};
