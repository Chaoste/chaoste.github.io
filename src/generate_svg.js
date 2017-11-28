// triangle.selected = true;

const triangle = (center, radius, rotation, color) => {
  var triangle = new Path.RegularPolygon({
    center: center || [80, 70],
    sides: 3,
    radius: radius || 50,
    fillColor: color || '#e9e9ff',
    rotation: rotation || 0,
  });
};

const LIGHT_LIGHT_GREY = 'rgba(210, 210, 210, 0.8)';
const LIGHT_GREY = 'rgba(180, 180, 180, 0.8)';
const DARK_GREY = 'rgba(150, 150, 150, 0.8)';
const LIGHT_LIGHT_BLUE = 'rgba(200, 200, 240, 0.8)';
const LIGHT_BLUE = 'rgba(160, 160, 200, 0.8)';
const BLUE = 'rgba(140, 140, 180, 0.8)';
const DARK_BLUE = 'rgba(120, 120, 160, 0.8)';

triangle([90, 18], 80, 145, BLUE);
triangle([40, 70], 95, 85, DARK_GREY);
triangle([130, 120], 60, 300, BLUE);
triangle([10, 90], 50, 60, DARK_BLUE);
triangle([100, 95], 70, 25, LIGHT_LIGHT_BLUE);
triangle([155, 80], 80, 205, LIGHT_GREY);
triangle([347, 243], 100, 120, DARK_GREY);
triangle([191, 285], 133, 205, LIGHT_LIGHT_GREY);
triangle([88, 280], 140, 25, LIGHT_GREY);
triangle([60, 175], 150, 0, LIGHT_LIGHT_BLUE);
triangle([126, 383], 140, 60, DARK_GREY);
triangle([10, 370], 120, 0, LIGHT_LIGHT_BLUE);
triangle([90, 370], 120, 180, LIGHT_BLUE);
triangle([274, 105], 130, 25, LIGHT_BLUE);
triangle([392, 135], 180, 205, LIGHT_BLUE);
triangle([315, -17], 150, 25, LIGHT_LIGHT_GREY);
triangle([240, 200], 110, 60, DARK_BLUE);
triangle([275, 364], 170, 240, DARK_BLUE);
triangle([830, 300], 180, 60, LIGHT_LIGHT_BLUE);
triangle([610, 147], 180, 25, DARK_BLUE);
triangle([774, 119], 130, 85, DARK_BLUE);
triangle([833, 190], 120, 25, LIGHT_GREY);
triangle([992, 130], 160, 85, DARK_BLUE);
triangle([878, 86], 115, 0, DARK_GREY);
triangle([800, 56], 100, 60, LIGHT_LIGHT_GREY);
triangle([554, 91], 230, 0, LIGHT_LIGHT_BLUE);
triangle([550, 318], 180, 60, LIGHT_LIGHT_GREY);
triangle([638, 350], 130, 85, DARK_GREY);
triangle([922, 350], 120, 0, LIGHT_GREY);
triangle([914, 350], 80, 85, DARK_BLUE);
triangle([635, 406], 145, 0, LIGHT_BLUE);
triangle([768, 295], 100, 0, LIGHT_BLUE);
triangle([791, 407], 100, 60, LIGHT_LIGHT_GREY);

const downloadAsSVG = fileName => {
  if (!fileName) {
    fileName = 'paperjs_example.svg';
  }

  const url =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(paper.project.exportSVG({ asString: true }));

  const link = document.createElement('a');
  link.download = fileName;
  link.href = url;
  link.click();
};

// downloadAsSVG();

// http://sketch.paperjs.org/#S/jVbbTttAEP2VrXmII9Jge31HVKIUUVRUISiVKoLQYm+CwfFGtgO0kH/vzPqS2HECibxJvOfM5cysM69KwqZc8ZXLR54H98pACUSIv0fpKNnbI3kasWQS82HGYx7kPCQHcG/O93Efr0AkWV7DYFcNeJLzdEBSFkbzDD5FzvJIJAMSiFikfXLwhbwilcDriaWr5IQ/k3OW3w8v+GQes/RcxH8nIlFrPL4KB375Sd7eyLWrDYij3QxWYVkU8swntHGzCMovP5FraQ3AOIrjI4zTL8JFSG+He9wbj3tNU2Vefv0NsUtri74UadGS6uz05Puv22I9uTj+A1n30skdUw0dklgu2tDt9/YJ1KC3E8hXb79tpcHXUYTlsspnIb5X+d8OL3606BYy62WVbof4XndfrF/Pro6XSWgYv1zMdhJmYIbjdSsNvm5jAHZlpOZDDhrT7hr0JhHdFUs7e1dzNeasZd+kG8g0KuerdBrQwCnFx6tqV/Xak95uBkSKbloDGVJR9iXKLHuTeABw4aq1byN1WgQBWAyCogJdFrE9PERhoRBZ57OORKh1gxGApOC8Xbk1hoVRamVShlZTugKmpoOFpoCWnqSAm9PzdEC7GI1OacP4ZheuixyMRxbX2BqPbB5HOpA9/IF0DRuEdmll396aABZFllIm+gHzXpMhW3Mz2nBMFLIQqJFsF5p6BuIkulWrTrgO2591pxKn3QxdCcszDAcROfp7vWY4YJHaJoKd6gGwEe3SosOr6O0PqGnr8pw5dcbWFgeOFFP3KjHdbWAX+1H36kJtbzOvUF6i7XdNO9DBri0ltGTTbOwvF8+QZVenqS1JF8WyIEtPB4pBP9aSFhafysdWp/Cd54pCDtTS1rTsVMcwanDjmHSCdbMCu+8paVPYNTWpj2mtGO4sv40PDvnok2JuB+OTydSc95XH6yniz8N/Qkzh30Nf3oVJJhTPSSxYeJhd/j6B3fE8CeRgoMJYwX/CpNUvRp9yRojG6qfWznIMkXfByEiZsRlPH7Jb/sKmM5zFniYjpQQvVsxhCPM0lpyQ5cyPpmzC9wC++zKN9+f52B2MFLJLeIJT3tXF6ZGYzkQCc5QqfQxnqXiAMW/IX2YizSEJ9ZVllyBUMvFx7Fv0lzKUDuMoeQSPoQjmUzA0DFLOcn4cc/yljhQ2UgoO4BE7rERCfcosG/v3KR/DHiTSuB3EUfColjNVFQP8QTc0h30YYe8ghMeZiJI8U/zrm8V/
