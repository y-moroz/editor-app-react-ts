export class EditorSelectionService {
  selectionListeners: Set<(event: Event, selection: Selection) => void> = new Set();

  registerSelectionChangeListener(listener: (event: Event, selection: Selection) => void): () => void {
    this.selectionListeners.add(listener);
    return () => this.selectionListeners.delete(listener);
  };

  selectionChangeListener(event: Event, editorElement: HTMLElement | null) {
    let selection = document.getSelection();
    if (selection && editorElement && editorElement.contains(selection.anchorNode)) {
      for (let listener of this.selectionListeners) {
        listener(event, selection)
      }
    }
  };
}
