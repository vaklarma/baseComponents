import { Component, OnInit } from '@angular/core';
import {ExamplelistService} from '../shared/examplelist.service';
import {ExamplelistModel} from '../shared/examplelist-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public examplelistFromService: ExamplelistModel[];
  constructor(private _examplelist: ExamplelistService) { }

  ngOnInit() {
this.examplelistFromService = this._examplelist.getAllExamples();
console.log(this.examplelistFromService);
  }

}
