import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.css']
})
export class DeleteCompanyComponent {
  companyId: string = '';
  companyProfile: any;
  deleteSuccess: boolean = false;
  companyNotFound: boolean = false;

  constructor(private dataService: DataService) {}

  searchCompany() {
    this.dataService.getCompanyById(this.companyId).subscribe(
      (company) => {
        this.companyProfile = company;
        this.companyNotFound = false;
      },
      (error) => {
        console.error('Error loading company details:', error);
        this.companyNotFound = true;
        this.companyProfile = null;
      }
    );
  }

  deleteCompany() {
    this.dataService.deleteCompany(this.companyId).subscribe(
      () => {
        this.deleteSuccess = true;
        this.companyProfile = null;
      },
      (error) => {
        console.error('Error deleting company:', error);
      }
    );
  }

  goToDeleteCompanyBox() {
    this.deleteSuccess = false;
    this.companyId = '';
    this.companyProfile = null;
  }
}
