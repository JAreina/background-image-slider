import { Component, OnInit } from "@angular/core";
import { datosSlider } from "./datos-slider";
@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  url: string;
  fondo: string;
  datosSlider: any = datosSlider;
  totalIds: number = 6;
  idActual: number;
  finInterval: any;
  conocimientos: any[];

  constructor() {
    //window.setTimeout(()=> //this.cambiarUrlBackground(),1000);
    this.cambiarUrlBackground();
  }

  ngOnInit() {}

  cambiarUrlBackground() {
    this.finInterval = setInterval(() => {
      this.idActual = Math.floor(Math.random() * this.totalIds);

      this.url = datosSlider[this.idActual].urlLogo;

      this.fondo = `url( ${this.url})`;

      for (let i = 0; i < datosSlider.length; i++) {
        this.conocimientos = [];
        this.conocimientos.push(datosSlider[this.idActual]);
      }
    }, 300);
  }

  pararIntervalo() {
    clearInterval(this.finInterval);
  }
  reanudarIntervalor() {
    this.cambiarUrlBackground();
  }
}
