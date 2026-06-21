import jsPDF
from "jspdf";

const generateCertificate =
(
  studentName,
  courseName
) => {

  const doc =
    new jsPDF();

  doc.setFontSize(24);

  doc.text(
    "Certificate of Completion",
    35,
    40
  );

  doc.setFontSize(16);

  doc.text(
    "This certifies that",
    70,
    70
  );

  doc.setFontSize(20);

  doc.text(
    studentName,
    70,
    90
  );

  doc.setFontSize(16);

  doc.text(
    "has successfully completed",
    45,
    120
  );

  doc.setFontSize(18);

  doc.text(
    courseName,
    50,
    140
  );

  doc.text(
    "OnCourse LMS",
    70,
    190
  );

  doc.save(
    "certificate.pdf"
  );
};

export default
generateCertificate;