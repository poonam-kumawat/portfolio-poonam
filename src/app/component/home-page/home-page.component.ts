import { isPlatformBrowser } from '@angular/common';
import { Component, HostBinding, HostListener, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Meta } from '@angular/platform-browser';

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  productImpact?: string;
  image: string;
  tags: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: string; icon?: string }[];
}

export interface AchievementItem {
  title: string;
  role: string;
  period: string;
  description: string;
  highlight: string;
  badge: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  isBrowser: boolean;
  cssLoader = true;
  ismobilenav = false;
  copiedEmail = false;
  activeProjectCategory = 'All';
  activeSkillTab = 0;

  // Dual Role Lens: Engineering vs. Product Management
  roleLens: 'engineering' | 'product' = 'engineering';

  // Scroll Progress Percentage for Continuous Top Bar
  scrollProgress = 0;

  // 3D Tilt for Hero Avatar
  heroTiltX = 0;
  heroTiltY = 0;

  darkMode = signal<boolean>(true); // Dark-first by default

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  projects: ProjectItem[] = [
    {
      id: 'vichar',
      title: 'A Modern Blogging Platform (Vichar-IT)',
      description: 'A dynamic blog and publishing platform enabling users to write, publish, and share blogs with streamlined performance and cloud persistence.',
      productImpact: 'Engineered responsive content authoring workflows with markdown parsing, instant local caching, and cloud sync.',
      image: './../../../assets/vichar.png',
      tags: ['Angular', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/poonam-kumawat/Vichar-frontend',
      liveUrl: 'https://vichar-notes.vercel.app/'
    },
    {
      id: 'zest',
      title: 'Ecommerce Grocery Store (Zest)',
      description: 'Full-stack MERN ecommerce platform featuring JWT authentication, cart management, secure payment integration, and responsive grocery ordering.',
      productImpact: 'Designed high-converting checkout micro-interactions, seamless product filtering, and smooth state updates.',
      image: './../../../assets/zest.png',
      tags: ['React.js', 'Express.js', 'MongoDB', 'JWT Auth'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/poonam-kumawat',
      liveUrl: 'https://zest-organic.vercel.app/'
    },
    {
      id: 'youtubesave',
      title: 'YouTube Stream Downloader',
      description: 'High-speed web utility enabling custom video stream extraction and audio downloads with an intuitive dark-mode interface.',
      productImpact: 'Engineered streamlined 2-click video conversion pipeline with zero client latency and responsive design.',
      image: './../../../assets/youtube.png',
      tags: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
      category: 'Frontend',
      githubUrl: 'https://github.com/poonam-kumawat/Youtube_Video_Downloader',
      liveUrl: 'https://youtubesave-downloader.vercel.app/'
    },
    {
      id: 'scape',
      title: 'Scape — Real-Time Chat & Extraction Engine',
      description: 'Cutting-edge communication app paired with headless browser automation pipelines for dynamic data extraction.',
      productImpact: 'Structured real-time websocket message delivery and automated JSON data normalization for user intelligence.',
      image: './../../../assets/scape.png',
      tags: ['Next.js', 'Puppeteer', 'Node.js', 'REST APIs'],
      category: 'Tools & Automation',
      githubUrl: 'https://github.com/poonam-kumawat/Scape',
      liveUrl: 'https://scape-chat.vercel.app/'
    },
    {
      id: 'sparky',
      title: 'Sparky — Reactive Cloud Web App',
      description: 'Interactive single-page platform engineered with reactive state management, seamless animations, and Firebase persistence.',
      productImpact: 'Architected real-time cloud data listeners with RxJS to keep UI states 100% in sync without page reloads.',
      image: './../../../assets/sparky.png',
      tags: ['Angular', 'Firebase', 'RxJS', 'Tailwind CSS'],
      category: 'Frontend',
      githubUrl: 'https://github.com/poonam-kumawat/sparky',
      liveUrl: 'https://sparky-9f2fa.web.app/'
    }
  ];

  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Engineering',
      icon: 'layout',
      skills: [
        { name: 'Angular', level: 'Expert', icon: './../../../assets/angularjs.svg' },
        { name: 'React.js', level: 'Expert', icon: './../../../assets/react.svg' },
        { name: 'TypeScript', level: 'Expert', icon: './../../../assets/TypeScript.svg' },
        { name: 'JavaScript (ES6+)', level: 'Expert', icon: './../../../assets/javascript.svg' },
        { name: 'Tailwind CSS & CSS3', level: 'Expert', icon: './../../../assets/tailwind.svg' },
        { name: 'HTML5 & Bootstrap', level: 'Expert', icon: './../../../assets/html-5.svg' },
      ]
    },
    {
      title: 'Backend, Java & APIs',
      icon: 'server',
      skills: [
        { name: 'Java', level: 'Expert', icon: './../../../assets/cpp.svg' },
        { name: 'Spring Boot', level: 'Advanced' },
        { name: 'REST APIs & Endpoints', level: 'Expert' },
        { name: 'Express.js & Node.js', level: 'Advanced' },
        { name: 'MySQL & SQL', level: 'Expert' },
        { name: 'MongoDB', level: 'Advanced' },
      ]
    },
    {
      title: 'Product & System Design',
      icon: 'compass',
      skills: [
        { name: 'Platinum Google PE (YouTube)', level: 'Platinum Expert' },
        { name: 'Student Product Expert (Postman)', level: 'Certified Expert' },
        { name: 'End-to-End Feature Delivery', level: 'Expert' },
        { name: 'User Advocacy & UX Research', level: 'Expert' },
        { name: 'Figma UI/UX Prototyping', level: 'Expert', icon: './../../../assets/Figma-logo.svg' },
        { name: 'Agile & Cross-Functional Workflows', level: 'Expert' },
      ]
    },
    {
      title: 'Tools, DevOps & AI-Assisted Dev',
      icon: 'terminal',
      skills: [
        { name: 'Git & GitHub', level: 'Expert', icon: './../../../assets/github.svg' },
        { name: 'Postman API Testing', level: 'Expert' },
        { name: 'Jenkins CI/CD', level: 'Published Research', icon: './../../../assets/Jenkins_logo.svg' },
        { name: 'Vercel Deployment', level: 'Expert' },
        { name: 'Claude, Cursor & Windsurf', level: 'AI Power User' },
        { name: 'Puppeteer Automation', level: 'Expert', icon: './../../../assets/Puppeteer.svg' },
      ]
    }
  ];

