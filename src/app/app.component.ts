import {Component, ViewChild} from '@angular/core';

declare const PlainDraggable: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'plain-draggable angular svg test';

  @ViewChild('container', {static: true})
  public container: any;

  @ViewChild('draggable', {static: true})
  public handle: any;

  public ngOnInit(): void {


  }

  public initDraggable(): void {
    const container = this.container.nativeElement;
    const handle = this.handle.nativeElement;

    const options = {
      containment: container
    };

    function init() {
      try {
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
