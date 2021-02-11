import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "formly-app-example",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  accordion: FormlyFieldConfig = {
    // key: 'accord',
    type: "accordion",
    templateOptions: {
      activeIndex: 1,
      onOpen: event => console.log("Opened"),
      onClose: event => console.log("Closed")
    },
    fieldGroup: [
      // Tab1
      {
        key: "accord1",
        templateOptions: { header: "Personal Information" },
        fieldGroup: [
          {
            key: "name",
            type: "input",
            templateOptions: { label: "Name" }
          }
        ]
      },
      {
        key: "accord2",
        templateOptions: { header: "Accordion Two" },
        fieldGroup: [
          {
            key: "age",
            type: "input",
            templateOptions: { label: "age" }
          }
        ]
      }
    ]
  };
  fields: FormlyFieldConfig[] = [this.accordion];
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
