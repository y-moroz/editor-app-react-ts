import ColorPicker from './ColorPicker';
import { EditorPlugin } from '../../models/editor-plugin.interface';

export const COLOR_PICKER_PLUGIN_CONFIG: EditorPlugin<{}>[] = [{
  component: ColorPicker
}];
