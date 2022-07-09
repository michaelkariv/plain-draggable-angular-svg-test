import {Component, Input, OnInit, ViewChild} from '@angular/core';
declare const PlainDraggable: any;


@Component({
  selector: 'app-drag-me',
  templateUrl: './drag-me.component.html',
})
export class DragMeComponent implements OnInit {

  constructor() { }

  @ViewChild('container', {static: true})
  public container: any;

  @ViewChild('draggable', {static: true})
  public handle: any;

  @Input() text!: string;


  public ngOnInit(): void {
  }

  public initDraggable(): void {
    const handle = this.handle.nativeElement;
    function init() {
      try {
        console.log(`initDraggable().init`);
        const draggable = new PlainDraggable(handle);
      } catch (error) {
        setTimeout(init, 200);
      }
    }

    init();
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit()');
    this.initDraggable();
  }


}
