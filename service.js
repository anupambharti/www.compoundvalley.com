// Service switch: true = existing website; false = Service Suspended page.
// Change only this Boolean, then commit and push to GitHub Pages.
const SERVICE_ACTIVE = false;

if (!SERVICE_ACTIVE) {
    // This script runs in the head before any original content can appear.
    document.documentElement.hidden = true;

    document.addEventListener('DOMContentLoaded', () => {
        // Replace the original content and styles before revealing the page.
        document.head.innerHTML = `
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Service Suspended</title>
            <style>
                html { background: #fafafa; }
                body {
                    box-sizing: border-box;
                    margin: 0;
                    min-height: 100vh;
                    min-height: 100dvh;
                    padding: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #262626;
                    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
                    text-align: center;
                }
                main {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;
                }
                svg { width: 72px; height: 72px; color: #9ca3af; }
                h1 {
                    margin: 0;
                    font-size: clamp(1.5rem, 5vw, 2rem);
                    font-weight: 500;
                    line-height: 1.25;
                }
            </style>`;
        document.body.innerHTML = `
            <main>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" aria-hidden="true" focusable="false">
                    <path d="M3 3l18 18M7.5 7.5A5.5 5.5 0 0 0 8 18h10M10 4.4A5.5 5.5 0 0 1 17.5 9h.5a4.5 4.5 0 0 1 3.2 7.7" />
                </svg>
                <h1>Service Suspended</h1>
            </main>`;
        document.documentElement.hidden = false;
    }, { once: true });
}
