import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
      imagem: 'https://aquaria.com.br/wp-content/uploads/2023/11/peixe-azul.jpg',
    },
    {
      not: 'Recursos em risco',
      descricao: 'A pesca excessiva e a poluição estão reduzindo drasticamente a quantidade de peixes, ameaçando o equilíbrio marinho.',
      imagem: 'https://aquaria.com.br/wp-content/uploads/2023/11/peixe-azul.jpg',
    },
    {
      not: 'Futuro incerto',
      descricao: 'Sem mudanças urgentes, a economia e o sustento da população podem entrar em colapso.',
      imagem: 'https://aquaria.com.br/wp-content/uploads/2023/11/peixe-azul.jpg',
    }
  ];
}
