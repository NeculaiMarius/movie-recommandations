export function cleanMovieName(movieName:string) {
  return movieName.replace(/[\\/*?:"<>|]/g, "");
}