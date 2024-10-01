export interface ITodoBox {
  id: string;
  title?: string;
  detail: string;
  startTime?: string;
  endTime?: string;
  repeatDays?: string[];
  repeatWeeks?: string;
  isChecked?: boolean;
  index?: number; //
  color?: string; //
}
