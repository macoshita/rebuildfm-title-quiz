const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        twitter: '#1DA1F2'
      },
      aspectRatio: {
        a4: '1 / 1.4142'
      }
    }
  },

  plugins: []
};

module.exports = config;
