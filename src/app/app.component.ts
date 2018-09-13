import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'baseComponents ';
  events = ['első', 'második', 'harmadik','negyedik'];
  show = false;
  cssClass = true;
  listCss = 'list-group-item';
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
    this.disabledButton = !this.disabledButton;
  }
}
