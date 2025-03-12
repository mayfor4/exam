import { Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { HistorietaComponent } from './pages/historieta/historieta.component';
import { LibroComponent } from './pages/libro/libro.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';


export const routes: Routes = [
    {
        path: 'producto',
        component: ProductoComponent,
    },
    {

        path: 'historieta',
        component: HistorietaComponent,

    },
    {
        path: 'libro',
        component: LibroComponent,

    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: '**',
        redirectTo: 'producto',
    },
];
