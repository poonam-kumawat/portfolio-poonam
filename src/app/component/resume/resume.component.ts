import { Component, HostBinding, signal } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { saveAs } from 'file-saver';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  downloadPdf(): void {
    const pdfUrl = '/assets/resume/poonamresume.pdf'; // Replace with your PDF file path

    const xhr = new XMLHttpRequest();
    xhr.open('GET', pdfUrl, true);
    xhr.responseType = 'blob';

    xhr.onload = () => {
      if (xhr.status === 200) {
        const blob = new Blob([xhr.response], { type: 'application/pdf' });
        saveAs(blob, 'Poonam_Kumawat.pdf');
      }
    };
    xhr.send();
  }
  darkMode = signal<boolean>(false);
  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }
}
