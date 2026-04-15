export const bio = [
  "I am a Research Fellow (Pre-Doc) at Stanford University (GSB). \
  My primary fields are Mechanism and Market Design, with a strong interest in AI & Data Markets, Public Economics and Market Finance.",
  "In 2024 I obtained a B.Sc. in Engineering and in 2026 a M.Sc. in Economics both \
  from <a href='https://uchile.cl/' target='_blank'>Universidad de Chile</a>.",
];

// News: date and details only (e.g. paper accepted, award, etc.)
export const news = [
  {
    date: "February 2026",
    details: "The preprint of our paper <a href='https://arxiv.org/abs/2602.22371' target='_blank'>Quadratization of Autonomous Partial Differential Equations: Theory and Algorithms</a> is now available on arXiv! \
    In this collaboration with Prof. Gleb Pogudin at École Polytechnique, we developed theory and software for finding quadratic transformations of nonlinear PDEs to facilitate their analysis, control, and model reduction. It's been truly exciting to work on this and \
    bridge my background in computer science with my interest in mathematics and systems theory."
  },
  {
    date: "September-December 2025",
    details: "I really enyojed being the teaching assistant for the <em>Linear Systems Theory</em> (MAE 280A) course at UC San Diego. In this PhD level course, the students learned about linear algebra core concepts, and properties of linear dynamical systems.",
  },
  {
    date: "October 2025",
    details: "I have become the president of the <a href='https://sites.google.com/eng.ucsd.edu/mae-graduate-women' target='_blank'>UCSD MAE Graduate Women</a> group! Through our events, we aim to promote and encourage a sense of inclusive community \
    in the MAE department at UCSD."
  },
    {
      date: "September 2024",
      details: "I moved from Santiago, Chile to San Diego, CA to start my Ph.D. in Mechanical and Aerospace Engineering at UC San Diego!",
    },

];

// Events: date, title, link (optional), and details (workshops, conferences, etc.)
export const events = [
  {
    date: "May 2026",
    title: "Young Mathematicians in Model Order Reduction (YMMOR) conference",
    link: "https://seminar.math.vt.edu/ymmor/",
    details: "Hosted by Virginia Tech in Blacksburg, Virginia. I will be giving a <strong>talk</strong> on my work on quadratization for nonlinear PDEs.",
  },
  {
    date: "December 2025",
    title: "US Research Software Sustainability Institute (URSSI) workshop",
    link: "https://urssi.us/blog/2025/11/05/applications-now-open-for-the-2025-urssi-winter-school-in-research-software-engineering/",
    details: "Hosted by Oregon State University. Here, we learned and reviewed best practices for developing research software.",
  },
  {
    date: "October 2025",
    title: "46th Southern California Control Workshop",
    link: "https://sites.uci.edu/controlworkshop/",
    details: "Hosted by UC Irvine. There, I got to listen to technical presentations by local graduate students and postdoctoral researchers in the area of systems and control.",
  },
  {
    date: "June 2025",
    title: "Early graduate research in applied mathematics (EaGR) workshop",
    link: "https://aimath.org/workshops/upcoming/eagr-am/",
    details: "Here, I learned about computer programming, mathematical modeling, and data management.",
  },
  {
    date: "September 2024",
    title: "Model Reduction and Surrogate Modeling (MORe) Conference",
    link: "https://more2024.sciencesconf.org/",
    details: "Conference held in La Jolla, CA. Here, I had the opportunity to present my work on quadratization for PDEs through a <strong>poster</strong>. It was a great experience to meet other researchers in the field of model reduction and learn about their work and the state-of-the-art.",
  },
  {
    date: "December 2023",
    title: "Center for Biotechnology and Bioengineering (CeBiB) Workshop",
    link: "https://www.cebib-chile.com/workshop2023",
    details: "Held in Santiago, Chile, I gave a <strong>talk</strong> on my work on optimal and monomial quadratizations for PDEs and presented a <strong>poster</strong> on the same subject.",
  },
];


