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
      technologiesUsed: ['React', 'React Hooks', 'Material UI'],
      picture: 'assets/simple_chat.JPG',
      githubLink: 'https://github.com/AlexHurrell/simple-chat',
    },
    {
      title: 'ToDo List',
      description:
        'A simple todo list with filtering, editing and sorting options.',
      picture: 'assets/angular_todo.JPG',
      technologiesUsed: ['Angular', 'Typescript', 'Material', 'local storage'],
      githubLink: 'https://github.com/AlexHurrell/todo-list-angular',
    },
    {
      title: 'Running pace calculator',
      description:
        'A multiple paged workflow form resulting in time, pace or distance output.',
      picture: 'assets/running_calculator.JPG',
      technologiesUsed: [
        'Angular',
        'Typescript',
        'Material',
        'Reactive Forms',
        'Routing',
      ],
      githubLink: 'https://github.com/AlexHurrell/running-pace-calculator',
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
