import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'AngularTest';

  public firstName:string='Mocha';
  public email:string='Mocha@gmail.com';

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

  public saySomething(){
    alert("Button Pressed");
  }
}
