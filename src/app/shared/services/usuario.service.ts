import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioRestService } from './usuario-rest.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private usuarioRestService: UsuarioRestService) {}

  cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.usuarioRestService.addUsuario(usuario);
  }

  logarUsuario(emailOuTelefone: string, senha: string): Observable<Usuario[]> {
    return this.usuarioRestService.getUsuarios();
  }

}