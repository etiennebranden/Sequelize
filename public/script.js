async function windowsActions(){
    const endpoint = "/api/dining"
    const request = await fetch(endpoint);
    const data = await request.json();
    const dataArray = data.data;
    console.log(data);
    console.table(data);
    const list = document.querySelector('.list');

    dataArray.forEach((hall) => {
    console.log(hall.hall_id);
    const rows = document.createElement('tr');
    const hallID = hall.hall_id;
    const hallName = hall.hall_name;
    const hallAddress = hall.hall_address;

    rows.innerHTML = `
    <td>${hallID}</td>
    <td>${hallName}</td>
    <td>${hallAddress}</td>
    `;
    list.append(rows);
    });   
}

window.onload = windowsActions;