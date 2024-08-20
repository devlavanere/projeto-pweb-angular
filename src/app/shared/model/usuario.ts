export class Usuario {
    constructor(
      public id: number,
      public nomeCompleto: string,
      public emailOuTelefone: string,
      public senha: string,
      public dataNascimento: Date,
      public genero: 'Masculino' | 'Feminino' | 'Outro',
      public perfil: 'Professor' | 'Aluno'
    ) {}
  }