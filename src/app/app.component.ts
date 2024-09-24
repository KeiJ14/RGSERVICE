import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoliComponent } from './loli/loli.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}

