import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
import { BaseFormComponent } from "../base-form.component";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "jhi-funeral-plan-application",
  templateUrl: "./funeral-plan-application.component.html",
  styleUrls: ["./funeral-plan-application.component.scss"]
})
export class FuneralPlanApplicationComponent extends BaseFormComponent {
  private _referenceNumber: string;

  

  options: FormlyFormOptions = {
    formState: {
      cannotProceed: true,
      isCashPayment: false,
      communicationPreference: null,
      hasPostalAddress: false,
      hasResidentialAddress: false
    }
  };

  @Input()
  set referenceNumber(referenceNumber: string) {
    this.findFieldConfig(
      this.fields,
      "PolicyNumber"
    ).defaultValue = referenceNumber;
  }

  @Input()
  set formModel(formModel: any) {
    if (this.isEmptyObject(formModel)) {
      this.model = {};
    } else {
      this.model = formModel;
    }
  }

  private isEmptyObject(obj: any) {
    return JSON.stringify(obj) === "{}";
  }
  /*
    private createNewModel() {
        const newModel = {
            LifeAssureds: { LifeAssured: { Addresses: [{ AddressType: 'Postal' }] } }
        };
        return newModel;
    }
*/
  @Output()
  formSubmitted = new EventEmitter<string>();

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
        key: 'PolicNO',
        templateOptions: { header: 'Policy Number' },
        fieldGroup: [
          {
            key: "PolicyNumber",
            type: "input",
            defaultValue: "",
            templateOptions: { disabled: true, required: true },
          },
          {
            key: "LifeAssureds",
            fieldGroup: [
              {
                key: "LifeAssured",
                fieldGroup: [
                  {
                  key: "Underwriting",
                  fieldGroup: [
                    {
                      template: `<h5 class="card-title">Disclosure By Consultant</h5>`
                    },
                    {
                      key: "FnaIdentityDisclosure",
                      type: "radio",
                      templateOptions: {
                      required: true,
                      label:
                      "Do you acknowledge sight and verification of the client's identity document?",
                      options: [
                        { label: "Yes", value: "Yes" },
                        { label: "No", value: "No" }
                  ]
                    },
                    validators: {
                      FnaIdentityDisclosure: {
                        expression: c => c.value === "Yes",
                        message: (error, field: FormlyFieldConfig) =>
                        `Must be Yes in order to proceed with application`
                        }
                    }
                    },
                                    {
                  template: `<h5 class="card-title">Disclosure By Client (Main Member)</h5>`
                },
                {
                  key: "OtherPolicy",
                  type: "radio",
                  templateOptions: {
                    required: true,
                    label:
                      "Do you or your immediate family have any other funeral policies with us or other insurance companies? The main member or any of the dependants on the policy can have a maximum of R75 000 funeral cover across all types of funeral policies (including EasyCover).",
                    options: [
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" }
                    ]
                  },
                  expressionProperties: {
                    "templateOptions.disabled": (model, formState) =>
                      model.FnaIdentityDisclosure !== "Yes"
                  }
                },
                {
                  key: "Cancelled",
                  type: "radio",
                  templateOptions: {
                    required: true,
                    label:
                      "Have you cancelled an existing policy within the past four months to apply for this policy or do you intend to do so in the next four months? If 'Yes', you will have to complete a Replacement Policy Advice Record.",
                    options: [
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" }
                    ]
                  },
                  expressionProperties: {
                    "templateOptions.disabled": (model, formState) =>
                      model.FnaIdentityDisclosure !== "Yes"
                  }
                },
                {
                  template: `<h5 class="card-title">Financial Needs Analysis</h5>`
                },
                {
                  key: "ProductUnderstood",
                  type: "radio",
                  templateOptions: {
                    required: true,
                    label: "Has this product been explained to you adequately?",
                    options: [
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" }
                    ]
                  },
                  expressionProperties: {
                    "templateOptions.disabled": (model, formState) =>
                      model.FnaIdentityDisclosure !== "Yes",
                    "options.formState.cannotProceedSet": (
                      model,
                      formState
                    ) => {
                      formState.cannotProceed =
                        model.FnaIdentityDisclosure !== "Yes" ||
                        model.ProductUnderstood !== "Yes";
                      return true;
                    }
                  },
                  validators: {
                    ProductUnderstood: {
                      expression: c => c.value === "Yes",
                      message: (error, field: FormlyFieldConfig) =>
                        `Must be Yes in order to proceed with application`
                    }
                  }
                },
                {
                  key: "hasDependents",
                  type: "radio",
                  templateOptions: {
                    required: true,
                    type: "checkbox",
                    label: "Do you have any dependents?",
                    options: [
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" }
                    ]
                  },
                  expressionProperties: {
                    "templateOptions.disabled": (model, formState) =>
                      formState.cannotProceed
                  }
                },
                {
                  key: "DependantsNeedAssistance",
                  type: "radio",
                  templateOptions: {
                    required: true,
                    type: "checkbox",
                    label:
                      "If 'Yes', would they need financial assistance with the burial of loved ones?",
                    options: [
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" }
                    ]
                  },
                  expressionProperties: {
                    "templateOptions.disabled": (model, formState) =>
                      formState.cannotProceed
                  }
                }
                  ]
                  }
                ]
              }

            ]
          }
          
        ],
        
      },
      {
        key: 'APPdetails',
        templateOptions: { header: 'Applicants Details' },
        fieldGroupClassName: '',
        fieldGroup: [
            {
              className: '',
              key: "CISNumber",
              type: "input",
              wrappers: ["form-field-horizontal"],
              templateOptions: {
                label: "CIS Number"
              },
              expressionProperties: {
                "templateOptions.disabled": (model, formState) =>
                  formState.cannotProceed
              }
            },
            {
              className: '',
              key: "Title",
              type: "select",
              wrappers: ["form-field-horizontal"],
              templateOptions: {
                label: "Title",
                required: true,
                options: [
                  { label: "Mr", value: "Mr" },
                  { label: "Miss", value: "Miss" }
                ],
                valueProp: "id",
                labelProp: "value"
              },
              expressionProperties: {
                "templateOptions.disabled": (model, formState) =>
                  formState.cannotProceed
              }
            },
            {
              className: '',
              key: "Gender",
              type: "radio",
              wrappers: ["form-field-horizontal"],
              templateOptions: {
                label: "Gender",
                required: true,
                options: [
                  { label: "Female", value: "Female" },
                  { label: "Male", value: "Male" }
                ]
              },
              expressionProperties: {
                "templateOptions.disabled": (model, formState) =>
                  formState.cannotProceed
              }
            },
        ]
      }
    ]


  };
  fields: FormlyFieldConfig[] = [this.accordion];
}
