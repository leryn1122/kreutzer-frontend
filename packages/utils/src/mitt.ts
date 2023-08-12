export type EventType = string | Symbol;
export type EventHandler<T = any> = (event?: T) => void;
export type EventHandlerList = Array<EventHandler>;
export type EventHandlerMap = Map<EventType, EventHandlerList>;

export interface Emitter {
  map: EventHandlerMap;

  on<T = any>(type: EventType, handler: EventHandler<T>): void;

  off<T = any>(type: EventType, handler: EventHandler<T>): void;

  emit<T = any>(type: EventType, event?: T): void;

  clear(): void;
}

export function mitt(map?: EventHandlerMap): Emitter {
  map = map || new Map();
  return {
    map: map,
    on<T = any>(_type: EventType, _handler: EventHandler<T>) {},
    off<T = any>(_type: EventType, _handler: EventHandler<T>) {},
    emit<T = any>(_type: EventType, _event?: T) {},
    clear() {},
  };
}
