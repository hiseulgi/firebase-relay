const databaseRelay1 = database.ref("status/PMTA9");
const databaseRelay2 = database.ref("status/PMTAB9");
const databaseRelay3 = database.ref("status/PMTB9");
const databaseRelay4 = database.ref("status/PMTA10");
const databaseRelay5 = database.ref("status/PMTAB10");
const databaseRelay6 = database.ref("status/PMTB10");

var relay1Read;
var relay2Read;
var relay3Read;
var relay4Read;
var relay5Read;
var relay6Read;

databaseRelay1.on(
    "value",
    (snapshot) => {
        relay1Read = snapshot.val();
        console.log(relay1Read);
        if (relay1Read == "CLOSE") {
            document.getElementsByClassName("btn-relay1")[0].className += " btn-success btn";
            document.getElementsByClassName("btn-relay1")[1].className += " btn-success btn";
        } else {
            document.getElementsByClassName("btn-relay1")[0].className += " btn-danger btn";
            document.getElementsByClassName("btn-relay1")[1].className += " btn-danger btn";
        }
    }
);

databaseRelay2.on(
    "value",
    (snapshot) => {
        relay2Read = snapshot.val();
        console.log(relay2Read);
        if (relay2Read == "CLOSE") {
            document.getElementsByClassName("btn-relay2")[0].className += " btn-success btn";
            document.getElementsByClassName("btn-relay2")[1].className += " btn-success btn";
        } else {
            document.getElementsByClassName("btn-relay2")[0].className += " btn-danger btn";
            document.getElementsByClassName("btn-relay2")[1].className += " btn-danger btn";
        }
    }
);

databaseRelay3.on(
    "value",
    (snapshot) => {
        relay3Read = snapshot.val();
        console.log(relay2Read);
        if (relay3Read == "CLOSE") {
            document.getElementsByClassName("btn-relay3")[0].className += " btn-success btn";
            document.getElementsByClassName("btn-relay3")[1].className += " btn-success btn";
        } else {
            document.getElementsByClassName("btn-relay3")[0].className += " btn-danger btn";
            document.getElementsByClassName("btn-relay3")[1].className += " btn-danger btn";
        }
    }
);

databaseRelay4.on(
    "value",
    (snapshot) => {
        relay4Read = snapshot.val();
        console.log(relay4Read);
        if (relay4Read == "CLOSE") {
            document.getElementsByClassName("btn-relay4")[0].className += " btn-success btn";
            document.getElementsByClassName("btn-relay4")[1].className += " btn-success btn";
        } else {
            document.getElementsByClassName("btn-relay4")[0].className += " btn-danger btn";
            document.getElementsByClassName("btn-relay4")[1].className += " btn-danger btn";
        }
    }
);

databaseRelay5.on(
    "value",
    (snapshot) => {
        relay5Read = snapshot.val();
        console.log(relay5Read);
        if (relay5Read == "CLOSE") {
            document.getElementsByClassName("btn-relay5")[0].className += " btn-success btn";
            document.getElementsByClassName("btn-relay5")[1].className += " btn-success btn";
        } else {
            document.getElementsByClassName("btn-relay5")[0].className += " btn-danger btn";
            document.getElementsByClassName("btn-relay5")[1].className += " btn-danger btn";
        }
    }
);

databaseRelay6.on(
    "value",
    (snapshot) => {
        relay6Read = snapshot.val();
        console.log(relay6Read);
        if (relay6Read == "CLOSE") {
            document.getElementsByClassName("btn-relay6")[0].className += " btn-success btn";
            document.getElementsByClassName("btn-relay6")[1].className += " btn-success btn";
        } else {
            document.getElementsByClassName("btn-relay6")[0].className += " btn-danger btn";
            document.getElementsByClassName("btn-relay6")[1].className += " btn-danger btn";
        }
    }
);

// fungsi untuk mengganti state relay jika menekan button
// function relayControl(relayID) {
//     const dbRelay = database.ref(relayID + "/status");
//     dbRelay.get().then((snapshot) => {
//         if (snapshot.exists()) {
//             console.log(snapshot.val());

//             // flip-flop
//             // jika relay on trs ditekan maka langsung off
//             // pembacaan firebase hanya sekali shg tdk error
//             const relayRead = snapshot.val();
//             if (relayRead == "on") {
//                 database.ref(relayID).set({
//                     status: "off"
//                 });
//                 return;
//             } else {
//                 database.ref(relayID).set({
//                     status: "on"
//                 });
//                 return;
//             }
//         } else {
//             console.log("No data available");
//         }
//     }).catch((error) => {
//         console.error(error);
//     });
// }