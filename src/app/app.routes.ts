import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AbouMeComponent } from './abou-me/abou-me.component';
import { ContactComponent } from './contact/contact.component';
import { ProyectsComponent } from './proyects/proyects.component';

export const routes: Routes = [
    {
        path: '', 
        component: HomeComponent,
    },
    {
        path: 'about-me', 
        component: AbouMeComponent,
    },
    {
        path: 'contact', 
        component: ContactComponent,
    },
    {
        path: 'proyects',
        component: ProyectsComponent,
    }
];
