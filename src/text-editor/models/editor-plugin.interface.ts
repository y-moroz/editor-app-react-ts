import React from 'react';

export interface EditorPlugin<T> {
  component: React.ComponentType<T>,
  props?: T,
  groupId?: number
}
