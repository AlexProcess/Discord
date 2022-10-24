import { Component, OnInit } from '@angular/core';
import { CtaButtonBlueComponent } from '../cta-button-blue/cta-button-blue.component';

directives: [CtaButtonBlueComponent]
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  funciones(){

  }
}
