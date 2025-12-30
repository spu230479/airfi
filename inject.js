function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

await sleep(5000);

for (let i = 1; i <= 5; i++) {

login = "demogods" + i + "@demo.com";
await replayEvents(
[
       {
      "event":"input",
      "value": login,
      "element":{
         "tag":"INPUT",
         "id":"username",
         "name":null,
         "type":"text",
         "class":"form-control"
      },
      "time":"2025-12-30T09:07:50.649Z",
      "url":"https://airfi.tech/finances-master/login.html"
   },
   {
      "event":"change",
      "value":login,
      "element":{
         "tag":"INPUT",
         "id":"username",
         "name":null,
         "type":"text",
         "class":"form-control"
      },
      "time":"2025-12-30T09:07:50.649Z",
      "url":"https://airfi.tech/finances-master/login.html"
   },
      {
      "event":"input",
      "value":"password",
      "element":{
         "tag":"INPUT",
         "id":"password",
         "name":null,
         "type":"text",
         "class":"form-control"
      },
      "time":"2025-12-30T09:07:58.189Z",
      "url":"https://airfi.tech/finances-master/login.html"
   },
   {
      "event":"change",
      "value":"password",
      "element":{
         "tag":"INPUT",
         "id":"password",
         "name":null,
         "type":"text",
         "class":"form-control"
      },
      "time":"2025-12-30T09:07:58.189Z",
      "url":"https://airfi.tech/finances-master/login.html"
   }
]);}