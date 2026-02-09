# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

ALICE Technologies 홈페이지 클론 프로젝트입니다. 건설 일정 최적화 AI 플랫폼인 ALICE Technologies의 마케팅 웹사이트를 React + Tailwind CSS로 구현한 프로젝트입니다.

## 기술 스택

- **React 18** - Vite 기반
- **Tailwind CSS** - 유틸리티 퍼스트 CSS 프레임워크
- **React Router v7** - 클라이언트 사이드 라우팅
- **Framer Motion** - 애니메이션
- **Lucide React** - 아이콘

## 주요 명령어

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview

# ESLint 검사
npm run lint
```

## 아키텍처

### 라우팅 구조
- `/` - 홈페이지 (HeroSection, FeaturesSection 등 여러 섹션으로 구성)
- `/products/*` - 제품 페이지 (건축, 토목, 플랜트)
- `/solutions/*` - 솔루션 페이지
- `/resources` - 리소스 페이지 (케이스 스터디, 웨비나, 백서)
- `/company` - 회사 소개
- `/demo` - 데모 요청 폼

### 컴포넌트 구조
```
src/
├── components/
│   ├── Layout.jsx      # 전체 레이아웃 (Header + Footer 포함)
│   ├── Header.jsx      # 네비게이션 헤더 (드롭다운 메뉴 포함)
│   ├── Footer.jsx      # 푸터
│   └── home/           # 홈페이지 섹션 컴포넌트들
│       ├── HeroSection.jsx
│       ├── TrustSection.jsx
│       ├── FeaturesSection.jsx
│       ├── ProductsSection.jsx
│       ├── TestimonialsSection.jsx
│       ├── MetricsSection.jsx
│       └── CTASection.jsx
└── pages/              # 라우트별 페이지 컴포넌트
```

### 스타일링
- `tailwind.config.js`에 ALICE 브랜드 색상 정의 (`alice-primary`, `alice-secondary` 등)
- `src/index.css`에 커스텀 유틸리티 클래스 정의 (`.btn-primary`, `.container-custom` 등)

## Vercel 배포

- `vercel.json` 설정으로 SPA 라우팅 지원
- GitHub 연동 후 자동 배포 가능
