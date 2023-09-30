import jsPDF from 'jspdf';
import 'jspdf-autotable'

const ReportGen4 = Item =>{

    const doc = new jsPDF();

    const tableColumn = ["Item Name","Category","Material", "Stock Status", "Description"];
    const tableRows = [];

    Item.forEach(item => {
        const itemData = [

            item.itemName,
            item.itemCategory,
            item.Material,
            item.stockStatus,
            item.itemDescription
            
        ]

        
        tableRows.push(itemData);
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("All Furniture Items",14,15);
    doc.save(`Items_${year}`+" "+`${month}`+" "+`${day}`+".pdf");

}

export default ReportGen4;