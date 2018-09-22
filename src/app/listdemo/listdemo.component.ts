import {Component, OnInit} from '@angular/core';
import {EventModel} from './event-model';


@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})


export class ListdemoComponent {

  modifyEvent: EventModel;
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
    this.modifyEvent = new EventModel();
  }

  deleteItemFromList(id: number) {

    this.eventlist = this.eventlist.filter((ev: EventModel) => ev.id !== id);
    if (this.eventlist.length === 0) {
      this.eventlist[0] = new EventModel('Default event', 1,
        'http://icons.iconarchive.com/icons/guillendesign/variations-3/256/Default-Icon-icon.png');
    }
  }

  saveEvent(eventName: HTMLInputElement, picurl: HTMLInputElement) {


    if (this.modifyEvent.id === 0) {
      this.eventlist = [...this.eventlist,
        new EventModel(eventName.value, this.getNextId(), picurl.value)];
    } else {
      this.eventlist = this.eventlist.map((ev) => {
        if (ev.id === this.modifyEvent.id) {
          return {
            id: ev.id,
            name: eventName.value,
            pic: picurl.value
          };
        } else {
          return ev;
        }

      });
      this.modifyEvent = new EventModel();
    }
    eventName.value = '';
    picurl.value = '';

  }

  editSelectedEvent(id: number) {


    this.modifyEvent = this.eventlist.filter((ev: EventModel) => ev.id === id)[0];

  }

  getNextId(): number {

    return (this.eventlist.reduce((x, y) => x.id > y.id ? x : y).id) + 1;
  }


}
