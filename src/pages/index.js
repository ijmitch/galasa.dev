import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import KeyFeature from "../components/key-feature"
import Footer from "../components/footer"
import Announcement from "../components/announcement"
import SEO from "../components/seo"

import indexStyles from "./index.module.scss"
import Button from "../components/button"

import consts from "../data/consts"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className={indexStyles.heroContainer}>
      <div>
        <h1 className={indexStyles.heroTitle}>
          Deep integration testing for power-seeking testers
        </h1>
        <p className={indexStyles.heroDescription}>
          Start running repeatable, reliable, automated tests and deliver your
          software changes faster and with confidence.
        </p>
        <div className={indexStyles.heroButtons}>
          <Button target={"/about"}>Learn more</Button>
        </div>
      </div>
    </div>
    <div className={indexStyles.announcementContainer}>
      <Announcement title="We're excited to launch Galasa!">
        Follow us on{" "}
        <OutboundLink href={consts.twitter_url}>Twitter</OutboundLink>, track
        our progress on{" "}
        <OutboundLink href={consts.github_org_url}>GitHub</OutboundLink> and{" "}
        <OutboundLink href={consts.spectrum_url}>chat with us</OutboundLink> to
        see how Galasa can help you. The first Beta release of Galasa, 0.3.0,
        will be available soon.
      </Announcement>
    </div>
    <div className={indexStyles.keyFeatureContainer}>
      <KeyFeature title="Lighten the load with automation">
        With Galasa you can run reliable, repeatable, scalable, automated
        integration tests instead of time-consuming manual ones. Use the time
        saved to focus on designing more complex tests to root out those
        hard-to-find application defects.
      </KeyFeature>
      <KeyFeature title="Integrate across systems">
        Galasa integrates easily into your{" "}
        <Link to="/about/devops">DevOps strategy</Link> and can be used
        alongside other test tools. Able to access z/OS files and commands,
        Galasa comes with extensive pluggable support for integration with z/OS
        subsystems.
      </KeyFeature>
      <KeyFeature title="Get the test data you need, fast">
        Galasa can integrate with your test data strategy by helping you to
        provision new or existing test data records. Galasa can also lock test
        data so that many tests can run in parallel against the same test data
        pool, making it easy to repeat tests under identical conditions for
        swift debugging.
      </KeyFeature>
      <KeyFeature title="Fly through test cases">
        Use Galasa to run large numbers of tests across different environments
        in parallel - no environment is too complex. You can use an existing
        environment, or provision an environment specifically for your own use.
      </KeyFeature>
      <KeyFeature title="Speed up diagnosis">
        Galasa automatically records test artifacts and stores the results in a
        single repository - a single place to search all test output. This makes
        it easy to quickly identify the cause of a failure and run tests locally
        to assist with debugging.
      </KeyFeature>
      <KeyFeature title="Environmentally friendly">
        With Galasa you can run the same test in different test environments
        without changing a single line of code. Provisioned environments are
        automatically deprovisioned at test completion, leaving a clean test
        system state ready for the next tests.
      </KeyFeature>
    </div>
    <Footer />
  </>
)

export default IndexPage
