import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhpDashboardComponent } from './php-dashboard/php-dashboard.component';
import { PhpIntroductionComponent } from './php-introduction/php-introduction.component';
import { PhpSyntaxComponent } from './php-syntax/php-syntax.component';


import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
	{
		path: 'php',
		component: PhpDashboardComponent,
		children: [
      {
						path: '',
						redirectTo: 'introduction',
						pathMatch: 'full'
			},{
				path: 'introduction',
				component: PhpIntroductionComponent
			},{
				path: 'syntax',
				component: PhpSyntaxComponent
			}
		]
	}
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [PhpDashboardComponent, PhpIntroductionComponent, PhpSyntaxComponent]
})
export class PhpModule { }