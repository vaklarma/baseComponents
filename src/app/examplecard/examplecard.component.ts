import {Component, Input, OnInit} from '@angular/core';
import {ExamplelistModel} from '../shared/examplelist-model';

@Component({
  selector: 'app-examplecard',
  templateUrl: './examplecard.component.html',
  styleUrls: ['./examplecard.component.css']
})
export class ExamplecardComponent implements OnInit {
@Input() example: ExamplelistModel;
  constructor() { }

  ngOnInit() {
  }

}
