import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  private itemsAgency: any;

  constructor(
    public restService: RestService,
    public router: Router

  ) { }

  ngOnInit() {
    this.getAgency();
  }
  onSubmit(form) {
    console.log(form);
    const jsonPost = {};
    jsonPost['placa'] = form.value.placaInput;
    jsonPost['montadora'] = form.value.montadoraInput;
    jsonPost['modelo'] = form.value.modeloInput;
    jsonPost['ano'] = form.value.anoInput;
    jsonPost['valorDiaria'] = form.value.valorInput;
    jsonPost['opicionais'] = form.value.optInput;
    jsonPost['agencia'] = form.value.selectIdAgency;
    jsonPost['status'] = true;


    this.restService.post('carros', jsonPost).subscribe(client => {
      try {
        if (this.isEmptyObject(client)) {
          alert('Erro ao criar carro!');
          return false;
        } else {
          alert('Carro criado!');
          this.router.navigate(['/listCars']);
        }
      } catch (err) {
        console.log(err);
      }
      console.log(client);
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
    this.restService.get('agencia?status=true').subscribe(agency => {
      console.log(agency);
      this.itemsAgency = agency;
      console.log(this.itemsAgency);
    });
  }

}
