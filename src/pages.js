const pages = [
  {
    output: './index.html',
    content: {
      title: 'Mission Headless',
      description: 'Mission Headless'
    },
    template: './src/pages/home.hbs'
  },
	{
		output: './ueber-uns.html',
		content: {
			title: 'Über uns',
			description: 'Mission Headless Leistungen & Produkte'
		},
		template: './src/pages/ueber-uns.hbs'
	},
	{
		output: './rechtliches.html',
		content: {
			title: 'Rechtliches',
			description: 'Rechtliches'
		},
		template: './src/pages/rechtliches.hbs'
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
				output: './ueber-uns/kongresse/2019_traditionell_vor_headless.html',
				content: {
					title: '2019, Traditionell vor Headless',
					description: 'Diagnose: Headless. Therapie: Traditionell. 28. März 2019, Zum Tänzelnden Pony'
				},
				template: './src/pages/ueber-uns/kongresse/2019_traditionell_vor_headless.hbs'
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
