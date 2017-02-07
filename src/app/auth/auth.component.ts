import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { TranslatePipe } from '../shared/translate/translate.pipe';
import { TranslateService } from '../shared/translate/translate.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css','./dialog.css']
})
export class AuthComponent implements OnInit {  

  constructor(public authService: AuthService, public router: Router, 
    public translateService: TranslateService) {
  }
  ngOnInit(){
    setTimeout( ()=>{      
      if(this.authService.user){
        let url = this.authService.redirectUrl? this.authService.redirectUrl: '/home';
        this.router.navigate([url]);
      }
    },1000);
  }

  login(provider: string){
    this.authService.login(provider);
  }
  
}