import {Component, Input} from '@angular/core'
import {TeamResult} from "../../interfaces";

@Component({
  selector: '.team-result',
  templateUrl: `../../../templates/scoreboard/team_scoreboard_template.html`,
})

export class TeamScoreboardComponent  {
  @Input() teamResult: TeamResult;
}
