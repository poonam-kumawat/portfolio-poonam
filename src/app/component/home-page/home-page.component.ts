import { isPlatformBrowser } from '@angular/common';
import {Component, HostBinding, HostListener, Inject,  OnInit, PLATFORM_ID,  signal } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Subject} from 'rxjs';
import { Meta } from '@angular/platform-browser';


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
        <p style="color:#ffffff">&#123;<span style="color:#24E394">'2018 : 2021'</span> : <span
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
    private meta: Meta
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  cssLoader = true;
  private scrollEvent = new Subject<void>();
  ngOnInit() {
    this.meta.addTag({ name: 'Poonam Kumawat', content: 'Software Engineer' });
    this.meta.addTag({
      property: 'og:title',
      content: 'Poonam Kumawat - Software Engineer',
    });
    this.meta.addTag({
      property: 'og:description',
      content: 'Profile of Poonam Kumawat, a passionate Software Engineer.',
    });
    this.meta.addTag({
      property: 'og:image',
      content:
        'https://ik.imagekit.io/poonam/Screenshot%202024-05-17%20225248.png?updatedAt=1716489662811',
    });
    this.meta.addTag({
      property: 'og:url',
      content: 'https://poonam-kumawat.vercel.app',
    });
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
      document.body.classList.add('loading');

      setTimeout(() => {
        this.cssLoader = false;
        document.body.classList.remove('loading');
      }, 2000);
    }
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
}
