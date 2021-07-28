# NewsViewer

## Stack
> ### styled-components
> ### React-Hooks
> ### react-router
> ### NewsAPI

## 폴더 구조
> - ### newsviewer 
>  - ### node_modules
>  - ### public
>  - ### src
>     - ### components (List, ListItem, Categories)
>     - ### lib (Custom-Hooks)
>     - ### pages (React-Router)

## jsx 파일별 기능들
> - ### src/components/Categories : categories 객체를 이용해 순차적으로 컴포넌트 출력하고 NavLink컴포넌트를 이용해 선택된 카테고리의 다른 스타일 적용
> - ### src/components/ NewsItem : article이라는 객체를 props로 받아 와서 출력해줍니다
> - ### src/components/ NewsList : NewsAPI를 요청해 결과값을 ListItem에 전달해주고 출력과 동시에 API의 데이터를 받아오는 동안의 로딩, 데이터가 없을 때 반환하는 리스폰, 문제가 생겼을때 에러를 출력
> - ### src/lib/usePromise : 로딩, 데이터 유무, 에러를 발생시키는 커스텀 Hooks
> - ### src/pages/NewsPage : 라우터를 적용할 News페이지
