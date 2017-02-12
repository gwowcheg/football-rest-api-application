export enum MenuOption {
  COMPETITIONS = 0,
  SCOREBOARD = 1
}

export class Utils {
  public trim(line:string){
    let result = "";
    for(let i:number = 0; i < line.length; i++) {
      result += line[i].replace(" ", "_").replace(".", "_").replace(",", "_");
    }
    return result;
  }
}
