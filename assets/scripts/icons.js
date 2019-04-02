'use strict'
/*
TODO:

Create meta icon library, just pulling in icons from different libraries, so you
can have icons for everyting. Because no library so far has had everything, and if
you have icons for only some things, it looks stupid. So, this is a dictionary object
that has (will have) keys for every icon I think I might need, and then some helper
functions for building tags for the icons.

Project should also include CSS files, either locally or (preferably) via CDN,
for each library I use. You can either import them all into index.scss, or link them
in index.html. Set icon font version in parent of skills element - ie


*/
const _icons = {
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

// parent has class .className
const getIcon = (key, className) => {
  const cls = className.substring(5)
  return `<i class="${_icons[key].icon} ${cls}"></i>`
}

const getIconMono = (key) => {
  return `<i class="${_icons[key].icon}"></i>`
}

// get element with text
const getIconWithText = (key) => {
  const icn = _icons[key]
  return `<i class="${icn.icon} colored"></i> <span class="tech">${icn.text}</span>`
}

// get the color element
const getIconColor = (key) => {
   return `<i class="${_icons[key].icon} colored"></i>`
}

const getIconWordmarkColor = (key) => {
  return `<i class="${_icons[key].icon}-wordmark colored"></i>`
}

// get the element with wordmark classs
const getIconWordmarkMono = (key) => {
  return `<i class="${_icons[key].icon}-wordmark"></i>`
}



// module.exports = {
//   getIcon,
//   getIconMono,
//   getIconWithText,
//   getIconColor,
//   getIconWordmarkMono,
//   getIconWordmarkColor
// }
