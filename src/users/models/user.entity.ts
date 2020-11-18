import { Entity, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany, PrimaryColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { Token } from 'src/tokens/models/token.entity';
 
@Entity({ name: 'user' })
export class User extends BaseEntity {
    @PrimaryColumn("uuid")
    id: string;

    @Column({ type: 'varchar', unique: true })
    username: string;

    @Column({ type: 'varchar', length: 30, unique: true })
    email: string;

    @Column({ type: 'varchar' })
    password: string;

    @OneToMany(() => Token, token => token.author)
    tokens: Token[];

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDateTime: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    lastChangedDateTime: Date;

    @BeforeInsert()
    addId() {
        console.log(uuidv4());
        this.id = uuidv4();
    }

}