
var movies = [
  {
    id: 1,
    title: 'Terminator',
    desc: 'film o elektronicznym zabójcy',
    src: 'images/term.jpeg'
  },
  {
    id: 2,
    title: 'Miszyninposibl',
    desc: 'film o misjonarzach',
    src: 'images/miszyn.jpeg'
  },
  {
    id: 3,
    title: 'Korba',
    desc: 'film o Sylwestrze',
    src: 'images/korba2.jpg'
  },
  {
    id: 4,
    title: 'Desperado',
    desc: 'film o człowieku z gitaro',
    src: 'images/desperado.jpeg'
  },
  {
    id: 5,
    title: 'Batman',
    desc: 'film o człowieku nietoperzu',
    src: 'images/batmane.jpg'
  },
  {
    id: 6,
    title: 'Matriks',
    desc: 'film o matriksie',
    src: 'images/matriks.jpeg'
  }
];

var moviesElements = movies.map(function(movie) {
    return (
      	React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
      	React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.src, style: {height:600, width:400}})
      )
    )
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements),
    React.createElement('img', {src: movies.src}),
  );

  ReactDOM.render(element, document.getElementById('app'));
