// Function to generate the resume
function generateResume(): void {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;

    const secondarySchool = (document.getElementById('secondarySchool') as HTMLInputElement).value;
    const secondaryYear = (document.getElementById('secondaryYear') as HTMLInputElement).value;
    const college = (document.getElementById('college') as HTMLInputElement).value;
    const collegeYear = (document.getElementById('collegeYear') as HTMLInputElement).value;
    const university = (document.getElementById('university') as HTMLInputElement).value;
    const universityYear = (document.getElementById('universityYear') as HTMLInputElement).value;

    const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const workYears = (document.getElementById('workYears') as HTMLInputElement).value;

    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Set resume content
    (document.getElementById('resumeName') as HTMLSpanElement).textContent = name;
    (document.getElementById('resumeEmail') as HTMLSpanElement).textContent = email;
    (document.getElementById('resumePhone') as HTMLSpanElement).textContent = phone;
    (document.getElementById('resumeAddress') as HTMLSpanElement).textContent = address;

    (document.getElementById('resumeSecondarySchool') as HTMLSpanElement).textContent = secondarySchool;
    (document.getElementById('resumeSecondaryYear') as HTMLSpanElement).textContent = secondaryYear;

    (document.getElementById('resumeCollege') as HTMLSpanElement).textContent = college;
    (document.getElementById('resumeCollegeYear') as HTMLSpanElement).textContent = collegeYear;

    (document.getElementById('resumeUniversity') as HTMLSpanElement).textContent = university;
    (document.getElementById('resumeUniversityYear') as HTMLSpanElement).textContent = universityYear;

    (document.getElementById('resumeJobTitle') as HTMLSpanElement).textContent = jobTitle;
    (document.getElementById('resumeCompany') as HTMLSpanElement).textContent = company;
    (document.getElementById('resumeWorkYears') as HTMLSpanElement).textContent = workYears;

    (document.getElementById('resumeSkills') as HTMLParagraphElement).textContent = skills;

    // Generate unique URL and display it
    const resumeURL = `https://example.com/resume/${encodeURIComponent(username)}`;
    (document.getElementById('resumeURL') as HTMLParagraphElement).textContent = `Your resume URL: ${resumeURL}`;
    (document.getElementById('resumeSection') as HTMLDivElement).style.display = 'block';
}

// Function to print the resume
function printResume(): void {
    window.print();
}

// Function to create a new resume
function createNewResume(): void {
    document.getElementById('resumeForm')!.reset();
    document.getElementById('resumeSection')!.style.display = 'none';
}

// Add event listeners when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generateResumeButton')?.addEventListener('click', generateResume);
    document.getElementById('printResumeButton')?.addEventListener('click', printResume);
    document.getElementById('createNewResumeButton')?.addEventListener('click', createNewResume);
});
