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
      imagem: 'https://cienciahoje.org.br/wp-content/uploads/2025/03/AdobeStock_1025686646.jpeg',
    },
    {
      titulo: 'Poluição',
      descricao: 'O descarte inadequado de lixo e resíduos contamina as águas, prejudicando a vida marinha e afetando diretamente a qualidade dos peixes.',
      imagem: 'https://cienciahoje.org.br/wp-content/uploads/2025/03/AdobeStock_1025686646.jpeg',
    },
    {
      titulo: 'Impacto social',
      descricao: 'A diminuição dos peixes reduz a renda dos pescadores, aumentando a pobreza e dificultando o acesso a condições básicas de vida.',
      imagem: 'https://cienciahoje.org.br/wp-content/uploads/2025/03/AdobeStock_1025686646.jpeg',
    },
  
  ];
}