// Publications: category, authors, year, title, status, links, tags. Optional citation: { heading, refs, bibtex } (same as software).
export const publications = [
  {
    category: "preprints",
    authors: ["Olivieri A.", "Pogudin G.", "Kramer B."],
    year: "2026",
    title: "Quadratization of Autonomous Partial Differential Equations: Theory and Algorithms",
    status: "submitted",
    links: [{ label: "Preprint", url: "https://arxiv.org/abs/2602.22371" }],
    tags: ["Symbolic computation", "nonlinear dynamical systems", "partial differential equations",
      "combinatorial optimization", "model reduction"],
    citation: {
      heading: "Please cite this work as:",
      refs: [
        "Olivieri A., Pogudin G., Kramer B. (2026). Quadratization of Autonomous Partial Differential Equations: Theory and Algorithms. arXiv preprint: \
        <a href=\"https://arxiv.org/abs/2602.22371\" target=\"_blank\" rel=\"noopener\">arxiv:2602.22371</a>",
      ],
      bibtex: `@misc{olivieri2026quadratizationautonomouspartialdifferential,
      title={Quadratization of Autonomous Partial Differential Equations: Theory and Algorithms}, 
      author={Albani Olivieri and Gleb Pogudin and Boris Kramer},
      year={2026},
      eprint={2602.22371},
      archivePrefix={arXiv},
      primaryClass={cs.SC},
      url={https://arxiv.org/abs/2602.22371}, 
}`,
    },
  },
  {
    category: "thesis",
    authors: ["Olivieri A.", "Supervisors: Navarro, G., Pogudin, G."],
    year: "2024",
    title: "Monomial and Optimal Quadratization for PDEs",
    status: "",
    links: [],
    tags: ["Symbolic Computation", "PDEs", "Discrete optimization", "Branch and bound", "Incremental Nearest Neighbor"],
  },
];

// Teaching: title (class name), date, text (description)
export const teaching = [
  {
    title: "Linear Systems Theory (MAE 280A) - Teaching Assistant",
    date: "Fall 2025",
    text: "<strong>Graduate</strong> course at the <strong>Department of Mechanical and Aerospace Engineering</strong>, <strong>University of California San Diego</strong>. \
    This course covers the linear algebra concepts of linear algebra (inner products, outer products, vector norms, matrix norms, \
    least squares problems, Jordan forms, coordinate transformations, positive definite matrices, etc.), \
    properties of linear dynamic systems described by ODEs (observability, controllability, detectability, \
    stabilizability, trackability, optimality), \
    and control systems design (state estimation, pole assignment, linear quadratic control).",
  },
  {
    title: "Algorithm and Data Structures (CC3001) - Teaching Assistant",
    date: "Fall 2023",
    text: "<strong>Undergraduate</strong> course at the <strong>Department of Computer Science</strong>, <strong>FCFM</strong>, <strong>Universidad de Chile</strong>. \
    This course covers basic concepts of efficient algorithm design (iterative and recursive), \
    algorithm analysis, and data structures (arrays, linked structures, graphs).",
  },
  {
    title: "Introduction to Programming (CC1002) - Teaching Assistant",
    date: "Spring 2021",
    text: "<strong>Undergraduate</strong> course at the <strong>Department of Computer Science</strong>, <strong>FCFM</strong>, <strong>Universidad de Chile</strong>. \
    This course introduces students to the basics concepts of programming. Students learn to solve problems methodically, writing programs that respond to a variety\
    of requests and purposes. ",
  },
  {
    title: "Computational Tools for Engineering and Sciences (CC1000) - Teaching Assistant",
    date: "Fall 2021",
    text: "<strong>Undergraduate</strong> course at the <strong>Department of Computer Science</strong>, <strong>FCFM</strong>, <strong>Universidad de Chile</strong>. \
    This course teaches basic computational tools such as Excel, R, MATLAB, Maple, and LaTeX. The students then apply these tools to solve simple engineering and \
    science problems.",
  },
];

// Software: title, version, repo, doi, description, citation (optional).
// citation: { heading: "", refs: ["...", "..."], bibtex: "" } for the Citation pop-up + BibTeX copy button.
export const software = [
  {
    title: "QuPDE",
    repo: "https://github.com/albaniolivieri/QuPDE",
    doi: "https://doi.org/10.5281/zenodo.18750665",
    version: "Latest version: v0.1.1",
    description: "QuPDE is a Python library that finds a quadratic transformation (quadratization) for nonquadratic PDEs. \
    A quadratization for a PDE is the set of auxiliary variables we introduce to rewrite the right-hand side differential equations as quadratic. \
    QuPDE outputs set of a low number of new variables and gives the corresponding transformation of the differential equations.",
    citation: {
      heading: "Please include the following reference(s) when using QuPDE in your work:",
      refs: [
        "Albani Olivieri, & Gleb Pogudin. (2026). albaniolivieri/QuPDE: v0.1.1 (v0.1.1). Zenodo. https://doi.org/10.5281/zenodo.18750665",
      ],
      bibtex: `@misc{qupde,
  author       = {Olivieri, Albani and Pogudin, Gleb},
  title        = {Qu{PDE} v0.1.0},
  version      = {0.1.0},
  year         = {2026},
  doi = {10.5281/zenodo.18750665},
  note         = {\\url{https://doi.org/10.5281/zenodo.18750665}}
}`,
    },
  },
];
