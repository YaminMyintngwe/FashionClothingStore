import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Images } from 'src/app/shared/models/imageUrl';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  Images = Images;
  isCollapsed = false;

  constructor(private router : Router) {}

  isSelected(route: string): boolean {
    return route === this.router.url;
}
}
