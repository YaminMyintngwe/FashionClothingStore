import { Component } from '@angular/core';
import { Images } from 'src/app/shared/models/imageUrl';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  Images = Images;
  isCollapsed = false;
}
