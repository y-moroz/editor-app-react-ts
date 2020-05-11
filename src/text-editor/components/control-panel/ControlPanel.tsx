import React from 'react';

import './ControlPanel.css';
import ControlPanelActionGroup from '../control-panel-action-group/ControlPanelActionGroup';
import { EditorPlugin } from '../../models/editor-plugin.interface';

interface ControlPanelProps {
  groups: {[key: number]: EditorPlugin<any>[]}
}

const ControlPanel: React.FC<ControlPanelProps> = props => {
  return (
    <div className="control-panel">
      {Object.keys(props.groups).map((groupId: string) => (
        <div className="control-panel__group" key={groupId}>
          <ControlPanelActionGroup plugins={props.groups[Number(groupId)]}/>
        </div>
      ))}
    </div>
  );
}

export default ControlPanel;
