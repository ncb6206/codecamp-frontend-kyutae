// 데이터베이스와 백엔드 연결해주기

import { gql } from "apollo-server";
import { ApolloServer } from "apollo-server-express";
import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

// 받아올 인자의 타입을 지정해주기
const typeDefs = gql`
    type Board {
        wirter : String
        number : Int
        title : String
        age : Int
    }

    type Query {
        //여러개 가지고 오기 때문에 타입을 배열에 담아서 보내줍니다.
        fetchBoards : [Board]
    }

    // 인풋값의 타입을 객체로 묶어 따로 지정해주도록 하겠습니다.
    input CreateBoardInput {
		writer : string!,
		title : string!,
		age : Int!
	}

    type mutation {
		createBoard(createBoardInput:CreateBoardInput) : String
		deleteBoard( number : Int ) :String
	}
`;

// API 만들어주기
const resolvers = {
  // Query API 만들기
  Query: {
    // 누군가 해당 api를 요청했다면 아래의 함수가 실행됩니다.
    fetchBoards: async () => {
      //DB와 연결 = ORM
      // 여러개를 조회할땐 find, 하나만 조회할땐 findOne 을 사용합니다.
      // isDelete는 삭제때문에 들어간 내용이니 아래에서 확인해주세요
      const result = await Board.find({ where: { writer: "철수" }, isDelete: false });
      return;
    },
  },

  mutation: {
    createBoard: async (_: any, args: any) => {
      //Board 테이블에 값넣기  ---> 백엔드에서 데이터 베이스에 값을 넣어주는 부분입니다.
      await Board.insert({
        writer: args.CreateBoardInput.writer,
        title: args.CreateBoardInput.title,
        age: args.CreateBoardInput.age,
      });
      return "fetchBoards 요청이 완료되었습니다.";
    },

    deleteBoards: async (_: any, args) => {
      //update에는 2가지가 들어갑니다. 앞에는 조건, 뒤에는 변경내용
      await Board.update({ number: args.number }, { deleteAt: new Date() });

      // await Board.delete( {writer : "철수"} )
      return;
    },
  },
};

// typeDefs와 resolvers는 위에 우리가 만들어준 타입과 api 입니다.
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.242",
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  // 어떤 테이블이 들어갈 것 인가
  entities: [], //파일경로 넣어주시면 됩니다 ,
  logging: true,
  //entities 들어간 것들을 데이터베이스와 동기화 해줍니다.
  synchronize: true, // → entitites에 들어간 것들을 데이터 베이스와 동기화 해준다
});

AppDataSource.initialize()
  //성공시 실행
  .then(() => {
    // 서버접속 완료시에 콘솔표기
    console.log("접속 완료!");
    server.listen({ port: 4000 });
  })
  .catch(() => {
    //실패시 실행
    console.log("접속 실패");
  });
