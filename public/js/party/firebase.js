// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// import {
//   getFirestore,
//   doc,
//   onSnapshot,
//   setDoc,
//   getDoc,
// } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
// import {
//   getAuth,
//   GoogleAuthProvider,
// } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
// import { db } from "../firebaseConfig.js";

// const analytics = getAnalytics();
// const auth = getAuth();
// const provider = new GoogleAuthProvider();
// const firestore = db;

// // Check if user is logged in
// if (!localStorage.getItem("uid") || !localStorage.getItem("userObj")) {
//   window.location.href = "./index.html";
// }

// // Function to start a group
// async function startGroup(partyCode, leader = false) {
//   const dataRow = doc(firestore, `party/${partyCode}`);
//   var dataRowValue = await getDoc(dataRow);
//   var data = {};

//   // Check if party exists
//   if (dataRowValue.exists()) {
//     data = JSON.parse(JSON.stringify(dataRowValue.data()));
//   }

//   // Add user to party with role
//   if (leader == "true") {
//     data[localStorage.getItem("uid")] = [
//       localStorage.getItem("userObj")["firstName"]
//         ? localStorage.getItem("userObj")["firstName"]
//         : `Guest  ${Object.entries(data).length + 1}`,
//       "Leader",
//     ];
//   } else {
//     data[localStorage.getItem("uid")] = [
//       localStorage.getItem("userObj")["firstName"]
//         ? localStorage.getItem("userObj")["firstName"]
//         : `Guest  ${Object.entries(data).length + 1}`,
//       `Member ${Object.entries(data).length - 1}`,
//     ];
//   }

//   // Update party data
//   await setDoc(dataRow, data, { merge: false });

//   // Update UI to display the information
//   document.getElementById("content").innerHTML = `
//           <div class="flex justify-between items-stretch">
//             <h1 class="text-center font-black self-center">Party Code: ${partyCode}</h1>
//             <button
//               type="button"
//               class="text-white buttonColor aspect-square rounded-full px-3 py-2 text-center focus:outline-blue-500 focus:outline-2 focus:outline"
//               data-toggle="modal"
//               data-target="#qrModal"
//             ><i class="bi bi-share"></i>
//             </button>
//           </div>
//           <div class="flex flex-col gap-3">
//             <div class="text-lg font-bold py-2 flex justify-between">
//               <h1>Member List</h1>
//               <h1>${Object.entries(data).length}</h1>
//             </div>
//             <div class="flex flex-col gap-3 overflow-y-auto grow max-h-56" id="memberList">
//             </div>
//             <h1 class="text-lg font-bold py-2">Controls</h1>
//             <button
//               type="button"
//               onclick="window.location.href='./swipe.html'"
//               class="text-white buttonColor w-full rounded-full p-2 text-center focus:outline-blue-500 focus:outline-2 focus:outline text-xl"
//             >
//               Swipe Together
//             </button>
//             <button
//               type="button"
//               class="text-white buttonColor w-full rounded-full p-2 text-center focus:outline-blue-500 focus:outline-2 focus:outline text-xl"
//               data-toggle="modal"
//               data-target="#mealSettings"
//             >
//               Meal Settings
//             </button>
//             <button
//               type="button"
//               onclick="confirmLeave()"
//               class="text-white buttonColor w-full rounded-full p-2 text-center focus:outline-blue-500 focus:outline-2 focus:outline text-xl"
//             >
//               Leave Party
//             </button>
//         </div>
//           `;

//   // Loop through party members and display them
//   for (let [uid, dataPts] of Object.entries(data)) {
//     console.log(uid);
//     console.log(dataPts);
//     if (dataPts[1] == "Leader") {
//       $("#memberList").prepend(`
//               <button
//                 type="button"
//                 class="text-white buttonColor w-full rounded-full p-2 text-center focus:outline-blue-500 focus:outline-2 focus:outline text-xl flex justify-around items-center"
//               >
//                 <p class='mx-auto'>${dataPts[0]}</p>
//                 <img src="https://cdn.discordapp.com/attachments/1018710809360220221/1022199416930697306/unknown.png" class="w-1/12 mx-3"/>
//               </button>
//             `);
//     } else {
//       $("#memberList").append(`
//               <button
//                 type="button"
//                 class="text-white buttonColor w-full rounded-full p-2 text-center focus:outline-blue-500 focus:outline-2 focus:outline text-xl kick flex justify-around items-center"
//               >
//                 <p class='mx-auto'>${dataPts[0]}</p>
//                 <div class='w-1/12 mx-3 bg-slate-200 rounded-full aspect-square' style="color: #343c76;">-</div>
//               </button>
//             `);
//     }
//   }
//   document.getElementById(`memberList`).innerHTML += ``;
// }