  achievements: AchievementItem[] = [
    {
      title: 'Platinum Google Product Expert | YouTube',
      role: 'Top-Tier Google Product Community Leader',
      period: '2022 — Present',
      description: 'Recognized at the prestigious Platinum tier for sustained user advocacy, troubleshooting complex product issues, and bridging creator pain points across the global YouTube community.',
      highlight: 'Invited to the exclusive Google Product Expert Summit in Japan.',
      badge: 'PLATINUM TIER'
    },
    {
      title: 'Student Product Expert | Postman',
      role: 'API Literacy & Developer Advocate',
      period: 'Certified',
      description: 'Championed API product literacy, modern testing pipelines, and developer tooling workflows as an official Postman Student Product Expert.',
      highlight: 'Empowered developers with RESTful API best practices and automated testing workflows.',
      badge: 'POSTMAN EXPERT'
    },
    {
      title: 'Published Research Paper on CI/CD Tools',
      role: 'Lead Author & Technical Researcher',
      period: 'Published: NTR (ISSN: 2455-166x)',
      description: 'Authored and published "A Comparative Study of CI/CD Tools and Their Effectiveness in Software Development", analyzing automation efficiencies and delivery velocity.',
      highlight: 'Published in international peer-reviewed journal NTR (ISSN: 2455-166x).',
      badge: 'RESEARCH PUBLICATION'
    }
  ];

