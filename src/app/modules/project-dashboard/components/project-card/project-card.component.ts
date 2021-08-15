import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectCard } from '../../models/models';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() project: ProjectCard;

  constructor(public router: Router) {}

  ngOnInit(): void {}
}
