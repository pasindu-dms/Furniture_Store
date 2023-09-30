import jsPDF from 'jspdf';
import 'jspdf-autotable'

const ReportGen3 = Employee =>{

    const doc = new jsPDF();

    const tableColumn = ["First Name","Last Name","Email", "Phone", "Gender", "Position", "joinedDate"];
    const tableRows = [];

    Employee.forEach(employee => {
        const empData = [

            employee.empfirstName,
            employee.empLastName,
            employee.empEmail,
            employee.empContactNumber,
            employee.Gender,
            employee.Position,
            employee.joinedDate,
            
        ]

        
        tableRows.push(empData);
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("All Staff Members",14,15);
    doc.save(`Employees_${year}`+" "+`${month}`+" "+`${day}`+".pdf");

}

export default ReportGen3;