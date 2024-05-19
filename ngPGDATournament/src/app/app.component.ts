import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PgdaScoreModule } from "./pgda-score.model";





@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PgdaScoreModule]
})
export class AppComponent {
  title = 'ngPGDATournament';
}
