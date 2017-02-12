import {Injectable} from '@angular/core';
import {Http, Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {TeamResult, Competition, Team, Player} from "../interfaces";

@Injectable()
export class RestApiService {
  options:RequestOptions;
  constructor(private http: Http) {
    let headers = new Headers({ 'X-Auth-Token': '6f405c0e172e4b40be3b5a608d8e1c82' });
    this.options = new RequestOptions({ headers: headers });
  }

  getCompetitions(year: number):Competition[] {
    let competitions: Competition[] = [];
    let url = 'http://api.football-data.org/v1/competitions/?season='+year;
    console.log('Called getCompetitions: '+url);
    this.http.get(url,this.options).map(res => <Competition[]>res.json())
      .subscribe(json => {
        for(let prop in json) {
          competitions[prop] = (<Competition>json[prop]);
        }
      });
    return competitions;
  }

  getLeagueResults(competitionID: number,matchDay:number):TeamResult[] {
    let leagues: TeamResult[] = [];
    let url = 'http://api.football-data.org/v1/competitions/' + competitionID + '/leagueTable?matchday='+matchDay;
    console.log('Called getLeagueResults: '+url);
    this.http.get(url,this.options).map(res => <TeamResult[]>res.json().standing)
      .subscribe(json => {
        for(let prop in json) {
          leagues[prop] = (<TeamResult>json[prop]);
        }
      });
    return leagues;
  }

  getTeams(teamUrl:string):Team[] {
    let teams:Team[] = [];
    console.log('Called getTeams: '+teamUrl);
    this.http.get(teamUrl, this.options).map(res => {
      return <Team[]>res.json().teams;
    })
      .subscribe(json => {
        for (let prop in json) {
          let instance:Team = <Team>json[prop];
          teams[prop]=(instance);
        }
      });
    return teams;
  }

  getPlayers(playersLink:string):Player[] {
    console.log('Called getPlayers');
    let players: Player[] = [];
    this.http.get(playersLink, this.options).map(res => <Player[]>res.json().players)
      .subscribe(json => {
        for (let prop in json) {
          players[prop] = (<Player>json[prop]);
        }
      });
    return players;
  }
}

