const stylelintConfig = {
  extends: [
    "stylelint-config-property-sort-order-smacss",
    "stylelint-config-recommended-scss",
    "stylelint-config-html/vue",
  ],
  rules: {
    "no-descending-specificity": null,
    "scss/operator-no-newline-after": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["deep"],
      },
    ],
  },
};

export default stylelintConfig;
