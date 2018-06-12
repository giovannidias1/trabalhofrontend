import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-agency',
  templateUrl: './list-agency.component.html',
  styleUrls: ['./list-agency.component.scss']
})
export class ListAgencyComponent implements OnInit {
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      nome: {
        title: 'Nome'
      },
      rua: {
        title: 'Rua'
      },
    },
    actions: false

  };
  data = [];
  constructor(
    public restService: RestService,
  ) { }

  ngOnInit() {
    this.getAgency();
  }

  getAgency() {
    this.restService.get('agencia').subscribe(client => {
      console.log(client);
      this.data = client;
    });
  }

}
