import {Gitlab} from '@gitbeaker/node';

const gitlab = new Gitlab({
  token: 'TODO'
})

async function main() {
  const issues = await gitlab.Issues.all({projectId: 19773524})
  console.log("### issues", issues);
}

main()

