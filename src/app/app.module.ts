import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SnapComponent } from './snap/snap.component';
import { TranslatorComponent } from './translator/translator.component';

@NgModule({
  declarations: [
    AppComponent,
    SnapComponent,
    TranslatorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
