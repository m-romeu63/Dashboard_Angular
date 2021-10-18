import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: BehaviorSubject<Array<Product>>;

  constructor() {
    const productsToPush = [
      new Product ('Griffoir Cactus', 83.40, 50, 4170),
      new Product ('Croquettes pour Bouledogue Français Adulte', 25.50, 47, 1198.5),
      new Product ('Harnais IDC power Camouflage', 29.50, 39, 1150.5),
      new Product ('Maison de toilette Super Queen', 44.40, 37, 1642.8),
      new Product ('Litière Catsan Hygiene Plus', 7.30, 36, 262.8),
      new Product ('Proplan NutriSavour Junior en mousse', 12.20, 34, 414.8),
      new Product ('Corbeille Cocoon pour chien et chat', 60.80, 27, 1641.6),
      new Product ('Coffret Essentiel Lapin', 15.20, 25, 380),
      new Product ('Lot de 24 souris multicolores', 12.40, 23, 285.2),
      new Product ('Corde avec os', 9.20, 20, 184),
    ];

    this.products = new BehaviorSubject<Array<Product>>(productsToPush);
  }
}
