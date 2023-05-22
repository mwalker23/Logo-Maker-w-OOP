const {Shapes, Circle,Square,Triangle} =require('./shapes');

test('test to set a color to class', () => {
    const shape= new Shapes();
    shape.setColor("blue"); 
    expect(shape.color).toBe("blue");
  });

  test('test to set a color to class', () => {
    const shape= new Circle ();
    shape.setColor("yellow"); 
    expect(shape.color).toBe("yellow");
    expect(shape.render()).toBe(`<circle cx="25" cy="75" r="20" stroke="yellow" fill="yellow" stroke-width="5"/>`);
  });

  test('test to set a color to class', () => {
    const shape= new Square ();
    shape.setColor("purple"); 
    expect(shape.color).toBe("purple");
    expect(shape.render()).toBe(`<rect x="10" y="10" width="30" height="30" stroke="purple" fill="purple" stroke-width="5"/>`);
  });

  test('test to set a color to class', () => {
    const shape= new Triangle ();
    shape.setColor("green"); 
    expect(shape.color).toBe("green");
    expect(shape.render()).toBe(`<polygon points="200,10 250,210 160,210" stroke="green" fill="green" stroke-width="5" />`);
  });