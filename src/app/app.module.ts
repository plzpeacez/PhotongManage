import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

import {routing} from './app.routing';
import { TemplateComponent } from './template/template.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

// primeng
import {DropdownModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {CarService} from './editroute/car/carservice';
import {InputTextModule,ButtonModule,DialogModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';
import {EditorModule} from 'primeng/primeng';
import {InputMaskModule} from 'primeng/primeng';
import {GMapModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';

import { PhotongComponent } from './photong/photong.component';
import { PhotongstopComponent } from './photongstop/photongstop.component';
import { EditrouteComponent } from './editroute/editroute.component';
import { PhreportComponent } from './phreport/phreport.component';
import { EditorpageComponent } from './editorpage/editorpage.component';
import { BusstopgmapComponent } from './busstopgmap/busstopgmap.component';
import { overview2Component } from './2overview/2overview.component';
import { overview3Component } from './3overview/3overview.component';
import { BusroutemapComponent } from './busroutemap/busroutemap.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginpageComponent,
    TemplateComponent,
    PhotongComponent,
    PhotongstopComponent,
    EditrouteComponent,
    PhreportComponent,
    EditorpageComponent,
    BusstopgmapComponent,
    overview2Component,
    overview3Component,
    BusroutemapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DropdownModule,
    DataTableModule,
    SharedModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    PanelModule,
    GrowlModule,
    SplitButtonModule,
    EditorModule,
    InputMaskModule,
    GMapModule,
    CheckboxModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBTT9UOlmNjSStQdUc0GcDXa2cfZG4EdB4'
    })
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
