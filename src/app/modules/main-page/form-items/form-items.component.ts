import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

import { IDropItem } from '../interfaces';
import { EComponent } from './enums';

@Component({
  selector: 'app-form-items',
  templateUrl: './form-items.component.html',
  styleUrls: ['./form-items.component.scss']
})
export class FormItemsComponent {

  public items: IDropItem[] = [
    {name: EComponent.Input},
    {name: EComponent.Button},
    {name: EComponent.Checkbox},
    {name: EComponent.Select},
    {name: EComponent.Textarea}
  ];

  drop(event: CdkDragDrop<IDropItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      return;
    }
    copyArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  }
}

