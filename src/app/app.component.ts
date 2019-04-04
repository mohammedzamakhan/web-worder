import { Component } from '@angular/core';
import isPrimeNumber from 'prime-number';
import primeNumberList from 'prime-number/list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-worker';

  runWorker() {
    const worker = new Worker('./heavy-op.worker', { type: 'module' });
    worker.onmessage = ({ data }) => {
      console.log('page got message:', data);
    };
    worker.postMessage('hello');
  }

  runThread() {
    const arePrimeList = primeNumberList.map((prime) => {
      return isPrimeNumber(prime);
    });
    console.log(arePrimeList);
  }
}
