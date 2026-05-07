import { Controller } from '@nestjs/common';
import { CalcService } from './calc.service';

@Controller('calc')
export class CalcController {
  constructor(private readonly calcService: CalcService) {}
}
