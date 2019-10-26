import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, AngularFireDatabase } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {
  name: any;
  state: string = '';
  error:string ='';
  constructor(public af: AngularFire,private router: Router,
              private db:AngularFireDatabase
              ) {

                console.log('db',db);

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
        console.log('auth',auth);
      }
    });

  }

  logout() {
     this.af.auth.logout();
     this.router.navigateByUrl('/login');
  }


  ngOnInit() {
    try{
      this.db.object('/courses')
      .subscribe((data)=>{
      console.table(data);

      
    })
    }
    catch(err){
      this.error=err;
    }
    
  }
}
