import { environment } from "./../environments/environment";
import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild } from "@angular/router";
import { RestService } from "../app/rest.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  url: string = environment.restUrl;
  constructor(private rest: RestService, private router: Router) {}
  canActivate() {
    let employee = JSON.parse(localStorage.getItem("employeeLogin"));
    return this.isLogged(employee);
  }

  canActivateChild() {
    console.log("checking child route access");
    return true;
  }

  public isNotLogged() {
    localStorage.removeItem("employeeLogin");
    window.location.href = "/login";
  }

  public isLogged(employee) {
    if (this.isEmptyObject(employee) == true) {
      //is not logged
      this.isNotLogged();
      return false;
    }
    return this.rest.get("Funcionario/" + employee.id).map(
      userGet => {
        console.log("userGet");
        console.log(userGet);
        if (this.isEmptyObject(userGet) == true) {
          //is not logged
          this.isNotLogged();
          return false;
        }

        if (userGet.id == employee.id && userGet.name == employee.name) {
          localStorage.setItem("employeeLogin", JSON.stringify(userGet));
          return true;
        }
      },
      err => {
        this.isNotLogged();
        return false;
      }
    );
  }

  public isEmptyObject(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return true;
  }
}
