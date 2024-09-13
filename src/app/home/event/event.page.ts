import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFabButton,
  IonIcon,
  IonFooter,
  IonText,
  IonCol,
  IonRow,
  IonButton,
  IonListHeader,
  IonLabel,
  IonAvatar,
  IonCard,
  IonList,
  IonItem,
  IonBackButton,
  IonButtons,
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/interfaces/event.interface';
import { addIcons } from 'ionicons';
import {
  calendarOutline,
  heart,
  heartOutline,
  locationOutline,
} from 'ionicons/icons';
import { events } from 'src/app/data/events';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonBackButton,
    IonItem,
    IonList,
    IonCard,
    IonAvatar,
    IonLabel,
    IonListHeader,
    IonButton,
    IonRow,
    IonCol,
    IonText,
    IonFooter,
    IonIcon,
    IonFabButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    DatePipe,
  ],
})
export class EventPage implements OnInit {
  event!: Event;

  favorite = false;

  private route = inject(ActivatedRoute);

  constructor() {
    addIcons({ calendarOutline, locationOutline, heart, heartOutline });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      this.getEvent(parseInt(id));
    }
  }

  getEvent(id: number) {
    this.event = events.find((event) => event.id == id)!;
  }

  toggleIsFavorite() {
    this.favorite = !this.favorite;
  }
}
