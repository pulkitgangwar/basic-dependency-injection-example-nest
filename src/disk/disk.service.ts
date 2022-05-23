import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}
  getData() {
    console.log('Drawing 30 watts of power from power supply for disk.');
    this.powerService.supplyPower(30);
    console.log('getting data from disk....');
    return 'disk online';
  }
}
