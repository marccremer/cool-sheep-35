const freelancer = [
  {
    id: "1",
    lohn_stunde: 50,
    stunden_monat: 20 * 4,
    name: "Max Musterman",
    job: { job_title: "UX Designer", multiplier: 1.5 },
  },
  {
    id: "2",
    lohn_stunde: 40,
    stunden_monat: 25 * 4,
    name: "Anna Schmidt",
    job: { job_title: "Frontend Developer", multiplier: 1.8 },
  },
  {
    id: "3",
    lohn_stunde: 60,
    stunden_monat: 15 * 4,
    name: "John Doe",
    job: { job_title: "Data Scientist", multiplier: 2.0 },
  },
  {
    id: "4",
    lohn_stunde: 55,
    stunden_monat: 18 * 4,
    name: "Sophie Müller",
    job: { job_title: "Graphic Designer", multiplier: 1.7 },
  },
  {
    id: "5",
    lohn_stunde: 70,
    stunden_monat: 22 * 4,
    name: "Chris Wagner",
    job: { job_title: "Mobile App Developer", multiplier: 1.9 },
  },
  {
    id: "6",
    lohn_stunde: 45,
    stunden_monat: 30 * 4,
    name: "Lena Bauer",
    job: { job_title: "SEO Specialist", multiplier: 1.6 },
  },
  {
    id: "7",
    lohn_stunde: 65,
    stunden_monat: 25 * 4,
    name: "David Klein",
    job: { job_title: "Game Developer", multiplier: 2.2 },
  },
  {
    id: "8",
    lohn_stunde: 75,
    stunden_monat: 15 * 4,
    name: "Laura Schneider",
    job: { job_title: "AI Researcher", multiplier: 2.5 },
  },
  {
    id: "9",
    lohn_stunde: 60,
    stunden_monat: 20 * 4,
    name: "Markus Hoffmann",
    job: { job_title: "DevOps Engineer", multiplier: 2.0 },
  },
  {
    id: "10",
    lohn_stunde: 80,
    stunden_monat: 18 * 4,
    name: "Elena Wolf",
    job: { job_title: "UI/UX Designer", multiplier: 2.3 },
  },
  // Weitere Freelancer hinzufügen...
];

const jobs = [
  { job_title: "UX Designer", multiplier: 1.5 },
  { job_title: "Frontend Developer", multiplier: 1.8 },
  { job_title: "Data Scientist", multiplier: 2.0 },
  { job_title: "Graphic Designer", multiplier: 1.7 },
  { job_title: "Mobile App Developer", multiplier: 1.9 },
  { job_title: "SEO Specialist", multiplier: 1.6 },
  { job_title: "Game Developer", multiplier: 2.2 },
  { job_title: "AI Researcher", multiplier: 2.5 },
  { job_title: "DevOps Engineer", multiplier: 2.0 },
  { job_title: "UI/UX Designer", multiplier: 2.3 },
];

export default defineEventHandler(() => {
  return freelancer;
});
