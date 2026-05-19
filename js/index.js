// DOM 요소가 모두 로드된 후 실행
document.addEventListener('DOMContentLoaded', () => {
            
            // 1. 순차적 등장 애니메이션 로직
            // 화면에 나타나야 할 요소들을 모두 찾습니다.
            const animatedElements = document.querySelectorAll('.animate-on-load');
            
            animatedElements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('visible');
                }, index * 150); 
            });

            
            
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon'); 
    const mobileFullMenu = document.getElementById('mobileFullMenu');   
    const menuCloseBtn = document.getElementById('menuCloseBtn');       

   
    if (mobileMenuIcon && mobileFullMenu && menuCloseBtn) {
        
        // 1. 햄버거 아이콘을 클릭했을 때
        mobileMenuIcon.addEventListener('click', () => {
            mobileFullMenu.classList.add('active'); 
            document.body.style.overflow = 'hidden'; 
        });

        // 2. 닫기(X) 버튼을 클릭했을 때
        menuCloseBtn.addEventListener('click', () => {
            mobileFullMenu.classList.remove('active'); 
            document.body.style.overflow = ''; 
        });

        // 3. 모바일 메뉴 리스트의 li 항목을 클릭했을 때 메뉴 닫기
        const mobileMenuItems = mobileFullMenu.querySelectorAll('.mobile-menu-list li a');
        mobileMenuItems.forEach(item => {
            item.addEventListener('click', () => {
                mobileFullMenu.classList.remove('active'); 
                document.body.style.overflow = ''; 
            });
        });

        // 4. PC 드롭다운 메뉴 항목 클릭 시 메뉴 닫기
        const pcDropdownWrapper = document.querySelector('.dropdown-wrapper');
        const pcDropdownLinks = document.querySelectorAll('.dropdown-wrapper .dropdown-list a');
        if (pcDropdownWrapper) {
            pcDropdownLinks.forEach(link => {
                link.addEventListener('click', () => {
                    pcDropdownWrapper.classList.add('closed');
                });
            });

            const headerElement = pcDropdownWrapper.closest('header');
            if (headerElement) {
                headerElement.addEventListener('mouseenter', () => {
                    pcDropdownWrapper.classList.remove('closed');
                });
            }
        }
    } 





// 1. 관찰 대상 및 옵션 설정
const observerOptions = {
  root: null, // 브라우저 뷰포트를 기준으로 감지
  threshold: 0.15 // 요소가 15% 정도 보였을 때 실행
};

// 2. 실행할 콜백 함수 정의
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 화면에 들어오면 'visible' 클래스 추가
      entry.target.classList.add('visible');
      // 한 번 나타난 후에는 관찰을 중단하고 싶다면 아래 주석 해제
      // observer.unobserve(entry.target);
    }
  });
};

// 3. Observer 생성 및 실행
const observer = new IntersectionObserver(observerCallback, observerOptions);

// 4. .reveal 클래스를 가진 모든 요소를 찾아 관찰 시작
const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach(el => observer.observe(el));



