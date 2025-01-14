const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
  console.log(
    `Usage:
      -h, --help: Show this help message`)
}