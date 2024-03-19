type ServiceWorkerMessageToServiceWorkerType = "INIT_PORT";

interface IServiceWorkerBaseMessageToServiceWorker<TYPE extends ServiceWorkerMessageToServiceWorkerType> { type: TYPE; }

export interface IServiceWorkerMessageToServiceWorkerInitPort extends IServiceWorkerBaseMessageToServiceWorker<"INIT_PORT"> { }

export type ServiceWorkerMessageToServiceWorker = IServiceWorkerMessageToServiceWorkerInitPort;

type ServiceWorkerMessageFromServiceWorkerType = "ACK_INIT_PORT";

interface IServiceWorkerBaseMessageFromServiceWorker<TYPE extends ServiceWorkerMessageFromServiceWorkerType> { type: TYPE; }

export interface IServiceWorkerMessageFromServiceWorkerAcknowledgeInitPort extends IServiceWorkerBaseMessageFromServiceWorker<"ACK_INIT_PORT"> { success: true; }