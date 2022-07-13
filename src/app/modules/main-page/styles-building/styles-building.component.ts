import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';

import { selectFormStyles } from '../../../reducers/formStyles/form-styles.select';
import { SetFormStylesAction } from '../../../reducers/formStyles/form-styles.actions';
import { IGeneralStyles } from './interfaces';
import { IState } from '../../../reducers';
import { ItemsService } from '../../../services/items.service';
import { UpdateFieldStylesAction } from '../../../reducers/formFields/formFields.action';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-styles-building',
  templateUrl: './styles-building.component.html',
  styleUrls: ['./styles-building.component.scss']
})
export class StylesBuildingComponent implements OnInit {

  public label$: Observable<any> = this.store$.pipe(select(selectFormStyles));
  public panelOpenState = false;
  public panelFieldOpenState = false;
  public generalFormStyles: FormGroup;
  public fieldStyles: FormGroup;
  public fontWeightTypes: string[] = ['normal', 'bold', 'bolder', 'lighter'];
  public borderTypes: string[] =
    ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden'];

  constructor(
    private store$: Store<IState>,
    private formBuilder: FormBuilder,
    private itemService: ItemsService,
    private alertService: AlertService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.generalFormStyles = this.formBuilder.group({
      formTitle: [''],
      color: [''],
      background: [''],
      borderStyle: [''],
      borderColor: ['']
    });

    this.fieldStyles = this.formBuilder.group({
      id: [''],
      title: [''],
      placeholder: [''],
      width: [''],
      height: [''],
      fontSize: [''],
      fontWeight: [''],
      borderStyle: [''],
      color: [''],
      margin: ['']
    });
  }

  changeElemType(domElem: HTMLInputElement): void {
    domElem.type = 'color';
  }

  submitFormStyles(): void {
    const generalStyles: IGeneralStyles = this.generalFormStyles.value;
    this.store$.dispatch(new SetFormStylesAction(generalStyles));
    this.alertService.success('New styles were added to Form!💫');
  }

  submitFieldStyles() {
    const currentIdx = this.itemService.activeItemIdx$.getValue();

    if (!currentIdx) {
      this.alertService.warning('Select an element to add styles!');
      return;
    }
    const fieldStyles = {
      ...this.fieldStyles.value,
      width: this.fieldStyles.value.width + 'px',
      height: this.fieldStyles.value.height + 'px',
      fontSize: this.fieldStyles.value.fontSize + 'px',
    };
    Object.keys(fieldStyles).forEach((key) => {
      if (!!fieldStyles[key]) return;
      delete fieldStyles[key];
    });
    this.store$.dispatch(new UpdateFieldStylesAction({id: currentIdx, styles: fieldStyles}));
    this.alertService.success('New styles were added to element!💫');
  }
}
