import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private apiUrl = 'https://api.coingecko.com/api/v3/coins/markets';

  constructor(private http: HttpClient) { }

  getTopCoins(limit: number = 52): Observable<any[]> {
    let params = new HttpParams()
      .set('vs_currency', 'usd')
      .set('order', 'market_cap_desc')
      .set('per_page', limit.toString())
      .set('page', '1')
      .set('sparkline', 'false');
      
    if (environment.apiKey) {
      params = params.set('x_cg_demo_api_key', environment.apiKey);
    }

    return this.http.get<any[]>(this.apiUrl, { params }).pipe(
      map(coins => coins.map(coin => ({
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol,
        image: coin.image,
        current_price: coin.current_price,
        market_cap: coin.market_cap,
        price_change_percentage_24h: coin.price_change_percentage_24h
      })))
    );
  }
}