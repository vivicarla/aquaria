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
      imagem: 'https://imagens.ebc.com.br/l5L6DQWnanC3KpATYnqaClHB8wI=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/atoms/image/1091883-rj_tanrgo_abr_21092017_82t2057.jpg?itok=91gi4Hxz',
    }
  ];
}
