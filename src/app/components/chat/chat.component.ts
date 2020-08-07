import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje = '';
  elemento: any;
  constructor(public chatS: ChatService) {
    chatS.cargarMensajes().subscribe(() => {
      setTimeout( () => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20);
    });
  }

  ngOnInit(){
    this.elemento = document.getElementById('app-mensajes');
  }

  enviar_mensaje(){
    console.log(this.mensaje);

    if (this.mensaje.length === 0) {
      return;
    }

    this.chatS.agregarMensaje(this.mensaje)
    .then(() => this.mensaje = '')
    .catch((err) => console.log('Error al enviar', err));
  }

}
