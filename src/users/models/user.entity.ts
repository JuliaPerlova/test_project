import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany } from 'typeorm';

import { Token } from 'src/tokens/models/token.entity';

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn()
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
}