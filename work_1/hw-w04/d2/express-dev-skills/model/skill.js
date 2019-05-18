const skills = [
  {
    name: "HTML5",
    stars: 5,
    years: 3,
    description:
      "HTML5 is the latest evolution of the standard that defines HTML. The term represents two different concepts. It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications. This set is sometimes called HTML5 & friends and often shortened to just HTML5."
  },
  {
    name: "CSS",
    stars: 5,
    years: 3,
    description:
      "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media."
  },
  {
    name: "SASS",
    stars: 4,
    years: 2,
    description:
      "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world."
  },
  {
    name: "Craft CMS",
    stars: 3,
    years: 3,
    description:
      "Pixel & Tonic was founded in 2010 with a mission to help web professionals build and maintain better websites. They made a name for themselves by creating some groundbreaking content management tools that redefined what a CMS can do. Craft is one of the most-used CMSes by top web agencies and web professionals around the world, and has won several awards including Best CMS for SMB, Best CMS for Developers, and Best WordPress Alternative."
  },
  {
    name: "JavaScript",
    stars: 3,
    years: 1,
    description:
      "JavaScript (JS) is a lightweight interpreted or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript."
  },
  {
    name: "Node.js",
    stars: 3,
    years: 1,
    description:
      'As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection the callback is fired, but if there is no work to be done, Node will sleep.'
  }
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function update(id, skill) {
  skills.splice(id, 1, skill);
}

function deleteOne(id) {
  skills.splice(id, 1);
}

function create(skill) {
  skills.push(skill);
}

function getOne(id) {
  return skills[id];
}

function getAll() {
  return skills;
}
