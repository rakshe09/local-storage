document.addEventListener('DOMContentLoaded',function(){
    const dataArray =JSON.parse()(localStorage.getItem('formData')) ||[];

    const tableBody = document.getElementById('tableBody');
    dataArray.forEach((FormData,index) => {
        const row = document.createElement('tr');
        row.innerHTML=`
        <td>${index+1}</td>
        <td>${FormData.name}</td>
        <td>${FormData.email}</td>
        <td>${FormData.phone}</td>
        <td>${FormData.dob}</td>
        <td>${FormData.message}</td>
        `;

        tableBody.appendChild(row);
        
    });
});