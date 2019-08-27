---
path: "/about/devops"
title: "Galasa as part of a DevOps delivery pipeline"
---
## What is DevOps?
DevOps is a set of processes that apply agile and lean principles across the entire software supply chain. DevOps enables a business to maximize the speed of its delivery of a product or service, from initial idea to production release, to stakeholder feedback to enhancements based on that feedback. You can achieve this capability by using a DevOps delivery pipeline. 

### Benefits of Galasa as part of a DevOps delivery pipeline
DevOps provides significant benefit in three key areas:

1.	Faster time to value
<p>Galasa provides the ability to automate functional, integration, and performance tests that are repeatable and reliable, enabling fast, efficient, and reliable software delivery through to production.</p>

2.	Increased capacity to innovate
<p>Galasa helps reduce time and rework, enabling people to work on higher-value activities.</p>

3.	Enhanced customer experience
<p>Galasa provides mechanisms to get early feedback from stakeholders about the software application that’s being delivered.</p>


### DevOps principles and Galasa
The three key principles of DevOps are:

•	Develop and test against production-like systems
<p>Galasa supports the DevOps concept "shift left", in which operations concerns move earlier in the software delivery life cycle, toward development. Galasa enables teams to test against systems that behave like the production system, so that they can see how the application behaves and performs well before it’s ready for deployment.</p>

<p>From an operations perspective, too, this capability has tremendous value. It enables the operations team to see early in the cycle how their environment will behave when it supports the application, thereby allowing them to create a fine-tuned, application-aware environment.</p>

•	Deploy with repeatable, reliable processes
<p>Galasa enables development and operations to support an agile (or at least iterative) software development process all the way through to production by using automation to run tests that are iterative, frequent, repeatable, and reliable.
Frequent deployments and early testing also allows teams to test the deployment processes themselves, thereby lowering the risk of deployment failures at release time.</p>

•	Monitor and validate operational quality
<p>Whenever an application is deployed and tested, Galasa captures all results in a single repository which makes output quicker and easier to analyse. Frequent monitoring provides early warning about operational and quality issues that may occur in production. Galasa captures these results in a format that all business stakeholders can understand and use, making sign-off between test environments simple and consistent.</p>

## DevOps concepts 

### Continuous integration
<p>Continuous integration is a practice in which software developers continuously or frequently integrate their work with that of other members of the development team and then test the integrated work. In the case of complex systems made up of multiple systems or services, developers also regularly integrate their work with other systems and services. Regular integration of results leads to early discovery and exposure of integration risks. In complex systems, it also exposes known and unknown risks — both technical and schedule-related.</p>

<p>Continuous integration adds tremendous value in DevOps by allowing large teams of developers, working on cross-technology components in multiple locations, to deliver software in an agile manner. It also ensures that each team’s work is continuously integrated with that of other development teams and then validated. Continuous integration thereby reduces risk and identifies issues earlier in the software development life cycle. </p>

### Continous delivery 
<p>Continuous integration naturally leads to the practice of continuous delivery: the process of automating the deployment of the software to the testing, system testing, staging, and production environments. Although some organizations stop short of production, those that adopt DevOps generally use the same automated process in all environments to improve efficiency and reduce the risk introduced by inconsistent processes.</p>

<p>In test environments, automating configuration, refreshing test data, and then deploying the software to the test environment followed by the execution of automated tests speeds up the feedback cycles of test results to development.</p>

### Continuous testing
Continuous integration has several goals:
<p>• Enabling ongoing testing and verification of code</p> 
<p>• Validating that the code produced and integrated with that of other developers and other components of the application functions and performs as designed</p> 
<p>• Continuously testing the application being developed</p>

<p>Continuous testing means testing earlier and continuously across the life cycle, which results in reduced costs, shortened testing cycles, and achieved continuous feedback on quality. This process is also known as "shift-left" testing, which stresses integrating development and testing activities to ensure quality is built in as early in the life cycle as possible and not something left to later. This is facilitated by adopting capabilities like automated testing and service virtualization. Service virtualization is the new capability for simulation of production-like environments and makes continuous testing feasible.</p>

From a process perspective, you need to adopt processes in three areas to enable continuous testing: 
<p>• Test environment provisioning and configuration</p> 
<p>• Test data management -  For any organization that wants to enable continuous testing, managing test data is an essential function. The number of tests that can be run and the frequency with which they’re run are limited by the amount of data that’s available for testing and the speed at which that data can be refreshed.</p>
<p>• Test integration, function, performance, and security -  tests and associated results can be stored and traceability established back to the code</p>

### Continuous deployment 
<p>Continuous release and deployment take the concept of continuous integration to the next step. The practice that enables release and deploy also enables the creation of a *delivery pipeline*. This pipeline facilitates continuous deployment of software to QA and then to production in an efficient, automated manner. The goal of continuous release and deployment is to release new features to customers and users as soon as possible.</p>

### Delivery pipeline
<p>A delivery pipeline consists of the stages an application goes through from development through to production. Figure  3-1 shows a typical set of stages. These stages may vary from one organization to another, however, and may also vary from one application to another based on the organization’s needs, software delivery process, and maturity. The level of automation may also vary. Some organizations fully automate their delivery pipelines; others put their software through manual checks and gates due to regulatory or company requirements. You don’t have to address all stages at once. Start by focusing on the critical parts of organization — not everything all at once — and then gradually broaden to include all stages.</p>


## How Galasa fits into a DevOps delivery pipeline
<p>Galasa's primary focus is on the continuous testing part of the pipeline, and specifically around the provision of scalable test automation for intregration, performance and regression testing. When an application is created or updated, the code must successfully run through a relevant suite of Galasa regression tests before it can move along the delivery pipeline. If the code passes all the tests, you can have confidence that the production deployment will be successful. The following image illustrates how the automated end-to-end pipeline process works in CICS:

![Flowchart showing how the CICS pipeline works](./cics-devops.png)

<p>A continuous delivery pipeline can be used to execute a set of Galasa tests in paralell with a single API call.  The pipeline can then inquire on the state of the executing tests and once all are completed decide how to progress to the next stage of the pipeline.</p>

<p>Galasa supports a "shift left" approach to testing, enabling tests to run simultaneously across different environments. These test suites can be triggered to run whenever a change set is delivered.</p>

<p>Galasa supports environment provisioning and configuration, including automatic clean up of environments, as well as a test data management capability. Test output is auotmatically recorded and stored in a central repository or locally on a laptop, making it quicker and easier to diagnose the cause of a failure. </p>

