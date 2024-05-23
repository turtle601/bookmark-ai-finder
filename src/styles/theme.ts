export const color = {
  black: 'black',
  white: 'white',

  gray800: '#282828',
  gray700: '#5e5e5e',
  gray600: '#727272',
  gray500: '#a6a6a6',
  gray400: '#bbbbbb',
  gray300: '#dddddd',
  gray200: '#e8e8e8',
  gray100: '#f3f3f3',

  blue800: '#004765',
  blue700: '#006f9f',
  blue600: '#009ee2',
  blue500: '#00b2ff',
  blue400: '#80d9ff',
  blue300: '#bbebff',
  blue200: '#d8f3ff',
  blue100: '#eaf9ff',

  red300: '#c50000',
  red200: '#ea0000',
  red100: '#fff2f2',

  green: '#2FC56E',
} as const;

export const spacer = {
  spacing0: '0',
  spacing1: '4px',
  spacing2: '8px',
  'spacing2.5': '12px',
  spacing3: '16px',
  spacing4: '24px',
  spacing5: '32px',
  spacing6: '48px',
  spacing7: '64px',
  spacing8: '96px',
  spacing9: '128px',
} as const;

export const borderRadius = {
  small: '4px',
  medium: '8px',
  large: '16px',
  circle: '50%',
} as const;

export const boxShadow = {
  shadow1: '0px 0px 0px 1px rgba(0, 0, 0, 0.05)',
  shadow2: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
  shadow3:
    '0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)',
  shadow4:
    '0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)',
  shadow5: '1px 2px 4px 0px rgba(0, 0, 0, 0.15)',
  shadow6:
    '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
  shadow7:
    '0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)',
  shadow8: '0px 0px 5px 0px rgba(0, 0, 0, 0.15)',
  shadow9: '0px 0px 10px 0px rgba(0, 0, 0, 0.20)',
  shadow10: '0px 2px 4px 0px rgba(0, 0, 0, 0.06) inset',
} as const;
