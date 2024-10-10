/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  // important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#1890FF",
        "primary-hover": "#40A9FF",
        "primary-transparent": "rgba(130, 49, 211, 0.082)",
        secondary: "#5840FF",
        "secondary-hover": "rgb(53, 32, 200)",
        "secondary-transparent": "rgba(88, 64, 255, 0.082)",
        "link-transparent": "rgba(88, 64, 255, 0.082)",
        success: "#01B81A",
        "success-hover": "rgb(13, 129, 29)",
        "success-transparent": "rgb( 1, 184, 26, 0.082)",
        pink: "#f2eafb",
        "pink-transparent": "rgb(242, 234, 251, 0.082)",
        warning: "#FA8B0C",
        "warning-transparent": "rgba(250, 139, 12, 0.082)",
        danger: "#ff4d4f",
        "danger-transparent": "rgb( 255, 15, 15, .082)",
        info: "#00AAFF",
        link: "#1890ff",
        "info-transparent": "rgba(0, 170, 255, 0.082)",
        dark: "#0A0A0A",
        "dark-transparent": "rgba(10, 10, 10, 0.082)",
        body: "#404040",
        "theme-gray": "#404040",
        "theme-grayDark": "rgb(255, 255, 255, .06)",
        "theme-gray-transparent": "rgba(64, 64, 64, 0.082)",
        light: "#747474",
        lightDark: "rgb(255, 255, 255, .06)",
        "light-extra": "#a0a0a0",
        "light-extraDark": "rgb(255, 255, 255, .06)",
        violet: "#5840ff",
        section: "#f4f5f7",
        breadcrumbs: "#666D92",
        active: "#01b81a",
        "active-transparent": "rgb( 1, 184, 26, 0.082)",
        done: "#01b81a",
        "done-transparent": "rgb( 1, 184, 26, 0.082)",
        deactivated: "#FA8B0C",
        "deactivated-transparent": "rgba(250, 139, 12, 0.082)",
        pending: "#FA8B0C",
        "pending-transparent": "rgba(250, 139, 12, 0.082)",
        blocked: "#ff0f0f",
        "blocked-transparent": "rgba(255, 15, 15, 0.082)",
        early: "#8231d3",
        late: "#fa8b0c",
        progress: "#ff4d4f",
        complete: "#01b81a",
        "google-plus": "rgb(240, 101, 72)",
        "google-plus-transparent": "rgba(240, 101, 72, 0.063)",
        google: "rgb(241, 67, 54)",
        "google-transparent": "rgba(241, 67, 54, 0.063)",
        facebook: "rgb(58, 88, 155)",
        "facebook-transparent": "rgba(58, 88, 155, 0.063)",
        youtube: "#FF0000",
        twitter: "rgb(3, 169, 244)",
        "twitter-transparent": "rgba(3, 169, 244, 0.063)",
        github: "rgb(9, 14, 48)",
        "github-transparent": "rgba(3, 169, 244, 0.063)",
        linkedin: "rgb(0, 122, 185)",
        "linkedin-transparent": "rgba(0, 122, 185, 0.063)",
        instagram: "rgb(209, 32, 143)",
        dribbble: "#c2185b",
        medium: "#66cdaa",
        "instagram-transparent": "rgba(209, 32, 143, 0.063)",
        "shadow-transparent": "rgba(130, 49, 211, 0.02)",
        "hbr-primary": "#6726A8",
        "hbr-secondary": "#3520C8",
        "hbr-success": "#0D811D",
        "hbr-info": "#0787C7",
        "hbr-warning": "#D9790A",
        "hbr-danger": "#CB0000",
        "hbr-dark": "#272525",
        "hbr-gray": "#585858",
        "hbr-light": "#585858",
        "hbr-light-extra": "#585858",
        regular: "#F1F2F6",
        normal: "#E3E6EF",
        deep: "#C6D0DC",
        regularDark: "rgb(255, 255, 255, .06)",
        normalDark: "rgb(255, 255, 255, .06)",
        deepDark: "rgb(255, 255, 255, .06)",
        regularBG: "#F8F9FB",
        normalBG: "#F4F5F7",
        deepBG: "#EFF0F3",
        insideBG: "#efeffe",
        white: "#ffffff",
        regularBGdark: "rgb(255, 255, 255, .10)",
        normalBGdark: "rgb(255, 255, 255, .10)",
        deepBGdark: "rgb(255, 255, 255, .10)",
        whiteDark: "rgb(255, 255, 255, .10)",
        currentColor: "currentColor",
        white87: "rgb(255, 255, 255, .87)",
        white60: "rgb(255, 255, 255, .60)",
        white30: "rgb(255, 255, 255, .30)",
        white20: "rgb(255, 255, 255, .20)",
        white10: "rgb(255, 255, 255, .10)",
        white06: "rgb(255, 255, 255, .06)",
      },
      boxShadow: {
        regular: "0 5px 20px rgba(160,160,160,0.05)",
        pricing: "0 5px 20px rgba(146,153,184,0.2)",
        action: "0 5px 20px rgba(64, 64, 64, 0.08)",
        box: "0 15px 25px rgba(146,153,184,0.2)",
        boxLarge: "0 10px 40px rgba(146,153,184,0.2)",
        custom: "0 15px 50px #9299b820",
        dot: "0 0 0 1px #fff",
        btn: "0 8px 13px rgba(130, 49 ,211, 0.13)",
        faq: "0 15px 40px rgba(116, 116 ,116, 0.08)",
      },
      borderWidth: {
        1: "1px",
        5: "5px",
      },
      borderRadius: {
        4: "4px",
        6: "6px",
        10: "10px",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Awesome: ["FontAwesome"],
      },
      fontSize: {
        10: ["10px", "14px"],
        11: ["11px", "15px"],
        13: ["13px", "18px"],
        15: ["15px", "24px"],
        17: ["17px", "26px"],
        22: ["22px", "30px"],
        42: ["42px", "62px"],
        58: ["58px", "86px"],
      },
      zIndex: {
        998: "998",
        99998: "99998",
      },
    },
    screens: {
      "4xl": { max: "1699px" },
      "3xl": { max: "1599px" },
      "2xl": { max: "1299px" },
      xl: { max: "1199px" },
      lg: { max: "991px" },
      md: { max: "767px" },
      sm: { max: "575px" },
      ssm: { max: "480px" },
      xs: { max: "380px" },
      xxs: { max: "320px" },
      "min-xxs": "320px",
      "min-xs": "380px",
      "min-ssm": "480px",
      "min-sm": "575px",
      "min-md": "768px",
      "min-lg": "991px",
      "min-xl": "1199px",
      "min-2xl": "1299px",
      "min-3xl": "1599px",
      "min-4xl": "1699px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
