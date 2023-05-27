class Secret<Key, Value>{
    key: Key;
    value: Value;
    constructor(key:Key,
   value: Value){
    this.key = key;
    this.value = value;
    }
    getValue(key:Key):
    Value|undefined{
     return this.key ===
    key?this.value:undefined;
     }
    }
    const storage = new
    Secret(12345, "lugaee");
    storage.getValue(1997);
    console.log(storage);
       