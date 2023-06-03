import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { JavaModule } from './java/java.module'
import { PhpModule } from './php/php.module';
import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './side-nav/side-nav.component'


const app_routes: Routes = [
	{
		path: '',
		redirectTo: '/java',
		pathMatch: 'full'
	}, {
		path: 'login',
		component:LoginComponent
	}, {
		path: 'java',
		loadChildren: () =>JavaModule
	},{
		path: 'php',
		loadChildren: () => PhpModule
	}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,JavaModule,PhpModule,RouterModule.forRoot(app_routes)],
  declarations: [ AppComponent, LoginComponent, SideNavComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
