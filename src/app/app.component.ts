import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-worker';

  act() {
    const worker = new Worker('./heavy-op.worker', { type: 'module' });
    worker.onmessage = ({ data }) => {
      console.log('page got message:', data);
    };
    worker.postMessage('hello');
  }
}
