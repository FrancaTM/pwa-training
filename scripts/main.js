let debugMode = false;
debugMode
  ? console.log("debugMode ON - main.js")
  : console.log("debugMode OFF - main.js");

// SERVICE WORKER

// if (!("serviceWorker" in navigator)) {
//   console.log("service worker not supported");
//   return;
// }

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../sw.js")
      .then(registration => {
        // Registration was successful
        debugMode ? console.log("registered", registration) : null;
        debugMode
          ? console.log("sw registered! Scope is: ", registration.scope)
          : null;
      })
      .catch(err => {
        debugMode ? console.log("registration failed: ", err) : null;
      });
  });
} else {
  debugMode ? console.log("service worker not supported") : null;
  // return;
}

// ======================================================================

// JUST TESTING

// promise template
// let promise = new Promise((resolve, reject) => {
//   let condition = true;
//   // do a thing, possibly assync, then ...

//   if (condition /* everything turned out fine */) {
//     resolve("stuff worked");
//   } else {
//     reject(Error("it broke"));
//   }
// });

// let url = "https://www.google.com/";
let url = "example.json";
let url_error = "xample.json";
let url_txtFile = "example.txt";
// let done = e => console.log(e.responseText);

function xhr(url) {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.onload = () => resolve(req.response);
    req.onerror = e => reject(e.error);
    req.open("GET", url);
    req.send();
  });
}

// // option #1
// xhr(url).then(result => {
//   console.log("option #1");
//   console.log(result);
// });

// // option #2
// async function show(url) {
//   console.log("async function show(url)");
//   let result = await xhr(url);
//   console.log("option #2");
//   console.log(result);
// }
// show(url);

// comparison
// fetch(url).then(response => {
//   console.log(response.type);
//   JSON.parse(response);
// });
// .then(response => console.log(response.text));
// .then(text => console.log("yey json", text));

// if (XMLHttpRequest) {
//   let req = new XMLHttpRequest();
//   if (req.addEventListener.withCredentials !== undefined) {
//     req.onload = done;
//     req.open("GET", "https://www.google.com/");
//     req.onreadystatechange = function() {
//       if (req.readyState === 4) {
//         console.log(req.response);
//       }
//     };
//     req.send("");
//   }
// }

// fetch(url_txtFile)
//   .then(response => {
//     // if (!response.ok) throw `error: ${response.status}`;
//     if (!response.ok) {
//       console.log("THROW");
//       throw response.statusText;
//     }
//     console.log("RESPONSE OK");
//     return response;
//   })
//   .then(response => response.text())
//   .then(response => JSON.parse(response))
//   // .then(response => response.json())
//   .then(text => {
//     console.log("SUCCESS", typeof text, text);
//   })
//   .catch(error => {
//     console.log("FAILED", error);
//     // console.log(`fetch FAILED error: ${error}`);
//   });

// fetch(url_txtFile).then(
//   response => {
//     // if (!response.ok) throw response.statusText;
//     console.log("SUCCESS", response);
//   },
//   error => console.log("FAILED", error)
// );
// // .catch(error => console.log(error));

const promise1 = xhr(url);
const promise2 = xhr(url_error);
const promise3 = xhr(url);
// PROMISSE ALL
Promise.all([promise1, promise2])
  .then(results => {
    if (!results.ok) throw results.statusText;
    console.log("all data has loaded");
  })
  .catch(error => {
    console.log("one or more requests have failed: " + error);
  });
// PROMISSE RACE
Promise.race([promise1, promise2, promise3])
  .then(value => {
    if (!value.ok) throw value.statusText;
    console.log("first resolved value: ", value);
  })
  .catch(reason => {
    console.log("first rejected reason: ", reason);
  });

// async function fetchResponse() {
//   try {
//     let response = await fetch("example.json", { method: "HEAD" });
//     let length = response.headers.get("content-length");
//     console.log(`Content length is: ${length}`);

//     let result = await fetch("example.json");
//     if (!result.ok) throw result.statusText;
//     var json = await result.json();
//     console.log(typeof json);
//     console.log(json);
//   } catch (error) {
//     json = { error: error };
//     console.log(`fetch failed error: ${error}`);
//   }
// }
// fetchResponse();

// async function readTextFile(url) {
//   let response = await fetch(url);
//   return await response.text();
// }
// async function showFile(url) {
//   let text = await readTextFile(url);
//   console.log(text);
// }
// showFile(url);
