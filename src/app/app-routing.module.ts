import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JeuxComponent } from './jeux/jeux.component';
import { AuthGuard } from './guards/secure.guard';

const routes: Routes = [
  {path: "jeux", component : JeuxComponent, canActivate:[AuthGuard],
    data : {roles:['ADMIN']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
