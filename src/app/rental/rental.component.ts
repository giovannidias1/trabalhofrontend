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

  constructor(
    public restService: RestService,
    public router: Router

  ) { }

  ngOnInit() {
    this.getAgency();
    this.getClient();
    this.getCar();
    this.getEmployee();
  }
  onSubmit(form) {
    console.log(form);
    const jsonPost = {};
    jsonPost['dataDevolucao'] = form.value.nomeInput;
    jsonPost['dataLocacao'] = form.value.ruaInput;
    jsonPost['cliente'] = form.value.selectClient;
    jsonPost['carro'] = form.value.selectCar;
    jsonPost['realizaAluguel'] = form.value.selectEmployee;

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
  public isEmptyObject(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return true;
  }
  getAgency() {
    this.restService.get('agencia').subscribe(agency => {
      console.log(agency);
      this.itemsAgency = agency;
      console.log(this.itemsAgency);
    });
  }

  getClient() {
    this.restService.get('clientes').subscribe(client => {
      console.log(client);
      this.itemsClient = client;
      console.log(this.itemsClient);
    });
  }

  getCar() {
    this.restService.get('carros').subscribe(cars => {
      console.log(cars);
      this.itemsCars = cars;
      console.log(this.itemsCars);
    });
  }
  getEmployee() {
    this.restService.get('funcionario').subscribe(employee => {
      console.log(employee);
      this.itemsEmployee = employee;
      console.log(this.itemsEmployee);
    });
  }

}
