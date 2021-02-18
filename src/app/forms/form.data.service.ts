import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormDataService {
    constructor(private http: HttpClient) {}

    getTitles(): Observable<any> {
        return this.http.get('api/form/titles');
    }

    getAccountTypes(): Observable<any> {
        return this.http.get('api/form/accounttypes');
    }

    getMaritalStatus(): Observable<any> {
        return this.http.get('api/form/maritalstatuses');
    }

    getLanguages(): Observable<any> {
        return this.http.get('api/form/languages');
    }

    getBanks(): Observable<any> {
        return this.http.get('api/form/banks');
    }

    isValidBranchCode(code: String): Observable<any> {
        return this.http.get('api/form/isvalidbranchcode/' + code);
    }

    getDependantRelationships(): Observable<any> {
        return this.http.get('api/form/dependantrelationships');
    }

    getBeneficiaryRelationships(): Observable<any> {
        return this.http.get('api/form/beneficiaryrelationships');
    }
}
