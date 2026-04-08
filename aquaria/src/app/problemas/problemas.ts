
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-problemas',
  imports: [RouterLink],
  templateUrl: './problemas.html',
  styleUrl: './problemas.css',
})
export class Problemas {
  pipi = [
    {
      titulo: 'poluiçao, por que aumenta tanto?',
      imagem: 'https://cienciahoje.org.br/wp-content/uploads/2025/03/AdobeStock_1025686646.jpeg',
    }
  ]
}