// 1. 각 슬라이드에 들어갈 데이터 배열 생성
    const popupData = [
        {
            num: "1",
            title: "나이키 포스",
            desc: "불필요한 요소를 배제한 클린 무드 내에서 제품을 최우선으로 강조하여, 사용자가 진입 시 0.5초 이내에 핵심 모델을 인지할 수 있도록 설계했습니다. 제품의 기능적 특성인 ‘경량성’을 부유하는 시각 요소로 직관화했으며, 보조 요소의 절제된 배치를 통해 브랜드 메시지 전달력을 높이고 제품에 대한 구매 몰입감을 극대화했습니다.",
            time: "3 Hours"
        },
        {
            num: "2",
            title: "블랙프라이데이",
            desc: "어두운 배경 위 핑크 네온의 대비로 시각적 주목도를 높인 블랙프라이데이 팝업 디자인입니다. 택배 상자 모티프를 통한 직관적인 서비스 경험 전달에 주력했으며, 감각적인 아이콘 배치를 통해 프로모션의 혜택을 시각화하여 전환율을 높이는 비주얼 전략을 반영했습니다.",
            time: "2 Hours"
        },
        {
            num: "3",
            title: "크리스마스 스페셜",
            desc: "트리와 장식 오브제 등 크리스마스 헤리티지 요소를 감각적으로 변주하여 팝업 고유의 축제 무드를 극대화했습니다. 다크 톤 배경 위로 연출된 광원 효과는 시각적 노이즈를 정돈하는 동시에 프로모션 메시지로의 몰입도를 높이는 전환 장치로 기능하며, 고유의 시즌 감성과 상업적 목적이 정교하게 결합된 레이아웃 위계를 완성했습니다.",
            time: "4 Hours"
        },
        {
            num: "4",
            title: "나이키 포스",
            desc: "1:1 정방형 레이아웃 내에서 톤온톤(Tone-on-Tone) 컬러 시스템을 적용하여 브랜드 아이덴티티의 응집력을 높이고 제품의 존재감을 압도적으로 연출했습니다. 타이포그래피를 제품 후면에 배치하는 레이어링 기법으로 입체적인 공간감을 형성해 시각적 시퀀스가 제품에 최우선적으로 머물게 설계했으며, 배경의 빛줄기 연출을 통해 제품의 핵심 가치인 통기성과 경량성을 감각적인 시각 정보로 치환했습니다.",
            time: "3 Hours"
        },
        {
            num: "5",
            title: "파이브 가이즈",
            desc: "레드 & 화이트의 브랜드 시스템과 연기 효과(Steam effect)를 결합해 '조리 직후의 신선함'을 시각적으로 증명했습니다. 옐로우 컬러 포인트로 제품 특성을 소구하고, 브랜드의 투박하고 진정성 있는 이미지를 대변하는 볼드한 타이포그래피를 후면에 배치하는 레이어링 기법을 통해 제품 인지도를 최우선으로 확보하는 시각적 위계를 구축했습니다.",
            time: "2 Hours"
        },
        {
            num: "6",
            title: "크리스마스 이벤트 팝업",
            desc: "1:1 정방형 레이아웃 내에 페이퍼 아트(Paper Art) 질감을 적용, 물리적 레이어링을 통한 입체감으로 크리스마스 특유의 아늑함과 수공예적 가치를 극대화했습니다. 고딕과 세리프 서체를 정교하게 조합하여 가독성과 브랜드의 개성을 동시에 확보했으며, 일러스트와 타이포그래피 간의 균형 잡힌 배치를 통해 시즌 프로모션의 메시지를 감성적이면서도 명확하게 전달하도록 설계했습니다.",
            time: "4 Hours"
        },
        {
            num: "7",
            title: "나이키 포스",
            desc: "나이키 에어 포스 1 '07 스타일링에 자연스럽게 어울리는 변하지 않는 기준을 제시하는 팝업 디자인입니다.",
            time: "3 Hours"
        },
        {
            num: "8",
            title: "블랙프라이데이",
            desc: "블랙프라이데이 프로모션을 위한 팝업 디자인으로, 어두운 배경과 핑크 네온 컬러를 활용해 강렬한 대비와 시각적 집중도를 극대화하였습니다. 중앙에는 택배 상자 모티프를 배치하여 즉각적인 구매 행동을 유도합니다.",
            time: "2 Hours"
        }
    ];

    // 2. Swiper 슬라이드 초기화 및 설정
 // 2. Swiper 슬라이드 초기화 및 설정 (수정됨)
    const popupSwiper = new Swiper('.popupSwiper', {
        direction: 'vertical',
        
        // 🌟 핵심: 숫자가 아닌 'auto'를 주면 CSS에서 설정한 width/height를 그대로 존중합니다.
        slidesPerView: 'auto', 
        
        centeredSlides: true,  
        
        // 🌟 핵심: 이미지 사이의 간격을 넉넉하게 주어 겹치지 않게 합니다.
        spaceBetween: 50,      
        
        grabCursor: true,      
        loop: true,            
        autoplay: {
            delay: 3000,       
            disableOnInteraction: false, 
        },
        // 반응형 설정 (모바일 가로 모드)
        breakpoints: {
            270: {
                direction: 'horizontal',
                spaceBetween: 30, // 모바일은 화면이 좁으니 간격을 조금 줄입니다.
            },
            1061: {
                direction: 'vertical',
                spaceBetween: 50, // PC 세로 모드 간격
            }
        }
    });

    // 3. 슬라이드가 바뀔 때마다 우측 텍스트 데이터 업데이트
    popupSwiper.on('slideChange', function () {
        // 루프 모드일 때는 realIndex를 사용해야 정확한 순서를 가져옵니다.
        const currentIndex = popupSwiper.realIndex; 
        const currentData = popupData[currentIndex];

        // HTML 요소들에 데이터 갈아끼우기
        document.getElementById('dyn-num').innerText = currentData.num;
        document.getElementById('dyn-title').innerText = currentData.title;
        document.getElementById('dyn-desc').innerText = currentData.desc;
        document.getElementById('dyn-time').innerText = currentData.time;
    });

    // 4. 컨트롤 버튼 기능 연결
    document.getElementById('btn-prev').addEventListener('click', () => {
        popupSwiper.slidePrev(); // 이전 슬라이드로 수동 전환
    });
    
    document.getElementById('btn-next').addEventListener('click', () => {
        popupSwiper.slideNext(); // 다음 슬라이드로 수동 전환
    });

    document.getElementById('btn-play').addEventListener('click', () => {
        popupSwiper.autoplay.start(); // 자동 재생 시작
    });

    document.getElementById('btn-stop').addEventListener('click', () => {
        popupSwiper.autoplay.stop(); // 녹화(정지) 버튼: 자동 재생 멈춤
    });

