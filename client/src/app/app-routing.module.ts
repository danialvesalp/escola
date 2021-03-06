/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e75197f06e8563f32296087
*
* You will get 10% discount for each one of your friends
* 
*/
// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { CursoEditComponent} from './pages/curso-edit/curso-edit.component';
import { CursoListComponent} from './pages/curso-list/curso-list.component';
import { EstudanteEditComponent} from './pages/estudante-edit/estudante-edit.component';
import { EstudanteListComponent} from './pages/estudante-list/estudante-list.component';
import { ProfessorEditComponent} from './pages/professor-edit/professor-edit.component';
import { ProfessorListComponent} from './pages/professor-list/professor-list.component';
import { ProvaEditComponent} from './pages/prova-edit/prova-edit.component';
import { ProvaListComponent} from './pages/prova-list/prova-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'cursos/:id',  loadChildren: './pages/curso-edit/curso-edit.module#CursoEditModule' , canActivate: [AuthGuard] },
    { path: 'cursos',  loadChildren: './pages/curso-list/curso-list.module#CursoListModule' , canActivate: [AuthGuard] },
    { path: 'estudantes/:id',  loadChildren: './pages/estudante-edit/estudante-edit.module#EstudanteEditModule' , canActivate: [AuthGuard] },
    { path: 'estudantes',  loadChildren: './pages/estudante-list/estudante-list.module#EstudanteListModule' , canActivate: [AuthGuard] },
    { path: 'professors/:id',  loadChildren: './pages/professor-edit/professor-edit.module#ProfessorEditModule' , canActivate: [AuthGuard] },
    { path: 'professors',  loadChildren: './pages/professor-list/professor-list.module#ProfessorListModule' , canActivate: [AuthGuard] },
    { path: 'provas/:id',  loadChildren: './pages/prova-edit/prova-edit.module#ProvaEditModule' , canActivate: [AuthGuard] },
    { path: 'provas',  loadChildren: './pages/prova-list/prova-list.module#ProvaListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
