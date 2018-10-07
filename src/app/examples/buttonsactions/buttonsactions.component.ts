import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttonsactions',
  templateUrl: './buttonsactions.component.html',
  styleUrls: ['./buttonsactions.component.css']
})
export class ButtonsactionsComponent implements OnInit {
  show = false;
  cssClass = true;
  disabledButton = false;
  inputcontent;
  constructor() { }

  ngOnInit() {
  }
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




