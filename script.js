const elements = [
    "line1",
    "line2",
    "line3",
    "line4",
    "line5",
    "echo",
    "girls",
    "message",
    "message2",
    "final",
    "love"
];

elements.forEach((id, index) => {
    setTimeout(() => {
        document.getElementById(id).classList.add("show");
    }, 2500 * index);
});
