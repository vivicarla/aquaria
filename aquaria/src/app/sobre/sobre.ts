import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-sobre',
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './sobre.html',
    styleUrl: './sobre.css',
})
export class Sobre {
  Sobre = [
    {
      nome: 'Giovanna Mendonça',
      funcao: 'Estunte de codigos',
      bio: 'Desenvolvedora Full Stack apaixonada por arquitetura de componentes e performance.',
      techs: ['Angular', 'TypeScript', 'HTML5','CSS3','Taiwind CSS', 'JavaScript'],
      
      
    },
    {
      nome: 'Alex',
      funcao: 'Estunte de codigos',
      bio: 'Focado em criar interfaces modernas e minimalistas utilizando Tailwind CSS e Figma.',
      techs: ['Angular', 'TypeScript', 'HTML5','CSS3','Taiwind CSS', 'JavaScript'],
     
    },
    {
      nome: 'Carla Viviane',
      funcao: 'Estunte de codigos',
      bio: 'Especialista em segurança cibernética e entusiasta de sistemas distribuídos.',
      techs: ['Angular', 'TypeScript', 'HTML5','CSS3','Taiwind CSS', 'JavaScript'],
      
     
    },
    {
      nome: 'Lucas Bachle',
      funcao: 'Estunte de codigos',
      bio: 'Trabalha na automação de processos e integração contínua para portais de larga escala.',
      techs: ['Angular', 'TypeScript', 'HTML5','CSS3','Taiwind CSS', 'JavaScript'],
      
      
    },
    {
      nome: 'Hemylly',
      funcao: 'Estunte de codigos',
      bio: 'Traduz conceitos complexos de tecnologia em conteúdos acessíveis para a comunidade.',
      techs: ['Angular', 'TypeScript', 'HTML5','CSS3','Taiwind CSS', 'JavaScript'],
      
      
    }
  ];
}
