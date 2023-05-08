import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  
  constructor(private accountService: AccountService, private http: HttpClient) {}
  specialChars: string = '~`!@#$%^&*()-_+={}[]|\;:"<>,./?';

  ngOnInit(){}

  model : any = {}

  createPassword() {
    this.accountService.createPassword(this.model).subscribe(
    )
  }

}
