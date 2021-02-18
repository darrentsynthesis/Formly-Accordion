import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuneralClaimComponent } from './funeral-claim.component';

describe('FuneralClaimComponent', () => {
    let component: FuneralClaimComponent;
    let fixture: ComponentFixture<FuneralClaimComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FuneralClaimComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FuneralClaimComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
