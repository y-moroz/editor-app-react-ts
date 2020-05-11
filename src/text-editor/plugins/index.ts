import { SIMPLE_ACTION_PLUGIN_CONFIG } from './simple-action';
import { SYNONYMS_ACTION_PLUGIN_CONFIG } from './synonyms';
import { COLOR_PICKER_PLUGIN_CONFIG } from './color-picker';
import { EditorPlugin } from '../models/editor-plugin.interface';

const PLUGINS: EditorPlugin<any>[] = [
  ...SIMPLE_ACTION_PLUGIN_CONFIG,
  ...SYNONYMS_ACTION_PLUGIN_CONFIG,
  ...COLOR_PICKER_PLUGIN_CONFIG
];

export default PLUGINS;
