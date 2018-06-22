import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-agency',
  templateUrl: './list-agency.component.html',
  styleUrls: ['./list-agency.component.scss']
})
export class ListAgencyComponent implements OnInit {
  settings = {
    delete: {
      confirmDelete: true,
    },
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
    actions: {
      add: false,
      edit: false,
      delete: true
    }

  };
  data = [];
  constructor(
    public restService: RestService,
  ) { }

  ngOnInit() {
    this.getAgency();
  }

  getAgency() {
    this.restService.get('agencia?status=true').subscribe(client => {
      console.log(client);
      this.data = client;
    });
  }
  onDeleteConfirm(event) {
    console.log(event);
    if (window.confirm('Você tem certeza que quer deletar?')) {
      this.deleteClient(event.data.id);
      event.confirm.resolve(
        this.deleteClient(event.data.id)
      );
    } else {
      event.confirm.reject();
    }
  }

  deleteClient(id) {
    const jsonPost = {};
    jsonPost['status'] = false;
    this.restService.put('agencia/' + id, jsonPost).subscribe(client => {
      console.log(client);
      this.data = client;
    });
  }

}
