import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute() {
    console.log('Drawing 10 watts of power from power supply for cpu.');
    this.powerService.supplyPower(10);
    console.log('computing some stuff');
    return 'cpu online';
  }
}
