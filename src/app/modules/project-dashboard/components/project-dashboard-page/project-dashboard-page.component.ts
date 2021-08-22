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
      title: 'example title 2',
      description: 'my example description 2',
      picture: 'assets/mock.jpg',
      technologiesUsed: [],
      githubLink: 'https://google.com',
      siteLink: 'https://google.com',
    },
    {
      title: 'example title 3',
      description: 'my example description 3',
      picture: 'assets/mock.jpg',
      technologiesUsed: [],
    },
    {
      title: 'example title 4',
      description: 'my example description 4',
      picture: 'assets/mock.jpg',
      technologiesUsed: [],
      githubLink: 'https://google.com',
      siteLink: 'https://google.com',
    },
    {
      title: 'example title 5',
      description: 'my example description 5',
      picture: 'assets/mock.jpg',
      technologiesUsed: [],
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
