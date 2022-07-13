import { createFeatureSelector, createSelector } from '@ngrx/store';

import { formStylesNode } from './form-styles.reducer';
import { IGeneralFormState } from '../interfaces';

export const selectFormLabelFeature = createFeatureSelector<IGeneralFormState>(formStylesNode)

export const selectFormStyles = createSelector(
  selectFormLabelFeature,
  (state: IGeneralFormState): IGeneralFormState => state
);
