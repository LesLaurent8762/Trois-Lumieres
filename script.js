const sequence = [
    { id: "line1", delay: 1000 },
    { id: "line2", delay: 4500 },
    { id: "line3", delay: 8000 },
    { id: "line4", delay: 12000 },
    { id: "line5", delay: 16500 },
    { id: "echo", delay: 22000 },
    { id: "girls", delay: 28000 },
    { id: "message", delay: 32000 },
    { id: "message2", delay: 38000 },
    { id: "final", delay: 43000 },
    { id: "love", delay: 50000 },
    { id: "signature", delay: 56000 }
    ];

sequence.forEach(item => {
    setTimeout(() => {
        document.getElementById(item.id).classList.add("show");
    }, item.delay);
});
