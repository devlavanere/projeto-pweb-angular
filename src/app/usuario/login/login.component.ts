import { Component } from '@angular/core';
import { UsuarioService } from '../../shared/services/usuario.service';
import { MensagemSweetService } from '../../shared/services/mensagem-sweet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailOuTelefone: string = '';
  senha: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private mensagemService: MensagemSweetService,
    private router: Router // Injeção do serviço Router
  ) {}

  entrar() {
    this.usuarioService.logarUsuario(this.emailOuTelefone, this.senha)
      .subscribe((usuarios) => {
        const usuario = usuarios.find(
          user => user.emailOuTelefone === this.emailOuTelefone && user.senha === this.senha
        );

        if (usuario) {
          this.mensagemService.sucesso('Login realizado com sucesso!');
          if(usuario.perfil === 'Aluno') {
            this.router.navigate(['/dashboard-aluno']);
          } else if (usuario.perfil === 'Professor') {
            this.router.navigate(['/dashboard-professor'])
          }
          // Redirecionar para o dashboard correspondente
        } else {
          this.mensagemService.erro('Usuário ou senha inválidos!');
        }
      });
  }
}