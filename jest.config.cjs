module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.m?js$": "babel-jest",
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.tsx"],
  preset: "ts-jest",
  testMatch: ["<rootDir>/src/**/*.test.(ts|tsx)"],
  // For mocking imported SVG file
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/svgMock.tsx",
  },
};
