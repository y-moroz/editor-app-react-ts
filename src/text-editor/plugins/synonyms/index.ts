import Synonyms from './Synonyms';
import { EditorPlugin } from '../../models/editor-plugin.interface';

export const SYNONYMS_ACTION_PLUGIN_CONFIG: EditorPlugin<{}>[] = [{
  component: Synonyms
}];
