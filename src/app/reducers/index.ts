import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { formStylesNode, formStylesReducer, } from './formStyles/form-styles.reducer';
import { formFieldNode, formFieldReducer, IFormFieldState } from './formFields/formFields.reducer';
import { IGeneralFormState } from './interfaces';

export interface IState {
  [formStylesNode]: IGeneralFormState,
  [formFieldNode]: IFormFieldState
}

export const reducers: ActionReducerMap<IState, any> = {
  [formStylesNode]: formStylesReducer,
  [formFieldNode]: formFieldReducer
}

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];

