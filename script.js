// 1. 데이터 저장소
const PORTFOLIO_DATA = {
    profile: {
        title: "profile.xml",
        icon: "fa-regular fa-circle-user",
        lines: [
            '<span class="tag">&lt;profile&gt;</span>',
            '',
            '&nbsp;&nbsp;<span class="category">Name</span> : <span class="val">Jeong Jinyeong</span>',
            '&nbsp;&nbsp;<span class="category">フリガナ</span> : <span class="val">チョン・ジンヨン</span>',
            '&nbsp;&nbsp;<span class="category">Age</span> : <span class="val">25</span>',
            '&nbsp;&nbsp;<span class="category">Country</span> : <span class="val">韓国</span>',
            '&nbsp;&nbsp;<span class="category">Final Education</span>: <span class="val">Keimyung University / Textile Design (2025년 2月卒業)</span>',
            '',
            '&nbsp;&nbsp;<span class="category">Licenses</span> : <span class="val">JLPT N3</span>',
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="val">コンピューターグラフィックス運用機能士(韓国)</span>',
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="val">1種 普通自動車運転免許(韓国)</span>',
            '',
            '&nbsp;&nbsp;<span class="category">Skills</span>: <span class="val">Photoshop</span>&nbsp;&nbsp; <span class="graph">■ ■ ■ ■ ■ ■ ■ ■ □ □ (80%)</span>',
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="val">Illustrator</span> <span class="graph">■ ■ ■ ■ ■ ■ ■ ■ ■ □ (90%)</span>',
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="val">InDesign</span>&nbsp;&nbsp;&nbsp; <span class="graph">■ ■ ■ ■ ■ ■ ■ ■ □ □ (80%)</span>',
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="val">Figma</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="graph">■ ■ ■ ■ ■ ■ ■ ■ ■ □ (90%)</span>',
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="val">HTML</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="graph">■ ■ ■ ■ ■ ■ □ □ □ □ (60%)</span>',
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="val">CSS</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="graph">■ ■ ■ ■ ■ ■ □ □ □ □ (60%)</span>',
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="val">AI活用</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="graph">■ ■ ■ ■ ■ ■ ■ ■ □ □ (80%)</span>',
            '',
            '&nbsp;&nbsp;<span class="category">自己紹介</span>',
            '&nbsp;&nbsp;&nbsp;&nbsp;<span class="val">私は、デザインの視点と技術力を兼ね備えたUI/UXデザイナー、またはグラフィックデザイナーを目指しています。</span>',
            '',
            '&nbsp;&nbsp;&nbsp;&nbsp;<span class="val">大学ではテキスタイルデザインを専攻し、視覚的な美しさとユーザー体験を深く追求する姿勢を養いました。</span>',
            '&nbsp;&nbsp;&nbsp;&nbsp;<span class="val">その経験を活かし、Webデザインおよびフロントエンド開発のスキル習得に注力しています。</span>',
            '&nbsp;&nbsp;&nbsp;&nbsp;<span class="val">そしてHTML/CSSを用いたコーディングを習得中で、JavaScriptの学習も進めています。</span>',
            '',
            '&nbsp;&nbsp;&nbsp;&nbsp;<span class="val">まだ習得途上の段階ではありますが、新しい技術を積極的に吸収する意欲と、人の心に響くデザインを生み出したいという情熱は誰にも負けません。</span>',
            '&nbsp;&nbsp;&nbsp;&nbsp;<span class="val">現在は日本（仙台）に滞在しており、一日も早く日本の実務環境に適応し、チームの一員として貢献したいと考えています。。</span>',
            '',
            '&nbsp;&nbsp;&nbsp;&nbsp;<span class="val">当社の環境で培ったデザイン感覚と開発力を活かし、ユーザーに価値ある製品を作りたいと考えています。</span>',
            '',
            '<span class="tag">&lt;/profile&gt;</span>'
        ]
    },
    projects: {
        title: "projects.xml",
        icon: "fa-regular fa-object-ungroup",
        lines: [
            '<span class="tag">&lt;projects&gt;</span>',
            '',
            // 1. 하우스키핑 웹앱 (가장 최근 프로젝트)
            '  <a href="https://ofhotel-cleancheck.web.app" target="_blank"><span class="category">01. Housekeeping Web-App</span> <i class="fa-solid fa-arrow-up-right-from-square"></i></a>',
            '<span class="comment">    /*Figma, HTML, CSS, JavaScript, Gemini*/</span>',
            '<span class="projectContents">    ハウスキーピング業務の効率化を目的としたウェブアプリの開発・設計 {</span>',
            '<span class="miniContent">        Situation & Task</span><span> : 実際にハウスキーピングのアルバイトをして感じた問題点として、</span></span>',
            '<span>                           清掃、ベッドメイキング、検査完了の報告をグループチャットに手動で投稿する方式のため、</span>',
            '<span>                           リアルタイムの状況を把握し共有するのが非常に面倒で、情報が欠落する問題が発生しました。</span>',
            '<span class="miniContent">        Action</span><span>           : 管理者と作業者がリアルタイムでコミュニケーションできるように、ステータス更新専用のダッシュボードを設計しました。</span>',
            '<span class="miniContent">        Result</span><span>           : 自分で作成した状況共有機能を他のチームメンバーのプログラムと統合し、実務の効率を向上</span>',
            '<span class="projectContents">    }</span>',
            '',
            // 2. 板室温泉 大黒屋 ホームページ リデザイン
            '  <a href="https://www.figma.com/design/b3wFbX5JGi2AksHc11nedU/%EB%A3%8C%EC%B9%B8-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A6%AC%EB%94%94%EC%9E%90%EC%9D%B8?node-id=150-224&t=Hm9tgKlcsLkymDBM-1" target="_blank"><span class="category">02. Daikokuya Website Redesign</span> <i class="fa-solid fa-arrow-up-right-from-square"></i></a>',
            '<span class="comment">    /* Figma, ChatGPT, Illustrator */</span>',
            '<span class="projectContents">    板室温泉 大黒屋 ホームページ リデザイン {</span>',
            '<span class="miniContent">        Situation & Task</span><span> : 既存のウェブサイトは伝統的な旅館の雰囲気は十分でしたが、</span>',
            '<span>                           情報構造が複雑で、顧客が客室や温泉の情報を見つけるのに苦労している状況でした。</span>',
            '<span class="miniContent">        Action</span><span>           : 複雑なナビゲーションをシンプルにし、</span>',
            '<span>                           顧客が最も必要とする情報（客室、温泉、予約）をメイン画面から直感的にアクセスできるようにしました。</span>',
            '<span class="miniContent">        Result</span><span>           : 実際のサイトの問題点を把握し、それを改善できるデザインの代案を導き出すことで、</span>',
            '<span>                           ユーザー体験を中心に考えることの重要性を体験</span>',
            '<span class="projectContents">    }</span>',
            '',
            // 3. Benidrop 브랜딩 & 웹 디자인
            '  <a href="https://www.figma.com/design/qQINHzfM99f2mHzmdwhRa5/Untitled?node-id=0-1&t=AfoaRCAnFO7LY5q9-1" target="_blank"><span class="category">03. Benidrop Branding</span>  <i class="fa-solid fa-arrow-up-right-from-square"></i></a>',
            '  <a href="https://www.figma.com/design/nYFaizk4acb4YskAOy4uX0/%EB%9E%9C%EB%94%A9%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=101-214&t=5HF2ZNSzrBiLRou1-1" target="_blank"><span class="category">    Benidrop Website Design</span>  <i class="fa-solid fa-arrow-up-right-from-square"></i></a>',
            '<span class="comment">    /* Figma, Photoshop, InDesign, ChatGPT */</span>',
            '<span class="projectContents">    山形チェリーを活用したブランドアイデンティティ {</span>',
            '<span class="miniContent">        Situation & Task</span><span> : 日本の山形地域の特産品であるチェリーを活用し、</span>',
            '<span>                           地域色を持ちながらも現代的な感覚のブランドアイデンティティを構築するという課題に取り組みました。</span>',
            '<span class="miniContent">        Action</span><span>           : 山形県に住む知人を通じてチェリー産業の価値を確認し、</span>',
            '<span>                           『Benidrop』というブランド名を導き出し、新鮮さとプレミアムイメージを組み合わせたデザインを企画しました。</span>',
            '<span>                           チェリーの赤い色を活かしたロゴデザインと、</span>',
            '<span>                           一貫したトーン＆マナー（色彩、タイポグラフィ）のガイドラインを確立しました。</span>',
            '<span class="miniContent">        Result</span><span>           : 地域の資源を創造的なブランディングストーリーに変換し、デザインがブランド価値をどのように高められるかを体験しました。</span>',
            '<span class="projectContents">    }</span>',
            '',
            // 4. インスタグラム イベントページ デザイン
            '  <a href="https://www.figma.com/design/3nhJ31ZSTm3GObRotlgNAA/Untitled?node-id=0-1&t=SRg4ppIweI5Th0Vc-1" target="_blank"><span class="category">04. Instagram Event Page</span> <i class="fa-solid fa-arrow-up-right-from-square"></i></a>',
            '<span class="comment">    /* Figma, ChatGPT */</span>',
            '<span class="projectContents">    ユーザー参加促進のためのイベントページデザイン {</span> ',
            '<span class="miniContent">        Situation & Task</span><span> : 製品の特性に応じてユーザーがどのように感じるかを考え、</span>',
            '<span>                           さまざまなカテゴリーをデジタル環境でどのように効果的に表現するかを研究しました。</span>',
            '<span class="miniContent">        Action</span><span>           : 食品の質感を最大化したレイアウトと感性的なムードを強調したカラー戦略をそれぞれ適用し、</span>',
            '<span>                           製品の特性に最適化されたマーケティングデザイン環境を構築しました。</span>',
            '<span class="miniContent">        Result</span><span>           : 単なるページ制作を超えて、製品の本質的な特性をデザインで解釈する経験をしました。</span>',
            '<span class="projectContents">    }</span>',
            '',
            // 5. 쿠라스시 리디자인
            '  <a href="https://www.figma.com/design/7A9Dm6QXp6LnJCRWmUSwj1/%EC%BF%A0%EB%9D%BC%EC%8A%A4%EC%8B%9C-%EC%95%B1-%EB%A6%AC%EB%94%94%EC%9E%90%EC%9D%B8?node-id=167-544&t=uA0E8PagIr7KoDIL-1" target="_blank"><span class="category">05. Kura Sushi App Redesign</span> <i class="fa-solid fa-arrow-up-right-from-square"></i></a>',
            '<span class="comment">    /* Figma, Illustrator, ChatGPT */</span>',
            '<span class="projectContents">    ユーザーの利便性向上のためのUX/UIリデザイン {</span> ',
            '<span class="miniContent">        Situation & Task</span><span> : 日本の生活に密接したサービスを分析している中で、</span>',
            '<span>                           『クラ寿司（Kura Sushi）』アプリのユーザーインターフェースの改善が必要だと判断しました。</span>',
            '<span class="miniContent">        Action</span><span>           : 韓国では直接アプリを使ってみることはできませんでしたが、写真でアプリの構造を熱心に分析しました。</span>',
            '<span>                           ユーザーが注文する際により便利になるよう、不要なステップを減らし、見やすくデザインを変更しました。</span>',
            '<span class="miniContent">        Result</span><span>           : サービス構造を深く学ぶことができ、ユーザーの立場で考えるUIデザインの重要性を学びました。</span>',
            '<span class="projectContents">    }</span>',
            '',
            '<span class="tag">&lt;/projects&gt;</span>'
        ]
    },
    contact: {
    title: "contact.xml",
    icon: "fa-regular fa-envelope",
    lines: [
        '<span class="tag">&lt;contact&gt;</span>',
        '',
        '&nbsp;&nbsp;<span class="category">Phone</span>: <span class="val">090-4120-3288</span>',
        // 이 부분에 <a> 태그를 추가했습니다.
        '&nbsp;&nbsp;<span class="category">Email</span>: <span class="val"><a href="mailto:jjy001002@icloud.com" style="text-decoration: none; color: inherit;">jjy001002@icloud.com <i class="fa-regular fa-paper-plane"></i></a> <span class="comment">/* クリックするとメールを送信できます */</span></span>',
        '',
        '<span class="tag">&lt;/contact&gt;</span>'
    ]
}
};

