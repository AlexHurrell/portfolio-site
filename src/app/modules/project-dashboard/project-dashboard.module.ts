import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectDashboardPageComponent } from './project-dashboard-page/project-dashboard-page.component';

interface Projects {
  name: string,
  description: string,
  technologies: string[],
  link: string
}


@NgModule({
  declarations: [
    ProjectCardComponent,
    ProjectDashboardPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectDashboardModule {

  projects: Projects[] = [

  ]


}
