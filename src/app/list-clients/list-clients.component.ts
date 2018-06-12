import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      nome: {
        title: 'Nome'
      },
      cpf: {
        title: 'CPF'
      },
    },
    actions: false

  };
  data = [];
  constructor(
    public restService: RestService,
  ) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.restService.get('clientes').subscribe(client => {
      console.log(client);
      this.data = client;
    });
  }

}
