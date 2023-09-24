import { Exclude } from 'class-transformer';
import { Column, Entity } from 'typeorm';

@Entity()
export class People {
  @Column()
  name: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  hashedPassword: string;
}
