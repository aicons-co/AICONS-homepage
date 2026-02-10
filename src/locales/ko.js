export default {
  // Navigation
  nav: {
    products: '제품',
    solutions: '솔루션',
    resources: '리소스',
    company: '회사소개',
    viewAllProducts: '모든 제품 보기',
    byStakeholder: '이해관계자별',
    byProjectType: '프로젝트 유형별',
    caseStudies: '사례 연구',
    webinars: '웨비나',
    blog: '블로그',
    whitepapers: '백서',
  },

  // Products menu
  products: {
    viewAll: '모든 제품 보기',
    comingSoon: '출시 예정',
    stats: {
      systems: '시스템',
      automation: '자동화율',
      costSavings: '비용 감소',
      predictionAccuracy: '예측 정확도',
      maintenanceSavings: '비용 감소',
      uptimeRate: '설비 가동률',
      downtimeReduction: '다운타임 감소',
    },
    categories: {
      building: {
        name: '건축',
        description: '건축 분야 AI 정보 관리 시스템',
        longDescription: '설계부터 시공까지, 건축 프로젝트의 모든 단계를 AI로 자동화하고 최적화합니다.',
        icon: 'Building2',
        status: 'active',
        systemCount: 8,
        systems: {
          aisims: {
            name: 'AISIMS',
            fullName: 'AI Structural Information Management System',
            description: '구조·골조 정보 관리 및 자동화',
            status: 'active',
            features: [
              'BIM 기반 구조 정보 자동 추출',
              '물량 산출 자동화 (95% 정확도)',
              '구조 도면 자동 생성',
              '공정 연계 일정 관리',
              '실시간 설계 변경 추적',
              '협력업체 정보 공유'
            ],
            mockData: {
              efficiency: [
                { name: 'BIM 구축', before: 100, after: 10, unit: '시간' },
                { name: '물량 산출', before: 40, after: 2, unit: '시간' },
                { name: '도면 생성', before: 80, after: 4, unit: '시간' },
                { name: '공정 연계', before: 24, after: 1, unit: '시간' }
              ],
              costSavings: [
                { name: '인건비 절감', value: 45, color: '#4F46E5' },
                { name: '자재비 절감', value: 25, color: '#10B981' },
                { name: '재작업 비용 절감', value: 30, color: '#F59E0B' }
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
            description: '기계설비 정보 관리 자동화',
            status: 'coming_soon',
            features: [
              '기계설비 BIM 자동 분석',
              '배관/덕트 물량 산출',
              '간섭 체크 자동화',
              '설비 시공 순서 최적화',
              '유지보수 정보 연계',
              '에너지 효율 분석'
            ],
            mockData: {
              efficiency: [
                { name: '설비 모델링', before: 120, after: 15, unit: '시간' },
                { name: '간섭 검토', before: 48, after: 4, unit: '시간' },
                { name: '물량 산출', before: 32, after: 2, unit: '시간' },
                { name: '시공도 작성', before: 80, after: 8, unit: '시간' }
              ],
              costSavings: [
                { name: '설계 오류 감소', value: 35, color: '#4F46E5' },
                { name: '재시공 비용 절감', value: 40, color: '#10B981' },
                { name: '공기 단축', value: 25, color: '#F59E0B' }
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
            description: '전기설비 정보 관리 자동화',
            status: 'coming_soon',
            features: [
              '전기설비 BIM 자동 분석',
              '케이블 트레이 라우팅 최적화',
              '부하 계산 자동화',
              '전력 계통도 자동 생성',
              '조명 시뮬레이션',
              '에너지 사용량 예측'
            ],
            mockData: {
              efficiency: [
                { name: '전기 설계', before: 96, after: 12, unit: '시간' },
                { name: '부하 계산', before: 24, after: 1, unit: '시간' },
                { name: '케이블 산출', before: 40, after: 3, unit: '시간' },
                { name: '도면 작성', before: 64, after: 6, unit: '시간' }
              ],
              costSavings: [
                { name: '설계 효율화', value: 40, color: '#4F46E5' },
                { name: '자재 최적화', value: 30, color: '#10B981' },
                { name: '시공 효율화', value: 30, color: '#F59E0B' }
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
            description: '마감공사 정보 및 물량 자동화',
            status: 'coming_soon',
            features: [
              '마감재 물량 자동 산출',
              '실별 마감 스케줄 관리',
              '자재 발주 최적화',
              '품질 검수 체크리스트',
              '하자 관리 시스템',
              '입주 전 펀치리스트'
            ],
            mockData: {
              efficiency: [
                { name: '물량 산출', before: 80, after: 6, unit: '시간' },
                { name: '자재 발주', before: 40, after: 4, unit: '시간' },
                { name: '공정 관리', before: 60, after: 8, unit: '시간' },
                { name: '품질 검수', before: 48, after: 6, unit: '시간' }
              ],
              costSavings: [
                { name: '자재 손실 감소', value: 35, color: '#4F46E5' },
                { name: '공기 단축', value: 30, color: '#10B981' },
                { name: '하자 비용 절감', value: 35, color: '#F59E0B' }
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
            description: '건물 에너지 분석·운영 최적화',
            status: 'coming_soon',
            features: [
              '실시간 에너지 모니터링',
              'AI 기반 에너지 최적화',
              '설비 예측 유지보수',
              '탄소 배출량 관리',
              '에너지 비용 예측',
              '친환경 인증 지원'
            ],
            mockData: {
              efficiency: [
                { name: '에너지 분석', before: 40, after: 2, unit: '시간' },
                { name: '설비 점검', before: 80, after: 8, unit: '시간' },
                { name: '보고서 작성', before: 24, after: 1, unit: '시간' },
                { name: '최적화 적용', before: 48, after: 4, unit: '시간' }
              ],
              costSavings: [
                { name: '에너지 비용 절감', value: 50, color: '#4F46E5' },
                { name: '유지보수 절감', value: 30, color: '#10B981' },
                { name: '탄소 크레딧', value: 20, color: '#F59E0B' }
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
            description: '사업성·수익성 분석 자동화',
            status: 'coming_soon',
            features: [
              '부동산 시장 분석',
              '사업성 타당성 검토',
              '수익성 시뮬레이션',
              '리스크 분석',
              '투자 수익률 예측',
              '경쟁 분석 리포트'
            ],
            mockData: {
              efficiency: [
                { name: '시장 조사', before: 160, after: 8, unit: '시간' },
                { name: '사업성 분석', before: 80, after: 4, unit: '시간' },
                { name: '수익성 검토', before: 40, after: 2, unit: '시간' },
                { name: '보고서 작성', before: 24, after: 1, unit: '시간' }
              ],
              costSavings: [
                { name: '분석 비용 절감', value: 60, color: '#4F46E5' },
                { name: '의사결정 가속화', value: 25, color: '#10B981' },
                { name: '리스크 회피', value: 15, color: '#F59E0B' }
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
            description: '건축 계획 및 초기 설계 자동화',
            status: 'coming_soon',
            features: [
              '대지 분석 자동화',
              '건축 매스 자동 생성',
              '법규 검토 자동화',
              '일조/조망 시뮬레이션',
              '평면 배치 최적화',
              '초기 설계안 비교'
            ],
            mockData: {
              efficiency: [
                { name: '대지 분석', before: 40, after: 2, unit: '시간' },
                { name: '매스 스터디', before: 80, after: 4, unit: '시간' },
                { name: '법규 검토', before: 24, after: 1, unit: '시간' },
                { name: '설계안 작성', before: 160, after: 16, unit: '시간' }
              ],
              costSavings: [
                { name: '설계 시간 절감', value: 45, color: '#4F46E5' },
                { name: '검토 비용 절감', value: 30, color: '#10B981' },
                { name: '수정 비용 절감', value: 25, color: '#F59E0B' }
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
            description: '건축 현장 조달 관리 자동화',
            status: 'coming_soon',
            features: [
              '자재 수급 예측',
              '공급업체 관리',
              '재고 최적화',
              '배송 일정 관리',
              '비용 분석',
              '품질 이력 추적'
            ],
            mockData: {
              efficiency: [
                { name: '발주 처리', before: 48, after: 4, unit: '시간' },
                { name: '재고 관리', before: 24, after: 2, unit: '시간' },
                { name: '배송 조율', before: 40, after: 4, unit: '시간' },
                { name: '비용 분석', before: 32, after: 2, unit: '시간' }
              ],
              costSavings: [
                { name: '재고 비용 절감', value: 35, color: '#4F46E5' },
                { name: '물류비 절감', value: 30, color: '#10B981' },
                { name: '손실 방지', value: 35, color: '#F59E0B' }
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
        name: '토목',
        description: '토목 분야 AI 정보 관리 시스템',
        longDescription: '교량, 터널, 도로 등 토목 인프라의 유지관리와 상태 예측을 AI로 혁신합니다.',
        icon: 'Landmark',
        status: 'coming_soon',
        systemCount: 3,
        systems: {
          aibms: {
            name: 'AI-BMS',
            fullName: 'AI Bridge Management System',
            description: '교량 유지관리 및 상태 예측',
            status: 'coming_soon',
            features: [
              '교량 상태 실시간 모니터링',
              'AI 기반 손상 예측',
              '유지보수 우선순위 결정',
              '생애주기 비용 분석',
              '안전성 평가 자동화',
              '점검 일정 최적화'
            ],
            mockData: {
              efficiency: [
                { name: '상태 점검', before: 80, after: 8, unit: '시간' },
                { name: '손상 분석', before: 40, after: 4, unit: '시간' },
                { name: '보고서 작성', before: 24, after: 2, unit: '시간' },
                { name: '보수 계획', before: 48, after: 6, unit: '시간' }
              ],
              costSavings: [
                { name: '점검 비용 절감', value: 35, color: '#4F46E5' },
                { name: '예방 정비', value: 40, color: '#10B981' },
                { name: '수명 연장', value: 25, color: '#F59E0B' }
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
            description: '터널 유지관리 및 위험 분석',
            status: 'coming_soon',
            features: [
              '터널 구조 안전 모니터링',
              '환기/조명 시스템 최적화',
              '화재 위험 예측',
              '교통량 분석',
              '유지보수 이력 관리',
              '비상 대응 시스템'
            ],
            mockData: {
              efficiency: [
                { name: '안전 점검', before: 120, after: 12, unit: '시간' },
                { name: '위험 분석', before: 48, after: 4, unit: '시간' },
                { name: '시스템 최적화', before: 80, after: 8, unit: '시간' },
                { name: '보고서 작성', before: 24, after: 2, unit: '시간' }
              ],
              costSavings: [
                { name: '운영 비용 절감', value: 30, color: '#4F46E5' },
                { name: '사고 예방', value: 45, color: '#10B981' },
                { name: '에너지 절감', value: 25, color: '#F59E0B' }
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
            description: '도로 유지관리 및 자산 관리',
            status: 'coming_soon',
            features: [
              '노면 상태 자동 분석',
              '포장 수명 예측',
              '보수 우선순위 결정',
              '교통량 예측',
              '자산 가치 평가',
              '예산 최적화'
            ],
            mockData: {
              efficiency: [
                { name: '노면 조사', before: 200, after: 20, unit: '시간' },
                { name: '상태 평가', before: 80, after: 8, unit: '시간' },
                { name: '보수 계획', before: 48, after: 4, unit: '시간' },
                { name: '예산 분석', before: 40, after: 4, unit: '시간' }
              ],
              costSavings: [
                { name: '조사 비용 절감', value: 40, color: '#4F46E5' },
                { name: '예방 보수', value: 35, color: '#10B981' },
                { name: '수명 연장', value: 25, color: '#F59E0B' }
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
        name: '플랜트',
        description: '플랜트 분야 AI 정보 관리 시스템',
        longDescription: '정유, 화학, 산업 플랜트의 설계부터 운영까지 AI 기반 최적화를 제공합니다.',
        icon: 'Factory',
        status: 'coming_soon',
        systemCount: 3,
        systems: {
          oilgas: {
            name: 'Oil & Gas Plant',
            fullName: 'AI Oil & Gas Plant Management System',
            description: '정유·가스 플랜트 AI 관리',
            status: 'coming_soon',
            features: [
              '공정 최적화',
              '설비 예측 정비',
              '안전 관리 시스템',
              '에너지 효율 분석',
              '환경 모니터링',
              '생산 계획 최적화'
            ],
            mockData: {
              efficiency: [
                { name: '공정 분석', before: 160, after: 16, unit: '시간' },
                { name: '설비 점검', before: 120, after: 12, unit: '시간' },
                { name: '안전 검사', before: 80, after: 8, unit: '시간' },
                { name: '보고서 작성', before: 40, after: 4, unit: '시간' }
              ],
              costSavings: [
                { name: '공정 효율화', value: 40, color: '#4F46E5' },
                { name: '다운타임 감소', value: 35, color: '#10B981' },
                { name: '안전 비용 절감', value: 25, color: '#F59E0B' }
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
            description: '석유화학 플랜트 AI 관리',
            status: 'coming_soon',
            features: [
              '화학 공정 최적화',
              '품질 관리 자동화',
              '에너지 사용 최적화',
              '배출 관리',
              '재고 관리',
              '안전 시스템 통합'
            ],
            mockData: {
              efficiency: [
                { name: '공정 최적화', before: 200, after: 20, unit: '시간' },
                { name: '품질 검사', before: 80, after: 8, unit: '시간' },
                { name: '에너지 분석', before: 48, after: 4, unit: '시간' },
                { name: '환경 모니터링', before: 40, after: 4, unit: '시간' }
              ],
              costSavings: [
                { name: '생산 효율화', value: 45, color: '#4F46E5' },
                { name: '에너지 절감', value: 30, color: '#10B981' },
                { name: '불량률 감소', value: 25, color: '#F59E0B' }
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
            description: '산업 플랜트 AI 관리',
            status: 'coming_soon',
            features: [
              '생산 라인 최적화',
              '설비 가동률 관리',
              '품질 예측',
              '재고 최적화',
              '에너지 관리',
              '인력 배치 최적화'
            ],
            mockData: {
              efficiency: [
                { name: '생산 계획', before: 80, after: 8, unit: '시간' },
                { name: '설비 관리', before: 120, after: 12, unit: '시간' },
                { name: '품질 관리', before: 60, after: 6, unit: '시간' },
                { name: '재고 관리', before: 40, after: 4, unit: '시간' }
              ],
              costSavings: [
                { name: '생산성 향상', value: 40, color: '#4F46E5' },
                { name: '운영비 절감', value: 35, color: '#10B981' },
                { name: '품질 비용 절감', value: 25, color: '#F59E0B' }
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
  },

  // Hero Section
  hero: {
    badge: 'AI 기반 건설 일정 관리',
    words: ['최적화', '리스크 관리', '일정 회복', '일정 단축'],
    projectWith: '프로젝트를',
    // subtitle: `AICONS는 불투명하고 파편화된 건설 데이터를 AI와 BIM 기술로 통합하여 비용 절감, 일정 단축, 자재 낭비 최소화를 실현합니다. 건설 시나리오를 시뮬레이션하여 최적의 방법을 적용하세요.`,
    // subtitle: `설계부터 시공까지, AI Agent가 이끄는 완벽한 디지털 전환`,
    subtitle: `건축 설계부터 시공까지, AICONS가 이끄는 완벽한 디지털 전환`,
    watchVideo: '시현 영상',
    durationReduction: 'Manpower Reduction',
    laborCostSavings: 'RCW  Reduction',
    equipmentSavings: 'Cost Saving',
  },

  // Trust Section
  trust: {
    title: '업계 선도 기업들이 신뢰합니다',
  },

  // Features Section
  features: {
    title: '왜',
    titleHighlight: 'AICONS',
    titleEnd: '인가요?',
    // subtitle: 'AI 기반 플랫폼으로 건설 계획과 프로젝트 과정을 혁신적으로 개선하세요.',
    subtitle: 'AICONS는 불투명하고 파편화된 건설 데이터를 AI와 BIM 기술로 통합하여 비용 절감과 일정 단축, 자재 낭비를 최소화합니다. 건설 시나리오를 시뮬레이션하여 최적의 방법을 적용하세요.',
    automateOptimization: {
      title: '최적화 자동화',
      description: '수백만 가지 가능성을 시뮬레이션하여 프로젝트에 최적화된 일정을 찾습니다.',
    },
    identifyRisks: {
      title: '리스크 식별 및 완화',
      description: '잠재적 리스크를 사전에 식별하고 완화 전략을 수립합니다.',
    },
    recoverAccelerate: {
      title: '일정 회복 또는 단축',
      description: '지연된 프로젝트를 회복하거나 정상 프로젝트를 더 단축할 방법을 찾습니다.',
    },
    integrateControls: {
      title: '프로젝트 관리 통합',
      description: '기존 프로젝트 관리 도구와 원활하게 통합됩니다.',
    },
  },

  // Products Section
  productsSection: {
    title: '제품 소개',
    subtitle: '프로젝트 요구사항에 적합한 해결책을 선택하세요.',
    learnMore: '자세히 보기',
    plan: {
      tagline: '일정 시각화 및 계획',
      description: '일정을 시각화하여 프로젝트 진행 상황을 관리하세요.',
      steps: {
        import: { title: '가져오기', description: 'P6 또는 MSP에서 기존 일정을 가져옵니다' },
        visualize: { title: '시각화', description: '대화형 4D 뷰로 일정을 확인합니다' },
        analyze: { title: '분석', description: '병목 현상과 최적화 기회를 식별합니다' },
        export: { title: '내보내기', description: '최적화된 일정을 도구로 내보냅니다' },
      },
    },
    optimize: {
      tagline: 'P6/MSP 기반 최적화',
      description: 'AI를 활용하여 건설 일정을 자동으로 최적화합니다.',
      steps: {
        connect: { title: '연결', description: 'P6 또는 Microsoft Project 파일에 연결합니다' },
        simulate: { title: '시뮬레이션', description: '수백만 가지 일정 시뮬레이션을 실행합니다' },
        optimize: { title: '최적화', description: 'AI가 최적의 자원 배분을 찾습니다' },
        compare: { title: '비교', description: '시나리오를 나란히 비교합니다' },
      },
    },
    model: {
      tagline: 'BIM 기반 모델링',
      description: 'BIM 모델에서 직접 최적화된 일정을 생성합니다.',
      steps: {
        upload: { title: '업로드', description: 'BIM 모델(Revit, IFC 등)을 업로드합니다' },
        extract: { title: '추출', description: '작업 패키지를 자동으로 추출합니다' },
        generate: { title: '생성', description: 'AI가 여러 일정 옵션을 생성합니다' },
        refine: { title: '정제', description: '건설 제약 조건으로 미세 조정합니다' },
      },
    },
  },

  // Testimonials Section
  testimonials: {
    title: '고객 사례',
    subtitle: '업계 리더들이 AICONS로 프로젝트를 혁신하는 방법을 확인하세요',
    quotes: {
      alignJV: 'AICONS는 복잡한 건설 순서에서 자원 배분을 최적화하면서 프로젝트 기간을 17% 단축하는 데 도움을 주었습니다.',
      reta: 'AI 기반 일정 관리는 이전에 없던 인사이트를 제공했습니다. 인건비만으로도 수십억 원을 절감했습니다.',
      scs: 'AICONS는 일정 최적화에 대한 우리의 접근 방식을 완전히 바꾸었습니다. 시뮬레이션 기능은 혁신적입니다.',
      parsons: 'AICONS를 워크플로우에 통합하고 프로젝트 계획 및 실행 방식이 즉시 개선되었습니다.',
      hdcc: '수백만 가지 시나리오를 시뮬레이션하고 최적의 경로를 찾는 능력은 매우 가치 있습니다.',
    },
    projectDirector: '프로젝트 디렉터',
    constructionManager: '공사 관리자',
    vpOperations: '운영 부사장',
    seniorPM: '수석 프로젝트 매니저',
    coo: '최고운영책임자',
  },

  // Metrics Section
  metrics: {
    title: '검증된 결과',
    subtitle: '측정 가능한 수치와 개선으로 검증된 성과를 달성합니다.',
    durationReduction: {
      label: '일정 단축',
      description: '전체 프로젝트 기간 단축',
    },
    laborSavings: {
      label: '인건비 절감',
      description: '최적화를 통한 인건비 절감',
    },
    equipmentSavings: {
      label: '장비비 절감',
      description: '보다 효율적인 장비 활용',
    },
  },

  // CTA Section
  cta: {
    title: '프로젝트를 혁신할 준비가 되셨나요?',
    subtitle: 'AISIMS로 건설 일정을 최적화하고 비용을 절감하세요.',
    contactSales: '영업팀 문의',
  },

  // Footer
  footer: {
    stayUpdated: '최신 소식 받기',
    newsletterDesc: 'AICONS Technologies의 최신 뉴스와 업데이트를 받아보세요',
    enterEmail: '이메일 입력',
    subscribe: '구독',
    description: 'AI 기반 건설 일정 관리 및 최적화 플랫폼',
    company: '회사',
    aboutUs: '회사 소개',
    careers: '채용',
    contact: '연락처',
    products: '제품',
    solutions: '솔루션',
    resources: '리소스',
    caseStudies: '프로젝트',
    blog: '블로그',
    webinars: '웨비나',
    copyright: 'AICONS Technologies. All rights reserved.',
    privacyPolicy: '개인정보처리방침',
    termsOfService: '이용약관',
  },

  // Products Page
  productsPage: {
    title: '제품 소개',
    subtitle: '건설 프로젝트에 적합한 AICONS 솔루션을 선택하세요',
    requestDemo: '데모 요청',
    downloadBrochure: '브로셔 다운로드',
    keyFeatures: '주요 기능',
    benefits: '이점',
    readyToStart: '{name}을 시작할 준비가 되셨나요?',
    scheduleDemo: '데모 예약',
    productNotFound: '제품을 찾을 수 없습니다',
    viewPlan: 'AICONS Plan 보기',
    plan: {
      tagline: '일정 시각화 및 계획',
      description: '일정 자동화와 시각화로 프로젝트 타임라인을 혁신하세요. AICONS Plan은 건설 일정에 생명을 불어넣는 강력한 4D 시각화 도구를 제공합니다.',
      features: [
        '대화형 4D 일정 시각화',
        '실시간 일정 업데이트',
        '자원 충돌 감지',
        '진행 상황 추적 및 보고',
        'P6 및 MSP 통합',
        '협업 계획 도구',
      ],
      benefits: {
        betterCommunication: { title: '더 나은 커뮤니케이션', description: '모두가 이해할 수 있는 시각적 일정' },
        fasterDecisions: { title: '빠른 의사결정', description: '문제가 되기 전에 이슈 식별' },
        improvedCoordination: { title: '향상된 협력', description: '모든 이해관계자 정렬 유지' },
      },
    },
    optimize: {
      tagline: 'AI 기반 일정 최적화',
      description: '인공지능을 활용하여 건설 일정을 자동으로 최적화합니다. 수백만 가지 시나리오를 시뮬레이션하여 최적의 경로를 찾습니다.',
      features: [
        'AI 기반 일정 최적화',
        '수백만 가지 시뮬레이션 시나리오',
        '자원 평준화 자동화',
        'What-if 시나리오 분석',
        '비용 최적화 알고리즘',
        '리스크 조정 일정 관리',
      ],
      benefits: {
        durationReduction: { title: '17% 일정 단축', description: '평균 프로젝트 타임라인 개선' },
        laborSavings: { title: '14% 인건비 절감', description: '최적화된 자원 배분' },
        riskManagement: { title: '더 나은 리스크 관리', description: '리스크가 발생하기 전에 식별' },
      },
    },
    model: {
      tagline: 'BIM 기반 일정 생성',
      description: 'BIM 모델에서 직접 최적화된 일정을 생성합니다. AICONS Model은 작업 패키지를 추출하고 지능적인 건설 순서를 자동으로 생성합니다.',
      features: [
        '자동 BIM 모델 분석',
        '작업 패키지 추출',
        '시퀀스 생성',
        '제약 조건 감지',
        '다양한 모델 형식 (Revit, IFC)',
        'P6/MSP 직접 내보내기',
      ],
      benefits: {
        fasterPlanning: { title: '빠른 계획', description: '몇 주가 아닌 몇 시간 만에 일정 생성' },
        modelBasedAccuracy: { title: '모델 기반 정확성', description: '실제 물량 기반 일정' },
        multipleOptions: { title: '다양한 옵션', description: '다양한 건설 전략 탐색' },
      },
    },
  },

  // Solutions Page
  solutionsPage: {
    title: 'AISIMS 기술',
    subtitle: '구조 설계부터 시공까지, 5가지 핵심 기술로 건설 프로세스를 혁신합니다',
    techTitle: 'AISIMS 핵심 기술',
    viewAll: '모든 기술 보기',
    learnMore: '자세히 보기',
    requestDemo: '데모 요청',
    keyCapabilities: '핵심 역량',
    keyMetrics: '핵심 성과 지표',
    useCases: '활용 사례',
    workflow: '워크플로우',
    recommendedProducts: '적용 제품',
    readyToTransform: '프로젝트를 혁신할 준비가 되셨나요?',
    scheduleDemo: '데모 예약',
    solutionNotFound: '기술을 찾을 수 없습니다',
    viewParsing: 'Parsing 기술 보기',

    // Parsing
    parsing: {
      name: 'Parsing',
      tagline: '구조설계서 자동 해석',
      description: 'AI가 구조설계서(PDF, CAD)를 자동으로 분석하여 구조·철근 데이터를 추출합니다. 수작업 대비 90% 이상의 시간을 절감하고 99% 이상의 정확도를 달성합니다.',
      features: [
        { title: '구조설계서 자동 인식', description: 'PDF, DWG 등 다양한 형식의 구조설계서를 AI가 자동으로 인식하고 분석합니다.', icon: 'FileText' },
        { title: '부재 정보 추출', description: '기둥, 보, 슬래브, 벽체 등 구조 부재의 치수, 위치, 속성 정보를 자동 추출합니다.', icon: 'Database' },
        { title: '철근 배근 데이터 추출', description: '철근 규격, 간격, 피복 두께 등 배근 정보를 정확하게 추출합니다.', icon: 'Layers' },
        { title: '구조 일반사항 파싱', description: '설계 하중, 콘크리트 강도, 철근 등급 등 일반사항을 자동 파싱합니다.', icon: 'FileSearch' },
        { title: '데이터 검증 시스템', description: '추출된 데이터의 정합성을 자동 검증하고 오류를 감지합니다.', icon: 'Check' },
      ],
      metrics: {
        accuracy: { value: '99%', label: '데이터 정확도' },
        timeReduction: { value: '90%', label: '시간 절감' },
        formats: { value: '10+', label: '지원 파일 형식' },
        automation: { value: '95%', label: '자동화율' },
      },
      useCases: [
        {
          title: '대규모 주거단지 설계 분석',
          scenario: '1,500세대 아파트 단지의 구조설계서 100장 이상을 분석해야 하는 상황.',
          solution: 'Parsing 기술로 모든 설계서를 일괄 업로드하고 자동 분석 실행.',
          result: '기존 2주 소요 작업을 2일 만에 완료, 인력 비용 80% 절감.',
        },
        {
          title: '리모델링 프로젝트 기존 도면 분석',
          scenario: '30년 된 건물의 손상된 도면과 스캔 PDF만 존재하는 상황.',
          solution: 'AI 기반 OCR과 패턴 인식으로 저품질 도면에서도 구조 정보 추출.',
          result: '수작업 불가능한 도면에서 85% 이상의 데이터 복원 성공.',
        },
        {
          title: '설계 변경 이력 추적',
          scenario: '여러 버전의 구조설계서 간 변경 사항을 파악해야 하는 상황.',
          solution: 'Parsing으로 각 버전 분석 후 자동 비교 및 변경 사항 리포트 생성.',
          result: '변경 사항 누락 제로, 설계 변경 관리 효율 300% 향상.',
        },
      ],
      workflow: [
        { step: 1, title: '설계서 업로드', description: 'PDF, DWG, 이미지 등 구조설계서를 시스템에 업로드합니다.' },
        { step: 2, title: 'AI 자동 분석', description: 'AI가 설계서의 구조를 파악하고 데이터 영역을 식별합니다.' },
        { step: 3, title: '데이터 추출', description: '부재 정보, 철근 데이터, 일반사항을 자동으로 추출합니다.' },
        { step: 4, title: '검증 및 보정', description: '추출된 데이터의 정합성을 검증하고 필요시 보정합니다.' },
        { step: 5, title: '데이터 출력', description: '정제된 데이터를 후속 공정(BIM, 물량 산출 등)에 연계합니다.' },
      ],
      recommendedProducts: ['building'],
    },

    // Automation
    automation: {
      name: 'Automation',
      tagline: 'BIM, 물량, 2D 도면, BBS 자동 생성',
      description: 'Parsing으로 추출된 데이터를 기반으로 BIM 모델, 물량 산출서, 2D 시공도면, 철근 가공표(BBS)를 자동 생성합니다. 반복 작업을 제거하고 생산성을 극대화합니다.',
      features: [
        { title: 'BIM 모델 자동 생성', description: '구조 데이터를 기반으로 Revit, IFC 호환 BIM 모델을 자동 생성합니다.', icon: 'Box' },
        { title: '물량 산출 자동화', description: '콘크리트, 철근, 거푸집 등 물량을 자동 산출하고 내역서를 생성합니다.', icon: 'Calculator' },
        { title: '2D 시공도면 생성', description: '배근도, 구조 평면도, 단면도 등 2D 도면을 자동 생성합니다.', icon: 'FileText' },
        { title: 'BBS(철근가공표) 생성', description: '철근 절단 및 가공에 필요한 상세 정보를 자동 생성합니다.', icon: 'Layers' },
        { title: '다중 포맷 출력', description: 'Excel, PDF, DWG, IFC 등 다양한 형식으로 결과물을 출력합니다.', icon: 'Settings' },
      ],
      metrics: {
        bimSpeed: { value: '95%', label: 'BIM 생성 시간 단축' },
        quantityAccuracy: { value: '98%', label: '물량 산출 정확도' },
        drawingTime: { value: '90%', label: '도면 작성 시간 절감' },
        bbsAutomation: { value: '100%', label: 'BBS 자동화율' },
      },
      useCases: [
        {
          title: '신축 오피스 빌딩 BIM 구축',
          scenario: '지하 5층, 지상 35층 오피스 빌딩의 구조 BIM 모델이 필요한 상황.',
          solution: 'Parsing 데이터를 기반으로 Automation으로 전체 구조 BIM 자동 생성.',
          result: '3개월 예상 작업을 2주 만에 완료, LOD 350 수준 달성.',
        },
        {
          title: '대규모 물량 산출 프로젝트',
          scenario: '입찰을 위해 5개 건물의 정밀 물량 산출이 2주 내에 필요한 상황.',
          solution: 'Automation으로 각 건물의 물량을 동시에 자동 산출.',
          result: '정확도 98% 이상의 물량 산출서를 3일 만에 완료.',
        },
        {
          title: '현장 시공도면 긴급 생성',
          scenario: '설계 변경으로 인해 배근도를 3일 내에 수정해야 하는 상황.',
          solution: 'Automation으로 변경된 설계 데이터 기반 배근도 자동 재생성.',
          result: '수작업 대비 1/10 시간에 모든 도면 업데이트 완료.',
        },
      ],
      workflow: [
        { step: 1, title: 'Parsing 데이터 연동', description: 'Parsing에서 추출된 구조 데이터를 자동으로 연동합니다.' },
        { step: 2, title: '생성 옵션 설정', description: 'BIM, 물량, 도면, BBS 중 필요한 결과물을 선택합니다.' },
        { step: 3, title: '자동 생성 실행', description: 'AI가 선택된 결과물을 자동으로 생성합니다.' },
        { step: 4, title: '품질 검토', description: '생성된 결과물의 품질을 검토하고 필요시 조정합니다.' },
        { step: 5, title: '결과물 출력', description: '다양한 포맷으로 결과물을 출력하고 배포합니다.' },
      ],
      recommendedProducts: ['building'],
    },

    // Optimization
    optimization: {
      name: 'Optimization',
      tagline: 'SLP 기반 철근 절단손실/사용량 최적화',
      description: 'SLP(Stock Length Problem) 알고리즘을 적용하여 철근 절단 패턴을 최적화합니다. 절단 손실을 최소화하고 철근 사용량을 줄여 비용을 절감합니다.',
      features: [
        { title: 'SLP 알고리즘 적용', description: '수학적 최적화 알고리즘으로 최적의 철근 절단 조합을 도출합니다.', icon: 'Scissors' },
        { title: '절단 손실 최소화', description: '철근 절단 시 발생하는 손실률을 업계 평균 대비 50% 이상 절감합니다.', icon: 'TrendingDown' },
        { title: '철근 규격 최적화', description: '현장 조건에 맞는 최적의 철근 규격과 길이를 추천합니다.', icon: 'Ruler' },
        { title: '비용 시뮬레이션', description: '다양한 절단 시나리오별 비용을 시뮬레이션하여 비교합니다.', icon: 'Calculator' },
        { title: '이음 위치 최적화', description: '구조적 안전성을 확보하면서 이음 개수를 최소화합니다.', icon: 'Link2' },
      ],
      metrics: {
        lossReduction: { value: '50%', label: '절단 손실 감소' },
        costSavings: { value: '15%', label: '철근 비용 절감' },
        scenarios: { value: '1M+', label: '시뮬레이션 시나리오' },
        optimalRate: { value: '99%', label: '최적해 도출률' },
      },
      useCases: [
        {
          title: '고층 주상복합 철근 최적화',
          scenario: '50층 주상복합 건물의 철근 소요량이 예산을 초과하는 상황.',
          solution: 'Optimization으로 전체 철근 절단 패턴을 최적화.',
          result: '철근 손실률 3% 이하 달성, 철근 비용 18% 절감.',
        },
        {
          title: '지하주차장 대량 철근 공사',
          scenario: '연면적 50,000㎡ 지하주차장의 슬래브 철근 최적화가 필요한 상황.',
          solution: 'SLP 알고리즘으로 슬래브 배근 패턴 및 절단 계획 최적화.',
          result: '기존 대비 철근 사용량 12% 절감, 시공 효율 20% 향상.',
        },
        {
          title: '설계 변경에 따른 재최적화',
          scenario: '시공 중 설계 변경으로 인해 철근 계획을 재수립해야 하는 상황.',
          solution: 'Optimization으로 변경된 설계에 맞춰 빠르게 재최적화 수행.',
          result: '재최적화 4시간 만에 완료, 추가 손실 발생 방지.',
        },
      ],
      workflow: [
        { step: 1, title: '철근 데이터 입력', description: 'BBS 데이터 또는 철근 소요량 정보를 입력합니다.' },
        { step: 2, title: '제약 조건 설정', description: '원자재 규격, 이음 규정, 시공 조건 등을 설정합니다.' },
        { step: 3, title: 'SLP 최적화 실행', description: 'AI가 수백만 가지 조합을 분석하여 최적해를 도출합니다.' },
        { step: 4, title: '결과 분석', description: '최적화 결과를 분석하고 여러 시나리오를 비교합니다.' },
        { step: 5, title: '절단 계획 출력', description: '최적화된 절단 계획서와 BBS를 출력합니다.' },
      ],
      recommendedProducts: ['building'],
    },

    // Scheduling
    scheduling: {
      name: 'Scheduling',
      tagline: 'BIM·물량·조달 연계 공정표 자동 생성',
      description: 'BIM 모델, 물량 데이터, 조달 정보를 연계하여 최적화된 공정표를 자동 생성합니다. 현실적인 자원 제약을 반영한 실행 가능한 일정을 수립합니다.',
      features: [
        { title: 'BIM 기반 공정 생성', description: 'BIM 모델의 객체 정보를 기반으로 작업 패키지를 자동 생성합니다.', icon: 'CalendarClock' },
        { title: '물량 연계 공기 산정', description: '실제 물량을 기반으로 각 작업의 소요 기간을 자동 산정합니다.', icon: 'Calculator' },
        { title: '조달 일정 연동', description: '자재 조달 일정을 공정표에 연동하여 지연 리스크를 관리합니다.', icon: 'Workflow' },
        { title: '자원 평준화', description: '인력, 장비 등 자원의 가용성을 고려하여 일정을 최적화합니다.', icon: 'BarChart3' },
        { title: 'P6/MSP 연동', description: 'Primavera P6, MS Project와 양방향 데이터 연동을 지원합니다.', icon: 'RefreshCw' },
      ],
      metrics: {
        scheduleTime: { value: '80%', label: '공정표 작성 시간 절감' },
        accuracy: { value: '95%', label: '공기 예측 정확도' },
        resourceOpt: { value: '30%', label: '자원 활용률 향상' },
        integration: { value: '100%', label: 'P6/MSP 호환율' },
      },
      useCases: [
        {
          title: '대형 복합개발 마스터 스케줄',
          scenario: '3개 동, 24개월 공사 기간의 복합개발 마스터 스케줄이 필요한 상황.',
          solution: 'Scheduling으로 BIM 데이터 기반 통합 마스터 스케줄 자동 생성.',
          result: '2주 만에 5,000개 이상 작업의 상세 공정표 완성.',
        },
        {
          title: '자재 조달 연계 공정 관리',
          scenario: '글로벌 공급망 이슈로 자재 조달 일정이 불확실한 상황.',
          solution: 'Scheduling으로 조달 리드타임을 반영한 유연한 공정표 수립.',
          result: '조달 지연에도 크리티컬 패스 영향 최소화, 공기 준수.',
        },
        {
          title: '자원 제약 조건 반영',
          scenario: '타워크레인 2대로 5개 동을 동시에 시공해야 하는 상황.',
          solution: 'Scheduling으로 크레인 가용성을 반영한 동별 시공 순서 최적화.',
          result: '자원 충돌 제로, 크레인 활용률 95% 달성.',
        },
      ],
      workflow: [
        { step: 1, title: 'BIM/물량 데이터 연동', description: 'BIM 모델과 물량 데이터를 시스템에 연동합니다.' },
        { step: 2, title: '작업 패키지 생성', description: 'AI가 BIM 객체를 분석하여 작업 패키지를 자동 생성합니다.' },
        { step: 3, title: '공기 자동 산정', description: '물량과 생산성 데이터를 기반으로 소요 공기를 산정합니다.' },
        { step: 4, title: '자원 평준화', description: '자원 제약을 반영하여 일정을 최적화합니다.' },
        { step: 5, title: '공정표 출력', description: 'P6, MSP, Excel 등 다양한 형식으로 공정표를 출력합니다.' },
      ],
      recommendedProducts: ['building'],
    },

    // Integration
    integration: {
      name: 'Integration',
      tagline: '설계변경 시 모든 결과물 자동 업데이트',
      description: '설계 변경 발생 시 Parsing부터 Scheduling까지 전 과정의 결과물을 자동으로 업데이트합니다. 데이터 일관성을 유지하고 변경 관리 효율을 극대화합니다.',
      features: [
        { title: '변경 자동 감지', description: '설계 도서의 변경 사항을 자동으로 감지하고 영향 범위를 분석합니다.', icon: 'RefreshCw' },
        { title: '연쇄 업데이트', description: 'BIM, 물량, 도면, BBS, 공정표를 연쇄적으로 자동 업데이트합니다.', icon: 'Link2' },
        { title: '변경 이력 관리', description: '모든 변경 사항의 이력을 추적하고 버전을 관리합니다.', icon: 'Database' },
        { title: '영향도 분석', description: '변경이 비용과 공기에 미치는 영향을 자동으로 분석합니다.', icon: 'BarChart3' },
        { title: '승인 워크플로우', description: '변경 검토 및 승인을 위한 체계적인 워크플로우를 제공합니다.', icon: 'Workflow' },
      ],
      metrics: {
        updateTime: { value: '95%', label: '업데이트 시간 절감' },
        consistency: { value: '100%', label: '데이터 일관성' },
        tracking: { value: '100%', label: '변경 추적률' },
        errorReduction: { value: '90%', label: '오류 감소율' },
      },
      useCases: [
        {
          title: '시공 중 설계 변경 대응',
          scenario: '시공 중 구조 설계가 변경되어 모든 관련 문서를 수정해야 하는 상황.',
          solution: 'Integration으로 변경된 설계서 업로드 후 전체 결과물 자동 업데이트.',
          result: '기존 2주 소요 작업을 1일 만에 완료, 데이터 불일치 제로.',
        },
        {
          title: 'VE(가치공학) 대안 검토',
          scenario: '비용 절감을 위한 VE 대안을 빠르게 검토해야 하는 상황.',
          solution: 'Integration으로 VE 대안별 물량, 비용, 공기 변화를 즉시 시뮬레이션.',
          result: '10개 대안을 3일 만에 검토, 최적 VE 방안 도출.',
        },
        {
          title: '다중 설계 변경 통합 관리',
          scenario: '여러 차수의 설계 변경이 누적되어 관리가 어려운 상황.',
          solution: 'Integration으로 모든 변경 이력을 체계적으로 관리하고 최신 상태 유지.',
          result: '설계 변경 관련 오류 90% 감소, 감리 지적 사항 제로.',
        },
      ],
      workflow: [
        { step: 1, title: '변경 도서 업로드', description: '변경된 설계 도서를 시스템에 업로드합니다.' },
        { step: 2, title: '변경 사항 감지', description: 'AI가 이전 버전과 비교하여 변경 사항을 자동 감지합니다.' },
        { step: 3, title: '영향 범위 분석', description: '변경으로 인한 영향 범위와 비용/공기 영향을 분석합니다.' },
        { step: 4, title: '자동 업데이트', description: '승인 후 관련 모든 결과물을 자동으로 업데이트합니다.' },
        { step: 5, title: '변경 이력 기록', description: '변경 이력을 기록하고 관련자에게 알림을 발송합니다.' },
      ],
      recommendedProducts: ['building'],
    },
  },

  // Company Page
  companyPage: {
    title: 'AICONS 소개',
    subtitle: '우리는 AI의 힘으로 건설 프로젝트의 계획과 실행 방식을 혁신하는 미션을 수행하고 있습니다.',
    ourStory: '우리의 이야기',
    storyP1: 'AICONS Technologies는 건설 일정 관리 및 최적화에 인공지능의 힘을 가져오겠다는 단순하지만 야심찬 목표로 설립되었습니다.',
    storyP2: '건설은 세계에서 가장 큰 산업 중 하나이지만 새로운 기술 도입이 느렸습니다. 우리는 AI가 프로젝트의 계획, 일정 관리, 실행 방식을 혁신할 수 있다고 믿습니다.',
    storyP3: '오늘날 AICONS는 전 세계의 선도적인 건설 회사들이 프로젝트를 최적화하고 비용을 절감하며 정시에 납품하도록 신뢰받고 있습니다.',
    foundedIn: '실리콘밸리에서 설립',
    ourValues: '우리의 가치',
    values: {
      innovation: { title: '혁신', description: '건설 기술의 가능성의 경계를 넓힙니다' },
      customerSuccess: { title: '고객 성공', description: '당신의 성공이 우리의 성공입니다 - 우리는 당신의 여정에 함께하는 파트너입니다' },
      integrity: { title: '무결성', description: '우리가 하는 모든 일에서 정직하고 투명하며 신뢰할 수 있습니다' },
      excellence: { title: '탁월함', description: '최고 품질의 솔루션과 지원을 제공합니다' },
    },
    leadership: '리더십',
    leadershipSubtitle: '우리 팀은 AI, 건설 관리, 엔터프라이즈 소프트웨어 분야의 전문성을 결합합니다.',
    team: {
      rene: { name: 'René Morkos', role: '설립자 & CEO', bio: '스탠포드 대학교 AI 및 건설 관리 박사' },
      leadership: { name: '리더십 팀', role: '경영진', bio: '건설 및 기술 분야의 경험 많은 리더들' },
    },
    interestedInJoining: '우리 팀에 합류하고 싶으신가요?',
    viewOpenPositions: '채용 공고 보기',
    globalOffices: '글로벌 오피스',
    offices: {
      sanFrancisco: { city: '샌프란시스코', country: '미국', type: '본사' },
      london: { city: '런던', country: '영국', type: '유럽 오피스' },
      sydney: { city: '시드니', country: '호주', type: 'APAC 오피스' },
    },
    getInTouch: '연락하기',
    getInTouchSubtitle: '궁금한 점이 있으신가요? 연락 주세요.',
    form: {
      firstName: '이름',
      lastName: '성',
      email: '이메일',
      company: '회사',
      message: '메시지',
      sendMessage: '메시지 보내기',
    },
  },

  // Resources Page
  resourcesPage: {
    title: '리소스',
    subtitle: 'AI 기반 건설 일정 관리에 대해 더 알아보려면 사례 연구, 웨비나, 백서를 살펴보세요',
    caseStudies: '프로젝트',
    webinars: '웨비나',
    whitepapers: '백서',
    readMore: '자세히 보기',
    downloadPDF: 'PDF 다운로드',
    stayUpdated: '최신 소식 받기',
    newsletterSubtitle: '최신 리소스 및 업계 인사이트를 받아보려면 뉴스레터를 구독하세요.',
    enterEmail: '이메일 입력',
    subscribe: '구독',
    cases: {
      alignJV: {
        title: 'Align JV - HS2 고속철도',
        description: 'Align JV가 AICONS 최적화를 사용하여 프로젝트 기간을 17% 단축한 방법.',
        type: '사례 연구',
      },
      dataCenter: {
        title: '데이터센터 건설',
        description: '대규모 데이터센터 프로젝트에서 복잡한 MEP 조율 최적화.',
        type: '사례 연구',
      },
      industrialBrazil: {
        title: '브라질 산업시설',
        description: 'Reta Engenharia가 AI 기반 일정 관리로 수십억 원의 인건비를 절감.',
        type: '사례 연구',
      },
    },
    webinarList: {
      introAI: {
        title: 'AI 기반 일정 관리 소개',
        description: 'AI가 건설 프로젝트 일정 관리를 어떻게 혁신하고 있는지 알아보세요.',
        duration: '45분',
      },
      resourceAllocation: {
        title: '자원 배분 최적화',
        description: 'AICONS를 사용하여 자원 평준화를 최적화하는 모범 사례.',
        duration: '60분',
      },
      bimToSchedule: {
        title: 'BIM에서 일정 자동화',
        description: 'BIM 모델에서 직접 일정을 생성합니다.',
        duration: '30분',
      },
    },
    whitepaperList: {
      futureScheduling: {
        title: '건설 일정 관리의 미래',
        description: 'AI가 프로젝트 관리를 어떻게 재편하고 있는지에 대한 종합적인 분석.',
        pages: '24페이지',
      },
      measuringROI: {
        title: '일정 최적화 ROI 측정',
        description: 'AI 기반 일정 최적화의 이점을 정량화합니다.',
        pages: '18페이지',
      },
    },
  },

  // Common
  common: {
    learnMore: '자세히 보기',
    getStarted: '시작하기',
    requestDemo: '데모 요청',
    contactUs: '문의하기',
    viewAll: '모두 보기',
    close: '닫기',
  },

  // Language
  language: {
    ko: '한국어',
    en: 'English',
    select: '언어 선택',
  },
}
