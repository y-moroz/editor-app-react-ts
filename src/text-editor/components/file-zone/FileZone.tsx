import React, { forwardRef } from 'react';
import './FileZone.css';

const FileZone = forwardRef<HTMLDivElement, {children: React.ReactNode}>((props, ref) => (
  <div id="file-zone" ref={ref}>
    <div id="file" contentEditable={true} suppressContentEditableWarning>
      {props.children}
    </div>
  </div>
));

export default FileZone;
