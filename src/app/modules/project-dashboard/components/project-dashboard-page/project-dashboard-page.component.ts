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
      title: 'Near Earth Objects (Redux)',
      description:
        'Fetching data from a nasa public api to display near earth objects for the day.',
      picture: 'assets/near_earth_objects.JPG',
      technologiesUsed: [
        'React',
        'APIs',
        'Material UI',
        'Hooks',
        'Redux',
        'React testing library'
      ],
      githubLink: 'https://github.com/AlexHurrell/react-near-earth-orbit',
    },
    {
      title: 'Running Pace Calculator',
      description:
        'Multi paged workflow resulting in time, pace or distance output.',
      picture: 'assets/running_calculator.JPG',
      technologiesUsed: [
        'Angular',
        'Typescript',
        'Material',
        'Reactive Forms',
        'Routing',
      ],
      githubLink: 'https://github.com/AlexHurrell/running-pace-calculator',
      siteLink: 'https://alexhurrell.github.io/running-pace-calculator/',
    },
    {
      title: 'Chat App',
      description:
        'Mock chat app that sends and receives messages in a window.',
      technologiesUsed: ['React', 'React Hooks', 'Material UI'],
      picture: 'assets/simple_chat.JPG',
      githubLink: 'https://github.com/AlexHurrell/simple-chat',
    },
    {
      title: 'ToDo List',
      description: 'ToDo list with filtering, editing and sorting options.',
      picture: 'assets/angular_todo.JPG',
      technologiesUsed: ['Angular', 'Typescript', 'Material', 'local storage'],
      githubLink: 'https://github.com/AlexHurrell/todo-list-angular',
      siteLink: 'https://alexhurrell.github.io/todo-list-angular/',
    },
    {
      title: 'ToDo List (Redux NgRx)',
      description:
        'ToDo list with filtering, editing and sorting options implementing NgRx',
      picture: 'assets/angular_todo_ngrx.JPG',
      technologiesUsed: [
        'Angular',
        'Typescript',
        'NgRx',
        'Material',
        'Reactive Forms',
        'Routing',
      ],
      githubLink: 'https://github.com/AlexHurrell/todo-list-angular-ngrx',
      siteLink: 'https://alexhurrell.github.io/todo-list-angular-ngrx/',
    },
    {
      title: 'Blog (GraphQL)',
      description: 'Simple blog to play with QraphQL. Work in progress.',
      picture: 'assets/graphql_blog.JPG',
      technologiesUsed: ['React', 'React Hooks', 'GraphQL', 'Material UI'],
      githubLink: 'https://github.com/AlexHurrell/react-graphql',
      siteLink: '',
    },
    {
      title: 'News Site (Redux)',
      description: 'Serverless MERN stack project. 2019',
      picture: 'assets/news_site.jpg',
      technologiesUsed: [
        'MongoDB',
        'React',
        'Redux',
        'Express',
        'Node',
        'AWS',
        'react-router',
      ],
      githubLink: '',
      siteLink: '',
    },
  ];

  constructor(public dialog: MatDialog) { }

  openProjectDialog(project: ProjectCard) {
    this.dialog.open(ProjectDialogComponent, {
      data: project,
      autoFocus: false,
    });
  }
}
