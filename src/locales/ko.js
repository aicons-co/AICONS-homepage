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
            status: 'active',
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
            status: 'active',
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
            status: 'active',
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
            status: 'active',
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
            status: 'active',
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
            status: 'active',
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
            status: 'active',
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
    gc: '종합건설사',
    owners: '발주자',
    consultants: '컨설턴트',
    industrial: '산업시설',
    infrastructure: '인프라',
    commercial: '상업시설',
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
    durationReduction: '일정 단축',
    laborCostSavings: '인건비 절감',
    equipmentSavings: '장비비 절감',
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
    title: '솔루션',
    subtitle: 'AICONS는 모든 이해관계자와 프로젝트 유형에 맞춤 솔루션을 제공합니다',
    byStakeholder: '이해관계자별',
    byProjectType: '프로젝트 유형별',
    learnMore: '자세히 보기',
    requestDemo: '데모 요청',
    yourChallenges: '귀하의 과제',
    ourSolutions: '우리의 솔루션',
    keyCapabilities: '핵심 역량',
    keyMetrics: '핵심 성과 지표',
    useCases: '활용 사례',
    workflow: '워크플로우',
    projectExamples: '프로젝트 유형',
    uniqueCapabilities: '차별화된 기능',
    recommendedProducts: '추천 제품',
    relatedCaseStudy: '관련 사례 연구',
    readyToTransform: '프로젝트를 혁신할 준비가 되셨나요?',
    scheduleDemo: '데모 예약',
    solutionNotFound: '솔루션을 찾을 수 없습니다',
    viewGC: '종합건설사 솔루션 보기',

    // 종합건설사
    gc: {
      name: '종합건설사',
      tagline: '건설 운영 최적화',
      description: 'AICONS는 AI 기반 일정 최적화를 통해 종합건설사가 정시에 예산 내에서 프로젝트를 완수하도록 돕습니다. 복잡한 프로젝트에서 수백 개의 협력업체와 수천 개의 작업을 조율하면서도 일정과 비용 목표를 달성할 수 있습니다.',
      challenges: [
        { title: '복잡한 일정 조율', description: '수백 개의 연결된 작업과 여러 공종의 동시 진행으로 인한 일정 관리의 복잡성', impact: '프로젝트의 70%가 일정 지연 경험' },
        { title: '자원 배분 충돌', description: '인력, 장비, 자재의 최적 배분이 어렵고 자원 충돌로 인한 대기 시간 발생', impact: '자원 활용률 평균 65% 수준' },
        { title: '리스크 관리', description: '날씨, 자재 지연, 설계 변경 등 예측하기 어려운 변수로 인한 리스크 대응 어려움', impact: '불확실성으로 인한 예비비 20% 이상 책정' },
        { title: '발주자 보고 요구', description: '주간/월간 보고서 작성에 많은 시간 소요, 실시간 현황 파악 어려움', impact: '관리자 업무 시간의 30% 보고서 작성' },
        { title: '현금흐름 관리', description: '기성 청구 일정과 실제 공정의 불일치로 현금흐름 예측이 어려움', impact: '현금흐름 예측 정확도 60% 미만' },
      ],
      solutions: [
        { title: '자동화된 일정 최적화', description: '수백만 가지 시뮬레이션을 통해 최적의 작업 순서와 자원 배분을 자동으로 도출합니다.', product: 'optimize', benefit: '공기 17% 단축' },
        { title: '실시간 자원 평준화', description: '인력, 장비, 자재의 가용성을 실시간으로 분석하여 자원 충돌을 사전에 방지합니다.', product: 'optimize', benefit: '자원 활용률 25% 향상' },
        { title: '리스크 시나리오 모델링', description: '다양한 리스크 시나리오를 시뮬레이션하여 영향을 정량화하고 완화 전략을 수립합니다.', product: 'optimize', benefit: '리스크 완화 비용 40% 절감' },
        { title: '시각적 진행 보고', description: '4D 시각화로 프로젝트 현황을 직관적으로 파악하고 자동화된 보고서를 생성합니다.', product: 'plan', benefit: '보고서 작성 시간 80% 절감' },
        { title: '협력업체 일정 조율', description: '협력업체별 작업 일정을 통합 관리하고 충돌을 사전에 파악하여 조율합니다.', product: 'plan', benefit: '협력업체 대기 시간 50% 감소' },
      ],
      metrics: {
        durationReduction: { value: '17%', label: '공기 단축' },
        laborSavings: { value: '14%', label: '인건비 절감' },
        resourceUtilization: { value: '25%', label: '자원 활용률 향상' },
        riskReduction: { value: '40%', label: '리스크 비용 절감' },
      },
      useCases: [
        {
          title: '대규모 복합 주거 개발',
          scenario: '1,200세대 규모의 아파트 단지 건설. 5개 동 동시 시공, 30개 협력업체, 18개월 공사 기간.',
          solution: 'AICONS Optimize로 동별 작업 순서 최적화, 타워크레인 공유 일정 자동 조율, 마감공사 병행 시점 도출.',
          result: '당초 계획 대비 공기 3개월 단축, 타워크레인 임대 비용 2억원 절감.',
        },
        {
          title: '도심 오피스 리모델링',
          scenario: '가동 중인 건물의 층별 순차 리모델링. 소음/진동 제한, 야간 작업 필요, 입주사 이전 일정 조율.',
          solution: 'AICONS Plan으로 층별 작업 시퀀스 시각화, 소음 발생 공정 야간 배치, 입주사별 이전 일정 통합.',
          result: '입주사 민원 제로 달성, 예정보다 2주 조기 완공.',
        },
        {
          title: '물류센터 Fast-track 건설',
          scenario: '연면적 50,000㎡ 물류센터 신축. 착공 시점에 설계 50% 완료, 12개월 내 준공 필수.',
          solution: 'AICONS Model로 BIM 기반 작업 패키지 추출, 설계 완료 순서에 맞춘 시공 순서 자동 생성.',
          result: 'Fast-track으로 인한 재작업 최소화, 목표 기한 내 준공 달성.',
        },
      ],
      workflow: [
        { step: 1, title: '프로젝트 연동', description: 'P6/MSP 일정 또는 BIM 모델을 AICONS에 연동합니다.' },
        { step: 2, title: '제약조건 설정', description: '자원 한계, 작업 순서 제약, 마일스톤 등을 설정합니다.' },
        { step: 3, title: '시뮬레이션 실행', description: 'AI가 수백만 가지 시나리오를 분석하여 최적안을 도출합니다.' },
        { step: 4, title: '시나리오 비교', description: '다양한 최적화 옵션을 비교하고 최적의 전략을 선택합니다.' },
        { step: 5, title: '일정 내보내기', description: '최적화된 일정을 P6/MSP로 내보내고 현장에 적용합니다.' },
        { step: 6, title: '모니터링 및 업데이트', description: '진행 상황을 모니터링하고 필요시 재최적화를 수행합니다.' },
      ],
      recommendedProducts: ['optimize', 'plan'],
      relatedCaseStudy: 'alignJV',
    },

    // 발주자
    owners: {
      name: '발주자',
      tagline: '투자 가치 극대화',
      description: 'AICONS는 데이터 기반 인사이트로 발주자에게 건설 프로젝트에 대한 가시성과 통제력을 제공합니다. 프로젝트의 현재 상태와 미래 예측을 한눈에 파악하고 의사결정에 필요한 객관적 근거를 확보할 수 있습니다.',
      challenges: [
        { title: '제한된 프로젝트 가시성', description: '시공사 보고에 의존하여 프로젝트 실제 현황 파악이 어렵고 정보 비대칭 발생', impact: '발주자의 75%가 프로젝트 현황 파악에 어려움 호소' },
        { title: '일정 신뢰성 우려', description: '시공사가 제시하는 일정의 실현 가능성을 객관적으로 검증하기 어려움', impact: '프로젝트의 80%가 당초 일정 대비 지연' },
        { title: '비용 초과 리스크', description: '예상치 못한 지연과 변경으로 인한 비용 증가, 사전 예측 어려움', impact: '평균 비용 초과율 28%' },
        { title: '이해관계자 커뮤니케이션', description: '경영진, 투자자, 입주예정자 등에게 프로젝트 현황을 효과적으로 전달하기 어려움', impact: '이해관계자 보고 준비에 주당 10시간 소요' },
      ],
      solutions: [
        { title: '실시간 프로젝트 대시보드', description: '프로젝트 현황, 진척률, 주요 마일스톤을 실시간으로 모니터링하는 직관적인 대시보드.', product: 'plan', benefit: '현황 파악 시간 90% 단축' },
        { title: '일정 신뢰도 지표', description: 'AI 분석을 통해 현재 일정의 실현 가능성을 점수화하여 객관적 지표 제공.', product: 'optimize', benefit: '일정 예측 정확도 35% 향상' },
        { title: '시나리오 비교 분석', description: '다양한 진행 시나리오별 일정/비용 영향을 비교하여 의사결정 지원.', product: 'optimize', benefit: '의사결정 속도 3배 향상' },
        { title: '자동화된 이해관계자 보고', description: '맞춤형 보고서 자동 생성으로 다양한 이해관계자별 정보 요구 충족.', product: 'plan', benefit: '보고서 작성 시간 75% 절감' },
        { title: '조기 경보 시스템', description: '일정 지연, 비용 초과 위험을 사전에 감지하여 선제적 대응 가능.', product: 'optimize', benefit: '리스크 조기 감지율 85%' },
      ],
      metrics: {
        visibility: { value: '95%', label: '프로젝트 가시성' },
        scheduleConfidence: { value: '35%', label: '일정 신뢰도 향상' },
        costControl: { value: '20%', label: '비용 초과 감소' },
        reportingEfficiency: { value: '75%', label: '보고 효율성 향상' },
      },
      useCases: [
        {
          title: '기업 본사 사옥 신축',
          scenario: '대기업 본사 사옥 신축 프로젝트. 이사회 보고, 입주 일정 확정 필요, 복수 시공사 관리.',
          solution: 'AICONS Plan 대시보드로 실시간 현황 모니터링, 시공사별 진척률 비교, 이사회용 자동 보고서 생성.',
          result: '이사회에 정확한 정보 제공, 입주 일정 3개월 전 확정 통보 가능.',
        },
        {
          title: '공공 복합 문화시설',
          scenario: '시민 문화센터 건설. 시의회 보고 의무, 시민 공개, 예산 집행 감사 대응.',
          solution: 'AICONS로 투명한 일정/비용 추적, 시민 공개용 시각화 자료 자동 생성, 감사 대응 자료 일괄 출력.',
          result: '시의회 만족도 향상, 감사 지적 사항 제로, 시민 신뢰도 상승.',
        },
        {
          title: '글로벌 데이터센터',
          scenario: '글로벌 IT 기업의 국내 데이터센터 건설. 본사 경영진 주간 보고, 장비 도입 일정 연동 필수.',
          solution: 'AICONS로 글로벌 본사와 동일 대시보드 공유, 장비 조달 일정 연동, 자동 주간 보고서 생성.',
          result: '본사-현지법인 간 정보 격차 해소, 장비 도입 일정 100% 준수.',
        },
      ],
      workflow: [
        { step: 1, title: '대시보드 설정', description: '모니터링할 KPI와 마일스톤을 설정합니다.' },
        { step: 2, title: '데이터 연동', description: '시공사의 일정 데이터를 실시간으로 연동합니다.' },
        { step: 3, title: '기준선 수립', description: '계약 일정을 기준선으로 설정하여 비교 분석합니다.' },
        { step: 4, title: '실시간 모니터링', description: '진척률, 위험 지표를 실시간으로 확인합니다.' },
        { step: 5, title: '시나리오 분석', description: '지연 발생 시 회복 시나리오를 분석합니다.' },
        { step: 6, title: '보고서 생성', description: '이해관계자별 맞춤 보고서를 자동 생성합니다.' },
      ],
      recommendedProducts: ['plan', 'optimize'],
      relatedCaseStudy: 'dataCenter',
    },

    // 컨설턴트
    consultants: {
      name: '컨설턴트',
      tagline: '우수한 자문 서비스 제공',
      description: 'AICONS는 컨설턴트가 더 정확한 일정 자문 및 프로젝트 관리 서비스를 제공할 수 있도록 지원합니다. AI 기반 분석 도구로 경쟁사와 차별화된 데이터 기반 자문 서비스를 제공하세요.',
      challenges: [
        { title: '수동 일정 분석', description: '엑셀, P6 수작업 분석에 많은 시간 소요, 복잡한 프로젝트에서 오류 발생 가능', impact: '분석 업무에 프로젝트 시간의 60% 소요' },
        { title: '제한된 최적화 역량', description: '전통적 방법론으로는 최적의 일정을 찾기 어렵고 제한된 옵션만 검토 가능', impact: '검토 가능한 대안 평균 3-5개' },
        { title: '객관적 근거 부족', description: '경험과 직관에 의존한 권고로 클라이언트 설득력 부족', impact: '권고안 채택률 50% 미만' },
        { title: '경쟁 차별화', description: '타 컨설팅사와 차별화된 서비스 제공이 어려움', impact: '수주 경쟁 심화' },
      ],
      solutions: [
        { title: 'AI 기반 일정 분석', description: '복잡한 일정도 AI가 자동으로 분석하여 문제점과 개선 기회를 도출합니다.', product: 'optimize', benefit: '분석 시간 80% 단축' },
        { title: '신속한 시나리오 생성', description: '수백만 가지 시뮬레이션으로 다양한 대안을 신속하게 생성하고 비교합니다.', product: 'optimize', benefit: '검토 대안 1,000배 증가' },
        { title: '데이터 기반 권고', description: '정량적 분석 결과를 바탕으로 객관적이고 설득력 있는 권고안을 제시합니다.', product: 'optimize', benefit: '권고안 채택률 85% 향상' },
        { title: '고급 분석 플랫폼', description: '최신 AI 기술을 활용한 차별화된 서비스로 경쟁 우위를 확보합니다.', product: 'plan', benefit: '수주율 40% 향상' },
        { title: '화이트라벨 보고서', description: '컨설팅사 브랜드로 전문적인 분석 보고서를 자동 생성합니다.', product: 'plan', benefit: '보고서 품질 향상' },
      ],
      metrics: {
        analysisSpeed: { value: '80%', label: '분석 시간 단축' },
        scenarioCapacity: { value: '1000x', label: '검토 대안 증가' },
        adoptionRate: { value: '85%', label: '권고안 채택률' },
        winRate: { value: '40%', label: '수주율 향상' },
      },
      useCases: [
        {
          title: '일정 클레임 자문',
          scenario: '대형 건설 프로젝트의 공기 지연 클레임 분쟁. 지연 원인 분석, 책임 소재 규명, 손해액 산정 필요.',
          solution: 'AICONS로 크리티컬 패스 분석, 지연 영향 시뮬레이션, 객관적 책임 배분 근거 도출.',
          result: '클레임 협상에서 클라이언트에게 유리한 결과 도출, 분쟁 해결 기간 50% 단축.',
        },
        {
          title: 'VE (Value Engineering) 컨설팅',
          scenario: '프로젝트 비용 절감을 위한 VE 컨설팅. 공기 영향 없이 비용 절감 대안 도출 필요.',
          solution: 'AICONS로 대안별 일정 영향 시뮬레이션, 비용-일정 트레이드오프 분석, 최적 VE 방안 도출.',
          result: '공기 지연 없이 12% 비용 절감 달성, 클라이언트 재계약 성사.',
        },
        {
          title: 'PMC (Project Management Consulting) 서비스',
          scenario: '대형 복합 개발 프로젝트 PMC 수행. 다수 시공사 일정 통합 관리, 발주자 보고 책임.',
          solution: 'AICONS Plan으로 시공사별 일정 통합, 실시간 대시보드 제공, 자동 발주자 보고서 생성.',
          result: 'PMC 서비스 품질 향상, 발주자 만족도 최상위 평가 획득.',
        },
      ],
      workflow: [
        { step: 1, title: '프로젝트 데이터 수집', description: '클라이언트의 일정, 자원, 비용 데이터를 수집합니다.' },
        { step: 2, title: 'AI 분석 실행', description: 'AICONS AI가 자동으로 일정을 분석하고 문제점을 도출합니다.' },
        { step: 3, title: '최적화 시뮬레이션', description: '수백만 가지 대안을 시뮬레이션하여 최적안을 찾습니다.' },
        { step: 4, title: '권고안 도출', description: '분석 결과를 바탕으로 데이터 기반 권고안을 수립합니다.' },
        { step: 5, title: '보고서 생성', description: '전문적인 분석 보고서를 자동으로 생성합니다.' },
        { step: 6, title: '클라이언트 프레젠테이션', description: '시각적 자료와 함께 권고안을 프레젠테이션합니다.' },
      ],
      recommendedProducts: ['optimize', 'plan'],
      relatedCaseStudy: 'industrialBrazil',
    },

    // 산업시설
    industrial: {
      name: '산업시설 프로젝트',
      tagline: '복잡한 산업 건설',
      description: 'AICONS는 고급 시퀀싱 및 최적화로 산업 건설의 복잡성을 처리합니다. 발전소, 반도체 팹, 석유화학 플랜트 등 대규모 산업시설의 복잡한 시공 순서와 장비 조율을 최적화합니다.',
      features: [
        { title: '모듈 설치 시퀀싱', description: '대형 모듈의 제작, 운송, 설치 순서를 최적화하여 현장 작업 기간을 최소화합니다.', icon: 'Package' },
        { title: '대형 장비 조율', description: '복수의 대형 크레인, 트랜스포터 등 장비 간 간섭을 분석하고 최적 운용 계획을 수립합니다.', icon: 'Truck' },
        { title: '셧다운/턴어라운드 계획', description: '기존 설비 가동 중단 기간을 최소화하는 최적의 작업 순서를 도출합니다.', icon: 'Clock' },
        { title: '안전 통합 일정', description: '위험 작업의 동시 진행을 방지하고 안전 요구사항을 일정에 자동 반영합니다.', icon: 'Shield' },
        { title: '커미셔닝 연동', description: '시운전 일정과 시공 일정을 통합하여 커미셔닝 기간을 단축합니다.', icon: 'PlayCircle' },
      ],
      metrics: {
        avgDuration: { value: '18-36개월', label: '평균 공사 기간' },
        avgBudget: { value: '500억-2조원', label: '평균 사업비' },
        complexity: { value: '10,000+', label: '작업 수' },
        durationSavings: { value: '15%', label: '공기 단축 효과' },
      },
      projectExamples: [
        {
          type: '발전소',
          description: '복합화력, 원자력, 신재생 발전소의 복잡한 시공 순서 최적화',
          keyFeatures: ['터빈 설치 시퀀싱', '배관 계통별 시공 순서', '시운전 연동 일정'],
        },
        {
          type: '반도체 팹',
          description: '클린룸 구축, 장비 반입, 유틸리티 연결의 정밀 조율',
          keyFeatures: ['클린룸 Zone별 순차 시공', '장비 반입 동선 최적화', '극저진동 환경 유지'],
        },
        {
          type: '정유/석유화학 플랜트',
          description: '대형 압력용기, 배관, 철구조물의 복잡한 설치 순서 관리',
          keyFeatures: ['대형 장비 리프트 계획', '배관 Spool 우선순위', '타이-인 작업 최적화'],
        },
        {
          type: '배터리/이차전지 공장',
          description: '클린룸, 드라이룸 환경의 설비 설치 순서 최적화',
          keyFeatures: ['드라이룸 환경 유지 일정', '대형 설비 반입 순서', '유틸리티 연결 시퀀스'],
        },
      ],
      uniqueCapabilities: [
        { title: '멀티 크레인 조율', description: '여러 대형 크레인의 작업 반경 간섭을 분석하고 최적의 리프트 순서를 계획합니다.', benefit: '크레인 대기 시간 40% 감소' },
        { title: '모듈야드 최적화', description: '모듈 제작, 적재, 출하 순서를 최적화하여 야드 효율을 극대화합니다.', benefit: '야드 활용률 30% 향상' },
        { title: '타이-인 작업 계획', description: '기존 설비와의 연결 작업 시점을 최적화하여 셧다운 기간을 최소화합니다.', benefit: '셧다운 기간 25% 단축' },
        { title: '시운전 연동 최적화', description: '시스템별 시운전 순서와 시공 완료 시점을 연동하여 전체 공기를 단축합니다.', benefit: '커미셔닝 기간 20% 단축' },
      ],
      integratedProducts: ['model', 'optimize'],
      relatedCaseStudy: 'industrialBrazil',
    },

    // 인프라
    infrastructure: {
      name: '인프라 프로젝트',
      tagline: '대규모 인프라',
      description: 'AICONS는 여러 작업 전선에 걸친 인프라 프로젝트의 규모와 복잡성을 관리합니다. 철도, 도로, 항만 등 선형 프로젝트의 다중 작업 전선과 복잡한 이해관계자 조율을 효과적으로 지원합니다.',
      features: [
        { title: '다중 작업 전선 조율', description: '수십 km에 걸친 여러 작업 전선의 진행을 동시에 관리하고 최적화합니다.', icon: 'GitBranch' },
        { title: '선형 프로젝트 일정', description: '선형 시설의 특성을 반영한 LOB(Line of Balance) 기반 일정 관리를 지원합니다.', icon: 'TrendingUp' },
        { title: '다중 이해관계자 조율', description: '정부, 지자체, 주민, 사업자 등 복잡한 이해관계자 일정을 통합 관리합니다.', icon: 'Users' },
        { title: '단계별 개통 계획', description: '구간별 순차 개통을 위한 최적의 시공 순서와 일정을 도출합니다.', icon: 'Layers' },
        { title: '인허가 연동 일정', description: '각종 인허가 일정을 시공 일정과 연동하여 지연 리스크를 최소화합니다.', icon: 'FileCheck' },
      ],
      metrics: {
        avgDuration: { value: '3-10년', label: '평균 사업 기간' },
        avgBudget: { value: '1조-10조원', label: '평균 사업비' },
        complexity: { value: '50,000+', label: '작업 수' },
        durationSavings: { value: '12%', label: '공기 단축 효과' },
      },
      projectExamples: [
        {
          type: '고속철도',
          description: '장대 터널, 교량, 역사의 동시 다발적 시공 관리',
          keyFeatures: ['터널 굴진 작업 전선 관리', '교량 세그먼트 시공 순서', '역사-본선 인터페이스'],
        },
        {
          type: '도시철도/지하철',
          description: '도심 지하 굴착, 역사 건설, 시스템 설치의 통합 관리',
          keyFeatures: ['역간 터널 굴진 조율', '지상 교통 영향 최소화', '시스템 구간별 설치'],
        },
        {
          type: '고속도로',
          description: '장거리 선형 프로젝트의 구간별 시공 및 개통 관리',
          keyFeatures: ['토공-포장 선후 관계', '교량-터널 크리티컬 패스', '구간별 개통 최적화'],
        },
        {
          type: '항만/공항',
          description: '해상/육상 공사, 터미널, 부대시설의 복합 관리',
          keyFeatures: ['준설-케이슨 연계', '에이프런-터미널 인터페이스', '단계별 운영 개시'],
        },
      ],
      uniqueCapabilities: [
        { title: 'LOB 기반 일정 최적화', description: '선형 프로젝트의 반복 작업 패턴을 분석하여 최적의 작업 속도와 자원 배분을 결정합니다.', benefit: '자원 평준화 35% 개선' },
        { title: '다중 계약 조율', description: '복수의 시공사, 설계사, 감리단 간 인터페이스를 관리하고 일정 충돌을 방지합니다.', benefit: '계약 간 충돌 60% 감소' },
        { title: '민원 리스크 반영', description: '주민 민원, 환경 이슈 등 외부 요인을 일정에 반영하여 리스크를 관리합니다.', benefit: '민원 관련 지연 45% 감소' },
        { title: '구간 개통 최적화', description: '전체 완공 전 일부 구간 선개통을 위한 최적 시공 순서를 도출합니다.', benefit: '조기 수익 창출 가능' },
      ],
      integratedProducts: ['optimize', 'plan'],
      relatedCaseStudy: 'alignJV',
    },

    // 상업시설
    commercial: {
      name: '상업시설 프로젝트',
      tagline: '상업 건물 건설',
      description: 'AICONS는 시장 출시 속도와 비용 효율성을 위해 상업 건설 프로젝트를 최적화합니다. 오피스, 쇼핑몰, 호텔 등 상업시설의 빠른 오픈과 임차인 만족을 위한 효율적인 일정 관리를 지원합니다.',
      features: [
        { title: '패스트트랙 일정 관리', description: '설계-시공 병행을 위한 최적의 작업 순서와 선행 조건을 도출합니다.', icon: 'Zap' },
        { title: '임차인 인테리어 조율', description: '복수 임차인의 인테리어 공사를 기본 시설 공사와 조율하여 관리합니다.', icon: 'Layout' },
        { title: '마감 공정 최적화', description: '마감 공사의 복잡한 선후 관계를 분석하여 최적의 시공 순서를 도출합니다.', icon: 'Paintbrush' },
        { title: '오픈 연동 계획', description: '오픈 일정에 맞춘 역산 일정과 마일스톤을 자동으로 생성합니다.', icon: 'Calendar' },
        { title: '층별 인수 계획', description: '층별 또는 Zone별 순차 인수를 위한 시공 순서를 최적화합니다.', icon: 'Building' },
      ],
      metrics: {
        avgDuration: { value: '12-36개월', label: '평균 공사 기간' },
        avgBudget: { value: '500억-5000억원', label: '평균 사업비' },
        complexity: { value: '5,000+', label: '작업 수' },
        durationSavings: { value: '18%', label: '공기 단축 효과' },
      },
      projectExamples: [
        {
          type: '프리미엄 오피스',
          description: '고품질 마감, 스마트 빌딩 시스템, 기업 입주사 맞춤 인테리어 관리',
          keyFeatures: ['코어 선행 시공', '층별 순차 마감', '입주사 인테리어 연동'],
        },
        {
          type: '대형 쇼핑몰',
          description: '앵커 테넌트와 소규모 매장의 동시 입점 조율',
          keyFeatures: ['공용부-전용부 조율', '테넌트별 인테리어 일정', '그랜드 오픈 역산 계획'],
        },
        {
          type: '호텔/리조트',
          description: '객실, 부대시설, 조경의 통합 일정 관리',
          keyFeatures: ['객실 타입별 시공 순서', 'F&B 시설 오픈 조율', '시즌별 오픈 최적화'],
        },
        {
          type: '복합 용도 개발',
          description: '주거, 상업, 오피스 복합 개발의 통합 관리',
          keyFeatures: ['용도별 공정 분리', '공용 인프라 선행', '단계별 준공 계획'],
        },
      ],
      uniqueCapabilities: [
        { title: '테넌트 일정 통합', description: '수십 개 임차인의 인테리어 일정을 통합 관리하고 충돌을 사전에 방지합니다.', benefit: '테넌트 조율 시간 70% 단축' },
        { title: '마감 시퀀싱 AI', description: 'AI가 마감 공정의 복잡한 선후 관계를 분석하여 최적의 시공 순서를 도출합니다.', benefit: '마감 공기 25% 단축' },
        { title: '오픈일 역산 최적화', description: '오픈 목표일로부터 역산하여 각 작업의 최적 시작/완료 시점을 계산합니다.', benefit: '오픈 일정 준수율 95%' },
        { title: '운영 이관 계획', description: '시공 완료와 운영 시작 사이의 인수인계 기간을 최적화합니다.', benefit: '이관 기간 40% 단축' },
      ],
      integratedProducts: ['plan', 'model'],
      relatedCaseStudy: 'dataCenter',
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
  },

  // Language
  language: {
    ko: '한국어',
    en: 'English',
    select: '언어 선택',
  },
}
