import jsPDF from 'jspdf';

function downloadResume(): void {
    const doc = new jsPDF();
    
    doc.text('Curriculum Vitae', 10, 10);
    doc.text(`Name: ${(document.getElementById('resumeName') as HTMLSpanElement).textContent}`, 10, 20);
    doc.text(`Email: ${(document.getElementById('resumeEmail') as HTMLSpanElement).textContent}`, 10, 30);
    doc.text(`Phone: ${(document.getElementById('resumePhone') as HTMLSpanElement).textContent}`, 10, 40);
    doc.text(`Address: ${(document.getElementById('resumeAddress') as HTMLSpanElement).textContent}`, 10, 50);

    doc.text('Education', 10, 60);
    doc.text(`Matriculation: ${(document.getElementById('resumeSecondarySchool') as HTMLSpanElement).textContent}`, 10, 70);
    doc.text(`Year: ${(document.getElementById('resumeSecondaryYear') as HTMLSpanElement).textContent}`, 10, 80);
    doc.text(`Intermediate: ${(document.getElementById('resumeCollege') as HTMLSpanElement).textContent}`, 10, 90);
    doc.text(`Year: ${(document.getElementById('resumeCollegeYear') as HTMLSpanElement).textContent}`, 10, 100);
    doc.text(`University: ${(document.getElementById('resumeUniversity') as HTMLSpanElement).textContent}`, 10, 110);
    doc.text(`Year: ${(document.getElementById('resumeUniversityYear') as HTMLSpanElement).textContent}`, 10, 120);

    doc.text('Work Experience', 10, 130);
    doc.text(`Job Title: ${(document.getElementById('resumeJobTitle') as HTMLSpanElement).textContent}`, 10, 140);
    doc.text(`Company: ${(document.getElementById('resumeCompany') as HTMLSpanElement).textContent}`, 10, 150);
    doc.text(`Years Worked: ${(document.getElementById('resumeWorkYears') as HTMLSpanElement).textContent}`, 10, 160);

    doc.text('Skills', 10, 170);
    doc.text(`${(document.getElementById('resumeSkills') as HTMLParagraphElement).textContent}`, 10, 180);

    doc.save(`${(document.getElementById('username') as HTMLInputElement).value}-resume.pdf`);
}

// Add download button event listener
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('downloadResumeButton')?.addEventListener('click', downloadResume);
});
