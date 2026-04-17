import { LuListTodo } from "react-icons/lu";
import ProcessHighlightLayout from "../elements/ProcessHighlightLayout";
import { FiFigma } from "react-icons/fi";
import { GrBusinessService, GrDeploy, GrFanOption } from "react-icons/gr";
import { FaBookOpen, FaDatabase, FaWrench } from "react-icons/fa";
import { PiStackDuotone } from "react-icons/pi";
import { SiAlwaysdata, SiBaremetrics } from "react-icons/si";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { RiGlobalFill, RiSurveyLine } from "react-icons/ri";
import { MdArchitecture } from "react-icons/md";
import { TbBrandSpeedtest } from "react-icons/tb";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const MISSION_CONTROL_PROMPTS: {
  stage: string;
  mc: string[];
  vincentai: string[];
  task: React.ReactNode;
}[] = [
  {
    stage: "LIFT OFF",
    mc: [
      "Our mission is to reach out to the stars.",
      "The spaceship is ready for launch.",
      "Countdown initiated: 3... 2... 1... Liftoff!",
    ],
    vincentai: [
      "I am Vincent AI - efficient and resourceful. Let me walk you through the processes involved in building an application.",
      "To get started, let's start with the following:",
    ],
    task: (
      <>
        <ProcessHighlightLayout>
          <div className="md:inline flex flex-row items-center gap-4">
            <LuListTodo size={32} />
            <p>
              Define
              <br />
              Requirements
            </p>
          </div>
          <p className="text-xs text-white/70 mt-auto">
            establish clear specifications,
            <br />
            build user stories
          </p>
        </ProcessHighlightLayout>
        <div className="border md:border-b border-l border-white/20 md:w-5 md:h-0 h-5" />
        <ProcessHighlightLayout>
          <div className="md:inline flex flex-row items-center gap-4">
            <FiFigma size={32} />
            <p>
              Design
              <br />
              Prototype
            </p>
          </div>
          <p className="text-xs text-white/70 mt-auto">
            create low- to
            <br />
            high-fidelity interactive prototypes
          </p>
        </ProcessHighlightLayout>
      </>
    ),
  },
  {
    stage: "NOMINAL",
    mc: [
      "We are off the ground!",
      "Thrusters: Positive. Trajectory: Positive.",
      "Onboard Personnel: Looking good~",
    ],
    vincentai: [
      "Now that we have a defined prototype, let's make it into something tangible. Moving from ideation to deployment.",
    ],
    task: (
      <>
        <ProcessHighlightLayout>
          <div className="md:inline flex flex-row items-center gap-4">
            <PiStackDuotone size={32} />
            <p>Choosing Architecture</p>
          </div>
          <p className="text-xs text-white/70 mt-auto">
            tech stack, cloud provider, frameworks
          </p>
        </ProcessHighlightLayout>
        <div className="border md:border-b border-l border-white/20 md:w-5 h-5" />
        <ProcessHighlightLayout>
          <div className="md:inline flex flex-row items-center gap-4">
            <GrDeploy size={32} />
            <p>
              Rapid MVP
              <br />
              Deployment
            </p>
          </div>
          <p className="text-xs text-white/70 mt-auto">
            core features implemented; working end-to-end
          </p>
        </ProcessHighlightLayout>
        <div className="border md:border-b border-l border-white/20 md:w-5 h-5" />
        <ProcessHighlightLayout>
          <div className="md:inline flex flex-row items-center gap-4">
            <FaDatabase size={32} />
            <p>Base Integrations</p>
          </div>
          <p className="text-xs text-white/70 mt-auto">
            APIs, database, authentication
          </p>
        </ProcessHighlightLayout>
      </>
    ),
  },
  {
    stage: "SUPERSONIC",
    mc: [
      "Vehicle is reaching supersonic.",
      "At maximum dynamic pressure - Max Q.",
      "Reaching orbit.",
    ],
    vincentai: [
      "We have a working application. Moving my focus to refine existing features and scaling performance as needed.",
      "Should I scale beyond the initial concept?",
    ],
    task: (
      <>
        <ProcessHighlightLayout>
          <div className="md:inline flex flex-row items-center gap-4">
            <GrBusinessService size={32} />
            <p>
              Align with
              <br />
              Business Needs
            </p>
          </div>
          <p className="text-xs text-white/70 mt-auto">
            business-specific nuance,
            <br />
            speed vs scalability vs cost
          </p>
        </ProcessHighlightLayout>
        <div className="border md:border-b border-l border-white/20 md:w-5 h-5" />
        <ProcessHighlightLayout>
          <div className="md:inline flex flex-row items-center gap-4">
            <GrFanOption size={32} />
            <p>Optimization</p>
          </div>
          <p className="text-xs text-white/70 mt-auto">
            feature complexity or <br />
            increased user load
          </p>
        </ProcessHighlightLayout>
      </>
    ),
  },
  {
    stage: "ORBIT",
    mc: [
      "Orbital velocity achieved - parameters look good.",
      "Vehicle is in orbit.",
      "We are stable.",
    ],
    vincentai: [
      "The application is stable, performing reliably, and consistently delivering value. I will ensure observability is in place so we can act on meaningful insights.",
    ],
    task: (
      <>
        <ProcessHighlightLayout>
          <div className="md:inline flex flex-row items-center gap-4">
            <HiMiniRocketLaunch size={32} />
            <p>
              Stable
              <br />
              Release
            </p>
          </div>
          <p className="text-xs text-white/70 mt-auto">
            deploy version that
            <br />
            meets quality benchmarks
          </p>
        </ProcessHighlightLayout>
        <div className="border md:border-b border-l border-white/20 md:w-5 h-5" />
        <ProcessHighlightLayout>
          <div className="md:inline flex flex-row items-center gap-4">
            <SiBaremetrics size={32} />
            <p>
              Establish
              <br />
              Observability
            </p>
          </div>
          <p className="text-xs text-white/70 mt-auto">
            logging, metrics,
            <br />
            alerting
          </p>
        </ProcessHighlightLayout>
        <div className="border md:border-b border-l border-white/20 md:w-5 h-5" />
        <ProcessHighlightLayout>
          <div className="md:inline flex flex-row items-center gap-4">
            <SiAlwaysdata size={32} />
            <p>
              Get
              <br />
              Insight
            </p>
          </div>
          <div className="md:inline flex flex-row items-center gap-4"></div>
          <p className="text-xs text-white/70 mt-auto">
            collect and analyze data to understand user behavior,
            <br />
            application performance
          </p>
        </ProcessHighlightLayout>
      </>
    ),
  },
  {
    stage: "RE-ENTRY",
    mc: [
      "All stations, standby for deorbit sequence.",
      "Shutdown confirmed. Trajectory is on reentry corridor.",
      "Vehicle is committed to reentry.",
    ],
    vincentai: [
      "In space flight, 're-entry' is riskier than the initial launch. While the application has demonstrated stability, the situation now requires change to meet emerging requirements.",
    ],
    task: (
      <>
        <ProcessHighlightLayout>
          <div className="md:inline flex flex-row items-center gap-4">
            <LuListTodo size={32} />
            <p>
              Re-define
              <br />
              Scope of Change
            </p>
          </div>
          <div className="md:inline flex flex-row items-center gap-4"></div>
          <p className="text-xs text-white/70 mt-auto">
            features, design, business-specific nuance
          </p>
        </ProcessHighlightLayout>
        <div className="border md:border-b border-l border-white/20 md:w-5 h-5" />
        <ProcessHighlightLayout>
          <div className="md:inline flex flex-row items-center gap-4">
            <MdArchitecture size={32} />
            <p>Architectural Changes</p>
          </div>
          <p className="text-xs text-white/70 mt-auto">
            modify systems
            <br />
            for scalability
          </p>
        </ProcessHighlightLayout>
        <div className="border md:border-b border-l border-white/20 md:w-5 h-5" />
        <ProcessHighlightLayout>
          <div className="md:inline flex flex-row items-center gap-4">
            <RiGlobalFill size={32} />
            <p>
              Plan for
              <br />
              Scaling
            </p>
          </div>
          <p className="text-xs text-white/70 mt-auto">
            multi-region, microservices, risk modelling, etc.
          </p>
        </ProcessHighlightLayout>
      </>
    ),
  },
  {
    stage: "INTERFACE",
    mc: [
      "Flight, we've reached entry interface.",
      "Thermal protection systems are active.",
      "Hitting atmosphere.",
    ],
    vincentai: [
      "Ahead of major changes, I am prioritizing user feedback, bug discovery, and performance to ensure stability. I will be closely monitoring the application.",
    ],
    task: (
      <>
        <ProcessHighlightLayout>
          <div className="md:inline flex flex-row items-center gap-4">
            <RiSurveyLine size={32} />
            <p>
              User Actions
              <br />
              Monitoring
            </p>
          </div>
          <p className="text-xs text-white/70 mt-auto">
            track user interactions for feature optimization
          </p>
        </ProcessHighlightLayout>
        <div className="border md:border-b border-l border-white/20 md:w-5 h-5" />
        <ProcessHighlightLayout>
          <div className="md:inline flex flex-row items-center gap-4">
            <TbBrandSpeedtest size={32} />
            <p>
              User Interface
              <br />
              Testing
            </p>
          </div>
          <p className="text-xs text-white/70 mt-auto">
            manual testing, automated UI tests, visual regression tools
          </p>
        </ProcessHighlightLayout>
      </>
    ),
  },
  {
    stage: "ENTRY BURN",
    mc: [
      "Entry burn start.",
      "Engines ramping - thrust vector stable. ",
      "Throttle is responsive - rate of descent decreasing.",
    ],
    vincentai: [
      "The goal now is to ensure the application operates seamlessly. I am actively making enhancements. I will refine or add on to structural processes as needed to meet evolving requirements.",
    ],
    task: (
      <>
        <ProcessHighlightLayout>
          <div className="md:inline flex flex-row items-center gap-4">
            <FaWrench size={32} />
            <p>Hotfixes, patches, and rapid iteration</p>
          </div>
          <p className="text-xs text-white/70 mt-auto">
            an ongoing process of improvement and adaptation
          </p>
        </ProcessHighlightLayout>
        <div className="border md:border-b border-l border-white/20 md:w-5 h-5" />
        <ProcessHighlightLayout>
          <div className="md:inline flex flex-row items-center gap-4">
            <FaMagnifyingGlass size={32} />
            <p>Identify technical debt</p>
          </div>
          <p className="text-xs text-white/70 mt-auto">
            review codebase, look for structural improvements
          </p>
        </ProcessHighlightLayout>
        <div className="border md:border-b border-l border-white/20 md:w-5 h-5" />
        <ProcessHighlightLayout>
          <div className="md:inline flex flex-row items-center gap-4">
            <FaBookOpen size={32} />
            <p>
              Setup
              <br />
              Docs
            </p>
          </div>
          <p className="text-xs text-white/70 mt-auto">
            maintain documentation for product/tech
          </p>
        </ProcessHighlightLayout>
      </>
    ),
  },
  {
    stage: "Touchdown",
    mc: [
      "Landing legs deployed.",
      "Vehicle is stable on the pad.",
      "Touchdown confirmed.",
    ],
    vincentai: [
      "The application is stable and ready for the next iteration. Software is never truly 'complete', going through multiple launch and re-entry cycles.",
      "---",
      "As a freelancer, I can help build your digital solution - whether it is a website, web/mobile application, or an AI custom interface.",
      "If you have any questions, or would like to discuss working together, please don't hesitate to reach out. →",
    ],
    task: undefined,
  },
];
