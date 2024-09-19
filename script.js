function myfunction(){
    let tbody = document.getElementById(`tbody`);
   
     
    axios.get('https://jsonplaceholder.typicode.com/posts') .then((res)=>{

        let posts = res.data;
        // console.log(posts)

        posts.slice(0,10).map((datas)=>{

            tbody.innerHTML += 
            // make a table colleagous....tr,td.....
            `
            <tr>
              <td>${datas.id}</td>
              <td>${datas.title}</td>
              <td>${datas.body}</td>
            </tr>

            `
        })
    })
}

window.onload = myfunction