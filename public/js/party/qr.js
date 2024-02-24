import QrScanner from "../qr-scanner.min.js";

const video = document.getElementById("qr-video");
const videoContainer = document.getElementById("video-container");

function setResult(result) {
  console.log(result.data);
  if (!result.data.includes("?partyID=")) {
    return;
  }
  var partyCode = result.data.split("?partyID=")[1];
  joinParty(partyCode);
}

// ####### Web Cam Scanning #######

const scanner = new QrScanner(video, (result) => setResult(result), {
  highlightScanRegion: true,
  highlightCodeOutline: true,
});

window.scanner = scanner;

$("#joinCode").on("shown.bs.modal", function (e) {
  scanner.start();
});

document.getElementById("paste").addEventListener("click", () => {
  console.log("hio");
  navigator.clipboard.readText().then(
    (cliptext) => $("#code").val(cliptext),
    (err) => console.log(err)
  );
});

$("#joinParty").click(() => {
  var partyCode = $("#code").val();
  if (partyCode.includes("?partyID=")) {
    partyCode = partyCode.split("?partyID=")[1];
  }
  joinParty(partyCode);
});

function joinParty(partyCode) {
  window.location.href = `${
    window.location.href.split("?")[0] + "?partyID=" + partyCode
  }`;
}
