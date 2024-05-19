import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PGDAComponent } from './components/PGDA/pgda.component';


@NgModule({
  declarations: [PGDAComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [PGDAComponent]
})
export class PgdaScoreModule { }

export interface PGDAScore {
    id: number;
    score: number;
    playerName: string;
    tournamentName: string;
    tournamentDate: Date;
    league: string;
    tournamentResult: number;
    nationalRanking: number;
  }
  