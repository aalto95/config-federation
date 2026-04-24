const stylelintConfig = {
  extends: [
    "stylelint-config-property-sort-order-smacss",
    "stylelint-config-recommended-scss",
  ],
  rules: {
    "no-descending-specificity": null,
    "scss/operator-no-newline-after": null,
  },
};

export default stylelintConfig;
