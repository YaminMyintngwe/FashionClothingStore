import { Component } from '@angular/core';
import { Images } from 'src/app/shared/models/imageUrl';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  Images = Images;
}
