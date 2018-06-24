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
    edit: {
      confirmSave: true,
    },
    columns: {
      id: {
        title: 'ID',
        editable: false
      },
      nome: {
        title: 'Nome'
      },
      rua: {
        title: 'Rua'
      },
      numero: {
        title: 'Numero'
      },
      bairro: {
        title: 'Bairo'
      },
      cidade: {
        title: 'Cidade'
      },
      estado: {
        title: 'Estado'
      },
      cep: {
        title: 'Cep'
      },
      telefone: {
        title: 'telefone'
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
  updateRecord(event) {
    return new Promise((resolve, reject) => {
      console.log('f1');
      console.log('event update');
      if (window.confirm('Você tem certeza que quer alterar?')) {
        event.confirm.resolve(
          this.updateAgency(event.newData)
        );
      } else {
        event.confirm.reject();
      }
      resolve();
    });

  }
  updateAgency(data) {
    console.log('data');
    console.log(data);
    const jsonPost = {};
    const id = data.id;
    jsonPost['nome'] = data.nome;
    jsonPost['rua'] = data.rua;
    jsonPost['bairro'] = data.bairro;
    jsonPost['cidade'] = data.cidade;
    jsonPost['estado'] = data.estado;
    jsonPost['cep'] = data.cep;
    jsonPost['numero'] = data.numero;
    jsonPost['telefone'] = data.telefone;
    this.restService.put('agencia/' + id, jsonPost).subscribe(agency => {
      console.log('cars');
      console.log(agency);
      this.data = agency;
      this.getAgency();
    });
  }


}
