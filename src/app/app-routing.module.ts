import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './components/activity/activity.component';
import { InitComponent } from './components/init/init.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'main', component: MainComponent},
  { path: 'init', component: InitComponent},
  { path: 'activity', component: ActivityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
