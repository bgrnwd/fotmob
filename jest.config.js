/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
   transform: {
        '^.+\\.tsx?$':[
        'ts-jest', {
            useESM: true
        }]
    },
    preset: 'ts-jest/presets/js-with-ts-esm',
};
