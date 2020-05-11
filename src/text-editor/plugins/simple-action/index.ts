import SimpleAction, { SimpleActionProps } from './SimpleAction';
import {
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft, FaAlignRight,
  FaBold,
  FaIndent,
  FaItalic,
  FaOutdent, FaRemoveFormat,
  FaStrikethrough,
  FaUnderline
} from 'react-icons/fa';
import { EditorPlugin } from '../../models/editor-plugin.interface';
import { EditorCommand } from '../../enums/editor.command';

const ALIGN_ACTIONS_GROUP_ID = 1;
const INDENT_ACTIONS_GROUP_ID = 2;
const GENERAL_ACTIONS_GROUP_ID = 3;

const BOLD_ACTION: EditorPlugin<SimpleActionProps> = {
  component: SimpleAction,
  props: {
    command: EditorCommand.Bold,
    icon: FaBold
  }
};

const ITALIC_ACTION: EditorPlugin<SimpleActionProps> = {
  component: SimpleAction,
  props: {
    command: EditorCommand.Italic,
    icon: FaItalic
  }
};

const UNDERLINE_ACTION: EditorPlugin<SimpleActionProps> = {
  component: SimpleAction,
  props: {
    command: EditorCommand.Underline,
    icon: FaUnderline
  }
};

const STRIKE_THROUGH_ACTION: EditorPlugin<SimpleActionProps> = {
  component: SimpleAction,
  props: {
    command: EditorCommand.StrikeThrough,
    icon: FaStrikethrough
  }
};

const ALIGN_JUSTIFY_ACTION: EditorPlugin<SimpleActionProps> = {
  groupId: ALIGN_ACTIONS_GROUP_ID,
  component: SimpleAction,
  props: {
    command: EditorCommand.JustifyFull,
    icon: FaAlignJustify
  }
};

const ALIGN_LEFT_ACTION: EditorPlugin<SimpleActionProps> = {
  groupId: ALIGN_ACTIONS_GROUP_ID,
  component: SimpleAction,
  props: {
    command: EditorCommand.JustifyLeft,
    icon: FaAlignLeft
  }
};

const ALIGN_CENTER_ACTION: EditorPlugin<SimpleActionProps> = {
  groupId: ALIGN_ACTIONS_GROUP_ID,
  component: SimpleAction,
  props: {
    command: EditorCommand.JustifyCenter,
    icon: FaAlignCenter
  }
};

const ALIGN_RIGHT_ACTION: EditorPlugin<SimpleActionProps> = {
  groupId: ALIGN_ACTIONS_GROUP_ID,
  component: SimpleAction,
  props: {
    command: EditorCommand.JustifyRight,
    icon: FaAlignRight
  }
};

const INDENT_INCREASE_ACTION: EditorPlugin<SimpleActionProps> = {
  groupId: INDENT_ACTIONS_GROUP_ID,
  component: SimpleAction,
  props: {
    command: EditorCommand.Indent,
    icon: FaIndent
  }
};

const INDENT_DECREASE_ACTION: EditorPlugin<SimpleActionProps> = {
  groupId: INDENT_ACTIONS_GROUP_ID,
  component: SimpleAction,
  props: {
    command: EditorCommand.Outdent,
    icon: FaOutdent
  }
};

const CLEAR_FORMAT_ACTION: EditorPlugin<SimpleActionProps> = {
  groupId: GENERAL_ACTIONS_GROUP_ID,
  component: SimpleAction,
  props: {
    command: EditorCommand.RemoveFormat,
    icon: FaRemoveFormat
  }
};

export const SIMPLE_ACTION_PLUGIN_CONFIG: EditorPlugin<SimpleActionProps>[] = [
  BOLD_ACTION,
  ITALIC_ACTION,
  UNDERLINE_ACTION,
  STRIKE_THROUGH_ACTION,

  ALIGN_JUSTIFY_ACTION,
  ALIGN_LEFT_ACTION,
  ALIGN_RIGHT_ACTION,
  ALIGN_CENTER_ACTION,

  INDENT_INCREASE_ACTION,
  INDENT_DECREASE_ACTION,

  CLEAR_FORMAT_ACTION
];
