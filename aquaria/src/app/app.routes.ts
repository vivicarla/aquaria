import { Routes } from '@angular/router';
import { Home } from './pages/home/home';   
import { Problemas } from './problemas/problemas';
import { Solucoes } from './solucoes/solucoes';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'problemas', component: Problemas },
    { path: 'solucoes', component: Solucoes }
];
