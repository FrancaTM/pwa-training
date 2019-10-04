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
