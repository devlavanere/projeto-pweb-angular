import { Component } from '@angular/core';
import { Usuario } from '../../shared/model/usuario';
import { UsuarioService } from '../../shared/services/usuario.service';
import { MensagemSweetService } from '../../shared/services/mensagem-sweet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  nomeCompleto: string = '';
  emailOuTelefone: string = '';
  senha: string = '';
  repitaSenha: string = '';
  dataNascimento: Date | null = null;
  genero: 'Masculino' | 'Feminino' | 'Outro' = 'Masculino';
  perfil: 'Professor' | 'Aluno' = 'Aluno';
  aceitaTermos: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private mensagemService: MensagemSweetService,
    private router: Router
  ) {}

  cadastrar() {
    if (this.senha !== this.repitaSenha) {
      this.mensagemService.erro('As senhas não coincidem!');
      return;
    }
  
    if (!this.aceitaTermos) {
      this.mensagemService.erro('Você deve aceitar os termos de serviço!');
      return;
    }
  
    const novoUsuario = new Usuario(
      Math.floor(Math.random() * 1000),
      this.nomeCompleto,
      this.emailOuTelefone,
      this.senha,
      this.dataNascimento!,
      this.genero,
      this.perfil
    );
  
    this.usuarioService.cadastrarUsuario(novoUsuario).subscribe(() => {
      this.mensagemService.sucesso('Cadastro realizado com sucesso!');
      this.router.navigate(['/login']);  // Redireciona para a página de login
    });
  }
  
}