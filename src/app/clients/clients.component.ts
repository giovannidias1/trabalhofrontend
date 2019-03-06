import { Router } from '@angular/router';
import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { NgxViacepService, Endereco, ErroCep, ErrorValues } from '@brunoc/ngx-viacep';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  ativado: boolean;

  constructor(
    public restService: RestService,
    public router: Router,
    private viacep: NgxViacepService

  ) { }

  ngOnInit() {
  }
  onSubmit(form) {
    console.log(form);
    const jsonPost = {};
    jsonPost['name'] = form.value.nameInput;
    jsonPost['lastName'] = form.value.lastNameInput;
    jsonPost['street'] = form.value.streetInput;
    jsonPost['neighborhood'] = form.value.neighborhoodInput;
    jsonPost['state'] = form.value.stateInput;
    jsonPost['city'] = form.value.cityInput;
    jsonPost['cep'] = form.value.cepInput;
    jsonPost['number'] = form.value.numberImput;
    jsonPost['phone'] = form.value.phoneInput;
    jsonPost['cellphone'] = form.value.cellphoneInput;
    jsonPost['deleted'] = false;

    this.restService.post('Client', jsonPost).subscribe(client => {
      try {
        if (this.isEmptyObject(client)) {
          alert('Erro ao criar cliente!');
          return false;
        } else {
          alert('Cliente criado!');
          this.router.navigate(['/listClients']);

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

  getCep(value, form) {
    this.viacep.buscarPorCep(value).then((endereco: Endereco) => {
      console.log(endereco);
     this.populateValues(form, endereco);
    }).catch((error: ErroCep) => {
      // Alguma coisa deu errado :/
      console.log(error.message);
      alert(error.message);
    });
  }

  populateValues(form, endereco) {
    form.setValue({
      cellphoneInput: form.value.cellphoneInput,
      cepInput: 17064090,
      cityInput: endereco.localidade,
      lastNameInput: form.value.lastNameInput,
      nameInput: form.value.nameInput,
      neighborhoodInput: endereco.bairro,
      numberImput: form.value.numberImput,
      phoneInput: form.value.phoneInput,
      stateInput: endereco.uf,
      streetInput: endereco.logradouro,
    })
  }

}
