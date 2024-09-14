// import { DefaultTheme } from 'styled-components';

export type ColorKey = "main" | "mainStrong" | "lineGray" | "btnOk" | "btnWarn" | "bgGray" | "bgLightGray" | "bgYellowNote";
export type ButtonSize = "large" | "medium" | "small";
export type BorderRadius = "large" | "medium" | "small";

interface DefaultTheme {
  color: Record<ColorKey, string>;
  studyRoomButton: {
    [key in ButtonSize] : {
      width: string;
      height: string;
    };
  };
  borderRadius: {
    [key in BorderRadius]: string;
  };
};

export const theme: DefaultTheme = {
  color: {
    main: '#DDEBFD',
    mainStrong: '#599BFC',
    lineGray: '#A1A1A1',
    btnOk: '#509CFF',
    btnWarn: '#FF7777',
    bgGray: '#E5E5E5',
    bgLightGray: '#F9F9F9',
    bgYellowNote: '#FFF9EE',
  },
  studyRoomButton: {
    large: {
      width: "439px",
      height: "77px",
    },
    medium: {
      width: "328px",
      height: "68px",
    },
    small: {
      width: "262px",
      height: "92px",
    },
  },
  borderRadius: {
    large: "15px",
    medium: "10px",
    small: "5px",
  },
};
