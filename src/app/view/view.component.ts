import { Component, OnInit, HostListener, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import * as meow from '../../assets/cat_images.json';
import * as doggy from '../../assets/dog_images.json';
import { DOCUMENT } from '@angular/common';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [ NgbModule, NgbCarouselConfig ],
  encapsulation: ViewEncapsulation.None
})

export class ViewComponent implements OnInit {
  
  constructor(config: NgbCarouselConfig) {
      config.interval = 2500; 
      config.wrap = true;
      config.showNavigationArrows = false;
      config.showNavigationIndicators = false;
  }

  public selectedAnimal = "dog";
  
  onChange() {
    if(this.selectedAnimal == "cat")
      this.selectedAnimal = "dog";
    else
      this.selectedAnimal = "cat";
    
    if(this.selectedAnimal == "dog")
      this.imgUrls = this.shuffleArray(this.dogUrls);
    else
      this.imgUrls = this.shuffleArray(this.catUrls);
    
    setTimeout(() => this.scrollToTop(), 50);
  }

  public catUrls: any = (meow as any).default;
  public dogUrls: any = (doggy as any).default;
  public imgUrls = this.shuffleArray(this.dogUrls);

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  public windowScrolled: boolean;
  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      } 
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }
  scrollToTop() {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  public liked;
  like() {
    if(this.liked)
      this.liked = false;
    else
      this.liked = true;
  }

  ngOnInit() {
  }


}