// 2. 상태 관리
let openTabs = [];
let activeTab = null;

// 3. UI 렌더링
function renderTabs() {
    const tabBar = document.querySelector('.tab_bar');
    tabBar.innerHTML = openTabs.map(key => `
        <div class="tab ${activeTab === key ? 'active' : ''}" onclick="openFile('${key}')">
            <i class="${PORTFOLIO_DATA[key].icon}"></i>
            <span>${PORTFOLIO_DATA[key].title}</span>
            <span class="close_btn" onclick="closeTab(event, '${key}')">×</span>
        </div>
    `).join('');

    new Sortable(tabBar, {
        animation: 150,
        ghostClass: 'sortable-ghost',
        onEnd: function (evt) {
            const item = openTabs.splice(evt.oldIndex, 1)[0];
            openTabs.splice(evt.newIndex, 0, item);
        }
    });
}

// 사이드바 토글 함수
function toggleSidebar() {
    const sidebar = document.getElementById('mySidebar');
    const resizer = document.getElementById('resizer');
    const isMobile = window.innerWidth <= 768; // 768px 이하를 모바일로 간주

    if (isMobile) {
        // 모바일일 때는 사이드바를 껐다 켰다 함
        sidebar.classList.toggle('active');
    } else {
        // PC일 때는 기존의 접기/펴기(hidden) 기능 수행
        sidebar.classList.toggle('hidden');
        
        // 리사이저 표시 여부 처리
        if (sidebar.classList.contains('hidden')) {
            resizer.style.display = 'none';
        } else {
            resizer.style.display = 'block';
        }
    }
}