// ==========================================
    // --- 🌟 배너 섹션 스와이퍼 로직 추가 ---
    // ==========================================

    // 1. 배너 슬라이드 데이터 배열
    const bannerData = [
        {
            num: "1",
            title: "아크네 스튜디오 스카프",
            desc: "겨울을 위해 태어난 부드러운 모헤어 혼방 소재의 후디드 스카프로, 포근한 분위기를 연출하는 배너 디자인입니다. 상품의 질감을 강조했습니다."
        },
        {
            num: "2",
            title: "여름 시즌오프 세일",
            desc: "시원한 블루 톤을 바탕으로 타이포그래피를 강조하여 세일 정보를 직관적으로 전달하는 디자인입니다."
        },
        {
            num: "3",
            title: "신규 코스메틱 런칭",
            desc: "고급스러운 무드를 위해 차분한 배경과 세련된 빛 효과를 더해 신제품의 우아함을 표현한 배너입니다."
        },
        {
            num: "4",
            title: "신규 코스메틱 런칭",
            desc: "고급스러운 무드를 위해 차분한 배경과 세련된 빛 효과를 더해 신제품의 우아함을 표현한 배너입니다."
        },
        {
            num: "5",
            title: "신규 코스메틱 런칭",
            desc: "고급스러운 무드를 위해 차분한 배경과 세련된 빛 효과를 더해 신제품의 우아함을 표현한 배너입니다."
        }
    ];

    // 2. 배너 스와이퍼 초기화
    const bannerSwiper = new Swiper('.bannerSwiper', {
        loop: true,
        autoplay: {
            delay: 4000, // 4초마다 자동 넘어감
            disableOnInteraction: false, 
        },
        // 🌟 진행률 바(프로그레스 바) 연결 설정
        pagination: {
            el: '.banner-pagination',
            type: 'progressbar', // 점(bullets) 대신 바(bar) 형태로 설정
        }
    });

    // 3. 배너 슬라이드가 넘어갈 때마다 텍스트 변경하기
    bannerSwiper.on('slideChange', function () {
        const currentIndex = bannerSwiper.realIndex;
        const currentData = bannerData[currentIndex];

        // 검은 상자 안의 텍스트와 숫자를 업데이트
        document.getElementById('banner-dyn-num').innerText = currentData.num;
        document.getElementById('banner-dyn-title').innerText = currentData.title;
        document.getElementById('banner-dyn-desc').innerText = currentData.desc;
    });


// ==========================================
    // --- 🌟 포스터 섹션 클릭 인터랙션 로직 ---
    // ==========================================
    
    // 화면에 있는 모든 포스터(.poster-item)를 가져옵니다.
    const posterItems = document.querySelectorAll('.poster-item');

    posterItems.forEach(item => {
        item.addEventListener('click', () => {
            
            // 이미 열려있는 포스터를 다시 클릭한 경우 -> 닫기만 하고 종료
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                return;
            }

            // 1. 먼저 모든 포스터의 'active' 클래스를 제거해서 설명창을 다 닫습니다.
            posterItems.forEach(p => p.classList.remove('active'));
            
            // 2. 지금 방금 클릭한 포스터에만 'active' 클래스를 붙여서 설명창을 엽니다.
            item.classList.add('active');
        });
    });

