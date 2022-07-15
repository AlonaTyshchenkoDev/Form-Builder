import { Component } from '@angular/core';
import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { IDropItem } from '../interfaces';
import { EComponent } from '../form-items/enums';
import { selectFormStyles } from '../../../reducers/formStyles/form-styles.select';
import { PushNewFieldAction } from '../../../reducers/formFields/formFields.action';
import { selectFormField } from '../../../reducers/formFields/formFields.select';
import { ItemsService } from '../../../services/items.service';
import { IFormFieldState } from '../../../reducers/formFields/formFields.reducer';
import { IGeneralFormState } from '../../../reducers/interfaces';

@Component({
  selector: 'app-form-constructor',
  templateUrl: './form-constructor.component.html',
  styleUrls: ['./form-constructor.component.scss']
})
export class FormConstructorComponent {

  public items: IDropItem[] = [];
  public EComponent = EComponent;
  public selectedItem: number | null = null;

  public generalStyles$: Observable<IGeneralFormState> = this.store$.pipe(select(selectFormStyles));
  public fields$: Observable<IFormFieldState> = this.store$.pipe(select(selectFormField));

  constructor(
    private store$: Store,
    private itemService: ItemsService
  ) {
  }

  drop(event: CdkDragDrop<IDropItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      return;
    }

    const elementData = {
      name: event.previousContainer.data[event.previousIndex]?.name,
      id: Math.random().toString(16).slice(2)
    };

    copyArrayItem([elementData], this.items, 0, event.currentIndex);
    this.store$.dispatch(new PushNewFieldAction(elementData));
  }

  changeSelectedItem(id: number): void {
    if (this.selectedItem === id) {
      this.selectedItem = null;
      this.itemService.activeItemIdx$.next(null);
      return;
    }

    this.selectedItem = id;
    this.itemService.activeItemIdx$.next(this.items[this.selectedItem].id || '');
  }
}
