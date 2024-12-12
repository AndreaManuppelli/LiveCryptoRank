import { Component } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  coins: any[] = [];


  constructor(private cryptoService: CryptoService) { }

  

  ngOnInit() {
    this.cryptoService.getTopCoins().subscribe(
      coins => {
        this.coins = coins;
        console.log(this.coins);
      },
      error => {
        console.error(error);
      }
    );
  }
}
