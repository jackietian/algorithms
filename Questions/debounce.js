// trigger the ajax call after 400ms
let timer = null;
let keyupHandler = (e) => {
  let value = e.target.value;
  if(timer) clearTimeout(timer);
  timer = setTimeout(function() {
    //do the ajax calls after 400ms
    console.log(value);
  }, 400);
}
