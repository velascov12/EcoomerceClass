import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonAvatar,
  IonText
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonAvatar,
    IonText,
    CommonModule,
    FormsModule
  ]
})
export class HomePage {

  logoUrl: string = 'https://img.freepik.com/premium-vector/ecommerce-logo-design_624194-152.jpg';
  nombreAplicacion: string = 'Ecommerce';

  // Two-way binding
  usuario: string = '';
  direccionEntrega: string = '';
  pais: string = '';
  ciudad: string = '';
  idioma: string = '';
  moneda: string = '';

  constructor() { }

  // Event binding
  guardarFormulario() {
    console.log('=== INFORMACIÓN DEL FORMULARIO ===');
    console.log('Usuario:', this.usuario);
    console.log('Dirección de entrega:', this.direccionEntrega);
    console.log('País:', this.pais);
    console.log('Ciudad:', this.ciudad);
    console.log('Idioma:', this.idioma);
    console.log('Moneda:', this.moneda);
    console.log('===================================');


    alert('Información guardada. Revisa la consola para ver los datos.');
  }
}
