import { Injectable } from '@angular/core';

import { Product } from '../models/product'


@Injectable({
  providedIn: 'root'
})
export class ProductService { 

  products:Product[]=[
    new Product(1,'Distinctive Black Forest Cake', 'Cake Flavour- Chocolate, Type of Cake-Cream, Weight- Half Kg, Shape- Round, Serves- 4-6 People',499,"../../assets/cakes/c1.jpeg"),
    new Product(2,'Crunchy butterscotch cake', 'Cake Flavour- butterscotch, Type of Cake-Cream, Weight- Half Kg, Shape- Round, Serves- 4-6 People',449,"../../assets/cakes/c2.jpg"),
    new Product(3,'Fudge brownie cake', 'Cake Flavour- Chocolate, Type of Cake-Cream, Weight- Half Kg, Shape- Round, Serves- 4-6 People',449,"../../assets/cakes/c3.jpg"),
    new Product(4,'Rich Fruit Cake', 'Cake Flavour- Vanilla, Type of Cake - Cream, Weight- Half Kg, Shape- Round, Serves- 4-6 People ',649,"../../assets/cakes/c4.jpg"),
    new Product(5,'chocolate fruit cake', 'Cake Flavour- Chocolate, Type of Cake-Cream, Weight- Half Kg, Shape- Round, Serves- 4-6 People',549,"../../assets/cakes/c5.jpg"),
    new Product(6,'Delightful-blueberry-cake', 'Cake Flavour- -blueberry, Type of Cake-Cream, Weight- Half Kg, Shape- Round, Serves- 4-6 People',549,"../../assets/cakes/c6.jpg"),
    new Product(7,'Glaze-cream-pineapple-cake', 'Cake Flavour- pineapple, Type of Cake-Cream, Weight- Half Kg, Shape- Round, Serves- 4-6 People',499,"../../assets/cakes/c7.jpg"),
    new Product(8,'Cream-drop-cherry-pineapple-cake','Cake Flavour- pineapple, Type of Cake-Cream, Weight- Half Kg, Shape- Round, Serves- 4-6 People',549,"../../assets/cakes/c8.jpg"),
    new Product(9,'Cream-pista-pineapple-cake', 'Cake Flavour- Pineapple, Type of Cake-Cream, Weight- Half Kg, Shape- Round, Serves- 4-6 People',449,"../../assets/cakes/c9.jpg"),
    new Product(10,'Chocolate-walnut-truffle', 'Cake Flavour- Chocolate, Type of Cake-Cream, Weight- Half Kg, Shape- Round, Serves- 4-6 People',449,"../../assets/cakes/c10.jpg"),
    new Product(11,'Chocolate-oreo-mousse-cake', 'Cake Flavour- Chocolate, Type of Cake-Cream, Weight- Half Kg, Shape- Round, Serves- 4-6 People',449,"../../assets/cakes/c11.jpg"),
    new Product(12,'Heavenly-butterscotch-cream-cake', 'Cake Flavour- butterscotch, Type of Cake-Cream, Weight- Half Kg, Shape- Round, Serves- 4-6 People',549,"../../assets/cakes/c12.jpg"),
    new Product(13,'Colored-vermicelli-pineapple-cream-cake', 'Cake Flavour- pineapple, Type of Cake-Cream, Weight- Half Kg, Shape- Round, Serves- 4-6 People',499,"../../assets/cakes/c13.jpg"),
    new Product(14,'Belgian-choco cake', 'Cake Flavour- Chocolate, Type of Cake-Cream, Weight- Half Kg, Shape- Round, Serves- 4-6 People',499,"../../assets/cakes/c14.jpg"),
    new Product(15,'Heavenly-oreo-cookie-cake', 'Cake Flavour- Chocolate, Type of Cake-Cream, Weight- Half Kg, Shape- Round, Serves- 4-6 People',449,"../../assets/cakes/c15.jpg"),
    new Product(16,'Mango-cake', 'Cake Flavour- Mango, Type of Cake-Cream, Weight- Half Kg, Shape- Round, Serves- 4-6 People',399,"../../assets/cakes/c16.jpg"),
    new Product(17,'Red-velvet-fresh-cream-cake', 'Cake Flavour- Red Velvet, Type of Cake-Cream, Weight- Half Kg, Shape- Round, Serves- 4-6 People',449,"../../assets/cakes/c17.jpg"),
    new Product(18,'Choco-spiral-cream-pineapple-cake', 'Cake Flavour- pineapple, Type of Cake-Cream, Weight- Half Kg, Shape- Round, Serves- 4-6 People',399,"../../assets/cakes/c18.jpg"),
    new Product(19,'Black-forest-pastry', '6-pcs',599,"../../assets/cakes/p1.jpg"),
    new Product(20,'Tempting-truffle-pastry', '6-pcs',599,"../../assets/cakes/p2.jpg"),
    new Product(21,'Red-velvet-pastry', '6-pcs',699,"../../assets/cakes/p3.jpg"),
    new Product(22,'Chocolate-pastry', '6-pcs',599,"../../assets/cakes/p4.jpg"),
    new Product(23,'Creamy-chocolate-pastry', '6-pcs',599,"../../assets/cakes/p5.jpg"),
    new Product(24,'Refreshing-coffee-pastry', '6-pcs',599,"../../assets/cakes/p6.jpg"),
  ]

  constructor() { }
  getProducts(): Product[]{
    return this.products
  }
}
