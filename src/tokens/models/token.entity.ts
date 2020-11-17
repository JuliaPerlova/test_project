import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { addDays } from 'date-fns';

import { User } from 'src/users/models/user.entity';

const expireTokenDefault = () => addDays(Date.now(), 1);

@Entity({ name: 'token' })
export class Token {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 200 })
  token: string;

  @ManyToOne(
    () => User,
    (author: User) => author.tokens,
  )
  public author: User;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  expireDateTime: Date;
}
