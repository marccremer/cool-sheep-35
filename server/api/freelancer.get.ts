/// <reference lib="deno.unstable" />
import {
  email,
  minLength,
  object,
  Output,
  parse,
  string,
  date,
  literal,
  number,
  union,
  coerce,
  transform,
  optional,
  array,
  Input,
  getDefault,
} from "valibot";
const kv = await Deno.openKv();
import { randomNumber } from "https://deno.land/x/random_number/mod.ts";
import { randFullName } from "npm:@ngneat/falso";

const status = union([literal("created"), literal("running")]);
const NumberSchema = coerce(number(), Number);
const DateSchema = coerce(date(), (i) => new Date(i));

const ProjectSchema = object(
  {
    id: string(),
    estimated_hours: NumberSchema,
    budget: NumberSchema,
    start_date: transform(DateSchema, (i) => i.toTemporalInstant()),
    status: status,
  },
  "Ein Project wird benötigt"
);
const JobSchema = object({
  jobTitle: string(),
  multiplier: NumberSchema,
});
const FestangestellteSchema = object({
  id: string(),
  lohnStunde: NumberSchema,
  stundenMonat: NumberSchema,
  name: string(),
  job: JobSchema,
});
const FreelancerSchema = object({
  id: string(),
  lohnStunde: NumberSchema,
  stundenMonat: NumberSchema,
  name: string(),
  job: JobSchema,
});

const GeneratorRequestSchema = object({
  freelancer: array(
    FreelancerSchema,
    "Eine Liste von Freelancer wird benötigt"
  ),
  festangestellte: array(
    FestangestellteSchema,
    "Eine Liste von Festangestellten wird benötigt"
  ),
  project: ProjectSchema,
  target_date: transform(
    coerce(date("Target date wird benötigt"), (i) => new Date(i)),
    (i) => i.toTemporalInstant()
  ),
});
type IFreelancerSchema = Input<typeof FreelancerSchema>;

