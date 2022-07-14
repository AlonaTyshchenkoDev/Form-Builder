import { EComponent } from '../../modules/main-page/form-items/enums';
import {
  CButtonDefaultStyles,
  CCheckboxDefaultStyles,
  CDefaultStyles,
  CInputDefaultStyles,
  CSelectDefaultStyles,
  CTextAreaDefaultStyles
} from './defaultFieldStyles';
import { IFieldStyles } from '../../modules/main-page/interfaces';

export function setNewFieldStylesFunction(field: string): IFieldStyles {
  switch (field) {
    case EComponent.Input:
      return CInputDefaultStyles;
    case EComponent.Button:
      return CButtonDefaultStyles;
    case EComponent.Select:
      return CSelectDefaultStyles;
    case EComponent.Textarea:
      return CTextAreaDefaultStyles;
    case EComponent.Checkbox:
      return CCheckboxDefaultStyles;
    default:
      return CDefaultStyles;
  }
}
