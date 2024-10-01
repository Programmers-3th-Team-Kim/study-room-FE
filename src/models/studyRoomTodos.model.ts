interface StartEndTime {
  startTime: { date: string; time: string };
  endTime: { date: string; time: string };
}
export interface GetTodosRes {
  _id: string;
  todo: string;
  date: string;
  subject: string; // ''
  startTime: string; // 계획 - 시작시간 , ''
  endTime: string; // 계획 - 종료시간, ''
  repeatDays: string[]; // []
  repeatWeeks: number; // 1
  parentObjectId?: string | undefined;
  isComplete?: boolean;
  timelineList?: StartEndTime[] | undefined;
  userId: string;
  // index?: number; 색깔
  // color? : string;
}

// _id는 path parameter로
export interface PutPostTodoReq {
  todo: string;
  date: string;
  // userId: string; // jwt에서 뽑아쓸수?
  isComplete?: boolean;
  subject?: string;
  startTime?: string;
  endTime?: string;
  timelineList?: StartEndTime[] | undefined;
  repeatDays?: string[];
  repeatWeeks?: number;
  parentObjectId?: string | undefined;
}
