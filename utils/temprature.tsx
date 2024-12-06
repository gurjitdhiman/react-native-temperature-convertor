const UNITS = {
  celsius: "ºC",
  fahrenheit: "ºF",
};

function convertTempratureTo(temprature: number, unitTo: string): number {
  if (isNaN(temprature)) {
    throw new Error("Invalid Temprature Value")
  } else if (unitTo === UNITS.celsius) {
    return (temprature - 32) / 1.8;
  } else if (unitTo == UNITS.fahrenheit) {
    return temprature * 1.8 + 32;
  } else {
    throw new Error("Invalid Unit")
  }
}

function getOppositeUnit(unit: string): string {
  return unit === UNITS.celsius ? UNITS.fahrenheit : UNITS.celsius;
}
function isColdTepmprature(temprature: number, unitTo: string): boolean {
  if (isNaN(temprature)) {
    throw new Error("Invalid Temprature Value")
  } else if (unitTo === UNITS.celsius) {
    return temprature <= 0
  } else if (unitTo == UNITS.fahrenheit) {
    return temprature <= 32
  } else {
    throw new Error("Invalid Unit")
  }
}
export { UNITS, convertTempratureTo, getOppositeUnit, isColdTepmprature};
