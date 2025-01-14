interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
  console.log(
    `usage:
      -h, --help: show this help message`
  );
} else {
  console.log("command not found");
}
