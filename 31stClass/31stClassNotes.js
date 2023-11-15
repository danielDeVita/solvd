/* 

                                    CI/CD:

Continious Integration:

Makes sure new changes follow some main rules (linting, testing, etc...)

- Automatically build and test the code whenever changes are made to it.
- Builds should be fast, so they can run frequently.


Continious Delivery:
Deploys the application automatically after a successful build.

- Deployments should not require manual intervention.

//////////////////////////////

We provide some CI/CD requirements (schema with steps and actiosn for CI/CD)

    Goals =
Automate testing and delivery for the project
Automate deployment to different environments
Minimize errors (due to testing every time we merge to master)

    Stages=
PLAN==>CODE==>BUILD==>TEST==>RELEASE==>DEPLOY==>SUPPORT

CI = build-->test-->release
CD = release-->deploy-->support

//////////////////////////////

Plus:
1)minimizes delivery time
2)ability to check diff variants
3)quality is increased

Minus:
1)communication problems
2)experience requirements

//////////////////////////////

System for CD/CD:
- Jenkins - open source automated continuous integration server
- GitLab CI - free online service that integrates well with gitlab
- Travis CI - free online service that integrates well with GitHub
- CircleCI - paid service that integrates well with GitHub
- GitHub Actions:
    free if you use public repositories
    uses YAML syntax

How to create own GitHub Actions:
- on the root folder of project there is hidden folder "github"
on that folde we should create a folder called "workflows",
on that folder we should create a file called "my-workflow.yml"

example of that 'my-workflow.yml':

name: CI
on: (where it should run)
    push:
        branches:["master","develop"]
    pull-request:
        branches:["master"]
    commit:
        branches:["master"]

jobs:
    build_and_test:
    runs-on: ubuntu-latest
    steps:
        - uses:actions/checkout@v3
        - name: Install modules
        run: npm ci
        - name: Linting
        run: npm run lint


///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////


                        Development Models:
    
1)Waterfall Model:
- one step after another, in sequence
- no parallelism between tasks
- each task has to finish before next starts

(plan-->design-->code-->test-->support)

2)V Model:
    
        businnes requirements                           e2e testing
            functional requirements                 function testing
                create architecture             integration testing
                            realization     unit testing
                                       code

(for every stage there is testing)

3)Incremental Model (multi-waterfall):
start planning==>
                planning requirements==>
                                        estimating & developing==>testing==>
                                                                             realizing==>   
                                                                                        final release

4)Rapid Application Development Model (RAD model):
- start with a small set of features and add more as needed.

    1)analyze and fast plan
    (infinite loop:)
    2)businnes requirements
    3)data modelling
    4)processing modelling
    5)development
    6)testing
    (end of loop)
    7)release

*/