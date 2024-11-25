function saveStudent()
{
    var fisrtName=document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var birthdate = document.getElementById("birthday").value;
    var gender=document.querySelector('input[name="gender"]:checked').value;


    var student={

         emri:fisrtName,
         emaili:email,
         passwordi:password,
         ditelindja:birthdate,
         gjinia:gender,
    

    }

    var studentsfromdb=JSON.parse(localStorage.getItem("s2"));
    if(studentsfromdb==null)
    {
        var blankstudents=[];
        localStorage.setItem("s2",JSON.stringify(blankstudents));

        studentsfromdb=JSON.parse(localStorage.getItem("s2"));

        studentsfromdb.push(student);
        localStorage.setItem("s2",JSON.stringify(studentsfromdb)); 
    }
    else
    {
        studentsfromdb.push(student);
        localStorage.setItem("s2",JSON.stringify(studentsfromdb)); 
    }
   

    alert("The data was saved successfully");
    
}




var studentsfromdb=JSON.parse(localStorage.getItem("s2"));
debugger;

var html = "<table border='1|1'><tr><th>Name</th><th>E-mail</th><th>Password</th><th>Birthdate</th><th>Gender</th></tr>";
for (var i = 0; i < studentsfromdb.length; i++)
 {
    html+="<tr>";
    html+="<td>"+studentsfromdb[i].emri+"</td>";
    html+="<td>"+studentsfromdb[i].emaili+"</td>";
    html+="<td>"+studentsfromdb[i].passwordi+"</td>";
    html+="<td>"+studentsfromdb[i].ditelindja+"</td>";
    html+="<td>"+studentsfromdb[i].gjinia+"</td>";
 
    
    html+="</tr>";

}
html+="</table>";
console.log(html);
document.getElementById("box10").innerHTML = html;
