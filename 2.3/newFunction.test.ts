// Importing two functions, myFunction and blockBuster, from the module located at "./newFunction"
import { myFunction, blockBuster } from "./newFunction";

// Describing the test suite for myFunction
describe("myFunction", () => {
  // Test case: Checking if myFunction returns "true" when passed the number 5
  it("returns the word 'true' if I pass the function the number 5", () => {
    expect(myFunction(5)).toBe("true");
  });

  // Test case: Checking if myFunction returns "false" when passed a number less than 5
  it("returns the word 'false' if I pass in a number less than 5", () => {
    expect(myFunction(1)).toBe("false");
  });

  // Test case: Checking if myFunction returns "big" when passed a number greater than 5
  it("returns the word 'big' if I pass in a number greater than 5", () => {
    expect(myFunction(100)).toBe("big");
  });

  // Test case: Checking if myFunction returns "negative" when passed a negative number
  it("returns the word 'negative' if a negative number is passed in", () => {
    expect(myFunction(-1)).toBe("negative");
  });
});

// Describing the test suite for blockBuster
describe("blockBuster", () => {
  // Test case: Checking if blockBuster returns "Star Wars" for the input "Movie One"
  it("returns the movie set for 'Movie One'", () => {
    expect(blockBuster("Movie One")).toBe("Star Wars");
  });

  // Test case: Checking if blockBuster returns "Dune" for the input "Movie Two"
  it("returns the movie set for 'Movie Two'", () => {
    expect(blockBuster("Movie Two")).toBe("Dune");
  });

  // Test case: Checking if blockBuster returns "Matrix" for the input "Movie Three"
  it("returns the movie set for 'Movie Three'", () => {
    expect(blockBuster("Movie Three")).toBe("Matrix");
  });

  // Test case: Checking if blockBuster returns "The Godfather" for the input "Movie Four"
  it("returns the movie set for 'Movie Four'", () => {
    expect(blockBuster("Movie Four")).toBe("The Godfather");
  });

  // Test case: Checking if blockBuster returns "Spider Man" for the input "Movie Five"
  it("returns the movie set for 'Movie Five'", () => {
    expect(blockBuster("Movie Five")).toBe("Spider Man");
  });

  // Test case: Checking if blockBuster returns a default message for an unrecognized movie input
  it("returns the default message for an unrecognized movie", () => {
    expect(blockBuster("Fast X")).toBe("I'm sorry we do not carry Fast X");
  });
});