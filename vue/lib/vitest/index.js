const vitestConfig = {
  test: {
    globals: true,
    watch: false,
    environment: "happy-dom",
    reporters: [
      ["junit", { outputFile: "junit_reports/TESTS.xml" }],
      ["vitest-sonar-reporter", { outputFile: "reports/ut_report.xml" }],
    ],
    coverage: {
      provider: "v8",
      reporter: [
        ["lcovonly", { outputFile: "lcov.info" }],
        "text-summary",
        "cobertura",
        "html",
      ],
      exclude: ["dist"],
    },
  },
};

export default vitestConfig;
