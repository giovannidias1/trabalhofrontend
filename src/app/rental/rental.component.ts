import { Router } from '@angular/router';
import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import {INgxSelectOption} from 'ngx-select-ex';


@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {
  itemsClient: any;
  itemsCars: any;
  itemsEmployee: any;
  itemsAgency: any;
  minDate: Date;
  clients: any;
  bsValue = new Date();
  brandItems: any = [
    {
      id: 1,
      name: 'LG'
    },
    {
      id: 2,
      name: 'Brastemp'
    },
    {
      id: 3,
      name: 'Consul'
    },
    {
      id: 4,
      name: 'Samsung'
    },
    {
      id: 5,
      name: 'Electrolux'
    },
    {
      id: 6,
      name: 'Lofra'
    },
    {
      id: 7,
      name: 'Colormaq'
    },
    {
      id: 8,
      name: 'Dako'
    },
    {
      id: 9,
      name: 'Viking'
    },
    {
      id: 10,
      name: 'Tecno'
    },
    {
      id: 11,
      name: 'Libherr'
    },
    {
      id: 12,
      name: 'Elica'
    },
    {
      id: 13,
      name: 'Bertazzoni'
    },
    {
      id: 14,
      name: 'kitchenAid'
    },
    {
      id: 15,
      name: 'Gorenje'
    },
    {
      id: 16,
      name: 'Atlas'
    },
    {
      id: 17,
      name: 'Esmaltec'
    },
    {
      id: 18,
      name: 'Outra'
    }
  ];

  constructor(
    public restService: RestService,
    public router: Router

  ) { }

  ngOnInit() {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.getClient();
  }
  onChangeSelect(idAgency) {

  }
  onSubmit(form) {
    console.log(form);
    if (this.isEmptyObject(this.itemsClient)) {
      alert('CPF do cliente não cadastrado');
    } else {
      const jsonPost = {};
      jsonPost['attendanceDate'] = form.value.endDateInput;
      jsonPost['executionDate'] = form.value.startDateInput;
      jsonPost['statusOrder'] = this.itemsClient[0].id;
      jsonPost['brand'] = form.value.selectIdCar;
      jsonPost['model'] = form.value.selectIdEmployee;
      jsonPost['defect'] = form.value.selectIdEmployee;
      jsonPost['obs'] = form.value.selectIdEmployee;

      console.log('this.itemsClient.id');
      console.log(this.itemsClient[0].id);

      this.restService.post('aluga', jsonPost).subscribe(rent => {
        try {
          if (this.isEmptyObject(rent)) {
            alert('Erro ao criar agencia!');
            return false;
          } else {
            alert('Agência criado!');
            this.router.navigate(['/dashboard']);


          }
        } catch (err) {
          console.log(err);
        }
        console.log(rent);
      });
    }

  }
  public isEmptyObject(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return true;
  }
  get listClient() {
    return this.itemsClient ? this.itemsClient.map(item => {
      return { id: item.id, text: (item.street + ' / ' + item.name + ' ' + item.lastName)};
    }) : [];
  }

  getClient() {
    this.restService.get('client?deleted=false').subscribe(client => {
      console.log(client);
      this.itemsClient = client;
      console.log('this.itemsClient');
      console.log(this.itemsClient);
      return true;
    }, (err) => {
      return false;
    });
  }


}
