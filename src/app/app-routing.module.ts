import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDashboardPageComponent } from './modules/project-dashboard/components/project-dashboard-page/project-dashboard-page.component';

const routes: Routes = [
  { path: '', component: ProjectDashboardPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
