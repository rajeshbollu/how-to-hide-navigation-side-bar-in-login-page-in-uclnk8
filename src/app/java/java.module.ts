import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { JavaDashboardComponent } from './java-dashboard/java-dashboard.component';
import { JavaIntroductionComponent } from './java-introduction/java-introduction.component';
import { JavaSyntaxComponent } from './java-syntax/java-syntax.component';
import { JavaScriptComponent } from './java-script/java-script.component';

const routes: Routes = [
	{
		path: 'java',
		component: JavaDashboardComponent,
		children: [
      {
						path: '',
						redirectTo: 'introduction',
						pathMatch: 'full'
			},{
				path: 'introduction',
				component: JavaIntroductionComponent
			},{
				path: 'syntax',
				component: JavaSyntaxComponent
			},{
				path: 'java-script',
				component: JavaScriptComponent
			}
		]
	}
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [JavaDashboardComponent, JavaIntroductionComponent, JavaSyntaxComponent, JavaScriptComponent]
})
export class JavaModule { }