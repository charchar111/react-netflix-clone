import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: string;
    bgColors: {
      background: string;
      surface1: string;
      surface2: string;
      primary: string;
      secondary: string;
      modal: string;
    };
    textColors: {
      background: string;
      surface1: string;
      surface2: string;
      primary: string;
      secondary: string;
    };
    borderColors: { background: string };
    scrollbar: {
      bgcolor: string;
      thumbcolor: string;
    };
  }
}
