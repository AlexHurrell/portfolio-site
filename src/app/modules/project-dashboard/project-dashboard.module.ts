import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectDashboardPageComponent } from './components/project-dashboard-page/project-dashboard-page.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Projects {
  name: string;
  description: string;
  technologies: string[];
  link: string;
}

@NgModule({
  declarations: [ProjectCardComponent, ProjectDashboardPageComponent],
  exports: [ProjectCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class ProjectDashboardModule {
  projects: Projects[] = [];
}
