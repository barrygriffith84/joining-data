//TODO:  Fetch from employee-computers and print the computers assigned to each employee in the employee_computer section

fetch("http://localhost:8088/employees?_expand=department")
    .then(r => r.json())
    .then(parsedEmployees => parsedEmployees.forEach(employee => {
        // console.log(employee.id)

        document.querySelector("body").innerHTML += `
       <article class="employee${employee.id}">
       <header class="employee__name">
       <h1>${employee.name}</h1>
       </header>
       <section class="employee__department">
        Works in the ${employee.department.name} department
       </section>
       <section class="employee__computer-${employee.id}">
       test
       </section>
       </article>
       `
    }))
    .then(fetch("http://localhost:8088/employee-computers?_expand=computer")
    .then(r => r.json())
    .then(parsedComputers => parsedComputers.forEach(loan => {
        // console.log(document.querySelector(`.employee__computer-${loan.employeeId}`))
        document.querySelector(`.employee__computer-${loan.employeeId}`).innerHTML = `Currently using a ${loan.computer.type}`
    })))