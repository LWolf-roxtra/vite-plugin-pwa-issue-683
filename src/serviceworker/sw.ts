/// <reference lib="webworker" />
import { IServiceWorkerMessageFromServiceWorkerAcknowledgeInitPort, ServiceWorkerMessageToServiceWorker } from "./ServiceWorkerMessage";
import { precacheAndRoute } from "workbox-precaching";

declare const self: ServiceWorkerGlobalScope;

precacheAndRoute(
    self.__WB_MANIFEST,
);

self.addEventListener("message", (event) => {
    const typedEvent = event.data as ServiceWorkerMessageToServiceWorker;

    switch (typedEvent.type) {
        case "INIT_PORT": {
            const responseMsg: IServiceWorkerMessageFromServiceWorkerAcknowledgeInitPort = {
                type: "ACK_INIT_PORT",
                success: true,
            };
            event.ports[0].postMessage(responseMsg);
            break;
        }
    }
})