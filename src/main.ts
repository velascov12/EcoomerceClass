import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
  ],
});

// import { addIcons } from 'ionicons';
// import { mail, cart, home, add, remove, trash, cart } from 'ionicons/icons';

// import { addIcons } from 'ionicons';
import {
  mail,
  cart,
  home,
  add,
  remove,
  trash,
  person,
  personCircle,
  search,
  heart,
  star,
  notifications,
  location,
  wallet,
  bag,
  restaurant,
  car,
  business,
  homeOutline,
  cartOutline,
  personOutline,
  heartOutline,
  starOutline,
  notificationsOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';

// Registrar todos los iconos que uses
addIcons({
  // Iconos básicos y navegación
  mail: mail,
  cart: cart,
  home: home,
  add: add,
  remove: remove,
  trash: trash,

  // Usuario y perfil
  person: person,
  'person-circle': personCircle,
  'person-outline': personOutline,

  // Navegación y UI
  search: search,

  // Comercio y favoritos
  heart: heart,
  'heart-outline': heartOutline,
  star: star,
  'star-outline': starOutline,
  bag: bag,

  // Finanzas
  wallet: wallet,

  // Categorías de mercado
  restaurant: restaurant,
  car: car,
  business: business,

  // Notificaciones y ubicación
  notifications: notifications,
  'notifications-outline': notificationsOutline,
  location: location,

  // Versiones outline
  'home-outline': homeOutline,
  'cart-outline': cartOutline,
});
