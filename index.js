const employee={
    name: "donvine",
    streetAddress:"123 Main"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    var newEmployee = { ...employee };
    newEmployee[key] = value;
    var updatedEmployee = { ...employee };
    return {
      ...updatedEmployee,
      ...newEmployee,
      name: "Sam"
    };
  }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name="Sam"
    employee.streetAddress="12 Broadway"
    return employee;
    
}

function deleteFromEmployeeByKey(employee, key){
    var newEmployee={...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}