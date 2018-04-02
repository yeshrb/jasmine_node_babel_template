"use strict";

describe("第三章 对象", function () {
  var empty_object = {};
  var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
  };
  var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
      IATA: "SYD",
      time: "2004-09-22 14:55",
      city: "Sydney"
    },
    arrival: {
      IATA: "LAX",
      time: "2004-09-23",
      city: "Los Angeles"
    }
  };
  describe("检索", function () {
    it('使用形如["str"]可以获得对象属性', function () {
      expect(stooge["first-name"]).toEqual("Jerome");
    });

    it('使用形如Obj.key1可以获得对象属性', function () {
      expect(flight.airline).toEqual("Oceanic");
    });
    it('不能使用形如Obj."key1"获得对象属性', function () {
      expect(stooge).toEqual("Oceanic");
    });
  });
});
//# sourceMappingURL=03-objectsSpec.js.map