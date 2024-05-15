import { isPlatformBrowser } from '@angular/common';
import { AfterContentChecked, AfterViewInit, Component, HostBinding, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild, signal } from '@angular/core';
import { Route, Router } from '@angular/router';
import AOS from 'aos';
// import * as AOS from 'aos';
import 'aos/dist/aos.css';
import { NgxTypedJsComponent } from 'ngx-typed-js';
import { Subject, debounceTime } from 'rxjs';
import { SharedService } from '../../service/shared.service';
// import { Typewriter } from 'typewriter-effect';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  typedStrings: string[] = [
    `       <p style="color:#EEFF31"><span style="color:#5918DF">class </span> PoonamKumawat<span
                style="color:#ffffff"> &#123;</span></p>
        <p style="color:#ffffff"><span style="color:#5918DF">constructor </span>&#40;&#41;<span
                style="color:#ffffff"> &#123;</span></p>
        <p style="color:#E3244C">this<span style="color:#24E394">.name</span><span
                style="color:#E3244C">&#61;</span><span style="color:#24E394">"Poonam Kumawat"</span><span
                style="color:#ffffff">&#59;</span></p>
        <p style="color:#E3244C">this<span style="color:#24E394">.dateOfBirth</span><span
                style="color:#E3244C">&#61;</span><span style="color:#24E394">"05012002"</span><span
                style="color:#ffffff">&#59;</span></p>
        <p style="color:#E3244C">this<span style="color:#24E394">.email</span><span
                style="color:#E3244C">&#61;</span><span
                style="color:#24E394">"mailpoonam2002&#64;gmail.com"</span><span style="color:#ffffff">&#59;</span>
        </p>
        <p style="color:#ffffff">&#125;</p>
        <p style="color:#EEFF31">workExperince<span style="color:#ffffff"> &#123;</span></p>
        <p style="color:#ffffff"><span style="color:#5918DF">return </span>&#91;</p>
        <p style="color:#ffffff">&#123;<span style="color:#24E394">'2023 : Present'</span> : <span
                style="color:#24E394">'Junior Software Engineer'</span>&#125;&#59;</p>
        <p style="color:#ffffff">&#93;</p>
        <p style="color:#ffffff">&#125;</p>   
        <p style="color:#EEFF31">education<span style="color:#ffffff"> &#123;</span></p>
        <p style="color:#ffffff"><span style="color:#5918DF">return </span>&#91;</p>
        <p style="color:#ffffff">&#123;<span style="color:#24E394">'2021 : 2023'</span> : <span
                style="color:#24E394">'Mumbai University- Master in Computer Applications'</span>&#125;,</p>
        <p style="color:#ffffff">&#123;<span style="color:#24E394">'2028 : 2021'</span> : <span
                style="color:#24E394">'Mumbai University- Bachelor in Information Technology'</span>&#125;,</p>
        <p style="color:#ffffff">&#93;</p>
        <p style="color:#ffffff">&#125;</p>
          <p style="color:#EEFF31">skills<span style="color:#ffffff"> &#123;</span></p>
        <p style="color:#ffffff"><span style="color:#5918DF">return </span>&#91;</p>
        <p style="color:#ffffff"><span
                style="color:#24E394">'HTML/CSS/JS','Angular','React','Nextjs',<br>'Bootstrap/Tailwind CSS',
                'Typescript', 'Git/Github'</span>
            &#59;</p>
        <p style="color:#ffffff">&#93;</p>
        <p style="color:#ffffff">&#125;</p>
        <p style="color:#ffffff">&#125;</p>`,
  ];
  isBrowser: boolean;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private route: Router,
    private sharedService: SharedService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  cssLoader = true;
  private scrollEvent = new Subject<void>();
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }

    setTimeout(() => {
      this.cssLoader = false;
    }, 2000);
    // AOS.refresh();
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    AOS.refresh();
  }

  ismobilenav = false;
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  onMobilenav() {
    this.ismobilenav = !this.ismobilenav;
  }
  darkMode = signal<boolean>(false);
  @HostBinding('class.dark') get mode() {
    
    return this.darkMode();
  }
  onResume() {
    if (this.darkMode()) {
      this.sharedService.downloadPdf();
    } else {
      this.route.navigate(['/resume']);
    }
  }
}
