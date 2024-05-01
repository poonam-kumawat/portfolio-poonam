import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
    AOS.refresh();
  }
ismobilenav=false;
  scrollToSection(sectionId: string) {
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
   
  }
  onMobilenav(){
    this.ismobilenav=!this.ismobilenav;
  }
}
