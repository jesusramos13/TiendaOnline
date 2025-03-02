import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartDataset, ChartType, Filler } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graphic-tercera-caja',
  imports: [
    BaseChartDirective
  ],
  standalone: true,
  templateUrl: './graphic-tercera-caja.component.html',
  styleUrl: './graphic-tercera-caja.component.scss'
})
export class GraphicTerceraCajaComponent implements OnInit {

  constructor() { 
    Chart.register(Filler); 
  }

  ngOnInit(): void {
    this.setChartData();
  }

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true, // Línea obligatoria
    maintainAspectRatio: false, // Proporción del gráfico
    plugins: {
      legend: { // campo opcional
        display: true,
        position: 'bottom'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "",
          font: { size: 14, weight: "bolder" }
        }
      },
      y: {
        title: {
          display: true,
          text: "",
          font: { size: 14, weight: "bolder" }
        },
        ticks: {
          stepSize: 10,
        }
      }
    }
  }

  public lineChartLabels: string[] = []
  public lineChartData: ChartDataset<'line'>[] = [
    {
      data: [],
      label: "",
      backgroundColor: [],
      hoverBackgroundColor: [],
    }
  ];

  public lineChartType: ChartType = 'line';


  private setChartData(): void {
    const data = {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      values1: [0, 50, 100, 150, 200, 175, 100, 120, 100, 80, 120, 150],
      values2: [50, 70, 80, 85, 95, 100, 100, 90, 150, 150, 200, 150],
      values3: [30, 50, 80, 90, 95, 100, 110, 130, 150, 160, 175, 200]
    }

    this.lineChartLabels = data.labels;
    this.lineChartData = [
      {
        data: data.values1,
        label: "Iphone",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "rgba(75,192,192,1)",
        pointBorderColor: "#fff",
        fill: true,
      },
      {
        data: data.values2,
        label: "Samsung",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        fill: true,
      },
      {
        data: data.values3,
        label: "Xiaomi",
        backgroundColor: "rgba(255, 219, 99, 0.2)",
        borderColor: "rgba(213, 255, 99, 0.98)",
        pointBackgroundColor: "rgb(161, 255, 99)",
        pointBorderColor: "#fff",
        fill: true,
      }
    ];
  }


}
