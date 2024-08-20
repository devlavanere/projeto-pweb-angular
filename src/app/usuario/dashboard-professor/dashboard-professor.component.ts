import { Component, OnInit } from '@angular/core';
import { UsuarioRestService } from '../../shared/services/usuario-rest.service';

@Component({
  selector: 'app-dashboard-professor',
  templateUrl: './dashboard-professor.component.html',
  styleUrls: ['./dashboard-professor.component.scss']
})
export class DashboardProfessorComponent implements OnInit {
  nomeDisciplina = 'PWEB';
  nomeProfessor: string = 'Nome do Professor';
  alunos: any[] = [];

  constructor(private usuarioRestService: UsuarioRestService) {}

  ngOnInit(): void {
    this.mostrarAlunos();
  }

  mostrarAlunos() {
    this.usuarioRestService.getAlunosMatriculados(2) // ID da disciplina que o professor está ensinando
      .subscribe(data => {
        this.alunos = data[0]?.alunos || [];
      });
  }
}
