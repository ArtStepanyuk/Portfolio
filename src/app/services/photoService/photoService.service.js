export default class photoService  {
  constructor() {
    this.projects = [
      {
        id: 1,
        img: require("../../../assets/images/projects2/1.jpg"),
        thumb: require("../../../assets/images/projects2/1t.jpg")
      },
      {
        id: 2,
        img: require('../../../assets/images/projects2/2.jpg'),
        thumb: require('../../../assets/images/projects2/2t.jpg')
      },
      {
        id: 3,
        img: require('../../../assets/images/projects2/3.jpg'),
        thumb: require('../../../assets/images/projects2/3t.jpg')
      },
      {
        id: 4,
        img: require('../../../assets/images/projects2/4.jpg'),
        thumb: require('../../../assets/images/projects2/4t.jpg')
      },
      {
        id: 5,
        img: require('../../../assets/images/projects2/5.jpg'),
        thumb: require('../../../assets/images/projects2/5t.jpg')
      },
      {
        id: 6,
        img: require('../../../assets/images/projects2/6.jpg'),
        thumb: require('../../../assets/images/projects2/6t.jpg')
      },
      {
        id: 7,
        img: require('../../../assets/images/projects2/7.jpg'),
        thumb: require('../../../assets/images/projects2/7t.jpg')
      },
      {
        id: 8,
        img: require('../../../assets/images/projects2/8.jpg'),
        thumb: require('../../../assets/images/projects2/8t.jpg')
      }
    ];
  }

  getImages() {
    return this.projects;
  }
}
