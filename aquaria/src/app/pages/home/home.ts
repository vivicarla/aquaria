import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  requisicao = [
    {
      not: 'Economia baseada na pesca',
      descricao: 'Aquária depende quase totalmente da pesca artesanal como principal fonte de renda e alimento para sua população.',
      imagem: 'https://estaticos.opara.me/outraspalavras/uploads/2022/04/05180154/220405-PescaB.jpg',
    },
    {
      not: 'Recursos em risco',
      descricao: 'A pesca excessiva e a poluição estão reduzindo drasticamente a quantidade de peixes, ameaçando o equilíbrio marinho.',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6NGG3DF_i5awFCsAbYQZWbrhsR7g8N4sM6g&s',
    },
    {
      not: 'Futuro incerto',
      descricao: 'Sem mudanças urgentes, a economia e o sustento da população podem entrar em colapso.',
      imagem: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGjv2OGlfYYSVP7QOnP5hdwV1buTzXl_RCXa3Z4au2LxBBokbS',
    }
  ];
}
