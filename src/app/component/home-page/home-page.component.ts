import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import AOS from 'aos';
// import * as AOS from 'aos';
import 'aos/dist/aos.css';
import { NgxTypedJsComponent } from 'ngx-typed-js';
// import { Typewriter } from 'typewriter-effect';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  typedStrings: string[] = [
    `       <p class="text-[#EEFF31] text-xs font-mono"><span class="text-[#5918DF]">class </span> PoonamKumawat<span
                class="text-[#ffffff]"> &#123;</span></p>
        <p class="text-[#ffffff] text-xs font-mono"><span class="text-[#5918DF]">constructor </span>&#40;&#41;<span
                class="text-[#ffffff]"> &#123;</span></p>
        <p class="text-[#E3244C]  text-xsfont-mono">this<span class="text-[#24E394]">.name</span><span
                class="text-[#E3244C]">&#61;</span><span class="text-[#24E394]">"Poonam Kumawat"</span><span
                class="text-[#ffffff]">&#59;</span></p>
        <p class="text-[#E3244C] text-xs font-mono">this<span class="text-[#24E394]">.dateOfBirth</span><span
                class="text-[#E3244C]">&#61;</span><span class="text-[#24E394]">"05012002"</span><span
                class="text-[#ffffff]">&#59;</span></p>
        <p class="text-[#E3244C] text-xs font-mono">this<span class="text-[#24E394]">.email</span><span
                class="text-[#E3244C]">&#61;</span><span
                class="text-[#24E394]">"mailpoonam2002&#64;gmail.com"</span><span class="text-[#ffffff]">&#59;</span>
        </p>
        <p class="text-[#ffffff] text-xs font-mono">&#125;</p>
        <p class="text-[#EEFF31] text-xs font-mono">workExperince<span class="text-[#ffffff]"> &#123;</span></p>
        <p class="text-[#ffffff] text-xs font-mono"><span class="text-[#5918DF]">return </span>&#91;</p>
        <p class="text-[#ffffff] text-xs  font-mono">&#123;<span class="text-[#24E394]">'2023 : Present'</span> : <span
                class="text-[#24E394]">'Junior Software Engineer'</span>&#125;&#59;</p>
        <p class="text-[#ffffff] text-xs font-mono">&#93;</p>
        <p class="text-[#ffffff] text-xs font-mono">&#125;</p>
        <!--  -->
        <p class="text-[#EEFF31] text-xs font-mono">education<span class="text-[#ffffff]"> &#123;</span></p>
        <p class="text-[#ffffff] text-xs font-mono"><span class="text-[#5918DF]">return </span>&#91;</p>
        <p class="text-[#ffffff] text-xs font-mono">&#123;<span class="text-[#24E394]">'2021 : 2023'</span> : <span
                class="text-[#24E394]">'Mumbai University- Master in Computer Applications'</span>&#125;,</p>
        <p class="text-[#ffffff] text-xs font-mono">&#123;<span class="text-[#24E394]">'2028 : 2021'</span> : <span
                class="text-[#24E394]">'Mumbai University- Bachelor in Information Technology'</span>&#125;,</p>
        <p class="text-[#ffffff]  font-mono">&#93;</p>
        <p class="text-[#ffffff]  font-mono">&#125;</p>
        <!--  -->
        <p class="text-[#EEFF31] text-xs font-mono">skills<span class="text-[#ffffff]"> &#123;</span></p>
        <p class="text-[#ffffff] text-xs font-mono"><span class="text-[#5918DF]">return </span>&#91;</p>
        <p class="text-[#ffffff] text-xs font-mono"><span
                class="text-[#24E394]">'HTML/CSS/JS','Angular','React','Nextjs',<br>'Bootstrap/Tailwind CSS',
                'Typescript', 'Git/Github'</span>
            &#59;</p>
        <p class="text-[#ffffff] text-xs font-mono">&#93;</p>
        <p class="text-[#ffffff] text-xs font-mono">&#125;</p>
        <p class="text-[#ffffff] text-xs font-mono">&#125;</p>`,
  ];
  isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
     this.isBrowser = isPlatformBrowser(this.platformId);
  }

  cssLoader = true;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
    AOS.refresh();

    setTimeout(() => {
      this.cssLoader = false;
    }, 2000);
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
}
