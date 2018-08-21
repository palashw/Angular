import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KeepComponent } from './keep/keep.component';
import { KeepDetailComponent } from './keep-detail/keep-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    KeepComponent,
    KeepDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
