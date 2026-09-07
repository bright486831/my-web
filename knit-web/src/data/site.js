export const brand = {
  name: 'Knitmus',
  tagline: '한 코 한 코, 손끝에서 완성되는 니트 백',
  description:
    '실 한 가닥의 결을 살려 손으로 직접 뜨고 매듭짓는 니트 백 브랜드 Knitmus입니다. ' +
    '군더더기 없는 실루엣과 깊이 있는 색감으로, 계절이 지나도 다시 손이 가는 가방을 만듭니다.',
  etsyUrl: 'https://knitmus.etsy.com',
  instagramUrl: 'https://www.instagram.com/knitmus/',
}

// Starter catalog built from the reference photos supplied for launch.
// Swap `etsyUrl` on each product for its own Etsy listing link once published,
// and fill in real 사이즈/소재/제작기간 detail as pieces are finalized.
export const products = [
  {
    slug: 'santorini-brown-crossbody',
    name: '산토리니 브라운 크로스백',
    colorway: 'Espresso Brown',
    heroImage: '/images/hero-santorini.webp',
    gallery: ['/images/hero-santorini.webp'],
    summary: '골드 하드웨어와 가죽 스트랩을 매치한 데일리 크로스백',
    description:
      '촘촘하게 엮은 브레이드 패턴 위에 은은한 골드 참을 더한 크로스백입니다. ' +
      '가죽 스트랩은 길이 조절이 가능해 크로스와 숄더 두 가지 방식으로 멜 수 있어요.',
    details: {
      소재: '코튼 얀 100%, 소가죽 스트랩',
      사이즈: '가로 22cm x 세로 16cm x 폭 8cm (예시, 실측 후 업데이트 예정)',
      제작기간: '주문 후 5~7일 (1:1 핸드메이드)',
    },
    etsyUrl: 'https://knitmus.etsy.com',
  },
  {
    slug: 'mixcolor-bucket-black-pink',
    name: '믹스 컬러 버킷백',
    colorway: 'Black × Pink × Navy',
    heroImage: '/images/product-mixcolor-bucket.jpg',
    gallery: ['/images/product-mixcolor-bucket.jpg'],
    summary: '세 가지 컬러 블록과 로프 핸들이 포인트인 미니 버킷백',
    description:
      '블랙, 더스티 핑크, 네이비를 층층이 배색한 버킷백입니다. ' +
      '직접 꼬아 만든 로프 핸들과 골드 로고 플레이트로 캐주얼한 룩에도 포인트를 줍니다.',
    details: {
      소재: '벨벳 얀 100%',
      사이즈: '가로 18cm x 높이 15cm (예시, 실측 후 업데이트 예정)',
      제작기간: '주문 후 5~7일 (1:1 핸드메이드)',
    },
    etsyUrl: 'https://knitmus.etsy.com',
  },
  {
    slug: 'grey-crochet-bucket',
    name: '그레이 크로셰 버킷백',
    colorway: 'Soft Grey',
    heroImage: '/images/product-grey-crochet-bucket.jpg',
    gallery: ['/images/product-grey-crochet-bucket.jpg'],
    summary: '리넨 안감 파우치를 품은 오픈워크 버킷백',
    description:
      '성근 오픈워크 패턴 사이로 은은하게 비치는 리넨 드로스트링 안감이 포인트예요. ' +
      '가볍고 부드러운 그레이 톤이라 어떤 옷차림과도 자연스럽게 어울립니다.',
    details: {
      소재: '코튼 혼방 얀, 리넨 안감',
      사이즈: '지름 15cm x 높이 14cm (예시, 실측 후 업데이트 예정)',
      제작기간: '주문 후 5~7일 (1:1 핸드메이드)',
    },
    etsyUrl: 'https://knitmus.etsy.com',
  },
  {
    slug: 'navy-colorblock-crossbody',
    name: '네이비 컬러블록 크로스백',
    colorway: 'Navy × Brick',
    heroImage: '/images/product-navy-colorblock.jpg',
    gallery: ['/images/product-navy-colorblock.jpg'],
    summary: '브릭 컬러 배색과 가죽 스트랩이 어우러진 스퀘어 백',
    description:
      '네이비와 브릭 컬러를 대담하게 배색한 스퀘어 실루엣 백입니다. ' +
      '탈부착 가능한 가죽 스트랩으로 핸드백과 크로스백, 두 가지 스타일로 연출할 수 있어요.',
    details: {
      소재: '코튼 얀 100%, 소가죽 스트랩',
      사이즈: '가로 16cm x 높이 14cm (예시, 실측 후 업데이트 예정)',
      제작기간: '주문 후 5~7일 (1:1 핸드메이드)',
    },
    etsyUrl: 'https://knitmus.etsy.com',
  },
]
