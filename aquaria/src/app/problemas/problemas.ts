import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-problemas',
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './problemas.html',
  styleUrl: './problemas.css',
})
export class Problemas {
  pipi = [
    {
      titulo: 'Sobrepesca',
      descricao: 'A captura excessiva de peixes impede a reposição natural das espécies. Com o tempo, isso reduz drasticamente a quantidade de recursos disponíveis no oceano.',
      imagem: 'https://faunanews.com.br/wp-content/uploads/2020/07/sobrepesca-Chilean_purse_seine-C.-Ortiz-Rojas.jpg',
    },
    {
      titulo: 'Poluição',
      descricao: 'O descarte inadequado de lixo e resíduos contamina as águas, prejudicando a vida marinha e afetando diretamente a qualidade dos peixes.',
      imagem: 'https://www.infoescola.com/wp-content/uploads/2010/02/poluicao-da-agua.jpg',
    },
    {
      titulo: 'Impacto social',
      descricao: 'A diminuição dos peixes reduz a renda dos pescadores, aumentando a pobreza e dificultando o acesso a condições básicas de vida.',
      imagem: 'https://pt.quizur.com/_image?href=https%3A%2F%2Fdev-beta.quizur.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2F%2Fimagens%2F%2F20801044%2F3475c1f5-2edc-441d-8c81-8c5e955f9749.png&w=400&h=400&f=webp',
    },
  
  ];
}
