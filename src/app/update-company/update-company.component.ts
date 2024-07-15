import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Company } from '../data.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent {
  companyId: string = '';
  companyData: Company = {
    companyName: '',
    companyLocation: '',
    startedOn: ''
  };
  updateSuccess: boolean = false;
  showCompanyForm: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  searchCompany() {
    this.dataService.getCompanyById(this.companyId).subscribe(
      (company: Company) => {
        this.companyData = company;
        this.showCompanyForm = true;
      },
      (error) => {
        console.error('Error loading company details:', error);
        this.showCompanyForm = false;
      }
    );
  }

  updateCompany() {
    this.dataService.updateCompany(this.companyId, this.companyData).subscribe(
      () => {
        this.updateSuccess = true;
        this.showCompanyForm = false;
      },
      (error) => {
        console.error('Error updating company:', error);
      }
    );
  }

  goToUpdateCompanyBox() {
    this.updateSuccess = false;
    this.companyId = '';
    this.companyData = {
      companyName: '',
      companyLocation: '',
      startedOn: ''
    };
    this.showCompanyForm = false;
  }
}
