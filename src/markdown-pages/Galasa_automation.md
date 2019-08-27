---
path: "/about/automation"
title: The benefits of test automation with Galasa
---

The pressure to release quality software as quickly as possible has never been greater. As a result, the traditional 
waterfall approach is falling out of favour. Automated testing is key to adopting an agile approach to development. If you aren’t running automated tests, you end up falling into waterfall mode, and cannot deliver changes quickly and reliably. If you're already following an agile model, take advantage of the benefits that Galasa provides to enhance your delivery pipeline.  

## Why automate with Galasa?
Automated testing and agile delivery are traditionally seen as being available only in greefield projects, but with the introduction of Galasa, you can be agile in a z/OS environment as well. Automated Testing on z/OS is not a myth, we have developed the tools to get us there and you can now build on our experience.

## Benefits of Galasa
- A great fit for automating a wide set of test disciplines such as functional and system level tests. However, its biggest benefit is that it can be used to create integration level tests.
- Provides the capability to functionally test a range of interfaces from traditional 3270 through to web browser and selenium-based tests.  
- Integrates with open source test tools, such as selenium-based tooling, to allow tests that use these tools to integrate and be executed and reported alongside your other tests.
- Integrates with z/OS, enabling any test to aggregate information from a range of sources to verify the result of a test case.

## Targeted testing without limitations
Testing an endpoint, whether it be a 3270 terminal, a REST API or a web service is a simple operation and there are plenty of tools 
that enable you to accomplish this task.  However, there are  limitations to some of these tools:

-	Most of the tools need to be manually operated and so limit their effectiveness in a continuous delivery pipeline
-	The tools cannot contextually bind to either a provisioned, or pre-existing environment in an intelligent manner.
-	The tests cannot utilise a mix of technologies.  For example, let’s say you need to examine a CICS or a z/OS resource to validate that the response from the REST endpoint you are testing is correct.  How can the test get this information without the tester understanding how to access it?

Galasa makes it simple for a test to access, drive and interrogate a range of z/OS, distributed and open source tools and integrate them together within the same test class.

Tests written for Galasa can be run locally on your computer for manual debugging, or can be scheduled to run on a server in automation mode - great for overnight runs or when you need to run tests in parallel or at scale. 

