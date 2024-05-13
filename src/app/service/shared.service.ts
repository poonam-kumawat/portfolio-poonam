import { Injectable } from '@angular/core';
import saveAs from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  downloadPdf(): void {
    const pdfUrl = '/assets/resume/poonamresume.pdf';

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

  constructor() {}
}
