import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabilityMedicalReportComponent } from './disability-medical-report.component';

describe('DisabilityMedicalReportComponent', () => {
    let component: DisabilityMedicalReportComponent;
    let fixture: ComponentFixture<DisabilityMedicalReportComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DisabilityMedicalReportComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DisabilityMedicalReportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
