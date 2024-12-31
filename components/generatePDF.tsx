import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generatePDF = async () => {
    const input = document.getElementById('pdf-content');
    if (!input) return;

    const canvas = await html2canvas(input, {
        scale: 3,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: input.scrollWidth,
        windowHeight: input.scrollHeight,
        onclone: (clonedDoc) => {
            const style = document.createElement('style');
            style.innerHTML = `
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
                * { 
                    -webkit-print-color-adjust: exact !important;
                    color-adjust: exact !important;
                    print-color-adjust: exact !important;
                    box-shadow: none !important;
                }
                #pdf-content {
                    width: 210mm; /* A4 width */
                    min-height: 297mm; /* A4 height */
                    padding: 10mm;
                    font-size: 12px;
                    color: #333;
                }
                th {
                    padding-bottom: 10px !important;
                }
                td {
                    padding-bottom: 10px !important;
                }
`;
            clonedDoc.head.appendChild(style);
        }
    });

    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    const pdf = new jsPDF('p', 'mm', 'a4');
    let firstPage = true;

    while (heightLeft >= 0) {
        if (!firstPage) {
            pdf.addPage();
        }

        pdf.addImage(
            canvas.toDataURL('image/jpeg', 1.0),
            'JPEG',
            0,
            position,
            imgWidth,
            imgHeight,
            '',
            'FAST'
        );

        heightLeft -= pageHeight;
        position -= pageHeight;
        firstPage = false;
    }

    pdf.save('PruBSN Takaful Coverage Assessment Report.pdf');
};
