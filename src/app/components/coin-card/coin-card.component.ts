import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coin-card',
  templateUrl: './coin-card.component.html',
  styleUrl: './coin-card.component.scss'
})
export class CoinCardComponent {
  @Input() coin = {
    id: '',
    name: '',
    symbol: '',
    image: '',
    current_price: '',
    market_cap: '',
    price_change_percentage_24h: 0
  };
}
