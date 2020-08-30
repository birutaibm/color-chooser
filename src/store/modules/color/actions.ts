export function changeBackgroundHue(hue: number) {
  return {
    type: 'CHANGE_BACKGROUND_HUE',
    payload: {
      hue,
    }
  };
}

export function changeBackgroundSaturation(saturation: number) {
  return {
    type: 'CHANGE_BACKGROUND_SATURATION',
    payload: {
      saturation,
    }
  };
}

export function changeBackgroundLightness(lightness: number) {
  return {
    type: 'CHANGE_BACKGROUND_LIGHTNESS',
    payload: {
      lightness,
    }
  };
}

export function changeForegroundHue(hue: number) {
  return {
    type: 'CHANGE_FOREGROUND_HUE',
    payload: {
      hue,
    }
  };
}

export function changeForegroundSaturation(saturation: number) {
  return {
    type: 'CHANGE_FOREGROUND_SATURATION',
    payload: {
      saturation,
    }
  };
}

export function changeForegroundLightness(lightness: number) {
  return {
    type: 'CHANGE_FOREGROUND_LIGHTNESS',
    payload: {
      lightness,
    }
  };
}
