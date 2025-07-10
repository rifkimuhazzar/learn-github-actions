import core from "@actions/core";
// const core = require("@actions/core");
import exec from "@actions/exec";
// import github from "@actions/github";

(function run() {
  core.notice("FROM INSIDE FUNC: Hello from my custom JS action!");

  const bucketName = core.getInput("ini-bucket", { required: true });
  const bucketRegion = core.getInput("ini-bucket-region", { required: true });
  const distFolder = core.getInput("ini-dist-folder", { required: true });

  const s3Uri = `s3://${bucketName}`;
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

  const websiteUrl = `http://${bucketName}.s3-website-${bucketRegion}.amazonaws.com`;
  core.setOutput("ini-website-url", websiteUrl);
})();

core.notice("FROM OUTSIDE FUNC: Hello from my custom JS action!");
