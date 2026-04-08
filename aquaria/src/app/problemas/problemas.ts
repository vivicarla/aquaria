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
  
  ];
}
