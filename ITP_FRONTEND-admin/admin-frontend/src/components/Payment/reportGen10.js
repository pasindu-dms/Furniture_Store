import jsPDF from 'jspdf';
import 'jspdf-autotable'

const ReportGen10 = Payment =>{

    const doc = new jsPDF();

    const tableColumn = ["Payment Method","Amount","Customer Name", "Transaction Date"];
    const tableRows = [];

    Payment.forEach(payment => {
        const paymentData = [

            payment.paymentMethod,
            payment.paymentAmount,
            payment.customerName,
            payment.transactionDate.split("T")[0],
            
        ]

        
        tableRows.push(paymentData);
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("All Payments",14,15);
    doc.save(`Payments_${year}`+" "+`${month}`+" "+`${day}`+".pdf");

}

export default ReportGen10;