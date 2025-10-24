import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');


export const wp = (percent) => {
const value = (percent * width) / 100;
return Math.round(value);
};


export const hp = (percent) => {
const value = (percent * height) / 100;
return Math.round(value);
};