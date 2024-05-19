import { Component, OnInit } from '@angular/core';
import { PgdaService } from '../../services/pgda.service';
import { PGDAScore } from '../../pgda-score.model';

@Component({
  selector: 'app-pgda',
  templateUrl: './pgda.component.html',
  styleUrls: ['./pgda.component.css']
})
export class PGDAComponent implements OnInit {
  scores: PGDAScore[] = [];
  newScore: PGDAScore = this.initializeScore();
  editScore: PGDAScore = this.initializeScore();
  showModal: boolean = false;

  constructor(private pgdaService: PgdaService) { }

  ngOnInit(): void {
    this.loadScores();
  }

  initializeScore(): PGDAScore {
    return {
      id: 0,
      score: 0,
      playerName: '',
      tournamentName: '',
      tournamentDate: new Date(),
      league: '',
      tournamentResult: 0,
      nationalRanking: 0
    };
  }

  loadScores(): void {
    this.pgdaService.getScores().subscribe(
      data => this.scores = data,
      error => console.error(error)
    );
  }

  addScore(): void {
    this.pgdaService.createScore(this.newScore).subscribe(
      data => {
        this.scores.push(data);
        this.newScore = this.initializeScore();
      },
      error => console.error(error)
    );
  }

  updateScore(): void {
    this.pgdaService.updateScore(this.editScore.id, this.editScore).subscribe(
      data => {
        const index = this.scores.findIndex(score => score.id === data.id);
        if (index !== -1) {
          this.scores[index] = data;
        }
        this.closeModal();
      },
      error => console.error(error)
    );
  }

  deleteScore(id: number): void {
    this.pgdaService.deleteScore(id).subscribe(
      () => this.scores = this.scores.filter(score => score.id !== id),
      error => console.error(error)
    );
  }

  edit(score: PGDAScore): void {
    this.editScore = { ...score };
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  findByPlayerName(name: string): void {
    this.pgdaService.findByPlayerName(name).subscribe(
      data => this.scores = data,
      error => console.error(error)
    );
  }

  findByLeague(league: string): void {
    this.pgdaService.findByLeague(league).subscribe(
      data => this.scores = data,
      error => console.error(error)
    );
  }
}
