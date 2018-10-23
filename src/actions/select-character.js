export const selectCharacter = (selectedCharacterDetails) => {
    console.log("You selected :", selectedCharacterDetails.character)
    return {
        type: "CHARACTER_SELECTED",
        payload: selectedCharacterDetails
    }
};