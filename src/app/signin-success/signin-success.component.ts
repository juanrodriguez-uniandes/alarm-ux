import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-success',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './signin-success.component.html',
  styleUrl: './signin-success.component.css'
})
export class SigninSuccessComponent implements OnInit{

  constructor(private router: Router){

  }
  ngOnInit(): void {
    let element = document.getElementById('content') as HTMLFormElement;
    let y = element.scrollHeight;
    let x = element.scrollWidth;
  }

  nextStep() {
    this.router.navigate(['/home']);
  }


}
