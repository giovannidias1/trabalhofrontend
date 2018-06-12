import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  private items: any;

  constructor(
    public restService: RestService,

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
    this.restService.post('carro', jsonPost).subscribe(client => {
      try {
        if (this.isEmptyObject(client)) {
          alert('Erro ao criar carro!');
          return false;
        } else {
          alert('Carro criado!');

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
    this.restService.get('agencia').subscribe(client => {
      console.log(client);
      this.items = client[0].nome;
      console.log(this.items);
    });
  }

}
