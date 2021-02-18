import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
    selector: 'jhi-funeral-claim',
    templateUrl: './funeral-claim.component.html',
    styleUrls: ['./funeral-claim.component.scss']
})
export class FuneralClaimComponent {
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
            template: `<div class="card-header">DECEASED DETAILS</div>`
        },
        {
            key: 'deceasedDetails',
            fieldGroupClassName: 'card-body',
            fieldGroup: [
                {
                    key: 'idNumber',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Deceased ID Number',
                        required: true
                    }
                },
                {
                    key: 'dateOfEvent',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        type: 'date',
                        label: 'Date of Event',
                        required: true
                    }
                },
                {
                    key: 'natureOfIncident',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Nature of Incident',
                        required: true
                    }
                },
                {
                    key: 'doctorInitials',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: "Doctor's Intials"
                    }
                },
                {
                    key: 'doctorFirstname',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Doctor First Name'
                    }
                },
                {
                    key: 'doctorSurname',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Doctor Surname'
                    }
                },
                {
                    key: 'doctorPracticeNumber',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: "Doctor's Practice Number"
                    }
                },
                {
                    key: 'hospitalName',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Hospital name'
                    }
                }
            ]
        },
        {
            template: `<div class="card-header">DETAILS OF CLAIMANT</div>`
        },
        {
            key: 'claimantDetails',
            fieldGroupClassName: 'card-body',
            fieldGroup: [
                {
                    key: 'claimantFirstname',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'First name (claimant)'
                    }
                },
                {
                    key: 'claimantSurname',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Surname (claimant)'
                    }
                },
                {
                    key: 'claimantIdNumber',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'ID Number (claimant)'
                    }
                },
                {
                    key: 'addressLine1',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Address Line 1'
                    }
                },
                {
                    key: 'addressLine2',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Address Line 2'
                    }
                },
                {
                    key: 'suburb',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Suburb'
                    }
                },
                {
                    key: 'town',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Town'
                    }
                },
                {
                    key: 'postalCode',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Postal Code',
                        type: 'number'
                    }
                },
                {
                    key: 'cellNo',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Cell No',
                        type: 'number'
                    }
                },
                {
                    key: 'email',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Email'
                    }
                },
                {
                    key: 'telephoneNo',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Telephone No',
                        type: 'number'
                    }
                }
            ]
        },
        {
            template: `<div class="card-header">FOR NIFP OR EASYCOVER POLICIES TAKE OVER OPTION</div>`
        },
        {
            key: 'takeOverOption',
            fieldGroupClassName: 'card-body',
            fieldGroup: [
                {
                    key: 'takeoverpolicy',
                    type: 'radio',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        type: 'radio',
                        label: 'As the main member is deceased, would you like to take over this policy?',
                        required: true,
                        options: [
                            {
                                value: 'Yes',
                                key: 'Y'
                            },
                            {
                                value: 'No',
                                key: 'N'
                            }
                        ]
                    }
                },
                {
                    key: 'newMemberFirstName',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'First name (new member)'
                    }
                },
                {
                    key: 'newMemberSurname',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Surname (new member)'
                    }
                },
                {
                    key: 'newMemberIdNumber',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'ID Number (new member)'
                    }
                },
                {
                    key: 'communicationPreference',
                    type: 'radio',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        type: 'radio',
                        label: 'Communication Preference  (new member)',
                        options: [
                            {
                                value: 'Email',
                                key: 'E'
                            },
                            {
                                value: 'Post',
                                key: 'P'
                            }
                        ]
                    }
                },
                {
                    key: 'addressLine1NewMember',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Address Line 1 (new member)'
                    }
                },
                {
                    key: 'addressLine2NewMember',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Address Line 2 (new member)'
                    }
                },
                {
                    key: 'suburbNewMember',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Suburb (new member)'
                    }
                },
                {
                    key: 'townNewMember',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Town (new member)'
                    }
                },
                {
                    key: 'postalCodeNewMember',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Postal Code (new member)',
                        type: 'number'
                    }
                },
                {
                    key: 'cellNoNewMember',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Cell No (new member)',
                        type: 'number'
                    }
                },
                {
                    key: 'emailNewMember',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Email (new member)'
                    }
                },
                {
                    key: 'paymentMethod',
                    type: 'radio',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        type: 'radio',
                        label: 'Preferred method of Payment  (new member)',
                        options: [
                            {
                                value: 'Cash',
                                key: 'C'
                            },
                            {
                                value: 'Debit order',
                                key: 'D'
                            }
                        ]
                    }
                },
                {
                    key: 'accountTypeNewMember',
                    type: 'radio',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        type: 'radio',
                        label: 'Account Type (new member)',
                        options: [
                            {
                                value: 'Current',
                                key: 'C'
                            },
                            {
                                value: 'Savings',
                                key: 'S'
                            },
                            {
                                value: 'Transmission',
                                key: 'T'
                            }
                        ]
                    }
                },
                {
                    key: 'bankNewMember',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Bank (new member)'
                    }
                },
                {
                    key: 'bankBranchNewMember',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Branch Name (new member)'
                    }
                },
                {
                    key: 'branchCodeNewMember',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Branch Code (new member)',
                        type: 'number'
                    }
                },
                {
                    key: 'accountNumberNewMember',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Account Number (new member)',
                        type: 'number'
                    }
                },
                {
                    key: 'debitDayNewMember',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Debit day (new member)',
                        type: 'number'
                    }
                }
            ]
        },
        {
            template: `<div class="card-header">PAYMENT DETAILS</div>`
        },
        {
            key: 'takeOverOption',
            fieldGroupClassName: 'card-body',
            fieldGroup: [
                {
                    key: 'accountTypeClaimant',
                    type: 'radio',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        type: 'radio',
                        label: 'Account Type (claimant)',
                        options: [
                            {
                                value: 'Current',
                                key: 'C'
                            },
                            {
                                value: 'Savings',
                                key: 'S'
                            },
                            {
                                value: 'Transmission',
                                key: 'T'
                            }
                        ]
                    }
                },
                {
                    key: 'claimantBank',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Bank (claimant)'
                    }
                },
                {
                    key: 'branchNameClaimant',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Branch Name (claimant)'
                    }
                },
                {
                    key: 'branchCodeClaimant',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Branch Code (claimant)',
                        type: 'number'
                    }
                },
                {
                    key: 'accountHolderNameClaimant',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Account Holder Name (claimant)'
                    }
                },
                {
                    key: 'accountHolderSurnameClaimant',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Account Holder Surname (claimant)'
                    }
                },
                {
                    key: 'claimantIdNumber',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'ID Number (claimant)'
                    }
                },
                {
                    key: 'accountNumberClaimant',
                    type: 'input',
                    wrappers: ['form-field-horizontal'],
                    templateOptions: {
                        label: 'Account Number (claimant)',
                        type: 'number'
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
