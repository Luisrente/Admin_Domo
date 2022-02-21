import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { categoria } from 'src/app/interfaces/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria-inicio',
  templateUrl: './categoria-inicio.component.html',
  styleUrls: ['./categoria-inicio.component.css']
})
export class CategoriaInicioComponent implements OnInit {

  constructor(private servicio:CategoriaService,private toastr: ToastrService) { }

listarCategoria:categoria[]=[];

  ngOnInit(): void {
    this.ObtenerCategoria();
  }

  ObtenerCategoria(){
    this.servicio.getCategoria().subscribe(doc =>{
      console.log(doc);
      this.listarCategoria=[];
      doc.forEach((element: any) => {
      this.listarCategoria.push({
        iud:element.payload.doc.id,
        ... element.payload.doc.data()
      });
      console.log(element.payload.doc.id)
      });
      console.log(this.listarCategoria)


    })
  }

  delete(id :any){
   this.servicio.deleteCategoria(id).then(()=>{
    this.toastr.success('La categoria fue eliminada ', 'categoria')
   },error=>{
    this.toastr.error('Opp.. ocurrio ','Error');
     console.log(error)
   })
  }

  edit(category:categoria){
    this.servicio.addCategoriaEdit(category);
  }
}
