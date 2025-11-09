import { createApp } from '@canva/app-ui-kit';

createApp({
  render: ({ dom }) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h2>Canva Poster Automation</h2>
      <button id="generateBtn">Generate Posters</button>
    `;
    dom.appendChild(div);

    const generateBtn = document.getElementById("generateBtn");
    generateBtn.addEventListener("click", () => {
      alert("Poster generation workflow started!");
    });
  },
});
