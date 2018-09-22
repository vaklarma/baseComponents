import {Component, OnInit} from '@angular/core';
import {EventModel} from './event-model';


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

  }

  ł;

  deleteItemFromList(id: number) {

    this.eventlist = this.eventlist.filter((ev: EventModel) => ev.id !== id);
  }

  addItemToList(eventName: HTMLInputElement) {

    this.eventlist = [...this.eventlist,
      new EventModel(
        this.getNextId(),
        eventName.value)];
    eventName.value = '';

  }

  getNextId(): number {

    return (this.eventlist.reduce((x, y) => x.id > y.id ? x : y).id) + 1;
  }

}
