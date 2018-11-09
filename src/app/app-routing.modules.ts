import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './shared/components/template/template.component';


/**
 * App components
 */

export const routes: Routes = [
  {
    path: '', 
    children: [
      {
        path: '',
        component: TemplateComponent,
        children: [
            {
             path: '',
             loadChildren: 'src/app/components/blog/blog.module#BlogModule',
            },
            {
             path: 'users',
             loadChildren: 'src/app/components/users/users.module#UsersModule',
            },
            {
             path: 'dashboard',
             loadChildren: 'src/app/components/dashboard/dashboard.module#DashboardModule',
            }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
