const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function generateString(length) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function confirmLeave() {
  var confirmMsg = confirm(`Are you sure?`);
  if (confirmMsg) {
    window.location.href = "./party.html";
  }
}

$("#startParty").click(() => {
  let currentURL = window.location;
  var partyCode = generateString(5);
  if (currentURL.search != "") {
    var queryString = currentURL.search;
    var urlParams = new URLSearchParams(queryString);
    if (
      urlParams.get("partyID") != null &&
      urlParams.get("partyID") != undefined
    ) {
      var partyCode = urlParams.get("partyID");
    }
  }
  window.location.href = `${
    window.location.href.split("?")[0] + "?partyID=" + partyCode
  }&leader=true`;
});

$("#copyToClip").click(() => {
  const partyCode = $("#partyCode span").html();
  copyTextToClipboard(
    `${window.location.href.split("?")[0] + "?partyID=" + partyCode}`
  );
});

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    console.log("Fallback: Copying text command was " + msg);
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
      alert("Party Code successfully copied to clipboard!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
}
