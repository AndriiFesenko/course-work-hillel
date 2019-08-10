
import {Content} from '../view/Content';
import {Advertising} from '../view/Advertising';
import {Nav} from '../view/Nav';
import {Footer} from '../view/Footer';
import {Model} from '../model/Model'
import {Cart} from '../view/Cart';
import {Section} from '../view/Section';

export default class Controller {
    
    constructor() {

        
        this.model = new Model;
        this.advertising = new Advertising;
        this.content = new Content;
        this.nav = new Nav;
        this.footer = new Footer;
        this.cart = new Cart(this.content.productsArr);
        this.section = new Section;
        window.onload = this.onload();

        this.staffPick = document.querySelector('.staff-pick');

        this.cart.renderProducts = (way, items) => this.content.renderProducts(way, items);
        this.cart.changeTitle = (title) => this.content.changeTitle(title);
        this.content.selectedProduct = (product) => this.cart.addStuffToCartArr(product);
        this.nav.showCart = () => this.cart.showCart();
        this.content.showAmount = () => this.cart.showCartItemsAmount();
        this.content.checkItem = (id) => this.cart.checkItem(id);
        this.content.sendSelectedProductToLS = (key, value) => this.model.sendItem(key, value);
        this.content.cartProductsArr = this.cart.cartProductsArr;
        this.content.deleteElementFromLS = (key) => this.model.deleteItem(key);
        this.content.changeIcon = () => this.cart.changeIcon();
        this.nav.showItemsBySex = (sex) => this.content.showItemsBySex(sex);
        this.nav.changeTitle = (title) => this.content.changeTitle(title);
        this.nav.showHomePage = () => this.content.showHomePage();
        this.content.showCartItemsAmount = () => this.cart.showCartItemsAmount();
        
    }
    onload(){
        this.getItem();
        this.cart.showCartItemsAmount();
    }

    getItem(){
        let array = this.model.getItem();
        this.cart.addElementsToCart(array);
    }
}