import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://63ad81dada81ba97619ef936.mockapi.io/api/v1/users';
  private apiUrlCompanies = 'https://63ad81dada81ba97619ef936.mockapi.io/api/v1/company';
  private companyUrl = 'https://63ad81dada81ba97619ef936.mockapi.io/api/v1/company';
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getAllCompanies(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlCompanies);
  }

  ingestUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
  ingestCompany(company: any): Observable<any> {
    return this.http.post<any>(this.companyUrl, company);
  }
}
