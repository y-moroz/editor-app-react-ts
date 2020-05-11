import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';

import './SimpleAction.css';
import useConstant from 'use-constant';
import { EditorSelectionContext } from '../../TextEditor';
import TextFormatService from '../../shared/text-format.service';
import { EditorCommand } from '../../enums/editor.command';

export interface SimpleActionProps {
  command: EditorCommand,
  icon: React.ComponentType<{className: string}>
}

const SimpleAction: React.FC<SimpleActionProps> = props => {
  const [isActive, setIsActive] = useState(TextFormatService.queryCommandState(props.command));
  const Icon = props.icon;
  const editorSelectionContext = useContext(EditorSelectionContext);

  const selectionChangeListener = useConstant(() => () => setIsActive(TextFormatService.queryCommandState(props.command)));

  useEffect(
    () => editorSelectionContext.registerSelectionChangeListener(selectionChangeListener),
    [editorSelectionContext, selectionChangeListener]
  );

  return (
    <button
      type="button"
      className={classNames({
        'action-button': true,
        'action-button--active': isActive
      })}
      onClick={() => TextFormatService.execCommand(props.command)}
    >
      <Icon className="action-button__icon"/>
    </button>
  );
}

export default SimpleAction;
