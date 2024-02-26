import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './listcomponent/listcomponent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

onDblClick() {
  this.isVisable = !this.isVisable;
}

onClick() {
  this.counter += 1;
throw new Error('Method not implemented.');
}
  title = 'data-binding-app';
  counter = 0;
  isVisable : boolean = false;
}
