module.exports = {
  extends: "next/core-web-vitals",
  rules: {
    "react/no-unescaped-entities": "off", // Disable the rule causing deployment issues
  },
};