import jsPDF from 'jspdf';
import 'jspdf-autotable'

const ReportGen9 = Supplier =>{

    const doc = new jsPDF();

    const tableColumn = ["Supplier Name","Email","Phone", "Address", "Item Category"];
    const tableRows = [];

    Supplier.forEach(sup => {
        const supplierData = [

            sup.supplierName,
            sup.supplierEmail,
            sup.supplierContactNumber,
            sup.supplierAddress,
            sup.supplierItemCategory
        ]

        
        tableRows.push(supplierData);
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("All Suppliers",14,15);
    doc.save(`Suppliers_${year}`+" "+`${month}`+" "+`${day}`+".pdf");

}

export default ReportGen9;