// function updatePartyUI(partyCode, partyData) {
//   const memberListHtml = Object.values(partyData.members)
//     .map(member => `<li>${member.name} (${member.role})</li>`)
//     .join('');

//   document.getElementById("partyMembers").innerHTML = memberListHtml;
//   document.getElementById("partyCodeDisplay").textContent = `Party Code: ${partyCode}`;
// }

// // Getting current URL
// let currentURL = window.location;

// // Check if there is a party code in the URL
// if (currentURL.search != "") {
//   var queryString = currentURL.search;
//   var urlParams = new URLSearchParams(queryString);
//   if (
//     urlParams.get("partyID") != null &&
//     urlParams.get("partyID") != undefined
//   ) {
//     if (
//       urlParams.get("leader") != null &&
//       urlParams.get("leader") != undefined
//     ) {
//       $("#partyCode span").html(`${urlParams.get("partyID")}`);
//       document.getElementById(
//         "qrCode"
//       ).src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${
//         window.location.href.split("?")[0] +
//         "?" +
//         window.location.href.split("?")[1].split("&")[0]
//       }`;
//       $("#qrModal").modal("show");
//     }
//     startGroup(urlParams.get("partyID"), urlParams.get("leader"));
//   }
// }

// // Function to join a party
// async function viewParty(partyCode) {
//   // Reference to the party document
//   const partyRef = doc(db, "party", partyCode);

//   try {
//     const docSnapshot = await getDoc(partyRef);

//     if (!docSnapshot.exists()) {
//       console.log("No such document!");
//       // Optionally, handle the case where the document doesn't exist more robustly here
//     } else {
//       console.log("Document data:", docSnapshot.data());
//       // Further actions based on the document data can go here
//     }
//   } catch (error) {
//     console.error("Error getting document:", error);
//     // Handle the error more robustly here
//   }
// }

// function partyListener(partyCode) {
//   const docRef = doc(db, "party", partyCode);

//   let unsubscribe = onSnapshot(
//     docRef,
//     (docSnapshot) => {
//       if (docSnapshot.exists()) {
//         console.log("Document data:", docSnapshot.data());
//         console.log("Current document content:");
//         Object.entries(docSnapshot.data()).forEach(([key, value]) => {
//           console.log(`${key}: ${value}`);
//         });
//       } else {
//         console.log("No such document!");
//         // Optionally, handle the case more robustly here
//       }
//     },
//     (error) => {
//       console.error("Error listening to document:", error);
//       // Handle the error more robustly here
//     }
//   );

//   // Consider returning unsubscribe if you want to provide the option to stop listening
//   return unsubscribe;
// }

// // Adding event listener to the join button
// document.getElementById("joinParty").addEventListener("click", async () => {
//   const code = document.getElementById("code").value;
//   if (code.length === 5) {
//     await viewParty(code);
//     partyListener(code);
//   } else {
//     alert("Invalid Party Code");
//   }
// });


