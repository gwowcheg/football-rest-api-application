import { Component,Input } from '@angular/core'
import {Player} from "../../interfaces";
import {Utils} from "../../utils";

@Component({
  selector: 'player-span',
  templateUrl: `../../../templates/competitions/player_template.html`,
})
export class PlayerComponent {
  @Input() player: Player;
  utils:Utils = new Utils();
  constructor() {
  }
}
