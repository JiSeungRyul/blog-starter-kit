# 연구: 에이전트 최적화

**기능**: 에이전트 최적화 (GEO/AIEO/AEO)
**날짜**: 2025-11-20

## 결정 로그

### 1. `llms.txt` 생성 전략
*   **옵션 A**: 빌드 스크립트 (빌드 전 실행되는 Node.js 스크립트).
*   **옵션 B**: Next.js 라우트 핸들러 (`app/llms.txt/route.ts`).
*   **결정**: **옵션 B (Next.js 라우트 핸들러)**.
*   **근거**: 라우트 핸들러는 Next.js App Router 패러다임 내에서 더 깔끔합니다. 별도의 `ts-node` 설정 없이 `lib/api.ts` 함수를 직접 재사용할 수 있습니다. 정적 내보내기(Static Export) 시에도 유효합니다.
*   **최종 결정**: **옵션 B: Next.js 라우트 핸들러**. `src/app/llms.txt/route.ts`를 생성하고 `text/plain`을 반환하도록 합니다.

### 2. JSON-LD 구현
*   **옵션 A**: `next-seo` 패키지.
*   **옵션 B**: 수동 `<script>` 태그 주입.
*   **결정**: **옵션 B (수동)**.
*   **근거**: 요구사항이 간단합니다(`Article` 및 `WebSite`). 이를 위해 의존성을 추가하는 것은 과도하며 "단순성" 원칙을 위반할 수 있습니다. JSON 객체를 생성하고 렌더링하는 타입 지정된 헬퍼 함수를 만들 수 있습니다.

## 기술 세부 사항

### `llms.txt` 형식
떠오르는 표준(예: llmstxt.org)에 따라 형식은 다음과 같아야 합니다:
```text
# [사이트 이름]

[설명]

## 게시물

- [제목]: [URL]
- [제목]: [URL]
...
```

### JSON-LD 스키마
**Article (게시물)**:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "image": ["..."],
  "datePublished": "...",
  "author": {
    "@type": "Person",
    "name": "..."
  }
}
```

**WebSite (홈페이지)**:
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "...",
  "url": "..."
}
```

## 미지수 및 위험
*   **위험**: `llms.txt`가 CDN에 의해 공격적으로 캐시될 수 있습니다. 가능하면 적절한 캐시 헤더를 확인해야 하지만, 정적 사이트의 경우 배포 시 무효화가 발생합니다.
*   **해결**: 표준 정적 사이트 동작은 허용 가능합니다.
