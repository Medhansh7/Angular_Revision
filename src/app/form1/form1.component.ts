import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {


  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f.value.user.email);
    console.log(f.value.user.password);
  }



}