  blogs = [
    {
      title: 'Web Scraping with Puppeteer: Creating JSON file',
      readTime: '4 min read',
      url: 'https://poonamkumawat.medium.com/web-scraping-with-puppeteer-creating-json-file-fe4dc58628a4',
      summary: 'Practical developer guide to spinning up headless Chrome instances, navigating dynamic DOM nodes, and cleanly serializing data to disk.',
      tags: ['Puppeteer', 'Node.js', 'Web Scraping']
    },
    {
      title: 'Git Made Simple: An Introduction to Basic Git Commands',
      readTime: '5 min read',
      url: 'https://poonamkumawat.medium.com/git-made-simple-an-introduction-to-basic-git-commands-e95b7d27855a',
      summary: 'Deconstructing version control essentials: branch hygiene, commit mechanics, conflict resolution, and remote synchronization.',
      tags: ['Git', 'Version Control', 'Workflow']
    },
    {
      title: 'A New Era of AI: Next-Gen Artificial Intelligence Tools',
      readTime: '6 min read',
      url: 'https://poonamkumawat.medium.com/a-new-era-of-ai-introducing-the-next-generation-of-artificial-intelligence-tools-edbddd92eb1b',
      summary: 'Analyzing the rapid progression of generative models, autonomous agent frameworks, and developer productivity accelerators.',
      tags: ['AI', 'Innovation', 'Future Tech']
    },
    {
      title: 'Maximizing Jenkins Efficiency: Master-Slave Setup Guide',
      readTime: '5 min read',
      url: 'https://poonamkumawat.medium.com/maximizing-jenkins-efficiency-a-step-by-step-guide-to-setting-up-master-slave-configuration-bdc62e357543',
      summary: 'How to scale continuous integration pipelines by distributing computational build workloads across dedicated agent nodes.',
      tags: ['Jenkins', 'DevOps', 'CI/CD']
    }
  ];

  ngOnInit() {
    this.meta.addTag({ name: 'author', content: 'Poonam Kumawat' });
    this.meta.addTag({ name: 'description', content: 'Full Stack Software Engineer (Angular, React, Java, Spring Boot) & Platinum Google Product Expert' });
    this.meta.addTag({ property: 'og:title', content: 'Poonam Kumawat — Software Engineer Portfolio' });
    this.meta.addTag({ property: 'og:url', content: 'https://poonam-kumawat.vercel.app' });

    if (this.isBrowser) {
      // Check saved theme
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        this.darkMode.set(false);
        this.applyTheme(false);
      } else {
        this.darkMode.set(true);
        this.applyTheme(true);
      }

      AOS.init({
        duration: 700,
        once: true,
        easing: 'ease-out-cubic'
      });
      document.body.classList.add('loading');

      setTimeout(() => {
        this.cssLoader = false;
        document.body.classList.remove('loading');
      }, 1000);
    }
  }

  toggleDarkMode() {
    const nextState = !this.darkMode();
    this.darkMode.set(nextState);
    if (this.isBrowser) {
      this.applyTheme(nextState);
      localStorage.setItem('theme', nextState ? 'dark' : 'light');
    }
  }

  private applyTheme(isDark: boolean) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }

  setRoleLens(role: 'engineering' | 'product') {
    this.roleLens = role;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.isBrowser) {
      AOS.refresh();

      // Calculate continuous scroll progress
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        this.scrollProgress = Math.min(100, Math.max(0, (winScroll / height) * 100));
      }
    }
  }

  scrollToSection(sectionId: string) {
    if (this.isBrowser) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      this.ismobilenav = false;
    }
  }

  scrollToTop() {
    if (this.isBrowser) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  onMobilenav() {
    this.ismobilenav = !this.ismobilenav;
  }

  copyEmail() {
    if (this.isBrowser) {
      navigator.clipboard.writeText('mailpoonam2002@gmail.com');
      this.copiedEmail = true;
      setTimeout(() => {
        this.copiedEmail = false;
      }, 2500);
    }
  }

  openGmail() {
    if (this.isBrowser) {
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=mailpoonam2002@gmail.com', '_blank');
    }
  }

  get filteredProjects(): ProjectItem[] {
    if (this.activeProjectCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.activeProjectCategory);
  }

  onHeroMouseMove(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    this.heroTiltX = -(y * 14);
    this.heroTiltY = x * 14;
  }

  onHeroMouseLeave() {
    this.heroTiltX = 0;
    this.heroTiltY = 0;
  }
}
