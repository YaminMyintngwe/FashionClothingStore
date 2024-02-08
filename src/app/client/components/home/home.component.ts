import { Component } from '@angular/core';
import { Images } from 'src/app/shared/models/imageUrl';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  Images = Images;
}
