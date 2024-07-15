import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  userId: string = '';
  userProfile: any;
  invalidUser: boolean = false;

  constructor(private http: HttpClient) {}

  fetchUserProfile() {
    if (this.userId) {
      this.getUserProfile().subscribe(
        (data: any) => {
          this.userProfile = data;
          this.invalidUser = false;
        },
        (error) => {
          this.invalidUser = true;
          this.userProfile = null;
        }
      );
    } else {
      this.invalidUser = true;
      this.userProfile = null;
    }
  }

  getUserProfile(): Observable<any> {
    return this.http.get<any>(`https://63ad81dada81ba97619ef936.mockapi.io/api/v1/users/${this.userId}`);
  }
}
