import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  startIndex!:number;
  slideIndex = 0;
  Imagedata:any=[];
  constructor() { }

  ngOnInit(){
    this.Imagedata=[{
      img:'../../assets/img/banner-2.jpg'
    },{
      img:'../../assets/img/banner1.jpg',
    },{
      img:'../../assets/img/banner-2.jpg',
    }]
    console.log(this.Imagedata);
    this.Repeat();
  }
  Repeat() {
    setTimeout(() => {
      this.__FunctionSlide();
      this.Repeat();
    }, 3000);
  }

  __FunctionSlide() {
    var x = Array.from(document.getElementsByClassName('mall-show-slide')as HTMLCollectionOf<HTMLElement>);

    for (var i of x) {
      i.style.display = 'none';
    }
    this.slideIndex++;

    if (this.slideIndex > x.length) {
      this.slideIndex = 1
    }

  var y1=  x[this.slideIndex-1] as HTMLElement
      y1.style.display = "block";

  }
}
