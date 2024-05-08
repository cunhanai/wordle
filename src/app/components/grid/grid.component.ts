import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent {
  palavra: string = 'aureo';
  palavraArray: string[] = this.palavra.split('');

  qtdTentativas: number[] = [0, 1, 2, 3, 4, 5];
  qtdLetras: number[] = [0, 1, 2, 3, 4];
  palavrasTentativas: string[][] = this.initializePalavrasTentativas();
  qtdSubmitted: number = 0;
  fim: boolean = false;

  disableLine(tentativa: number) {
    return tentativa !== this.qtdSubmitted || this.fim;
  }

  setColor(tentativa: number, index: number) {
    if (tentativa !== this.qtdSubmitted) {
      if (
        this.palavrasTentativas[tentativa][index] === this.palavraArray[index]
      )
        return 'lightgreen';
      if (
        this.palavraArray.some(
          (s) => this.palavrasTentativas[tentativa][index] === s
        )
      )
        return 'yellow';
    }
    return '';
  }

  submit() {
    if (this.palavrasTentativas[this.qtdSubmitted].every((e) => e)) {
      this.qtdSubmitted++;

      if (
        this.palavrasTentativas[this.qtdSubmitted - 1].every((e) =>
          this.palavraArray.some((s) => s === e)
        )
      ) {
        alert('Você ganhou!');
        this.fim = true;
      } else if (this.qtdSubmitted === 6) {
        alert('Você perdeu!');
        this.fim = true;
      }
    }
  }

  reset() {
    this.palavrasTentativas = this.initializePalavrasTentativas();
    this.qtdSubmitted = 0;
    this.fim = false;
  }

  initializePalavrasTentativas() {
    return [
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
    ];
  }
}
