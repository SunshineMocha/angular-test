import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit, OnDestroy{
  title = 'AngularTest';

  constructor(){
    console.log("1) heh, im in the constructor");
  }

  ngOnInit(){
    console.log("2) im before the loading of the page");
  }

  ngAfterViewInit():void{
    console.log("3) im right after the page loads");
  }

  ngOnDestroy(){
    console.log("4) Component is being destroyed");
  }
}
