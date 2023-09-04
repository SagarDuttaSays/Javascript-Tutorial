function display(){
    axios.get("https://dummyjson.com/users")
    .then(response=>{
        console.log(response)
        document.getElementById("users").innerHTML = JSON.stringify(response.data.users)
    })
    .catch(err=>console.log(err))
}
function postUser(){
    const email = document.getElementById("firstname").value;
    const password = document.getElementById("lastname").value;

    axios.post("https://reqres.in/api/register'",{
    email:email,
    password:password
    }).then(response=>{
        // console.log(response)
        document.getElementById("users").innerHTML = response.status
    }).catch(err=>console.log(err))
}
