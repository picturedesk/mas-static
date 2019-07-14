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
		output: './ueber-uns.html',
		content: {
			title: 'Über uns',
			description: 'CSS Konzernbereich Leistungen & Produkte'
		},
		template: './src/pages/ueber-uns.hbs'
	},
		{
			output: './ueber-uns/qualitaet.html',
			content: {
				title: 'Qualität',
				description: 'Qualität'
			},
			template: './src/pages/ueber-uns/qualitaet.hbs'
		},
		{
			output: './ueber-uns/kooperationen.html',
			content: {
				title: 'Kooperationen',
				description: 'Kooperationen'
			},
			template: './src/pages/ueber-uns/kooperationen.hbs'
		},
			{
				output: './ueber-uns/kooperationen/gesundheitsprogramme.html',
				content: {
					title: 'Gesundheitsprogramme',
					description: 'Innovationen & Gesundheitsprogramme'
				},
				template: './src/pages/ueber-uns/kooperationen/gesundheitsprogramme.hbs'
			},
			{
				output: './ueber-uns/kooperationen/integrierte-versorgung.html',
				content: {
					title: 'Integrierte Versorgung',
					description: 'Integrierte Versorgung'
				},
				template: './src/pages/ueber-uns/kooperationen/integrierte-versorgung.hbs'
			},
		{
			output: './ueber-uns/kontakt.html',
			content: {
				title: 'Kontakt',
				description: 'Kontakt'
			},
			template: './src/pages/ueber-uns/kontakt.hbs'
		},
		{
			output: './ueber-uns/kontakt/kontaktformular.html',
			content: {
				title: 'Kontaktformular',
				description: 'Kontaktformular'
			},
			template: './src/pages/ueber-uns/kontakt/kontaktformular.hbs'
		},
		{
			output: './ueber-uns/kongresse.html',
			content: {
				title: 'Kongresse',
				description: 'Kongresse'
			},
			template: './src/pages/ueber-uns/kongresse.hbs'
		},
			{
				output: './ueber-uns/kongresse/2019_ambulant_vor_stationaer.html',
				content: {
					title: '2019, ambulant vor stationär',
					description: 'Diagnose: Stationär. Therapie: Ambulant. 4. April 2019, Bierhübeli Bern'
				},
				template: './src/pages/ueber-uns/kongresse/2019_ambulant_vor_stationaer.hbs'
			},
	{
		output: './spital_klinik.html',
		content: {
			title: 'Spital / Klinik',
			description: 'Spital / Klinik'
		},
		template: './src/pages/spital_klinik.hbs'
	},
	{
		output: './apotheken.html',
		content: {
			title: 'Apotheken',
			description: 'Apotheken'
		},
		template: './src/pages/apotheken.hbs'
	},
	{
		output: './aerzte_zahnaerzte.html',
		content: {
			title: 'Ärzte / Zahnärzte',
			description: 'Ärzte / Zahnärzte'
		},
		template: './src/pages/aerzte_zahnaerzte.hbs'
	},
		{
			output: './aerzte_zahnaerzte/tarmed.html',
			content: {
				title: 'TARMED',
				description: 'TARMED'
			},
			template: './src/pages/aerzte_zahnaerzte/tarmed.hbs'
		},
		{
			output: './aerzte_zahnaerzte/aerzte.html',
			content: {
				title: 'Ärzte',
				description: 'Ärzte'
			},
			template: './src/pages/aerzte_zahnaerzte/aerzte.hbs'
		},
		{
			output: './aerzte_zahnaerzte/aerztenetzwerke.html',
			content: {
				title: 'Ärztenetzwerke',
				description: 'Ärztenetzwerke'
			},
			template: './src/pages/aerzte_zahnaerzte/aerztenetzwerke.hbs'
		},
		{
			output: './aerzte_zahnaerzte/hausaerzte.html',
			content: {
				title: 'Hausärzte',
				description: 'Hausärzte'
			},
			template: './src/pages/aerzte_zahnaerzte/hausaerzte.hbs'
		},
		{
			output: './aerzte_zahnaerzte/zweitmeinungsarzt.html',
			content: {
				title: 'Zweitmeinungsarzt',
				description: 'Zweitmeinungsarzt'
			},
			template: './src/pages/aerzte_zahnaerzte/zweitmeinungsarzt.hbs'
		}
];

module.exports = pages;
