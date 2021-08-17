import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-component-template',
  templateUrl: './error-component-template.component.html',
  styleUrls: ['./error-component-template.component.css']
})
export class ErrorComponentTemplateComponent {

  @Input() errorMessage:string = '';
  @Input() displayError:boolean = false;
}
