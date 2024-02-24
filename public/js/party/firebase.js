import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
  signOut,
  signInAnonymously,
  setPersistence,
  browserLocalPersistence,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB8rdFuZFjdGJxCP829dhVjKfNKnIfuyQE",
  authDomain: "shiok-ah.firebaseapp.com",
  projectId: "shiok-ah",
  storageBucket: "shiok-ah.appspot.com",
  messagingSenderId: "238095376133",
  appId: "1:238095376133:web:57039ed53990d3a41be16c",
  measurementId: "G-P22X8YRJPV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const firestore = getFirestore();

if (!localStorage.getItem("uid") || !localStorage.getItem("userObj")) {
  window.location.href = "./index.html";
}

async function startGroup(partyCode, leader = false) {
  const dataRow = doc(firestore, `party/${partyCode}`);
  var dataRowValue = await getDoc(dataRow);
  var data = {};

  if (dataRowValue.exists()) {
    data = JSON.parse(JSON.stringify(dataRowValue.data()));
  }

  if (leader == "true") {
    data[localStorage.getItem("uid")] = [
      localStorage.getItem("userObj")["firstName"]
        ? localStorage.getItem("userObj")["firstName"]
        : `Guest  ${Object.entries(data).length + 1}`,
      "Leader",
    ];
  } else {
    data[localStorage.getItem("uid")] = [
      localStorage.getItem("userObj")["firstName"]
        ? localStorage.getItem("userObj")["firstName"]
        : `Guest  ${Object.entries(data).length + 1}`,
      `Member ${Object.entries(data).length - 1}`,
    ];
  }

  await setDoc(dataRow, data, { merge: false });
  document.getElementById("content").innerHTML = `
          <div class="flex justify-between items-stretch">
            <h1 class="text-center font-black self-center">Party Code: ${partyCode}</h1>
            <button
              type="button"
              class="text-white buttonColor aspect-square rounded-full px-3 py-2 text-center focus:outline-blue-500 focus:outline-2 focus:outline"
              data-toggle="modal"
              data-target="#qrModal"
            ><i class="bi bi-share"></i>
            </button>
          </div>
          <div class="flex flex-col gap-3">
            <div class="text-lg font-bold py-2 flex justify-between">
              <h1>Member List</h1>
              <h1>${Object.entries(data).length}</h1>
            </div>
            <div class="flex flex-col gap-3 overflow-y-auto grow max-h-56" id="memberList">
            </div>
            <h1 class="text-lg font-bold py-2">Controls</h1>
            <button
              type="button"
              onclick="window.location.href='./swipe.html'"
              class="text-white buttonColor w-full rounded-full p-2 text-center focus:outline-blue-500 focus:outline-2 focus:outline text-xl"
            >
              Swipe Together
            </button>
            <button
              type="button"
              class="text-white buttonColor w-full rounded-full p-2 text-center focus:outline-blue-500 focus:outline-2 focus:outline text-xl"
              data-toggle="modal"
              data-target="#mealSettings"
            >
              Meal Settings
            </button>
            <button
              type="button"
              onclick="confirmLeave()"
              class="text-white buttonColor w-full rounded-full p-2 text-center focus:outline-blue-500 focus:outline-2 focus:outline text-xl"
            >
              Leave Party
            </button>
        </div>
          `;

  for (let [uid, dataPts] of Object.entries(data)) {
    console.log(uid);
    console.log(dataPts);
    if (dataPts[1] == "Leader") {
      $("#memberList").prepend(`
              <button
                type="button"
                class="text-white buttonColor w-full rounded-full p-2 text-center focus:outline-blue-500 focus:outline-2 focus:outline text-xl flex justify-around items-center"
              >
                <p class='mx-auto'>${dataPts[0]}</p>
                <img src="https://cdn.discordapp.com/attachments/1018710809360220221/1022199416930697306/unknown.png" class="w-1/12 mx-3"/>
              </button>
            `);
    } else {
      $("#memberList").append(`
              <button
                type="button"
                class="text-white buttonColor w-full rounded-full p-2 text-center focus:outline-blue-500 focus:outline-2 focus:outline text-xl kick flex justify-around items-center"
              >
                <p class='mx-auto'>${dataPts[0]}</p>
                <div class='w-1/12 mx-3 bg-slate-200 rounded-full aspect-square' style="color: #343c76;">-</div>
              </button>
            `);
    }
  }
  document.getElementById(`memberList`).innerHTML += `

          `;
}

let currentURL = window.location;
if (currentURL.search != "") {
  var queryString = currentURL.search;
  var urlParams = new URLSearchParams(queryString);
  if (
    urlParams.get("partyID") != null &&
    urlParams.get("partyID") != undefined
  ) {
    if (
      urlParams.get("leader") != null &&
      urlParams.get("leader") != undefined
    ) {
      $("#partyCode span").html(`${urlParams.get("partyID")}`);
      document.getElementById(
        "qrCode"
      ).src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${
        window.location.href.split("?")[0] +
        "?" +
        window.location.href.split("?")[1].split("&")[0]
      }`;
      $("#qrModal").modal("show");
    }
    startGroup(urlParams.get("partyID"), urlParams.get("leader"));
  }
}
