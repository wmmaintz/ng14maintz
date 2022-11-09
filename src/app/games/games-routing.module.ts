import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [
  // http://localhost:4200/games/tictactoe
  { path: 'tic-tac-toe',  component: TicTacToeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
