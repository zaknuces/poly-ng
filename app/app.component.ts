/**
 * This is the root component that will host polymer components.
 * Created by owais zahid <owais.zahid@autodesk.com> on 02/15/2016
 */
import {Component} from 'angular2/core';
import {Product} from './Product';
import {NgFor} from 'angular2/common';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
  products: Array<Product>;
	selectedItem: Product;

  constructor() {
    this.products = [
				new Product(new Date('10 Nov, 2013'), 'Brake', 'Car Hydrolics Brake', 'good safely record', '1000', false),
				new Product(new Date('10 Jun, 2014'), 'Chassis', 'Mclaren Chassis', 'strong support', '2010', false)
		];

		this.selectedItem = this.products[0];
  }

  productClicked(product) {
			this.selectedItem = product;
	}

	newProduct() {
			this.products.push(this.selectedItem = new Product(new Date('10 Jun, 2014'), 'Feul Injector', 'Delphi FI', 'Multi-Port Fuel', '2010', false))
	}
}
