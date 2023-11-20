const emojiList = [
    '💪', '🏀', '🌟', '👏', '🙌', '😎'
]

export const getRandomEmoji = () => {
    return emojiList[Math.floor(Math.random() * emojiList.length)]
}