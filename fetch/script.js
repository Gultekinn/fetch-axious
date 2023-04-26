let bodyy=document.getElementById("bodyy")
const response = fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json()).then(data => {
    let innerHTML = ""
    for (let i = 0; i < data.length; i++) {
      const {postId,id,name,email,body}=data[i]
        innerHTML += `
       <tr>
       <th scope="row">${postId}</th>
       <td>${id}</td>
       <td>${name}</td>
       <td>${email}</td>
       <td>${body}</td>

       
       </tr>
        `
    }
    bodyy.innerHTML = innerHTML
})









// fetch("https://api.tvmaze.com/show")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);

//     data.forEach((element) => {

//       bodyy.innerHTML += `
//     <tr>
//    <th scope ="row"></th>
//     <td>${element.id}</td>
//     <td>${element.name}</td>
//     <td>${element.email}</td>

//   </tr>
//     `

//     });

//   });