import {
  getFirestore,
  doc,
  onSnapshot,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
import {
  getAuth,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import { db } from "../firebaseConfig.js";

const analytics = getAnalytics();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const firestore = db;

// Check if user is logged in
if (!localStorage.getItem("uid") || !localStorage.getItem("userObj")) {
  window.location.href = "./index.html";
}

// // Function to retrieve all documents from the party
// async function getPartyData(partyCode) {
//   const dataRow = doc(firestore, `party/${partyCode}`);
//   const dataRowValue = await getDoc(dataRow);
//   let data = {};

//   if (dataRowValue.exists()) {
//     data = JSON.parse(JSON.stringify(dataRowValue.data()));
//   }

//   // data = addUserToParty(data, leader);
//   // await updatePartyData(dataRow, data);

//   updateUI(partyCode, data);
// }

async function createParty() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let partyCode = "";
  for (let i = 0; i < 5; i++) {
    partyCode += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  const uid = localStorage.getItem("uid");
  const userObj = JSON.parse(localStorage.getItem("userObj"));
  const userName = userObj ? userObj["firstName"] : "Guest";

  const leaderData = {
    members: {
      [uid]: {
        name: userName,
        role: "Leader",
      },
    },
  };

  try {
    const partyRef = doc(firestore, "party", partyCode);
    await setDoc(partyRef, leaderData);
    partyListener(partyCode);
    window.location.href = `./party.html?partyID=${partyCode}&leader=true`;
  } catch (err) {
    console.error("Error creating party:", err);
    alert("Failed to create a new party. Please try again later.");
  }
}

function partyListener(partyCode) {
  const partyRef = doc(firestore, "party", partyCode);
  onSnapshot(
    partyRef,
    (docSnapshot) => {
      if (docSnapshot.exists()) {
        const partyData = docSnapshot.data();
        updateUI(partyCode, partyData.members);
      } else {
        console.log("Party has been removed or does not exist");
      }
    },
    (error) => {
      console.error("Error listening to party:", error);
    }
  );
}

async function joinPartyIfNeeded() {
  const urlParams = new URLSearchParams(window.location.search);
  const partyCode = urlParams.get("partyID");

  if (partyCode) {
    const partyRef = doc(firestore, "party", partyCode);
    const docSnapshot = await getDoc(partyRef);

    if (!docSnapshot.exists()) {
      console.log("No such party exists!");
      window.location.href = "./index.html";
      return;
    }

    let partyData = docSnapshot.data();
    const uid = localStorage.getItem("uid");
    if (!partyData.members || !partyData.members[uid]) {
      const newUser = JSON.parse(localStorage.getItem("userObj"));
      partyData = addUserToParty(
        partyData,
        uid,
        newUser.firstName || "Guest",
        false
      );
      await setDoc(partyRef, partyData);
    }

    partyListener(partyCode);
    // Do not redirect if already on the party page to avoid reload loops
    // window.location.href = `./party.html?partyID=${partyCode}`;
  } else {
    createParty();
  }
}

function addUserToParty(partyData, uid, userName, isLeader) {
  const role = isLeader ? "Leader" : "Member";
  partyData.members = partyData.members || {};
  partyData.members[uid] = { name: userName, role };
  return partyData;
}

function generateContentHTML(partyCode, members) {
  const memberCount = Object.keys(members).length;

  // Updated to dynamically generate member list HTML
  let membersHTML = "";
  for (const [uid, { name, role }] of Object.entries(members)) {
    membersHTML += `
        <button type="button" class="text-white buttonColor w-full rounded-full p-2 text-center focus:outline-blue-500 focus:outline-2 focus:outline text-xl flex justify-around items-center">
          <p class='mx-auto'>${name} (${role})</p>
        </button>`;
  }

  return `
        <div class="flex justify-between items-stretch">
          <h1 class="text-center font-black self-center">Party Code: ${partyCode}</h1>
          <button type="button" class="text-white buttonColor aspect-square rounded-full px-3 py-2 text-center focus:outline-blue-500 focus:outline-2 focus:outline" data-toggle="modal" data-target="#qrModal">
            <i class="bi bi-share"></i>
          </button>
        </div>
        <div class="flex flex-col gap-3">
          <div class="text-lg font-bold py-2 flex justify-between">
            <h1>Member List</h1>
            <h1>${memberCount}</h1>
          </div>
          <div class="flex flex-col gap-3 overflow-y-auto grow max-h-56" id="memberList">
            ${membersHTML}
          </div>
          <h1 class="text-lg font-bold py-2">Controls</h1>
          <button type="button" onclick="window.location.href='./swipe.html'" class="text-white buttonColor w-full rounded-full p-2 text-center focus:outline-blue-500 focus:outline-2 focus:outline text-xl">Swipe Together</button>
          <button type="button" class="text-white buttonColor w-full rounded-full p-2 text-center focus:outline-blue-500 focus:outline-2 focus:outline text-xl" data-toggle="modal" data-target="#mealSettings">Meal Settings</button>
          <button type="button" onclick="confirmLeave()" class="text-white buttonColor w-full rounded-full p-2 text-center focus:outline-blue-500 focus:outline-2 focus:outline text-xl">Leave Party</button>
        </div>`;
}

function updateUI(partyCode, members) {
  const contentHTML = generateContentHTML(partyCode, members);
  document.getElementById("content").innerHTML = contentHTML;
}

joinPartyIfNeeded();
