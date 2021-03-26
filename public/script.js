async function windowsActions(){
    const endpoint = "/api/dining"
    const request = await fetch(endpoint);
    const data = await request.json();
    console.log(data);
    console.table(data);

    function displayData(){
        console.log(data.hall_id);
       
        const html = data.map(halls => {
        const hallID = halls.hall_id;
        const hallName = halls.hall_name;
        const hallAddress = halls.hall_address;

        return `
            <tr>
                <th>${hallID}<th>
                <td>${hallName}<td>
                <td>${hallAddress}<td>
            <tr>
        `;
        }).join('');   
    list.innerHTML = html;
    }

    const list = document.querySelector('.list');
    displayData;
}
window.onload = windowsActions;