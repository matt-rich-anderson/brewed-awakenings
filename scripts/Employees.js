import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

// My solution ↓↓↓

// document.addEventListener("click", (clickEvent) => {
//     let alertMessage = ""
//     const itemClicked = clickEvent.target
    
//     if (itemClicked.id.startsWith("employee")) {
//         const [,employeeId] = itemClicked.id.split("--")

//         for (const employee of employees) {
//             if (employee.id === parseInt(employeeId)) {
//                 const matchedEmployee = employee
//                 let qtySold = null
//                 for (const order of orders) {
//                     if(matchedEmployee.id === order.employeeId){
//                         qtySold += 1
//                     }                    
//                 }
//                 return alertMessage = window.alert(`${matchedEmployee.name} sold ${qtySold}`)  
//             }
//         }

//     } 
// }
// )

// Book solution ↓↓↓

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if ( employee.id === parseInt(employeeId)) {
                    let employeeSales = null
                    const employeeOrders = orders.filter((order) => {
                            if (order.employeeId === employee.id) {
                                employeeSales += 1
                            }
                        }
                    )

                    return window.alert(` ${employee.name} sold ${employeeSales} products `)
                }
            }
        }
    }
)