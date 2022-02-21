import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { usuario } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private servicio:UserService ) { }

  ngOnInit(): void {
    this.ObtenerUser();
  }

  listarUser:usuario[]=[];

  ObtenerUser(){
    this.servicio.getUser().subscribe(doc =>{
      console.log(doc);
      doc.forEach((element: any) => {
      this.listarUser.push({
        iud:element.payload.doc.id,
        ... element.payload.doc.data()
      });
    })
  }
    )
  console.log(this.listarUser);
  }
}

