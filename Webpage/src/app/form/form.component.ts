import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  activeTabIndex: number = 0; // Initialize active tab index
  userData: any = {};

  constructor(){}

  // Function to handle tab click event
  handleTabClick(index: number): void {
    this.activeTabIndex = index; // Set active tab index
  }

  submitForm(): void {
    // Here you can handle form submission, for example, sending data to an API
    console.log('Form submitted with data:', this.userData);
  }
}
