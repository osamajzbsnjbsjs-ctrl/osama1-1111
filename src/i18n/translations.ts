import { Language } from '../types';

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    services: string;
    opinion: string;
    contact: string;
    singleFileCode: string;
    getInTouch: string;
    switchLang: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titleAccent1: string;
    titlePart2: string;
    titleAccent2: string;
    tagline: string;
    exploreBtn: string;
    startProjectBtn: string;
    meetFounderBtn: string;
    brandBadge: string;
    brandTitle: string;
    brandDesc: string;
    pills: {
      prodReady: string;
      directContact: string;
      zeroBloat: string;
      crossPlatform: string;
    };
  };
  founder: {
    badge: string;
    name: string;
    role: string;
    company: string;
    bio: string;
    workstationTitle: string;
    workstationDesc: string;
    specs: {
      displays: string;
      displaysVal: string;
      os: string;
      osVal: string;
      focus: string;
      focusVal: string;
      status: string;
      statusVal: string;
    };
    contactDirectBtn: string;
    viewPhotoBtn: string;
  };
  about: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    missionTitle: string;
    missionP1: string;
    missionP2: string;
    pillars: {
      p1Title: string;
      p1Desc: string;
      p2Title: string;
      p2Desc: string;
      p3Title: string;
      p3Desc: string;
    };
    ctaBanner: string;
    ctaButton: string;
    statsTitle: string;
    stats: {
      s1Val: string;
      s1Label: string;
      s1Desc: string;
      s2Val: string;
      s2Label: string;
      s2Desc: string;
      s3Val: string;
      s3Label: string;
      s3Desc: string;
      s4Val: string;
      s4Label: string;
      s4Desc: string;
    };
    archGuarantee: string;
    archQuote: string;
  };
  services: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    items: {
      web: {
        title: string;
        desc: string;
        tags: string[];
      };
      game: {
        title: string;
        desc: string;
        tags: string[];
      };
      android: {
        title: string;
        desc: string;
        tags: string[];
      };
      design: {
        title: string;
        desc: string;
        tags: string[];
      };
    };
    interactiveDemoTitle: string;
    launchDemoBtn: string;
  };
  publicOpinion: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    avgRatingLabel: string;
    recommendationRate: string;
    satisfactionLabel: string;
    verifiedReviews: string;
    shareOpinionBtn: string;
    filterAll: string;
    filterWeb: string;
    filterGame: string;
    filterAndroid: string;
    filterDesign: string;
    verifiedBadge: string;
    communityBadge: string;
    helpful: string;
    votedHelpful: string;
    modalTitle: string;
    modalSubtitle: string;
    form: {
      title: string;
      nameLabel: string;
      namePlaceholder: string;
      roleLabel: string;
      rolePlaceholder: string;
      categoryLabel: string;
      ratingLabel: string;
      opinionLabel: string;
      opinionPlaceholder: string;
      submitBtn: string;
      submitting: string;
      successMsg: string;
      cancel: string;
    };
    emptyMessage: string;
  };
  contact: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    directTitle: string;
    directDesc: string;
    emailLabel: string;
    phoneLabel: string;
    copy: string;
    copied: string;
    callNow: string;
    sendEmail: string;
    availability: string;
    responseTime: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailInputLabel: string;
    emailPlaceholder: string;
    serviceLabel: string;
    serviceOptions: {
      web: string;
      game: string;
      android: string;
      design: string;
      other: string;
    };
    detailsLabel: string;
    detailsPlaceholder: string;
    submitBtn: string;
    submitting: string;
    successMsg: string;
  };
  footer: {
    desc: string;
    getStandaloneCode: string;
    navigation: string;
    officialContact: string;
    rights: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      opinion: 'Public Opinion',
      contact: 'Contact',
      singleFileCode: 'Single-File Code',
      getInTouch: 'Get In Touch',
      switchLang: 'Language',
    },
    hero: {
      badge: 'Next-Gen Engineering Architecture • Osama Soft Labs',
      titlePart1: 'Architecting',
      titleAccent1: 'Cutting-Edge',
      titlePart2: 'Software &',
      titleAccent2: 'Digital Realities',
      tagline:
        'At Osama Soft, we build high-impact digital solutions: from high-performance custom web applications and interactive 3D browser game mechanics, to resilient Android deployments and bespoke UI/UX designs.',
      exploreBtn: 'Explore Our Services',
      startProjectBtn: 'Start a Project',
      meetFounderBtn: 'Meet Osama (Founder)',
      brandBadge: 'OFFICIAL ENTERPRISE BRAND',
      brandTitle: 'Osama Soft Technologies',
      brandDesc:
        'Precision web systems • WebGL physics • Android ecosystem engineering • Bespoke digital cards & UX.',
      pills: {
        prodReady: 'Production Ready',
        directContact: 'Direct Contact 24/7',
        zeroBloat: 'Zero Bloatware',
        crossPlatform: 'Cross-Platform',
      },
    },
    founder: {
      badge: 'FOUNDER & LEAD SOFTWARE ENGINEER',
      name: 'Osama',
      role: 'Lead Architect & Software Creator',
      company: 'Osama Soft Technologies',
      bio: 'Visionary developer and founder behind Osama Soft. Dedicated to building hyper-responsive web applications, interactive 3D browser game loops, robust Android OS environments, and sleek midnight-glow digital interfaces.',
      workstationTitle: 'High-Tech Engineering Command Station',
      workstationDesc:
        'Equipped with multi-monitor 144Hz setups, ambient cyberpunk lighting, and custom hardware rigs optimized for real-time 3D rendering and software compilation.',
      specs: {
        displays: 'Workstation',
        displaysVal: 'Dual 144Hz + WebGL Rig',
        os: 'Ecosystem',
        osVal: 'Linux / Web / Android',
        focus: 'Engineering Focus',
        focusVal: 'Full-Stack, 3D Games, UI/UX',
        status: 'Availability',
        statusVal: 'Online • Accepting Projects',
      },
      contactDirectBtn: 'Contact Osama Directly',
      viewPhotoBtn: 'View Workstation Photo',
    },
    about: {
      badge: 'Company Mission & Values',
      title: 'Driven by Passion,',
      titleAccent: 'Engineered for Impact',
      subtitle:
        'Osama Soft is committed to building modern, robust software platforms that push technical boundaries and elevate digital experiences.',
      missionTitle: 'Our Uncompromising Mission',
      missionP1:
        'At Osama Soft, our mission is to deliver cutting-edge software solutions that seamlessly merge high-level computational performance with intuitive, engaging human interaction. We believe modern software shouldn’t just run—it should inspire, load instantly, and solve real-world problems with elegance.',
      missionP2:
        'Whether deploying lightning-fast responsive web applications with pure semantic JavaScript, building interactive WebGL 3D game engines, troubleshooting complex Android package sideloading hurdles, or crafting bespoke digital business cards and UI profiles, Osama Soft takes pride in pristine technical execution and client-first communication.',
      pillars: {
        p1Title: 'Engineering Without Fluff',
        p1Desc:
          'Pure, efficient, clean code built for maximum throughput, accessibility, and zero redundant dependencies.',
        p2Title: 'Full-Stack Capability',
        p2Desc:
          'From low-level APK architecture and ADB device permissions to high-tier graphics shaders and client state management.',
        p3Title: 'Direct Client Partnership',
        p3Desc:
          'Direct technical consultation, rapid delivery milestones, and round-the-clock availability via phone and email.',
      },
      ctaBanner: 'Ready to elevate your digital footprint with Osama Soft?',
      ctaButton: 'Consult With Us',
      statsTitle: 'Technical DNA & Focus',
      stats: {
        s1Val: '100%',
        s1Label: 'Responsive Web',
        s1Desc: 'Semantic layouts & high-speed SPA transitions',
        s2Val: '60 FPS',
        s2Label: '3D Game Loops',
        s2Desc: 'In-browser physics & hardware acceleration',
        s3Val: 'Android',
        s3Label: 'Mobile OS Experts',
        s3Desc: 'Sideloading, ADB, permissions & debugging',
        s4Val: 'Custom',
        s4Label: 'UI/UX Systems',
        s4Desc: 'Digital cards, profiles & midnight glows',
      },
      archGuarantee: 'ARCHITECTURE GUARANTEE',
      archQuote:
        '"Every line of code at Osama Soft is structured for longevity, maintainability, and instant responsiveness."',
    },
    services: {
      badge: 'Specialized Capabilities',
      title: 'Engineered for Performance,',
      titleAccent: 'Built to Scale',
      subtitle:
        'Explore our four core software engineering disciplines, crafted for maximum throughput and seamless user experience.',
      items: {
        web: {
          title: 'Custom Web Application Development',
          desc: 'Building responsive, dynamic platforms using HTML, CSS, and modern JavaScript. We craft bespoke single-page applications, administrative dashboards, and reactive client interfaces with high performance.',
          tags: ['HTML5 / CSS3', 'Modern JavaScript', 'SPA Routing', 'Responsive Design'],
        },
        game: {
          title: 'Browser-Based 3D Game Development',
          desc: 'Creating interactive web games, physics engines, and custom game mechanics running directly in modern browsers. Powered by WebGL, HTML5 Canvas, collision physics, and 60 FPS render loops.',
          tags: ['WebGL 3D', 'Physics Engine', '60 FPS Loops', 'Gamepad & Touch'],
        },
        android: {
          title: 'Mobile & Android Solutions',
          desc: 'Comprehensive Android OS diagnostics, app deployment, package sideloading (APK/AAB), permission debugging, and OS environment troubleshooting for personal and enterprise device setups.',
          tags: ['Package Sideloading', 'APK & AAB', 'ADB & Permissions', 'OS Diagnostics'],
        },
        design: {
          title: 'Premium UI/UX Design',
          desc: 'Crafting digital business cards, custom profiles, and engaging user interfaces. We produce striking visual identities, high-contrast dark and midnight themes, interactive prototypes, and typography systems.',
          tags: ['Digital Business Cards', 'Custom Profile UI', 'Midnight Cyber Theme', 'Neon Glow Aesthetics'],
        },
      },
      interactiveDemoTitle: 'Interactive WebGL 3D Physics Sandbox',
      launchDemoBtn: 'Simulate Interactive 3D Physics',
    },
    publicOpinion: {
      badge: 'Verified Community & Client Feedback',
      title: 'Public Opinion &',
      titleAccent: 'Client Endorsements',
      subtitle:
        'Discover genuine evaluations from businesses, founders, and community engineers on Osama Soft’s code craftsmanship, speed, and architecture.',
      avgRatingLabel: 'Average Rating (5.0 Scale)',
      recommendationRate: '99.4% Recommendation Rate',
      satisfactionLabel: 'Client Satisfaction Score',
      verifiedReviews: '140+ Verified Reviews',
      shareOpinionBtn: 'Share Your Opinion',
      filterAll: 'All Opinions',
      filterWeb: 'Web Apps',
      filterGame: '3D Games',
      filterAndroid: 'Android OS',
      filterDesign: 'UI/UX Design',
      verifiedBadge: 'Verified Client',
      communityBadge: 'Public Contributor',
      helpful: 'Helpful',
      votedHelpful: 'Endorsed',
      modalTitle: 'Submit Your Public Opinion',
      modalSubtitle:
        'Your authentic feedback helps the community and shapes the future releases of Osama Soft.',
      form: {
        title: 'Submit an Opinion or Review',
        nameLabel: 'Your Name or Organization',
        namePlaceholder: 'e.g. Tariq Al-Mansoor',
        roleLabel: 'Title / Role (Optional)',
        rolePlaceholder: 'e.g. CTO, Founder, or Developer',
        categoryLabel: 'Project Domain / Discipline',
        ratingLabel: 'Star Rating',
        opinionLabel: 'Your Feedback & Opinion',
        opinionPlaceholder:
          'Share your experience regarding code quality, execution speed, responsiveness, or technical depth...',
        submitBtn: 'Publish Public Opinion',
        submitting: 'Publishing...',
        successMsg: '✓ Your opinion has been published live to the community feed!',
        cancel: 'Cancel',
      },
      emptyMessage: 'No opinions found in this category yet. Be the first to share your opinion!',
    },
    contact: {
      badge: 'Get Connected',
      title: "Let's Build Your",
      titleAccent: 'Next Solution',
      subtitle:
        'Reach out directly to Osama Soft. We are available for projects, inquiries, and technical consultations.',
      directTitle: 'Direct Contact Information',
      directDesc:
        'Have a project in mind or need technical software support? Contact us directly via verified email or telephone.',
      emailLabel: 'Official Email Address',
      phoneLabel: 'Direct Telephone Line',
      copy: 'Copy',
      copied: 'Copied!',
      callNow: 'Call Direct',
      sendEmail: 'Send Email',
      availability: 'Ready for immediate project intake',
      responseTime: 'Typical response time: Within 24 hours. Full confidentiality guaranteed.',
      formTitle: 'Send Project Details',
      nameLabel: 'Your Full Name',
      namePlaceholder: 'e.g. Alex Morgan',
      emailInputLabel: 'Email Address',
      emailPlaceholder: 'e.g. alex@example.com',
      serviceLabel: 'Selected Service Domain',
      serviceOptions: {
        web: 'Custom Web Application Development',
        game: 'Browser-Based 3D Game Development',
        android: 'Mobile & Android Solutions (Deployment & Sideloading)',
        design: 'Premium UI/UX Design (Cards & Profiles)',
        other: 'Other Custom Software Consultation',
      },
      detailsLabel: 'Project Details & Requirements',
      detailsPlaceholder:
        'Describe the scope, timeline, and key requirements of your software project...',
      submitBtn: 'Send Message to Osama Soft',
      submitting: 'Dispatching Message...',
      successMsg:
        '✓ Message dispatched! Osama Soft will review your details and contact you shortly.',
    },
    footer: {
      desc: 'Osama Soft is a premier software engineering studio delivering custom web applications, browser-based 3D games, Android ecosystem solutions, and high-conversion UI/UX designs.',
      getStandaloneCode: '</> Get Standalone HTML Block',
      navigation: 'Navigation',
      officialContact: 'Official Contact',
      rights: 'All Rights Reserved. High-Performance SPA.',
    },
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      opinion: 'رأي الجمهور',
      contact: 'اتصل بنا',
      singleFileCode: 'كود الصفحة الموحد',
      getInTouch: 'تواصل معنا',
      switchLang: 'اللغة',
    },
    hero: {
      badge: 'هندسة برمجية متقدمة • مختبرات أسامة سوفت',
      titlePart1: 'هندسة البرمجيات',
      titleAccent1: 'المتطورة',
      titlePart2: 'والحلول',
      titleAccent2: 'الرقمية الحديثة',
      tagline:
        'في أسامة سوفت، نبتكر حلولاً برمجية استثنائية: من تطبيقات الويب فائقة الأداء وألعاب المتصفح ثلاثية الأبعاد، إلى حلول نظام أندرويد وتصميم واجهات المستخدم الاحترافية.',
      exploreBtn: 'استكشف خدماتنا',
      startProjectBtn: 'ابدأ مشروعك الآن',
      meetFounderBtn: 'تعرف على أسامة (المؤسس)',
      brandBadge: 'علامة تجارية برمجية رسمية',
      brandTitle: 'تقنيات أسامة سوفت',
      brandDesc:
        'أنظمة ويب دقيقة • محركات WebGL ثلاثية الأبعاد • هندسة نظام أندرويد • بطاقات رقمية وتصاميم فاخرة.',
      pills: {
        prodReady: 'جاهز للإنتاج',
        directContact: 'تواصل مباشر 24/7',
        zeroBloat: 'أداء فائق وبدون حشو',
        crossPlatform: 'متوافق مع كل المنصات',
      },
    },
    founder: {
      badge: 'المؤسس وكبير مهندسي البرمجيات',
      name: 'أسامة',
      role: 'كبير المهندسين ومؤسس أسامة سوفت',
      company: 'تقنيات أسامة سوفت (Osama Soft)',
      bio: 'مطور برمجيات طموح ومؤسس أسامة سوفت. متخصص في بناء تطبيقات الويب السريعة والديناميكية، ألعاب المتصفح ثلاثية الأبعاد، حلول نظام أندرويد المتكاملة، والواجهات الرقمية المضيئة بأسلوب السايبربنك الراقي.',
      workstationTitle: 'محطة العمل والتحكم الهندسي المتقدمة',
      workstationDesc:
        'مجهزة بشاشات مزدوجة بمعدل تحديث 144 هرتز، إضاءة نيون محيطية، ومحطة تجميع واختبار عتادية مخصصة لتصيير WebGL وتطوير البرمجيات في الوقت الفعلي.',
      specs: {
        displays: 'محطة العمل',
        displaysVal: 'شاشات مزدوجة 144Hz + WebGL Rig',
        os: 'البيئة البرمجية',
        osVal: 'Linux / Web / Android',
        focus: 'مجالات التركيز',
        focusVal: 'تطوير الويب، ألعاب 3D، UI/UX',
        status: 'الحالة الحالية',
        statusVal: 'متاح للعمل • جاهز للمشاريع',
      },
      contactDirectBtn: 'تواصل مع أسامة مباشرة',
      viewPhotoBtn: 'عرض صورة محطة العمل',
    },
    about: {
      badge: 'رؤية الشركة وقيمها',
      title: 'مدفوعون بالشغف،',
      titleAccent: 'مصممون للأثر الحقيقي',
      subtitle:
        'تلتزم أسامة سوفت ببناء منصات برمجية عصرية وقوية تتجاوز الحدود التقنية التقليدية وترتقي بالتجارب الرقمية.',
      missionTitle: 'مهمتنا الهندسية الراسخة',
      missionP1:
        'في أسامة سوفت، تتمثل مهمتنا في تقديم حلول برمجية متطورة تجمع بسلاسة بين الأداء الحاسوبي فائق السرعة والتفاعل الإنساني السلس والجذاب. نؤمن بأن البرمجيات الحديثة لا ينبغي أن تعمل فقط، بل يجب أن تلهم وتحل المشكلات الحقيقية بأناقة وسرعة فورية.',
      missionP2:
        'سواء أكان الأمر نشر تطبيقات ويب سريعة الاستجابة بأحدث معايير JavaScript، أو بناء ألعاب متصفح ثلاثية الأبعاد بمحركات WebGL، أو حل مشاكل تثبيت حزم أندرويد (APK/AAB) وأذونات ADB المعقدة، أو تصميم بطاقات الأعمال الرقمية الفاخرة، فإننا نفتخر بالدقة التقنية المطلقة.',
      pillars: {
        p1Title: 'هندسة نقية بدون شوائب',
        p1Desc: 'كود نظيف وعالي الكفاءة صُمم لتحقيق أقصى سرعة مع التخلي تماماً عن المكتبات الثقيلة وغير الضرورية.',
        p2Title: 'قدرات برمجية شاملة (Full-Stack)',
        p2Desc: 'من بنية حزم APK وأذونات أنظمة أندرويد العميقة إلى تظليل الرسوميات ثلاثية الأبعاد وإدارة حالة التطبيقات.',
        p3Title: 'شراكة وتواصل مباشر مع العميل',
        p3Desc: 'استشارات تقنية شفافة، إنجاز سريع للمراحل، واستعداد دائم للتواصل عبر الهاتف والبريد الإلكتروني.',
      },
      ctaBanner: 'هل أنت جاهز لتطوير حضورك الرقمي مع أسامة سوفت؟',
      ctaButton: 'استشرنا الآن',
      statsTitle: 'الهوية التقنية والقدرات',
      stats: {
        s1Val: '100%',
        s1Label: 'توافق الويب',
        s1Desc: 'تصاميم متجاوبة وانتقالات SPA فورية',
        s2Val: '60 إطار',
        s2Label: 'ألعاب 3D',
        s2Desc: 'فيزياء المتصفح وتسريع عتادي WebGL',
        s3Val: 'Android',
        s3Label: 'خبراء أندرويد',
        s3Desc: 'تثبيت الحزم، تصحيح ADB، وإدارة الأذونات',
        s4Val: 'مخصص',
        s4Label: 'أنظمة UI/UX',
        s4Desc: 'بطاقات رقمية وهوية داكنة متوهجة',
      },
      archGuarantee: 'ضمان الجودة الهندسية',
      archQuote:
        '"كل سطر برمجي في أسامة سوفت مصمم بعناية فائقة ليدوم طويلاً، ويكون سهل الصيانة وفائق الاستجابة."',
    },
    services: {
      badge: 'قدراتنا وخدماتنا المتخصصة',
      title: 'هندسة مصممة للأداء،',
      titleAccent: 'ومبنية للتوسع',
      subtitle:
        'استكشف تخصصاتنا الأربعة في تطوير البرمجيات، المصممة لتقديم أعلى سرعة وتجربة مستخدم لا مثيل لها.',
      items: {
        web: {
          title: 'تطوير تطبيقات الويب المخصصة',
          desc: 'بناء منصات ويب تفاعلية وسريعة الاستجابة باستخدام HTML و CSS وجافاسكريبت الحديثة. نطور تطبيقات الصفحة الواحدة (SPA) ولوحات التحكم الإدارية وواجهات المستخدم الحية بأعلى كفاءة.',
          tags: ['HTML5 / CSS3', 'جافاسكريبت الحديثة', 'توجيه SPA', 'تصميم متجاوب'],
        },
        game: {
          title: 'تطوير ألعاب المتصفح ثلاثية الأبعاد',
          desc: 'ابتكار ألعاب ويب تفاعلية ومحركات فيزياء وميكانيكا ألعاب مخصصة تعمل مباشرة في المتصفح دون الحاجة لأي إضافات، بالاعتماد على WebGL وكانفاس ومعدل تحديث 60 إطاراً في الثانية.',
          tags: ['WebGL 3D', 'محركات الفيزياء', 'سرعة 60 FPS', 'تحكم باللمس واليد'],
        },
        android: {
          title: 'حلول الهواتف ونظام أندرويد',
          desc: 'خدمات شاملة لتشخيص نظام أندرويد، نشر التطبيقات، التثبيت الجانبي لحزم APK و AAB، تصحيح أخطاء ADB، وإدارة أذونات النظام للمستخدمين والشركات.',
          tags: ['تثبيت الحزم APK/AAB', 'أدوات ADB', 'تشخيص النظام', 'إدارة الأذونات'],
        },
        design: {
          title: 'تصميم واجهات المستخدم الفاخرة (UI/UX)',
          desc: 'تصميم بطاقات الأعمال الرقمية، الملفات الشخصية المخصصة، وواجهات الاستخدام المستقبلية المستوحاة من أجواء السايبر والنيون الليلي مع تناغم لوني وخطوط مميزة.',
          tags: ['بطاقات أعمال رقمية', 'ملفات شخصية تفاعلية', 'تصميم ليلي فاخر', 'تأثيرات النيون'],
        },
      },
      interactiveDemoTitle: 'بيئة اختبار تفاعلية لفيزياء WebGL 3D',
      launchDemoBtn: 'محاكاة فيزياء ثلاثية الأبعاد',
    },
    publicOpinion: {
      badge: 'تقييمات وآراء العملاء والمجتمع التقني',
      title: 'رأي الجمهور و',
      titleAccent: 'شهادات الشركاء',
      subtitle:
        'اطلع على تجارب وتقييمات العملاء والمهندسين حول جودة كود أسامة سوفت، سرعة التسليم، والمستوى التقني المتقدم.',
      avgRatingLabel: 'متوسط التقييم العام (من 5.0)',
      recommendationRate: '99.4% نسبة التوصية بالتعامل',
      satisfactionLabel: 'مؤشر رضا العملاء التام',
      verifiedReviews: '+140 تقييم موثق',
      shareOpinionBtn: 'شارك برأيك الآن',
      filterAll: 'جميع الآراء',
      filterWeb: 'تطبيقات الويب',
      filterGame: 'ألعاب 3D',
      filterAndroid: 'أنظمة أندرويد',
      filterDesign: 'تصميم UI/UX',
      verifiedBadge: 'عميل موثق',
      communityBadge: 'مشارك عام',
      helpful: 'مفيد',
      votedHelpful: 'تم التأييد',
      modalTitle: 'إضافة رأيك وتقييمك لأسامة سوفت',
      modalSubtitle:
        'مشاركتك لتقييمك الصادق تثري المجتمع التقني وتدعم مسيرة التطوير والارتقاء البرمجي.',
      form: {
        title: 'شارك تجربتك ورأيك',
        nameLabel: 'الاسم أو الجهة',
        namePlaceholder: 'مثال: طارق المنصور',
        roleLabel: 'المسمى أو المنصب (اختياري)',
        rolePlaceholder: 'مثال: رائد أعمال، مؤسس تقني، أو مهندس',
        categoryLabel: 'مجال المشروع أو الخدمة',
        ratingLabel: 'التقييم بالنجوم',
        opinionLabel: 'رأيك وتجربتك بالتفصيل',
        opinionPlaceholder:
          'اكتب انطباعك عن جودة الأكواد، دقة المواعيد، سرعة التواصل، أو الحلول البرمجية المقدمة...',
        submitBtn: 'نشر الرأي فوراً',
        submitting: 'جاري النشر...',
        successMsg: '✓ تم نشر رأيك بنجاح في سجل آراء الجمهور العام!',
        cancel: 'إلغاء',
      },
      emptyMessage: 'لا توجد آراء مسجلة في هذا القسم بعد. كن أول من يشارك رأيه!',
    },
    contact: {
      badge: 'تواصل مباشر',
      title: 'دعنا نبني معاً',
      titleAccent: 'حلّك البرمجي القادم',
      subtitle:
        'تواصل مباشرة مع أسامة سوفت. نحن متاحون لبدء المشاريع، الإجابة على الاستفسارات، وتقديم الاستشارات التقنية.',
      directTitle: 'معلومات التواصل المباشرة',
      directDesc:
        'هل لديك فكرة مشروع أو تحتاج إلى دعم برمجي وتقني؟ تواصل معنا مباشرة عبر البريد الإلكتروني أو الهاتف.',
      emailLabel: 'البريد الإلكتروني الرسمي',
      phoneLabel: 'رقم الهاتف المباشر',
      copy: 'نسخ',
      copied: 'تم النسخ!',
      callNow: 'اتصل الآن',
      sendEmail: 'إرسال بريد',
      availability: 'جاهزون لاستقبال المشاريع فوراً',
      responseTime: 'وقت الاستجابة المعتاد: خلال 24 ساعة مع ضمان الخصوصية التامة.',
      formTitle: 'إرسال تفاصيل المشروع',
      nameLabel: 'الاسم بالكامل',
      namePlaceholder: 'مثال: أحمد محمد',
      emailInputLabel: 'عنوان البريد الإلكتروني',
      emailPlaceholder: 'مثال: ahmed@example.com',
      serviceLabel: 'مجال الخدمة المطلوب',
      serviceOptions: {
        web: 'تطوير تطبيقات الويب المخصصة',
        game: 'تطوير ألعاب المتصفح ثلاثية الأبعاد',
        android: 'حلول نظام أندرويد (تثبيت حزم وتشخيص)',
        design: 'تصميم واجهات المستخدم الفاخرة (بطاقات وملفات)',
        other: 'استشارة برمجية أخرى',
      },
      detailsLabel: 'تفاصيل المشروع والمتطلبات',
      detailsPlaceholder: 'اشرح نطاق المشروع، الميزات المطلوبة، والجدول الزمني المقترح...',
      submitBtn: 'إرسال الرسالة إلى أسامة سوفت',
      submitting: 'جاري إرسال الرسالة...',
      successMsg: '✓ تم إرسال رسالتك بنجاح! سيقوم فريق أسامة سوفت بمراجعة التفاصيل والتواصل معك قريباً.',
    },
    footer: {
      desc: 'أسامة سوفت هو استوديو هندسة برمجيات متخصص في تقديم تطبيقات الويب الحديثة، ألعاب المتصفح ثلاثية الأبعاد، حلول نظام أندرويد، وتصاميم UI/UX الفاخرة.',
      getStandaloneCode: '</> كود صفحة الويب المستقل',
      navigation: 'روابط التنقل',
      officialContact: 'التواصل الرسمي',
      rights: 'جميع الحقوق محفوظة لشركة أسامة سوفت.',
    },
  },

  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      services: 'Hizmetler',
      opinion: 'Kamuoyu Görüşleri',
      contact: 'İletişim',
      singleFileCode: 'Tek Dosya Kod',
      getInTouch: 'İletişime Geç',
      switchLang: 'Dil Seçimi',
    },
    hero: {
      badge: 'Yeni Nesil Yazılım Mimarisi • Osama Soft Labs',
      titlePart1: 'Geleceğin',
      titleAccent1: 'İleri Düzey',
      titlePart2: 'Yazılımlarını &',
      titleAccent2: 'Dijital Dünyalarını İnşa Ediyoruz',
      tagline:
        'Osama Soft olarak yüksek etkili dijital çözümler üretiyoruz: Yüksek performanslı özel web uygulamalarından tarayıcı tabanlı 3D oyun motorlarına, Android mobil sistemlerinden seçkin UI/UX tasarımlarına.',
      exploreBtn: 'Hizmetlerimizi Keşfedin',
      startProjectBtn: 'Projeye Başlayın',
      meetFounderBtn: "Osama ile Tanışın (Kurucu)",
      brandBadge: 'RESMİ YAZILIM MARKASI',
      brandTitle: 'Osama Soft Technologies',
      brandDesc:
        'Hassas web sistemleri • WebGL fizik motorları • Android ekosistem mühendisliği • Özel dijital kartvizitler & UI.',
      pills: {
        prodReady: 'Canlıya Hazır',
        directContact: '7/24 Doğrudan İletişim',
        zeroBloat: 'Gereksiz Yüksüz Saf Kod',
        crossPlatform: 'Çapraz Platform',
      },
    },
    founder: {
      badge: 'KURUCU & BAŞ YAZILIM MÜHENDİSİ',
      name: 'Osama',
      role: 'Baş Mimar & Yazılım Geliştirici',
      company: 'Osama Soft Technologies',
      bio: "Osama Soft'un kurucusu ve lider geliştiricisi. Modern, duyarlı web platformları, tarayıcı içi 3D WebGL oyun mekanikleri, Android işletim sistemi çözümleri ve neon ışıltılı siberpunk dijital kart vizyonuyla yazılım üretmektedir.",
      workstationTitle: 'İleri Düzey Geliştirici Komuta İstasyonu',
      workstationDesc:
        '144Hz çift ekran kurulumu, siberpunk ortam LED aydınlatması ve gerçek zamanlı WebGL render ile derleme işlemleri için özel optimize edilmiş donanım.',
      specs: {
        displays: 'Geliştirme İstasyonu',
        displaysVal: 'Çift 144Hz Ekran + WebGL Rig',
        os: 'Ekosistem',
        osVal: 'Linux / Web / Android',
        focus: 'Uzmanlık Alanı',
        focusVal: 'Full-Stack Web, 3D Oyun, UI/UX',
        status: 'Müsaitlik Durumu',
        statusVal: 'Çevrimiçi • Yeni Projeler Açık',
      },
      contactDirectBtn: "Osama ile Doğrudan İletişime Geç",
      viewPhotoBtn: 'Çalışma İstasyonu Fotoğrafı',
    },
    about: {
      badge: 'Şirket Vizyonu ve Değerlerimiz',
      title: 'Tutkuyla Kodlanan,',
      titleAccent: 'Etki İçin Tasarlanan Çözümler',
      subtitle:
        'Osama Soft, teknik sınırları zorlayan ve dijital deneyimleri üst seviyeye taşıyan modern ve güvenilir yazılım platformları geliştirmeye adanmıştır.',
      missionTitle: 'Ödünsüz Yazılım Misyonumuz',
      missionP1:
        "Osama Soft'ta misyonumuz, yüksek hesaplama performansını sezgisel ve çekici kullanıcı deneyimleriyle kusursuzca birleştiren yenilikçi yazılım çözümleri sunmaktır. Modern yazılımın sadece çalışmakla kalmayıp, ilham vermesi, anında yüklenmesi ve gerçek sorunları zarafetle çözmesi gerektiğine inanıyoruz.",
      missionP2:
        'Saf ve modern JavaScript ile ışık hızında çalışan web uygulamaları geliştirmekten, WebGL 3D tarayıcı oyun motorları oluşturmaya; karmaşık Android APK/AAB yükleme ve ADB izinlerini çözmekten, seçkin dijital kartvizitler tasarlamaya kadar her aşamada üstün teknik titizlikle çalışıyoruz.',
      pillars: {
        p1Title: 'Gereksiz Yüksüz Mühendislik',
        p1Desc: 'Maksimum verimlilik ve sıfır gereksiz bağımlılık ile optimize edilmiş saf, temiz ve hızlı kod yapısı.',
        p2Title: 'Kapsamlı Full-Stack Yetkinlik',
        p2Desc: 'Düşük seviyeli APK mimarisi ve ADB izinlerinden yüksek seviyeli grafik gölgelendiricileri ve durum yönetimine.',
        p3Title: 'Müşteriyle Doğrudan Ortaklık',
        p3Desc: 'Şeffaf teknik danışmanlık, hızlı teslimat aşamaları ve telefon ile e-posta üzerinden kesintisiz erişilebilirlik.',
      },
      ctaBanner: "Dijital varlığınızı Osama Soft ile bir üst seviyeye taşımaya hazır mısınız?",
      ctaButton: 'Hemen Danışın',
      statsTitle: 'Teknik DNA ve Odak Noktaları',
      stats: {
        s1Val: '%100',
        s1Label: 'Duyarlı Web',
        s1Desc: 'Semantik düzenler ve yüksek hızlı SPA geçişleri',
        s2Val: '60 FPS',
        s2Label: '3D Oyun Döngüleri',
        s2Desc: 'Tarayıcı içi fizik ve WebGL donanım hızlandırma',
        s3Val: 'Android',
        s3Label: 'Mobil İşletim Sistemi',
        s3Desc: 'Sideloading, ADB, izinler ve hata ayıklama',
        s4Val: 'Özel',
        s4Label: 'UI/UX Sistemleri',
        s4Desc: 'Dijital kartvizitler, profiller ve gece ışıltısı',
      },
      archGuarantee: 'MİMARİ GÜVENCESİ',
      archQuote:
        '"Osama Soft\'ta yazılan her satır kod uzun ömürlülük, kolay bakım ve anında tepki verebilirlik için yapılandırılmıştır."',
    },
    services: {
      badge: 'Uzmanlık Alanlarımız',
      title: 'Performans İçin Geliştirildi,',
      titleAccent: 'Büyüme İçin Ölçeklendi',
      subtitle:
        'En yüksek verim ve kusursuz kullanıcı deneyimi için tasarlanmış dört temel yazılım uzmanlığımızı inceleyin.',
      items: {
        web: {
          title: 'Özel Web Uygulama Geliştirme',
          desc: 'HTML, CSS ve modern JavaScript kullanarak duyarlı ve dinamik platformlar geliştiriyoruz. Özel tek sayfa uygulamaları (SPA), yönetim panelleri ve reaktif arayüzler üretiyoruz.',
          tags: ['HTML5 / CSS3', 'Modern JavaScript', 'SPA Yönlendirme', 'Duyarlı Tasarım'],
        },
        game: {
          title: 'Tarayıcı Tabanlı 3D Oyun Geliştirme',
          desc: 'Doğrudan modern web tarayıcılarında eklenti gerektirmeden çalışan etkileşimli 3D oyunlar, fizik motorları ve özel mekanikler. WebGL ve Canvas ile 60 FPS akıcılık.',
          tags: ['WebGL 3D', 'Fizik Motoru', '60 FPS Akıcılık', 'Gamepad & Dokunmatik'],
        },
        android: {
          title: 'Mobil & Android Çözümleri',
          desc: 'Kapsamlı Android işletim sistemi analizi, uygulama dağıtımı, APK/AAB harici yüklemeleri (sideloading), ADB izin yapılandırmaları ve sistem sorunlarını giderme.',
          tags: ['Paket Yükleme (APK/AAB)', 'ADB & İzinler', 'İşletim Sistemi Analizi', 'Hata Giderme'],
        },
        design: {
          title: 'Seçkin UI/UX Tasarımı',
          desc: 'Dijital kartvizitler, özel kullanıcı profilleri ve etkileyici arayüzler. Yüksek kontrastlı gece mavisi temalar, siberpunk neon ışıltıları ve tipografi sistemleri.',
          tags: ['Dijital Kartvizitler', 'Özel Profil UI', 'Gece Mavisi Tema', 'Neon Işıltı'],
        },
      },
      interactiveDemoTitle: 'Etkileşimli WebGL 3D Fizik Simülasyonu',
      launchDemoBtn: '3D Fizik Simülasyonunu Başlat',
    },
    publicOpinion: {
      badge: 'Doğrulanmış Topluluk ve Müşteri Değerlendirmeleri',
      title: 'Kamuoyu &',
      titleAccent: 'Müşteri Görüşleri',
      subtitle:
        "Osama Soft'un sunduğu kod temizliği, teslimat hızı ve üst düzey yazılım mimarisine dair gerçek kullanıcı değerlendirmeleri.",
      avgRatingLabel: 'Ortalama Puan (5.0 Üzerinden)',
      recommendationRate: '%99.4 Tavsiye Oranı',
      satisfactionLabel: 'Müşteri Memnuniyet Skoru',
      verifiedReviews: '140+ Doğrulanmış Yorum',
      shareOpinionBtn: 'Fikrini ve Görüşünü Paylaş',
      filterAll: 'Tüm Görüşler',
      filterWeb: 'Web Uygulamaları',
      filterGame: '3D Oyunlar',
      filterAndroid: 'Android Çözümleri',
      filterDesign: 'UI/UX Tasarımı',
      verifiedBadge: 'Doğrulanmış Müşteri',
      communityBadge: 'Genel Katılımcı',
      helpful: 'Faydalı',
      votedHelpful: 'Desteklendi',
      modalTitle: 'Kamuoyu Değerlendirmenizi Ekleyin',
      modalSubtitle:
        "Osama Soft ile deneyiminizi paylaşarak topluluğa rehberlik edin.",
      form: {
        title: 'Görüş veya İnceleme Bildirin',
        nameLabel: 'Adınız veya Kurumunuz',
        namePlaceholder: 'Örn: Tarık Alkan',
        roleLabel: 'Unvan / Pozisyon (İsteğe Bağlı)',
        rolePlaceholder: 'Örn: CTO, Kurucu Ortak veya Yazılımcı',
        categoryLabel: 'Proje / Hizmet Alanı',
        ratingLabel: 'Yıldız Derecelendirmesi',
        opinionLabel: 'Görüş ve Değerlendirmeniz',
        opinionPlaceholder:
          'Kod kalitesi, teslim hızı, iletişim ve teknik derinlik hakkındaki deneyiminizi yazın...',
        submitBtn: 'Görüşü Yayınla',
        submitting: 'Yayınlanıyor...',
        successMsg: '✓ Değerlendirmeniz kamuoyu panosunda anında yayına alındı!',
        cancel: 'İptal',
      },
      emptyMessage: 'Bu kategoride henüz bir görüş bulunmuyor. İlk fikri sen paylaş!',
    },
    contact: {
      badge: 'İletişime Geçin',
      title: 'Gelin Birlikte',
      titleAccent: 'Geleceğin Çözümünü İnşa Edelim',
      subtitle:
        'Projeler, teklifler ve teknik danışmanlık için doğrudan Osama Soft ile irtibata geçebilirsiniz.',
      directTitle: 'Doğrudan İletişim Bilgileri',
      directDesc:
        'Aklınızda bir proje mi var veya teknik yazılım desteğine mi ihtiyacınız var? Doğrudan e-posta veya telefon ile bize ulaşın.',
      emailLabel: 'Resmi E-Posta Adresi',
      phoneLabel: 'Doğrudan Telefon Hattı',
      copy: 'Kopyala',
      copied: 'Kopyalandı!',
      callNow: 'Hemen Ara',
      sendEmail: 'E-Posta Gönder',
      availability: 'Yeni projeler için hemen başlamaya hazır',
      responseTime: 'Ortalama yanıt süresi: 24 saat içinde. Tam gizlilik garantisi.',
      formTitle: 'Proje Detaylarını Gönderin',
      nameLabel: 'Adınız Soyadınız',
      namePlaceholder: 'Örn: Ahmet Yılmaz',
      emailInputLabel: 'E-Posta Adresiniz',
      emailPlaceholder: 'Örn: ahmet@example.com',
      serviceLabel: 'İlgilendiğiniz Hizmet Alanı',
      serviceOptions: {
        web: 'Özel Web Uygulama Geliştirme',
        game: 'Tarayıcı Tabanlı 3D Oyun Geliştirme',
        android: 'Mobil & Android Çözümleri (Dağıtım & Sideloading)',
        design: 'Seçkin UI/UX Tasarımı (Kartvizit & Profil)',
        other: 'Diğer Özel Yazılım Danışmanlığı',
      },
      detailsLabel: 'Proje Detayları ve İhtiyaçlar',
      detailsPlaceholder: 'Projenizin kapsamını, hedeflerini ve zaman planını kısaca belirtin...',
      submitBtn: "Mesajı Osama Soft'a Gönder",
      submitting: 'Mesaj Gönderiliyor...',
      successMsg: "✓ Mesajınız iletildi! Osama Soft ekibi detayları inceleyip en kısa sürede sizinle iletişime geçecektir.",
    },
    footer: {
      desc: "Osama Soft; özel web uygulamaları, tarayıcı tabanlı 3D oyunlar, Android çözümleri ve seçkin UI/UX tasarımları geliştiren ileri düzey bir yazılım geliştirme stüdyosudur.",
      getStandaloneCode: '</> Bağımsız Tek Dosya HTML Kodu',
      navigation: 'Menü',
      officialContact: 'Resmi İletişim',
      rights: 'Tüm Hakları Saklıdır. Yüksek Performanslı SPA.',
    },
  },
};
