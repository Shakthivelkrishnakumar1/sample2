import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ingest-company',
  templateUrl: './ingest-company.component.html',
  styleUrls: ['./ingest-company.component.css']
})
export class IngestCompanyComponent {
  company = {
    companyName: '',
    companyLocation: '',
    startedOn: ''
  };
  successMessage = '';
  submitted = false;

  constructor(private dataService: DataService) {}

  onSubmit() {
    this.submitted = true;

    if (this.company.companyName && this.company.companyLocation && this.company.startedOn) {
      this.dataService.ingestCompany(this.company).subscribe(
        response => {
          console.log('Company ingested successfully', response);
          this.successMessage = 'New company has been successfully added.';
          this.resetForm();
          this.submitted = false; // Reset submission flag
        },
        error => {
          console.error('Error ingesting company', error);
          // Handle error
        }
      );
    }
  }

  resetForm() {
    this.company = {
      companyName: '',
      companyLocation: '',
      startedOn: ''
    };
  }
}
