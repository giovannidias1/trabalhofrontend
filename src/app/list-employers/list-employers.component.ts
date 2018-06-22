import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employers',
  templateUrl: './list-employers.component.html',
  styleUrls: ['./list-employers.component.scss']
})
export class ListEmployersComponent implements OnInit {
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
      cpts: {
        title: 'CPTS'
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
    this.getEmployers();
  }

  getEmployers() {
    this.restService.get('funcionario?status=true').subscribe(employers => {
      console.log(employers);
      this.data = employers;
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
    this.restService.put('funcionario/' + id, jsonPost).subscribe(client => {
      console.log(client);
      this.data = client;
    });
  }

}
