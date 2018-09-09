import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'baseComponents ez az';
  events = ['első', 'második', 'harmadik'];
  show = false;
  cssClass = false;
  eventsList;
  disabledButton = false;
  inputcontent;
  setShow() {

    this.show = !this.show;
  }

  setCssClass() {
    this.cssClass = !this.cssClass;
  }

  demoMouseover(ev: MouseEvent) {
   // alert(ev.screenX);
    this.inputcontent = ev.screenX;
  }
  disableBtn() {
    this.disabledButton = ! this.disabledButton;
  }
}
