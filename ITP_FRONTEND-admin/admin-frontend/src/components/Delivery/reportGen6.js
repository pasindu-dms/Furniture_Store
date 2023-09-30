import jsPDF from 'jspdf';
import 'jspdf-autotable'

const ReportGen6 = Delivery =>{

    const doc = new jsPDF();

    const tableColumn = ["Receiver Address","Phone","Driver", "Delivery Date", "Status", "Vehicle No"];
    const tableRows = [];

    Delivery.forEach(delivery => {
        const deliveryData = [

            delivery.receiverAddress,
            delivery.receiverContactNumber,
            delivery.assignedDriver,
            delivery.deliveryDate.split("T")[0],
            delivery.deliveryStatus,
            delivery.vehicleNo,
            
        ]

        
        tableRows.push(deliveryData);
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("All Deliveries",14,15);
    doc.save(`Delivery_${year}`+" "+`${month}`+" "+`${day}`+".pdf");

}

export default ReportGen6;