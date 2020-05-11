import React from 'react';
import { EditorPlugin } from '../../models/editor-plugin.interface';

interface ControlPanelActionGroupProps {
  plugins: EditorPlugin<any>[]
}

const ControlPanelActionGroup: React.FC<ControlPanelActionGroupProps> = props => {
  const renderedPlugins = props.plugins.map((plugin, i) => {
    const TagName = plugin.component;
    return <TagName {...plugin.props} key={i}/>;
  });
  return (
    <div className="control-panel-actions">
      {renderedPlugins}
    </div>
  );
}

ControlPanelActionGroup.defaultProps = {
  plugins: []
};

export default ControlPanelActionGroup;
