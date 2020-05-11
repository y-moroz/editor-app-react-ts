import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import useConstant from 'use-constant';
import { useSearchSynonyms } from './hooks';
import './Synonyms.css';
import SelectionService  from '../../shared/selection.service';
import { EditorSelectionContext } from '../../TextEditor';

const Synonyms: React.FC = () => {
  const {synonyms, setText} = useSearchSynonyms();
  const listRefContainer: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
  const editorSelectionContext = useContext(EditorSelectionContext);

  const selectionChangeListener = useConstant(() => (event: Event, selection: Selection) => setText(selection.toString()));

  useEffect(
    () => editorSelectionContext.registerSelectionChangeListener(selectionChangeListener),
    [editorSelectionContext, selectionChangeListener]
  );

  useLayoutEffect(
    () => {
      const selection = document.getSelection();
      if (selection && selection.rangeCount > 0 && listRefContainer.current) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        listRefContainer.current.style.top = `${rect.top + rect.height + 2}px`;
        listRefContainer.current.style.left = `${rect.left - 4}px`;
      }
    },
    [synonyms.result]
  );

  if (synonyms.result && synonyms.result.length) {
    return (
      <div className="synonyms" ref={listRefContainer}>
        <div className="synonyms__title">Select word to replace:</div>

        <ul className="synonyms-list">
          {synonyms.result.map(({word}) => (
            <li key={word}>
              <button
                type="button"
                className="synonyms-list__button"
                onClick={() => SelectionService.replaceSelectedText(word)}
              >{word}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
}

export default Synonyms;

