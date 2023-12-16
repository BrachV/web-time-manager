/**
 * Affiche une popup indiquant que le temps limite est atteint.
 */
function showTimeLimitPopup() {
  const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.left = "50%";
  popup.style.top = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.backgroundColor = "white";
  popup.style.padding = "20px";
  popup.style.border = "1px solid black";
  popup.style.zIndex = "1000";
  popup.innerText = "Vous avez dépassé le quota de temps pour ce site.";

  // Ajouter un bouton pour fermer la popup
  const closeButton = document.createElement("button");
  closeButton.innerText = "Fermer";
  closeButton.onclick = function () {
    document.body.removeChild(popup);
  };
  popup.appendChild(closeButton);

  document.body.appendChild(popup);
}

/**
 * Démarre un compte à rebours basé sur le temps passé et le temps maximal autorisé.
 * @param {number} maxTime - Le temps maximal autorisé pour le site (en secondes).
 * @param {number} currentTime - Le temps actuellement passé sur le site (en secondes).
 */
function startTimer(maxTime, currentTime) {
  let timeSpent = currentTime;

  const timer = setInterval(() => {
    timeSpent++;
    chrome.storage.sync.set({
      [currentUrl]: { maxTime, currentTime: timeSpent },
    });

    if (timeSpent >= maxTime) {
      clearInterval(timer);
      showTimeLimitPopup();
    }
  }, 1000);
}

chrome.storage.sync.get([currentUrl], (result) => {
  const siteData = result[currentUrl];

  if (siteData) {
    if (siteData.currentTime >= siteData.maxTime) {
      showTimeLimitPopup(); // Afficher la popup directement si le temps est déjà dépassé
    } else {
      startTimer(siteData.maxTime, siteData.currentTime); // Démarrer le timer si le temps n'est pas encore dépassé
    }
  }
});
