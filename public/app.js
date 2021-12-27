const databaseRelay1 = database.ref("relay1/status");
const databaseRelay2 = database.ref("relay2/status");
const databaseRelay3 = database.ref("relay3/status");
const databaseRelay4 = database.ref("relay4/status");

var relay1Read;
var relay2Read;
var relay3Read;
var relay4Read;

databaseRelay1.on(
    "value",
    (snapshot) => {
        relay1Read = snapshot.val();
        console.log(relay1Read);
        if (relay1Read == "on") {
            document.getElementById("btn-relay1").className = "btn-success btn btn-lg";
        } else {
            document.getElementById("btn-relay1").className = "btn-danger btn btn-lg";
        }
    }
);

databaseRelay2.on(
    "value",
    (snapshot) => {
        relay2Read = snapshot.val();
        console.log(relay2Read);
        if (relay2Read == "on") {
            document.getElementById("btn-relay2").className = "btn-success btn btn-lg";
        } else {
            document.getElementById("btn-relay2").className = "btn-danger btn btn-lg";
        }
    }
);

databaseRelay3.on(
    "value",
    (snapshot) => {
        relay3Read = snapshot.val();
        console.log(relay2Read);
        if (relay3Read == "on") {
            document.getElementById("btn-relay3").className = "btn-success btn btn-lg";
        } else {
            document.getElementById("btn-relay3").className = "btn-danger btn btn-lg";
        }
    }
);

databaseRelay4.on(
    "value",
    (snapshot) => {
        relay4Read = snapshot.val();
        console.log(relay4Read);
        if (relay4Read == "on") {
            document.getElementById("btn-relay4").className = "btn-success btn btn-lg";
        } else {
            document.getElementById("btn-relay4").className = "btn-danger btn btn-lg";
        }
    }
);
function relayControl(relayID) {
    const dbRelay = database.ref(relayID + "/status");
    dbRelay.get().then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());

            // flip-flop
            // jika relay on trs ditekan maka langsung off
            // pembacaan firebase hanya sekali shg tdk error
            const relayRead = snapshot.val();
            if (relayRead == "on") {
                database.ref(relayID).set({
                    status: "off"
                });
                return;
            } else {
                database.ref(relayID).set({
                    status: "on"
                });
                return;
            }
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}