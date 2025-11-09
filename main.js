import { createApp } from '@canva/app-ui-kit';

const app = createApp({
  title: "N8N Poster Automation",
  description: "Automatically generate and publish Canva poster designs through N8N workflows.",
  icon: "🖼️",
  screens: [
    {
      id: "main",
      title: "Poster Automation",
      content: () => {
        const container = document.createElement("div");
        container.innerHTML = `
          <h2>Welcome to N8N Poster Automation</h2>
          <p>Click below to start your automated poster workflow.</p>
          <button id="generateBtn">Generate Poster</button>
        `;
        
        container.querySelector("#generateBtn").addEventListener("click", async () => {
          alert("Triggering N8N Workflow...");
          // Example: call your N8N webhook
          await fetch("https://n8n.srv1028693.hstgr.cloud/webhook/canva-trigger", { method: "POST" });
        });

        return container;
      },
    },
  ],
});

export default app;
