import React, { useContext, useEffect, useState } from 'react';
import { ColorChangeHandler, GithubPicker } from 'react-color';
import { FaPalette } from 'react-icons/fa';
import './ColorPicker.css';
import { EditorSelectionContext } from '../../TextEditor';
import useConstant from 'use-constant';
import TextFormatService from '../../shared/text-format.service';
import { EditorCommand } from '../../enums/editor.command';

const ColorPicker: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const [color, setColor] = useState('');
  const editorSelectionContext = useContext(EditorSelectionContext);

  const selectionChangeListener = useConstant(() => () => setColor(TextFormatService.queryCommandValue(EditorCommand.ForeColor)));

  useEffect(
    () => editorSelectionContext.registerSelectionChangeListener(selectionChangeListener),
    [editorSelectionContext, selectionChangeListener]
  );

  const onColorSelected: ColorChangeHandler = color => {
    TextFormatService.execCommand(EditorCommand.StyleWithCSS, true);
    TextFormatService.execCommand(EditorCommand.ForeColor, color.hex);
    TextFormatService.execCommand(EditorCommand.StyleWithCSS, false);
    setOpened(false);
  }
  return (
    <div className="color-picker">
      <button
        type="button"
        className="color-picker__button"
        onClick={() => setOpened(!opened)}
      >
        <FaPalette color={color}/>
      </button>
      {opened && (
        <div className="color-picker__content" onMouseDown={e => e.preventDefault()}>
          <GithubPicker onChangeComplete={onColorSelected}/>
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
