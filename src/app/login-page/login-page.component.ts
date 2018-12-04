import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestService } from 'app/rest.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(    public restService: RestService,
    public router: Router) {
   }

  ngOnInit() {
  }
  onSubmit(form) {
    const jsonPost = {}
    jsonPost['email'] = form.value.emailInput;
    jsonPost['password'] = form.value.senhaInput;

    if (form.status === 'INVALID') {
      return;
    }
    this.restService.post('Funcionario/auth', jsonPost)
    .subscribe(result => {
      console.log(result);
      if (result !== 'Não encontrado'){
        localStorage.setItem('employeeLogin', JSON.stringify(result));
        this.router.navigate(['/dashboard']);

      }else {
        alert("Usuario não encontrado")
      }

    });
  }
}
