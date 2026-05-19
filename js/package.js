document.addEventListener('DOMContentLoaded', () => {
    // 🌟 1. 변경될 프로젝트 데이터를 배열로 준비합니다 (필요한 만큼 추가 가능!)
    const projectData = [
        {
            title: "블랙프라이데이",
            desc: "블랙프라이데이 프로모션을 위한 팝업 디자인으로, 어두운 배경과 핑크 네온 컬러를 활용해 강렬한 대비와 시각적 집중도를 극대화하였습니다. 중앙에는 택배 상자 모티프를 배치하여 '배송'과 '구매 완료'의 이미지를 직관적으로 전달하고, 주변에 반짝이는 아이콘 요소를 더해 기대감과 혜택의 분위기를 강조하였습니다. 전체적으로 소비자의 즉각적인 구매 행동을 유도할 수 있도록 설계된 프로모션 중심의 비주얼 전략을 반영하였습니다.",
            mainImg: "./img/dz-mockup.png",
            subImg1: "./img/dz-back.png",
            subImg2: "./img/dz.png"
        },
        {
            title: "크리스마스 스페셜 패키지",
            desc: "연말 분위기를 물씬 풍기는 크리스마스 시즌 한정 패키지입니다. 따뜻한 레드와 그린 컬러를 매치하고 골드 텍스처를 더해 고급스러움을 살렸습니다.",
            mainImg: "./img/pkg2-main.jpg",
            subImg1: "./img/pkg2-sub1.jpg",
            subImg2: "./img/pkg2-sub2.jpg"
        },
        {
            title: "스프링 블라썸 에디션",
            desc: "봄의 화사함을 담은 패키지 디자인으로, 파스텔 톤의 벚꽃 일러스트를 활용하여 타겟 고객층의 감성을 자극하도록 기획되었습니다.",
            mainImg: "./img/pkg3-main.jpg",
            subImg1: "./img/pkg3-sub1.jpg",
            subImg2: "./img/pkg3-sub2.jpg"
        }
    ];

    let currentIndex = 0; // 현재 보여지는 프로젝트의 순번 (0부터 시작)

    // HTML에 있는 요소들 가져오기
    const titleEl = document.getElementById('pkgTitle');
    const descEl = document.getElementById('pkgDesc');
    const mainImgEl = document.getElementById('pkgMainImg');
    const subImg1El = document.getElementById('pkgSubImg1');
    const subImg2El = document.getElementById('pkgSubImg2');
    
    // 부드러운 전환 효과를 위해 애니메이션 클래스를 껐다 켜는 그룹
    const animatedElements = [titleEl, descEl, mainImgEl, subImg1El, subImg2El];

    // 🌟 화면 업데이트 함수
    function updateContent(index) {
        const data = projectData[index];

        // 1. 애니메이션 클래스 잠깐 빼기 (재시작을 위해)
        animatedElements.forEach(el => el.classList.remove('fade-anim'));

        // 2. 약간의 시간차를 두고 내용 교체 후 애니메이션 다시 넣기
        setTimeout(() => {
            titleEl.textContent = data.title;
            descEl.textContent = data.desc;
            // 실제 이미지가 없을 때는 엑스박스가 뜨지 않게 빈 값 처리 (시안의 하얀 박스 유지)
            mainImgEl.src = data.mainImg || ""; 
            subImg1El.src = data.subImg1 || "";
            subImg2El.src = data.subImg2 || "";

            animatedElements.forEach(el => el.classList.add('fade-anim'));
        }, 50); // 0.05초 대기
    }

    // 🌟 화살표 클릭 이벤트
    document.getElementById('btnNext').addEventListener('click', () => {
        currentIndex++;
        // 끝까지 가면 다시 처음(0)으로 돌아오기
        if (currentIndex >= projectData.length) {
            currentIndex = 0;
        }
        updateContent(currentIndex);
    });

    document.getElementById('btnPrev').addEventListener('click', () => {
        currentIndex--;
        // 처음에서 뒤로 가면 맨 마지막으로 가기
        if (currentIndex < 0) {
            currentIndex = projectData.length - 1;
        }
        updateContent(currentIndex);
    });
});