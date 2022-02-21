import { Component, OnInit } from '@angular/core';
import { ofertas } from 'src/app/interfaces/ofertas';
import { EstadisticasService } from '../../services/estadisticas.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  constructor(private servicio: EstadisticasService) { }


  listarOfertas:ofertas[]=[];

  ngOnInit(): void {

    this.ObtenerOferta();
  }


  ObtenerOferta(){
    this.servicio.getOferta().subscribe(
      doc =>{
       // console.log(doc);
        doc.forEach((element: any) => {
          this.listarOfertas.push({
            iud:element.payload.doc.id,
            ... element.payload.doc.data()
          });
        })
      }
    )
    console.log(this.listarOfertas);
    
  }
}
