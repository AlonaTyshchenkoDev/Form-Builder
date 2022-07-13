import { Action } from '@ngrx/store';

import { IGeneralFormState } from '../interfaces';

export enum EFormChanges {
  changeFormStyles = '[FORM STYLES] changeForm',
}

export class SetFormStylesAction implements Action {
  readonly type = EFormChanges.changeFormStyles;

  constructor(public payload: IGeneralFormState) {
  }
}

export type FormActionsType = SetFormStylesAction




