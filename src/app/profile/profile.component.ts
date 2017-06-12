import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 user: any;
 repos: any[];
 username: string;
  constructor(private _serService: SerService) { 
   this.user= false;
    
  }
  searchUser(){
    this._serService.updateUser(this.username);
this._serService.getuser().subscribe(user => {
      this.user = user;
    });
    this._serService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

  ngOnInit() {
  }

}
