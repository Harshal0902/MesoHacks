export function myCollection_beforeInsert(item, context) {
    let hookContext = context;  // see below
  
    // some change to the received item
    item.title = toUpperFirst(item.title);
    item.first_name = toUpperFirst(item.first_name);
    item.last_name = toUpperFirst(item.last_name);
  
    return item;
  }
  
  function toUpperFirst(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  
  