import {Component, Input, SimpleChanges} from '@angular/core'
import {RestApiService} from "../../services/rest-api.service";
import {TeamResult, Competition} from "../../interfaces";

@Component({
  selector: 'scoreboard-span',
  templateUrl: `../../../templates/scoreboard/scoreboard_template.html`,
})

export class ScoreboardComponent  {
  teamResults: TeamResult[] = [];
  @Input() year:number;
  day:number = 1;
  competitionID:number;
  competitions:Competition[] = [];
  ngOnChanges(changes: SimpleChanges) {
    this.loadCompetitions();
  }
  loadCompetitions(){
    this.competitions = this.restApiService.getCompetitions(this.year);
  }
  constructor(private restApiService: RestApiService) {
  }
  selectCompetition(competitionID: number) {
    this.competitionID = competitionID;
    this.loadResults();
  }
  setDay(day:any){
    this.day = day.target.value;
    this.loadResults();
  }
  loadResults(){
    this.teamResults = this.restApiService.getLeagueResults(this.competitionID,this.day);
  }
}
