<!--
Sync Impact Report:
- Version change: 0.0.0 -> 1.0.0
- List of modified principles: N/A (Initial Ratification)
- Added sections: All Principles, Technology Standards, Development Workflow, Governance
- Templates requiring updates: None (✅ updated)
- Follow-up TODOs: None
-->

# Blog Starter Kit 헌법

## 핵심 원칙

### I. 정적 생성 우선
콘텐츠는 Markdown으로 작성되며 빌드 시 정적으로 생성됩니다. 성능과 단순함을 유지하기 위해 동적 기능은 최소화해야 합니다. 빌드 결과물은 모든 정적 호스팅 제공업체에 배포할 수 있어야 합니다.

### II. 타입 안전성
모든 코드는 TypeScript로 작성되어야 합니다. 엄격한 타입 검사가 활성화되어야 하며 유지되어야 합니다. `any` 타입 사용은 지양하며, 명확한 정당성이 있는 경우에만 최후의 수단으로 사용해야 합니다.

### III. 컴포넌트 모듈화
UI 컴포넌트는 작고, 재사용 가능하며, 단일 책임에 집중해야 합니다. 스타일은 Tailwind 유틸리티 클래스를 통해 처리하여 일관성을 보장하고 CSS 번들 크기를 줄여야 합니다.

### IV. 콘텐츠 중심 아키텍처
파일 시스템이 콘텐츠의 진실 공급원(Source of Truth)입니다. `_posts` 디렉토리 구조가 블로그 콘텐츠를 결정합니다. 메타데이터는 frontmatter를 통해 관리되며, 빌드 프로세스가 이를 애플리케이션 상태로 변환합니다.

### V. 단순성 및 성능
코어 웹 바이탈(Core Web Vitals)과 빠른 로드 시간을 우선시합니다. 불필요한 클라이언트 사이드 JavaScript를 피하십시오. 스타터 키트는 이를 확장하는 개발자가 이해하기 쉽고 가벼운 상태를 유지해야 합니다.

## 기술 표준

스택: Next.js (App Router), React, TypeScript, Tailwind CSS.
패키지 관리자: npm이 기본이지만, yarn/pnpm도 지원됩니다.
Markdown 처리: remark, remark-html, gray-matter.

## 개발 워크플로우

코드 스타일은 Prettier와 ESLint에 의해 강제됩니다.
Pull Request는 병합 전에 빌드(`npm run build`)와 타입 검사를 통과해야 합니다.
새로운 기능은 기존의 정적 생성 및 컴포넌트 모듈화 패턴을 따르아야 합니다.

## 거버넌스

이 헌법은 Blog Starter Kit의 아키텍처 결정을 규정합니다.
개정은 합의가 필요하며, 블로그를 위한 고품질의 고성능 시작점을 제공한다는 목표와 일치해야 합니다.
버전 관리는 시맨틱 버저닝(MAJOR.MINOR.PATCH)을 따릅니다.

**버전**: 1.0.0 | **비준일**: 2025-11-20 | **최종 수정일**: 2025-11-20
