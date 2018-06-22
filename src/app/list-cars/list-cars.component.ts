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
    columns: {
      id: {
        title: 'ID'
      },
      placa: {
        title: 'Placa'
      },
      modelo: {
        title: 'Agência'
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

}
