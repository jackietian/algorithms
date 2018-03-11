class EventEmitter {
  constructor() {
    this.events = {};
  }

  emit(eventName, data) {
    if(this.events[eventName]) {
      let funcs = this.events[eventName];
      funcs.forEach(func => {
        func.call(null, data);
      })
    }
  }

  subscribe(eventName, func) {
    if(!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(func);
    return () => {
      this.events[eventname] = this.event[eventname].filter( fn => fn !== func);
    }
  }
}

let emitter = new EventEmitter();
let unsubscribe = emitter.subscribe('event:name-changed', data => {
  console.log(`Your name is: ${data.name}`);
});

emitter.emit('event:name-changed', {name: 'some value'});// "Your name is: some value"

unsubscribe();

emitter.emit('event:name-changed', {name: 'some value2'}); // null
