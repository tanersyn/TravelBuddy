import { Component } from '@angular/core';
import { TravelCardComponent } from '@temp-front/ui-components';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [TravelCardComponent, CommonModule, RouterModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  mockTrips = [
    {
      destination: 'Kapadokya, Türkiye',
      startDate: new Date(new Date().setDate(new Date().getDate() + 5)),
      endDate: new Date(new Date().setDate(new Date().getDate() + 9)),
      budget: '3000₺ - 5000₺',
      userName: 'Ahmet Yılmaz',
      userAvatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      destination: 'Roma, İtalya',
      startDate: new Date(new Date().setDate(new Date().getDate() + 15)),
      endDate: new Date(new Date().setDate(new Date().getDate() + 20)),
      budget: '€500 - €800',
      userName: 'Selin Demir',
      userAvatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      destination: 'Bali, Endonezya',
      startDate: new Date(new Date().setDate(new Date().getDate() + 30)),
      endDate: new Date(new Date().setDate(new Date().getDate() + 45)),
      budget: '$1000 - $1500',
      userName: 'Can Kaya',
      userAvatar: 'https://randomuser.me/api/portraits/men/85.jpg'
    }
  ];

  onMatchRequested(userName: string) {
    alert(`${userName} ile eşleşme isteği gönderildi! Ortak havuza (Escrow) yönlendirilecek...`);
  }
}
