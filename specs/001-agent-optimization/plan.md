# 구현 계획: 에이전트 최적화 (GEO/AIEO/AEO)

**브랜치**: `001-agent-optimization` | **날짜**: 2025-11-20 | **명세서**: [spec.md](./spec.md)
**입력**: `/specs/001-agent-optimization/spec.md`의 기능 명세서

## 요약

AI 콘텐츠 소비를 위한 `llms.txt` 라우트 핸들러와 AI 검색 엔진의 더 나은 인덱싱을 위한 JSON-LD 구조화된 데이터(`Article`, `WebSite`)를 포함하여 에이전트 친화적인 기능을 구현합니다.

## 기술적 맥락

**언어/버전**: TypeScript 5.x
**주요 의존성**: Next.js 15 (App Router), React 19
**저장소**: 파일 기반 (`_posts/*.md`)
**테스트**: 브라우저 및 구조화된 데이터 도구를 통한 수동 검증 (현재 프로젝트 설정에 따름)
**타겟 플랫폼**: Vercel / 정적 호스팅
**프로젝트 유형**: 웹 애플리케이션 (Next.js)
**성능 목표**: `llms.txt` 생성 < 100ms (정적 빌드), JSON-LD에 대한 클라이언트 측 영향 최소화.
**제약 사항**: "정적 생성 우선" 원칙을 준수해야 함.

## 헌법 확인

*GATE: Phase 0 연구 전에 통과해야 함. Phase 1 설계 후 재확인.*

- [x] **정적 생성 우선**: `llms.txt`는 라우트 핸들러를 통해 정적으로 생성됩니다. JSON-LD는 정적 HTML에 포함됩니다.
- [x] **타입 안전성**: 모든 새 코드(JSON-LD 헬퍼, 라우트 핸들러)는 엄격하게 타입이 지정됩니다.
- [x] **컴포넌트 모듈화**: JSON-LD 로직은 헬퍼 함수/컴포넌트에 캡슐화됩니다.
- [x] **콘텐츠 중심**: 콘텐츠는 기존 `_posts`에서 가져옵니다.
- [x] **단순성**: 새로운 외부 의존성 없음; 기본 Next.js 기능 사용.

## 프로젝트 구조

### 문서 (이 기능)

```text
specs/001-agent-optimization/
├── plan.md              # 이 파일
├── research.md          # Phase 0 출력
├── data-model.md        # Phase 1 출력
├── quickstart.md        # Phase 1 출력
├── contracts/           # Phase 1 출력 (이 기능에는 해당 없음)
└── checklists/          # 품질 게이트
```

### 소스 코드 (저장소 루트)

```text
src/
├── app/
│   ├── llms.txt/
│   │   └── route.ts     # [신규] llms.txt용 라우트 핸들러
│   ├── page.tsx         # [수정] WebSite JSON-LD 추가
│   └── posts/
│       └── [slug]/
│           └── page.tsx # [수정] Article JSON-LD 추가
└── lib/
    └── json-ld.ts       # [신규] JSON-LD용 헬퍼 함수/타입
```

**구조 결정**: 독립형 파일을 위한 새 라우트 핸들러를 추가하고 기존 페이지를 수정하여 메타데이터를 주입합니다. 공유 라이브러리 파일 `json-ld.ts`는 타입 안전성과 스키마 정의의 재사용성을 보장합니다.

## 복잡성 추적

해당 없음 - 헌법 위반 사항 없음.


| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
