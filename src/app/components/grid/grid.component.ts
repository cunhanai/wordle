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
  palavra: string = '';
  palavraArray: string[] = [];

  listaPalavras: string[] = [
    'aureo',
    'audio',
    'sagaz',
    'icone',
    'brasa',
    'criar',
    'animo',
    'cozer',
    'todos',
    'fluir',
  ];
  qtdTentativas: number[] = [0, 1, 2, 3, 4, 5];
  qtdLetras: number[] = [0, 1, 2, 3, 4];
  palavrasTentativas: string[][] = this.initializePalavrasTentativas();
  qtdSubmitted: number = 0;
  fim: boolean = false;

  constructor() {
    this.reset();
  }

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

      const palavra = this.palavrasTentativas[this.qtdSubmitted - 1];
      if (
        palavra[0] === this.palavraArray[0] &&
        palavra[1] === this.palavraArray[1] &&
        palavra[2] === this.palavraArray[2] &&
        palavra[3] === this.palavraArray[3] &&
        palavra[4] === this.palavraArray[4]
      ) {
        alert('Você ganhou!');
        this.fim = true;
      } else if (this.qtdSubmitted === 6) {
        alert(`Você perdeu! A palavra era ${this.palavra}`);
        this.fim = true;
      }
    }
  }

  reset() {
    this.palavrasTentativas = this.initializePalavrasTentativas();
    this.qtdSubmitted = 0;
    this.fim = false;
    this.palavra = this.getPalavra();
    this.palavraArray = this.palavra.split('');
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

  getPalavra() {
    const index = Math.floor(Math.random() * 10);
    return this.listaPalavras[index];
  }
}
