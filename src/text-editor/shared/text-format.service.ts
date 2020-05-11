import { EditorCommand } from '../enums/editor.command';

const execCommand = (command: EditorCommand, value?: any): boolean => {
  const range = getCurrentRangePosition();
  const result = document.execCommand(command, false, value);
  setNewRangePosition(range);
  return result;
}

const queryCommandState = (command: EditorCommand): boolean => {
  return document.queryCommandState(command);
}

const queryCommandValue = (command: EditorCommand): string => {
  return document.queryCommandValue(command);
}

const setNewRangePosition = (range: Range | null): void => {
  const selection = document.getSelection();
  if (range && selection) {
    selection.removeAllRanges();
    selection.addRange(range);
  }
}

const getCurrentRangePosition = (): Range | null => {
  const selection = document.getSelection();
  if (selection && selection.type === 'Caret' && selection.getRangeAt && selection.rangeCount) {
    return selection.getRangeAt(0);
  }
  return null;
}

export default {
  execCommand,
  queryCommandState,
  queryCommandValue
};
