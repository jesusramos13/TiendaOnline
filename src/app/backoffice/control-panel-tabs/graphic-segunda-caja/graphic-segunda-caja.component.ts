import {Component, OnInit} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import {ChartConfiguration, ChartDataset, ChartType} from 'chart.js';

@Component({
  selector: 'app-graphic-segunda-caja',
  imports: [
    BaseChartDirective
  ],
  standalone: true,
  templateUrl: './graphic-segunda-caja.component.html',
  styleUrl: './graphic-segunda-caja.component.scss'
})
export class GraphicSegundaCajaComponent implements OnInit{


  ngOnInit(): void {
    this.setChartData();
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true, // Línea obligatoria
    maintainAspectRatio: true, // Proporción del gráfico
    plugins: {
      legend: { // campo opcional
        display: false,
        position: 'bottom'
      }
    }
  }

  public barChartLabels: string[] = []
  public barChartData: ChartDataset<'bar'>[] = [
    {
      data: [],
      label: "",
      backgroundColor: ["green", "red","yellow"],
      hoverBackgroundColor: [],
    }
  ];

  public barChartType: ChartType = 'bar';


  private setChartData(): void {
    const data = {
      labels: ["Enero", "Marzo", "Mayo", "Julio","Septiembre","Noviembre","Diciembre"],
      values: [100, 50, 100, 150, 80, 120, 200]
    }

    this.barChartLabels = data.labels;
    this.barChartData[0].data = data.values;
  }

}