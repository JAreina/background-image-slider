import { Component, OnInit } from "@angular/core";
import { datosVentana } from "./datos-ventana";
@Component({
  selector: "app-ventana",
  templateUrl: "./ventana.component.html",
  styleUrls: ["./ventana.component.css"]
})
export class VentanaComponent implements OnInit {
  url: string;
  fondo: string;
  datosVentana: any = datosVentana;
  totalIds: number = 6;
  idActual: number;
  finInterval: any;
  conocimientos:any[];


  constructor() { 
    
    
    //window.setTimeout(()=> //this.cambiarUrlBackground(),1000);
  this.cambiarUrlBackground()
  }

  ngOnInit() {
  
  }

  cambiarUrlBackground() {
 
    this.finInterval = setInterval(() => {
      
      this.idActual = Math.floor(Math.random() * this.totalIds);
      
      this.url = datosVentana[this.idActual].urlLogo;

      this.fondo = `url( ${this.url})`;
      
        for(let i =0;i<datosVentana.length;i++){
          this.conocimientos=[]
              this.conocimientos.push(datosVentana[this.idActual]);
        }
       
        
    }, 300);
  }

  pararIntervalo(){
    clearInterval(this.finInterval);
  }
  reanudarIntervalor(){
    this.cambiarUrlBackground();
  }
}
