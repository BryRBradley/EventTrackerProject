import { Component, OnInit } from '@angular/core';
import { PgdaService } from '../../services/pgda.service';
import { PGDAScore} from '../../pgda-score.module';

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
  searchTerm: string = '';
  searchType: string = 'id';

  constructor(public pgdaService: PgdaService) { }

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
    if (window.confirm('Are you sure you want to delete?')) {
      this.pgdaService.deleteScore(id).subscribe(
        () => this.scores = this.scores.filter(score => score.id !== id),
        error => console.error(error)
      );
    }
  }

  edit(score: PGDAScore): void {
    this.editScore = { ...score };
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  performSearch(): void {
    switch (this.searchType) {
      case 'id':
        if (this.searchTerm) {
          const id = parseInt(this.searchTerm, 10);
          this.pgdaService.getScore(id).subscribe(
            data => this.scores = [data],
            error => console.error(error)
          );
        }
        break;
      case 'playerName':
        this.pgdaService.findByPlayerName(this.searchTerm).subscribe(
          data => this.scores = data,
          error => console.error(error)
        );
        break;
      case 'league':
        this.pgdaService.findByLeague(this.searchTerm).subscribe(
          data => this.scores = data,
          error => console.error(error)
        );
        break;
    }
  }

  resetSearch(): void {
    this.searchTerm = '';
    this.loadScores();
  }
}
