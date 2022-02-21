import { Component, OnInit } from '@angular/core';
import { categoria } from '../../../interfaces/categoria';
import { CategoriaService } from '../../../services/categoria.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categoria-agregar',
  templateUrl: './categoria-agregar.component.html',
  styleUrls: ['./categoria-agregar.component.css']
})
export class CategoriaAgregarComponent implements OnInit {

  constructor(private servicio:CategoriaService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.ObtenerCategoria();
    this.servicio.getCategoriaEdit().subscribe(data =>{
      console.log(data);
    })
  }
  
  cat:categoria={
    id:'',
    service:'',
    iud:''

  }


  agregar(){
    this.servicio.addCategoria(this.cat).then(()=>{
      console.log('tarjeta registrada','resgistrada')
      this.toastr.success('La targeta fue registrada con esxito', 'resgistrada')
      this.cat={
        id:'',
        service:'',
        iud:''
      }
    },error =>{
      this.toastr.error('Ocurrio un error','error');
      console.log(error)
    }
    )
  }

  ObtenerCategoria(){
    this.servicio.getCategoria().subscribe(doc =>{
    })
  }
}
