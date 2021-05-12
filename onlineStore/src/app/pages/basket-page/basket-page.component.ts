import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { Uuidv4Service } from 'src/app/shared/services/uuidv4.service';
import { Loader } from '@googlemaps/js-api-loader';
import { MapService } from 'src/app/shared/services/map.service';
import { IOrder } from 'src/app/shared/interfaces/order.interface';


@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent implements OnInit {
  @ViewChild('map') divMap: ElementRef;
  private map: google.maps.Map;
  private gmarker: google.maps.Marker = null;

  address = ''; //ввід адреси доставки
  formattedAddress = ''; //відформатована/четабельна адреса доставки
  errorAddress = false; //помилка в адресі доставки
  emptyAddress = false; //адресу доставки не введено
  emptyUser = false; //немає активного юзера
  deliveryCost = 0; //вартість доставки

  arrProducts = null;
  totalPrice: number = null;
  activeUser = null; //залогінений user, в т.ч. адмін

  constructor(
    public usersService: UsersService,
    private authorizationService: AuthorizationService,
    private orderService: OrderService,
    private router: Router,
    private mapService: MapService,
    private uuidv4Service: Uuidv4Service,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.initSubscriptionPrice();
    this.initSubscriptionUser();
    this.loadLocalStorageUser(); //якщо в LocalStorage вже є користувач
    this.loadLocalStoragePrice(); //якщо в LocalStorage вже є товар у корзині
    this.initMap();
  }

  private initSubscriptionPrice(): void {
    this.orderService.basket.subscribe( () => {
      this.loadLocalStoragePrice();
    })
  }

  private initSubscriptionUser(): void {
    this.authorizationService.loggedIn.subscribe( () => {
      this.loadLocalStorageUser();
    })
  }

  private loadLocalStoragePrice(): void {
    if (localStorage.length > 0 && localStorage.getItem('basket')) { //якщо в кошику є товари
      this.arrProducts = JSON.parse(localStorage.getItem('basket'));
      this.totalPrice = this.orderService.total(this.arrProducts);
    } else { //якщо в кошику немає товарів
      this.arrProducts = null;
      this.totalPrice = 0;
    }
  }

  private loadLocalStorageUser(): void {
    if (localStorage.length > 0 && localStorage.getItem('activeUser')) { //якщо є залогінений користувач
      this.activeUser = JSON.parse(localStorage.getItem('activeUser'));
    } else { //якщо немає залогінених користувачів
      this.activeUser = null;
    }
  }

  productCounter(product, isIncrease: boolean): void {
    if (isIncrease) {
      product.count++;
    }
    else {
      if (product.count > 1 ) {
        product.count--;
      }
    }
    this.renewalLocalStorage();
  }

  deleteProduct(product): void {
    this.arrProducts = this.arrProducts.filter( elem => elem[0] !== product[0] );
    if (this.arrProducts && this.arrProducts.length === 0) {this.arrProducts = null} //якщо видалено останній продукт кошика
    this.renewalLocalStorage();
  }

  private renewalLocalStorage(): void{ //внесення змін у LocalStorage
    if (this.arrProducts && this.arrProducts.length > 0){ //якщо у кошику є продукти
    localStorage.setItem('basket', JSON.stringify(this.arrProducts));
    this.orderService.basket.next(this.arrProducts);
    } else { //якщо видалено останній продукт кошика
      localStorage.removeItem('basket'); //очистка кошика
      this.orderService.basket.next(null);
    }
  }

  buy(): void {
    if (this.activeUser){
      this.emptyUser = false;
    if (this.formattedAddress) { //введення адреси доставки
      const newOrder: IOrder = {
        id: this.uuidv4Service.uuidv4(),
        date: new Date(),
        user: this.activeUser,
        product: this.arrProducts,
        total: this.totalPrice,
        deliveryAddress: this.formattedAddress,
        deliveryCost: this.deliveryCost,
        orPaid: false,
        whetherDelivered: false
      }
      this.orderService.addOrder(newOrder); //запис поточного ордера в масив всіх ордерів
      this.usersService.getOneUser(this.activeUser[0]) //отримання з firebase останніх даних про поточного користувача
      .then(data => {
        const currentUser = data;
        if (currentUser.orders) { //якщо користувач вже має хоч 1 ордер
          currentUser.orders.push(newOrder);
        } else {
          currentUser.orders = [newOrder];
        }
        this.usersService.patchUser([this.activeUser[0], currentUser]); //внесення ордера в масив всіх ордерів користувача
        localStorage.removeItem('basket'); //очистка кошика
        this.orderService.basket.next(null);
        this.emptyAddress = false;
      })
    } else {
      this.emptyAddress = true;
    }
    } else {
      this.emptyUser = true;
    }
  }

  returnProducts(): void {
    this.router.navigate(['/products']);
  }

  initMap(): void { //google-карта із зонуванням
    if (this.arrProducts){
      const loader = new Loader({
        apiKey: this.mapService.apiKey
      });

      loader.load()
      .then(() => {
        this.map = new google.maps.Map(this.divMap.nativeElement, {
          center: this.mapService.mapLocation,
          zoom: 12.5,
          disableDefaultUI: true
        })

        const polygon1 = new google.maps.Polygon(this.mapService.sector1Param) //нанесення на карту sector1
        polygon1.setMap(this.map);

        const polygon2 = new google.maps.Polygon(this.mapService.sector2Param) //нанесення на карту sector2
        polygon2.setMap(this.map);
      })
    }

  }

  displayMap(): void{ //нанесення адреси користувача на карту
    if (this.address){
      if (this.gmarker) { this.gmarker.setMap(null) }; //очистка попереднього маркера
      const geocoder = new google.maps.Geocoder(); //новий маркер адреси доставки користувача
      geocoder.geocode(
        { 'address': this.address },

        (results, status) => {
        if (status == 'OK') {
          const geoLoc = results[0].geometry.location;
          this.formattedAddress = results[0].formatted_address;
          this.gmarker = new google.maps.Marker({
            position: geoLoc,
            map: this.map,
            title: "Address delivery"
          });
          this.deliveryCost = this.mapService.whichSector( //визначення в якому секторі адреса доставки
            geoLoc.lat(),
            geoLoc.lng()
          );
          this.errorAddress = false;
        }
        else
        {
          this.errorAddress = true;
          console.warn(status);
        }

        this.cdr.detectChanges();
      });
      this.emptyAddress = false;
    } else {
      this.emptyAddress = true;
    }
  }
}
