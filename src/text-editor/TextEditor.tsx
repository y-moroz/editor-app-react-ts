import React, { createContext, useEffect, useRef } from 'react';
import ControlPanel from './components/control-panel/ControlPanel';
import FileZone from './components/file-zone/FileZone';
import useConstant from 'use-constant';
import { EditorPlugin } from './models/editor-plugin.interface';
import { EditorSelectionService } from './shared/editor-selection.service';

interface EditorSelectionContextType {
  registerSelectionChangeListener(listener: (event: Event, selection: Selection) => void): () => void
}

export const EditorSelectionContext = createContext<EditorSelectionContextType>({
  registerSelectionChangeListener: () => () => {}
});

interface TextEditorProps {
  groupedPlugins: {[key: number]: EditorPlugin<any>[]}
}

const TextEditor: React.FC<TextEditorProps> = props => {
  const fileZoneRefContainer: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
  const editorSelectionService = new EditorSelectionService();
  const editorSelectionContextValue = useConstant(() => ({
    registerSelectionChangeListener: editorSelectionService.registerSelectionChangeListener.bind(editorSelectionService)
  }));

  const selectionChangeListener = useConstant(() => (event: Event) => {
    editorSelectionService.selectionChangeListener(event, fileZoneRefContainer.current);
  });

  useEffect(
    () => {
      document.addEventListener('selectionchange', selectionChangeListener);
      return () => document.removeEventListener('selectionchange', selectionChangeListener);
    },
    [selectionChangeListener]
  );

  return (
    <EditorSelectionContext.Provider value={editorSelectionContextValue}>
      <ControlPanel groups={props.groupedPlugins}/>
      <FileZone ref={fileZoneRefContainer}>{props.children}</FileZone>
    </EditorSelectionContext.Provider>
  );
}

export default TextEditor;
