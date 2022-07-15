import { Action } from '@ngrx/store';

import { IFormFieldPayload } from '../interfaces';
import { IFieldStyles } from '../../modules/main-page/interfaces';

export enum EFormFieldChanges {
  pushNewField = '[FORM FIELD] pushNewField',
  updateFieldStyles = '[FORM FIELD] updateFieldStyles'
}

export class PushNewFieldAction implements Action {
  readonly type = EFormFieldChanges.pushNewField;

  constructor(public payload: IFormFieldPayload) {
  }
}

export class UpdateFieldStylesAction implements Action {
  readonly type = EFormFieldChanges.updateFieldStyles;

  constructor(public payload: { id: string, styles: IFieldStyles }) {
  }
}

export type formFieldActionType = PushNewFieldAction | UpdateFieldStylesAction;
