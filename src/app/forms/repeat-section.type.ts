import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
    selector: 'formly-repeat-section',
    template: `
    <div *ngFor="let field of field.fieldGroup; let i = index;" >
      <hr>
      <formly-field [field]="field"></formly-field>
      <hr>
      <div class="col-sm-2 d-flex align-items-center">
        <button class="btn btn-danger" type="button" [disabled]="to.disabled" (click)="remove(i)">Remove</button>
      </div>
    </div>
    <div style="margin:30px 0;">
      <button class="btn btn-primary" type="button" [disabled]="to.disabled" (click)="add()">{{ to.addText }}</button>
    </div>
  `
})
export class RepeatTypeComponent extends FieldArrayType {}