// ==========================================
    // --- 🌟 상세페이지 클릭 모달(팝업) 기능 ---
    // ==========================================
    const detailCards = document.querySelectorAll('.detail-card');
    const detailModal = document.getElementById('detailModal');
    const modalImage = document.getElementById('modalImage');
    
    // 🌟 텍스트를 집어넣을 HTML 요소들을 추가로 가져옵니다
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    
    const modalCloseBtn = document.querySelector('.modal-close-btn');

    detailCards.forEach(card => {
        card.addEventListener('click', () => {
            // HTML의 data- 속성에서 이미지 경로, 제목, 설명을 가져옵니다.
            const fullImgSrc = card.getAttribute('data-detail');
            const titleText = card.getAttribute('data-title');
            const descText = card.getAttribute('data-desc');

            // 🌟 가져온 데이터들을 모달 창 안에 쏙쏙 넣어줍니다.
            modalImage.src = fullImgSrc;
            modalTitle.innerText = titleText;
            modalDesc.innerHTML = descText; // <br> 태그를 적용하기 위해 innerHTML 사용
            
            detailModal.classList.add('show');
            document.body.style.overflow = 'hidden'; 
            
            // 팝업 열 때 스크롤 위치를 맨 위로 초기화 (선택 사항)
            document.querySelector('.modal-img-area').scrollTop = 0;
        });
    });

    modalCloseBtn.addEventListener('click', () => {
        detailModal.classList.remove('show');
        document.body.style.overflow = 'auto'; 
    });

    detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) {
            detailModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });



    
    // 화면에 있는 모든 프로젝트 컨테이너와 모든 플로팅 버튼 묶음을 가져옵니다.
    const projects = document.querySelectorAll('.web-design-section .web-container');
    const allFloatingBtns = document.querySelectorAll('.floating-wrap');
    
    // 클릭 이벤트: 어떤 트리거(Link 동그라미)를 누르든 자기 부모의 메뉴를 엽니다.
    const triggers = document.querySelectorAll('.trigger-btn');
    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            // 클릭한 동그라미의 부모(.floating-wrap)에 is-open 클래스를 토글
            e.target.closest('.floating-wrap').classList.toggle('is-open');
        });
    });

    // 바탕화면 클릭 시 열려있는 모든 메뉴 닫기
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.floating-wrap')) {
            allFloatingBtns.forEach(btn => btn.classList.remove('is-open'));
        }
    });

    // 🌟 스크롤 감지 및 버튼 교체 로직
    if (projects.length > 0 && allFloatingBtns.length > 0) {
        
       // 🌟 3. 스크롤 위치 감지 및 버튼 교체 로직 (수정된 부분)
        window.addEventListener('scroll', () => {
            let activeBtnId = null; 

            // 화면 높이의 20% 지점을 계산합니다. (위에서부터 20% 내려온 지점)
            const triggerPoint = window.innerHeight * 0.1; 

            // 1. 어떤 프로젝트 영역을 보고 있는지 판독합니다.
            projects.forEach(project => {
                // 각 프로젝트 컨테이너의 현재 화면상 위치 정보를 가져옵니다.
                const rect = project.getBoundingClientRect();
                
                // [설명]
                // rect.top: 화면 맨 위에서 프로젝트 맨 위까지의 거리
                // rect.bottom: 화면 맨 위에서 프로젝트 맨 아래까지의 거리
                
                // 조건: 
                // 1) 프로젝트의 시작점(Top)이 화면 20% 지점을 통과하여 더 위로 올라갔거나 (rect.top <= triggerPoint)
                // 2) 프로젝트의 끝점(Bottom)이 아직 화면 20% 지점을 통과하기 전이라면 (rect.bottom >= triggerPoint)
                // 현재 사용자는 이 프로젝트 영역의 핵심(20% 이상 진입한 상태)을 보고 있는 것입니다.
                
                if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
                    // 조건이 맞으면 HTML에 적어둔 data-btn 이름표를 가져옵니다.
                    activeBtnId = project.getAttribute('data-btn'); 
                }
            });

            // 2. 모든 플로팅 버튼을 확인하면서 맞게 켜고 끕니다. (이 부분은 이전과 동일합니다)
            allFloatingBtns.forEach(btn => {
                if (btn.id === activeBtnId) {
                    btn.classList.add('is-visible');
                } else {
                    btn.classList.remove('is-visible');
                    btn.classList.remove('is-open');
                }
            });
        });
    }











 });