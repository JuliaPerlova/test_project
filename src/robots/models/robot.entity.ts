import { Entity, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, BeforeInsert, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'robot' })
export class Robot extends BaseEntity {
    @PrimaryColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 50 })
    name: string;

    @Column({ type: 'varchar', length: 300,  nullable: true })
    description: string | null;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDateTime: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    lastChangedDateTime: Date;

    @BeforeInsert()
    addId() {
        this.id = uuidv4();
    }
}