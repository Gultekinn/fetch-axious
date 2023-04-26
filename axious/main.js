const bodyy=document.getElementById("bodyy")
axios.get("https://jsonplaceholder.typicode.com/comments").then(res => {
    console.log(res)

    let innerHTML = ""

    for (let i = 0; i < res.data.length; i++) {
        const { postId,id, name, email,body } = res.data[i]
        innerHTML += ` <tr>
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
