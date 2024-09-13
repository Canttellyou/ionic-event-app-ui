import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonIcon,
  IonText,
  IonItemOptions,
  IonFabButton,
  IonBadge,
  IonCol,
  IonRow,
  IonSearchbar,
  IonButton,
  IonicSlides,
  IonCard,
  IonList,
  IonListHeader,
} from '@ionic/angular/standalone';
import {
  locateOutline,
  notificationsOutline,
  optionsOutline,
  locationOutline,
  arrowForwardOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Category } from '../interfaces/category.interface';
import { events } from '../data/events';
import { Event as EventI } from '../interfaces/event.interface';
import { categories } from '../data/categories';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonListHeader,
    IonList,
    IonCard,
    IonButton,
    IonSearchbar,
    IonRow,
    IonCol,
    IonBadge,
    IonFabButton,
    IonItemOptions,
    IonText,
    IonIcon,
    IonLabel,
    IonItem,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    DatePipe,
    RouterLink,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {
  swiperModules = [IonicSlides];

  upcomingEvents: EventI[] = [];

  currentEvents: EventI[] = [];

  categories: Category[] = [];

  constructor() {
    addIcons({
      locateOutline,
      notificationsOutline,
      optionsOutline,
      locationOutline,
      arrowForwardOutline,
    });
  }

  ngOnInit(): void {
    this.currentEvents = [...events];
    this.categories = [...categories];
    const upcomingEvents = events.sort((a, b) => {
      // Convert id to number for comparison
      const idA = a.id;
      const idB = b.id;
      return idB - idA; // Descending order
    });
    this.upcomingEvents = upcomingEvents;
  }

  searchEvents(event: Event) {}
}
