import { Router } from '@angular/router';
import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(
    public restService: RestService,
    public router: Router

  ) { }

  ngOnInit() {
    this.getAgency();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
  }
  onChangeSelect(idAgency) {
    this.getCar(idAgency);
    this.getEmployee(idAgency);
  }
  onSubmit(form) {
    console.log(form);
    if (this.isEmptyObject(this.itemsClient)) {
      alert('CPF do cliente não cadastrado');
    } else {
      const jsonPost = {};
      jsonPost['dataDevolucao'] = form.value.endDateInput;
      jsonPost['dataLocacao'] = form.value.startDateInput;
      jsonPost['cliente'] = this.itemsClient[0].id;
      jsonPost['carro'] = form.value.selectIdCar;
      jsonPost['realizaAluguel'] = form.value.selectIdEmployee;
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
  getAgency() {
    this.restService.get('agencia?status=true').subscribe(agency => {
      console.log(agency);
      this.itemsAgency = agency;
      console.log(this.itemsAgency);
    });
  }

  searchClient(cpf) {
    this.getClient(cpf);
  }

  getClient(cpf) {
    this.restService.get('clientes?status=true&cpf=' + cpf).subscribe(client => {
      console.log(client);
      this.itemsClient = client;
      console.log('this.itemsClient');
      console.log(this.itemsClient);
      return true;
    }, (err) => {
      return false;
    });
  }

  getCar(idAgency) {
    this.restService.get('carros?status=true&agencia=' + idAgency).subscribe(cars => {
      console.log(cars);
      this.itemsCars = cars;
      console.log('this.itemsCars');
      console.log(this.itemsCars);
    });
  }
  getEmployee(idAgency) {
    this.restService.get('funcionario?status=true&agencia=' + idAgency).subscribe(employee => {
      console.log(employee);
      this.itemsEmployee = employee;
      console.log(this.itemsEmployee);
    });
  }

}
