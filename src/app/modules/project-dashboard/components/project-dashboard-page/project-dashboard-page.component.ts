import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectCard } from '../../models/models';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

@Component({
  selector: 'app-project-dashboard-page',
  templateUrl: './project-dashboard-page.component.html',
  styleUrls: ['./project-dashboard-page.component.scss'],
})
export class ProjectDashboardPageComponent {
  projects: ProjectCard[] = [
    {
      title: 'Simple Chat',
      description:
        "A quick mock chat app that 'sends and receives' messages in a window.",
      technologiesUsed: ['React', 'React Hooks', 'Material UI', 'Services'],
      picture: 'assets/simple_chat.JPG',
      githubLink: 'https://github.com/AlexHurrell/simple-chat',
    },
    {
      title: 'Todo List',
      description: 'Containing filtering, sorting and basic CRUD operations',
      picture: 'assets/mock.jpg',
      technologiesUsed: ['Angular', 'Typescript', 'Material'],
      githubLink: 'https://google.com',
      siteLink: 'https://google.com',
    },
    {
      title: 'Todo List Redux',
      description: 'Implementing Redux into a todo list.',
      picture: 'assets/mock.jpg',
      technologiesUsed: ['Angular', 'Typescript', 'Redux'],
    },
    {
      title: 'Running pace calculator',
      description:
        'A multiple paged workflow form resulting in required pace for target',
      picture: 'assets/mock.jpg',
      technologiesUsed: ['Angular', 'Typescript', 'Redux', 'Reactive Forms'],
      githubLink: 'https://google.com',
      siteLink: 'https://google.com',
    },
  ];

  constructor(public dialog: MatDialog) {}

  openProjectDialog(project: ProjectCard) {
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      data: project,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
