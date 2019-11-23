const  mysql = require('mysql');
const inquirer = require("inquirer");

const connection = mysql.createConnection({
host: "localhost",
port: 2020,
user:"root",
password: "",
database:"deptDB"
});

connection.connection(function(err){
    if (err) throw err;
    department();
});

function department(){
    inquirer
    .prompt(
        {
          name: "DepartmentsorRolesorEmployees",
          type: "imput", 
          message: "Choose which databse would you like to see first.",
          choices:["Departments","roles","Employees"]
        }
    )

.then(function(answer){
    if (answer.DepartmentsorRolesorEmployees === "Departments"){
        Departmentsofall();
    }
    else if (answer.DepartmentsorRolesorEmployees ==="Roles"){
        Rolesofall();
    }
        else if (answer.DepartmentsorRolesorEmployees === "Employees"){
            Employeesall();
        }else{
            connection.end();
        }
    

    
});

}



function Departmentsofall(){
    inquirer
    .prompt([
        {
            name:"Department",
            type:"input",
            message:"Which depart would like this employee to be"
        },
        {
            nme:"RoleorJob",
            type:"input",
            message:"What kind of role or job will this employee be working"
        },
        {
            name:"Employee",
            type:"inpute",
            message:"Please enter the employee names [First and Last]"

        },
        {
            name:"BeginningofDepartment",
            type: "input",
            message:"question",
            
        }










    ])
}




    


