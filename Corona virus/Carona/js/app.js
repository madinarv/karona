let btn = document.querySelector('#btn')
btn.onclick=function () {
    fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data => {
        let datalist = ''
        data.summary.forEach(countries => {
            datalist+=` 
            <tbody>
            <tr>
             <td>"${countries.Countries.Country}"</td>   
             <td>"${countries.Countries.NewConfirmed}"</td>             
             <td>"${countries.Countries.TotalRecovered}"</td>
             <td>"${countries.Countries.TotalDeaths}"</td>
             <td> "${countries.Countries.TotalDeaths}"</td>
             </tr>
             </tbody>
            `    
        });
        document.getElementById('table').innerHTML=usrslist
    })
      .catch(error=> console.log(error))
}
function Search() {
    let value = document.querySelector('#form input').value;
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        let datalist = ''
        data.summary.forEach(countries => {
            datalist+=` 
            <tbody>
            <tr>
             <td>"${countries.Countries.Country}"</td>   
             <td>"${countries.Countries.NewConfirmed}"</td>             
             <td>"${countries.Countries.TotalRecovered}"</td>
             <td>"${countries.Countries.TotalDeaths}"</td>
             <td> "${countries.Countries.TotalDeaths}"</td>
             </tr>
             </tbody>
            `    
        });
        })
       }
       if(count === 0) {
        document.querySelector('.page_404').classList.remove('d-none')
       }
       else{
        document.querySelector('.page_404').classList.add('d-none')
       }

       document.getElementById('list').innerHTML = html
    
 
