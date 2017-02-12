import {Component, Input} from '@angular/core'
import {RestApiService} from "../../services/rest-api.service";
import {Competition, Team, TeamResult} from "../../interfaces";

@Component({
  selector: 'competition-span',
  templateUrl: `../../../templates/competitions/competition_template.html`,
})

export class CompetitionComponent  {
  @Input() competition: Competition;
  teams:Team[] = [];
  teamResults:TeamResult[] = [];
  matchDay:number = 1;
  constructor(private restApiService: RestApiService) {
  }
  loadTeam(){
    this.teams = this.restApiService.getTeams(this.competition._links.teams.href);
  }
  loadLeagueResult() {
    this.teamResults = this.restApiService.getLeagueResults(this.competition.id,this.matchDay);
    console.log(this.teamResults);
  }
  setMatchDay(day:any) {
    this.matchDay = day.target.value;
    this.loadLeagueResult();
  }
}
