import { Component, OnInit, Input, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-img1',
  templateUrl: './img1.component.html',
  styleUrls: ['./img1.component.scss'],
})
export class Img1Component implements OnInit {
  private _imgPath = signal<string>(''); 

  @Input()
  set imgPath(value: string) {
    this._imgPath.set(value); 
  }

  get imgPath() {
    return this._imgPath();
  }

  public ngOnInit():void {}
}