const freelancer = [
  {
    id: "0",
    lohnStunde: 200,
    stundenMonat: 40 * 4,
    name: "Sören Peter",
    job: { jobTitle: "Senior Backend Developer", multiplier: 3.3 },
  },
  {
    id: "1",
    lohnStunde: 50,
    stundenMonat: 20 * 4,
    name: "Max Musterman",
    job: { jobTitle: "UX Designer", multiplier: 1.5 },
  },
  {
    id: "2",
    lohnStunde: 40,
    stundenMonat: 25 * 4,
    name: "Anna Schmidt",
    job: { jobTitle: "Frontend Developer", multiplier: 1.8 },
  },
  {
    id: "3",
    lohnStunde: 60,
    stundenMonat: 15 * 4,
    name: "John Doe",
    job: { jobTitle: "Data Scientist", multiplier: 2.0 },
  },
  {
    id: "4",
    lohnStunde: 55,
    stundenMonat: 18 * 4,
    name: "Sophie Müller",
    job: { jobTitle: "Graphic Designer", multiplier: 1.7 },
  },
  {
    id: "5",
    lohnStunde: 70,
    stundenMonat: 22 * 4,
    name: "Chris Wagner",
    job: { jobTitle: "Mobile App Developer", multiplier: 1.9 },
  },
  {
    id: "6",
    lohnStunde: 45,
    stundenMonat: 30 * 4,
    name: "Lena Bauer",
    job: { jobTitle: "SEO Specialist", multiplier: 1.6 },
  },
  {
    id: "7",
    lohnStunde: 65,
    stundenMonat: 25 * 4,
    name: "David Klein",
    job: { jobTitle: "Game Developer", multiplier: 2.2 },
  },
  {
    id: "8",
    lohnStunde: 75,
    stundenMonat: 15 * 4,
    name: "Laura Schneider",
    job: { jobTitle: "AI Researcher", multiplier: 2.5 },
  },
  {
    id: "9",
    lohnStunde: 60,
    stundenMonat: 20 * 4,
    name: "Markus Hoffmann",
    job: { jobTitle: "DevOps Engineer", multiplier: 2.0 },
  },
  {
    id: "10",
    lohnStunde: 80,
    stundenMonat: 18 * 4,
    name: "Elena Wolf",
    job: { jobTitle: "UI/UX Designer", multiplier: 2.3 },
  },
  {
    id: "11",
    lohnStunde: 100,
    stundenMonat: 26 * 4,
    name: "Dani Berg",
    job: { jobTitle: "Game Developer", multiplier: 2.2 },
  },
  {
    id: "12",
    lohnStunde: 68,
    stundenMonat: 20 * 4,
    name: "Marc Bürstos",
    job: { jobTitle: "Backend Developer", multiplier: 1.8 },
  },
  {
    id: "13",
    lohnStunde: 69,
    stundenMonat: 18 * 4,
    name: "Bernd Priska",
    job: { jobTitle: "UI/UX Designer", multiplier: 2.3 },
  },
  {
    id: "14",
    lohnStunde: 50,
    stundenMonat: 12 * 4,
    name: "Lucasz Derda",
    job: { jobTitle: "Frontend Developer", multiplier: 1.8 },
  },
  {
    id: "15",
    lohnStunde: 46,
    stundenMonat: 32 * 4,
    name: "Dorminek Bayer",
    job: { jobTitle: "DevOps Engineer", multiplier: 2.0 },
  },
  {
    id: "16",
    lohnStunde: 80,
    stundenMonat: 16 * 4,
    name: "Jonathan Trunk",
    job: { jobTitle: "AI Researcher", multiplier: 2.5 },
  },
  {
    id: "17",
    lohnStunde: 90,
    stundenMonat: 18 * 4,
    name: "Oliver Mutig",
    job: { jobTitle: "Mobile App Developer", multiplier: 1.9 },
  },
  {
    id: "18",
    lohnStunde: 78,
    stundenMonat: 27 * 4,
    name: "Ben Mut-Finkh",
    job: { jobTitle: "UI/UX Designer", multiplier: 2.3 },
  },
  {
    id: "19",
    lohnStunde: 85,
    stundenMonat: 21 * 4,
    name: "Marlon Scheum",
    job: { jobTitle: "SEO Specialist", multiplier: 1.6 },
  },
  {
    id: "20",
    lohnStunde: 75,
    stundenMonat: 10 * 4,
    name: "Kevin Neu",
    job: { jobTitle: "Backend Developer", multiplier: 1.8 },
  },
  // Weitere Freelancer hinzufügen...
];

const jobs = [
  { jobTitle: "UX Designer", multiplier: 1.5 },
  { jobTitle: "Frontend Developer", multiplier: 1.8 },
  { jobTitle: "Data Scientist", multiplier: 2.0 },
  { jobTitle: "Graphic Designer", multiplier: 1.7 },
  { jobTitle: "Mobile App Developer", multiplier: 1.9 },
  { jobTitle: "SEO Specialist", multiplier: 1.6 },
  { jobTitle: "Game Developer", multiplier: 2.2 },
  { jobTitle: "AI Researcher", multiplier: 2.5 },
  { jobTitle: "DevOps Engineer", multiplier: 2.0 },
  { jobTitle: "UI/UX Designer", multiplier: 2.3 },
  { jobTitle: "Backend Developer", multiplier: 1.8 },
  { jobTitle: "Senior Backend Developer", multiplier: 3.3 },
];

function* getFreeLancer(range = 50) {
  let i = 0;
  const jobsSize = jobs.length - 1;
  while (i < range) {
    const job = jobs[i % jobsSize];
    const lohnStunde = randomNumber({ min: 50, max: 200 });
    const stundenMonat = randomNumber({ min: 10, max: 45 }) * 4;

    yield {
      id: crypto.randomUUID(),
      job,
      lohnStunde,
      name: randFullName(),
      stundenMonat,
    };
  }
}
const limitSchema = optional(number(), () => 50);
export default defineEventHandler((e) => {
  const query = getQuery(e);
  const limit = parse(limitSchema, query.limit);
  return [...getFreeLancer(limit)];
});
