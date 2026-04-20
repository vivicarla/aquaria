import { Routes } from '@angular/router';
import { Home } from './pages/home/home';   
import { Problemas } from './problemas/problemas';
import { Impacto } from './impacto/impacto';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'problemas', component: Problemas },
    { path: 'impacto', component: Impacto }
];
