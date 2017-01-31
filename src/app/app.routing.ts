import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {TemplateComponent} from './template/template.component';
import {PhotongComponent} from './photong/photong.component';
import {PhotongstopComponent} from './photongstop/photongstop.component';
import {EditrouteComponent} from './editroute/editroute.component';
import {PhreportComponent} from './phreport/phreport.component';
import {EditorpageComponent} from './editorpage/editorpage.component';
import {BusstopgmapComponent} from './busstopgmap/busstopgmap.component';
import { overview2Component } from './2overview/2overview.component';
import { overview3Component } from './3overview/3overview.component';

const appRoutes: Routes = [
    {
        path:'login',
        component: TemplateComponent
    },
    {
        path:'',
        component: LoginpageComponent
    },
    {
        path:'mapphotong',
        component: PhotongComponent
    },
    {
        path:'photongstop',
        component: PhotongstopComponent
    },
    {
        path:'editroute',
        component: EditrouteComponent
    },
    {
        path:'reports',
        component: PhreportComponent
    },
    {
        path:'editorpage',
        component: EditorpageComponent
    },
    {
        path:'editbusstop',
        component: BusstopgmapComponent
    },
    {
        path:'2overview',
        component: overview2Component
    },
    {
        path:'3overview',
        component: overview3Component
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);