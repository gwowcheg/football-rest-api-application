export interface Team {
  _links:{
    players:{href:string}
    fixtures:{href:string}
    self:{href:string}
  };
  code: number;
  name: string;
  shortName: string;
  squadMarketValue: string;
  crestUrl: string;
}

export interface Player {
  name: string;
  position: string;
  jerseyNumber: number;
  dateOfBirth: string;
  nationality: string;
  contractUntil: string;
  marketValue: string;
}

export interface Competition {
  _links:{
    self:{href:string}
    teams:{href:string}
    fixtures:{href:string}
    leagueTable:{href:string}
  };
  id:number;
  caption:string;
  league:string;
  year:number;
  currentMatchday:number;
  numberOfMatchdays:number;
  numberOfTeams:number;
  numberOfGames:number;
  lastUpdated:string;
}

export interface TeamResult {
  _links:{
    team:{
      href:number;
    }
  }
  position:number;
  teamName:string;
  crestURI:string;
  playedGames:number;
  points:number;
  goals:number;
  goalsAgainst:number;
  goalDifference:number;
  wins:number;
  draws:number;
  losses:number;
  home:{
    goals:number;
    goalsAgainst:number;
    wins:number;
    draws:number;
    losses:number;
  },
  away:{
    goals:number;
    goalsAgainst:number;
    wins:number;
    draws:number;
    losses:number;
  }
}
