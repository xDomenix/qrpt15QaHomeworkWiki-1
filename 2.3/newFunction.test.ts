// Importing our function called myFunction from our newFunction.ts file so we can use it in our test.
import { myFunction, blockBuster } from "./newFunction";

describe("myFunction", () => {
  it("returns the word 'true' if I pass the function the number 5", () => {
    expect(myFunction(5)).toBe("true");
  });

  it("returns the word 'false' if I pass in a number less than 5", () => {
    expect(myFunction(1)).toBe("false");
  });

  it("returns the word 'big' if I pass in a number greater than 5", () => {
    expect(myFunction(100)).toBe("big");
  });

  it("returns the word 'negative' if a negative number is passed in", () => {
    expect(myFunction(-1)).toBe("negative");
  });
});

describe("blockBuster", () => {
  it("returns the movie set for 'Movie One'", () => {
    expect(blockBuster("Movie One")).toBe("Star Wars");
  });

  it("returns the movie set for 'Movie Two'", () => {
    expect(blockBuster("Movie Two")).toBe("Dune");
  });

  it("returns the movie set for 'Movie Three'", () => {
    expect(blockBuster("Movie Three")).toBe("Matrix");
  });

  it("returns the movie set for 'Movie Four'", () => {
    expect(blockBuster("Movie Four")).toBe("The Godfather");
  });

  it("returns the movie set for 'Movie Five'", () => {
    expect(blockBuster("Movie Five")).toBe("Spider Man");
  });

  it("returns the default message for an unrecognized movie", () => {
    expect(blockBuster("Fast X")).toBe("I'm sorry we do not carry Fast X");
  });
});
