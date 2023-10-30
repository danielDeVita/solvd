/* 

                    ***************************************************
                    ***************************************************
                    ***************************************************
                                    TESTING
                    ***************************************************
                    ***************************************************
                    ***************************************************


Testing definition:
A test is a piece of code that checks if the program works as expected. It can be used to verify that the program behaves correctly under

Reasons for testing:
1. To ensure the software is working as expected and to identify any defects or errors in its functionality.
2. To evaluate the effectiveness of changes made during development.
3. To improve product quality by identifying potential problems before they become critical issues.
4. To reduce costs associated with debugging, maintenance, and support activities.

Testing principles:
1) Testing shows presense of defects
2) Exhaustive testing is impossible
3) Early testing
4) Defects clustering
5) Pesticide paradox
6) Testing is context depending
7) Abscence of errors fallacy

Quality Control:
1) Inspection of products at various stages of production.
2) Checking of finished goods against specifications.
3) Monitoring of work processes.
4) Review of reports and records.

Quality Assurance:
1) Quality assurance involves planning, designing, implementing, verifying, and controlling a process that results in meeting customer requirements.

Verification:
When we check that a project follows the criteria that we accept at the start

Validation:
Checking that the project follows expectations from users

Bug:
Difference between real result and expected result

    - Bug report attributes:
    1. id
    2. summary
    3. description
    4. steps to reproduce
    5. actual result
    6. expected result
    7. attachments
    8. severity
    9. status

    - Bug life cycle:
    created ==> assignToManager ==> assignToDeveloper ==> prioritize ==> fix ==> test ==> close

    - Severity:
    the harm that a bug applies to the project

    s1: Blocker (highest severity)
    s2: Critical (when businnes logic is not working)
    s3: Major (sql injection for example)
    s4: Minor
    s5: Trivial (misspeling, wrong gradient, etc...)

    - Priority:
    how fast the bug should be taken care of

    p1: High
    p2: Medium
    p3: Low

Task Type:
    1)Epic:
    A large piece of functionality or feature that can't be done in one single commit.
    It has multiple tasks inside it.

    2)Requirement:
    The smallest unit of work in Scrum. This represents a user story.

    3)Task:
    Small pieces of work within requirements.

    4)Sub-Task:
    
    5)Bug:

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

Testing:

By Access:
1) Black box (tester doesn't have acces to the code)
2) Grey box (tester has partial access to code)
3) White box (tester has access to the code)

By Datalization:
1) Module (testing separate parts)
2) Integrational (how two different parts work with each other)
3) System (check if system follows expectations from user)
4) Acceptance (check if project follow requirements)

By Optimization:
1) Manual (done by oneself)
2) Automated (tools like selenium)


    Classifaction by level of functioning testing: (3 levels)
    1) Smoke testing (check only critical functions)
    2) Critical path (check every possible thing a user can do)
    3) Extended (check everything)

By Purpose:
1) Functional: see if app works fine (clicking, inserting parameters, check every possible test case)
2) Non-Functional: testing system itself
    Performance testing (how stable the app is in different scenarios)
    Load testing (many requests to see how it behaves)
    Scalability testing (???)
    Stress testing (try to handle heavy amount of requets, from few to many)
    Instalation testing (how the server installs and its functionalities after installation)
    Usability testing (???)
    Security testint
    Regression testing (we test one feeature and then we test the other funcionalities to check that everything works still)

*/