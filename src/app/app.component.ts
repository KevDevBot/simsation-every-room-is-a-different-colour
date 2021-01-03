import { Component } from '@angular/core';

export class ColourData {
  constructor(public name: string = '', public hex: string = '') {}
}

export class RandomRoom {
  constructor(
    public room: string = '',
    public colour: ColourData = {
      name: '',
      hex: '',
    }
  ) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Simsation - Every Room Is A Different Colour';

  displayedColumns: string[] = ['Room', 'Sample', 'Colour'];

  constructor() {
    this.randomize();
  }

  private roomData = [
    'Exterior',
    'Kitchen',
    'Living Room',
    'Dining Room',
    'Master Bedroom',
    'En Suite',
    'Kids Bedroom 1',
    'Kids Bedroom 2',
    'Guest/Office',
    'Main Bathroom',
    'Laundry/Bathroom',
    'Hallway',
    'Yard/Landscaping',
  ];

  private colours: ColourData[] = [
    { name: 'Red', hex: '#ff0700' },
    { name: 'Pink', hex: '#ff7de7' },
    { name: 'Orange', hex: '#ff7a00' },
    { name: 'Yellow', hex: '#fff700' },
    { name: 'Green', hex: '#00cf01' },
    { name: 'Blue', hex: '#1036ff' },
    { name: 'Purple', hex: '#aa10ff' },
    { name: 'White', hex: '#ffffff' },
    { name: 'Grey', hex: '#7e7e7e' },
    { name: 'Black', hex: '#000000' },
    { name: 'Light Brown', hex: '#ce9d77' },
    { name: 'Dark Brown', hex: '#5b3100' },
  ];

  rooms: RandomRoom[] = [];

  randomize() {
    const r = [];
    for (const room of this.roomData) {
      const color = this.colours[this.getRandomInt(0, this.colours.length - 1)];
      r.push(new RandomRoom(room, color));
    }
    this.rooms = r;
  }

  private getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
