const pages = [
  {
    output: './index.html',
    content: {
      title: 'Home',
      description: 'Home Page'
    },
    template: './src/pages/home.hbs'
  },
	{
		output: './ueber-uns/index.html',
		content: {
			title: 'Über uns',
			description: 'Über uns'
		},
		template: './src/pages/ueber-uns.hbs'
	}
];

module.exports = pages;