// 파일 선택 후 모바일이면 자동으로 사이드바 닫기 (선택 사항)
function openFile(key) {
    if (!openTabs.includes(key)) openTabs.push(key);
    activeTab = key;
    renderTabs();
    renderContent(key);

    // 모바일 환경일 경우 파일 클릭 시 사이드바 자동 닫기
    if (window.innerWidth <= 768) {
        document.getElementById('mySidebar').classList.remove('active');
    }
}


function renderContent(key) {
    const wrapper = document.getElementById('editor_wrapper');
    wrapper.innerHTML = ''; // 초기화

    PORTFOLIO_DATA[key].lines.forEach((line, index) => {
        const row = document.createElement('div');
        row.className = 'line-row';
        row.innerHTML = `
            <div class="line-num">${index + 1}</div>
            <div class="code-line">${line || '&nbsp;'}</div>
        `;
        wrapper.appendChild(row);
    });
}

// 4. 파일 제어
function openFile(key) {
    if (!openTabs.includes(key)) openTabs.push(key);
    activeTab = key;
    renderTabs();
    renderContent(key);
}

function closeTab(event, key) {
    event.stopPropagation();
    openTabs = openTabs.filter(tab => tab !== key);
    if (activeTab === key) {
        activeTab = openTabs[openTabs.length - 1] || null;
        activeTab ? openFile(activeTab) : clearEditor();
    }
    renderTabs();
}

