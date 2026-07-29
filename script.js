const poemLines = [
    "Not blood, but something chosen still,",
    "a bond that grew by simple will —",
    "through ordinary days made bright,",
    "you turned the dark to something light.",
    "No map was drawn, no promise made,",
    "yet still you stayed when others strayed.",
    "In quiet hours and loud, wild laughter,",
    "you're the kind of good that follows after.",
    "So here's to you, my steady friend,",
    "a story with no fitting end."
];

const button = document.querySelector("button");
const intro = document.querySelector(".intro");

button.addEventListener("click", beginExperience);

function beginExperience() {
    intro.innerHTML = `
        <div class="poem-box">
            <h1 class="poem-title">To Diana</h1>
            <p id="poem-line"></p>
        </div>
    `;

    showPoemLine(0);
}

function showPoemLine(index) {
    const lineElement = document.getElementById("poem-line");

    if (index < poemLines.length) {
        lineElement.classList.remove("show");

        setTimeout(() => {
            lineElement.textContent = poemLines[index];
            lineElement.classList.add("show");

            setTimeout(() => {
                showPoemLine(index + 1);
            }, 3500);
        }, 800);
    } else {
        lineElement.innerHTML = `
            <strong>Diana</strong><br><br>
            Some friendships are written beyond time.
        `;
        lineElement.classList.add("show");
    }
}