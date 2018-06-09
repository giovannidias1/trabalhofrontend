import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestService {

  constructor(public http: Http) {}

      get(prefix){
          let url_get  = this.getUrl()+prefix;
          return this.http
          .get(url_get)
          .map(res => res.json());
      }

      post(prefix, data){
          let url_post  = this.getUrl()+prefix;
          return this.http
          .post(url_post, data)
          .map(res => res.json());
      }

      put(prefix, data){
          let url_put  = this.getUrl()+prefix;
          return this.http
          .put(url_put, data)
          .map(res => res.json());
      }

      delete(prefix){
          let url_delete  = this.getUrl()+prefix;
          return this.http
          .delete(url_delete)
          .map(res => res.json());
      }

      getUrlGenerator(url){
        return this.http
        .get(url)
        .map(res => res.json());
      }

      postFree(url, data) {
        return this.http
        .post(url, data)
        .map(res => res.json(), (err) => {
          err.json();
        });
      }

      logout(){
          localStorage.removeItem('dashboardSmileChat');
          window.location.href = 'login';
      }


      public getUrl(){
        return environment.restUrl;
      }

}
