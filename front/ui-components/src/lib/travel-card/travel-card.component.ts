import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'travel-buddy-travel-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './travel-card.component.html'
})
export class TravelCardComponent {
  // Angular 17+ Signals Inputs
  destination = input.required<string>();
  startDate = input.required<Date>();
  endDate = input.required<Date>();
  budget = input.required<string>();
  userAvatar = input.required<string>();
  userName = input.required<string>();
  coverImage = input.required<string>();
  
  // Angular 17+ Signals Output
  matchRequested = output<void>();

  onMatchClick() {
    this.matchRequested.emit();
  }
}
