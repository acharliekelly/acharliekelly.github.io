'use strict'

const techIcons = {
  amazonwebservices: { icon: "devicon-amazonwebservices-original", text: "AWS" },
  atom: { icon: "devicon-atom-original", text: "Atom" },
  angularjs: { icon: "devicon-angularjs-plain", text: "AngularJS" },
  apache: { icon: "devicon-apache-plain", text: "apache" },
  bootstrap: { icon: "devicon-bootstrap-plain", text: "Bootstrap" },
  css3: { icon: "devicon-css3-plain", text: "CSS3" },
  debian: { icon: "devicon-debian-plain", text: "Debian" },
  express: { icon: "devicon-express-original", text: "Express" },
  facebook: { icon: "devicon-facebook-plain", text: "Facebook" },
  git: { icon: "devicon-git-plain", text: "git" },
  github: { icon: "devicon-github-plain", text: "GitHub" },
  grunt: { icon: "devicon-grunt-line", text: "Grunt" },
  heroku: { icon: "devicon-heroku-plain", text: "Heroku" },
  html5: { icon: "devicon-html5-plain", text: "HTML5" },
  java: { icon: "devicon-java-plain", text: "Java" },
  javascript: { icon: "devicon-javascript-plain", text: "JavaScript" },
  jquery: { icon: "devicon-jquery-plain", text: "jQuery" },
  less: { icon: "less-plain-wordmark", text: "{less}" },
  linux: { icon: "devicon-linux-plain", text: "Linux" },
  mongodb: { icon: "devicon-mongodb-plain", text: "MongoDB" },
  mysql: { icon: "devicon-mysql-plain", text: "MySQL" },
  nodejs: { icon: "devicon-nodejs-plain", text: "node" },
  oracle: { icon: "devicon-oracle-original", text: "Oracle" },
  php: { icon: "devicon-php-plain", text: "php" },
  postgresql: { icon: "devicon-postgresql-plain", text: "PostgreSQL" },
  rails: { icon: "devicon-rails-plain", text: "Rails" },
  react: { icon: "devicon-react-original", text: "ReactJS" },
  redhat: { icon: "devicon-redhat-plain", text: "RedHat" },
  ruby: { icon: "devicon-ruby-plain", text: "Ruby" },
  sass: { icon: "devicon-sass-original", text: "Sass" },
  tomcat: { icon: "devicon-tomcat-line", text: "Tomcat" },
  ubuntu: { icon: "devicon-ubuntu-plain", text: "Ubuntu" },
  webpack: { icon: "devicon-webpack-plain", text: "Webpack" },
  wordpress: { icon: "devicon-wordpress-plain", text: "WordPress" }
}

// get the object
const techIcon = (key) => {
  return devicons[key]
}

// get just the class name
const techIconCls = (key) => {
  return 'devicon-' + devicons[key].icon
}

// get just the text
const techIconText = (key) => {
  return devicons[key].text
}

const getIconPlain = (key) => {
  const d = devIcon(key)
  return `<i class="devicon-${d.icon}"></i>`
}

// get element with text
const getIconWithText = (key) => {
  const d = devIcon(key)
  return `<i class="devicon-${d.icon} colored"></i> ${d.text}`
}

// get the color element
const getIconColor = (key) => {
  const cls = devIconCls(key)
   return `<i class="${cls} colored"></i>`
}

// get the element with wordmark classs
const getIconWordmark = (key) => {
  const d = devIcon(key)
  return `<i class="devicon-${d.icon}-wordmark colored"></i>`
}



// module.exports = {
//   techIconCls,
//   devIconText,
//   getIconElement,
//   getElementText,
//   getIconWordmark
// }
