import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InitComponent } from './init/init.component';
import { MainComponent } from './main/main.component';
import { ActivityComponent } from './activity/activity.component';



@NgModule({
  declarations: [
    LoginComponent,
    InitComponent,
    MainComponent,
    ActivityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
