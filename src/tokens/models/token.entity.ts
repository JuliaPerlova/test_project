import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  PrimaryColumn,
  BeforeInsert,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { User } from 'src/users/models/user.entity';

@Entity({ name: 'token' })
export class Token {
  save() {
      throw new Error("Method not implemented.");
  }
  @PrimaryColumn('uuid')
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

  @UpdateDateColumn({ type: 'date' })
  expireDateTime: Date;

  @BeforeInsert()
  addId() {
    this.id = uuidv4();
  }
}
