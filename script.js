let redSrc =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADG0lEQVR4nO2Zz0tVQRTHP2WLfqityk2iopmbtG2bzDDoB9HalKCVkesWlv9ByzYiIZYRGEGQtmwTlhlmBCWVLVqH2g8KMqoTgyNcTvPuuzN3fPbjHRh47953vud8Z75z7pn7oGz/iAmIz+BPMykTWGf761egbOttAk0CfQI3BGYFFgW+CXwReCswLTAicFqgtghWl0BzKZLeJNAjMOW7BwTuCZwQ2KgwOy1xMwGH1jL5YwLzAYnr8Vxgv8XcI7CUuGeInImd+FaB4QiJJ8cPgcsCrx3XT8ZMvsbqu1ASRkr9AgeMhgW22WFmtt3ee2R/m4XY+djJvyqQuNmcdR5Y9QJXixAZji2b2QL63ZsDt1XghQP3s0BVTAIuzY/HCCJQLTDhwL8UK/mjDvA7uvw5/DK3DgIVdkK0NDti1Pl5h2yKzrxv7yMrK6Hl9ExgQx4CPQrwe1bNhzRvAm2OjX08DwH9hB3x8A3qPgWuKd/7eXobrcm6EhBoEPiZ8DWfa0II9KkkHnr6BxEwZhu/pH83vma7yiRIv4dvo6NyNXr4XwyVbhLkqQJp95BesiFbHUtZSQgcVL4PQggsKJDdGf1upbQHNzNiNCu/NyEElhVIZUa/9ykEFjNiVOrWopQEPqUQ+JARo0r5fS2lhG6nEBgLlNC7EAKzgZtYn6pWh5mQXRkxOpTvTIwyesHDt9ZsWIGPdoxlTd6YwICKPYqvCZxTIFOUyAQeq9i9ISBN6pFuWon6Ncm4eCsRFte0D7mfiP4xR1XMyTxg3Y6GrjVqxgkT2Odop7vIeaDRB3lz6KgOBi0ca7vAnIplvlfkBT7iKInjuYF/P1LedcTpjBXgigN8IsZKyMrMu5IfjJJ84rXKjCOIkVNbTs3POXBNGd0cjYANtjPlxZY5BjZ4lkpTbVwvtl4K7IiavCLhWonVej1tDyOmn29JvFpssdcG7Owm67yomV+b5BMktggMpTRsoWMwumyKEDlslztv4nPRqk1g+Ttljnwpsigkt0n7T0y0cpzL7MY8K3Bd4Iltn5ftWLB7x9zrLUVPVbay/S/2C5bGuurt8QTIAAAAAElFTkSuQmCC";
let blackSrc =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC9ElEQVR4nO2Yu2tVQRDGfz4KH3lUamOIF2NM46O1USMKPhDrmCBYKaa2UPMfWNqEIKJJCEQEwcTSRjQaiVcE70WNhbXE+EDBiElkYa4cxj0ne/bsOfFxP9jm3DvfzuzOzn6zUMe/g8WU449DPYDlxl+/A3UsN9qAXmAEKAPvge/AV+AtMAlcB04BLUtwdQHtRTi9GugBHnmcgXvAcWCl4jwogZsFOJCn80eBaQ/H9XgB7BHO7cBs5DcTyOnQjq8DrgVwPDrmgSvAa8v3EyGd3yT5HeeESaULwF7J4fUyzMruk98ey39dAjsf2vlXMY6bw9magmsLcGOJQMwuB02bckz+7sjAuxOoWHi/AI0B/bfm/FigSZqAcQv/ZQLhiIX8jqX8aaSRDqtkQXRqdoao89OWtHFZ+bTap8mSTs+BFVkC6FGEP1LkvI9422U52Mcy+P/bDWuqDTkGYDCo7O6TQdvonGwtIIASsBCxW5ASnhq9yoGJlPa+ASDCL2rbjQdGFIm5RV2x1RKA+eaKSxlS9xeeKRIjBVxTLyrIamM2RRD7le1DnwBmFMk2R7tbCfLgpiNHu7J74xPAnCJpcLT7kBCA0fguaLBIi8IC+JwQwEdHjkZl963IFLqdEMCoZwq98wmg7HmIdVdVG2ZBNjtydCrbqRBl9GIK2xY5sJ9kjKZw3qBPzT2EB84pEiMrisITNfcZH5I2daXPSyeVN0oWKeE970SIGzElhtScD7KQdVsEnWkD88Jui5w2j1yZGhrdyFek+QiNZqCq5qpKt5YJhy0lcSwEcQSG665lHvNKFwRXLeTjgXaiOcb5fgI/q0xZJqlIG5gl56sWXlNG1xAYGxMetgal/LmiJNVm3sL3EtgQ2vloELadqNXrSWlGjJ7viDwtdsi3PlndaJ1fVCufm/M1rAUGEgSb7+jPI22ScEi2O6vj1ZDVxqf8nZSWLy4t4tLN3LBdgctxJpiDeRYYBp6KfJ6TMSNnZ1iEWRGaqo46/gv8BKeDHG1q4M7+AAAAAElFTkSuQmCC";
let active = true;

