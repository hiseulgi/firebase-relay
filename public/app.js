const dbPMTA14 = database.ref("status/PMTA14");
const dbPMTAB14 = database.ref("status/PMTAB14");
const dbPMTB14 = database.ref("status/PMTB14");
const dbPMTA15 = database.ref("status/PMTA15");
const dbPMTAB15 = database.ref("status/PMTAB15");
const dbPMTB15 = database.ref("status/PMTB15");
const dbPMTA16 = database.ref("status/PMTA16");
const dbPMTAB16 = database.ref("status/PMTAB16");
const dbPMTB16 = database.ref("status/PMTB16");
const dbPMTA17 = database.ref("status/PMTA17");
const dbPMTAB17 = database.ref("status/PMTAB17");
const dbPMTB17 = database.ref("status/PMTB17");

var PMTA14Read;
var PMTAB14Read;
var PMTB14Read;
var PMTA15Read;
var PMTAB15Read;
var PMTB15Read;
var PMTA16Read;
var PMTAB16Read;
var PMTB16Read;
var PMTA17Read;
var PMTAB17Read;
var PMTB17Read;

// PMT 14
dbPMTA14.on(
    "value",
    (snapshot) => {
        PMTA14Read = snapshot.val();
        console.log(PMTA14Read);
        if (PMTA14Read == "CLOSE") {
            document.getElementsByClassName("btn-relayA14")[0].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayA14")[1].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayA14")[0].className += " btn-success btn";
            document.getElementsByClassName("btn-relayA14")[1].className += " btn-success btn";
        } else {
            document.getElementsByClassName("btn-relayA14")[0].className += " btn-danger btn";
            document.getElementsByClassName("btn-relayA14")[1].className += " btn-danger btn";
        }
    }
);

dbPMTAB14.on(
    "value",
    (snapshot) => {
        PMTAB14Read = snapshot.val();
        console.log(PMTAB14Read);
        if (PMTAB14Read == "CLOSE") {
            document.getElementsByClassName("btn-relayAB14")[0].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayAB14")[1].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayAB14")[0].className += " btn-success btn";
            document.getElementsByClassName("btn-relayAB14")[1].className += " btn-success btn";
        } else {
            document.getElementsByClassName("btn-relayAB14")[0].className += " btn-danger btn";
            document.getElementsByClassName("btn-relayAB14")[1].className += " btn-danger btn";
        }
    }
);

dbPMTB14.on(
    "value",
    (snapshot) => {
        PMTB14Read = snapshot.val();
        console.log(PMTAB14Read);
        if (PMTB14Read == "CLOSE") {
            document.getElementsByClassName("btn-relayB14")[0].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayB14")[1].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayB14")[0].className += " btn-success btn";
            document.getElementsByClassName("btn-relayB14")[1].className += " btn-success btn";
        } else {
            document.getElementsByClassName("btn-relayB14")[0].className += " btn-danger btn";
            document.getElementsByClassName("btn-relayB14")[1].className += " btn-danger btn";
        }
    }
);
// ================= EOF PMT 14 ======================

// PMT 15
dbPMTA15.on(
    "value",
    (snapshot) => {
        PMTA15Read = snapshot.val();
        console.log(PMTA15Read);
        if (PMTA15Read == "CLOSE") {
            document.getElementsByClassName("btn-relayA15")[0].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayA15")[1].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayA15")[0].className += " btn-success btn";
            document.getElementsByClassName("btn-relayA15")[1].className += " btn-success btn";
        } else {
            document.getElementsByClassName("btn-relayA15")[0].className += " btn-danger btn";
            document.getElementsByClassName("btn-relayA15")[1].className += " btn-danger btn";
        }
    }
);

dbPMTAB15.on(
    "value",
    (snapshot) => {
        PMTAB15Read = snapshot.val();
        console.log(PMTAB15Read);
        if (PMTAB15Read == "CLOSE") {
            document.getElementsByClassName("btn-relayAB15")[0].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayAB15")[1].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayAB15")[0].className += " btn-success btn";
            document.getElementsByClassName("btn-relayAB15")[1].className += " btn-success btn";
        } else {
            document.getElementsByClassName("btn-relayAB15")[0].className += " btn-danger btn";
            document.getElementsByClassName("btn-relayAB15")[1].className += " btn-danger btn";
        }
    }
);

