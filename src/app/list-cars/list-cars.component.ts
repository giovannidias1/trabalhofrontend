import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss']
})
export class ListCarsComponent implements OnInit {
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
      placa: {
        title: 'Placa'
      },
      montadora: {
        title: 'Montadora'
      },
      modelo: {
        title: 'Modelo'
      },
      ano: {
        title: 'Ano'
      },
      valorDiaria: {
        title: 'Valor Diaria'
      },
      opcionais: {
        title: 'Opcionais'
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
    private router: Router
  ) { }

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.restService.get('carros?status=true').subscribe(cars => {
      console.log(cars);
      this.data = cars;
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
    this.restService.put('carros/' + id, jsonPost).subscribe(client => {
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
          this.updateCars(event.newData)
        );
      } else {
        event.confirm.reject();
      }
      resolve();
    });

  }
  updateCars(data) {
    console.log('data');
    console.log(data);
    const jsonPost = {};
    const id = data.id;
    jsonPost['placa'] = data.placa;
    jsonPost['monotadora'] = data.montadora;
    jsonPost['modelo'] = data.modelo;
    jsonPost['ano'] = data.ano;
    jsonPost['valorDiaria'] = data.valorDiaria;
    jsonPost['opcionais'] = data.opcionais;
    this.restService.put('carros/' + id, jsonPost).subscribe(cars => {
      console.log('cars');
      console.log(cars);
      this.data = cars;
      this.getCars();
    });
  }

}
