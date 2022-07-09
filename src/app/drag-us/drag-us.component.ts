import {Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';

declare const PlainDraggable: any;


@Component({
  selector: 'app-drag-us',
  templateUrl: './drag-us.component.html',
})
export class DragUsComponent implements OnInit {

  constructor() {
  }

  @ViewChild('container', {static: true})
  public container: any;

  @ViewChildren('draggables')
  public handles: QueryList<ElementRef> | undefined;

  @Input() texts: string[] = ['1', '2'];


  public ngOnInit(): void {
  }

  public initDraggable(): void {
    const container = this.container.nativeElement;

    const options = {
      containment: container
    };
    if(!this.handles) return;
    const handles = this.handles.toArray();

    function init() {
      try {
        console.log(`initDraggable().init`);
        for (let i = 0; i < handles.length; i++) {
          const draggable = new PlainDraggable(handles[i].nativeElement);
        }
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
