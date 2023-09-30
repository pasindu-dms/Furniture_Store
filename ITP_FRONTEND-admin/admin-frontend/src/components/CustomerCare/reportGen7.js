import jsPDF from 'jspdf';
import 'jspdf-autotable'

const ReportGen7 = Inquiry =>{

    const doc = new jsPDF();

    const tableColumn = ["First Name","Last Name","Phone", "Email", "Title", "InquiryMSg"];
    const tableRows = [];

    Inquiry.forEach(inq => {
        const inquiryData = [

            inq.firstName,
            inq.lastName,
            inq.Phone,
            inq.Email,
            inq.title,
            inq.inquiryMsg
            
        ]

        
        tableRows.push(inquiryData);
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("All Customer Inquiries",14,15);
    doc.save(`Inquiry_${year}`+" "+`${month}`+" "+`${day}`+".pdf");

}

export default ReportGen7;