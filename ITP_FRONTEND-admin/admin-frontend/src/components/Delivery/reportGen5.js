import jsPDF from 'jspdf';
import 'jspdf-autotable'

const ReportGen5 = Vehicle =>{

    const doc = new jsPDF();

    const tableColumn = ["Vehicle Type","Model","Vehicle No", "Year", "Mileage", "Next Service"];
    const tableRows = [];

    Vehicle.forEach(vehi => {
        const vehicleData = [

            vehi.vehicleType,
            vehi.vehicleModel,
            vehi.vehicleNo,
            vehi.Year,
            vehi.mileage,
            vehi.nextServiceReminder.split("T")[0]
            
        ]

        
        tableRows.push(vehicleData);
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("All Vehicles in Furny",14,15);
    doc.save(`Vehicles_${year}`+" "+`${month}`+" "+`${day}`+".pdf");

}

export default ReportGen5;