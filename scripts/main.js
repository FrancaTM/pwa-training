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
        console.log("registered", registration);
        console.log("sw registered! Scope is: ", registration.scope);
      })
      .catch(err => {
        console.log("registration failed: ", err);
      });
  });
} else {
  console.log("service worker not supported");
  // return;
}

// let url = "https://www.google.com/";
let url = "example.json";
let done = e => console.log(e.responseText);

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

// fetch(url)
//   .then(response => {
//     // if (!response.ok) throw `error: ${response.status}`;
//     if (!response.ok) throw response.statusText;
//     return response;
//   })
//   .then(result => result.text())
//   // .then(response => response.json())
//   .then(t => console.log(t))
//   .catch(error => console.log(`fetch failed error: ${error}`));

async function fetchResponse() {
  try {
    let response = await fetch("example.json", { method: "HEAD" });
    let length = response.headers.get("content-length");
    console.log(`Content length is: ${length}`);

    let result = await fetch("example.json");
    if (!result.ok) throw result.statusText;
    var json = await result.json();
    console.log(json);
  } catch (error) {
    json = { error: error };
    console.log(`fetch failed error: ${error}`);
  }
}
fetchResponse();

// async function readTextFile(url) {
//   let response = await fetch(url);
//   return await response.text();
// }
// async function showFile(url) {
//   let text = await readTextFile(url);
//   console.log(text);
// }
// showFile(url);
