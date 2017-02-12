import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './components/competitions/app.component';
import { HttpModule } from '@angular/http';
import { CompetitionComponent } from "./components/competitions/competition.component";
import { TeamComponent } from "./components/competitions/team.component";
import { PlayerComponent } from "./components/competitions/player.component";
import { TeamResultComponent } from "./components/competitions/team.results.component";
import { CompetitionScoreboardComponent } from "./components/scoreboard/competition.scoreboard.component";
import { TeamScoreboardComponent } from "./components/scoreboard/team.scoreboard.component";
import { ScoreboardComponent } from "./components/scoreboard/scoreboard.component";

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    CompetitionComponent,
    TeamComponent,
    PlayerComponent,
    TeamResultComponent,
    CompetitionScoreboardComponent,
    TeamScoreboardComponent,
    ScoreboardComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
