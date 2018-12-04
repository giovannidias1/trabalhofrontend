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
    this.user = JSON.parse(localStorage.getItem("employeeLogin"));
    if (this.user.cargo == 1){
      this.router.navigate(['/dashboard']);
    }
    this.getAgency();
  }
  onSubmit(form) {
    console.log(form);
    const params = {};
    params['cpts'] = form.value.cptsInput;
    params['email'] = form.value.emailInput;
    params['nome'] = form.value.nomeInput;
    params['password'] = this.generatePassword();
    params['cargo'] = form.value.selectCargo;
    params['telefone'] = form.value.telefoneInput;
    params['agencia'] = form.value.selectIdAgency;
    params['status'] = true;
    this.restService.post('funcionario', params).subscribe(employee => {
      console.log(params);

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

  getAgency() {
    this.restService.get('agencia?status=true').subscribe(agency => {
      console.log(agency);
      this.itemsAgency = agency;
      console.log(this.itemsAgency);
    });
  }

   generatePassword() {
    return Math.random().toString(36).slice(-8);
  }

}
