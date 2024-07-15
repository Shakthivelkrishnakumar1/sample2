import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ingest-user',
  templateUrl: './ingest-user.component.html',
  styleUrls: ['./ingest-user.component.css']
})
export class IngestUserComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    insuredAmount: '',
    userLocation: '',
    avatar: ''
  };
  successMessage = '';
  submitted = false;

  constructor(private dataService: DataService) {}

  onSubmit() {
    this.submitted = true;

    if (this.user.firstName && this.user.lastName && this.user.email && this.user.companyName && this.user.insuredAmount && this.user.userLocation && this.user.avatar) {
      this.dataService.ingestUser(this.user).subscribe(
        response => {
          console.log('User ingested successfully', response);
          this.successMessage = 'New user has been successfully added.';
          this.resetForm();
          this.submitted = false; // Reset submission flag
        },
        error => {
          console.error('Error ingesting user', error);
          // Handle error
        }
      );
    }
  }

  resetForm() {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
      insuredAmount: '',
      userLocation: '',
      avatar: ''
    };
  }
}
