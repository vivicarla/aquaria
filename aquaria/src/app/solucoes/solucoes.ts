import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-solucoes',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './solucoes.html',
  styleUrl: './solucoes.css',
})
export class Solucoes {
  pipi = [
    {
      titulo: 'Proteção marinha',
      descricao: 'Criar áreas de preservação e estabelecer limites de pesca ajuda na recuperação das espécies e no equilíbrio dos ecossistemas marinhos.',
      imagem: 'https://i.pinimg.com/736x/a7/e8/0e/a7e80ebd061a4f378b6b63349ada0bf3.jpg',
    },
    {
      titulo: 'Combate à poluição',
      descricao: 'Investir em saneamento básico, coleta de resíduos e campanhas ambientais reduz a contaminação das águas e protege a vida marinha.',
      imagem: 'https://i.pinimg.com/1200x/5e/27/b7/5e27b7bad7391fc068dd80c479de12fb.jpg',
    },
    {
      titulo: 'Diversificação econômica',
      descricao: 'Aquária deve investir em turismo sustentável, aquicultura responsável e energias renováveis para reduzir a dependência da pesca.',
      imagem: 'https://i.pinimg.com/1200x/54/da/74/54da7424847c594d732fad7016f3e07c.jpg',
    },
    {
      titulo: 'Educação',
      descricao: 'Cursos profissionalizantes e melhoria da educação pública ajudam a população a conquistar novas oportunidades de trabalho.',
      imagem: 'https://i.pinimg.com/1200x/06/1e/6a/061e6a15cb1183c0c9e79e2f44f3d8dd.jpg',
    }
  
  ];
}
