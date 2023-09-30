import jsPDF from 'jspdf';
import 'jspdf-autotable'

const ReportGen1 = Customer =>{

    const doc = new jsPDF();

    const tableColumn = ["First Name","Last Name","Email"];
    const tableRows = [];

    Customer.forEach(user => {
        const userData = [
            user.firstName,
            user.lastName,
            user.email
            
        ]

        
        tableRows.push(userData);
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("All Registered Customers",14,15);
    doc.save(`Customers_${year}`+" "+`${month}`+" "+`${day}`+".pdf");

}

export default ReportGen1;