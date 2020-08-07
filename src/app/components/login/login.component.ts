import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public chatS: ChatService) { }

  ingresar(proveedor: string){
    console.log(proveedor);

    this.chatS.login(proveedor);
  }

}
