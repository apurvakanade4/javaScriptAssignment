class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_Anil = new Employee(22,"Anil", "IT", 5000, "TCS");
const emp_Radha = new Employee(33,"Radha", "HR", 74000, "Wipro");
const emp_Rishi = new Employee(55,"Rishi", "Finance", 47000, "Tcs");
const emp_Sonali = new Employee(66,"Sonali", "Finance", 45000, "Infy");
const emp_Monika = new Employee(77,"Monika", "IT", 40000, "Wipro");
const emp_Viny = new Employee(88,"Vinayak", "IT", 75000, "TCS");
const emp_Mahi = new Employee(99,"Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_Anil, emp_Radha, emp_Rishi, emp_Sonali, emp_Monika, emp_Viny, emp_Mahi ];
console.log(`------------ 1.list of all employees names -----------------`);
const arrayNames = arrayEmployees.map( (empName) => {
    return empName.emp_name
});
console.log(arrayNames);

console.log(`------------ 2.list of all departments -----------------`);
const arrayDept = arrayEmployees.map((empDept)=>{
    return empDept.emp_dept
})
console.log(arrayDept);

console.log(`------------ 3.list of all employees id -----------------`);
const arrayId = arrayEmployees.map((empId)=>{
    return empId.emp_id
})
console.log(arrayId);