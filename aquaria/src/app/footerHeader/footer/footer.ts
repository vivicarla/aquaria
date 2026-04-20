import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink,CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  year: number = new Date().getFullYear();

  contributorsCount: number = 204;

  othersCount: number = 198;

  contributors = [
    {
      name: 'Carla Reis',
      email: 'carla@email.com',
      imageUrl:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?auto=format&fit=facearea&w=256&h=256&q=80'
    },
    {
      name: 'Lucas Silva',
      email: 'lucas@email.com',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=facearea&w=256&h=256&q=80'
    },
    {
      name: 'Ana Costa',
      email: 'ana@email.com',
      imageUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&w=256&h=256&q=80'
    },
    {
      name: 'Pedro Lima',
      email: 'pedro@email.com',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&w=256&h=256&q=80'
    },
    {
      name: 'Marina Souza',
      email: 'marina@email.com',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=facearea&w=256&h=256&q=80'
    }
  ];

}
