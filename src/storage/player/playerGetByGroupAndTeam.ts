import { playerGetByGroup } from "./playersGetByGroup";

export async function playerGetByGroupAndTeam(group: string, team: string) {
  try {
    const storage = await playerGetByGroup(group);

    const player = storage.filter((player) => player.team === team);

    return player;
  } catch (error) {
    throw error;
  }
}
