# 퀵스타트: 에이전트 최적화

**기능**: 에이전트 최적화 (GEO/AIEO/AEO)
**날짜**: 2025-11-20

## 검증 단계

### 1. `llms.txt` 확인

1.  개발 서버 시작:
    ```bash
    npm run dev
    ```
2.  브라우저를 열거나 curl을 사용하여 파일 가져오기:
    ```bash
    curl http://localhost:3000/llms.txt
    ```
3.  **예상 결과**:
    *   상태: 200 OK
    *   Content-Type: text/plain
    *   본문: 블로그 제목, 설명 및 게시물 목록 포함.

### 2. JSON-LD 확인 (홈페이지)

1.  `http://localhost:3000/`로 이동.
2.  페이지 소스 보기 (Ctrl+U).
3.  `application/ld+json` 검색.
4.  **예상 결과**:
    ```json
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "...",
      "url": "..."
    }
    ```

### 3. JSON-LD 확인 (게시물 페이지)

1.  아무 게시물이나 이동, 예: `http://localhost:3000/posts/hello-world`.
2.  페이지 소스 보기.
3.  `application/ld+json` 검색.
4.  **예상 결과**:
    ```json
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "...",
      "datePublished": "...",
      ...
    }
    ```
5.  (선택 사항) 소스 코드를 복사하여 [Google Rich Results Test](https://search.google.com/test/rich-results)에 붙여넣어 검증.
