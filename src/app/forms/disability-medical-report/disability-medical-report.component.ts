import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
    selector: 'jhi-disability-medical-report',
    templateUrl: './disability-medical-report.component.html',
    styleUrls: ['./disability-medical-report.component.scss']
})
export class DisabilityMedicalReportComponent {
    form = new FormGroup({});
    model: any = {};
    options: FormlyFormOptions = {
        formState: {
            policyNumber: true,
            awesomeIsForced: false
        }
    };
    fields: FormlyFieldConfig[] = [
        {
            template: `<div class="card-header">Policy Number *<div>`
        },
        {
            key: 'referenceNumber',
            fieldGroupClassName: 'card-body row',
            fieldGroup: [
                {
                    className: 'col-4',
                    key: 'policyNumber',
                    type: 'input',
                    templateOptions: { required: true }
                }
            ]
        },
        {
            template: `<div class="card-header">Client\'s Details</div>`
        },
        {
            key: 'clientDetails',
            fieldGroupClassName: 'card-body',
            fieldGroup: [
                {
                    key: 'idNumber',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'ID Number',
                        required: true
                    }
                },
                {
                    key: 'dateofbirth',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        type: 'date',
                        label: 'Date of Event',
                        required: true
                    }
                },
                {
                    key: 'firstname',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Firstname',
                        required: true
                    }
                },
                {
                    key: 'surname',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        required: true,
                        label: 'Surname'
                    }
                },
                {
                    key: 'disabilityType',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Disability Type',
                        required: true
                    }
                }
            ]
        }
    ];

    submit() {
        console.log(this.model);
        alert(JSON.stringify(this.model));
        if (this.form.valid) {
            alert('The form is valid');
        }
    }
}
