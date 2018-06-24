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
    return new Promise((resolve, reject) => {
      console.log('f1');
      console.log('event update');
      if (window.confirm('Você tem certeza que quer alterar?')) {
        event.confirm.resolve(
          this.updateClient(event.newData)
        );
      } else {
        event.confirm.reject();
      }
      resolve();
    });

  }

  deleteClient(id) {
    const jsonPost = {};
    jsonPost['status'] = false;
    this.restService.put('clientes/' + id, jsonPost).subscribe(client => {
      console.log(client);
      this.data = client;
    });
  }
  updateClient(data) {
    console.log('data');
    console.log(data);
    const jsonPost = {};
    const id = data.id;
    jsonPost['cpf'] = data.cpf;
    jsonPost['nome'] = data.nome;
    jsonPost['rua'] = data.rua;
    jsonPost['bairro'] = data.bairro;
    jsonPost['cidade'] = data.cidade;
    jsonPost['estado'] = data.estado;
    jsonPost['cep'] = data.cep;
    jsonPost['numero'] = data.numero;
    jsonPost['telefone'] = data.telefone;
    jsonPost['celular'] = data.telefone;
    this.restService.put('clientes/' + id, jsonPost).subscribe(client => {
      console.log('client');
      console.log(client);
      this.data = client;
      this.getClients();
    });
  }


}
