import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements AfterViewInit {
  @ViewChild('myCanvas') myCanvas!: ElementRef;
  private context!: CanvasRenderingContext2D | null;

  contadorPasos: number = 0;
  contadorArbol: number = 0;
  restante: number = 0;
  interval: any = 0;

  constructor(private router: Router) {
    Chart.register(...registerables);
    this.pasos();
    this.arbol();
  }

  ngAfterViewInit() {
    this.context = (
      this.myCanvas.nativeElement as HTMLCanvasElement
    ).getContext('2d');
    const ctx = this.myCanvas.nativeElement.getContext(
      '2d'
    ) as unknown as CanvasRenderingContext2D;
    const myCanvas = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [8, 2],
            backgroundColor: [
              'rgba(0, 93, 82, 0.2)',
              'rgba(246, 246, 246, 0.8)',
            ],
            borderColor: ['rgba(0, 93, 82, 1)', 'rgba(246, 246, 246, 1)'],
            borderWidth: 1,
          },
          {
            data: [6, 4],
            backgroundColor: [
              'rgba(123, 187, 75, 0.2)',
              'rgba(246, 246, 246, 0.8)',
            ],
            borderColor: ['rgba(123, 187, 75, 1)', 'rgba(246, 246, 246, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {},
    });
  }

  goToActivity() {
    this.router.navigate(['activity']);
  }

  logout() {
    this.router.navigate(['login']);
  }

  async pasos() {
    this.interval = setInterval(() => {
      this.contadorPasos += 1;
      console.log(this.contadorPasos);
    }, 3000);
  }

 async  arbol() {
    this.interval = setInterval(() => {
      this.contadorArbol += 1;
      console.log(this.contadorArbol);
    }, 5000);
  }
}
