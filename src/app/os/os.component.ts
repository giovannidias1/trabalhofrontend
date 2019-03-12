import { brands } from './brands';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.scss']
})

export class OsComponent implements OnInit {
  itemsClient: any;
  itemsCars: any;
  itemsEmployee: any;
  itemsAgency: any;
  minDate: Date;
  clients: any;
  bsValue = new Date();
  constructor(
    public restService: RestService,
    public router: Router

  ) { }

  ngOnInit() {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.getClient();

  }

  onSubmit(form) {
    console.log(form);
    console.log(form.value.clientSelect[0].id);

    if (this.isEmptyObject(this.brandItems)) {
      alert('Erro a encontrar clientes');
    } else {
      const jsonPost = {};
      jsonPost['orderDate'] = this.bsValue;
      jsonPost['attendanceDate'] = form.value.endDateInput;
      jsonPost['executionDate'] = form.value.startDateInput;
      jsonPost['statusOrder'] = form.value.selectStatus;
      jsonPost['brand'] = form.value.selectBrand;
      jsonPost['model'] = form.value.modelInput;
      jsonPost['defect'] = form.value.defectInput;
      jsonPost['obs'] = form.value.obsInput;
      jsonPost['owner'] = form.value.clientSelect[0].id;
      console.log('this.itemsClient.id');
      console.log(this.itemsClient[0].id);

      this.restService.post('OrderService', jsonPost).subscribe(os => {
        try {
          if (this.isEmptyObject(os)) {
            alert('Erro ao criar Ordem de serviço!');
            return false;
          } else {
            alert('Ordem de serviço criado!');
            this.router.navigate(['/dashboard']);


          }
        } catch (err) {
          console.log(err);
        }
        console.log(os);
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
      return { id: item.id, text: ( item.phone + ' / ' + item.name + ' ' + item.lastName + ' / ' + item.street)};
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


  get brandItems() {
    return brands;
  }
}
