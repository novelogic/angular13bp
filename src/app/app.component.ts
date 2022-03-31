import { Component, OnInit, VERSION } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {

ngOnInit(): void {
  of(13,14,15,16).subscribe(val => console.log(val),
  err => console.log(err),
  () => console.log('Observable completed'));

  from([21,22,23,24,25]).subscribe(
    {
      next : (val) => console.log(val),
      error : err => console.log(err),
      complete: () => console.log('Observable completed')
  }
  );
}
  aName = 'Angular ' + VERSION.major;
}
