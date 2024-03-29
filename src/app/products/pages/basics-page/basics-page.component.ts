import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'elena';
  public nameUpper: string = 'ELENA';
  public fullName: string = 'EleNa aRocENa';

public customDate: Date = new Date();
}
