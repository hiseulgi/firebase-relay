// $(document).ready(function() {
//     var rootRef = firebase.database().ref().child('history');
//     var dataSet = [];
//     var table = $('.table-paginate').dataTable({
//         data: dataSet
//     });
//     console.log("test");

//     rootRef.on("child_added", (snap) => {
//         dataSet = [snap.key, snap.child("nama").val(), snap.child("status").val(), snap.child("tanggal").val(), snap.child("waktu").val()];
//         table.rows.add([dataSet]).draw();
//         console.log(snap.child("nama").val());
//     });
// });

function SelectAllData() {
    firebase.database().ref('history').once('value',
        function (snapshot) {
            snapshot.forEach(
                function (data) {
                    var nama = data.val().nama;
                    var status = data.val().status;
                    var tanggal = data.val().tanggal;
                    var waktu = data.val().waktu;
                    AddItemsToTable(nama, status, tanggal, waktu);
                }
            );
        });
}

window.onload = SelectAllData;
window.setTimeout(getDatas, 2000);

var stdNo = 0;
function AddItemsToTable(nama, status, tanggal, waktu) {
    var tbody = document.getElementById('tbody1');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    td1.innerHTML = ++stdNo;
    td2.innerHTML = nama;
    td3.innerHTML = status;
    td4.innerHTML = tanggal;
    td5.innerHTML = waktu;
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    tbody.appendChild(trow);
}

function getDatas() {
    $('.table-paginate').DataTable({
        pageLength : 5,
        lengthMenu: [[5, 10, 20], [5, 10, 20]],
        responsive: true,
        fixedHeader: true
    });
}