import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  visibleImages = [];
  getImages() {
    return (this.visibleImages = images.slice(0));
  }

  getImage(id: number) {
    return images.slice(0).find(image => image.id === id);
  }
}

const images = [
  {
    id: 1,
    category: 'boats',
    caption: 'Boats near dock',
    photographer: 'Ronald Carter',
    url: 'assets/img/01.jpeg'
  },
  {
    id: 2,
    category: 'boats',
    caption: 'Boats and body of water',
    photographer: 'Donald Lincoln',
    url: 'assets/img/02.jpeg'
  },
  {
    id: 3,
    category: 'cats',
    caption: 'Brown cat with green eyes',
    photographer: 'Ted Bush',
    url: 'assets/img/03.jpeg'
  },
  {
    id: 4,
    category: 'cats',
    caption: 'Kitten lying on surface',
    photographer: 'Richard Wilson',
    url: 'assets/img/04.jpeg'
  },
  {
    id: 5,
    category: 'boats',
    caption: 'Assorted motorboats',
    photographer: 'George Adams',
    url: 'assets/img/05.jpeg'
  },
  {
    id: 6,
    category: 'cats',
    caption: 'Grey fur kitten',
    photographer: 'Chester Washington',
    url: 'assets/img/06.jpeg'
  }
];
