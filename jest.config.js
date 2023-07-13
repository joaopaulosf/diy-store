export default {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.js"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|avif|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/.jest/mocks/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
};
