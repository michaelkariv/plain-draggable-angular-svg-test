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

  private _texts: string[] = ['1', '2'];
  // splitting texts input into getter and setter allows calling initDraggable after a change
  @Input() set texts(value: string[]) {
    this._texts = value;
    // this.initDraggable(); // Notice: This will result in drag no longer working after changing label text from outside in.
    setTimeout(() => { this.initDraggable(); }, 0);
  }

  get texts(): string[] { return this._texts; }

  public ngOnInit(): void {
  }

  public initDraggable(): void {
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
