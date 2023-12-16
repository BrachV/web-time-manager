// let tabId = [];

// try {
//     chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//         if (changeInfo.status === 'complete' && !tab.url?.startsWith("chrome://")) {
//             chrome.scripting.executeScript({
//                 files: ['script.js'],
//                 target: { tabId: tab.id },
//             });
//         }
//     });

//     chrome.tabs.onActivated.addListener(activeInfo => {
//         // Ajouter des actions spécifiques lors de l'activation d'un onglet si nécessaire
//     });
// } catch (e) {
//     // Gestion améliorée des erreurs
//     console.error("Erreur dans le gestionnaire d'événements des onglets : ", e);
// }

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "closeTab") {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.remove(tabs[0].id);
    });
  }
});
