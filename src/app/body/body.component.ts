import { Component, OnInit } from '@angular/core';
import { HeaderServiceComponent } from '../services/header.service.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  selectionType: string = "";
  constructor(private headerService: HeaderServiceComponent) { }

  ngOnInit(): void {
      this.headerService.headerEventAction.subscribe(headerAction => {
        this.selectionType = headerAction;
    });   
  }
}
