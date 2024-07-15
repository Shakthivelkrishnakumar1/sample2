import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service'; // Adjust path as per your project structure

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userId: string = '';
  userProfile: any;
  updateSuccess: boolean = false;
  userNotFound: boolean = false;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      if (this.userId) {
        this.searchUser();
      }
    });
  }

  searchUser() {
    this.dataService.getUserById(this.userId).subscribe(
      (data: any) => {
        this.userProfile = data;
        this.userNotFound = false; // Reset user not found message
      },
      (error) => {
        console.error('Error loading user details:', error);
        this.userProfile = null;
        this.userNotFound = true; // Set user not found message
      }
    );
  }

  updateUser() {
    this.dataService.updateUser(this.userId, this.userProfile).subscribe(response => {
      this.updateSuccess = true;
    });
  }

  // Navigate back to update user box
  goToUpdateUserBox() {
    this.updateSuccess = false;
    this.userProfile = null; // Clear user profile data
    this.userId = ''; // Clear user ID
    this.userNotFound = false; // Reset user not found message
  }
}
