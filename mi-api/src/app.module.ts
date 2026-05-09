import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CalcModule } from './calc/calc.module';
import { FinanceModule } from './finance/finance.module';
import { BankModule } from './bank/bank.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './bank/entities/account.entity';
import { Loan } from './bank/entities/loan.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'banco.db', // archivo local
      entities: [Account, Loan],
      synchronize: true, // solo dev
    }),
    AuthModule,
    CalcModule,
    FinanceModule,
    BankModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
