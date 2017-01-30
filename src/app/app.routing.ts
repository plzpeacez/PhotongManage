import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {TemplateComponent} from './template/template.component';

const appRoutes: Routes = [
    {
        path:'login',
        component: TemplateComponent
    },
    {
        path:'',
        component: LoginpageComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);