import {Component, ViewChild} from '@angular/core';

declare const PlainDraggable: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'plain-draggable angular svg test';
  public text: string = 'Drag';

  public ngOnInit(): void {
  }


  onTextChange($event: any) {
    this.text = $event;
  }
}
