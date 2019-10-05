// if (!("serviceWorker" in navigator)) {
//   console.log("service worker not supported");
//   return;
// }

let url = "https://www.google.com/";
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

// fetch(url, {
//   mode: "no-cors"
// })
//   .then(response => {
//     if (!response.ok) throw `error: ${response.status}`;

//     return response;
//   })
//   .then(result => result.text())
//   .then(t => console.log(t))
//   .catch(err => console.log(err));

async function readTextFile(url) {
  let response = await fetch(url);
  return await response.text();
}

async function showFile(url) {
  let text = await readTextFile(url);
  console.log(text);
}

// showFile(url);

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
