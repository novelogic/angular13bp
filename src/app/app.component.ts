import { Component, OnInit, VERSION } from '@angular/core';
import { from, of, map, tap, take } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {

ngOnInit(): void {
 /* of(13,14,15,16).subscribe(val => console.log(val),
  err => console.log(err),
  () => console.log('Observable completed'));
*/  
  from([21,22,23,24,15])
  .pipe(
    map(value => value *2),
    map(value => value -30),
    map(item => {
      if (item === 0)
       throw new Error('Hit ti invalid zero value');
      else
        return item;
    }),
    take(5),
    tap(value => console.log(value))
  )
  .subscribe(
    {
      next : (val) => console.log(val),
      error : err => console.error(`the error object is ${err}`),
      complete: () => console.log('Observable completed')
  }
  );
  /*
  of('Apple', 'Banana', 'pear').subscribe({
    next: item => console.log(`fruit is ${item}`),
    error: err => console.log(`error is ${err}`),
    complete: () => console.log('Observable is Completed.')
  });*/
}
  aName = 'Angular ' + VERSION.major;
}
