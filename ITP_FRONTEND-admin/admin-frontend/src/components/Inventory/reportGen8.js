import jsPDF from 'jspdf';
import 'jspdf-autotable'

const ReportGen8 = Inventory =>{

    const doc = new jsPDF();

    const tableColumn = ["Item Name","Category","Quantity", "minStock", "maxStock", "PurchasePrice", "Selling", "Supplier"];
    const tableRows = [];

    Inventory.forEach(inv => {
        const inventoryData = [

            inv.itemName,
            inv.itemCategory,
            inv.quantityOnHand,
            inv.minStockLevel,
            inv.maxStockLevel,
            inv.purchasePrice,
            inv.sellingPrice,
            inv.supplierName,
            
        ]

        
        tableRows.push(inventoryData);
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("Inventory Report",14,15);
    doc.save(`Inventory_${year}`+" "+`${month}`+" "+`${day}`+".pdf");

}

export default ReportGen8;