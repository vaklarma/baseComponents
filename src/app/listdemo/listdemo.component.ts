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
        name: 'akarmi',
        pic: 'http://www.vesdbelemagad.hu/sites/default/files/images/news/sunike.jpg'
      },
      {
        id: 2,
        name: 'ez is valami',
        pic: 'http://www.vesdbelemagad.hu/sites/default/files/images/news/sunike.jpg'

      },
      {
        id: 3,
        name: 'harmadik',
        pic: 'http://www.vesdbelemagad.hu/sites/default/files/images/news/sunike.jpg'

      }
    ];

  }

  deleteItemFromList(id: number) {

    this.eventlist = this.eventlist.filter((ev: EventModel) => ev.id !== id);
  }

  addItemToList(eventName: HTMLInputElement, picurl: HTMLInputElement) {

    this.eventlist = [...this.eventlist,
      new EventModel(
        this.getNextId(),
        eventName.value,
        picurl.value)];
    eventName.value = '';
    picurl.value = '';
  }


  editSelectedItem(id: number) {
    console.log(id);
  }

  getNextId(): number {

    return (this.eventlist.reduce((x, y) => x.id > y.id ? x : y).id) + 1;
  }

}
