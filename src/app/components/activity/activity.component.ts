import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements AfterViewInit {
  @ViewChild('myCanvas') myCanvas!: ElementRef;
  private context!: CanvasRenderingContext2D | null;

  constructor(private router: Router) {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.context = (
      this.myCanvas.nativeElement as HTMLCanvasElement
    ).getContext('2d');
    const ctx = this.myCanvas.nativeElement.getContext(
      '2d'
    ) as unknown as CanvasRenderingContext2D;

    const myCanvas = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Lunes',
          'Martes',
          'Miercoles',
          'Jueves',
          'Viernes',
          'Sabado',
          'Domingo',
        ],
        datasets: [
          {
            label: 'Kilometros recorridos por dia',
            data: [12, 19, 3, 5, 2, 3, 6],
            backgroundColor: [
              'rgba(187, 221, 157, 0.2)',
              'rgba(187, 221, 157, 0.2)',
              'rgba(187, 221, 157, 0.2)',
              'rgba(187, 221, 157, 0.2)',
              'rgba(187, 221, 157, 0.2)',
              'rgba(187, 221, 157, 0.2)',
              'rgba(187, 221, 157, 0.2)',
            ],
            borderColor: [
              'rgba(122, 186, 74, 1)',
              'rgba(122, 186, 74, 1)',
              'rgba(122, 186, 74, 1)',
              'rgba(122, 186, 74, 1)',
              'rgba(122, 186, 74, 1)',
              'rgba(122, 186, 74, 1)',
              'rgba(122, 186, 74, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  backButton() {
    this.router.navigate(['main']);
  }
}
