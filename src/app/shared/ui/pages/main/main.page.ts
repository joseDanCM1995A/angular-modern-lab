import { Component } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { ContentComponent } from '../../components/content/content.component';

@Component({
  selector: 'app-main',
  imports: [SideBarComponent, ContentComponent],
  templateUrl: './main.page.html',
  styleUrl: './main.page.scss',
})
export class MainPage {}
