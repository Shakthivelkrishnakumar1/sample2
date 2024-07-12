import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  userProfile: any; // Define a property to hold user profile data
  userId: string = '';
  invalidUser: boolean = false;
  constructor(private http: HttpClient) {}

 

    fetchUserProfile() {
    //   if (this.userId) {
    //     this.getUserProfile(this.userId).subscribe((data: any) => {
    //       this.userProfile = data;
    //       console.log(data);
    //     });
    //   }
    // }
    if (this.userId) {
      this.getUserProfile(this.userId).subscribe({
        next: (data: any) => {
          this.userProfile = data;
          this.invalidUser = false; // Reset the invalid user flag
        },
        error: () => {
          this.userProfile = null; // Clear user profile data
          this.invalidUser = true; // Set the invalid user flag
        }
      });
    }
  }
  
    getUserProfile(userId: string): Observable<any> {
      return this.http.get<any>(`https://63ad81dada81ba97619ef936.mockapi.io/api/v1/users/${userId}`)
        .pipe(
          catchError((error) => {
            return throwError(() => error);
          })
        );
    }
}

  