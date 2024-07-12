import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all-companies',
  templateUrl: './all-companies.component.html',
  styleUrls: ['./all-companies.component.css']
})
export class AllCompaniesComponent implements OnInit {
  public columnDefs: any[];
  public rowData: any[] = [];

  constructor(private dataService: DataService) {
    this.columnDefs = [
      { headerName: 'Company Name', field: 'companyName', sortable: true, filter: true },
      { headerName: 'Company Location', field: 'companyLocation', sortable: true, filter: true },
      { headerName: 'Started On', field: 'startedOn', sortable: true, filter: true }
    ];
  }

  ngOnInit(): void {
    this.dataService.getAllCompanies().subscribe((data: any[]) => {
      this.rowData = data;
    });
  }
}
