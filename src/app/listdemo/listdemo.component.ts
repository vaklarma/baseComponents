import {Component, OnInit} from '@angular/core';

export class EventModel {

  id: number;
  name: string;


}

@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})


export class ListdemoComponent {


  eventlist: EventModel[];

  constructor() {
    this.eventlist = [
      {
        id: 1,
        name: 'akarmi'
      },
      {
        id: 2,
        name: 'ez is valami'
      },
      {
        id: 3,
        name: 'harmadik'
      }
    ];


  }ł

  deleteItemFromList(id: number) {

    this.eventlist = this.eventlist.filter((ev: EventModel) => ev.id !== id);
  }

}
