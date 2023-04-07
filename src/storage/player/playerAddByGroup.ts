import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppErros";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { playerGetByGroup } from "./playersGetByGroup";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    // pega os grupos armazenados e abre ele
    const storedPlayers = await playerGetByGroup(group);

    const playerAlreadyExists = storedPlayers.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError(
        "Essa pessoa já está adicionada em algum dos times aqui."
      );
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
