import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-signin-goals',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './signin-goals.component.html',
  styleUrl: './signin-goals.component.css'
})
export class SigninGoalsComponent {
  foods: Food[] = [
    {value: '1', viewValue: 'Meta 1'},
    {value: '2', viewValue: 'Meta 2'},
    {value: '3', viewValue: 'Meta 3'},
  ];
  state= false;
  typeActivities: string[] = ['Actividad 1', 'Actividad 2', 'Actividad 3', 'Actividad 4', 'Actividad 5'];

  constructor(private router: Router) {}

  nextStep() {
    this.router.navigate(['/signin-success']);
  }

  lastStep(){
    this.state=false;
  }

  selectAssign(){
    this.state=true;
  }

  selectActivity(){
    this.state=false;
  }
}
