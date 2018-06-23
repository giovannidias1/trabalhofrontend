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
    jsonPost['cpts'] = form.value.cptsInput;
    jsonPost['nome'] = form.value.nomeInput;
    jsonPost['cargo'] = form.value.cargoInput;
    jsonPost['telefone'] = form.value.telefoneInput;
    jsonPost['agencia'] = form.value.selectIdAgency;
    jsonPost['status'] = true;

    this.restService.post('funcionario', jsonPost).subscribe(employee => {
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

}
