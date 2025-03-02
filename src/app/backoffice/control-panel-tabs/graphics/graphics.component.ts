import { Component } from '@angular/core';
import { GraphicPrimeraCajaComponent } from "../graphic-primera-caja/graphic-primera-caja.component";
import { GraphicTerceraCajaComponent } from "../graphic-tercera-caja/graphic-tercera-caja.component";
import { GraphicSegundaCajaComponent } from "../graphic-segunda-caja/graphic-segunda-caja.component";

@Component({
  selector: 'app-graphics',
  imports: [GraphicPrimeraCajaComponent, GraphicTerceraCajaComponent, GraphicSegundaCajaComponent],
  standalone: true,
  templateUrl: './graphics.component.html',
  styleUrl: './graphics.component.scss'
})
export class GraphicsComponent {

}
