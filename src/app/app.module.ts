import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DragMeComponent} from './drag-me/drag-me.component';
import {FormsModule} from "@angular/forms";
import { DragUsComponent } from './drag-us/drag-us.component';

@NgModule({
  declarations: [
    AppComponent,
    DragMeComponent,
    DragUsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
