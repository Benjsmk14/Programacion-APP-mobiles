import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetalleviajePage } from './pages/detalleviaje/detalleviaje.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
    
  },
  
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'restablecer/:usuario',
    loadChildren: () => import('./pages/restablecer/restablecer.module').then(m => m.RestablecerPageModule)
  },
  {
    path: 'restablecer2/:usuario',
    loadChildren: () => import('./pages/restablecer2/restablecer2.module').then( m => m.Restablecer2PageModule)
  },
  {
    path: 'programar-viaje',
    loadChildren: () => import('./pages/programar-viaje/programar-viaje.module').then( m => m.ProgramarViajePageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./pages/home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'elegir',
    loadChildren: () => import('./pages/elegir/elegir.module').then( m => m.ElegirPageModule)
  },
  {
    path: 'login2',
    loadChildren: () => import('./pages/login2/login2.module').then( m => m.Login2PageModule)
  },
  {
    path: 'misviajes',
    loadChildren: () => import('./pages/misviajes/misviajes.module').then( m => m.MisviajesPageModule)
  },
  {
    path: 'cancelarviaje',
    loadChildren: () => import('./pages/cancelarviaje/cancelarviaje.module').then( m => m.CancelarviajePageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'buscarviaje',
    loadChildren: () => import('./pages/buscarviaje/buscarviaje.module').then( m => m.BuscarviajePageModule)
  },
  {
    path: 'detalleviaje',
    loadChildren: () => import('./pages/detalleviaje/detalleviaje.module').then( m => m.DetalleviajePageModule)
  },
  {
    path: 'lista-viaje',
    loadChildren: () => import('./pages/lista-viaje/lista-viaje.module').then( m => m.ListaViajePageModule)
  },
  {
    path: 'cancelarviaje2',
    loadChildren: () => import('./pages/cancelarviaje2/cancelarviaje2.module').then( m => m.Cancelarviaje2PageModule)
  },
  {
    path: 'iniciar-viaje',
    loadChildren: () => import('./pages/iniciar-viaje/iniciar-viaje.module').then( m => m.IniciarViajePageModule)
  },
  {
    path: 'pagar',
    loadChildren: () => import('./pages/pagar/pagar.module').then( m => m.PagarPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
