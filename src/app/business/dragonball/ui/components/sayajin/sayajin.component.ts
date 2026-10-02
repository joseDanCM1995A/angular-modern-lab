import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sayajin',
  imports: [RouterLink],
  templateUrl: './sayajin.component.html',
  styleUrl: './sayajin.component.scss',
})
export class SayajinComponent {
  character = input.required<any>()
}
