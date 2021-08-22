import { Component, Inject, OnInit } from '@angular/core';
import { ProjectCard } from '../../models/models';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss'],
})
export class ProjectDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public project: ProjectCard) {}
}
