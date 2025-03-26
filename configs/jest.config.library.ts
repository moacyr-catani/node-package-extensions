/** @type {import('ts-jest').JestConfigWithTsJest} */
export default 
{
    collectCoverage: true,
    coverageDirectory: '<rootDir>/tests/jest/coverage/library',
    coveragePathIgnorePatterns: 
    [
        "/tests/"
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', "d.ts"],
    preset: "ts-jest/presets/js-with-ts", //'ts-jest',
    
    maxWorkers: 1,
    reporters:       
    [
        'default'
    ],
    rootDir: "./..",
    testEnvironment: 'node',
    testMatch:       
    [
        '<rootDir>/tests/jest/library/**/*.test.ts'
    ],
    testPathIgnorePatterns: 
    [
        '/node_modules/'
    ],
    transform: 
    {
        "^.+\\.ts?$": 
        [
          "ts-jest",
          {
            useESM: true,
            tsconfig: "<rootDir>/tsconfig.json"
          },
        ]
      },
      extensionsToTreatAsEsm: [".ts"],
      moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
      },
      transformIgnorePatterns: 
      [
        ".+\\.js?$"
      ],
      verbose: true,
};