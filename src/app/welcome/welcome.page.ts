import { NgStyle } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonFooter,
  IonToolbar,
  IonButton,
  IonIcon,
  IonText,
  IonicSlides,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonText,
    IonIcon,
    IonButton,
    IonToolbar,
    IonFooter,
    IonContent,
    RouterLink,
    NgStyle,
  ],
})
export class WelcomePage {
  onboardingScreens = [
    { image: '1.jpg' },
    { image: '2.jpg' },
    { image: '3.jpg' },
  ];

  swiperModules = [IonicSlides];
  constructor() {}
}
