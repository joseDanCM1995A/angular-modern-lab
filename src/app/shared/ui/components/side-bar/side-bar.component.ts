import { Component, signal } from '@angular/core';
import { routes } from '../../../../app.routes';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  links = signal<any[]>(routes.filter((data: any) => data.data.isModule).map((route: any) => route.children[0]).filter(data => data.data.isModule));
}
