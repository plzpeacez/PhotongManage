import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {TemplateComponent} from './template/template.component';
import {PhotongComponent} from './photong/photong.component';
import {PhotongstopComponent} from './photongstop/photongstop.component';

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
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);