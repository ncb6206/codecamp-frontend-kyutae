//Board.postgres.ts 파일
//Board 테이블
import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Board extends BaseEntity {
  // 자동으로 생성되는 번호
  @PrimaryGeneratedColumn("increment")
  number: number;

  // 데이터베이스의 타입을 임의로 바꾸고 싶다면 아래와 같이 안에 적어주시면 됩니다.
  @column({ type: "text" })
  writer: string;

  @column()
  title: string;

  @column()
  age: number;

  @column({ type: "timestamp", default: new Date(), nullable: true })
  deletedAt: Date;
}
