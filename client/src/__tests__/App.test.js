
function say() {
  return "hi";
}

test("return hi", () => {
  expect(say()).toBe("hi");
});

