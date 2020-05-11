import { useState } from 'react';
import useConstant from 'use-constant';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { loadSynonyms } from './synonyms-api';
import { useAsync } from 'react-async-hook';

const useSearchSynonyms = () => {
  const [text, setText] = useState('');

  const debouncedLoadSynonyms = useConstant(() => AwesomeDebouncePromise(loadSynonyms, 300));

  const synonyms = useAsync(
    async (text: string) => {
      if (text.trim().length === 0) {
        return [];
      }
      return debouncedLoadSynonyms(text.trim())
        .catch(error => {
          console.error(`Error occurred while fetching synonyms: ${error.message}`);
          return [];
        });
    },
    [text]
  );

  return {
    text,
    synonyms,
    setText
  };
};

export {
  useSearchSynonyms
};
