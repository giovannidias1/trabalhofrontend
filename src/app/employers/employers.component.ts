import { Router } from '@angular/router';
import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.scss']
})
export class EmployersComponent implements OnInit {
  itemsAgency: any;
  user: any;

  constructor(
    public restService: RestService,
    public router: Router

  ) { }

  ngOnInit() {

  }
  onSubmit(form) {
    console.log(form);
    const jsonPost = {};
    jsonPost['name'] = form.value.nameInput;
    jsonPost['lastName'] = form.value.lastNameInput;
    jsonPost['email'] = form.value.emailInput;
    jsonPost['street'] = form.value.streetInput;
    jsonPost['neighborhood'] = form.value.neighborhoodInput;
    jsonPost['state'] = form.value.stateInput;
    jsonPost['city'] = form.value.cityInput;
    jsonPost['cep'] = form.value.cepInput;
    jsonPost['number'] = form.value.numberImput;
    jsonPost['phone'] = form.value.phoneInput;
    jsonPost['cellphone'] = form.value.cellphoneInput;
    jsonPost['deleted'] = false;
    this.restService.post('employee', jsonPost).subscribe(employee => {
      console.log(jsonPost);

      try {
        if (this.isEmptyObject(employee)) {
          alert('Erro ao criar funcionario!');
          return false;
        } else {
          alert('Funcionario criado!');
          this.router.navigate(['/listEmployers']);

        }
      } catch (err) {
        console.log(err);
      }
      console.log(employee);
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



   generatePassword() {
    return Math.random().toString(36).slice(-8);
  }

}
