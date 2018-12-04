import { Router } from '@angular/router';
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
    edit: {
      confirmSave: true,
    },
    columns: {
      id: {
        title: 'ID',
        editabke: false
      },
      nome: {
        title: 'Nome'
      },
      cpts: {
        title: 'CPTS'
      },
      telefone: {
        title: 'Tel'
      },
      cargo: {
        title: 'Cargo'
      },
    },
    actions: {
      add: false,
      edit: true,
      delete: true
    }
  };
  data = [];
  user: any;
  constructor(
    public restService: RestService,
    public router: Router

  ) { }

  ngOnInit() {
    this.getEmployers();
    this.user = JSON.parse(localStorage.getItem("employeeLogin"));
    if (this.user.cargo == 1){
      this.router.navigate(['/dashboard']);
    }
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
      event.confirm.resolve(
        this.deleteEmployee(event.data.id)
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
          this.updateEmployee(event.newData)
        );
      } else {
        event.confirm.reject();
      }
      resolve();
    });

  }
  updateEmployee(data) {
    console.log('data');
    console.log(data);
    const jsonPost = {};
    const id = data.id;
    jsonPost['cpts'] = data.cpts;
    jsonPost['nome'] = data.nome;
    jsonPost['telefone'] = data.telefone;
    jsonPost['cargo'] = data.cargo;
    this.restService.put('funcionario/' + id, jsonPost).subscribe(employee => {
      console.log('employee');
      console.log(employee);
      this.data = employee;
      this.getEmployers();
    });
  }

  deleteEmployee(id) {
    const jsonPost = {};
    jsonPost['status'] = false;
    this.restService.put('funcionario/' + id, jsonPost).subscribe(employee => {
      console.log(employee);
      this.data = employee;
    });
  }

}
