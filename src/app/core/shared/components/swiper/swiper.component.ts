import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal, WritableSignal } from '@angular/core';
import { Img1Component } from "../img1/img1.component";
import { ImageItem } from 'src/app/core/Interfaces/image-item.interface';
import Swiper from 'swiper';
@Component({
  selector: 'app-swiper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  imports: [Img1Component],
})
export class SwiperComponent implements OnInit {
  public mainSwiper: WritableSignal<Swiper | null> = signal(null);
  public thumbsSwiper: WritableSignal<Swiper | null> = signal(null);
  public swiper: ImageItem[] = [
    { img: 'assets/imgs/nature-1.jpg' },
    { img: 'assets/imgs/nature-2.jpg' },
    { img: 'assets/imgs/nature-3.jpg' },
    { img: 'assets/imgs/nature-4.jpg' },
    { img: 'assets/imgs/nature-5.jpg' }
  ];
  public ngOnInit(): void {
    setTimeout(() => {
      this.initializeSwipers();
    });
  }
  private initializeSwipers(): void {
    try {
      const savedIndex = localStorage.getItem('swiperIndex');
      const mainElement = document.querySelector('.mySwiper');
      if (mainElement && (mainElement as any).swiper) {
        const swiperInstance = (mainElement as any).swiper as Swiper;
        this.mainSwiper.set(swiperInstance);
        if (savedIndex) {
          this.mainSwiper()?.slideTo(parseInt(savedIndex, 10));
        }
        this.mainSwiper()?.on('slideChange', () => {
          localStorage.setItem('swiperIndex', this.mainSwiper()?.activeIndex.toString() || '');
        });
      } else {
        console.error('Main Swiper is not initialized.');
      }
      const thumbsElement = document.querySelector('.mySwiper2');
      if (thumbsElement && (thumbsElement as any).swiper) {
        const swiperInstance = (thumbsElement as any).swiper as Swiper;
        this.thumbsSwiper.set(swiperInstance);
        if (savedIndex) {
          this.thumbsSwiper()?.slideTo(parseInt(savedIndex, 10));
        }
      } else {
        console.error('Thumbs Swiper is not initialized.');
      }
    } catch (error) {
      console.error('Error initializing Swipers:', error);
    }
  }
  public clearSavedPosition(): void {
    try {
      localStorage.removeItem('swiperIndex');
      this.mainSwiper()?.slideTo(0);
      this.thumbsSwiper()?.slideTo(0);
    } catch (error) {
      console.error('Error resetting swiper positions:', error);
    }
  }
}
