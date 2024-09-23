import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoliComponent } from './loli/loli.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoliComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  lolis: boolean = false;
  loli() {
    this.lolis = !this.lolis;
  }
  title = 'RGSERVICE';
}
