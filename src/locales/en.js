export default {
  // Navigation
  nav: {
    products: 'Products',
    solutions: 'Solutions',
    resources: 'Resources',
    company: 'Company',
    viewAllProducts: 'View all products',
    byStakeholder: 'By Stakeholder',
    byProjectType: 'By Project Type',
    caseStudies: 'Case Studies',
    webinars: 'Webinars',
    blog: 'Blog',
    whitepapers: 'Whitepapers',
  },

  // Products menu
  products: {
    viewAll: 'View All Products',
    comingSoon: 'Coming Soon',
    categories: {
      building: {
        name: 'Building',
        description: 'AI Information Management for Building Construction',
        longDescription: 'Automate and optimize every stage of building projects from design to construction with AI.',
        icon: 'Building2',
        status: 'active',
        systemCount: 8,
        systems: {
          aisims: {
            name: 'AISIMS',
            fullName: 'AI Structural Information Management System',
            description: 'Structural & frame information management automation',
            status: 'active',
            features: [
              'BIM-based structural info auto-extraction',
              'Quantity takeoff automation (95% accuracy)',
              'Structural drawing auto-generation',
              'Schedule integration management',
              'Real-time design change tracking',
              'Subcontractor information sharing'
            ],
            mockData: {
              efficiency: [
                { name: 'BIM Construction', before: 100, after: 10, unit: 'hours' },
                { name: 'Quantity Takeoff', before: 40, after: 2, unit: 'hours' },
                { name: 'Drawing Generation', before: 80, after: 4, unit: 'hours' },
                { name: 'Schedule Integration', before: 24, after: 1, unit: 'hours' }
              ],
              costSavings: [
                { name: 'Labor Cost Savings', value: 45, color: '#4F46E5' },
                { name: 'Material Cost Savings', value: 25, color: '#10B981' },
                { name: 'Rework Cost Savings', value: 30, color: '#F59E0B' }
              ],
              metrics: {
                timeReduction: 90,
                accuracyRate: 95,
                costSavings: 40
              }
            }
          },
          aimims: {
            name: 'AIMIMS',
            fullName: 'AI Mechanical Information Management System',
            description: 'Mechanical system information management automation',
            status: 'active',
            features: [
              'Mechanical BIM auto-analysis',
              'Pipe/duct quantity takeoff',
              'Clash detection automation',
              'MEP construction sequence optimization',
              'Maintenance info integration',
              'Energy efficiency analysis'
            ],
            mockData: {
              efficiency: [
                { name: 'MEP Modeling', before: 120, after: 15, unit: 'hours' },
                { name: 'Clash Detection', before: 48, after: 4, unit: 'hours' },
                { name: 'Quantity Takeoff', before: 32, after: 2, unit: 'hours' },
                { name: 'Shop Drawings', before: 80, after: 8, unit: 'hours' }
              ],
              costSavings: [
                { name: 'Design Error Reduction', value: 35, color: '#4F46E5' },
                { name: 'Rework Cost Savings', value: 40, color: '#10B981' },
                { name: 'Schedule Acceleration', value: 25, color: '#F59E0B' }
              ],
              metrics: {
                timeReduction: 85,
                accuracyRate: 92,
                costSavings: 35
              }
            }
          },
          aieims: {
            name: 'AIEIMS',
            fullName: 'AI Electrical Information Management System',
            description: 'Electrical system information management automation',
            status: 'active',
            features: [
              'Electrical BIM auto-analysis',
              'Cable tray routing optimization',
              'Load calculation automation',
              'Power diagram auto-generation',
              'Lighting simulation',
              'Energy usage prediction'
            ],
            mockData: {
              efficiency: [
                { name: 'Electrical Design', before: 96, after: 12, unit: 'hours' },
                { name: 'Load Calculation', before: 24, after: 1, unit: 'hours' },
                { name: 'Cable Takeoff', before: 40, after: 3, unit: 'hours' },
                { name: 'Drawing Creation', before: 64, after: 6, unit: 'hours' }
              ],
              costSavings: [
                { name: 'Design Efficiency', value: 40, color: '#4F46E5' },
                { name: 'Material Optimization', value: 30, color: '#10B981' },
                { name: 'Construction Efficiency', value: 30, color: '#F59E0B' }
              ],
              metrics: {
                timeReduction: 88,
                accuracyRate: 94,
                costSavings: 38
              }
            }
          },
          aifims: {
            name: 'AIFIMS',
            fullName: 'AI Finishing Information Management System',
            description: 'Finishing work information & quantity automation',
            status: 'active',
            features: [
              'Finish material quantity auto-takeoff',
              'Room-by-room finish schedule',
              'Material ordering optimization',
              'Quality inspection checklists',
              'Defect management system',
              'Pre-occupancy punch list'
            ],
            mockData: {
              efficiency: [
                { name: 'Quantity Takeoff', before: 80, after: 6, unit: 'hours' },
                { name: 'Material Ordering', before: 40, after: 4, unit: 'hours' },
                { name: 'Schedule Management', before: 60, after: 8, unit: 'hours' },
                { name: 'Quality Inspection', before: 48, after: 6, unit: 'hours' }
              ],
              costSavings: [
                { name: 'Material Waste Reduction', value: 35, color: '#4F46E5' },
                { name: 'Schedule Acceleration', value: 30, color: '#10B981' },
                { name: 'Defect Cost Reduction', value: 35, color: '#F59E0B' }
              ],
              metrics: {
                timeReduction: 85,
                accuracyRate: 90,
                costSavings: 32
              }
            }
          },
          aibems: {
            name: 'AI-BEMS',
            fullName: 'AI Building Energy Management System',
            description: 'Building energy analysis & operation optimization',
            status: 'active',
            features: [
              'Real-time energy monitoring',
              'AI-based energy optimization',
              'Predictive equipment maintenance',
              'Carbon emission management',
              'Energy cost forecasting',
              'Green certification support'
            ],
            mockData: {
              efficiency: [
                { name: 'Energy Analysis', before: 40, after: 2, unit: 'hours' },
                { name: 'Equipment Inspection', before: 80, after: 8, unit: 'hours' },
                { name: 'Report Generation', before: 24, after: 1, unit: 'hours' },
                { name: 'Optimization Apply', before: 48, after: 4, unit: 'hours' }
              ],
              costSavings: [
                { name: 'Energy Cost Savings', value: 50, color: '#4F46E5' },
                { name: 'Maintenance Savings', value: 30, color: '#10B981' },
                { name: 'Carbon Credits', value: 20, color: '#F59E0B' }
              ],
              metrics: {
                energySavings: 25,
                maintenanceReduction: 35,
                carbonReduction: 30
              }
            }
          },
          aimarkin: {
            name: 'AI-Mark-In',
            fullName: 'AI Market Analysis & Investment System',
            description: 'Feasibility & profitability analysis automation',
            status: 'active',
            features: [
              'Real estate market analysis',
              'Feasibility study automation',
              'Profitability simulation',
              'Risk analysis',
              'Investment ROI prediction',
              'Competitive analysis reports'
            ],
            mockData: {
              efficiency: [
                { name: 'Market Research', before: 160, after: 8, unit: 'hours' },
                { name: 'Feasibility Analysis', before: 80, after: 4, unit: 'hours' },
                { name: 'Profitability Review', before: 40, after: 2, unit: 'hours' },
                { name: 'Report Creation', before: 24, after: 1, unit: 'hours' }
              ],
              costSavings: [
                { name: 'Analysis Cost Savings', value: 60, color: '#4F46E5' },
                { name: 'Decision Acceleration', value: 25, color: '#10B981' },
                { name: 'Risk Avoidance', value: 15, color: '#F59E0B' }
              ],
              metrics: {
                analysisSpeed: 95,
                accuracyRate: 88,
                decisionSpeed: 300
              }
            }
          },
          aiarchitect: {
            name: 'AI-Architect',
            fullName: 'AI Architectural Planning System',
            description: 'Architectural planning & early design automation',
            status: 'active',
            features: [
              'Site analysis automation',
              'Building mass auto-generation',
              'Code compliance automation',
              'Sun/view simulation',
              'Floor plan optimization',
              'Design option comparison'
            ],
            mockData: {
              efficiency: [
                { name: 'Site Analysis', before: 40, after: 2, unit: 'hours' },
                { name: 'Massing Study', before: 80, after: 4, unit: 'hours' },
                { name: 'Code Review', before: 24, after: 1, unit: 'hours' },
                { name: 'Design Creation', before: 160, after: 16, unit: 'hours' }
              ],
              costSavings: [
                { name: 'Design Time Savings', value: 45, color: '#4F46E5' },
                { name: 'Review Cost Savings', value: 30, color: '#10B981' },
                { name: 'Revision Cost Savings', value: 25, color: '#F59E0B' }
              ],
              metrics: {
                designSpeed: 90,
                complianceRate: 99,
                optionsGenerated: 50
              }
            }
          },
          aibscm: {
            name: 'AI-BSCM',
            fullName: 'AI Building Supply Chain Management',
            description: 'Construction site procurement management automation',
            status: 'active',
            features: [
              'Material demand forecasting',
              'Supplier management',
              'Inventory optimization',
              'Delivery schedule management',
              'Cost analysis',
              'Quality history tracking'
            ],
            mockData: {
              efficiency: [
                { name: 'Order Processing', before: 48, after: 4, unit: 'hours' },
                { name: 'Inventory Management', before: 24, after: 2, unit: 'hours' },
                { name: 'Delivery Coordination', before: 40, after: 4, unit: 'hours' },
                { name: 'Cost Analysis', before: 32, after: 2, unit: 'hours' }
              ],
              costSavings: [
                { name: 'Inventory Cost Savings', value: 35, color: '#4F46E5' },
                { name: 'Logistics Cost Savings', value: 30, color: '#10B981' },
                { name: 'Loss Prevention', value: 35, color: '#F59E0B' }
              ],
              metrics: {
                inventoryReduction: 40,
                deliveryOnTime: 95,
                costSavings: 28
              }
            }
          }
        }
      },
      civil: {
        name: 'Civil',
        description: 'AI Information Management for Civil Infrastructure',
        longDescription: 'Revolutionize maintenance and condition prediction for bridges, tunnels, roads, and civil infrastructure with AI.',
        icon: 'Landmark',
        status: 'coming_soon',
        systemCount: 3,
        systems: {
          aibms: {
            name: 'AI-BMS',
            fullName: 'AI Bridge Management System',
            description: 'Bridge maintenance & condition prediction',
            status: 'coming_soon',
            features: [
              'Real-time bridge condition monitoring',
              'AI-based damage prediction',
              'Maintenance priority ranking',
              'Life-cycle cost analysis',
              'Safety assessment automation',
              'Inspection schedule optimization'
            ],
            mockData: {
              efficiency: [
                { name: 'Condition Inspection', before: 80, after: 8, unit: 'hours' },
                { name: 'Damage Analysis', before: 40, after: 4, unit: 'hours' },
                { name: 'Report Generation', before: 24, after: 2, unit: 'hours' },
                { name: 'Repair Planning', before: 48, after: 6, unit: 'hours' }
              ],
              costSavings: [
                { name: 'Inspection Cost Savings', value: 35, color: '#4F46E5' },
                { name: 'Preventive Maintenance', value: 40, color: '#10B981' },
                { name: 'Life Extension', value: 25, color: '#F59E0B' }
              ],
              metrics: {
                predictionAccuracy: 92,
                costReduction: 35,
                efficiencyGain: 40
              }
            }
          },
          aitms: {
            name: 'AI-TMS',
            fullName: 'AI Tunnel Management System',
            description: 'Tunnel maintenance & risk analysis',
            status: 'coming_soon',
            features: [
              'Tunnel structural safety monitoring',
              'Ventilation/lighting optimization',
              'Fire risk prediction',
              'Traffic analysis',
              'Maintenance history management',
              'Emergency response system'
            ],
            mockData: {
              efficiency: [
                { name: 'Safety Inspection', before: 120, after: 12, unit: 'hours' },
                { name: 'Risk Analysis', before: 48, after: 4, unit: 'hours' },
                { name: 'System Optimization', before: 80, after: 8, unit: 'hours' },
                { name: 'Report Generation', before: 24, after: 2, unit: 'hours' }
              ],
              costSavings: [
                { name: 'Operating Cost Savings', value: 30, color: '#4F46E5' },
                { name: 'Accident Prevention', value: 45, color: '#10B981' },
                { name: 'Energy Savings', value: 25, color: '#F59E0B' }
              ],
              metrics: {
                riskDetection: 95,
                accidentPrevention: 60,
                operationalEfficiency: 25
              }
            }
          },
          airms: {
            name: 'AI-RMS',
            fullName: 'AI Road Management System',
            description: 'Road maintenance & asset management',
            status: 'coming_soon',
            features: [
              'Pavement condition auto-analysis',
              'Pavement life prediction',
              'Repair priority ranking',
              'Traffic prediction',
              'Asset valuation',
              'Budget optimization'
            ],
            mockData: {
              efficiency: [
                { name: 'Pavement Survey', before: 200, after: 20, unit: 'hours' },
                { name: 'Condition Assessment', before: 80, after: 8, unit: 'hours' },
                { name: 'Repair Planning', before: 48, after: 4, unit: 'hours' },
                { name: 'Budget Analysis', before: 40, after: 4, unit: 'hours' }
              ],
              costSavings: [
                { name: 'Survey Cost Savings', value: 40, color: '#4F46E5' },
                { name: 'Preventive Repair', value: 35, color: '#10B981' },
                { name: 'Life Extension', value: 25, color: '#F59E0B' }
              ],
              metrics: {
                analysisAccuracy: 88,
                assetEfficiency: 45,
                maintenanceSavings: 30
              }
            }
          }
        }
      },
      plant: {
        name: 'Plant',
        description: 'AI Information Management for Plant Facilities',
        longDescription: 'Provide AI-based optimization from design to operation for oil & gas, chemical, and industrial plants.',
        icon: 'Factory',
        status: 'coming_soon',
        systemCount: 3,
        systems: {
          oilgas: {
            name: 'Oil & Gas Plant',
            fullName: 'AI Oil & Gas Plant Management System',
            description: 'Oil & gas plant AI management',
            status: 'coming_soon',
            features: [
              'Process optimization',
              'Predictive equipment maintenance',
              'Safety management system',
              'Energy efficiency analysis',
              'Environmental monitoring',
              'Production planning optimization'
            ],
            mockData: {
              efficiency: [
                { name: 'Process Analysis', before: 160, after: 16, unit: 'hours' },
                { name: 'Equipment Inspection', before: 120, after: 12, unit: 'hours' },
                { name: 'Safety Inspection', before: 80, after: 8, unit: 'hours' },
                { name: 'Report Generation', before: 40, after: 4, unit: 'hours' }
              ],
              costSavings: [
                { name: 'Process Efficiency', value: 40, color: '#4F46E5' },
                { name: 'Downtime Reduction', value: 35, color: '#10B981' },
                { name: 'Safety Cost Savings', value: 25, color: '#F59E0B' }
              ],
              metrics: {
                processEfficiency: 15,
                safetyImprovement: 40,
                downtimeReduction: 30
              }
            }
          },
          chemical: {
            name: 'Chemical Plant',
            fullName: 'AI Chemical Plant Management System',
            description: 'Petrochemical plant AI management',
            status: 'coming_soon',
            features: [
              'Chemical process optimization',
              'Quality control automation',
              'Energy usage optimization',
              'Emission management',
              'Inventory management',
              'Safety system integration'
            ],
            mockData: {
              efficiency: [
                { name: 'Process Optimization', before: 200, after: 20, unit: 'hours' },
                { name: 'Quality Inspection', before: 80, after: 8, unit: 'hours' },
                { name: 'Energy Analysis', before: 48, after: 4, unit: 'hours' },
                { name: 'Environmental Monitoring', before: 40, after: 4, unit: 'hours' }
              ],
              costSavings: [
                { name: 'Production Efficiency', value: 45, color: '#4F46E5' },
                { name: 'Energy Savings', value: 30, color: '#10B981' },
                { name: 'Defect Reduction', value: 25, color: '#F59E0B' }
              ],
              metrics: {
                productionEfficiency: 20,
                energySavings: 25,
                defectReduction: 50
              }
            }
          },
          industrial: {
            name: 'Industrial Plant',
            fullName: 'AI Industrial Plant Management System',
            description: 'Industrial plant AI management',
            status: 'coming_soon',
            features: [
              'Production line optimization',
              'Equipment uptime management',
              'Quality prediction',
              'Inventory optimization',
              'Energy management',
              'Workforce allocation optimization'
            ],
            mockData: {
              efficiency: [
                { name: 'Production Planning', before: 80, after: 8, unit: 'hours' },
                { name: 'Equipment Management', before: 120, after: 12, unit: 'hours' },
                { name: 'Quality Management', before: 60, after: 6, unit: 'hours' },
                { name: 'Inventory Management', before: 40, after: 4, unit: 'hours' }
              ],
              costSavings: [
                { name: 'Productivity Improvement', value: 40, color: '#4F46E5' },
                { name: 'Operating Cost Savings', value: 35, color: '#10B981' },
                { name: 'Quality Cost Savings', value: 25, color: '#F59E0B' }
              ],
              metrics: {
                operatingRate: 95,
                productivityGain: 30,
                operatingCostReduction: 20
              }
            }
          }
        }
      }
    }
  },

  // Solutions
  solutions: {
    gc: 'General Contractors',
    owners: 'Owners',
    consultants: 'Consultants',
    industrial: 'Industrial',
    infrastructure: 'Infrastructure',
    commercial: 'Commercial',
  },

  // Hero Section
  hero: {
    badge: 'AI-Powered Construction Scheduling',
    words: ['Optimize', 'De-risk', 'Recover', 'Accelerate'],
    projectWith: 'project with',
    subtitle: 'Simulate millions of construction scenarios to find the optimal schedule. Reduce costs, mitigate risks, and deliver on time.',
    watchVideo: 'Watch Video',
    durationReduction: 'Duration Reduction',
    laborCostSavings: 'Labor Cost Savings',
    equipmentSavings: 'Equipment Savings',
  },

  // Trust Section
  trust: {
    title: 'Trusted by industry leaders',
  },

  // Features Section
  features: {
    title: 'Why Choose',
    titleHighlight: 'AICONS',
    titleEnd: '?',
    subtitle: 'Our AI-powered platform transforms how construction projects are planned and executed.',
    automateOptimization: {
      title: 'Automate Optimization',
      description: 'Simulate millions of possibilities to find the optimal schedule for your project.',
    },
    identifyRisks: {
      title: 'Identify and Mitigate Risks',
      description: 'Proactively identify potential risks and develop mitigation strategies.',
    },
    recoverAccelerate: {
      title: 'Recover or Accelerate',
      description: 'Find ways to recover delayed projects or accelerate on-track ones.',
    },
    integrateControls: {
      title: 'Integrate Project Controls',
      description: 'Seamlessly integrate with your existing project management tools.',
    },
  },

  // Products Section
  productsSection: {
    title: 'Our Products',
    subtitle: 'Choose the right solution for your project needs',
    learnMore: 'Learn More',
    plan: {
      tagline: 'Schedule Visualization & Planning',
      description: 'Transform your project timeline with intelligent scheduling visualization.',
      steps: {
        import: { title: 'Import', description: 'Import your existing schedules from P6 or MSP' },
        visualize: { title: 'Visualize', description: 'See your schedule in an interactive 4D view' },
        analyze: { title: 'Analyze', description: 'Identify bottlenecks and optimization opportunities' },
        export: { title: 'Export', description: 'Export optimized schedules back to your tools' },
      },
    },
    optimize: {
      tagline: 'P6/MSP-based Optimization',
      description: 'Leverage AI to optimize your construction schedules automatically.',
      steps: {
        connect: { title: 'Connect', description: 'Connect to your P6 or Microsoft Project files' },
        simulate: { title: 'Simulate', description: 'Run millions of schedule simulations' },
        optimize: { title: 'Optimize', description: 'AI finds the optimal resource allocation' },
        compare: { title: 'Compare', description: 'Compare scenarios side-by-side' },
      },
    },
    model: {
      tagline: 'BIM-based Modeling',
      description: 'Generate optimized schedules directly from your BIM models.',
      steps: {
        upload: { title: 'Upload', description: 'Upload your BIM model (Revit, IFC, etc.)' },
        extract: { title: 'Extract', description: 'Automatically extract work packages' },
        generate: { title: 'Generate', description: 'AI generates multiple schedule options' },
        refine: { title: 'Refine', description: 'Fine-tune with construction constraints' },
      },
    },
  },

  // Testimonials Section
  testimonials: {
    title: 'Customer Stories',
    subtitle: 'See how industry leaders are transforming their projects with AICONS',
    quotes: {
      alignJV: 'AICONS helped us reduce project duration by 17% while optimizing resource allocation across complex construction sequences.',
      reta: 'The AI-powered scheduling gave us insights we never had before. We saved millions in labor costs alone.',
      scs: 'AICONS transformed our approach to schedule optimization. The simulation capabilities are game-changing.',
      parsons: 'We integrated AICONS into our workflow and immediately saw improvements in how we plan and execute projects.',
      hdcc: 'The ability to simulate millions of scenarios and find the optimal path forward is invaluable.',
    },
    projectDirector: 'Project Director',
    constructionManager: 'Construction Manager',
    vpOperations: 'VP of Operations',
    seniorPM: 'Senior Project Manager',
    coo: 'Chief Operations Officer',
  },

  // Metrics Section
  metrics: {
    title: 'Proven Results',
    subtitle: 'Our customers consistently achieve measurable improvements',
    durationReduction: {
      label: 'Project Duration Reduction',
      description: 'Average reduction in overall project timeline',
    },
    laborSavings: {
      label: 'Labor Cost Savings',
      description: 'Reduced labor costs through optimization',
    },
    equipmentSavings: {
      label: 'Equipment Cost Savings',
      description: 'More efficient equipment utilization',
    },
  },

  // CTA Section
  cta: {
    title: 'Ready to Transform Your Projects?',
    subtitle: 'Join hundreds of construction teams already using AISIMS to optimize their schedules and reduce costs.',
    contactSales: 'Contact Sales',
  },

  // Footer
  footer: {
    stayUpdated: 'Stay Updated',
    newsletterDesc: 'Get the latest news and updates from AICONS Technologies',
    enterEmail: 'Enter your email',
    subscribe: 'Subscribe',
    description: 'AI-powered construction scheduling and optimization platform',
    company: 'Company',
    aboutUs: 'About Us',
    careers: 'Careers',
    contact: 'Contact',
    products: 'Products',
    solutions: 'Solutions',
    resources: 'Resources',
    caseStudies: 'Case Studies',
    blog: 'Blog',
    webinars: 'Webinars',
    copyright: 'AICONS Technologies. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
  },

  // Products Page
  productsPage: {
    title: 'Our Products',
    subtitle: 'Choose the right AICONS solution for your construction project needs',
    requestDemo: 'Request Demo',
    downloadBrochure: 'Download Brochure',
    keyFeatures: 'Key Features',
    benefits: 'Benefits',
    readyToStart: 'Ready to Get Started with {name}?',
    scheduleDemo: 'Schedule a Demo',
    productNotFound: 'Product not found',
    viewPlan: 'View AICONS Plan',
    plan: {
      tagline: 'Schedule Visualization & Planning',
      description: 'Transform your project timeline with intelligent scheduling visualization. AICONS Plan provides powerful 4D visualization tools that bring your construction schedule to life.',
      features: [
        'Interactive 4D schedule visualization',
        'Real-time schedule updates',
        'Resource conflict detection',
        'Progress tracking and reporting',
        'Integration with P6 and MSP',
        'Collaborative planning tools',
      ],
      benefits: {
        betterCommunication: { title: 'Better Communication', description: 'Visual schedules everyone can understand' },
        fasterDecisions: { title: 'Faster Decisions', description: 'Identify issues before they become problems' },
        improvedCoordination: { title: 'Improved Coordination', description: 'Keep all stakeholders aligned' },
      },
    },
    optimize: {
      tagline: 'AI-Powered Schedule Optimization',
      description: 'Leverage artificial intelligence to automatically optimize your construction schedules. Simulate millions of scenarios to find the best path forward.',
      features: [
        'AI-powered schedule optimization',
        'Millions of simulation scenarios',
        'Resource leveling automation',
        'What-if scenario analysis',
        'Cost optimization algorithms',
        'Risk-adjusted scheduling',
      ],
      benefits: {
        durationReduction: { title: '17% Duration Reduction', description: 'Average project timeline improvement' },
        laborSavings: { title: '14% Labor Savings', description: 'Optimized resource allocation' },
        riskManagement: { title: 'Better Risk Management', description: 'Identify risks before they occur' },
      },
    },
    model: {
      tagline: 'BIM-Based Schedule Generation',
      description: 'Generate optimized schedules directly from your BIM models. AICONS Model extracts work packages and creates intelligent construction sequences automatically.',
      features: [
        'Automatic BIM model analysis',
        'Work package extraction',
        'Sequence generation',
        'Constraint detection',
        'Multiple model formats (Revit, IFC)',
        'Direct P6/MSP export',
      ],
      benefits: {
        fasterPlanning: { title: 'Faster Planning', description: 'Generate schedules in hours, not weeks' },
        modelBasedAccuracy: { title: 'Model-Based Accuracy', description: 'Schedules based on actual quantities' },
        multipleOptions: { title: 'Multiple Options', description: 'Explore different construction strategies' },
      },
    },
  },

  // Solutions Page
  solutionsPage: {
    title: 'Solutions',
    subtitle: 'AICONS provides tailored solutions for every stakeholder and project type',
    byStakeholder: 'By Stakeholder',
    byProjectType: 'By Project Type',
    learnMore: 'Learn More',
    requestDemo: 'Request Demo',
    yourChallenges: 'Your Challenges',
    ourSolutions: 'Our Solutions',
    keyCapabilities: 'Key Capabilities',
    keyMetrics: 'Key Performance Metrics',
    useCases: 'Use Cases',
    workflow: 'Workflow',
    projectExamples: 'Project Types',
    uniqueCapabilities: 'Unique Capabilities',
    recommendedProducts: 'Recommended Products',
    relatedCaseStudy: 'Related Case Study',
    readyToTransform: 'Ready to Transform Your Projects?',
    scheduleDemo: 'Schedule a Demo',
    solutionNotFound: 'Solution not found',
    viewGC: 'View Solutions for General Contractors',

    // General Contractors
    gc: {
      name: 'General Contractors',
      tagline: 'Optimize Your Construction Operations',
      description: 'AICONS helps general contractors deliver projects on time and under budget through AI-powered schedule optimization. Coordinate hundreds of subcontractors and thousands of activities while achieving schedule and cost targets on complex projects.',
      challenges: [
        { title: 'Complex Schedule Coordination', description: 'Managing complexity from hundreds of linked activities and simultaneous multi-trade operations', impact: '70% of projects experience schedule delays' },
        { title: 'Resource Allocation Conflicts', description: 'Optimal allocation of labor, equipment, and materials is difficult, resulting in idle time from resource conflicts', impact: 'Average resource utilization at 65%' },
        { title: 'Risk Management', description: 'Difficulty responding to unpredictable variables like weather, material delays, and design changes', impact: 'Contingency reserves exceed 20% due to uncertainty' },
        { title: 'Owner Reporting Requirements', description: 'Significant time spent on weekly/monthly reports, difficulty tracking real-time status', impact: '30% of manager time spent on reports' },
        { title: 'Cash Flow Management', description: 'Misalignment between billing schedules and actual progress makes cash flow prediction difficult', impact: 'Cash flow prediction accuracy below 60%' },
      ],
      solutions: [
        { title: 'Automated Schedule Optimization', description: 'Automatically derive optimal work sequences and resource allocation through millions of simulations.', product: 'optimize', benefit: '17% duration reduction' },
        { title: 'Real-time Resource Leveling', description: 'Analyze labor, equipment, and material availability in real-time to prevent resource conflicts proactively.', product: 'optimize', benefit: '25% improved utilization' },
        { title: 'Risk Scenario Modeling', description: 'Simulate various risk scenarios to quantify impacts and develop mitigation strategies.', product: 'optimize', benefit: '40% risk cost reduction' },
        { title: 'Visual Progress Reporting', description: 'Intuitively understand project status with 4D visualization and generate automated reports.', product: 'plan', benefit: '80% reporting time reduction' },
        { title: 'Subcontractor Schedule Coordination', description: 'Integrate and manage subcontractor schedules to identify and resolve conflicts proactively.', product: 'plan', benefit: '50% reduced waiting time' },
      ],
      metrics: {
        durationReduction: { value: '17%', label: 'Duration Reduction' },
        laborSavings: { value: '14%', label: 'Labor Cost Savings' },
        resourceUtilization: { value: '25%', label: 'Utilization Improvement' },
        riskReduction: { value: '40%', label: 'Risk Cost Reduction' },
      },
      useCases: [
        {
          title: 'Large-Scale Residential Development',
          scenario: '1,200-unit apartment complex construction. 5 buildings built simultaneously, 30 subcontractors, 18-month construction period.',
          solution: 'AICONS Optimize for building-by-building work sequence optimization, automated tower crane sharing schedule coordination, finishing work overlap timing derivation.',
          result: '3 months schedule reduction from original plan, $200K savings in tower crane rental costs.',
        },
        {
          title: 'Downtown Office Renovation',
          scenario: 'Floor-by-floor phased renovation of an occupied building. Noise/vibration restrictions, night work required, tenant relocation scheduling.',
          solution: 'AICONS Plan for floor-by-floor work sequence visualization, noise-generating activities scheduled at night, tenant relocation schedule integration.',
          result: 'Zero tenant complaints achieved, 2 weeks early completion.',
        },
        {
          title: 'Logistics Center Fast-track Construction',
          scenario: '500,000 sq ft logistics center new construction. Design 50% complete at groundbreaking, 12-month completion mandatory.',
          solution: 'AICONS Model for BIM-based work package extraction, automatic construction sequence generation matching design completion order.',
          result: 'Minimized rework from fast-track approach, achieved target completion date.',
        },
      ],
      workflow: [
        { step: 1, title: 'Project Integration', description: 'Connect P6/MSP schedules or BIM models to AICONS.' },
        { step: 2, title: 'Constraint Setup', description: 'Set resource limits, work sequence constraints, and milestones.' },
        { step: 3, title: 'Simulation Execution', description: 'AI analyzes millions of scenarios to derive optimal solutions.' },
        { step: 4, title: 'Scenario Comparison', description: 'Compare various optimization options and select the best strategy.' },
        { step: 5, title: 'Schedule Export', description: 'Export optimized schedules to P6/MSP and apply to the field.' },
        { step: 6, title: 'Monitoring & Updates', description: 'Monitor progress and perform re-optimization as needed.' },
      ],
      recommendedProducts: ['optimize', 'plan'],
      relatedCaseStudy: 'alignJV',
    },

    // Owners
    owners: {
      name: 'Owners',
      tagline: 'Maximize Your Investment Value',
      description: 'AICONS gives owners visibility and control over their construction projects with data-driven insights. Understand current project status and future predictions at a glance, and secure objective evidence for decision-making.',
      challenges: [
        { title: 'Limited Project Visibility', description: 'Difficulty understanding actual project status due to reliance on contractor reports, information asymmetry occurs', impact: '75% of owners report difficulty tracking project status' },
        { title: 'Schedule Reliability Concerns', description: 'Difficult to objectively verify feasibility of contractor-proposed schedules', impact: '80% of projects delayed vs. original schedule' },
        { title: 'Cost Overrun Risks', description: 'Cost increases from unexpected delays and changes, difficult to predict in advance', impact: 'Average cost overrun rate of 28%' },
        { title: 'Stakeholder Communication', description: 'Difficult to effectively communicate project status to executives, investors, future tenants, etc.', impact: '10 hours per week spent on stakeholder reporting' },
      ],
      solutions: [
        { title: 'Real-time Project Dashboard', description: 'Intuitive dashboard for real-time monitoring of project status, progress, and key milestones.', product: 'plan', benefit: '90% faster status updates' },
        { title: 'Schedule Confidence Metrics', description: 'AI analysis provides objective metrics by scoring current schedule feasibility.', product: 'optimize', benefit: '35% improved forecast accuracy' },
        { title: 'Scenario Comparison Analysis', description: 'Support decision-making by comparing schedule/cost impacts across various progress scenarios.', product: 'optimize', benefit: '3x faster decisions' },
        { title: 'Automated Stakeholder Reporting', description: 'Auto-generate customized reports to meet various stakeholder information needs.', product: 'plan', benefit: '75% reporting time reduction' },
        { title: 'Early Warning System', description: 'Detect schedule delays and cost overrun risks in advance for proactive response.', product: 'optimize', benefit: '85% risk early detection rate' },
      ],
      metrics: {
        visibility: { value: '95%', label: 'Project Visibility' },
        scheduleConfidence: { value: '35%', label: 'Schedule Confidence Improvement' },
        costControl: { value: '20%', label: 'Cost Overrun Reduction' },
        reportingEfficiency: { value: '75%', label: 'Reporting Efficiency Gain' },
      },
      useCases: [
        {
          title: 'Corporate Headquarters Construction',
          scenario: 'Large corporation headquarters new construction project. Board reporting, move-in schedule confirmation required, multiple contractor management.',
          solution: 'AICONS Plan dashboard for real-time status monitoring, contractor-by-contractor progress comparison, automated board report generation.',
          result: 'Accurate information provided to board, move-in date confirmed 3 months in advance.',
        },
        {
          title: 'Public Cultural Complex',
          scenario: 'Civic cultural center construction. City council reporting obligations, public disclosure, budget audit response.',
          solution: 'AICONS for transparent schedule/cost tracking, auto-generated public visualization materials, bulk audit response document export.',
          result: 'Improved city council satisfaction, zero audit findings, increased public trust.',
        },
        {
          title: 'Global Data Center',
          scenario: 'Global IT company domestic data center construction. Headquarters weekly reporting, equipment procurement schedule integration mandatory.',
          solution: 'AICONS for shared dashboard with global HQ, equipment procurement schedule integration, automated weekly report generation.',
          result: 'Eliminated HQ-local information gap, 100% equipment delivery schedule compliance.',
        },
      ],
      workflow: [
        { step: 1, title: 'Dashboard Setup', description: 'Configure KPIs and milestones to monitor.' },
        { step: 2, title: 'Data Integration', description: 'Integrate contractor schedule data in real-time.' },
        { step: 3, title: 'Baseline Establishment', description: 'Set contract schedule as baseline for comparison analysis.' },
        { step: 4, title: 'Real-time Monitoring', description: 'Monitor progress and risk indicators in real-time.' },
        { step: 5, title: 'Scenario Analysis', description: 'Analyze recovery scenarios when delays occur.' },
        { step: 6, title: 'Report Generation', description: 'Auto-generate customized reports for each stakeholder.' },
      ],
      recommendedProducts: ['plan', 'optimize'],
      relatedCaseStudy: 'dataCenter',
    },

    // Consultants
    consultants: {
      name: 'Consultants',
      tagline: 'Deliver Superior Advisory Services',
      description: 'AICONS empowers consultants to provide more accurate scheduling advice and project controls services. Deliver differentiated data-driven advisory services with AI-powered analysis tools to stand out from competitors.',
      challenges: [
        { title: 'Manual Schedule Analysis', description: 'Significant time spent on Excel, P6 manual analysis, potential for errors on complex projects', impact: '60% of project time spent on analysis work' },
        { title: 'Limited Optimization Capabilities', description: 'Traditional methods make it difficult to find optimal schedules, only limited options can be reviewed', impact: 'Average 3-5 alternatives reviewed' },
        { title: 'Lack of Objective Evidence', description: 'Recommendations based on experience and intuition lack client persuasiveness', impact: 'Recommendation adoption rate below 50%' },
        { title: 'Competitive Differentiation', description: 'Difficult to provide differentiated services from other consulting firms', impact: 'Intensified competition for contracts' },
      ],
      solutions: [
        { title: 'AI-powered Schedule Analysis', description: 'AI automatically analyzes even complex schedules to identify issues and improvement opportunities.', product: 'optimize', benefit: '80% analysis time reduction' },
        { title: 'Rapid Scenario Generation', description: 'Generate and compare various alternatives quickly through millions of simulations.', product: 'optimize', benefit: '1,000x more alternatives reviewed' },
        { title: 'Data-driven Recommendations', description: 'Present objective and persuasive recommendations based on quantitative analysis results.', product: 'optimize', benefit: '85% recommendation adoption rate' },
        { title: 'Advanced Analytics Platform', description: 'Gain competitive advantage with differentiated services leveraging latest AI technology.', product: 'plan', benefit: '40% win rate improvement' },
        { title: 'White-label Reports', description: 'Automatically generate professional analysis reports under your consulting firm brand.', product: 'plan', benefit: 'Enhanced report quality' },
      ],
      metrics: {
        analysisSpeed: { value: '80%', label: 'Analysis Time Reduction' },
        scenarioCapacity: { value: '1000x', label: 'More Alternatives' },
        adoptionRate: { value: '85%', label: 'Recommendation Adoption' },
        winRate: { value: '40%', label: 'Win Rate Improvement' },
      },
      useCases: [
        {
          title: 'Schedule Delay Claim Advisory',
          scenario: 'Large construction project schedule delay claim dispute. Delay cause analysis, liability determination, damage assessment required.',
          solution: 'AICONS for critical path analysis, delay impact simulation, objective liability allocation evidence derivation.',
          result: 'Favorable outcome for client in claim negotiations, 50% dispute resolution time reduction.',
        },
        {
          title: 'Value Engineering (VE) Consulting',
          scenario: 'VE consulting for project cost reduction. Need to derive cost reduction alternatives without schedule impact.',
          solution: 'AICONS for schedule impact simulation by alternative, cost-schedule trade-off analysis, optimal VE approach derivation.',
          result: '12% cost reduction achieved without schedule delay, client contract renewal secured.',
        },
        {
          title: 'PMC (Project Management Consulting) Services',
          scenario: 'PMC for large mixed-use development project. Multiple contractor schedule integration, owner reporting responsibility.',
          solution: 'AICONS Plan for contractor schedule integration, real-time dashboard provision, automated owner report generation.',
          result: 'Enhanced PMC service quality, highest owner satisfaction rating achieved.',
        },
      ],
      workflow: [
        { step: 1, title: 'Project Data Collection', description: 'Collect client schedule, resource, and cost data.' },
        { step: 2, title: 'AI Analysis Execution', description: 'AICONS AI automatically analyzes schedule and identifies issues.' },
        { step: 3, title: 'Optimization Simulation', description: 'Simulate millions of alternatives to find optimal solutions.' },
        { step: 4, title: 'Recommendation Development', description: 'Develop data-driven recommendations based on analysis results.' },
        { step: 5, title: 'Report Generation', description: 'Automatically generate professional analysis reports.' },
        { step: 6, title: 'Client Presentation', description: 'Present recommendations with visual materials.' },
      ],
      recommendedProducts: ['optimize', 'plan'],
      relatedCaseStudy: 'industrialBrazil',
    },

    // Industrial
    industrial: {
      name: 'Industrial Projects',
      tagline: 'Complex Industrial Construction',
      description: 'AICONS handles the complexity of industrial construction with advanced sequencing and optimization. Optimize complex construction sequences and equipment coordination for power plants, semiconductor fabs, petrochemical plants, and other large-scale industrial facilities.',
      features: [
        { title: 'Module Installation Sequencing', description: 'Optimize large module fabrication, transport, and installation sequences to minimize on-site work duration.', icon: 'Package' },
        { title: 'Heavy Equipment Coordination', description: 'Analyze interference between multiple heavy cranes, transporters, and plan optimal operation schedules.', icon: 'Truck' },
        { title: 'Shutdown/Turnaround Planning', description: 'Derive optimal work sequences to minimize existing facility downtime.', icon: 'Clock' },
        { title: 'Safety-integrated Scheduling', description: 'Prevent simultaneous hazardous activities and automatically reflect safety requirements in schedules.', icon: 'Shield' },
        { title: 'Commissioning Integration', description: 'Integrate commissioning schedules with construction schedules to reduce startup time.', icon: 'PlayCircle' },
      ],
      metrics: {
        avgDuration: { value: '18-36 months', label: 'Average Duration' },
        avgBudget: { value: '$500M-$2B', label: 'Average Budget' },
        complexity: { value: '10,000+', label: 'Activities' },
        durationSavings: { value: '15%', label: 'Duration Savings' },
      },
      projectExamples: [
        {
          type: 'Power Plants',
          description: 'Complex construction sequence optimization for combined cycle, nuclear, and renewable power plants',
          keyFeatures: ['Turbine installation sequencing', 'System-by-system piping sequence', 'Commissioning-integrated schedule'],
        },
        {
          type: 'Semiconductor Fabs',
          description: 'Precise coordination of cleanroom construction, equipment move-in, and utility connections',
          keyFeatures: ['Zone-by-zone cleanroom phasing', 'Equipment move-in route optimization', 'Ultra-low vibration environment maintenance'],
        },
        {
          type: 'Refineries/Petrochemical Plants',
          description: 'Complex installation sequence management for large pressure vessels, piping, and steel structures',
          keyFeatures: ['Heavy lift planning', 'Pipe spool prioritization', 'Tie-in work optimization'],
        },
        {
          type: 'Battery/EV Plants',
          description: 'Equipment installation sequence optimization for cleanroom and dry room environments',
          keyFeatures: ['Dry room environment maintenance scheduling', 'Large equipment move-in sequence', 'Utility connection sequence'],
        },
      ],
      uniqueCapabilities: [
        { title: 'Multi-crane Coordination', description: 'Analyze work radius interference between multiple heavy cranes and plan optimal lift sequences.', benefit: '40% crane idle time reduction' },
        { title: 'Module Yard Optimization', description: 'Optimize module fabrication, storage, and shipment sequences to maximize yard efficiency.', benefit: '30% yard utilization improvement' },
        { title: 'Tie-in Work Planning', description: 'Optimize connection work timing with existing facilities to minimize shutdown duration.', benefit: '25% shutdown duration reduction' },
        { title: 'Commissioning-integrated Optimization', description: 'Integrate system commissioning sequences with construction completion timing to reduce overall duration.', benefit: '20% commissioning time reduction' },
      ],
      integratedProducts: ['model', 'optimize'],
      relatedCaseStudy: 'industrialBrazil',
    },

    // Infrastructure
    infrastructure: {
      name: 'Infrastructure Projects',
      tagline: 'Large-Scale Infrastructure',
      description: 'AICONS manages the scale and complexity of infrastructure projects across multiple work fronts. Effectively support multi-front work coordination and complex stakeholder coordination for linear projects like rail, roads, and ports.',
      features: [
        { title: 'Multi-front Work Coordination', description: 'Simultaneously manage and optimize progress across multiple work fronts spanning tens of kilometers.', icon: 'GitBranch' },
        { title: 'Linear Project Scheduling', description: 'Support LOB (Line of Balance) based schedule management reflecting linear facility characteristics.', icon: 'TrendingUp' },
        { title: 'Multi-stakeholder Coordination', description: 'Integrate management of complex stakeholder schedules including government, municipalities, residents, and operators.', icon: 'Users' },
        { title: 'Phased Opening Planning', description: 'Derive optimal construction sequences and schedules for phased section openings.', icon: 'Layers' },
        { title: 'Permit-integrated Scheduling', description: 'Integrate various permit schedules with construction schedules to minimize delay risks.', icon: 'FileCheck' },
      ],
      metrics: {
        avgDuration: { value: '3-10 years', label: 'Average Duration' },
        avgBudget: { value: '$1B-$10B', label: 'Average Budget' },
        complexity: { value: '50,000+', label: 'Activities' },
        durationSavings: { value: '12%', label: 'Duration Savings' },
      },
      projectExamples: [
        {
          type: 'High-Speed Rail',
          description: 'Simultaneous multi-site construction management for long tunnels, bridges, and stations',
          keyFeatures: ['Tunnel boring work front management', 'Bridge segment construction sequence', 'Station-mainline interface'],
        },
        {
          type: 'Urban Rail/Metro',
          description: 'Integrated management of downtown underground excavation, station construction, and systems installation',
          keyFeatures: ['Inter-station tunnel boring coordination', 'Surface traffic impact minimization', 'System section-by-section installation'],
        },
        {
          type: 'Highways',
          description: 'Section-by-section construction and opening management for long-distance linear projects',
          keyFeatures: ['Earthwork-paving sequence', 'Bridge-tunnel critical path', 'Section opening optimization'],
        },
        {
          type: 'Ports/Airports',
          description: 'Complex management of marine/land works, terminals, and ancillary facilities',
          keyFeatures: ['Dredging-caisson integration', 'Apron-terminal interface', 'Phased operations startup'],
        },
      ],
      uniqueCapabilities: [
        { title: 'LOB-based Schedule Optimization', description: 'Analyze repetitive work patterns in linear projects to determine optimal work rates and resource allocation.', benefit: '35% resource leveling improvement' },
        { title: 'Multi-contract Coordination', description: 'Manage interfaces between multiple contractors, designers, and supervisors to prevent schedule conflicts.', benefit: '60% inter-contract conflict reduction' },
        { title: 'Community Risk Integration', description: 'Reflect external factors like community concerns and environmental issues in schedules to manage risks.', benefit: '45% community-related delay reduction' },
        { title: 'Section Opening Optimization', description: 'Derive optimal construction sequences for early opening of sections before full completion.', benefit: 'Enables early revenue generation' },
      ],
      integratedProducts: ['optimize', 'plan'],
      relatedCaseStudy: 'alignJV',
    },

    // Commercial
    commercial: {
      name: 'Commercial Projects',
      tagline: 'Commercial Building Construction',
      description: 'AICONS optimizes commercial construction projects for speed to market and cost efficiency. Support efficient schedule management for fast opening and tenant satisfaction in offices, shopping malls, hotels, and other commercial facilities.',
      features: [
        { title: 'Fast-track Schedule Management', description: 'Derive optimal work sequences and prerequisites for design-build overlap.', icon: 'Zap' },
        { title: 'Tenant Fit-out Coordination', description: 'Coordinate and manage multiple tenant fit-out construction with base building construction.', icon: 'Layout' },
        { title: 'Finish Work Optimization', description: 'Analyze complex finish work sequences to derive optimal construction order.', icon: 'Paintbrush' },
        { title: 'Opening-integrated Planning', description: 'Automatically generate reverse schedules and milestones aligned to opening date.', icon: 'Calendar' },
        { title: 'Floor-by-floor Turnover Planning', description: 'Optimize construction sequences for floor-by-floor or zone-by-zone phased turnover.', icon: 'Building' },
      ],
      metrics: {
        avgDuration: { value: '12-36 months', label: 'Average Duration' },
        avgBudget: { value: '$50M-$500M', label: 'Average Budget' },
        complexity: { value: '5,000+', label: 'Activities' },
        durationSavings: { value: '18%', label: 'Duration Savings' },
      },
      projectExamples: [
        {
          type: 'Premium Office',
          description: 'High-quality finishes, smart building systems, corporate tenant custom fit-out management',
          keyFeatures: ['Core-first construction', 'Floor-by-floor phased finishes', 'Tenant fit-out integration'],
        },
        {
          type: 'Large Shopping Malls',
          description: 'Coordinating simultaneous anchor tenant and small retail move-ins',
          keyFeatures: ['Common-private area coordination', 'Tenant-by-tenant fit-out schedule', 'Grand opening reverse planning'],
        },
        {
          type: 'Hotels/Resorts',
          description: 'Integrated schedule management for guestrooms, amenities, and landscaping',
          keyFeatures: ['Room type construction sequence', 'F&B facility opening coordination', 'Seasonal opening optimization'],
        },
        {
          type: 'Mixed-Use Developments',
          description: 'Integrated management of residential, retail, and office mixed-use developments',
          keyFeatures: ['Use-by-use work separation', 'Common infrastructure advance work', 'Phased completion planning'],
        },
      ],
      uniqueCapabilities: [
        { title: 'Tenant Schedule Integration', description: 'Integrate dozens of tenant fit-out schedules and proactively prevent conflicts.', benefit: '70% tenant coordination time reduction' },
        { title: 'Finish Sequencing AI', description: 'AI analyzes complex finish work sequences to derive optimal construction order.', benefit: '25% finish work duration reduction' },
        { title: 'Opening Date Reverse Optimization', description: 'Calculate optimal start/completion timing for each activity working backward from opening target date.', benefit: '95% opening date compliance rate' },
        { title: 'Operations Transition Planning', description: 'Optimize handover period between construction completion and operations startup.', benefit: '40% transition period reduction' },
      ],
      integratedProducts: ['plan', 'model'],
      relatedCaseStudy: 'dataCenter',
    },
  },

  // Company Page
  companyPage: {
    title: 'About AICONS',
    subtitle: "We're on a mission to transform how construction projects are planned and executed through the power of AI.",
    ourStory: 'Our Story',
    storyP1: 'AICONS Technologies was founded with a simple but ambitious goal: to bring the power of artificial intelligence to construction scheduling and optimization.',
    storyP2: 'Construction is one of the largest industries in the world, yet it has been slow to adopt new technologies. We believe that AI can transform how projects are planned, scheduled, and executed.',
    storyP3: 'Today, AICONS is trusted by leading construction companies around the world to optimize their projects, reduce costs, and deliver on time.',
    foundedIn: 'Founded in Silicon Valley',
    ourValues: 'Our Values',
    values: {
      innovation: { title: 'Innovation', description: "Pushing the boundaries of what's possible in construction technology" },
      customerSuccess: { title: 'Customer Success', description: "Your success is our success - we're partners in your journey" },
      integrity: { title: 'Integrity', description: 'Honest, transparent, and trustworthy in everything we do' },
      excellence: { title: 'Excellence', description: 'Delivering the highest quality solutions and support' },
    },
    leadership: 'Leadership',
    leadershipSubtitle: 'Our team brings together expertise in AI, construction management, and enterprise software.',
    team: {
      rene: { name: 'René Morkos', role: 'Founder & CEO', bio: 'PhD in AI and Construction Management from Stanford' },
      leadership: { name: 'Leadership Team', role: 'Executive Team', bio: 'Experienced leaders from construction and technology' },
    },
    interestedInJoining: 'Interested in joining our team?',
    viewOpenPositions: 'View Open Positions',
    globalOffices: 'Global Offices',
    offices: {
      sanFrancisco: { city: 'San Francisco', country: 'USA', type: 'Headquarters' },
      london: { city: 'London', country: 'UK', type: 'Europe Office' },
      sydney: { city: 'Sydney', country: 'Australia', type: 'APAC Office' },
    },
    getInTouch: 'Get in Touch',
    getInTouchSubtitle: "Have questions? We'd love to hear from you.",
    form: {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      company: 'Company',
      message: 'Message',
      sendMessage: 'Send Message',
    },
  },

  // Resources Page
  resourcesPage: {
    title: 'Resources',
    subtitle: 'Explore case studies, webinars, and whitepapers to learn more about AI-powered construction scheduling',
    caseStudies: 'Case Studies',
    webinars: 'Webinars',
    whitepapers: 'Whitepapers',
    readMore: 'Read More',
    downloadPDF: 'Download PDF',
    stayUpdated: 'Stay Updated',
    newsletterSubtitle: 'Subscribe to our newsletter for the latest resources and industry insights.',
    enterEmail: 'Enter your email',
    subscribe: 'Subscribe',
    cases: {
      alignJV: {
        title: 'Align JV - HS2 High Speed Rail',
        description: 'How Align JV reduced project duration by 17% using AICONS optimization.',
        type: 'Case Study',
      },
      dataCenter: {
        title: 'Data Center Construction',
        description: 'Optimizing complex MEP coordination in a large-scale data center project.',
        type: 'Case Study',
      },
      industrialBrazil: {
        title: 'Industrial Facility Brazil',
        description: 'Reta Engenharia saved millions in labor costs with AI-powered scheduling.',
        type: 'Case Study',
      },
    },
    webinarList: {
      introAI: {
        title: 'Introduction to AI-Powered Scheduling',
        description: 'Learn how AI is transforming construction project scheduling.',
        duration: '45 min',
      },
      resourceAllocation: {
        title: 'Optimizing Resource Allocation',
        description: 'Best practices for using AICONS to optimize resource leveling.',
        duration: '60 min',
      },
      bimToSchedule: {
        title: 'BIM to Schedule Automation',
        description: 'Generating schedules directly from your BIM models.',
        duration: '30 min',
      },
    },
    whitepaperList: {
      futureScheduling: {
        title: 'The Future of Construction Scheduling',
        description: 'A comprehensive look at how AI is reshaping project controls.',
        pages: '24 pages',
      },
      measuringROI: {
        title: 'Measuring Schedule Optimization ROI',
        description: 'Quantifying the benefits of AI-powered schedule optimization.',
        pages: '18 pages',
      },
    },
  },

  // Common
  common: {
    learnMore: 'Learn More',
    getStarted: 'Get Started',
    requestDemo: 'Request Demo',
    contactUs: 'Contact Us',
    viewAll: 'View All',
  },

  // Language
  language: {
    ko: '한국어',
    en: 'English',
    select: 'Select Language',
  },
}
