import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listcssselectors',
  templateUrl: './listcssselectors.component.html',
  styleUrls: ['./listcssselectors.component.css']
})
export class ListcssselectorsComponent implements OnInit {
  events = ['első', 'második', 'harmadik','negyedik'];
  cssClass = true;

  constructor() { }

  ngOnInit() {
  }

}
