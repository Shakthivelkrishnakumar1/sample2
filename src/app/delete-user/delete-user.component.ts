import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  userId: string = '';
  userProfile: any;
  deleteSuccess: boolean = false;
  userNotFound: boolean = false;

  constructor(private dataService: DataService) {}

  searchUser() {
    this.dataService.getUserById(this.userId).subscribe(
      (user) => {
        this.userProfile = user;
        this.userNotFound = false;
      },
      (error) => {
        console.error('Error loading user details:', error);
        this.userNotFound = true;
        this.userProfile = null;
      }
    );
  }

  deleteUser() {
    this.dataService.deleteUser(this.userId).subscribe(
      () => {
        this.deleteSuccess = true;
        this.userProfile = null;
        this.userNotFound = false; // Reset user not found message
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }

  goToDeleteUserBox() {
    this.deleteSuccess = false;
    this.userId = '';
    this.userProfile = null;
    this.userNotFound = false; // Reset user not found message
  }
}
