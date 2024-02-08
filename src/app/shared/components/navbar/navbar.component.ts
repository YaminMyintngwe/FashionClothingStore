import { Component } from '@angular/core';
import { Images } from '../../models/imageUrl';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  Images = Images;
}
