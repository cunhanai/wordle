import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { GridComponent } from './components/grid/grid.component';
import { NgFor } from '@angular/common';
import { RodapeComponent } from './components/rodape/rodape.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CabecalhoComponent,
    GridComponent,
    NgFor,
    RodapeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wordle';
}
