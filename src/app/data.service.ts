import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Company {
  id?: string;
  companyName: string;
  companyLocation: string;
  startedOn: string;
}
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

  getUserById(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }

  updateUser(userId: string, userData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${userId}`, userData);
  }

    updateCompany(companyId: string, companyData: Company): Observable<any> {
      return this.http.put(`${this.apiUrlCompanies}/${companyId}`, companyData);
    }
  
   
    getCompanyById(companyId: string): Observable<Company> {
      return this.http.get<Company>(`${this.apiUrlCompanies}/${companyId}`);
    }

    deleteUser(userId: string): Observable<any> {
      return this.http.delete<any>(`${this.apiUrl}/${userId}`);
    }
    deleteCompany(companyId: string): Observable<any> {
      return this.http.delete<any>(`${this.apiUrlCompanies}/${companyId}`);
    }
  }
