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
      titulo: 'Economia Atual',
      not: 'Economia baseada na pesca',
      descricao: 'Aquária depende quase totalmente da pesca artesanal como principal fonte de renda e alimento para sua população.',
      imagem: 'https://marsemfim.com.br/wp-content/uploads/2019/10/redes-de-pesca-c%C3%B3pia.jpg',
    },
    {
      titulo: 'Problema Ambiental',
      not: 'Recursos em risco',
      descricao: 'A pesca excessiva e a poluição estão reduzindo drasticamente a quantidade de peixes, ameaçando o equilíbrio marinho.',
      imagem: 'https://www.pensamentoverde.com.br/wp-content/uploads/2023/04/os-perigos-da-pesca-sem-controle.png',
    },
    {
      titulo: 'Desafio',
      not: 'Futuro incerto',
      descricao: 'Sem mudanças urgentes, a economia e o sustento da população podem entrar em colapso.',
      imagem: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGjv2OGlfYYSVP7QOnP5hdwV1buTzXl_RCXa3Z4au2LxBBokbS',
    }
  ];
}
