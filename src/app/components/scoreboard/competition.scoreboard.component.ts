import {Component, Input} from '@angular/core'
import {Competition} from "../../interfaces";

@Component({
  selector: 'scoreboard-competition-span',
  templateUrl: `../../../templates/scoreboard/competition_scoreboard_template.html`,
})

export class CompetitionScoreboardComponent  {
  @Input() competition: Competition;
}
