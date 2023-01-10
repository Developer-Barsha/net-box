module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'primary':'#999',
      'secondary':'#222',
    },
  },
    plugins: [require("daisyui")],
    daisyui: {
      themes: [
        {
          mytheme: {
            secondary: "#bccedf",
            primary: "#d0deed",
            accent: "#337ab7",
            neutral: "#3d4451",
            "base-100": "#ffffff",
          },
        },
      ],
    }
}