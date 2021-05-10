import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  adminEmail = 'admin@gmail.com';

  firebaseCategories = 'https://onlinestore-b84a8-default-rtdb.firebaseio.com/categories';
  firebaseProducts = 'https://onlinestore-b84a8-default-rtdb.firebaseio.com/products';
  firebaseProductsTop = 'https://onlinestore-b84a8-default-rtdb.firebaseio.com/productsTop';
  dirPathProducts =  'imagesProducts';
  firebaseOrders = 'https://onlinestore-b84a8-default-rtdb.firebaseio.com/orders';
  firebaseUsers = 'https://onlinestore-b84a8-default-rtdb.firebaseio.com/users';
  firebaseComments = 'https://onlinestore-b84a8-default-rtdb.firebaseio.com/commentsNotModerated';

  costGreenSector = 20;
  costYellowSector = 50;
  costAnotherSector = 100;

  paginationQuantity = 3;


  firebaseOffice = 'https://onlinestore-b84a8-default-rtdb.firebaseio.com/office';
  companyDetails = {
    index: '79000',
    city: 'Lviv',
    street: 'Galytska',
    house: '1',
    phone: '+38-097-123-45-67',
    email: 'onlinestore@gmail.com',
    instagram: '',
    workSchedule: 'з 10:00 до 23:00',
    weekend: 'без вихідних',
    name: 'Online Store Pizza',
    text: ` - є одним з лідерів на ринку імпортерів італійських продуктів.
    Ми готуємо, а Ви куштуєте справжню італійську піцу по традиційній рецептурі. Наші піцайоло навчались та проходили стажування у Неаполі, на півдні Італії, де народилась піца. Вишуканість цієї страви не знає меж.
    Трохи таланту, досвіду та позитиву і ву-а-ля – легка та свіжа піца, спечена з любов’ю, мчить до Вас у Львові! Наші кур’єри – справжні віртуози своєї справи. Для них будь-які затори не перешкода доставити піцу вчасно та якісно!
    Ви – наші найдорожчі гурмани! Ми прагнемо, щоб весь Львів та його гості мали можливість смакувати справжньою італійською піцою. Buon Apettito:)`,
    licenceYear: `© 2021`,
    licenceText1: `Online Store Pizza.`,
    licenceText2: `Всі права захищено.`

  }

  constructor() { }
}
