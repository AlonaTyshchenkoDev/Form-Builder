import { createFeatureSelector, createSelector } from '@ngrx/store';

import { formFieldNode, IFormFieldState } from './formFields.reducer';

export const selectFieldFormFeature = createFeatureSelector<IFormFieldState>(formFieldNode);

export const selectFormField = createSelector(
  selectFieldFormFeature,
  (state: IFormFieldState): IFormFieldState => state
);
