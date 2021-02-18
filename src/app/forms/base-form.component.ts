import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export class BaseFormComponent {
    model: any;
    form = new FormGroup({});
    fields: FormlyFieldConfig[];

    isFormIncomplete() {
        return !this.form.valid;
    }

    findFieldConfig(fieldConfigs: FormlyFieldConfig[], configKey: string): FormlyFieldConfig {
        for (const key in Object.keys(fieldConfigs)) {
            if (fieldConfigs[key].hasOwnProperty('fieldGroup') && fieldConfigs[key].fieldGroup.length > 0) {
                const foundConfig = this.findFieldConfig(this.fields[key].fieldGroup, configKey);
                if (foundConfig !== undefined) {
                    return foundConfig;
                }
            } else {
                if (fieldConfigs[key].hasOwnProperty('key') && fieldConfigs[key].key === configKey) {
                    return fieldConfigs[key];
                }
            }
        }
    }
}
