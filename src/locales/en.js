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
    papers: 'Papers',
    patents: 'Patents',
    downloads: 'Downloads',
  },

  // Products menu
  products: {
    viewAll: 'View All Products',
    comingSoon: 'Coming Soon',
    stats: {
      systems: 'Systems',
      automation: 'Automation',
      costSavings: 'Cost Savings',
      predictionAccuracy: 'Prediction Accuracy',
      maintenanceSavings: 'Maintenance Savings',
      uptimeRate: 'Uptime Rate',
      downtimeReduction: 'Downtime Reduction',
    },
    categories: {
      building: {
        name: 'Building',
        description: 'AI Information Management for Building Construction',
        systemsTitle: 'Building AI Systems',
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
            status: 'coming_soon',
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
            status: 'coming_soon',
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
            status: 'coming_soon',
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
            status: 'coming_soon',
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
            status: 'coming_soon',
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
            status: 'coming_soon',
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
            status: 'coming_soon',
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
        systemsTitle: 'Civil AI Systems',
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
        systemsTitle: 'Plant AI Systems',
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
    parsing: 'Parsing',
    automation: 'Automation',
    optimization: 'Optimization',
    scheduling: 'Scheduling',
    integration: 'Integration',
    feedback: 'I-Feedback',
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
    title: 'AISIMS Technology',
    subtitle: 'From structural design to construction, revolutionize the construction process with 6 core technologies',
    techTitle: 'AISIMS Core Technologies',
    viewAll: 'View All Technologies',
    learnMore: 'Learn More',
    requestDemo: 'Request Demo',
    keyCapabilities: 'Key Capabilities',
    keyMetrics: 'Key Performance Metrics',
    useCases: 'Use Cases',
    workflow: 'Workflow',
    recommendedProducts: 'Applicable Products',
    readyToTransform: 'Ready to Transform Your Projects?',
    scheduleDemo: 'Schedule a Demo',
    solutionNotFound: 'Technology not found',
    viewParsing: 'View Parsing Technology',

    // Parsing
    parsing: {
      name: 'Parsing',
      tagline: 'Automatic Structural Drawing Interpretation',
      description: 'AI automatically analyzes structural drawings (PDF, CAD) and extracts structural and rebar data. Achieve over 90% time savings compared to manual work and over 99% accuracy.',
      features: [
        { title: 'Automatic Drawing Recognition', description: 'AI automatically recognizes and analyzes structural drawings in various formats including PDF, DWG.', icon: 'FileText' },
        { title: 'Member Info Extraction', description: 'Automatically extract dimensions, positions, and property information of structural members like columns, beams, slabs, and walls.', icon: 'Database' },
        { title: 'Rebar Data Extraction', description: 'Accurately extract rebar specifications, spacing, cover thickness, and other placement information.', icon: 'Layers' },
        { title: 'General Notes Parsing', description: 'Automatically parse general notes including design loads, concrete strength, and rebar grades.', icon: 'FileSearch' },
        { title: 'Data Validation System', description: 'Automatically validate extracted data consistency and detect errors.', icon: 'Check' },
      ],
      metrics: {
        accuracy: { value: '99%', label: 'Data Accuracy' },
        timeReduction: { value: '90%', label: 'Time Savings' },
        formats: { value: '10+', label: 'Supported File Formats' },
        automation: { value: '95%', label: 'Automation Rate' },
      },
      useCases: [
        {
          title: 'Large Residential Complex Design Analysis',
          scenario: 'Need to analyze over 100 structural drawing sheets for a 1,500-unit apartment complex.',
          solution: 'Batch upload all drawings and run automatic analysis with Parsing technology.',
          result: 'Completed 2-week task in 2 days, 80% labor cost reduction.',
        },
        {
          title: 'Renovation Project Legacy Drawing Analysis',
          scenario: 'Only damaged drawings and scanned PDFs exist for a 30-year-old building.',
          solution: 'AI-based OCR and pattern recognition extract structural information from low-quality drawings.',
          result: 'Successfully recovered over 85% of data from previously unusable drawings.',
        },
        {
          title: 'Design Change History Tracking',
          scenario: 'Need to identify changes between multiple versions of structural drawings.',
          solution: 'Analyze each version with Parsing and auto-generate comparison and change report.',
          result: 'Zero missed changes, 300% improvement in design change management efficiency.',
        },
      ],
      workflow: [
        { step: 1, title: 'Upload Drawings', description: 'Upload structural drawings in PDF, DWG, image formats to the system.' },
        { step: 2, title: 'AI Auto-Analysis', description: 'AI recognizes drawing structure and identifies data regions.' },
        { step: 3, title: 'Data Extraction', description: 'Automatically extract member info, rebar data, and general notes.' },
        { step: 4, title: 'Validation & Correction', description: 'Validate extracted data consistency and correct as needed.' },
        { step: 5, title: 'Data Output', description: 'Connect refined data to downstream processes (BIM, quantity takeoff, etc.).' },
      ],
      recommendedProducts: ['building'],
    },

    // Automation
    automation: {
      name: 'Automation',
      tagline: 'Auto-generate BIM, Quantities, 2D Drawings, BBS',
      description: 'Based on data extracted through Parsing, automatically generate BIM models, quantity takeoffs, 2D construction drawings, and Bar Bending Schedules (BBS). Eliminate repetitive tasks and maximize productivity.',
      features: [
        { title: 'BIM Model Auto-Generation', description: 'Automatically generate Revit and IFC-compatible BIM models based on structural data.', icon: 'Box' },
        { title: 'Quantity Takeoff Automation', description: 'Automatically calculate concrete, rebar, formwork quantities and generate bills of quantities.', icon: 'Calculator' },
        { title: '2D Construction Drawing Generation', description: 'Automatically generate 2D drawings including rebar placement, structural plans, and sections.', icon: 'FileText' },
        { title: 'BBS Generation', description: 'Automatically generate detailed bar bending schedules for rebar cutting and fabrication.', icon: 'Layers' },
        { title: 'Multi-format Output', description: 'Export deliverables in various formats including Excel, PDF, DWG, IFC.', icon: 'Settings' },
      ],
      metrics: {
        bimSpeed: { value: '95%', label: 'BIM Generation Time Reduction' },
        quantityAccuracy: { value: '98%', label: 'Quantity Takeoff Accuracy' },
        drawingTime: { value: '90%', label: 'Drawing Time Savings' },
        bbsAutomation: { value: '100%', label: 'BBS Automation Rate' },
      },
      useCases: [
        {
          title: 'New Office Building BIM Development',
          scenario: 'Need structural BIM model for a 35-story office building with 5 basement levels.',
          solution: 'Auto-generate entire structural BIM using Automation based on Parsing data.',
          result: '3-month estimated work completed in 2 weeks, achieved LOD 350 level.',
        },
        {
          title: 'Large-Scale Quantity Takeoff Project',
          scenario: 'Need precise quantity takeoff for 5 buildings within 2 weeks for bidding.',
          solution: 'Simultaneously auto-calculate quantities for each building using Automation.',
          result: 'Completed quantity takeoff with 98%+ accuracy in 3 days.',
        },
        {
          title: 'Urgent Construction Drawing Generation',
          scenario: 'Need to revise rebar drawings within 3 days due to design change.',
          solution: 'Auto-regenerate rebar drawings based on changed design data using Automation.',
          result: 'All drawings updated in 1/10 the time of manual work.',
        },
      ],
      workflow: [
        { step: 1, title: 'Parsing Data Integration', description: 'Automatically integrate structural data extracted from Parsing.' },
        { step: 2, title: 'Set Generation Options', description: 'Select required deliverables: BIM, quantities, drawings, BBS.' },
        { step: 3, title: 'Auto-Generation', description: 'AI automatically generates selected deliverables.' },
        { step: 4, title: 'Quality Review', description: 'Review generated deliverables quality and adjust as needed.' },
        { step: 5, title: 'Deliverable Output', description: 'Output and distribute deliverables in various formats.' },
      ],
      recommendedProducts: ['building'],
    },

    // Optimization
    optimization: {
      name: 'Optimization',
      tagline: 'SLP-based Rebar Cutting Loss/Usage Optimization',
      description: 'Apply SLP (Stock Length Problem) algorithm to optimize rebar cutting patterns. Minimize cutting waste and reduce rebar usage for cost savings.',
      features: [
        { title: 'SLP Algorithm Application', description: 'Derive optimal rebar cutting combinations through mathematical optimization algorithm.', icon: 'Scissors' },
        { title: 'Cutting Loss Minimization', description: 'Reduce rebar cutting loss by over 50% compared to industry average.', icon: 'TrendingDown' },
        { title: 'Rebar Spec Optimization', description: 'Recommend optimal rebar specifications and lengths for site conditions.', icon: 'Ruler' },
        { title: 'Cost Simulation', description: 'Simulate and compare costs across various cutting scenarios.', icon: 'Calculator' },
        { title: 'Splice Location Optimization', description: 'Minimize splice count while ensuring structural safety.', icon: 'Link2' },
      ],
      metrics: {
        lossReduction: { value: '50%', label: 'Cutting Loss Reduction' },
        costSavings: { value: '15%', label: 'Rebar Cost Savings' },
        scenarios: { value: '1M+', label: 'Simulation Scenarios' },
        optimalRate: { value: '99%', label: 'Optimal Solution Rate' },
      },
      useCases: [
        {
          title: 'High-rise Mixed-use Rebar Optimization',
          scenario: 'Rebar requirements for 50-story mixed-use building exceed budget.',
          solution: 'Optimize entire rebar cutting pattern using Optimization.',
          result: 'Achieved under 3% rebar loss rate, 18% rebar cost reduction.',
        },
        {
          title: 'Underground Parking Large-scale Rebar Work',
          scenario: 'Need slab rebar optimization for 500,000 sq ft underground parking.',
          solution: 'Optimize slab rebar pattern and cutting plan using SLP algorithm.',
          result: '12% rebar usage reduction, 20% construction efficiency improvement.',
        },
        {
          title: 'Re-optimization for Design Changes',
          scenario: 'Need to re-establish rebar plan due to design change during construction.',
          solution: 'Quickly re-optimize for changed design using Optimization.',
          result: 'Re-optimization completed in 4 hours, prevented additional loss.',
        },
      ],
      workflow: [
        { step: 1, title: 'Rebar Data Input', description: 'Input BBS data or rebar requirements information.' },
        { step: 2, title: 'Constraint Setup', description: 'Set stock lengths, splice codes, construction conditions.' },
        { step: 3, title: 'SLP Optimization Run', description: 'AI analyzes millions of combinations to derive optimal solution.' },
        { step: 4, title: 'Result Analysis', description: 'Analyze optimization results and compare multiple scenarios.' },
        { step: 5, title: 'Cutting Plan Output', description: 'Output optimized cutting plan and BBS.' },
      ],
      recommendedProducts: ['building'],
    },

    // Scheduling
    scheduling: {
      name: 'Scheduling',
      tagline: 'Auto-generate BIM/Quantity/Procurement-linked Schedule',
      description: 'Link BIM models, quantity data, and procurement information to automatically generate optimized schedules. Establish executable schedules reflecting realistic resource constraints.',
      features: [
        { title: 'BIM-based Schedule Generation', description: 'Automatically generate work packages based on BIM model object information.', icon: 'CalendarClock' },
        { title: 'Quantity-linked Duration Calculation', description: 'Automatically calculate each activity duration based on actual quantities.', icon: 'Calculator' },
        { title: 'Procurement Schedule Integration', description: 'Link material procurement schedules to manage delay risks.', icon: 'Workflow' },
        { title: 'Resource Leveling', description: 'Optimize schedules considering labor, equipment, and resource availability.', icon: 'BarChart3' },
        { title: 'P6/MSP Integration', description: 'Support bi-directional data integration with Primavera P6 and MS Project.', icon: 'RefreshCw' },
      ],
      metrics: {
        scheduleTime: { value: '80%', label: 'Schedule Creation Time Reduction' },
        accuracy: { value: '95%', label: 'Duration Prediction Accuracy' },
        resourceOpt: { value: '30%', label: 'Resource Utilization Improvement' },
        integration: { value: '100%', label: 'P6/MSP Compatibility' },
      },
      useCases: [
        {
          title: 'Large Mixed-use Master Schedule',
          scenario: 'Need master schedule for 3-building, 24-month mixed-use development.',
          solution: 'Auto-generate integrated master schedule based on BIM data using Scheduling.',
          result: 'Completed detailed schedule with 5,000+ activities in 2 weeks.',
        },
        {
          title: 'Procurement-linked Schedule Management',
          scenario: 'Material procurement schedule uncertain due to global supply chain issues.',
          solution: 'Establish flexible schedule reflecting procurement lead times using Scheduling.',
          result: 'Minimized critical path impact despite procurement delays, met deadline.',
        },
        {
          title: 'Resource Constraint Reflection',
          scenario: 'Must simultaneously construct 5 buildings with 2 tower cranes.',
          solution: 'Optimize building construction sequence reflecting crane availability using Scheduling.',
          result: 'Zero resource conflicts, achieved 95% crane utilization.',
        },
      ],
      workflow: [
        { step: 1, title: 'BIM/Quantity Data Integration', description: 'Integrate BIM model and quantity data to system.' },
        { step: 2, title: 'Work Package Generation', description: 'AI analyzes BIM objects to auto-generate work packages.' },
        { step: 3, title: 'Duration Auto-Calculation', description: 'Calculate required duration based on quantity and productivity data.' },
        { step: 4, title: 'Resource Leveling', description: 'Optimize schedule reflecting resource constraints.' },
        { step: 5, title: 'Schedule Output', description: 'Output schedule in P6, MSP, Excel, and other formats.' },
      ],
      recommendedProducts: ['building'],
    },

    // Integration
    integration: {
      name: 'Integration',
      tagline: 'Auto-update All Deliverables on Design Change',
      description: 'When design changes occur, automatically update all deliverables from Parsing to Scheduling. Maintain data consistency and maximize change management efficiency.',
      features: [
        { title: 'Auto Change Detection', description: 'Automatically detect design document changes and analyze impact scope.', icon: 'RefreshCw' },
        { title: 'Cascading Updates', description: 'Automatically cascade updates to BIM, quantities, drawings, BBS, and schedules.', icon: 'Link2' },
        { title: 'Change History Management', description: 'Track all change history and manage versions.', icon: 'Database' },
        { title: 'Impact Analysis', description: 'Automatically analyze impact of changes on cost and schedule.', icon: 'BarChart3' },
        { title: 'Approval Workflow', description: 'Provide systematic workflow for change review and approval.', icon: 'Workflow' },
      ],
      metrics: {
        updateTime: { value: '95%', label: 'Update Time Reduction' },
        consistency: { value: '100%', label: 'Data Consistency' },
        tracking: { value: '100%', label: 'Change Tracking Rate' },
        errorReduction: { value: '90%', label: 'Error Reduction' },
      },
      useCases: [
        {
          title: 'Design Change Response During Construction',
          scenario: 'Structural design changed during construction, need to update all related documents.',
          solution: 'Upload changed drawings to Integration for automatic update of all deliverables.',
          result: 'Completed 2-week task in 1 day, zero data inconsistencies.',
        },
        {
          title: 'VE (Value Engineering) Alternative Review',
          scenario: 'Need to quickly review VE alternatives for cost reduction.',
          solution: 'Instantly simulate quantity, cost, and schedule changes per VE alternative using Integration.',
          result: 'Reviewed 10 alternatives in 3 days, derived optimal VE approach.',
        },
        {
          title: 'Multiple Design Change Integrated Management',
          scenario: 'Multiple design changes accumulated, making management difficult.',
          solution: 'Systematically manage all change history and maintain current status using Integration.',
          result: '90% reduction in design change errors, zero supervision findings.',
        },
      ],
      workflow: [
        { step: 1, title: 'Upload Changed Documents', description: 'Upload changed design documents to system.' },
        { step: 2, title: 'Change Detection', description: 'AI auto-detects changes by comparing with previous version.' },
        { step: 3, title: 'Impact Scope Analysis', description: 'Analyze impact scope and cost/schedule impacts from change.' },
        { step: 4, title: 'Auto Update', description: 'After approval, automatically update all related deliverables.' },
        { step: 5, title: 'Change History Recording', description: 'Record change history and send notifications to stakeholders.' },
      ],
      recommendedProducts: ['building'],
    },

    // Feedback
    feedback: {
      name: 'I-Feedback',
      tagline: 'AI-Powered Automated Design Feedback',
      description: 'AI automatically reviews architectural design documents and provides real-time feedback through comprehensive analysis of regulatory compliance, structural safety, and constructability. Detect design errors early and improve quality.',
      features: [
        { title: 'Automated Code Compliance Review', description: 'Automatically review compliance with building codes, structural standards, and related regulations.', icon: 'FileSearch' },
        { title: 'Structural Safety Analysis', description: 'AI automatically analyzes structural design safety and suggests improvements.', icon: 'Target' },
        { title: 'Constructability Review', description: 'Evaluate design constructability and proactively identify potential issues.', icon: 'Settings' },
        { title: 'Design Quality Scoring', description: 'Comprehensively score design quality based on multi-faceted analysis results.', icon: 'BarChart3' },
        { title: 'Automated Improvement Suggestions', description: 'AI suggests specific design improvements based on analysis results.', icon: 'Workflow' },
      ],
      metrics: {
        reviewTime: { value: '85%', label: 'Review Time Reduction' },
        errorDetection: { value: '95%', label: 'Error Detection Rate' },
        compliance: { value: '99%', label: 'Compliance Verification Rate' },
        quality: { value: '40%', label: 'Design Quality Improvement' },
      },
      useCases: [
        {
          title: 'Large Residential Complex Design Review',
          scenario: 'Need structural design review for a 1,000-unit apartment complex within 2 weeks.',
          solution: 'Batch upload all design documents and run AI auto-review with I-Feedback.',
          result: 'Completed 4-week task in 3 days, discovered 15 design errors in advance.',
        },
        {
          title: 'Design Change Impact Feedback',
          scenario: 'Need to quickly re-review related drawings for compliance after design change during construction.',
          solution: 'Instantly generate regulatory, structural, and constructability feedback on changed design using I-Feedback.',
          result: '90% review time reduction, prevented cascading errors from changes.',
        },
        {
          title: 'New Design Quality Pre-verification',
          scenario: 'Need to verify and improve bid design quality in a short period.',
          solution: 'Auto-derive design quality scoring and improvement suggestions using I-Feedback.',
          result: '30% design quality score improvement, 80% pre-resolution of supervision findings.',
        },
      ],
      workflow: [
        { step: 1, title: 'Upload Design Documents', description: 'Upload design documents in PDF, DWG, BIM formats to the system.' },
        { step: 2, title: 'AI Auto-Analysis', description: 'AI comprehensively analyzes design from regulatory, structural, and constructability perspectives.' },
        { step: 3, title: 'Feedback Report Generation', description: 'Generate organized feedback report by category from analysis results.' },
        { step: 4, title: 'Improvement Suggestions', description: 'AI suggests specific improvement measures for discovered issues.' },
        { step: 5, title: 'Re-review After Revision', description: 'Re-review after design revision to confirm improvement results.' },
      ],
      recommendedProducts: ['building'],
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
    subtitle: 'Explore our research papers, patents, and downloadable resources',
    downloadPDF: 'Download PDF',
    papers: {
      title: 'Papers',
      items: {
        paper1: {
          title: 'Minimizing Rebar Consumption: A Decarbonization Strategy for the Civil and Construction Industry',
          authors: 'Widjaja, D.D., Rachmawati, T.S.N., Kim, S.',
          journal: 'Sustainability',
        },
        paper2: {
          title: 'Reducing Rebar Cutting Waste and Rebar Usage of Beams: A Two-Stage Optimization Algorithm',
          authors: 'Widjaja, D.D., Kim, S.',
          journal: 'Buildings',
        },
        paper3: {
          title: 'Optimizing Rebar Consumption and Cutting Waste in Column Reinforcement: Integrated Mechanical Couplers and a Special-Length-Priority Minimization Algorithm',
          authors: 'Widjaja, D.D., Kim, S., Kim, D.J.',
          journal: 'Buildings',
        },
        paper4: {
          title: 'Special Length Priority Optimization Model: Minimizing Wall Rebar Usage and Cutting Waste',
          authors: 'Kim, D.J., Khant, L.P., Widjaja, D.D., Kim, S.',
          journal: 'Buildings',
        },
        paper5: {
          title: 'Optimization of Rebar Usage and Sustainability Based on Special-Length Priority: A Case Study of Mechanical Couplers in Diaphragm Walls',
          authors: 'Widjaja, D.D., Khant, L.P., Kim, S., Kim, K.Y.',
          journal: 'Sustainability',
        },
        paper6: {
          title: 'Combined Mechanical Couplers and Special-Length-Priority Algorithm for Reducing Rebar Consumption and Cutting Waste of Beam Reinforcement',
          authors: 'Widjaja, D.D., Park, C.Y., Choi, C.H., Kim, S.',
          journal: 'Results in Engineering',
        },
        paper7: {
          title: 'A BIM-Based Bar Bending Schedule Generation Algorithm with Enhanced Accuracy',
          authors: 'Khant, L.P., Widjaja, D.D., Kwon, K., Kim, S.',
          journal: 'Buildings',
        },
        paper8: {
          title: 'A Dynamic Simulation Model for Near-Zero Rebar-Cutting Waste through Special-Length-Priority Optimization',
          authors: 'Oh, J., Kim, S., Widjaja, D.D.',
          journal: 'Buildings',
        },
      },
    },
    patents: {
      title: 'Patents',
      registered: 'Registered',
      pending: 'Pending',
      items: {
        patent1: {
          title: 'AI-based Automatic Structural Drawing Interpretation and BIM Model Generation System',
          number: 'Patent No. 10-2024-0001234',
          date: 'Registered Mar 15, 2024',
        },
        patent2: {
          title: 'SLP Algorithm-based Rebar Cutting Loss Optimization Apparatus and Method',
          number: 'Patent No. 10-2024-0005678',
          date: 'Registered Jun 20, 2024',
        },
        patent3: {
          title: 'Construction Schedule Auto-generation Method Based on Process Simulation',
          number: 'Application No. 10-2024-0009012',
          date: 'Filed Sep 10, 2024',
        },
        patent4: {
          title: 'AI-based Design Change Auto-detection and Cascading Update System',
          number: 'Application No. 10-2025-0001234',
          date: 'Filed Jan 15, 2025',
        },
      },
    },
    downloads: {
      title: 'PDF Downloads',
      items: {
        dl1: {
          title: 'AICONS Company Profile',
          description: 'An overview of AICONS Technologies vision, technology, and key achievements.',
          pages: '16 pages',
        },
        dl2: {
          title: 'AISIMS Service Brochure',
          description: 'Features and benefits of the AI Structural Information Management System (AISIMS).',
          pages: '12 pages',
        },
        dl3: {
          title: 'Construction AI Technology White Paper',
          description: 'A comprehensive analysis of how AI is revolutionizing the construction industry.',
          pages: '24 pages',
        },
        dl4: {
          title: 'AISIMS Case Studies Collection',
          description: 'Real-world project case studies with ROI analysis and implementation results.',
          pages: '20 pages',
        },
        dl5: {
          title: 'BIM & AI Integration Solution Guide',
          description: 'Guide on integrating BIM data with AI technology for construction workflows.',
          pages: '18 pages',
        },
      },
    },
    cta: {
      title: 'Want to Learn More?',
      subtitle: 'Have questions about our technology and services? Feel free to reach out anytime.',
    },
  },

  // Common
  common: {
    learnMore: 'Learn More',
    getStarted: 'Get Started',
    requestDemo: 'Request Demo',
    contactUs: 'Contact Us',
    viewAll: 'View All',
    close: 'Close',
  },

  // Language
  language: {
    ko: '한국어',
    en: 'English',
    select: 'Select Language',
  },
}
