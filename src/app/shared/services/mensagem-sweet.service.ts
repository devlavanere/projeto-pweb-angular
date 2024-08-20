import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensagemSweetService {
  sucesso(mensagem: string) {
    Swal.fire('Sucesso!', mensagem, 'success');
  }

  erro(mensagem: string) {
    Swal.fire('Erro!', mensagem, 'error');
  }
}