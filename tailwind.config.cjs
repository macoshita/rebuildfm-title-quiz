const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      aspectRatio: {
        'a4': '1 / 1.4142',
      }
    }
  },

  plugins: []
};

module.exports = config;
