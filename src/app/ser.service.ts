import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SerService {

  
  private username: string;
  private client_id='ad517ee7a8c458771cbb';
  private client_secret='50d79eb99879a62c0a1b9ad4c649ffe1f48bb716';
constructor(private http: Http) { 
  console.log('Github service ready..');
  this.username='Shubhra-Srivastava';
}

getuser()
{
  return this.http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
}
getRepos()
{
  return this.http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
}
updateUser(username: string)
{
 this.username = username;
}

}
