import jsPDF from 'jspdf';
import 'jspdf-autotable'

const ReportGen2 = Order =>{

    const doc = new jsPDF();

    const tableColumn = ["Customer Name","Order Date","Address", "Phone", "Total"];
    const tableRows = [];

    Order.forEach(order => {
        const orderData = [

            order.customerName,
            order.orderDate,
            order.address,
            order.Phone,
            order.totalCost
            
        ]

        
        tableRows.push(orderData);
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("All Furniture Orders",14,15);
    doc.save(`Orders_${year}`+" "+`${month}`+" "+`${day}`+".pdf");

}

export default ReportGen2;