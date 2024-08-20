import { Component, OnInit } from '@angular/core';
import { UsuarioRestService } from '../../shared/services/usuario-rest.service';

@Component({
  selector: 'app-dashboard-aluno',
  templateUrl: './dashboard-aluno.component.html',
  styleUrls: ['./dashboard-aluno.component.scss']
})
export class DashboardAlunoComponent implements OnInit {
  nomeAluno: string = 'Nome do Aluno';
  alunos: any[] = [];

  constructor(private usuarioRestService: UsuarioRestService) {}

  ngOnInit() {
    
  }

  mostrarAlunos() {
    this.usuarioRestService.getAlunosMatriculados(1) // ID da disciplina que o aluno está matriculado
      .subscribe(data => {
        this.alunos = data[0]?.alunos || [];
      });
  }
}
