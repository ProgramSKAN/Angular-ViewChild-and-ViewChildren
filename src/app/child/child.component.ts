import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input('userid') id: string;
  username: string = "jack";

  constructor() { }

  ngOnInit(): void {
  }

  updateUserName() {
    this.username = "updated jack";
  }

}
