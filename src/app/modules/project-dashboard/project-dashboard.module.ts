import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectDashboardPageComponent } from './components/project-dashboard-page/project-dashboard-page.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectDialogComponent } from './components/project-dialog/project-dialog.component';
import { MatDividerModule } from '@angular/material/divider';

interface Projects {
  name: string;
  description: string;
  technologies: string[];
  link: string;
}

@NgModule({
  declarations: [
    ProjectCardComponent,
    ProjectDashboardPageComponent,
    ProjectDialogComponent,
  ],
  exports: [ProjectCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
  ],
})
export class ProjectDashboardModule {
  projects: Projects[] = [];
}
