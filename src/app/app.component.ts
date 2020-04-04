import { element } from 'protractor';
import { DateComponent } from './date/date.component';
import { ChildComponent } from './child/child.component';
import { Component, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  input2 = "this will emit value changes";
  input3 = "emit valueChanges";
  input4 = "emit valueChanges";
  input5 = "emit valueChanges";
  child1 = 'user1 from parent';
  child2 = 'user2 from parent';
  child3 = 'user3 from parent';
  input6 = "emit valueChanges";
  input7 = "emit valueChanges";
  input8 = "emit valueChanges";


  @ViewChild("inputElement", { static: true }) inputElement: ElementRef;
  @ViewChild(NgModel, { static: true }) input2Reference: NgModel;
  @ViewChildren(NgModel) multiInputsDomReference: QueryList<NgModel>;
  @ViewChildren(ChildComponent) childComponentReference: QueryList<NgModel>;
  @ViewChildren("inputRef") multiInputsRef: QueryList<NgModel>;
  @ViewChild(ChildComponent) oneChildReference: any;//gets first child from multiple childs
  // @ViewChild(DateComponent) dateChildRef: DateComponent;//for single date componenet
  @ViewChildren(DateComponent) dateMultiChildRef: QueryList<DateComponent>;

  ngAfterViewInit() {
    console.log("inputElement", this.inputElement);
    this.inputElement.nativeElement.focus();

    console.log("input2Reference", this.input2Reference)
    this.input2Reference.valueChanges.subscribe(val => {
      console.log(val);
    });

    console.log("multiInputsDomReference", this.multiInputsDomReference);
    console.log(this.multiInputsDomReference.length);
    this.multiInputsDomReference.forEach(item => {
      console.log(item);
      item.valueChanges.subscribe(val => {
        console.log(val);
      });
    });


    console.log(this.childComponentReference.toArray());
    console.log(this.multiInputsDomReference.length);
    console.log(this.childComponentReference.toArray().pop()['id']);



    console.log(this.multiInputsRef);
    console.log(this.multiInputsRef.length);



    //get property and trigger method in child from parent
    console.log(this.oneChildReference);
    console.log(this.oneChildReference.username);//access property of child component
    this.oneChildReference.updateUserName();


    //date
    // console.log(this.dateChildRef.today);
    // setInterval(() => {
    //   this.dateChildRef.today = new Date()
    // }, 1000)

    console.log(this.dateMultiChildRef.toArray());
    this.dateMultiChildRef.forEach(element => {
      setInterval(() => {
        element.today = new Date();
      }, 1000)
    });

  }

}