dbPMTB15.on(
    "value",
    (snapshot) => {
        PMTB15Read = snapshot.val();
        console.log(PMTB15Read);
        if (PMTB15Read == "CLOSE") {
            document.getElementsByClassName("btn-relayB15")[0].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayB15")[1].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayB15")[0].className += " btn-success btn";
            document.getElementsByClassName("btn-relayB15")[1].className += " btn-success btn";
        } else {
            document.getElementsByClassName("btn-relayB15")[0].className += " btn-danger btn";
            document.getElementsByClassName("btn-relayB15")[1].className += " btn-danger btn";
        }
    }
);
// ================= EOF PMT 15 ======================

// PMT 16
dbPMTA16.on(
    "value",
    (snapshot) => {
        PMTA16Read = snapshot.val();
        console.log(PMTA16Read);
        if (PMTA16Read == "CLOSE") {
            document.getElementsByClassName("btn-relayA16")[0].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayA16")[1].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayA16")[0].className += " btn-success btn";
            document.getElementsByClassName("btn-relayA16")[1].className += " btn-success btn";
        } else {
            document.getElementsByClassName("btn-relayA16")[0].className += " btn-danger btn";
            document.getElementsByClassName("btn-relayA16")[1].className += " btn-danger btn";
        }
    }
);

dbPMTAB16.on(
    "value",
    (snapshot) => {
        PMTAB16Read = snapshot.val();
        console.log(PMTAB16Read);
        if (PMTAB16Read == "CLOSE") {
            document.getElementsByClassName("btn-relayAB16")[0].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayAB16")[1].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayAB16")[0].className += " btn-success btn";
            document.getElementsByClassName("btn-relayAB16")[1].className += " btn-success btn";
        } else {
            document.getElementsByClassName("btn-relayAB16")[0].className += " btn-danger btn";
            document.getElementsByClassName("btn-relayAB16")[1].className += " btn-danger btn";
        }
    }
);

dbPMTB16.on(
    "value",
    (snapshot) => {
        PMTB16Read = snapshot.val();
        console.log(PMTB16Read);
        if (PMTB16Read == "CLOSE") {
            document.getElementsByClassName("btn-relayB16")[0].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayB16")[1].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayB16")[0].className += " btn-success btn";
            document.getElementsByClassName("btn-relayB16")[1].className += " btn-success btn";
        } else {
            document.getElementsByClassName("btn-relayB16")[0].className += " btn-danger btn";
            document.getElementsByClassName("btn-relayB16")[1].className += " btn-danger btn";
        }
    }
);
// ================= EOF PMT 16 ======================

// PMT 17
dbPMTA17.on(
    "value",
    (snapshot) => {
        PMTA17Read = snapshot.val();
        console.log(PMTA17Read);
        if (PMTA17Read == "CLOSE") {
            document.getElementsByClassName("btn-relayA17")[0].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayA17")[1].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayA17")[0].className += " btn-success btn";
            document.getElementsByClassName("btn-relayA17")[1].className += " btn-success btn";
        } else {
            document.getElementsByClassName("btn-relayA17")[0].className += " btn-danger btn";
            document.getElementsByClassName("btn-relayA17")[1].className += " btn-danger btn";
        }
    }
);

dbPMTAB17.on(
    "value",
    (snapshot) => {
        PMTAB17Read = snapshot.val();
        console.log(PMTAB17Read);
        if (PMTAB17Read == "CLOSE") {
            document.getElementsByClassName("btn-relayAB17")[0].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayAB17")[1].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayAB17")[0].className += " btn-success btn";
            document.getElementsByClassName("btn-relayAB17")[1].className += " btn-success btn";
        } else {
            document.getElementsByClassName("btn-relayAB17")[0].className += " btn-danger btn";
            document.getElementsByClassName("btn-relayAB17")[1].className += " btn-danger btn";
        }
    }
);

dbPMTB17.on(
    "value",
    (snapshot) => {
        PMTB17Read = snapshot.val();
        console.log(PMTB17Read);
        if (PMTB17Read == "CLOSE") {
            document.getElementsByClassName("btn-relayB17")[0].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayB17")[1].classList.remove("btn-danger");
            document.getElementsByClassName("btn-relayB17")[0].className += " btn-success btn";
            document.getElementsByClassName("btn-relayB17")[1].className += " btn-success btn";
        } else {
            document.getElementsByClassName("btn-relayB17")[0].className += " btn-danger btn";
            document.getElementsByClassName("btn-relayB17")[1].className += " btn-danger btn";
        }
    }
);
// ================= EOF PMT 17 ======================