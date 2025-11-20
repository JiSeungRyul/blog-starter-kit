# 데이터 모델: 에이전트 최적화

**기능**: 에이전트 최적화 (GEO/AIEO/AEO)
**날짜**: 2025-11-20

## 엔티티

### LLMsTxtContent

`llms.txt` 파일 콘텐츠의 구조를 나타냅니다.

```typescript
interface LLMsTxtContent {
  title: string;
  description: string;
  posts: {
    title: string;
    url: string;
  }[];
}
```

### JSON-LD 스키마

표준 Schema.org 타입을 사용합니다.

#### WebSite (홈페이지)

```typescript
interface JsonLdWebSite {
  '@context': 'https://schema.org';
  '@type': 'WebSite';
  name: string;
  url: string;
}
```

#### Article (블로그 게시물)

```typescript
interface JsonLdArticle {
  '@context': 'https://schema.org';
  '@type': 'Article';
  headline: string;
  image?: string[];
  datePublished: string;
  dateModified?: string;
  author: {
    '@type': 'Person';
    name: string;
  };
  description?: string;
}
```

## 파일 형식

### `public/llms.txt`

빌드 시 생성되는 일반 텍스트 파일입니다.

```text
# [블로그 제목]

[블로그 설명]

## 게시물

- [게시물 제목]: [전체 URL]
- [게시물 제목]: [전체 URL]
...
```
