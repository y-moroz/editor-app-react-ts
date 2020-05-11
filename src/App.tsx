import React, { useEffect, useState } from 'react';
import './App.css';
import { getMockText } from './text.service';
import { groupBy, isNil } from 'ramda';
import PLUGINS from './text-editor/plugins';
import TextEditor from './text-editor/TextEditor';

const groupedPlugins = groupBy(
  plugin => String(!isNil(plugin.groupId) ? plugin.groupId : 0),
  PLUGINS
);

const  App = () => {
  const [text, setText] = useState('');

  useEffect(() => {getMockText().then(text => setText(text))}, []);

  return (
    <div className="App">
      <header>
        <span>Simple Text Editor</span>
      </header>
      <main>
        <TextEditor groupedPlugins={groupedPlugins}>{text}</TextEditor>
      </main>
    </div>
  );
}

export default App;
