module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "FrontInCuiabá",
      description: "Evento de FrontEnd em Cuiabá",
      date: "28 de Março",
      // If your event is free, just comment this line
      price: "R$ 30",
      venue: "Mato Grosso Palace Hotel",
      address: "Rua Joaquim Murtinho, 170, Centro",
      city: "Cuiabá",
      state: "MT"
    },

    // Facebook buttons
    // If you don't want this, just remove the fbButtons property
    fbButtons: {
        href: "https://www.facebook.com/FrontInCuiaba",
        layout: "button_count",
        action: "like",
        showFaces: true,
        share: true
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscreva-se!",
        link: "http://eventick.com.br/frontincuiaba"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
        repository: "https://github.com/braziljs/front-in-cuiaba"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://frontincuiaba.com.br/",
      googleanalytics: "UA-59028630-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      // 'schedule',
      'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "O Evento",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Patrocinadores",
      partners: "Apoiadores",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Welcome Coffee / Credenciamento",
        time: "8h00"
      },
      {
        name: "Abertura",
        time: "9h00"
      },
      {
        name: "Davidson Fellipe",
        photo: "themes/yellow-swan/img/speaker-davidson-fellipe.jpg",
        bio: "É Front-end engineer na Globo.com, onde já se envolveu com projetos para o Globoesporte.com, Futpédia, Tempo Real, Eu Atleta e Sportv. Bastante envolvido com a comunidade JS, sendo o fundador do Riojs e Pernambucojs, além de organizar os eventos Front in BH e Front in Recife. Graduado em engenharia da computação pela UPE, técnico em eletrônica pelo IFPE e Mestrando em Ciência da Computação na PUC-Rio.",
        company: "Globo.com",
        link: {
          href: "http://github.com/davidsonfellipe",
          text: "@davidsonfellipe"
        },
        presentation: {
          title: "",
          description: "",
          time: "09h20"
        }
      },
      {
        name: "Almir Filho",
        photo: "themes/yellow-swan/img/speaker-almir-filho.jpg",
        bio: "Desenvolvedor web na Globo.com e co-fundador do Loop Infinito, onde compartilha seu conhecimento, experiências e pensamentos sobre front-end. Possui mestrado em Ciência da Computação, é entusiasta e extremamente interessado pelo mundo dos padrões web e produtividade. Artista de sanduíches nas horas vagas.",
        company: "Globo.com",
        link: {
          href: "http://twitter.com/almirfilho",
          text: "@almirfilho"
        },
        presentation: {
          title: "",
          description: "",
          time: "10h10"
        }
      },
      {
        name: "Alvaro Viebranz",
        photo: "themes/yellow-swan/img/speaker-alvaro-viebranz.jpg",
        bio: "É Analista de BI na Sefaz-MT e CTO da startup cuiabana Procurix. Graduado pela UFMT em Ciência da Computação, com estudos na área de banco de dados NoSQL e buscas textuais. Curte muito desenvolvimento web, com foco maior no back-end, mas é entusiasta com front-end em AngularJS. É apaixonado por desenvolvimento mobile utilizando tanto tecnologias hibridas quanto nativas.  Arduinista nas horas vagas.",
        company: "Secretaria de Fazenda do Estado de Mato Grosso",
        link: {
          href: "http://www.twitter.com/alvinhuuu",
          text: "@alvinhuu"
        },
        presentation: {
          title: "",
          description: "",
          time: "11h00"
        }
      },
      {
        name: "Almoço",
        time: "11h50"
      },
      {
        name: "Fabian Carlos",
        photo: "themes/yellow-swan/img/speaker-fabian-carlos.jpg",
        bio: "Desenvolvedor \"on demand\" apaixonado por Front-end e Back-end, desenvolve para web e mobile. Possui experiência com ferramentas de alta produtividade e escalabilidade como Ruby/Rails, Nodejs, Backbonejs, Angularjs, MongoDB. Vem atuando principalmente no desenvolvimento para Startups da região.",
        company: "MeoAPP",
        link: {
          href: "https://github.com/fabiancarlos",
          text: "@fabiancarlos"
        },
        presentation: {
          title: "",
          description: "",
          time: "13h50"
        }
      },
      {
        name: "Ney Simões",
        photo: "themes/yellow-swan/img/speaker-ney-simoes.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Facebook",
        link: {
          href: "https://github.com/neysimoes/",
          text: "@neysimoes"
        },
        presentation: {
          title: "",
          description: "",
          time: "14h10"
        }
      },
      {
        name: "Coffee-break",
        time: "15h00"
      },
      {
        name: "Dhyego Fernando",
        photo: "themes/yellow-swan/img/speaker-dhyego-fernando.jpg",
        bio: "Atualmente com 18 anos, é desenvolvedor web front e back-end apaixonado no que faz e fissurado em solucionar problemas com boas práticas e um bom código. Sempre buscou enfrentar novos desafios, conhecer e utilizar novas tecnologias pois acredita que um bom desenvolvedor não deve ser rotulado.",
        company: "WebFlavia",
        link: {
          href: "https://github.com/dhyegofernando",
          text: "@dhyegofernando"
        },
        presentation: {
          title: "",
          description: "",
          time: "15h30"
        }
      },
      {
        name: "Mesa Redonda",
        time: "16h20"
      },
      {
        name: "Sorteios",
        time: "17h00"
      },
      {
        name: "Encerramento",
        time: "17h40"
      },

    ],

    // List of Sponsors
    sponsors: [
        {
            name: 'Diamante',
            items: [
            ]
        },

        {
            name: 'Ouro',
            items: [
              {
                name: "Globo.com",
                logo: "themes/yellow-swan/img/sponsor-globocom.png",
                url: "https://github.com/globocom"
              }
            ]
        },

        {
            name: 'Prata',
            items: [
              {
                name: "CBANET",
                logo: "themes/yellow-swan/img/sponsor-cbanet.png",
                url: "http://cbanet.com.br/"
              },
              {
                name: "TreinaWeb",
                logo: "themes/yellow-swan/img/sponsor-treinaweb.jpg",
                url: "https://www.treinaweb.com.br/"
              }
            ]
        },

        {
            name: 'Bronze',
            items: [
              {
                name: "RCF Inovações",
                logo: "themes/yellow-swan/img/sponsor-rcf-inovacoes.png",
                url: "http://rcfinovacoes.com.br/"
              }
            ]
        }

    ],

    // List of Partners
    partners: [
      {
        name: "8bits_ propaganda",
        logo: "themes/yellow-swan/img/partner-8bits-propaganda.png",
        url: "http://8bitspropaganda.com.br"
      },
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/partner-eventick.png",
        url: "http://eventick.com.br"
      },
      {
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner-braziljs.png",
        url: "http://braziljs.org"
      },
      {
        name: "Vá Nesta Direção",
        logo: "themes/yellow-swan/img/partner-va-nesta-direcao.png",
        url: "http://vanestadirecao.com/"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};