import {Component, Input} from '@angular/core'
import {TeamResult} from "../../interfaces";

@Component({
  selector: 'team-result-span',
  templateUrl: `../../../templates/competitions/team_result_template.html`,
})

export class TeamResultComponent  {
  @Input() teamResult: TeamResult;
  constructor() {
  }
}
