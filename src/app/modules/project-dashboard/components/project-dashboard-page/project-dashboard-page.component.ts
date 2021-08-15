import { Component, OnInit } from '@angular/core';
import { ProjectCard } from '../../models/models';

@Component({
  selector: 'app-project-dashboard-page',
  templateUrl: './project-dashboard-page.component.html',
  styleUrls: ['./project-dashboard-page.component.scss'],
})
export class ProjectDashboardPageComponent implements OnInit {
  projects: ProjectCard[] = [
    {
      title: 'example title',
      description: 'my example description',
      picture: 'examplepic.jpg',
      githubLink: 'https://google.com',
      siteLink: 'https://google.com',
    },
    {
      title: 'example title 2',
      description: 'my example description 2',
      picture: 'examplepic.jpg',
      githubLink: 'https://google.com',
      siteLink: 'https://google.com',
    },
    {
      title: 'example title 3',
      description: 'my example description 3',
      picture: 'examplepic.jpg',
    },
    {
      title: 'example title 4',
      description: 'my example description 4',
      picture: 'examplepic.jpg',
      githubLink: 'https://google.com',
      siteLink: 'https://google.com',
    },
    {
      title: 'example title 5',
      description: 'my example description 5',
      picture: 'examplepic.jpg',
      githubLink: 'https://google.com',
      siteLink: 'https://google.com',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
