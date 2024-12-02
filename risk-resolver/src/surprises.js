const surpriseList = [
    {
      event: "A key team member quits unexpectedly during a critical phase.",
      options: [
        "A: Redistribute their tasks among existing team members, offering overtime pay and additional support to manage the increased workload.",
        "B: Onboard a new team member quickly, providing intensive training and mentorship to get them up to speed without delaying the project."
      ]
    },
    {
      event: "The project scope changes significantly due to new regulatory requirements.",
      options: [
        "A: Conduct a thorough impact analysis, adjust the project plan and timeline, and communicate the changes to all stakeholders.",
        "B: Negotiate additional resources or budget with the client, and implement a phased approach to meet the new requirements while maintaining project momentum."
      ]
    },
    {
      event: "A critical software bug is discovered late in the project, affecting multiple modules.",
      options: [
        "A: Form a dedicated task force to address the bug, reallocating resources from less critical tasks and extending the project timeline if necessary.",
        "B: Implement a temporary workaround to minimize disruption, and schedule a comprehensive fix in a future maintenance release, ensuring all stakeholders are informed."
      ]
    },
    {
      event: "Client requests a major feature addition close to the deadline, impacting the project scope and timeline.",
      options: [
        "A: Conduct a feasibility study, extend the deadline to accommodate the new feature, and adjust the project plan accordingly.",
        "B: Prioritize the feature for the next project phase, delivering the current scope on time and planning a detailed roadmap for future enhancements."
      ]
    },
    {
      event: "Unexpected budget cuts force a reevaluation of project priorities.",
      options: [
        "A: Conduct a cost-benefit analysis to identify non-essential components that can be deferred or eliminated, and adjust the project scope accordingly.",
        "B: Seek additional funding from alternative sources, such as internal reallocations or external investors, and reallocate existing resources to maintain project integrity."
      ]
    },
    {
      event: "Vendor fails to deliver critical components on time, jeopardizing the project timeline.",
      options: [
        "A: Identify and engage an alternative vendor, negotiating expedited delivery terms to minimize delays.",
        "B: Adjust the project timeline to accommodate the delay, and implement contingency plans to mitigate the impact on dependent tasks."
      ]
    },
    {
      event: "Team conflict arises, affecting productivity and morale.",
      options: [
        "A: Conduct a team-building workshop to address underlying issues, mediate the conflict, and establish clear communication channels.",
        "B: Reassign team members to different tasks or sub-teams, providing additional support and resources to ensure continued productivity."
      ]
    },
    {
      event: "Client changes their mind about the project requirements mid-way through development.",
      options: [
        "A: Update the project plan to reflect the new requirements, conducting a thorough impact analysis and communicating changes to all stakeholders.",
        "B: Stick to the original plan, delivering the current scope on time, and negotiate changes for a future phase, ensuring client expectations are managed."
      ]
    },
    {
      event: "Unexpected technical challenges arise, requiring significant rework.",
      options: [
        "A: Allocate additional time and resources for research and development, and adjust the project timeline to accommodate the rework.",
        "B: Simplify the technical requirements, focusing on delivering a functional solution within the original timeline, and plan for future enhancements."
      ]
    },
    {
      event: "Regulatory changes impact the project, requiring compliance adjustments.",
      options: [
        "A: Conduct a compliance audit, adjust the project to meet new regulations, and communicate changes to all stakeholders.",
        "B: Seek a waiver or extension for compliance, allowing the project to proceed as planned while developing a long-term compliance strategy."
      ]
    },
    {
      event: "Key stakeholder becomes unavailable, affecting decision-making processes.",
      options: [
        "A: Identify and engage an alternative stakeholder with decision-making authority, ensuring continuity in project governance.",
        "B: Proceed with the project based on existing decisions, updating the stakeholder upon their return and making necessary adjustments."
      ]
    },
    {
      event: "Data breach occurs, compromising sensitive project information.",
      options: [
        "A: Implement immediate security measures, conduct a thorough investigation, and inform stakeholders of the breach and mitigation steps.",
        "B: Conduct a comprehensive security audit, develop a long-term security strategy, and communicate the plan to stakeholders."
      ]
    },
    {
      event: "Team member underperforms, affecting project deliverables.",
      options: [
        "A: Provide additional training and support, setting clear performance expectations and monitoring progress closely.",
        "B: Reassign their tasks to other team members, providing incentives for increased workload and ensuring project milestones are met."
      ]
    },
    {
      event: "Client feedback is overwhelmingly negative, requiring significant changes.",
      options: [
        "A: Conduct a detailed review of the feedback, revise the project based on key points, and communicate the changes to the client.",
        "B: Address the most critical issues immediately, planning for future improvements in subsequent phases, and manage client expectations."
      ]
    },
    {
      event: "Natural disaster disrupts operations, halting project progress.",
      options: [
        "A: Activate the business continuity plan, relocating operations if necessary, and communicate the situation to all stakeholders.",
        "B: Pause the project until normal operations resume, developing a recovery plan to catch up on lost time."
      ]
    },
    {
      event: "Unexpected legal issues arise, threatening project viability.",
      options: [
        "A: Consult with legal experts, adjust the project to comply with legal requirements, and communicate changes to stakeholders.",
        "B: Put the project on hold until legal issues are resolved, developing a contingency plan to address potential outcomes."
      ]
    },
    {
      event: "Market conditions change, affecting project viability and client expectations.",
      options: [
        "A: Pivot the project to align with new market conditions, conducting a thorough market analysis and adjusting the project plan.",
        "B: Continue with the project as planned, implementing risk mitigation strategies to address potential market challenges."
      ]
    },
    {
      event: "Critical team member goes on unexpected leave, impacting project progress.",
      options: [
        "A: Redistribute their tasks among the team, providing additional support and resources to manage the increased workload.",
        "B: Hire a temporary replacement, ensuring they receive adequate training and support to integrate smoothly into the project."
      ]
    },
    {
      event: "Project dependencies are delayed, affecting the project timeline.",
      options: [
        "A: Adjust the project timeline, implementing contingency plans to manage dependent tasks and minimize delays.",
        "B: Find alternative solutions to meet deadlines, such as parallel task execution or resource reallocation."
      ]
    },
    {
      event: "Client requests a change in project management tools, requiring a transition.",
      options: [
        "A: Transition to the new tools, providing training and support to the team, and adjusting the project plan to accommodate the change.",
        "B: Continue with the current tools, negotiating a phased transition plan with the client to minimize disruption."
      ]
    },
    {
      event: "Unexpected competition enters the market, threatening project success.",
      options: [
        "A: Accelerate the project timeline, focusing on delivering key features to stay competitive, and adjust the project plan accordingly.",
        "B: Enhance the project features, differentiating from competitors, and develop a marketing strategy to highlight unique selling points."
      ]
    },
    {
      event: "Team morale drops significantly, affecting productivity and engagement.",
      options: [
        "A: Organize team-building activities, provide support and incentives, and address the root causes of low morale.",
        "B: Conduct a thorough review of team dynamics, making necessary changes to improve morale and productivity."
      ]
    },
    {
      event: "Supplier increases prices unexpectedly, impacting the project budget.",
      options: [
        "A: Negotiate with the supplier for better terms, exploring bulk purchasing or long-term contracts to reduce costs.",
        "B: Find alternative suppliers, conducting a cost-benefit analysis to ensure quality and budget alignment."
      ]
    },
    {
      event: "Client changes the project deadline to an earlier date, requiring accelerated delivery.",
      options: [
        "A: Increase resources to meet the new deadline, implementing overtime and additional support to ensure timely delivery.",
        "B: Negotiate a realistic deadline extension, providing a detailed plan to justify the need for additional time."
      ]
    },
    {
      event: "Project documentation is lost or corrupted, affecting project tracking and reporting.",
      options: [
        "A: Recreate the documentation from backups, implementing additional safeguards to prevent future data loss.",
        "B: Proceed without the documentation, creating new records as needed, and develop a robust documentation strategy for future projects."
      ]
    }
  ];
  
  export default surpriseList;