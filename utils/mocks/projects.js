const projectsMock = [
  {
    "id": 1,
    "category": "Infraestructura",
    "title": "escuela 10",
    "place": "Jose hernandes 455",
    "tenderDate": "12-05-2020",
    "startOfWork": "23-07-2020",
    "endOfWork": "30-07-2021",
    "constructionSiteStatus": [
      {
        "date": "13-05-2020",
        "physicalAdvance": 10,
        "percentageDone": 50,
      },
      {
        "date": "13-05-2020",
        "physicalAdvance": 10,
        "percentageDone": 75,
      },
    ],
    "observations": [
      {
        "date": "20-11-2020",
        "observation": "cimientos terminados",
        "userId": "123",
      }
    ]
    
  },
  {
    "id": 2,
    "category": "Asfaltos",
    "title": "escuela 11",
    "place": "Jose hernandes 455",
    "tenderDate": "12-08-2020",
    "startOfWork": "11-07-2020",
    "endOfWork": "01-07-2021",
    "constructionSiteStatus": [
      {
        "date": "13-05-2020",
        "physicalAdvance": 10,
        "percentageDone": 80,
      },
    ],
    "observations": [
      {
        "date": "20-11-2020",
        "observation": "cimientos terminados",
        "userId": "123",

      }
    ]
    
  },
  {
    "id": 3,
    "category": "Infraestructura",
    "title": "escuela 20",
    "place": "Jose hernandes 455",
    "tenderDate": "12-05-2020",
    "startOfWork": "10-09-2020",
    "endOfWork": "01-07-2021",
    "constructionSiteStatus": [
      {
        "date": "13-05-2020",
        "physicalAdvance": 10,
        "percentageDone": 50,
      },
    ],
    "observations": [
      {
        "date": "20-11-2020",
        "observation": "cimientos terminados",
        "userId": "123",

      },
      {
        "date": "20-11-2020",
        "observation": "cimientos terminados",
        "userId": "123",

      }
    ]
    
  },
  {
    "id": 4,
    "category": "Infraestructura",
    "title": "escuela 20",
    "place": "Jose hernandes 455",
    "tenderDate": "12-05-2020",
    "startOfWork": "10-09-2020",
    "endOfWork": "01-07-2021",
    "constructionSiteStatus": [
      {
        "date": "13-05-2020",
        "physicalAdvance": 10,
        "percentageDone": 50,
      },
    ],
    "observations": [
      {
        "date": "20-11-2020",
        "observation": "cimientos terminados",
        "userId": "123",

      },
      {
        "date": "20-11-2020",
        "observation": "cimientos terminados",
        "userId": "123",

      }
    ]
    
  },
  {
    "id": 5,
    "category": "Infraestructura",
    "title": "escuela 20",
    "place": "Jose hernandes 455",
    "tenderDate": "12-05-2020",
    "startOfWork": "10-09-2020",
    "endOfWork": "01-07-2021",
    "constructionSiteStatus": [
      {
        "date": "13-05-2020",
        "physicalAdvance": 10,
        "percentageDone": 50,
      },
    ],
    "observations": [
      {
        "date": "20-11-2020",
        "observation": "cimientos terminados",
        "userId": "123",

      },
      {
        "date": "20-11-2020",
        "observation": "cimientos terminados",
        "userId": "123",

      }
    ]
    
  },
  {
    "id": 6,
    "category": "Infraestructura",
    "title": "escuela 20",
    "place": "Jose hernandes 455",
    "tenderDate": "12-05-2020",
    "startOfWork": "10-09-2020",
    "endOfWork": "01-07-2021",
    "constructionSiteStatus": [
      {
        "date": "13-05-2020",
        "physicalAdvance": 10,
        "percentageDone": 50,
      },
    ],
    "observations": [
      {
        "date": "20-11-2020",
        "observation": "cimientos terminados",
        "userId": "123",

      },
      {
        "date": "20-11-2020",
        "observation": "cimientos terminados",
        "userId": "123",

      }
    ]
    
  },
  {
    "id": 7,
    "category": "Infraestructura",
    "title": "escuela 20",
    "place": "Jose hernandes 455",
    "tenderDate": "12-05-2020",
    "startOfWork": "10-09-2020",
    "endOfWork": "01-07-2021",
    "constructionSiteStatus": [
      {
        "date": "13-05-2020",
        "physicalAdvance": 10,
        "percentageDone": 50,
      },
    ],
    "observations": [
      {
        "date": "20-11-2020",
        "observation": "cimientos terminados",
        "userId": "123",

      },
      {
        "date": "20-11-2020",
        "observation": "cimientos terminados",
        "userId": "123",

      }
    ]
    
  },
  {
    "id": 8,
    "category": "Infraestructura",
    "title": "escuela 20",
    "place": "Jose hernandes 455",
    "tenderDate": "12-05-2020",
    "startOfWork": "10-09-2020",
    "endOfWork": "01-07-2021",
    "constructionSiteStatus": [
      {
        "date": "13-05-2020",
        "physicalAdvance": 10,
        "percentageDone": 50,
      },
    ],
    "observations": [
      {
        "date": "20-11-2020",
        "observation": "cimientos terminados",
        "userId": "123",

      },
      {
        "date": "20-11-2020",
        "observation": "cimientos terminados",
        "userId": "123",

      }
    ]
    
  }
  // {
  //   id: '11fff70c-c312-4791-b8b4-1a0665edd79e',
  //   title: 'Siete minutos (Seven Minutes)',
  //   year: 2019,
  //   cover: 'http://dummyimage.com/800x600.png/5fa2dd/ffffff',
  //   description:
  //     'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
  //   duration: 62,
  //   contentRating: 'PG',
  //   source:
  //     'http://columbia.edu/eget/orci/vehicula/condimentum/curabitur/in/libero.html',
  //   tags: ['Action|Adventure|Comedy|Drama|War', 'Animation', 'Drama']
  // }
];

function filteredProjectsMock(tag) {
  return projectsMock.filter(project => project.category.includes(tag));
}

class ProjectsServiceMock {
  async getProjects() {
    return Promise.resolve(projectsMock);
  }

  async createProject() {
    return Promise.resolve(projectsMock[0]);
  }
}

module.exports = {
  projectsMock,
  filteredProjectsMock,
  ProjectsServiceMock
};
