import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyPrimeNGModule } from "@ngx-formly/primeng";
import { AccordionModule } from "primeng/accordion";

import { AppComponent } from "./app.component";
import { AccordionComponent } from "./accordion/accordion.component";

import { FormlyHorizontalWrapper } from "./forms/horizontal-wrapper";
import { RepeatTypeComponent } from "./forms/repeat-section.type";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";
import { FuneralPlanApplicationComponent } from "./forms/funeral-plan-application/funeral-plan-application.component";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlyPrimeNGModule,
    AccordionModule,
    FormlyBootstrapModule,

    FormlyModule.forRoot({
      wrappers: [
        { name: "form-field-horizontal", component: FormlyHorizontalWrapper }
      ],
      validationMessages: [
        { name: "required", message: "This field is required" }
      ],
      types: [
        { name: "accordion", component: AccordionComponent },
        { name: "repeat", component: RepeatTypeComponent }
      ]
    })
  ],
  bootstrap: [FuneralPlanApplicationComponent],
  declarations: [
    AppComponent,
    AccordionComponent,
    FuneralPlanApplicationComponent,
    FormlyHorizontalWrapper,
    RepeatTypeComponent
  ]
})
export class AppModule {}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
