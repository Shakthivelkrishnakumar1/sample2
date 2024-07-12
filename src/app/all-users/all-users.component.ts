import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  public columnDefs: any[];
  public rowData: any[] = [];

  constructor(private dataService: DataService) {
    this.columnDefs = [
      { headerName: 'First Name', field: 'firstName', sortable: true, filter: true },
      { headerName: 'Last Name', field: 'lastName', sortable: true, filter: true },
      { headerName: 'Email', field: 'email', sortable: true, filter: true },
      { headerName: 'Company', field: 'companyName', sortable: true, filter: true },
      { headerName: 'Insured Amount', field: 'insuredAmount', sortable: true, filter: true },
      { headerName: 'Location', field: 'userLocation', sortable: true, filter: true },
      { headerName: 'Avatar', field: 'avatar', cellRenderer: this.avatarRenderer }
    ];
  }

  ngOnInit(): void {
    this.dataService.getAllUsers().subscribe((data: any[]) => {
      this.rowData = data;
    });
  }

  avatarRenderer(params: any) {
    return `<img src="${params.value}" alt="Avatar" width="50" height="50" />`;
  }
}
