import { getBaseName } from "../helpers/BasePathHelpers";
import { isProductionOrAppMode } from "../helpers/Mode";
import { Workbox } from "workbox-window";

export async function initSW(): Promise<void> {
    if (!window.navigator.serviceWorker) return;

    // This does not work
    const serviceWorkerPath = isProductionOrAppMode ? `${getBaseName()}sw.js` : `${getBaseName()}dev-sw.js?dev-sw`;

    // This works
    // const serviceWorkerPath = isProductionOrAppMode ? `${getBaseName()}sw.js` : `${getBaseName()}my/app/dev-sw.js?dev-sw`;

    const wb = new Workbox(serviceWorkerPath, {
        type: isProductionOrAppMode ? "classic" : "module",
    });

    await wb.register().then((registration) => {
        console.log("service worker registered");
        const activeSW = registration?.active;

        activeSW?.addEventListener("statechange", () => {
            switch (activeSW.state) {
                case "installed": console.log("SW first installed"); break;
                case "activated": console.log("SW first activated"); break;
                case "activating": console.log("SW first activating"); break;
                case "redundant": console.log("SW first redundand"); break;
                case "installing": console.log("SW first installing"); break;
                case "parsed": console.log("SW first parsed"); break;
            }
        })
    })
}