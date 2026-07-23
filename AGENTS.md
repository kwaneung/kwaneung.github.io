# AGENTS.md

`kwaneung.github.io` — 김관응 Product Engineer 포트폴리오. 정적 HTML/CSS/JS 사이트이며 빌드 단계가 없습니다. GitHub Pages(`main` 브랜치, `/` root)로 배포됩니다.

- 구조/개요: `README.md` 참고.
- 빌드/의존성 없음: `package.json`, 락파일, 번들러가 없습니다. `npm install` 류의 설치 단계가 없습니다.
- 자동화 테스트/린트 없음: test·lint·build 명령이 존재하지 않습니다.

## Cursor Cloud specific instructions

- 이 워크스페이스에는 두 개의 저장소가 있습니다: `kwaneung.github.io`(이 저장소, 실행 가능한 정적 사이트)와 `career`(Markdown 문서 전용, 실행할 앱 없음).
- 개발 서버는 반드시 **저장소 루트에서** 실행하세요. HTML이 `/css/styles.css`, `/js/main.js`, `/work/<slug>/` 같은 **절대 경로**를 사용하므로 `file://`로 직접 열면 CSS/JS/링크가 깨집니다.
  - 실행: `npx -y serve . -l 3000` (README 권장) 또는 `python3 -m http.server 3000` (네트워크 불필요, 이미 python3 설치됨).
  - 확인: `curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/` → `200`.
- 정적 파일 서버라 핫 리로드가 없습니다. HTML/CSS/JS를 수정하면 브라우저를 새로고침하세요. `styles.css`/`main.js`는 `?v=` 캐시버스터로 링크되어 있으니 캐시가 남으면 하드 리프레시가 필요할 수 있습니다.
- 실행 가능한 검증은 브라우저로 페이지를 열어 확인하는 것뿐입니다(빌드·테스트·린트 없음).