function clearEditor() {
    document.getElementById('editor_wrapper').innerHTML = "";
    activeTab = null;
}

// 5. 사이드바 제어
const sidebar = document.getElementById('mySidebar');
const resizer = document.getElementById('resizer');

resizer.addEventListener('mousedown', () => {
    document.addEventListener('mousemove', resizeSidebar);
    document.addEventListener('mouseup', stopResize);
});

function resizeSidebar(e) { sidebar.style.width = e.pageX + 'px'; }
function stopResize() { document.removeEventListener('mousemove', resizeSidebar); }

window.onload = () => {
    // 1. 모든 기기에서 공통적으로 필요한 초기 탭 설정
    // 태블릿/모바일은 3개를 모두 열고, PC는 프로필만 열고 싶다면 아래와 같이 조건문 사용
    if (window.innerWidth <= 1024) {
        openTabs = ['profile', 'projects', 'contact'];
        activeTab = 'profile'; // 기본 시작 페이지
    } else {
        openTabs = ['profile'];
        activeTab = 'profile';
    }

    // 2. 탭을 화면에 그리기
    renderTabs();

    // 3. 실제 컨텐츠 렌더링
    openFile(activeTab);
};

// 6. 드래그 앤 드롭 기능 추가
function renderTabs() {
    const tabBar = document.querySelector('.tab_bar');
    tabBar.innerHTML = openTabs.map(key => `
        <div class="tab ${activeTab === key ? 'active' : ''}" onclick="openFile('${key}')">
            <i class="${PORTFOLIO_DATA[key].icon}"></i>
            <span>${PORTFOLIO_DATA[key].title}</span>
            <span class="close_btn" onclick="closeTab(event, '${key}')">×</span>
        </div>
    `).join('');

    // 여기서 드래그 앤 드롭 기능을 다시 활성화합니다
    new Sortable(tabBar, {
        animation: 150,
        ghostClass: 'sortable-ghost',
        onEnd: function (evt) {
            const item = openTabs.splice(evt.oldIndex, 1)[0];
            openTabs.splice(evt.newIndex, 0, item);
            // 순서가 바뀌었으니 렌더링을 다시 할 필요는 없지만, 
            // 필요하다면 여기서 데이터 상태를 업데이트하세요.
        }
    });
}
// 7. 반응형 디자인: 창 크기에 따라 탭 자동 추가/제거
window.addEventListener('resize', () => {
    const isSmallScreen = window.innerWidth <= 1024;
    const requiredFiles = ['profile', 'projects', 'contact'];

    if (isSmallScreen) {
        // 배열에 없는 탭만 추가 (중복 방지)
        requiredFiles.forEach(key => {
            if (!openTabs.includes(key)) {
                openTabs.push(key);
            }
        });
    }
    
    // 렌더링을 다시 해서 닫기 버튼 제어 및 탭 구성을 최신화
    renderTabs();
    // 만약 현재 열린 파일이 없으면 강제로 프로필을 열어줌
    if (!activeTab) openFile('profile');
});

// 창 크기가 바뀔 때마다 탭을 다시 그려줌
window.addEventListener('resize', () => {
    renderTabs();
});

function renderTabs() {
    const tabBar = document.querySelector('.tab_bar');
    const isSmallScreen = window.innerWidth <= 1024;

    // 1024px 이하로 줄어들면 닫기 버튼은 무조건 숨김
    tabBar.innerHTML = openTabs.map(key => `
        <div class="tab ${activeTab === key ? 'active' : ''}" onclick="openFile('${key}')">
            <i class="${PORTFOLIO_DATA[key].icon}"></i>
            <span>${PORTFOLIO_DATA[key].title}</span>
            ${!isSmallScreen ? `<span class="close_btn" onclick="closeTab(event, '${key}')">×</span>` : ''}
        </div>
    `).join('');
    
    // 드래그 앤 드롭 기능을 데스크탑에서만 유지
    if (!isSmallScreen) {
        new Sortable(tabBar, { animation: 150 });
    }
}