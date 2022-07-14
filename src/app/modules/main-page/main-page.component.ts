import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  template: `
    <app-header></app-header>
    <app-alert></app-alert>
    <div class="main" cdkDropListGroup>
      <app-styles-building></app-styles-building>
      <app-form-constructor></app-form-constructor>
      <app-form-items></app-form-items>
    </div>
`,
})
export class MainPageComponent {}
