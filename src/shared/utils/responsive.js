import { Dimensions, PixelRatio } from 'react-native';

const { height, width } = Dimensions.get('window');

/**
  * calculate responsive height value
  * @param {number} h height value
  * @returns {number} calcualted h value
  */
export const rh = (h) => PixelRatio.roundToNearestPixel(height * h / 100);

/**
  * calculate responsive width value
  * @param {number} w  width value
  * @returns {number} calcualted w value
  */
export const rw = (w) => PixelRatio.roundToNearestPixel(width * w / 100);

/**
  * calculate responsive font size value
  * @param {Number} f font size
  * @returns {number} calcualted f value
  */
export const rf = (f) => {
    return Math.sqrt((height * height) + (width * width)) * (f / 100);
};