if (typeof init === "undefined") {
  const init = () => {
    const hostEle = document.createElement("div");
    hostEle.className = "foocus-shadow-host";
    document.body.appendChild(hostEle);

    let root = hostEle.attachShadow({ mode: "open" });
    let style = document.createElement("style");
    style.textContent = `
			.flex {
				display: flex;
				justify-content: center;
				align-items: center;
				border: 3px solid #fff;
				background: #fff;
				border-radius: 10px;
				position: fixed;
				z-index: 16777271;
				top: 0;
				right: 0;
				width: 150px;
				height: 50px;
				margin: 60px 100px;
				box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
			}

			.minuteur {
				color: #000;
				font-size: 24px;
				font-weight: 600;
				margin: 5px;
			}
			img {
				width: 30px;
				height: auto;
				object-fit: contain;
				user-select: none;
			}
			.flex {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		`;

    let div = document.createElement("div");
    div.className = "flex";

    let svg = document.createElement("img");
    svg.src = blackSrc;
    svg.className = "div img";
    div.appendChild(svg);

    let minuteur = document.createElement("p");
    minuteur.className = "div minuteur";
    minuteur.textContent = "Bonjour !";
    div.appendChild(minuteur);

    root.appendChild(style);
    root.appendChild(div);

    start(minuteur, svg);
  };
  init();
}

function start(element, img) {
  let abusTemps = false; // Variable pour suivre si l'abus de temps est détecté
  let critique = false; // Variable pour suivre si le seuil critique est atteint
  let nbSecondesTotal = 0;
  let s = 0; // Variable pour les secondes
  let m = 0; // Variable pour les minutes
  let h = 0; // Variable pour les heures

  // Fonction pour formater le temps avec un zéro devant si nécessaire
  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  // Fonction pour mettre à jour l'horloge
  function updateClock() {
    if (active === false) return;

    let minute = formatTime(m); // Formater les minutes
    let seconde = formatTime(s); // Formater les secondes
    const cFormat = (h >= 1 ? `${h}:` : "") + minute + ":" + seconde; // Format du temps actuel

    element.textContent = cFormat; // Mettre à jour le texte de l'élément

    if (nbSecondesTotal >= 10 && !abusTemps) {
      element.style.color = "red"; // Changer la couleur du texte en rouge
      img.src = redSrc; // Changer la source de l'image en rouge
      abusTemps = true; // Marquer l'abus de temps détecté
    }

    if (nbSecondesTotal >= 15 && !critique) {
      critique = true; // Marquer le seuil critique atteint
      setTimeout(
        () => chrome.runtime.sendMessage({ message: "closeTab" }),
        30000
      );
    }

    if (s % 2 === 1 && critique) {
      element.style.color = "red"; // Changer la couleur du texte en rouge
      img.src = redSrc; // Changer la source de l'image en rouge
    } else if (s % 2 === 0 && critique) {
      element.style.color = "#000"; // Changer la couleur du texte en noir
      img.src = blackSrc; // Changer la source de l'image en noir
    }

    s++; // Incrémenter les secondes
  }

  // Fonction récursive pour obtenir le temps
  function getTime() {
    if (s === 60) {
      m++; // Incrémenter les minutes
      s = 0; // Réinitialiser les secondes
    }

    if (m === 60) {
      h++; // Incrémenter les heures
      m = 0; // Réinitialiser les minutes
    }

    updateClock(); // Mettre à jour l'horloge
    nbSecondesTotal++;

    setTimeout(getTime, 1000); // Appeler getTime() après une seconde
  }

  getTime(); // Démarrer l'horloge
}

chrome.runtime.onMessage.addListener((message) => {
  // Vérification du statut de l'onglet actif au moment de l'ajout de l'événement
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {});
  if (message === `pause-${tabId}`) {
  }
});
