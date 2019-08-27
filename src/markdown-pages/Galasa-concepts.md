---
path: "/about/concepts"
title: "Galasa concepts"
---
# Key concepts

### Galasa Testing
Galasa offers automated and scalable scheduling and execution of reliable, repeatable tests. 

### Galasa test case  
A Galasa test case is a simple Java program that tests a discrete piece of function, using facilities provided by the Galasa framework to streamline and simplify the test code.

### Galasa test class 

### Galasa test method

### Galasa Automation

### Galasa Test Catalog

### Galasa's Concept of Managers
Complex, repetitive, commonly needed code is abstracted out of test cases and into Galasa Managers. A Galasa Manager then provides an interface that enables you to control, provision and use an application, tool or product.

A Manager focuses only on its specific application, tool or product, which means that each Manager is responsible for a specific aspect of the test environment. For example, the CICS Manager manages the CICS resources for each CICS region, and the z/OS batch Manager is responsible for running batch jobs.

The various Managers work with each other to perform a joint task by sharing information and calling on other Managers to complete tasks. This work is coordinated by the Galasa Framework. Take a look at our recipes to see some useful Manager combinations.

Managers reduce the amount of boilerplate code within a test. The test code becomes simpler and easier to write, understand, and maintain and the focus of a test's development shifts to validating application changes, rather than marshaling environmental resources.


## What's next?
Galasa provides a suite of Managers for interfacing with common tools, products and operating systems. The list of currently available Managers and what they do is shown in _this table_. More Managers will be available in future releases. If you have an idea for a Manager that you would really like to see developed, let us know on _Slack_. Alternatively, you can write your own Managers for your own applications, and _here are some examples_ that can help you get started. Share your Managers with the _Community_ – we’d love to see what you come up with! Check out the _contributor guidelines here_ and let's start making cool Galasa stuff together!


