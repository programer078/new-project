import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SwiperComponent } from "../../core/shared/components/swiper/swiper.component";

@Component({
  selector: 'app-swiperpage',
  templateUrl: './swiperpage.page.html',
  styleUrls: ['./swiperpage.page.scss'],
  standalone: true,
  imports: [IonContent,SwiperComponent]
})
export class SwiperpagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
