import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRestService {
  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  // Para disciplinas
  getDisciplinas(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/disciplinas');
  }

  // Para alunos matriculados
  getAlunosMatriculados(disciplinaId: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/alunosMatriculados?disciplinaId=${disciplinaId}`);
  }

  addUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  
}