import {Component, Input} from '@angular/core'
import {RestApiService} from "../../services/rest-api.service";
import {Team, Competition, Player} from "../../interfaces";
import {Utils} from "../../utils";

@Component({
  selector: 'team-span',
  templateUrl: `../../../templates/competitions/team_template.html`,
})

export class TeamComponent {
  @Input() team: Team;
  @Input() competition: Competition;
  utils:Utils = new Utils();
  players:Player[] = [];
  constructor(private restApiService: RestApiService) {
  }
  loadPlayers() {
    this.players = this.restApiService.getPlayers(this.team._links.players.href);
  }
}
