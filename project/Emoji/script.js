const emojis = [
    "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇",
    "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚",
    "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔",
    "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄", "😬", "🤥",
    "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮",
    "🤡", "👹", "👺", "💩", "👻", "💀", "👽", "👾", "🤖", "🎃",
    "👑", "👒", "🎩", "🎓", "🧢", "⛑", "💄", "💍", "💼", "🌂",
    "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯",
    "🦁", "🐮", "🐷", "🐽", "🐸", "🐙", "🐵", "🙈", "🙉", "🙊",
    "🐒", "🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🦆", "🦅", "🦉",
    "🦇", "🐺", "🐗", "🐴", "🦄", "🐝", "🐛", "🦋", "🐌", "🐞","💝"
    // Add more emojis 
  ];
const generateBtn = document.getElementById("emojiGenerateBtn");
const emoji = document.querySelector(".emoji");

// generate random number array is length
generateRandomNumber = () => {
    return Math.floor(Math.random()*emojis.length);
}
// generate random color 
generateBtn.addEventListener("click" , () => {
    emoji.textContent = emojis[generateRandomNumber()];
})