import { Component, EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { data } from '../data.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
 
  @Output() calculate = new EventEmitter<data>()
  enteredInitialInvestment='0';
  enteredAnnualInvestment='0'
  enteredExpectedRetrun='5';
  enteredDuration='10';

  onSubmit(){
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: + this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedRetrun,
      duration:+this.enteredDuration
    });
  }
}
