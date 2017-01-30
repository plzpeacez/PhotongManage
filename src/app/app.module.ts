import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

import {routing} from './app.routing';
import { TemplateComponent } from './template/template.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {DropdownModule} from 'primeng/primeng';
import { PhotongComponent } from './photong/photong.component';
import { PhotongstopComponent } from './photongstop/photongstop.component';
import { EditrouteComponent } from './editroute/editroute.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginpageComponent,
    TemplateComponent,
    PhotongComponent,
    PhotongstopComponent,
    EditrouteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DropdownModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBTT9UOlmNjSStQdUc0GcDXa2cfZG4EdB4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
