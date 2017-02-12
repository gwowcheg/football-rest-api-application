import { Component } from '@angular/core'
import { RestApiService } from "../../services/rest-api.service";
import { MenuOption } from "../../utils";
import { Competition, TeamResult } from "../../interfaces";

@Component({
  selector: 'my-app',
  templateUrl: `../../../templates/competitions/app_template.html`,
  providers: [RestApiService],
})

export class AppComponent  {
  year:number = 2016;
  menuSelected:MenuOption;
  competitions:Competition[] = [];
  constructor(private restApiService: RestApiService){
    this.selectMenu(0);
    this.loadCompetitions();
  }
  loadCompetitions(){
    this.competitions = this.restApiService.getCompetitions(this.year);
  }
  setYear(year:number){
    this.year = year;
    this.loadCompetitions();
  }
  selectMenu(menu:MenuOption){
    this.menuSelected = menu;
    console.log(this.menuSelected);
  }
}
