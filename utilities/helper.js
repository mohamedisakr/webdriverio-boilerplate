const waitForTextChange = (element, text, timeout = 3000) => {
  browser.waitUntil(
    function () {
      return element.getText() === text;
    },
    { timeout, timeoutMsg: `expected text to be different after ${timeout}s` }
  );
};

export { waitForTextChange };
