class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
  get kelvin(){
    return this.celsius + 273.15;
  }
  set kelvin(value) {
    this.celsius = value - 273.15;
  }
  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
  static fromKelvin(value) {
    return new Temperature(value - 273.15);
  }
}