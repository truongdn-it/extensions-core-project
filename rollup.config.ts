export default [
  {
    input: 'src/extensions/background.ts',
    output: {
      file: 'dist/background.js',
      format: 'es',
    },
  },
  {
    input: 'src/extensions/content-script.ts',
    output: [
      {
        file: 'dist/content-script.js',
        format: 'es',
      },
    ],
  },
];
