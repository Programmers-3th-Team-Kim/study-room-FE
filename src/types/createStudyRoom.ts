export interface CreateStudyRoomFormData {
  title: string;
  tagList?: string[];
  maxNum: number;
  notice?: string;
  isPublic: boolean;
  password?: string;
  isChat: boolean;
  imageUrl?: string;
}

interface SPlannerDto {
  _id: string;
  todo: string;
  isComplete: boolean;
  date: string;
  totalTime: number;
}

export interface RoomAndMyInfoDto {
  title: string;
  notice: string;
  tagList: string[];
  maxNum: number;
  isPublic: boolean;
  isChat: boolean;
  imageUrl: string;
  password: string;
  roomManager: string;
  currentMember: string[];
  planner: SPlannerDto[];
  totalTime: number;
}
