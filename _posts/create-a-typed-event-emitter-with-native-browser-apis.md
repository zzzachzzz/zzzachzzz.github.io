---
title: Create a Typed Event Emitter with Native Browser APIs
date: '2021-02-24T19:56:02.926Z'
---

You can create an event emitter in the browser, much like the Node.js [EventEmitter](https://nodejs.dev/learn/the-nodejs-event-emitter) API. We'll be using the [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) and [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) browser APIs to achieve this. The browser support for these APIs is good, but if you need more browser coverage, there are also polyfills available, such as [custom-event-polyfill](https://www.npmjs.com/package/custom-event-polyfill). As a bonus, we can make the events and their details fully typed with TypeScript.

```ts
class EventEmitter extends EventTarget {
  constructor() {
    super();
  }

  on<T extends EventType>(
    type: T, listener: (e: CustomEvent<EventTypeToDetailMap[T]>) => void
  ) {
    return this.addEventListener(type, listener);
  }

  emit<T extends EventType>(
    type: T, detail: EventTypeToDetailMap[T]
  ) {
    const event = new CustomEvent(type, { detail })
    return this.dispatchEvent(event);
  }
}

type EventType = keyof EventTypeToDetailMap;

type EventTypeToDetailMap = {
  'customEvent1': number;
  'customEvent2': Array<string>;
};
```

As we write event listeners and emitters for certain events, we get type checking for those specific events:

![type checking for EventEmitter.on](/assets/typed-eventemitter-on.png)

![type checking for EventEmitter.emit](/assets/typed-eventemitter-emit.png)

