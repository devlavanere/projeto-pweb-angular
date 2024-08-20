import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './usuario/login/login.component';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';
import { DashboardAlunoComponent } from './usuario/dashboard-aluno/dashboard-aluno.component';
import { DashboardProfessorComponent } from './usuario/dashboard-professor/dashboard-professor.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Tela principal é o login
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'dashboard-aluno', component: DashboardAlunoComponent },
  { path: 'dashboard-professor', component: DashboardProfessorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
