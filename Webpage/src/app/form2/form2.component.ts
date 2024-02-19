import { Component } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {

  activeTabIndex: number = 0; // Initialize active tab index
  userData: any;


  handleTabClick(index: number): void {
    this.activeTabIndex = index; // Set active tab index
  }
  submitForm(): void {
    // Here you can handle form submission, for example, sending data to an API
    console.log('Form submitted with data:', this.userData);
  }
}
