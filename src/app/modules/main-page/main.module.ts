import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';

import { FormItemsComponent } from './form-items/form-items.component';
import { FormConstructorComponent } from './form-constructor/form-constructor.component';
import { StylesBuildingComponent } from './styles-building/styles-building.component';
import { AlertComponent } from './alert/alert.component';
import { MainPageComponent } from './main-page.component';

@NgModule({
  declarations: [
    FormItemsComponent,
    FormConstructorComponent,
    StylesBuildingComponent,
    AlertComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    RouterModule.forChild([
      {path: '', component: MainPageComponent}
    ])
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  exports: []
})
export class MainModule {
}
