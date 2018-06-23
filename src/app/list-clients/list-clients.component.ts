import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  settings = {
    delete: {
      confirmDelete: true,
    },
    edit: {
      confirmSave: true,
    },
    columns: {
      id: {
        title: 'ID',
        editable: false
      },
      cpf: {
        title: 'CPF'
      },
      nome: {
        title: 'Nome'
      },
      rua: {
        title: 'Rua'
      },
      bairro: {
        title: 'Bairro'
      },
      cidade: {
        title: 'Cidade'
      },
      estado: {
        title: 'Estado'
      },
      cep: {
        title: 'CEP'
      },
      numero: {
        title: 'Numero'
      },
      telefone: {
        title: 'Tel'
      },
      celular: {
        title: 'Cel'
      },
    },
    actions: {
      add: false,
      edit: true,
      delete: true
    }
  };
  data = [];
  constructor(
    public restService: RestService,
  ) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.restService.get('clientes?status=true').subscribe(client => {
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
  updateRecord(event) {
    console.log('event update');
    if (window.confirm('Você tem certeza que quer alterar?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  deleteClient(id) {
    const jsonPost = {};
    jsonPost['status'] = false;
    this.restService.put('clientes/' + id, jsonPost).subscribe(client => {
      console.log(client);
      this.data = client;
    });
  }


}
