import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  MessageSquare,
  Calendar,
  Gift,
  ArrowBigUp,
  ArrowBigDown,
  MessageCircle,
  Send,
  Plus,
  CheckCircle2,
  Circle,
  Trash2,
  Printer,
  Download,
  Clock,
  Droplets,
  Heart,
  X,
  Globe,
  Moon,
  BookOpen,
  Utensils,
  Compass,
  Store,
  HandHeart,
  PhoneCall,
  MapPin,
  Tag,
  TrendingUp,
  BadgeDollarSign,
  Settings,
  Award,
  Dumbbell,
  Scale,
  Flame,
  Trophy,
  Video,
  Camera,
  Image as ImageIcon,
  ExternalLink,
  Play,
  ChefHat
} from 'lucide-react';

// ============================================================================
// COMPREHENSIVE MULTI-LANGUAGE TRANSLATIONS (EN, AR, FR, DE)
// ============================================================================

const TRANSLATIONS = {
  en: {
    dir: 'ltr',
    tagline: "Women's Sanctuary",
    nav: {
      lounge: 'The Lounge',
      muslim: 'Muslim Sanctuary',
      boutique: 'Her Boutique',
      charity: 'Sisterhood Aid',
      fitness: 'Fitness & Body',
      ai: 'Anoura AI',
      planner: 'My Planner',
      vault: 'Free Vault',
      revenue: 'Revenue Hub'
    },
    shareStory: 'Share Story',
    heroBadge: 'A Refined Digital Sanctuary for Modern Women',
    heroTitles: {
      lounge: 'The Lounge — Sisterhood, Wisdom & Daily Rituals',
      muslim: 'Muslim Women’s Sanctuary — Faith, Serenity & Sisterhood',
      boutique: 'Her Boutique — Women-Owned Creations & Digital Goods',
      charity: 'Sisterhood Aid — Medical Help, Donations & Solidarity',
      fitness: 'Fitness & Wellness Club — Workouts, Measurements & Motivation',
      ai: 'Anoura AI — Your Personal Lifestyle & Culinary Concierge',
      planner: 'My Luxury Planner — Cuisine Meals & Sacred Me-Time',
      vault: 'The Complimentary Vault — Printable Editions',
      revenue: 'Creator Revenue & Monetization Studio — Path to $300/Day'
    },
    stats: {
      discussions: 'Discussions',
      cuisine: 'Cuisine Mode',
      vault: 'PDF Vault'
    },
    ui: {
      comments: 'Comments',
      addCommentPlaceholder: 'Add a supportive note...',
      postBtn: 'Post',
      adLabel: 'Sponsored Sanctuary Partner • Ad Space (728x90)',
      adText: 'Discover curated wellness, modest fashion & artisanal kitchenware',
      chooseCuisine: 'Select Your Culinary Heritage / Nationality:',
      autoFillMeals: 'Auto-Fill Weekly Menu & Grocery List',
      groceryList: 'Smart Grocery List',
      addIngredient: 'Add ingredient...',
      printMenu: 'Print Menu',
      breakfast: 'Breakfast',
      lunch: 'Lunch',
      dinner: 'Dinner',
      choosePersonality: 'Choose Your Personality & Sacred Me-Time Focus:',
      dailyMeTimeGoal: 'Today’s 60-Min Sacred Me-Time Ritual',
      meTimeDone: 'Me-Time Completed! Well done, Queen.',
      markMeTimeDone: 'Mark Today’s Me-Time Complete',
      dailyPrayers: 'Daily Salah & Ibadah Tracker',
      morningAdhkar: 'Morning & Evening Adhkar',
      quranPages: 'Daily Quran Wird (Pages Read)',
      muslimCircleTitle: 'Muslim Sisterhood Reflections',
      downloadFree: 'Download Free PDF',
      preparingPdf: 'Preparing your Anoura Luxury Edition...',
      downloadReady: 'Your Printable PDF Sheet is Ready!',
      boutiqueSubtitle: 'Support women entrepreneurs — handmade crafts, pastries, beauty & digital templates',
      addProductBtn: '+ List Your Product',
      contactSeller: 'Contact Seller',
      charitySubtitle: 'A compassionate circle for donating items, finding rare medications, or medical beds',
      addAidBtn: '+ Post Aid / Donation',
      offerDonation: 'Available Donation',
      urgentNeed: 'Urgent Medical / Aid Need',
      helpNow: 'Offer Help / Contact',
      allItems: 'All Listings',
      featuredSponsor: '★ Featured Spotlight',
      promoteProductBtn: '★ Promote to Top ($10/wk)',
      fitnessTitle: 'Women’s Fitness & Motivation Circle',
      workoutPlan: 'Daily Home & Gym Workout Routine',
      measurementsTable: 'Weight & Body Measurements Tracker',
      currentWeight: 'Weight (kg)',
      waistCm: 'Waist (cm)',
      hipsCm: 'Hips (cm)',
      chestCm: 'Bust / Arms (cm)',
      logProgressBtn: '+ Log Today’s Measurements',
      motivationBoard: 'Sisterhood Motivation & Challenges',
      fitnessVideosTitle: 'Workout Video Studio (Choose Your Focus)',
      watchMonetizedVideo: 'Watch Full YouTube Session (Ad-Supported)',
      recipeStudioTitle: 'Share New Recipe with Photo & Cooking Video',
      addRecipePhoto: 'Upload Dish Photo',
      recordCookingVideo: 'Record / Upload Cooking Video',
      shareRecipeBtn: 'Publish Recipe & Video to Lounge',
      attachPhotoLabel: 'Attach Photo (From Device or URL)'
    },
    plannerTabs: {
      meals: 'Meals by Cuisine & Diet',
      recipes: 'Recipes & Cooking Video Studio',
      metime: 'Personality & Me-Time',
      daily: 'Daily Flow & Hydration'
    }
  },
  ar: {
    dir: 'rtl',
    tagline: 'ملاذ المرأة العصرية',
    nav: {
      lounge: 'الصالون النسائي',
      muslim: 'حياة المسلمة',
      boutique: 'بوتيك النساء',
      charity: 'ركن الخير والتكافل',
      fitness: 'الرياضة والرشاقة',
      ai: 'مساعدة أنورا AI',
      planner: 'منظمي الفاخر',
      vault: 'مكتبة الهدايا',
      revenue: 'أرباح المنصة'
    },
    shareStory: 'شاركي تجربتك',
    heroBadge: 'ملاذ رقمي راقٍ يجمع بين الأناقة، التنظيم، والتكافل',
    heroTitles: {
      lounge: 'الصالون النسائي — مساحة آمنة لتبادل التجارب والوصفات',
      muslim: 'حياة المسلمة — إيمان، سكينة، وأخوّة صادقة',
      boutique: 'بوتيك النساء — سوق لبيع إبداعات ومنتجات المرأة',
      charity: 'ركن الخير والتكافل — التبرع بالأغراض وتوفير الدواء والمستلزمات الطبية',
      fitness: 'نادي الرياضة والرشاقة — تمارين، جدول القياسات والميزان، وتحفيز الأخوات',
      ai: 'مساعدة أنورا الذكية — مستشارتكِ للطبخ وتنظيم الوقت',
      planner: 'منظمي الفاخر — جدول الطبخ حسب المطبخ والرجيم ووقتكِ الخاص',
      vault: 'مكتبة القوالب المجانية — نسخ جاهزة للطباعة',
      revenue: 'استوديو الأرباح والدخل — خطة الوصول إلى 300$ يومياً'
    },
    stats: {
      discussions: 'نقاشات',
      cuisine: 'المطبخ المختار',
      vault: 'قوالب مجانية'
    },
    ui: {
      comments: 'التعليقات',
      addCommentPlaceholder: 'اكتبي تعليقاً داعماً لأختكِ...',
      postBtn: 'نشر',
      adLabel: 'شريك إعلاني • مساحة إعلانية (728x90)',
      adText: 'اكتشفي أرقى مستلزمات العناية، الأزياء المحتشمة، وأدوات المطبخ العصرية',
      chooseCuisine: 'اختاري مطبخكِ حسب الجنسية أو الذوق:',
      autoFillMeals: 'تعبئة جدول الأسبوع وقائمة التسوق تلقائياً',
      groceryList: 'قائمة التسوق الذكية',
      addIngredient: 'أضيفي مكوناً جديداً...',
      printMenu: 'طباعة الجدول',
      breakfast: 'الفطور',
      lunch: 'الغداء',
      dinner: 'العشاء',
      choosePersonality: 'اختاري شخصيتكِ وهدف وقتكِ الخاص اليومي:',
      dailyMeTimeGoal: 'ساعة وقتكِ الخاص المقدسة اليوم (60 دقيقة)',
      meTimeDone: 'أتممتِ وقتكِ الخاص اليوم! دمتِ متألقة.',
      markMeTimeDone: 'تأكيد إتمام وقتي الخاص اليوم',
      dailyPrayers: 'متتبع الصلوات الخمس والسنن',
      morningAdhkar: 'أذكار الصباح والمساء',
      quranPages: 'الورد القرآني اليومي (عدد الصفحات)',
      muslimCircleTitle: 'مجلس الأخوات وتجارب الإيمان',
      downloadFree: 'تحميل القالب مجاناً',
      preparingPdf: 'جاري تجهيز نسختكِ الفاخرة من أنورا...',
      downloadReady: 'ملفكِ جاهز للتحميل والطباعة الآن!',
      boutiqueSubtitle: 'ادعمي مشاريع النساء — حرف يدوية، حلويات، مستحضرات طبيعية، وقوالب رقمية',
      addProductBtn: '+ اعرضي منتجكِ للبيع',
      contactSeller: 'تواصلي مع البائعة',
      charitySubtitle: 'مساحة إنسانية للتبرع بالأغراض أو طلب دواء نادر أو سرير طبي لمريض',
      addAidBtn: '+ أضيفي تبرعاً أو حالة مستعجلة',
      offerDonation: 'متوفر للتبرع مجاناً',
      urgentNeed: 'حالة بحاجة لمساعدة / دواء',
      helpNow: 'تواصلي للمساعدة',
      allItems: 'عرض الكل',
      featuredSponsor: '★ إعلان ممول ومثبت',
      promoteProductBtn: '★ تثبيت في الأعلى (10$)',
      fitnessTitle: 'نادي الرياضة والتحفيز بين النساء',
      workoutPlan: 'جدول التمارين الرياضية اليومي',
      measurementsTable: 'جدول تتبع الميزان وقياسات الجسم',
      currentWeight: 'الوزن (كغ)',
      waistCm: 'الخصر (سم)',
      hipsCm: 'الأرداف (سم)',
      chestCm: 'الصدر / الذراع (سم)',
      logProgressBtn: '+ تسجيل قياسات اليوم',
      motivationBoard: 'ركن التحفيز والتحديات بين الأخوات',
      fitnessVideosTitle: 'استوديو فيديوهات الرياضة (اختاري نوع التمرين)',
      watchMonetizedVideo: 'مشاهدة الجلسة على يوتيوب (رابط ربحي)',
      recipeStudioTitle: 'مشاركة وصفة جديدة بالصور وتسجيل فيديو أثناء الطبخ',
      addRecipePhoto: 'إضافة صورة الطبق',
      recordCookingVideo: 'تصوير فيديو أثناء الطبخ أو رفعه',
      shareRecipeBtn: 'نشر الوصفة والفيديو في الصالون',
      attachPhotoLabel: 'إرفاق صورة (من الهاتف أو رابط)'
    },
    plannerTabs: {
      meals: 'جدول الطبخ والمطبخ الصحي والرجيم',
      recipes: 'وصفات بالصور وفيديو الطبخ',
      metime: 'شخصيتي ووقتي الخاص',
      daily: 'الروتين اليومي وشرب الماء'
    }
  },
  fr: {
    dir: 'ltr',
    tagline: 'Sanctuaire Féminin',
    nav: {
      lounge: 'Le Salon',
      muslim: 'Espace Musulmane',
      boutique: 'Boutique Femmes',
      charity: 'Entraide & Dons',
      fitness: 'Sport & Forme',
      ai: 'Anoura IA',
      planner: 'Mon Agenda',
      vault: 'Coffre Gratuit',
      revenue: 'Revenus'
    },
    shareStory: 'Publier',
    heroBadge: 'Un Sanctuaire Digital Raffiné pour la Femme Moderne',
    heroTitles: {
      lounge: 'Le Salon — Sororité, Conseils & Rituels Quotidiens',
      muslim: 'Espace Femme Musulmane — Foi, Sérénité & Partage',
      boutique: 'La Boutique — Créations Féminines & Produits Digitaux',
      charity: 'Entraide & Solidarité — Dons, Médicaments & Soutien Médical',
      fitness: 'Club Fitness & Bien-être — Entraînements, Mensurations & Motivation',
      ai: 'Anoura IA — Votre Concierge Lifestyle & Culinaire',
      planner: 'Mon Agenda — Cuisines du Monde, Régime & Temps pour Soi',
      vault: 'Le Coffre Offert — Modèles Imprimables',
      revenue: 'Studio de Monétisation — Objectif 300$/Jour'
    },
    stats: {
      discussions: 'Discussions',
      cuisine: 'Cuisine',
      vault: 'Modèles PDF'
    },
    ui: {
      comments: 'Commentaires',
      addCommentPlaceholder: 'Ajouter un commentaire bienveillant...',
      postBtn: 'Publier',
      adLabel: 'Partenaire Sponsorisé • Espace Pub (728x90)',
      adText: 'Découvrez nos sélections bien-être, mode pudique et art de la table',
      chooseCuisine: 'Choisissez votre cuisine selon votre origine :',
      autoFillMeals: 'Remplir le menu et la liste de courses',
      groceryList: 'Liste de Courses Intelligente',
      addIngredient: 'Ajouter un ingrédient...',
      printMenu: 'Imprimer le Menu',
      breakfast: 'Petit-déjeuner',
      lunch: 'Déjeuner',
      dinner: 'Dîner',
      choosePersonality: 'Choisissez votre personnalité & objectif Temps pour Soi :',
      dailyMeTimeGoal: 'Votre rituel sacré de 60 min aujourd’hui',
      meTimeDone: 'Temps pour soi accompli ! Bravo.',
      markMeTimeDone: 'Valider mon temps pour soi',
      dailyPrayers: 'Suivi des 5 Prières Quotidiennes',
      morningAdhkar: 'Invocations du Matin & du Soir',
      quranPages: 'Lecture du Coran (Pages lues)',
      muslimCircleTitle: 'Cercle des Sœurs & Spiritualité',
      downloadFree: 'Télécharger PDF Gratuit',
      preparingPdf: 'Préparation de votre édition Anoura...',
      downloadReady: 'Votre fiche imprimable est prête !',
      boutiqueSubtitle: 'Soutenez les créatrices — artisanat, pâtisserie, beauté naturelle et modèles digitaux',
      addProductBtn: '+ Vendre un produit',
      contactSeller: 'Contacter la vendeuse',
      charitySubtitle: 'Espace solidaire pour donner des objets, trouver un médicament ou un lit médicalisé',
      addAidBtn: '+ Publier un don / besoin',
      offerDonation: 'Don Disponible',
      urgentNeed: 'Besoin Urgent / Médicament',
      helpNow: 'Aider / Contacter',
      allItems: 'Tout Afficher',
      featuredSponsor: '★ Annonce Sponsorisée',
      promoteProductBtn: '★ Épingler en Haut (10$)',
      fitnessTitle: 'Cercle Fitness & Motivation Féminine',
      workoutPlan: 'Programme d’Entraînement Quotidien',
      measurementsTable: 'Tableau de Suivi Poids & Mensurations',
      currentWeight: 'Poids (kg)',
      waistCm: 'Taille (cm)',
      hipsCm: 'Hanches (cm)',
      chestCm: 'Poitrine / Bras (cm)',
      logProgressBtn: '+ Enregistrer mes mesures',
      motivationBoard: 'Défis & Motivation entre Sœurs',
      fitnessVideosTitle: 'Studio Vidéos Fitness (Choisissez votre style)',
      watchMonetizedVideo: 'Voir la séance YouTube (Lien rémunéré)',
      recipeStudioTitle: 'Partager une Recette Photo & Vidéo en Cuisine',
      addRecipePhoto: 'Ajouter une photo du plat',
      recordCookingVideo: 'Filmer / Importer une vidéo cuisine',
      shareRecipeBtn: 'Publier la recette & vidéo au Salon',
      attachPhotoLabel: 'Joindre une photo (Appareil ou lien)'
    },
    plannerTabs: {
      meals: 'Menus par Cuisine & Régime',
      recipes: 'Recettes Photos & Vidéo Cuisine',
      metime: 'Personnalité & Temps pour Soi',
      daily: 'Routine & Hydratation'
    }
  },
  de: {
    dir: 'ltr',
    tagline: 'Refugium für Frauen',
    nav: {
      lounge: 'Die Lounge',
      muslim: 'Muslima-Bereich',
      boutique: 'Frauen-Boutique',
      charity: 'Hilfe & Spenden',
      fitness: 'Fitness & Körper',
      ai: 'Anoura KI',
      planner: 'Mein Planer',
      vault: 'Gratis-Vorlagen',
      revenue: 'Einnahmen'
    },
    shareStory: 'Beitrag teilen',
    heroBadge: 'Ein elegantes digitales Refugium für moderne Frauen',
    heroTitles: {
      lounge: 'Die Lounge — Gemeinschaft, Inspiration & Alltagsrituale',
      muslim: 'Muslima-Refugium — Glaube, Ruhe & Schwesternschaft',
      boutique: 'Frauen-Boutique — Handgemachtes & Digitale Produkte',
      charity: 'Solidarität & Hilfe — Spenden, Medikamente & Krankenbetten',
      fitness: 'Fitness- & Motivationsclub — Workouts, Maße & Gewichtstabelle',
      ai: 'Anoura KI — Deine persönliche Lifestyle- & Küchen-Assistentin',
      planner: 'Mein Luxus-Planer — Küchen, Diät-Plan & Ich-Zeit',
      vault: 'Kostenlose Vorlagen — Edle PDF-Editionen',
      revenue: 'Creator-Einnahmen & Monetarisierung — Ziel 300$/Tag'
    },
    stats: {
      discussions: 'Beiträge',
      cuisine: 'Küche',
      vault: 'PDF-Vorlagen'
    },
    ui: {
      comments: 'Kommentare',
      addCommentPlaceholder: 'Einen herzlichen Kommentar schreiben...',
      postBtn: 'Senden',
      adLabel: 'Gesponserter Partner • Werbefläche (728x90)',
      adText: 'Entdecke ausgewählte Wellness-, Mode- und Küchen-Highlights',
      chooseCuisine: 'Wähle deine Küche nach Herkunft / Nationalität:',
      autoFillMeals: 'Wochenplan & Einkaufsliste automatisch füllen',
      groceryList: 'Smarte Einkaufsliste',
      addIngredient: 'Zutat hinzufügen...',
      printMenu: 'Menü drucken',
      breakfast: 'Frühstück',
      lunch: 'Mittagessen',
      dinner: 'Abendessen',
      choosePersonality: 'Wähle deine Persönlichkeit & deinen Ich-Zeit-Fokus:',
      dailyMeTimeGoal: 'Dein heutiges 60-Minuten Ich-Zeit-Ritual',
      meTimeDone: 'Ich-Zeit abgeschlossen! Wunderbar gemacht.',
      markMeTimeDone: 'Heutige Ich-Zeit abschließen',
      dailyPrayers: 'Täglicher Gebets-Tracker (Salah)',
      morningAdhkar: 'Morgen- & Abend-Adhkar',
      quranPages: 'Tägliche Koran-Lesung (Seiten)',
      muslimCircleTitle: 'Schwestern-Kreis & Reflexionen',
      downloadFree: 'Gratis-PDF herunterladen',
      preparingPdf: 'Deine Anoura-Edition wird vorbereitet...',
      downloadReady: 'Deine druckfertige Vorlage ist bereit!',
      boutiqueSubtitle: 'Unterstütze Unternehmerinnen — Handwerk, Gebäck, Naturkosmetik & digitale Vorlagen',
      addProductBtn: '+ Produkt einstellen',
      contactSeller: 'Verkäuferin kontaktieren',
      charitySubtitle: 'Solidaritätsbereich für Sachspenden, dringende Medikamente oder Pflegebetten',
      addAidBtn: '+ Spende / Bedarf melden',
      offerDonation: 'Kostenlose Spende',
      urgentNeed: 'Dringender Bedarf / Medizin',
      helpNow: 'Hilfe anbieten',
      allItems: 'Alle Einträge',
      featuredSponsor: '★ Gesponsertes Highlight',
      promoteProductBtn: '★ Oben anpinnen (10$)',
      fitnessTitle: 'Frauen-Fitness & Motivations-Zirkel',
      workoutPlan: 'Täglicher Trainingsplan',
      measurementsTable: 'Gewichts- & Körpermaße-Tabelle',
      currentWeight: 'Gewicht (kg)',
      waistCm: 'Taille (cm)',
      hipsCm: 'Hüfte (cm)',
      chestCm: 'Brust / Arme (cm)',
      logProgressBtn: '+ Heutige Maße eintragen',
      motivationBoard: 'Motivation & Challenges unter Frauen',
      fitnessVideosTitle: 'Workout-Video-Studio (Trainingsart wählen)',
      watchMonetizedVideo: 'YouTube-Session öffnen (Monetarisierter Link)',
      recipeStudioTitle: 'Neues Rezept mit Foto & Kochvideo teilen',
      addRecipePhoto: 'Gericht-Foto hochladen',
      recordCookingVideo: 'Kochvideo aufnehmen / hochladen',
      shareRecipeBtn: 'Rezept & Video in der Lounge teilen',
      attachPhotoLabel: 'Foto anhängen (Gerät oder Link)'
    },
    plannerTabs: {
      meals: 'Wochenplan nach Küche & Diät',
      recipes: 'Foto-Rezepte & Kochvideo-Studio',
      metime: 'Persönlichkeit & Ich-Zeit',
      daily: 'Tagesablauf & Wasser'
    }
  }
};

// ============================================================================
// SEPARATED CUISINE MEAL PLANS (MULTILINGUAL: EN, AR, FR, DE)
// ============================================================================

const CUISINE_PLANS = {
  algerian: {
    label: { en: 'Algerian Kitchen 🇩🇿', ar: 'المطبخ الجزائري 🇩🇿', fr: 'Cuisine Algérienne 🇩🇿', de: 'Algerische Küche 🇩🇿' },
    days: {
      Monday: {
        breakfast: { en: 'Baghrir with Honey & Mint Tea', ar: 'بغرير بالعسل الحر وشاي بالنعناع', fr: 'Baghrir au miel & thé à la menthe', de: 'Baghrir mit Honig & Minztee' },
        lunch: { en: 'Algerian Couscous with 7 Vegetables', ar: 'كسكس جزائري بالخضر السبعة واللحم', fr: 'Couscous algérien aux 7 légumes', de: 'Algerischer Couscous mit 7 Gemüsesorten' },
        dinner: { en: 'Chorba Frik & Crispy Bourek', ar: 'شربة فريك جزائرية وبوراك مقرمش', fr: 'Chorba Frik & Bourek croustillant', de: 'Chorba Frik & knuspriges Bourek' }
      },
      Tuesday: {
        breakfast: { en: 'Msemen & Café au Lait', ar: 'مسمن مورق وقهوة بالحليب', fr: 'Msemen feuilleté & café au lait', de: 'Msemen & Milchkaffee' },
        lunch: { en: 'Tajine Zitoune (Chicken & Green Olives)', ar: 'طاجين الزيتون بالدجاج والجزر', fr: 'Tajine Zitoune au poulet et olives', de: 'Tajine Zitoune mit Hähnchen & Oliven' },
        dinner: { en: 'Spiced Lentil Soup (Ades) & Kesra', ar: 'حساء العدس بالكمون وكسرة رخسيس', fr: 'Soupe de lentilles & Kesra maison', de: 'Gewürzte Linsensuppe & Kesra-Brot' }
      },
      Wednesday: {
        breakfast: { en: 'Deglet Nour Dates, Almonds & Yogurt', ar: 'تمر دقلة نور ولوز وياغورت طبيعي', fr: 'Dattes Deglet Nour, amandes & yaourt', de: 'Deglet-Nour-Datteln, Mandeln & Joghurt' },
        lunch: { en: 'Rechta with White Cinnamon Chicken Sauce', ar: 'رشتة عاصمية بالمرق الأبيض والقرفة', fr: 'Rechta algéroise sauce blanche cannelle', de: 'Rechta mit weißer Zimt-Hähnchensauce' },
        dinner: { en: 'Chakchouka with Poached Eggs', ar: 'شكشوكة فلفل وطماطم بالبيض', fr: 'Chakchouka poivrons, tomates & œufs', de: 'Chakchouka mit pochierten Eiern' }
      },
      Thursday: {
        breakfast: { en: 'Mbesses & Fig Jam', ar: 'مبسس تقليدي ومربى التين', fr: 'Mbesses traditionnel & confiture de figues', de: 'Mbesses & Feigenmarmelade' },
        lunch: { en: 'Dolma Courgettes & Artichokes', ar: 'دولمة قرعة وقرنون باللحم المفروم', fr: 'Dolma courgettes & artichauts farcis', de: 'Gefüllte Zucchini & Artischocken (Dolma)' },
        dinner: { en: 'Warm Vegetable Velouté & Cheese', ar: 'حساء خضر كريمي مع الجبن', fr: 'Velouté de légumes & fromage', de: 'Cremige Gemüsesuppe & Käse' }
      },
      Friday: {
        breakfast: { en: 'Tamina with Honey & Cinnamon', ar: 'طمينة بالزبدة والعسل والقرفة', fr: 'Tamina au miel et à la cannelle', de: 'Tamina mit Honig & Zimt' },
        lunch: { en: 'Traditional Friday Royal Couscous', ar: 'كسكس الجمعة التقليدي باللفت والحمص', fr: 'Couscous royal du vendredi', de: 'Traditioneller Freitags-Couscous' },
        dinner: { en: 'Light Chickpea & Cumin Salad', ar: 'سلطة حمص بالكمون وزيت الزيتون', fr: 'Salade légère de pois chiches au cumin', de: 'Leichter Kichererbsen-Kreuzkümmel-Salat' }
      },
      Saturday: {
        breakfast: { en: 'Matlouh Bread with Olive Oil & Zaatar', ar: 'مطلوع ساخن بزيت الزيتون والزعتر', fr: 'Pain Matlouh, huile d’olive & zaatar', de: 'Matlouh-Brot mit Olivenöl & Zaatar' },
        lunch: { en: 'Grilled Sardines & Roasted Pepper Salad (Hmiss)', ar: 'سردين مشوي وحميس فلفل مشوي', fr: 'Sardines grillées & salade Hmiss', de: 'Gegrillte Sardinen & Hmiss-Paprikasalat' },
        dinner: { en: 'Zviti / Stuffed Peppers & Rice', ar: 'فلفل محشي بالأرز والتوابل', fr: 'Poivrons farcis au riz épicé', de: 'Gefüllte Paprika mit Reis' }
      },
      Sunday: {
        breakfast: { en: 'Herb Omelette & Fresh Orange Juice', ar: 'أومليت بالأعشاب وعصير برتقال طازج', fr: 'Omelette aux herbes & jus d’orange frais', de: 'Kräuter-Omelett & frischer Orangensaft' },
        lunch: { en: 'Chicken Mhammar with Roasted Potatoes', ar: 'دجاج محمر في الفرن مع بطاطا متبلة', fr: 'Poulet Mhammar & pommes de terre rôties', de: 'Geschmortes Hähnchen mit Röstkartoffeln' },
        dinner: { en: 'Seasonal Fruit Bowl & Mint Infusion', ar: 'سلطة فواكه موسمية وتيزانة نعناع', fr: 'Salade de fruits & infusion menthe', de: 'Obstsalat & Minztee' }
      }
    },
    groceries: [
      { en: 'Fine Semolina & Algerian Couscous', ar: 'سميد ناعم وكسكس جزائري', fr: 'Semoule fine & couscous algérien', de: 'Feiner Grieß & algerischer Couscous' },
      { en: 'Frik (Roasted Green Wheat)', ar: 'فريك أخضر محمص للشربة', fr: 'Frik (blé vert concassé)', de: 'Frik (gerösteter grüner Weizen)' },
      { en: 'Green Olives & Preserved Lemons', ar: 'زيتون أخضر وليمون مرقد', fr: 'Olives vertes & citrons confits', de: 'Grüne Oliven & eingelegte Zitronen' },
      { en: 'Fresh Cilantro, Celery & Mint', ar: 'قصبر طازج، كرافس ونعناع', fr: 'Coriandre fraîche, céleri & menthe', de: 'Frischer Koriander, Sellerie & Minze' },
      { en: 'Chickpeas & Brown Lentils', ar: 'حمص وعدس بني', fr: 'Pois chiches & lentilles', de: 'Kichererbsen & Linsen' },
      { en: 'Deglet Nour Dates & Extra Virgin Olive Oil', ar: 'تمر دقلة نور وزيت زيتون بكر', fr: 'Dattes Deglet Nour & huile d’olive', de: 'Deglet-Nour-Datteln & Olivenöl' }
    ]
  },
  maghrebi: {
    label: { en: 'Maghrebi Kitchen 🇲🇦🇹🇳', ar: 'المطبخ المغاربي 🇲🇦🇹🇳', fr: 'Cuisine Maghrébine 🇲🇦🇹🇳', de: 'Maghrebinische Küche 🇲🇦🇹🇳' },
    days: {
      Monday: {
        breakfast: { en: 'Harcha Pan-Bread with Amlou & Honey', ar: 'حرشة مغربية بالأملو والعسل', fr: 'Harcha marocaine, amlou & miel', de: 'Harcha-Pfannenbrot mit Amlou & Honig' },
        lunch: { en: 'Moroccan Chicken Tagine with Preserved Lemon', ar: 'طاجين دجاج مغربي بالليمون المصير والزيتون', fr: 'Tajine de poulet au citron confit', de: 'Marokkanische Hähnchen-Tajine mit Salzzitrone' },
        dinner: { en: 'Tunisian Lablabi (Chickpea & Cumin Soup)', ar: 'لبلابي تونسي دافئ بالكمون وزيت الزيتون', fr: 'Lablabi tunisien aux pois chiches', de: 'Tunesischer Lablabi-Kichererbseneintopf' }
      },
      Tuesday: {
        breakfast: { en: 'Bambalouni / Sfenj & Mint Tea', ar: 'سفنج مقرمش وشاي أخضر بالنعناع', fr: 'Sfenj croustillant & thé à la menthe', de: 'Sfenj-Gebäck & Minztee' },
        lunch: { en: 'Tunisian Fish Couscous & Roasted Peppers', ar: 'كسكس تونسي بالسمك والخضر', fr: 'Couscous tunisien au poisson', de: 'Tunesischer Fisch-Couscous' },
        dinner: { en: 'Zaalouk (Smoky Eggplant Salad) & Bread', ar: 'زعلوك باذنجان مشوي وخبز الشعير', fr: 'Zaalouk d’aubergines grillées', de: 'Zaalouk (gerösteter Auberginensalat)' }
      },
      Wednesday: {
        breakfast: { en: 'Rghaif with Laughing Cow Cheese & Tea', ar: 'رغايف بالجبن وشاي بالأعشاب', fr: 'Rghaif au fromage & thé', de: 'Rghaif mit Käse & Kräutertee' },
        lunch: { en: 'Beef & Prune Tagine with Toasted Almonds', ar: 'طاجين اللحم بالبرقوق واللوز المحمص', fr: 'Tajine de bœuf aux pruneaux & amandes', de: 'Rindfleisch-Tajine mit Pflaumen & Mandeln' },
        dinner: { en: 'Moroccan Harira Soup & Dates', ar: 'حريرة مغربية أصيلة مع التمر', fr: 'Harira marocaine & dattes', de: 'Marokkanische Harira-Suppe & Datteln' }
      },
      Thursday: {
        breakfast: { en: 'Ojja with Eggs & Olive Oil', ar: 'عجة تونسية بالبيض وزيت الزيتون', fr: 'Ojja tunisienne aux œufs', de: 'Tunesische Ojja mit Eiern' },
        lunch: { en: 'Chicken Pastilla Mini-Pies with Cinnamon', ar: 'بسطيلة دجاج مقرمشة باللوز والقرفة', fr: 'Mini-pastillas au poulet et amandes', de: 'Hähnchen-Pastilla mit Mandeln & Zimt' },
        dinner: { en: 'Taktouka Pepper & Tomato Salad', ar: 'تكتوكة فلفل وطماطم مشوية', fr: 'Salade Taktouka poivrons & tomates', de: 'Taktouka-Paprika-Tomaten-Salat' }
      },
      Friday: {
        breakfast: { en: 'Sellou / Zmita & Almond Milk', ar: 'سلو / زميتة مغذية وحليب باللوز', fr: 'Sellou aux amandes & lait', de: 'Sellou-Mandelmischung & Milch' },
        lunch: { en: 'Seven-Vegetable Friday Couscous & Tfaya', ar: 'كسكس التفاية بالبصل المكرمل والزبيب', fr: 'Couscous Tfaya aux oignons caramélisés', de: 'Freitags-Couscous Tfaya mit Rosinen' },
        dinner: { en: 'Mint Tea & Light Fruit Platter', ar: 'شاي مغربي منعنع وفواكه طازجة', fr: 'Thé à la menthe & fruits frais', de: 'Minztee & frischer Obstteller' }
      },
      Saturday: {
        breakfast: { en: 'Barley Bread, Olives & Argan Oil', ar: 'خبز الشعير وزيت الأرغان والزيتون', fr: 'Pain d’orge, olives & huile d’argan', de: 'Gerstenbrot, Oliven & Arganöl' },
        lunch: { en: 'Tunisian Brik with Egg & Tuna + Salad', ar: 'بريك تونسي بالبيض والتونة وسلطة مشوية', fr: 'Brik tunisien à l’œuf & salade méchouia', de: 'Tunesisches Brik mit Ei & Thunfisch' },
        dinner: { en: 'Bissara (Velvety Fava Bean Soup)', ar: 'بيصارة الفول بزيت الزيتون والكمون', fr: 'Bissara de fèves à l’huile d’olive', de: 'Bissara-Saubohnensuppe mit Olivenöl' }
      },
      Sunday: {
        breakfast: { en: 'Briouats with Honey & Orange Blossom Tea', ar: 'بريوات باللوز والعسل وشاي الزهر', fr: 'Briouats au miel & thé fleur d’oranger', de: 'Honig-Briouats & Orangenblütentee' },
        lunch: { en: 'Seffa Medfouna (Sweet & Savory Vermicelli)', ar: 'سفة مدفونة بالدجاج واللوز والقرفة', fr: 'Seffa Medfouna au poulet et amandes', de: 'Seffa Medfouna mit Hähnchen & Mandeln' },
        dinner: { en: 'Chamomile Infusion & Yogurt', ar: 'بابونج دافئ وياغورت طبيعي', fr: 'Infusion camomille & yaourt', de: 'Kamillentee & Naturjoghurt' }
      }
    },
    groceries: [
      { en: 'Prunes, Raisins & Blanched Almonds', ar: 'برقوق مجفف، زبيب ولوز مقشر', fr: 'Pruneaux, raisins secs & amandes', de: 'Trockenpflaumen, Rosinen & Mandeln' },
      { en: 'Saffron Threads, Ginger & Ras El Hanout', ar: 'زعفران حر، زنجبيل ورأس الحانوت', fr: 'Safran, gingembre & Ras el Hanout', de: 'Safran, Ingwer & Ras el Hanout' },
      { en: 'Brick Pastry Sheets (Warka)', ar: 'أوراق البسطيلة / الديول', fr: 'Feuilles de brick (Warka)', de: 'Brick-Teigblätter (Warka)' },
      { en: 'Dried Fava Beans & Chickpeas', ar: 'فول مجفف وحمص', fr: 'Fèves sèches & pois chiches', de: 'Getrocknete Saubohnen & Kichererbsen' },
      { en: 'Argan Oil & Extra Virgin Olive Oil', ar: 'زيت أرغان وزيت زيتون بكر', fr: 'Huile d’argan & huile d’olive', de: 'Arganöl & natives Olivenöl' }
    ]
  },
  saudi: {
    label: { en: 'Saudi & Gulf Kitchen 🇸🇦', ar: 'المطبخ السعودي والخليجي 🇸🇦', fr: 'Cuisine Saoudienne & Golfe 🇸🇦', de: 'Saudische & Golf-Küche 🇸🇦' },
    days: {
      Monday: {
        breakfast: { en: 'Masoub with Banana, Honey & Cream', ar: 'معصوب بالموز والعسل والقشطة', fr: 'Masoub banane, miel & crème', de: 'Masoub mit Banane, Honig & Sahne' },
        lunch: { en: 'Traditional Saudi Chicken Kabsa & Daqoos', ar: 'كبسة دجاج سعودية أصيلة مع سلطة الدقوس', fr: 'Kabsa saoudienne au poulet & sauce Daqoos', de: 'Traditionelle saudische Hähnchen-Kabsa' },
        dinner: { en: 'Jareesh (Crushed Wheat with Yogurt & Ghee)', ar: 'جريش باللبن والسمن البري', fr: 'Jareesh au yaourt et beurre clarifié', de: 'Jareesh (Weizenschrot mit Joghurt)' }
      },
      Tuesday: {
        breakfast: { en: 'Shakshuka Hijazi & Tamees Bread', ar: 'شكشوكة حجازية مع خبز التميس الساخن', fr: 'Shakshuka Hijazi & pain Tamees', de: 'Hijazi-Shakshuka & Tamees-Brot' },
        lunch: { en: 'Lamb Mandi with Smoked Saffron Rice', ar: 'مندي لحم بالأرز المدخن والزعفران', fr: 'Mandi d’agneau au riz safrané', de: 'Lamm-Mandi mit Safranreis' },
        dinner: { en: 'Qursan with Vegetables & Broth', ar: 'قرصان بالخضار والمرق الدافئ', fr: 'Qursan aux légumes et bouillon', de: 'Qursan mit Gemüse & Brühe' }
      },
      Wednesday: {
        breakfast: { en: 'Khalas Dates, Tahini & Saudi Qahwa', ar: 'تمر خلاص بالطحينة وقهوة سعودية بالهيل', fr: 'Dattes Khalas, tahini & café saoudien', de: 'Khalas-Datteln, Tahini & saudischer Kaffee' },
        lunch: { en: 'Saleeg (Creamy White Rice with Roasted Chicken)', ar: 'سليق طائفي كريمي مع دجاج محمر', fr: 'Saleeg crémeux au poulet rôti', de: 'Saleeg (cremiger Reis mit Brathähnchen)' },
        dinner: { en: 'Mutabbaq Stuffed with Greens & Cheese', ar: 'مطبق مالح بالخضار والجبن', fr: 'Mutabbaq farci aux herbes et fromage', de: 'Gefülltes Mutabbaq mit Kräutern & Käse' }
      },
      Thursday: {
        breakfast: { en: 'Areeka with Dates, Honey & Nigella Seeds', ar: 'عريكة بالتمر والعسل وحبة البركة', fr: 'Areeka aux dattes, miel & nigelle', de: 'Areeka mit Datteln, Honig & Schwarzkümmel' },
        lunch: { en: 'Sayadieh Fish with Spiced Brown Rice', ar: 'صيادية سمك بالأرز المكرمل والصنوبر', fr: 'Sayadieh de poisson au riz épicé', de: 'Sayadieh-Fisch mit gewürztem Reis' },
        dinner: { en: 'Harees with Cinnamon & Ghee', ar: 'هريس قمح بالسمن والقرفة', fr: 'Harees de blé à la cannelle', de: 'Weizen-Harees mit Zimt' }
      },
      Friday: {
        breakfast: { en: 'Foul Qilabah & Tamees Bread', ar: 'فول قلابة مبخر مع خبز تميس', fr: 'Foul Qilabah & pain Tamees', de: 'Foul Qilabah & Tamees-Brot' },
        lunch: { en: 'Haneeth Lamb with Herb Rice & Salad', ar: 'حنيذ لحم طري مع أرز بشاور وسلطة خضراء', fr: 'Agneau Haneeth & riz parfumé', de: 'Zartes Haneeth-Lamm mit Duftreis' },
        dinner: { en: 'Saudi Coffee, Luqaimat & Fresh Fruit', ar: 'قهوة سعودية، لقيمات بالدبس وفواكه', fr: 'Café saoudien, Luqaimat & fruits', de: 'Saudischer Kaffee, Luqaimat & Obst' }
      },
      Saturday: {
        breakfast: { en: 'Chebab Pancakes with Date Syrup & Cardamom', ar: 'مراصيع / شباب بدبس التمر والهيل', fr: 'Crêpes Chebab au sirop de dattes', de: 'Chebab-Pfannkuchen mit Dattelsirup' },
        lunch: { en: 'Madghout Chicken with Black Lime (Loomi)', ar: 'مضغوط دجاج باللومي الأسود والهيل', fr: 'Poulet Madghout au citron noir Loomi', de: 'Madghout-Hähnchen mit schwarzer Limette' },
        dinner: { en: 'Lentil & Pumpkin Soup', ar: 'شوربة عدس بالقرع والكمون', fr: 'Soupe de lentilles et potiron', de: 'Linsen-Kürbis-Suppe' }
      },
      Sunday: {
        breakfast: { en: 'Labneh, Honey & Whole Wheat Bread', ar: 'لبنة طازجة بالعسل وخبز البر', fr: 'Labneh, miel & pain complet', de: 'Labneh, Honig & Vollkornbrot' },
        lunch: { en: 'Bukhari Rice with Roasted Chicken & Carrots', ar: 'أرز بخاري بالجزر والزبيب والدجاج المشوي', fr: 'Riz Bukhari aux carottes et poulet', de: 'Bukhari-Reis mit Karotten & Brathähnchen' },
        dinner: { en: 'Light Fattoush & Mint Tea', ar: 'فتوش خفيف وشاي بالنعناع', fr: 'Fattoush léger & thé à la menthe', de: 'Leichter Fattoush & Minztee' }
      }
    },
    groceries: [
      { en: 'Long-Grain Basmati / Peshawari Rice', ar: 'أرز بسمتي طويل الحبة / بشاور', fr: 'Riz Basmati long grain', de: 'Langkorn-Basmatireis' },
      { en: 'Black Dried Limes (Loomi) & Green Cardamom', ar: 'لومي أسود مجفف وهيل أخضر', fr: 'Citrons noirs Loomi & cardamome', de: 'Schwarze Limetten (Loomi) & Kardamom' },
      { en: 'Crushed Wheat (Jareesh) & Whole Wheat Flour', ar: 'جريش قمح ودقيق البر', fr: 'Blé concassé (Jareesh) & farine complète', de: 'Weizenschrot (Jareesh) & Vollkornmehl' },
      { en: 'Khalas / Sukkari Dates & Tahini', ar: 'تمر خلاص أو سكري وطحينة سائلة', fr: 'Dattes Sukkari & crème de sésame', de: 'Sukkari-Datteln & Tahini' },
      { en: 'Saffron, Cloves & Cinnamon Sticks', ar: 'زعفران، قرنفل وأعواد قرفة', fr: 'Safran, clous de girofle & cannelle', de: 'Safran, Nelken & Zimtstangen' }
    ]
  },
  healthy: {
    label: { en: 'Healthy Clean Kitchen 🥗', ar: 'المطبخ الصحي المتوازن 🥗', fr: 'Cuisine Saine & Équilibrée 🥗', de: 'Gesunde Clean-Eating-Küche 🥗' },
    days: {
      Monday: {
        breakfast: { en: 'Chia Pudding with Almond Milk & Berries', ar: 'بودينغ بذور الشيا بحليب اللوز والتوت', fr: 'Pudding de chia, lait d’amande & baies', de: 'Chia-Pudding mit Mandelmilch & Beeren' },
        lunch: { en: 'Grilled Salmon Bowl with Quinoa & Avocado', ar: 'طبق سلمون مشوي مع الكينوا والأفوكادو', fr: 'Bol saumon grillé, quinoa & avocat', de: 'Gegrillter Lachs mit Quinoa & Avocado' },
        dinner: { en: 'Roasted Zucchini & Spinach Cream Soup', ar: 'حساء الكوسا والسبانخ الصحي بدون كريمة', fr: 'Velouté courgettes & épinards sans crème', de: 'Geröstete Zucchini-Spinat-Suppe' }
      },
      Tuesday: {
        breakfast: { en: 'Avocado & Poached Egg on Sourdough', ar: 'توست الساوردو بالأفوكادو والبيض المسلوق', fr: 'Toast au levain, avocat & œuf poché', de: 'Sauerteigbrot mit Avocado & pochiertem Ei' },
        lunch: { en: 'Mediterranean Herb Chicken & Chickpea Salad', ar: 'سلطة دجاج بالأعشاب والحمص وزيت الزيتون', fr: 'Salade méditerranéenne poulet & pois chiches', de: 'Mediterraner Kräuterhähnchen-Kichererbsen-Salat' },
        dinner: { en: 'Baked Sea Bass with Steamed Broccoli', ar: 'سمك قاروص مشوي بالفرن مع بروكلي على البخار', fr: 'Bar au four & brocoli vapeur', de: 'Gebackener Wolfsbarsch mit gedämpftem Brokkoli' }
      },
      Wednesday: {
        breakfast: { en: 'Oatmeal with Flaxseeds, Walnuts & Cinnamon', ar: 'شوفان مطبوخ ببذور الكتان والجوز والقرفة', fr: 'Porridge d’avoine, graines de lin & noix', de: 'Haferbrei mit Leinsamen, Walnüssen & Zimt' },
        lunch: { en: 'Stuffed Bell Peppers with Turkey & Brown Rice', ar: 'فلفل ملون محشي بالديك الرومي والأرز البني', fr: 'Poivrons farcis à la dinde et riz complet', de: 'Gefüllte Paprika mit Pute & Naturreis' },
        dinner: { en: 'Greek Cucumber, Feta & Olive Salad', ar: 'سلطة يونانية بالخيار وجبنة الفيتا والزيتون', fr: 'Salade grecque concombre, feta & olives', de: 'Griechischer Gurken-Feta-Oliven-Salat' }
      },
      Thursday: {
        breakfast: { en: 'Green Smoothie Bowl (Spinach, Banana, Spirulina)', ar: 'سموذي أخضر بالسبانخ والموز وبذور اليقطين', fr: 'Smoothie bowl vert épinards & banane', de: 'Grüner Smoothie-Bowl mit Spinat & Banane' },
        lunch: { en: 'Red Lentil & Turmeric Anti-Inflammatory Dal', ar: 'عدس أحمر بالكركم والزنجبيل المضاد للالتهاب', fr: 'Dahl de lentilles corail au curcuma', de: 'Rote-Linsen-Kurkuma-Dal' },
        dinner: { en: 'Grilled Halloumi & Roasted Beetroot Salad', ar: 'سلطة الشمندر المشوي وجبنة الحلوم', fr: 'Salade de betteraves rôties & halloumi', de: 'Gegrillter Halloumi & Rote-Bete-Salat' }
      },
      Friday: {
        breakfast: { en: 'Greek Yogurt Parfait with Raw Honey & Figs', ar: 'زبادي يوناني بالعسل الطبيعي والتين الطازج', fr: 'Yaourt grec, miel brut & figues fraîches', de: 'Griechischer Joghurt mit Honig & Feigen' },
        lunch: { en: 'Lemon-Herb Baked Chicken & Sweet Potato', ar: 'دجاج مشوي بالليمون والأعشاب مع بطاطا حلوة', fr: 'Poulet rôti au citron & patate douce', de: 'Zitronen-Kräuter-Hähnchen mit Süßkartoffel' },
        dinner: { en: 'Bone Broth / Vegetable Detox Soup', ar: 'مرق خضار دافئ غني بالمعادن', fr: 'Bouillon détox aux légumes frais', de: 'Mineralreiche Gemüse-Detox-Brühe' }
      },
      Saturday: {
        breakfast: { en: 'Buckwheat Pancakes with Fresh Blueberries', ar: 'بان كيك الحنطة السوداء بالتوت الأزرق', fr: 'Pancakes au sarrasin & myrtilles', de: 'Buchweizen-Pfannkuchen mit Blaubeeren' },
        lunch: { en: 'Tuna Nicoise Salad with Olives & Green Beans', ar: 'سلطة نيسواز بالتونة والفاصوليا الخضراء', fr: 'Salade niçoise au thon & haricots verts', de: 'Thunfisch-Nizza-Salat mit grünen Bohnen' },
        dinner: { en: 'Cauliflower Rice Stir-Fry with Ginger', ar: 'أرز القرنبيط الصحي بالزنجبيل والخضار', fr: 'Riz de chou-fleur sauté au gingembre', de: 'Blumenkohlreis-Pfanne mit Ingwer' }
      },
      Sunday: {
        breakfast: { en: 'Spinach & Mushroom Egg White Omelette', ar: 'أومليت بياض البيض بالسبانخ والفطر', fr: 'Omelette aux blancs d’œufs, épinards & champignons', de: 'Eiweiß-Omelett mit Spinat & Pilzen' },
        lunch: { en: 'Grilled Shrimp Skewers with Quinoa Tabouleh', ar: 'أسياخ جمبري مشوية مع تبولة الكينوا', fr: 'Brochettes de crevettes & taboulé de quinoa', de: 'Gegrillte Garnelenspieße mit Quinoa-Taboulé' },
        dinner: { en: 'Matcha / Chamomile Tea & Dark Chocolate (85%)', ar: 'شاي البابونج مع مربع شوكولاتة داكنة 85%', fr: 'Tisane camomille & chocolat noir 85%', de: 'Kamillentee & 85% dunkle Schokolade' }
      }
    },
    groceries: [
      { en: 'Organic Quinoa & Rolled Oats', ar: 'كينوا عضوية وشوفان كامل', fr: 'Quinoa bio & flocons d’avoine', de: 'Bio-Quinoa & Haferflocken' },
      { en: 'Wild Salmon Fillets & Chicken Breast', ar: 'شرائح سلمون وصدر دجاج طازج', fr: 'Filets de saumon & blanc de poulet', de: 'Wildlachsfilets & Hähnchenbrust' },
      { en: 'Avocados, Baby Spinach & Broccoli', ar: 'أفوكادو، سبانخ طازجة وبروكلي', fr: 'Avocats, jeunes pousses d’épinards & brocoli', de: 'Avocados, Babyspinat & Brokkoli' },
      { en: 'Chia Seeds, Flaxseeds & Raw Walnuts', ar: 'بذور الشيا، بذور الكتان وجوز نيء', fr: 'Graines de chia, lin & noix', de: 'Chiasamen, Leinsamen & Walnüsse' },
      { en: 'Sweet Potatoes & Fresh Berries', ar: 'بطاطا حلوة وتوت طازج', fr: 'Patates douces & fruits rouges', de: 'Süßkartoffeln & frische Beeren' }
    ]
  },
  diet: {
    label: { en: 'Weight-Loss & Diet Plan 🔥', ar: 'ركن الرجيم وإنقاص الوزن 🔥', fr: 'Programme Minceur & Régime 🔥', de: 'Abnehm- & Diät-Küche 🔥' },
    days: {
      Monday: {
        breakfast: { en: '2 Boiled Eggs + Cucumber & Green Tea (220 kcal)', ar: 'بيضتان مسلوقتان + خيار + شاي أخضر (220 سعرة)', fr: '2 œufs durs + concombre + thé vert (220 kcal)', de: '2 gekochte Eier + Gurke + Grüntee (220 kcal)' },
        lunch: { en: '150g Grilled Chicken Breast + Large Green Salad (380 kcal)', ar: '150غ صدر دجاج مشوي + سلطة خضراء كبيرة (380 سعرة)', fr: '150g blanc de poulet grillé + grande salade (380 kcal)', de: '150g gegrillte Hähnchenbrust + großer Salat (380 kcal)' },
        dinner: { en: 'Low-Fat Greek Yogurt + Cinnamon & Chia (180 kcal)', ar: 'علبة زبادي يوناني قليل الدسم + قرفة وبذور شيا (180 سعرة)', fr: 'Yaourt grec 0% + cannelle & chia (180 kcal)', de: 'Magerer griechischer Joghurt + Zimt & Chia (180 kcal)' }
      },
      Tuesday: {
        breakfast: { en: '30g Oats in Water + 5 Almonds + Black Coffee (230 kcal)', ar: '30غ شوفان مطبوخ بالماء + 5 حبات لوز + قهوة سادة (230 سعرة)', fr: '30g flocons d’avoine + 5 amandes + café noir (230 kcal)', de: '30g Haferflocken + 5 Mandeln + schwarzer Kaffee (230 kcal)' },
        lunch: { en: '160g Baked White Fish + Steamed Zucchini (340 kcal)', ar: '160غ سمك أبيض مشوي + كوسا على البخار (340 سعرة)', fr: '160g poisson blanc au four + courgettes vapeur (340 kcal)', de: '160g gebackener weißer Fisch + gedämpfte Zucchini (340 kcal)' },
        dinner: { en: 'Clear Vegetable & Celery Fat-Burning Soup (150 kcal)', ar: 'شوربة الكرفس والخضار الحارقة للدهون (150 سعرة)', fr: 'Soupe brûle-graisse céleri & légumes (150 kcal)', de: 'Fettverbrennende Sellerie-Gemüsesuppe (150 kcal)' }
      },
      Wednesday: {
        breakfast: { en: 'Cottage Cheese (100g) + Cherry Tomatoes + Mint Tea (200 kcal)', ar: '100غ جبن قريش + طماطم كرزية + شاي بالنعناع (200 سعرة)', fr: '100g fromage blanc + tomates cerises (200 kcal)', de: '100g Hüttenkäse + Kirschtomaten + Minztee (200 kcal)' },
        lunch: { en: 'Tuna in Water Salad with Lemon & Apple Cider Vinegar (350 kcal)', ar: 'سلطة تونة مصفاة من الزيت بالليمون وخل التفاح (350 سعرة)', fr: 'Salade de thon au naturel, citron & vinaigre (350 kcal)', de: 'Thunfischsalat (im eigenen Saft) mit Zitrone (350 kcal)' },
        dinner: { en: '2 Egg-White Omelette with Spinach (160 kcal)', ar: 'أومليت بياض بيضتين بالسبانخ بدون زيت (160 سعرة)', fr: 'Omelette 2 blancs d’œufs aux épinards (160 kcal)', de: '2er Eiweiß-Omelett mit Spinat (160 kcal)' }
      },
      Thursday: {
        breakfast: { en: 'Green Apple + 1 Boiled Egg + Cinnamon Coffee (210 kcal)', ar: 'تفاحة خضراء + بيضة مسلوقة + قهوة بالقرفة (210 سعرة)', fr: 'Pomme verte + 1 œuf dur + café cannelle (210 kcal)', de: 'Grüner Apfel + 1 gekochtes Ei + Zimtkaffee (210 kcal)' },
        lunch: { en: 'Grilled Turkey Escalope + Roasted Cauliflower (370 kcal)', ar: 'شريحة ديك رومي مشوية + قرنبيط مشوي بالفرن (370 سعرة)', fr: 'Escalope de dinde grillée + chou-fleur rôti (370 kcal)', de: 'Gegrilltes Putenschnitzel + gerösteter Blumenkohl (370 kcal)' },
        dinner: { en: 'Cucumber & Mint Detox Yogurt Bowl (150 kcal)', ar: 'خيار بالزبادي والنعناع المجفف (150 سعرة)', fr: 'Concombre au yaourt et menthe (150 kcal)', de: 'Gurken-Minz-Joghurt-Schale (150 kcal)' }
      },
      Friday: {
        breakfast: { en: 'Chia Water + 1 Slice Brown Toast + Labneh (240 kcal)', ar: 'ماء بذور الشيا + شريحة توست أسمر + لبنة لايت (240 سعرة)', fr: 'Eau de chia + 1 toast complet + labneh (240 kcal)', de: 'Chiasamen-Wasser + 1 Vollkorntoast + Labneh (240 kcal)' },
        lunch: { en: '4 Tbsp Couscous + Steamed Vegetables + Lean Chicken (420 kcal)', ar: '4 ملاعق كسكس + خضار مسلوقة + صدر دجاج منزوع الجلد (420 سعرة)', fr: '4 c.à.s de couscous + légumes + poulet maigre (420 kcal)', de: '4 EL Couscous + Gedünstetes Gemüse + Hähnchenbrust (420 kcal)' },
        dinner: { en: '1 Grapefruit + Herbal Slimming Infusion (120 kcal)', ar: 'حبة جريب فروت + شاي أعشاب دافئ (120 سعرة)', fr: '1 pamplemousse + infusion minceur (120 kcal)', de: '1 Grapefruit + Kräutertee (120 kcal)' }
      },
      Saturday: {
        breakfast: { en: '2 Scrambled Egg Whites + Bell Peppers (190 kcal)', ar: 'بياض بيضتين مخفوق مع فلفل أخضر (190 سعرة)', fr: '2 blancs d’œufs brouillés aux poivrons (190 kcal)', de: '2 Rühreiweiß mit Paprika (190 kcal)' },
        lunch: { en: 'Grilled Shrimp & Arugula Salad with Lemon (340 kcal)', ar: 'سلطة جرجير بالجمبري المشوي وعصير الليمون (340 سعرة)', fr: 'Salade roquette & crevettes grillées au citron (340 kcal)', de: 'Rucola-Salat mit gegrillten Garnelen & Zitrone (340 kcal)' },
        dinner: { en: 'Zucchini & Ginger Light Soup (140 kcal)', ar: 'شوربة كوسا بالزنجبيل لتسريع الحرق (140 سعرة)', fr: 'Soupe légère courgette & gingembre (140 kcal)', de: 'Leichte Zucchini-Ingwer-Suppe (140 kcal)' }
      },
      Sunday: {
        breakfast: { en: 'Greek Yogurt + 1 Tbsp Ground Flaxseed (200 kcal)', ar: 'زبادي يوناني لايت + ملعقة بذور كتان مطحونة (200 سعرة)', fr: 'Yaourt grec + 1 c.à.s graines de lin (200 kcal)', de: 'Griechischer Joghurt + 1 EL geschrotete Leinsamen (200 kcal)' },
        lunch: { en: 'Lean Beef Steak (130g) + Grilled Asparagus (390 kcal)', ar: 'شريحة لحم بقري مشوية بدون دهون (130غ) + خضار مشوية (390 سعرة)', fr: 'Steak de bœuf maigre (130g) + légumes grillés (390 kcal)', de: 'Mageres Rindersteak (130g) + gegrillter Spargel (390 kcal)' },
        dinner: { en: 'Green Tea + 2 Celery Stalks & Hummus (150 kcal)', ar: 'شاي أخضر + عيدان كرفس مع ملعقتين حمص (150 سعرة)', fr: 'Thé vert + céleri & 2 c.à.s houmous (150 kcal)', de: 'Grüntee + Selleriestangen & Hummus (150 kcal)' }
      }
    },
    groceries: [
      { en: 'Skinless Chicken & Turkey Breast', ar: 'صدور دجاج وديك رومي منزوعة الجلد', fr: 'Blancs de poulet et dinde sans peau', de: 'Hähnchen- und Putenbrust ohne Haut' },
      { en: 'Eggs, Low-Fat Greek Yogurt & Cottage Cheese', ar: 'بيض، زبادي يوناني لايت وجبن قريش', fr: 'Œufs, yaourt grec 0% & fromage blanc', de: 'Eier, fettarmer griechischer Joghurt & Hüttenkäse' },
      { en: 'Canned Tuna in Water & White Fish', ar: 'تونة بالماء (بدون زيت) وسمك أبيض', fr: 'Thon au naturel & poisson blanc', de: 'Thunfisch im eigenen Saft & weißer Fisch' },
      { en: 'Cucumbers, Celery, Zucchini & Leafy Greens', ar: 'خيار، كرفس، كوسا وخضار ورقية', fr: 'Concombres, céleri, courgettes & salade', de: 'Gurken, Sellerie, Zucchini & Blattsalat' },
      { en: 'Green Tea, Apple Cider Vinegar & Lemon', ar: 'شاي أخضر، خل التفاح العضوي وليمون', fr: 'Thé vert, vinaigre de cidre & citron', de: 'Grüntee, Apfelessig & Zitrone' }
    ]
  },
  french: {
    label: { en: 'French Bistro 🇫🇷', ar: 'المطبخ الفرنسي الراقي 🇫🇷', fr: 'Cuisine Française 🇫🇷', de: 'Französische Küche 🇫🇷' },
    days: {
      Monday: {
        breakfast: { en: 'Tartine Beurre & Confiture + Café', ar: 'تارتين بالزبدة والمربى مع قهوة فرنسية', fr: 'Tartine beurre & confiture + café', de: 'Butter-Marmeladen-Tartine & Kaffee' },
        lunch: { en: 'Salade Niçoise with Seared Tuna', ar: 'سلطة نيسواز الفرنسية بالتونة المشوية', fr: 'Salade Niçoise au thon mi-cuit', de: 'Salade Niçoise mit angebratenem Thunfisch' },
        dinner: { en: 'French Onion Soup Gratinée', ar: 'شوربة البصل الفرنسية بالجبن المحمص', fr: 'Soupe à l’oignon gratinée', de: 'Französische Zwiebelsuppe gratinée' }
      },
      Tuesday: {
        breakfast: { en: 'Croissant & Fresh Berries', ar: 'كرواسون فرنسي طازج مع التوت', fr: 'Croissant pur beurre & fruits rouges', de: 'Buttercroissant & frische Beeren' },
        lunch: { en: 'Roast Chicken with Herbes de Provence', ar: 'دجاج مشوي بأعشاب البروفانس الفرنسية', fr: 'Poulet rôti aux herbes de Provence', de: 'Brathähnchen mit Kräutern der Provence' },
        dinner: { en: 'Ratatouille & Crusty Baguette', ar: 'راتاتوي الخضار الفرنسي مع خبز الباغيت', fr: 'Ratatouille provençale & baguette', de: 'Ratatouille & knuspriges Baguette' }
      },
      Wednesday: {
        breakfast: { en: 'Yogurt & Lavender Honey', ar: 'زبادي طبيعي بعسل اللافندر', fr: 'Yaourt fermier & miel de lavande', de: 'Joghurt mit Lavendelhonig' },
        lunch: { en: 'Quiche Lorraine & Green Salad', ar: 'كيش لورين الفرنسي مع سلطة خضراء', fr: 'Quiche Lorraine & salade verte', de: 'Quiche Lorraine & grüner Salat' },
        dinner: { en: 'Velouté de Potiron (Pumpkin Soup)', ar: 'حساء اليقطين الفرنسي الكريمي', fr: 'Velouté de potiron à la muscade', de: 'Cremige Kürbissuppe (Velouté)' }
      },
      Thursday: {
        breakfast: { en: 'Soft Scrambled Eggs & Chives', ar: 'بيض مخفوق ناعم بالثوم المعمر', fr: 'Œufs brouillés à la ciboulette', de: 'Rührei mit Schnittlauch' },
        lunch: { en: 'Salmon Fillet & Haricots Verts', ar: 'فيليه سلمون مع فاصوليا خضراء رفيعة', fr: 'Pavé de saumon & haricots verts', de: 'Lachsfilet & feine grüne Bohnen' },
        dinner: { en: 'Buckwheat Crêpes (Galettes)', ar: 'كريب الحنطة السوداء المالح بالجبن', fr: 'Galettes de sarrasin au fromage', de: 'Herzhafte Buchweizen-Galettes' }
      },
      Friday: {
        breakfast: { en: 'Brioche Toast & Espresso', ar: 'توست البريوش الفرنسي وإسبريسو', fr: 'Brioche grillée & expresso', de: 'Brioche-Toast & Espresso' },
        lunch: { en: 'Beef Bourguignon with Carrots', ar: 'بيف بورغينيون مطهو ببطء مع الجزر', fr: 'Bœuf Bourguignon & carottes fondantes', de: 'Boeuf Bourguignon mit Karotten' },
        dinner: { en: 'Pear, Walnut & Goat Cheese Salad', ar: 'سلطة الإجاص والجوز وجبن الماعز', fr: 'Salade poire, noix & fromage de chèvre', de: 'Birnen-Walnuss-Ziegenkäse-Salat' }
      },
      Saturday: {
        breakfast: { en: 'Pain Perdu & Maple Syrup', ar: 'فرنش توست (بان بيردو) بالعسل', fr: 'Pain perdu doré & sirop d’érable', de: 'Pain Perdu & Ahornsirup' },
        lunch: { en: 'Baked Cod with Lemon & Parsley', ar: 'سمك القد بالليمون والبقدونس', fr: 'Cabillaud au citron et persil', de: 'Gebackener Kabeljau mit Zitrone & Petersilie' },
        dinner: { en: 'Leek & Potato Vichyssoise Soup', ar: 'شوربة الكراث والبطاطا الفرنسية', fr: 'Potage poireaux-pommes de terre', de: 'Lauch-Kartoffel-Suppe' }
      },
      Sunday: {
        breakfast: { en: 'Almond Croissant & Café Crème', ar: 'كرواسون باللوز وقهوة بالحليب', fr: 'Croissant aux amandes & café crème', de: 'Mandelcroissant & Milchkaffee' },
        lunch: { en: 'Blanquette de Veau with Rice', ar: 'بلانكيت اللحم بالصلصة البيضاء والأرز', fr: 'Blanquette de veau & riz pilaf', de: 'Blanquette de Veau mit Reis' },
        dinner: { en: 'Verbena Tisane & Dark Chocolate', ar: 'شاي اللويزة (فرفين) وشوكولاتة داكنة', fr: 'Tisane verveine & chocolat noir', de: 'Eisenkraut-Tee & dunkle Schokolade' }
      }
    },
    groceries: [
      { en: 'Herbes de Provence & Dijon Mustard', ar: 'أعشاب البروفانس وخردل ديجون', fr: 'Herbes de Provence & moutarde de Dijon', de: 'Kräuter der Provence & Dijon-Senf' },
      { en: 'Fresh Baguette & Cultured Butter', ar: 'خبز باغيت طازج وزبدة طبيعية', fr: 'Baguette fraîche & beurre doux', de: 'Frisches Baguette & Butter' },
      { en: 'Salmon Fillets & Haricots Verts', ar: 'فيليه سلمون وفاصوليا خضراء', fr: 'Pavés de saumon & haricots verts', de: 'Lachsfilets & grüne Bohnen' },
      { en: 'Goat Cheese & Gruyère', ar: 'جبن الماعز وجبن الغرويير', fr: 'Fromage de chèvre & Gruyère', de: 'Ziegenkäse & Gruyère' }
    ]
  },
  german: {
    label: { en: 'German Kitchen 🇩🇪', ar: 'المطبخ الألماني 🇩🇪', fr: 'Cuisine Allemande 🇩🇪', de: 'Deutsche Küche 🇩🇪' },
    days: {
      Monday: {
        breakfast: { en: 'Vollkornbrot with Quark & Radishes', ar: 'خبز الحبوب الكاملة مع الكوارك والفجل', fr: 'Pain complet, fromage blanc & radis', de: 'Vollkornbrot mit Quark & Radieschen' },
        lunch: { en: 'Roasted Chicken with Red Cabbage', ar: 'دجاج مشوي مع الملفوف الأحمر الألماني', fr: 'Poulet rôti & chou rouge braisé', de: 'Brathähnchen mit Apfelrotkohl' },
        dinner: { en: 'Creamy German Potato Soup', ar: 'شوربة البطاطا الألمانية بالكراث', fr: 'Soupe allemande aux pommes de terre', de: 'Cremige Kartoffelsuppe mit Lauch' }
      },
      Tuesday: {
        breakfast: { en: 'Bircher Müsli with Grated Apple', ar: 'بيرشر موسلي بالتفاح المبشور والمكسرات', fr: 'Bircher Müsli aux pommes râpées', de: 'Bircher Müsli mit geriebenem Apfel' },
        lunch: { en: 'Pan-Seared Trout & Parsley Potatoes', ar: 'سمك السلمون المرقط مع بطاطا بالبقدونس', fr: 'Truite poêlée & pommes persillées', de: 'Gebratene Forelle mit Petersilienkartoffeln' },
        dinner: { en: 'Abendbrot (Rye Bread, Cheese & Pickles)', ar: 'عشاء ألماني خفيف: خبز الجاودار والجبن', fr: 'Abendbrot : pain de seigle & fromage', de: 'Abendbrot: Roggenbrot, Käse & Gewürzgurken' }
      },
      Wednesday: {
        breakfast: { en: 'Soft-Boiled Egg & Bavarian Pretzel', ar: 'بيضة مسلوقة وبريتزل ألماني', fr: 'Œuf à la coque & bretzel', de: 'Weichgekochtes Ei & Laugenbrezel' },
        lunch: { en: 'Käsespätzle with Crispy Onions', ar: 'كيزي شبيتزلي بالجبن والبصل المقرمش', fr: 'Käsespätzle au fromage et oignons frits', de: 'Käsespätzle mit Röstzwiebeln' },
        dinner: { en: 'Warm Beetroot & Goat Cheese Salad', ar: 'سلطة الشمندر الدافئة وجبن الماعز', fr: 'Salade tiède betterave & chèvre', de: 'Warmer Rote-Bete-Ziegenkäse-Salat' }
      },
      Thursday: {
        breakfast: { en: 'Warm Oat Porridge with Cinnamon & Plums', ar: 'عصيدة الشوفان بالقرفة والبرقوق', fr: 'Porridge d’avoine cannelle & prunes', de: 'Haferporridge mit Zimt & Pflaumen' },
        lunch: { en: 'Beef Rouladen with Potato Dumplings', ar: 'رولاد اللحم الألماني مع كرات البطاطا', fr: 'Rouladen de bœuf & quenelles de pomme de terre', de: 'Rinderrouladen mit Kartoffelklößen' },
        dinner: { en: 'Lentil & Vegetable Eintopf', ar: 'يخنة العدس والخضار الألمانية', fr: 'Eintopf aux lentilles et légumes', de: 'Deftiger Linsen-Gemüse-Eintopf' }
      },
      Friday: {
        breakfast: { en: 'Sourdough Toast & Berry Jam', ar: 'توست الساوردو ومربى التوت', fr: 'Pain au levain & confiture de baies', de: 'Sauerteigbrot mit Beerenmarmelade' },
        lunch: { en: 'Salmon Fillet with Dill Mustard Sauce', ar: 'فيليه سلمون بصلصة الشبت والخردل', fr: 'Saumon sauce aneth & moutarde', de: 'Lachsfilet mit Dill-Senf-Sauce' },
        dinner: { en: 'Flammkuchen with Crème Fraîche', ar: 'فلامكوخن رقيق بالكريمة والبصل', fr: 'Flammkuchen à la crème fraîche', de: 'Flammkuchen mit Crème Fraîche & Zwiebeln' }
      },
      Saturday: {
        breakfast: { en: 'German Pancakes with Applesauce', ar: 'فطائر ألمانية مع صلصة التفاح', fr: 'Crêpes allemandes & compote de pommes', de: 'Pfannkuchen mit Apfelmus' },
        lunch: { en: 'Stuffed Bell Peppers (Gefüllte Paprika)', ar: 'فلفل محشي على الطريقة الألمانية', fr: 'Poivrons farcis à l’allemande', de: 'Gefüllte Paprika mit Reis & Kräutern' },
        dinner: { en: 'Cucumber Dill Salad & Rye Toast', ar: 'سلطة الخيار بالشبت مع خبز الجاودار', fr: 'Salade concombre-aneth & pain de seigle', de: 'Gurkensalat mit Dill & Roggenbrot' }
      },
      Sunday: {
        breakfast: { en: 'Sunday Brötchen Rolls & Honey', ar: 'لفائف الخبز الألمانية الطازجة والعسل', fr: 'Petits pains Brötchen & miel', de: 'Sonntagsbrötchen mit Honig & Butter' },
        lunch: { en: 'Herb-Crusted Roast Turkey & Asparagus', ar: 'ديك رومي مشوي بالأعشاب والهليون', fr: 'Dinde rôtie aux herbes & asperges', de: 'Kräuter-Putenbraten mit Spargel' },
        dinner: { en: 'Peppermint Tea & Warm Apple Strudel', ar: 'شاي النعناع وفطيرة التفاح الدافئة', fr: 'Thé menthe poivrée & strudel aux pommes', de: 'Pfefferminztee & warmer Apfelstrudel' }
      }
    },
    groceries: [
      { en: 'German Rye & Vollkorn Bread', ar: 'خبز الجاودار والحبوب الكاملة الألماني', fr: 'Pain de seigle & pain complet allemand', de: 'Roggen- & Vollkornbrot' },
      { en: 'Quark & Crème Fraîche', ar: 'جبن الكوارك وكريمة فريش', fr: 'Fromage blanc Quark & crème fraîche', de: 'Magerquark & Crème Fraîche' },
      { en: 'Potatoes, Red Cabbage & Fresh Dill', ar: 'بطاطا، ملفوف أحمر وشبت طازج', fr: 'Pommes de terre, chou rouge & aneth', de: 'Kartoffeln, Rotkohl & frischer Dill' },
      { en: 'Trout Fillets & Wholegrain Mustard', ar: 'فيليه سمك السلمون وخردل كامل', fr: 'Filets de truite & moutarde à l’ancienne', de: 'Forellenfilets & körniger Senf' }
    ]
  }
};

// ============================================================================
// FITNESS & MOTIVATION DATA
// ============================================================================

const WORKOUT_ROUTINES = [
  {
    id: 'w1',
    day: { en: 'Day 1 • Sculpt & Core', ar: 'اليوم 1 • نحت الخصر والبطن', fr: 'Jour 1 • Taille & Abdos', de: 'Tag 1 • Taille & Core' },
    duration: '25 mins',
    calories: '210 kcal',
    exercises: {
      en: '15 Squats • 30s Plank • 20 Glute Bridges • 15 Bird-Dogs (3 Rounds)',
      ar: '15 سكوات • 30 ثانية بلانك • 20 جسر الأرداف • 15 تمرين شد البطن (3 جولات)',
      fr: '15 Squats • 30s Gainage • 20 Ponts fessiers • 15 Abdos doux (3 tours)',
      de: '15 Kniebeugen • 30s Plank • 20 Glute Bridges • 15 Core-Übungen (3 Runden)'
    }
  },
  {
    id: 'w2',
    day: { en: 'Day 2 • Fat-Burn Walking & Cardio', ar: 'اليوم 2 • مشي سريع وحرق الدهون', fr: 'Jour 2 • Marche Active & Cardio', de: 'Tag 2 • Fatburn-Walking & Cardio' },
    duration: '35 mins',
    calories: '280 kcal',
    exercises: {
      en: 'Brisk Outdoor/Indoor Walk + 10 mins Low-Impact Jumping Jacks & Knee Lifts',
      ar: '30 دقيقة مشي سريع في البيت أو الخارج + 10 دقائق تمارين كارديو خفيفة بدون قفز',
      fr: '30 min de marche rapide + 10 min de cardio doux sans impact',
      de: '30 Min. zügiges Gehen + 10 Min. gelenkschonendes Cardio'
    }
  },
  {
    id: 'w3',
    day: { en: 'Day 3 • Upper Body & Posture Elegance', ar: 'اليوم 3 • شد الذراعين واستقامة الظهر', fr: 'Jour 3 • Haut du Corps & Posture', de: 'Tag 3 • Oberkörper & Haltung' },
    duration: '20 mins',
    calories: '170 kcal',
    exercises: {
      en: '12 Wall Push-ups • 15 Arm Circles • 15 Back Extensions • 10 Min Stretching',
      ar: '12 ضغط على الحائط • 15 دوائر الذراعين • 15 تمرين استقامة الظهر • 10 دقائق إطالة',
      fr: '12 Pompes murales • 15 Cercles de bras • 15 Extensions dos • 10 min étirements',
      de: '12 Wand-Liegestütze • 15 Armkreisen • 15 Rückenstrecker • 10 Min. Dehnen'
    }
  }
];

const FITNESS_VIDEO_CATEGORIES = {
  core: {
    label: { en: 'Abs & Waist Sculpt', ar: 'نحت الخصر والبطن', fr: 'Taille & Abdos', de: 'Taille & Bauch' },
    videos: [
      {
        id: 'yt-1',
        title: {
          en: '15 Min Hourglass Waist & Flat Belly Home Workout',
          ar: '15 دقيقة تمرين نحت الخصر وشد البطن في البيت بدون معدات',
          fr: '15 Min Taille Fine & Ventre Plat à la Maison',
          de: '15 Min. Sanduhr-Taille & Flacher Bauch Workout'
        },
        duration: '15:20',
        youtubeUrl: 'https://www.youtube.com/results?search_query=15+min+hourglass+waist+workout+women',
        thumbColor: 'from-[#5C1A2B] to-[#8C3A4E]'
      },
      {
        id: 'yt-2',
        title: {
          en: 'Standing Abs Workout — No Jumping, Apartment Friendly',
          ar: 'تمارين شد البطن وقوفاً — بدون قفز أو إزعاج',
          fr: 'Abdos Debout — Sans Saut, Idéal Appartement',
          de: 'Stehendes Bauch-Workout — Ohne Springen'
        },
        duration: '12:45',
        youtubeUrl: 'https://www.youtube.com/results?search_query=standing+abs+workout+for+women',
        thumbColor: 'from-[#3A0E19] to-[#5C1A2B]'
      }
    ]
  },
  cardio: {
    label: { en: 'Fat-Burn Cardio', ar: 'كارديو وحرق الدهون', fr: 'Cardio Brûle-Graisse', de: 'Fatburn-Cardio' },
    videos: [
      {
        id: 'yt-3',
        title: {
          en: '30 Min Indoor Walking Workout (3,500 Steps at Home)',
          ar: '30 دقيقة مشي سريع في المنزل (حرق 300 سعرة حرارية)',
          fr: '30 Min Marche Active à la Maison (3 500 Pas)',
          de: '30 Min. Indoor-Walking-Workout (3.500 Schritte)'
        },
        duration: '30:00',
        youtubeUrl: 'https://www.youtube.com/results?search_query=30+min+indoor+walking+workout+women',
        thumbColor: 'from-[#5C1A2B] to-[#A67C37]'
      }
    ]
  },
  yoga: {
    label: { en: 'Pilates & Stretch', ar: 'بيلاتس وإطالة واسترخاء', fr: 'Pilates & Étirements', de: 'Pilates & Dehnung' },
    videos: [
      {
        id: 'yt-4',
        title: {
          en: '20 Min Feminine Pilates & Back Posture Mobility',
          ar: '20 دقيقة بيلاتس لتقويم الظهر ومرونة الجسم',
          fr: '20 Min Pilates Féminin & Posture du Dos',
          de: '20 Min. Feminines Pilates & Rücken-Mobilität'
        },
        duration: '20:10',
        youtubeUrl: 'https://www.youtube.com/results?search_query=20+min+feminine+pilates+posture+stretch',
        thumbColor: 'from-[#461220] to-[#7A4955]'
      }
    ]
  }
};

const INITIAL_MEASUREMENTS = [
  { id: 'm1', date: '2026-10-15', weight: '72.5', waist: '80', hips: '104', chest: '94' },
  { id: 'm2', date: '2026-11-01', weight: '70.8', waist: '78', hips: '102', chest: '93' },
  { id: 'm3', date: '2026-11-15', weight: '69.4', waist: '76', hips: '100', chest: '92' }
];

const INITIAL_MOTIVATION_WALL = [
  {
    id: 'mot-1',
    author: 'Rania M.',
    badge: { en: '-4.2 kg in 5 Weeks!', ar: 'نقصت 4.2 كغ في 5 أسابيع!', fr: '-4,2 kg en 5 semaines !', de: '-4,2 kg in 5 Wochen!' },
    message: {
      en: 'Following the Anoura Diet Plan + 25 mins home workout every morning before breakfast changed my energy completely. Keep going sisters!',
      ar: 'الالتزام بجدول الرجيم في أنورا مع 25 دقيقة رياضة منزلية كل صباح قبل الفطور غيّر طاقتي ومقاساتي بالكامل. استمروا يا أخوات!',
      fr: 'Suivre le programme minceur Anoura + 25 min de sport chaque matin a transformé mon énergie. Courage les sœurs !',
      de: 'Der Anoura-Diätplan + 25 Min. Home-Workout jeden Morgen hat meine Energie komplett verändert. Weiter so, Schwestern!'
    },
    cheers: 42
  },
  {
    id: 'mot-2',
    author: 'Sonia D.',
    badge: { en: '10,000 Steps Streak', ar: 'تحدي 10,000 خطوة يومياً', fr: 'Défi 10 000 pas/jour', de: '10.000 Schritte-Serie' },
    message: {
      en: 'Who is joining me today for 30 minutes of brisk walking + 2 liters of water? Drop a heart below!',
      ar: 'من تشاركني اليوم تحدي 30 دقيقة مشي سريع + شرب 2 لتر ماء؟ لنشجع بعضنا!',
      fr: 'Qui me rejoint aujourd’hui pour 30 min de marche rapide + 2L d’eau ?',
      de: 'Wer macht heute mit bei 30 Min. zügigem Gehen + 2 Liter Wasser?'
    },
    cheers: 31
  }
];

// ============================================================================
// PERSONALITY & ME-TIME ARCHETYPES (CRAFT, LANGUAGE, CODING, RELAXATION)
// ============================================================================

const PERSONALITY_TRACKS = {
  crafter: {
    icon: '🎨',
    title: {
      en: 'The Creative Artisan (Crafts & Design)',
      ar: 'الحرفية المبدعة (تعلم حرفة وتصميم)',
      fr: 'L’Artisane Créative (Artisanat & Design)',
      de: 'Die Kreative Künstlerin (Handwerk & Design)'
    },
    desc: {
      en: '60 mins daily dedicated to embroidery, pottery, sewing, or calligraphy.',
      ar: 'ساعة يومية لتعلم حرفة يدوية كالتطريز، الخياطة، الخزف، أو الخط العربي.',
      fr: '60 min par jour dédiées à la broderie, la couture, la céramique ou la calligraphie.',
      de: '60 Min. täglich für Sticken, Nähen, Keramik oder Kalligrafie.'
    },
    tasks: {
      en: ['Watch 15-min technique tutorial', 'Practice stitches/sketches for 30 mins', 'Organize craft palette & tools'],
      ar: ['مشاهدة درس تقني قصير (15 دقيقة)', 'تطبيق عملي للغرز أو الرسم لمدة 30 دقيقة', 'توثيق إنجاز اليوم في دفتر الإبداع'],
      fr: ['Regarder un tutoriel de 15 min', 'Pratiquer pendant 30 min', 'Organiser son espace créatif'],
      de: ['15-Minuten-Tutorial ansehen', '30 Minuten praktisch üben', 'Kreativ-Journal aktualisieren']
    }
  },
  coder: {
    icon: '💻',
    title: {
      en: 'The Digital Builder (Coding & AI)',
      ar: 'المبرمجة الطموحة (تعلم البرمجة والذكاء الاصطناعي)',
      fr: 'La Bâtisseuse Digitale (Code & IA)',
      de: 'Die Digitale Pionierin (Programmieren & KI)'
    },
    desc: {
      en: '60 mins daily building web apps, Python scripts, or UI/UX prototypes.',
      ar: 'ساعة يومية لتعلم البرمجة، بناء المواقع، أو أتمتة الأعمال بالذكاء الاصطناعي.',
      fr: '60 min par jour pour coder des applications web, Python ou du design UI/UX.',
      de: '60 Min. täglich für Webentwicklung, Python oder UI/UX-Design.'
    },
    tasks: {
      en: ['Complete 1 interactive coding lesson (25 mins)', 'Build a small UI component or script (25 mins)', 'Write 3 key takeaways in dev notes'],
      ar: ['إتمام درس برمجي تفاعلي (25 دقيقة)', 'بناء صفحة أو دالة برمجية صغيرة (25 دقيقة)', 'تدوين 3 مفاهيم جديدة تعلمتِها اليوم'],
      fr: ['Terminer 1 leçon de code (25 min)', 'Créer un mini-composant (25 min)', 'Noter 3 concepts appris'],
      de: ['1 Coding-Lektion abschließen (25 Min.)', 'Kleine Komponente bauen (25 Min.)', '3 Erkenntnisse notieren']
    }
  },
  linguist: {
    icon: '🌍',
    title: {
      en: 'The Global Polyglot (New Languages)',
      ar: 'محبة اللغات (تعلم لغة جديدة بطلاقة)',
      fr: 'La Polyglotte (Nouvelles Langues)',
      de: 'Die Sprachliebhaberin (Neue Sprachen)'
    },
    desc: {
      en: '60 mins daily mastering German, English, French, or Arabic conversation.',
      ar: 'ساعة يومية لإتقان اللغة الألمانية، الإنجليزية، الفرنسية، أو العربية.',
      fr: '60 min par jour pour maîtriser l’allemand, l’anglais, l’arabe ou l’espagnol.',
      de: '60 Min. täglich für Arabisch, Französisch, Englisch oder Spanisch.'
    },
    tasks: {
      en: ['Learn 10 new vocabulary words in context', 'Listen to a 20-min podcast in target language', 'Speak or journal 5 sentences aloud'],
      ar: ['حفظ 10 كلمات جديدة داخل جمل مفيدة', 'الاستماع لبودكاست باللغة المستهدفة (20 دقيقة)', 'كتابة أو نطق 5 جمل بصوت عالٍ'],
      fr: ['Apprendre 10 nouveaux mots en contexte', 'Écouter un podcast de 20 min', 'Écrire ou prononcer 5 phrases'],
      de: ['10 neue Vokabeln im Kontext lernen', '20 Min. Podcast hören', '5 Sätze laut sprechen oder schreiben']
    }
  },
  serenity: {
    icon: '🕯️',
    title: {
      en: 'The Mindful Soul (Pure Rest & Reading)',
      ar: 'باحثة عن السكينة (وقت لنفسي فقط واسترخاء)',
      fr: 'L’Âme Sereine (Détente & Lecture)',
      de: 'Die Achtsame Seele (Ruhe & Lesen)'
    },
    desc: {
      en: '60 mins screen-free sanctuary: reading, skincare ritual, herbal tea & rest.',
      ar: 'ساعة بدون هاتف تماماً: قراءة كتاب، عناية بالبشرة، شاي أعشاب، وراحة تامة.',
      fr: '60 min sans écran : lecture, soin du visage, tisane et repos absolu.',
      de: '60 Min. bildschirmfreie Zeit: Lesen, Skincare-Ritual, Kräutertee & Ruhe.'
    },
    tasks: {
      en: ['Put phone on Do Not Disturb for 1 hour', 'Read 15 pages of an inspiring book', 'Evening skincare & warm herbal tea ritual'],
      ar: ['وضع الهاتف على الصامت لمدة ساعة كاملة', 'قراءة 15 صفحة من كتاب ملهم', 'طقس العناية المسائية مع كوب شاي دافئ'],
      fr: ['Mettre le téléphone en mode silencieux 1h', 'Lire 15 pages d’un livre inspirant', 'Rituel soin du soir & tisane'],
      de: ['Handy für 1 Stunde auf Nicht stören stellen', '15 Seiten in einem Buch lesen', 'Abendliches Skincare- & Tee-Ritual']
    }
  }
};

// ============================================================================
// INITIAL DATA FOR LOUNGE, BOUTIQUE, CHARITY & VAULT
// ============================================================================

const INITIAL_POSTS = [
  {
    id: 'post-1',
    author: 'Amira K.',
    badge: { en: 'Algiers • Culinary', ar: 'الجزائر • مطبخ', fr: 'Alger • Cuisine', de: 'Algier • Kulinarik' },
    time: { en: '2h ago', ar: 'منذ ساعتين', fr: 'Il y a 2h', de: 'Vor 2 Std.' },
    category: 'Recipes & Kitchen',
    title: {
      en: 'My 30-Minute Algerian Chorba Frik & Homemade Kesra Secret',
      ar: 'سري في تحضير شربة فريك جزائرية وكسرة منزلية في 30 دقيقة فقط',
      fr: 'Mon secret pour une Chorba Frik algérienne et Kesra maison en 30 min',
      de: 'Mein Geheimnis für algerische Chorba Frik & hausgemachte Kesra in 30 Min.'
    },
    content: {
      en: 'For busy working moms: I toast the Frik in bulk on Sunday and freeze portioned spice-herb bases (cilantro, celery, mint, grated tomato). On weeknights, dinner tastes like a slow-cooked Friday feast in under 30 minutes!',
      ar: 'للأمهات العاملات: أحمّص الفريك بكمية كبيرة يوم الأحد وأجمّد خلطات الأعشاب والتوابل (قصبر، كرافس، نعناع، طماطم مبشورة) مقسمة. في أيام الأسبوع، يصبح العشاء جاهزاً بمذاق الجمعة الأصيل في أقل من نصف ساعة!',
      fr: 'Pour les mamans actives : je torréfie le Frik le dimanche et je congèle des portions d’herbes et épices. Le soir en semaine, le dîner est prêt en moins de 30 minutes !',
      de: 'Für berufstätige Mütter: Ich röste Frik sonntags vor und friere Kräuter-Gewürz-Basen portionsweise ein. Abends steht das Essen in unter 30 Minuten auf dem Tisch!'
    },
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    upvotes: 164,
    userVote: 0,
    comments: [
      {
        id: 'c1',
        author: 'Sarah M.',
        text: {
          en: 'Freezing the herb-tomato base is genius! Doing this tonight.',
          ar: 'تجميد قاعدة الأعشاب والطماطم فكرة عبقرية! سأجربها الليلة.',
          fr: 'Congeler la base d’herbes est génial ! Je teste ce soir.',
          de: 'Die Kräuter-Tomaten-Basis einzufrieren ist genial!'
        }
      },
      {
        id: 'c2',
        author: 'Nadia B.',
        text: {
          en: 'Adding a tiny pinch of cinnamon at the end elevates the aroma so much.',
          ar: 'إضافة رشة خفيفة من القرفة في النهاية ترفع الرائحة والمذاق بشكل رائع.',
          fr: 'Une petite pincée de cannelle à la fin sublime l’arôme.',
          de: 'Eine Prise Zimt am Ende verfeinert das Aroma wunderbar.'
        }
      }
    ]
  },
  {
    id: 'post-2',
    author: 'Fatima Z.',
    badge: { en: 'Muslim Sanctuary', ar: 'حياة المسلمة', fr: 'Espace Musulmane', de: 'Muslima-Bereich' },
    time: { en: '4h ago', ar: 'منذ 4 ساعات', fr: 'Il y a 4h', de: 'Vor 4 Std.' },
    category: 'Muslim Sisterhood',
    title: {
      en: 'How waking up 20 minutes before Fajr transformed my barakah & peace',
      ar: 'كيف غيّر الاستيقاظ قبل الفجر بـ 20 دقيقة البركة والسكينة في يومي',
      fr: 'Comment me réveiller 20 min avant le Fajr a transformé ma baraka et ma paix',
      de: 'Wie 20 Minuten vor Fajr aufzustehen meinen Tag mit Barakah erfüllt hat'
    },
    content: {
      en: 'Sisters, carving out just 20 quiet minutes before Fajr for two rak’ahs of Tahajjud, morning Adhkar, and 2 pages of Quran before the house wakes up completely removed my daily overwhelm.',
      ar: 'أخواتي، تخصيص 20 دقيقة هادئة فقط قبل أذان الفجر لركعتي قيام الليل، أذكار الصباح، وصفحتين من القرآن قبل استيقاظ البيت أزال التوتر والضغط من يومي بالكامل.',
      fr: 'Mes sœurs, prendre juste 20 minutes calmes avant le Fajr pour deux rak’ahs, les invocations et 2 pages de Coran a apaisé toutes mes journées.',
      de: 'Schwestern, nur 20 ruhige Minuten vor Fajr für Tahajjud, Adhkar und 2 Seiten Koran haben meinen gesamten Alltag entschleunigt.'
    },
    upvotes: 248,
    userVote: 0,
    comments: [
      {
        id: 'c3',
        author: 'Khadija L.',
        text: {
          en: 'BarakAllahu feeki for this reminder. The morning barakah is unmatched.',
          ar: 'بارك الله فيكِ على هذه التذكرة الطيبة، بركة البكور لا تضاهى.',
          fr: 'BarakAllahu feeki pour ce rappel, la baraka du matin est incomparable.',
          de: 'BarakAllahu feeki für diese Erinnerung. Die Morgen-Barakah ist unbeschreiblich.'
        }
      }
    ]
  },
  {
    id: 'post-3',
    author: 'Elena V.',
    badge: { en: 'Berlin • Career & Glow-Up', ar: 'برلين • تطوير الذات', fr: 'Berlin • Carrière', de: 'Berlin • Karriere' },
    time: { en: '6h ago', ar: 'منذ 6 ساعات', fr: 'Il y a 6h', de: 'Vor 6 Std.' },
    category: 'Career & Glow-Up',
    title: {
      en: 'Using my 1-hour evening "Me-Time" to learn Python & build my first app',
      ar: 'استغلال ساعة "وقتي الخاص" مساءً لتعلم البرمجة وبناء أول تطبيق لي',
      fr: 'Utiliser mon heure "Temps pour Soi" le soir pour apprendre Python et créer mon app',
      de: 'Meine abendliche 1-Stunde "Ich-Zeit" genutzt, um Python zu lernen & meine erste App zu bauen'
    },
    content: {
      en: 'After putting the kids to sleep, I stopped scrolling social media and dedicated 60 minutes every evening to coding. Six months later, I just launched my first digital template store!',
      ar: 'بعد نوم الأطفال، توقفت عن تصفح مواقع التواصل وخصصت 60 دقيقة كل مساء لتعلم البرمجة. بعد ستة أشهر، أطلقت أول متجر قوالب رقمية خاص بي!',
      fr: 'Une fois les enfants couchés, j’ai remplacé les réseaux sociaux par 60 minutes de code chaque soir. Six mois plus tard, j’ai lancé ma boutique digitale !',
      de: 'Nachdem die Kinder schliefen, habe ich Social Media gegen 60 Minuten Coding getauscht. Sechs Monate später startete ich meinen ersten digitalen Shop!'
    },
    upvotes: 192,
    userVote: 0,
    comments: []
  }
];

const INITIAL_BOUTIQUE_ITEMS = [
  {
    id: 'prod-1',
    featured: true,
    title: {
      en: 'Hand-Embroidered Velvet Karakou & Table Linens',
      ar: 'كاراكو مخملي مطرز يدوياً ومفارش طاولة فاخرة',
      fr: 'Karakou en velours brodé main & linge de table',
      de: 'Handbestickter Samt-Karakou & edle Tischwäsche'
    },
    seller: { en: 'Yasmine Atelier • Algiers', ar: 'ورشة ياسمين • الجزائر العاصمة', fr: 'Atelier Yasmine • Alger', de: 'Atelier Yasmine • Algier' },
    price: '$45 / 6,500 DZD',
    category: 'Handmade Crafts',
    description: {
      en: 'Bespoke gold-thread embroidery on royal burgundy & cream linen. Custom sizes available with nationwide & international shipping.',
      ar: 'تطريز يدوي فاخر بخيوط الذهب على قماش المخمل العنابي والكتان الكريمي. تفصيل حسب المقاس مع توصيل لجميع الولايات والخارج.',
      fr: 'Broderie artisanale au fil d’or sur velours bordeaux et lin crème. Sur mesure avec livraison nationale et internationale.',
      de: 'Maßgeschneiderte Goldfaden-Stickerei auf königlichem Burgunder-Samt & Leinen. Weltweiter Versand möglich.'
    },
    contact: '@yasmine.atelier • +213 550 12 34 56'
  },
  {
    id: 'prod-2',
    featured: true,
    title: {
      en: 'Complete Notion Life & Ramadan Digital Planner',
      ar: 'منظم Notion الرقمي الشامل للحياة ورمضان',
      fr: 'Planificateur Digital Notion Vie & Ramadan',
      de: 'Kompletter Notion Lebens- & Ramadan-Digitalplaner'
    },
    seller: { en: 'Nour Digital Studio', ar: 'استوديو نور الرقمي', fr: 'Studio Digital Nour', de: 'Nour Digital Studio' },
    price: '$14',
    category: 'Digital Templates',
    description: {
      en: 'Aesthetic Notion dashboard for meal prep, budget tracking, Quran journaling, and daily habits. Instant download.',
      ar: 'لوحة تحكم أنيقة لتنظيم الوجبات، الميزانية، متابعة ختمة القرآن، والعادات اليومية. تحميل فوري.',
      fr: 'Tableau de bord Notion esthétique pour repas, budget, suivi du Coran et habitudes. Téléchargement immédiat.',
      de: 'Ästhetisches Notion-Dashboard für Essensplanung, Budget, Koran-Journal und Gewohnheiten. Sofort-Download.'
    },
    contact: 'nourstudio@anoura.app'
  },
  {
    id: 'prod-3',
    featured: false,
    title: {
      en: 'Artisanal Algerian Almond & Honey Pastries Box (24 pcs)',
      ar: 'علبة حلويات جزائرية تقليدية باللوز والعسل الحر (24 قطعة)',
      fr: 'Coffret Pâtisseries Algériennes Amandes & Miel (24 pcs)',
      de: 'Handgemachte algerische Mandel-Honig-Gebäckbox (24 Stk.)'
    },
    seller: { en: 'Lina Sweets • Boumerdes', ar: 'حلويات لينا • بومرداس', fr: 'Délices Lina • Boumerdès', de: 'Lina Sweets • Boumerdes' },
    price: '$28 / 4,000 DZD',
    category: 'Homemade Culinary',
    description: {
      en: 'Freshly baked Makrout El Louz, Mchewek, and Baklawa made with pure organic honey and roasted almonds for special occasions.',
      ar: 'مقروط اللوز، مشوك، وبقلاوة محضرة طازجة بالعسل الطبيعي واللوز المحمص لجميع مناسباتكم السعيدة.',
      fr: 'Makrout El Louz, Mchewek et Baklawa préparés au miel pur et amandes grillées pour vos occasions.',
      de: 'Frisch gebackenes Makrout El Louz, Mchewek und Baklawa mit reinem Honig und gerösteten Mandeln.'
    },
    contact: '@lina.sweets.dz • +213 661 98 76 54'
  },
  {
    id: 'prod-4',
    featured: false,
    title: {
      en: 'Organic Rosehip & Argan Night Glow Elixir',
      ar: 'إكسير الليل العضوي بزيت الأرغان وورد المسك',
      fr: 'Élixir de Nuit Bio Rose Musquée & Argan',
      de: 'Bio-Hagebutten- & Argan-Nacht-Elixier'
    },
    seller: { en: 'Botanica Femme', ar: 'بوتانيكا للعناية الطبيعية', fr: 'Botanica Femme', de: 'Botanica Femme' },
    price: '$24',
    category: 'Natural Beauty',
    description: {
      en: 'Cold-pressed Moroccan Argan oil infused with Damask rose petals and Vitamin E for radiant, deeply hydrated skin.',
      ar: 'زيت أرغان معصور على البارد منقوع ببتلات الورد الدمشقي وفيتامين E لبشرة مشرقة ومرطبة بعمق.',
      fr: 'Huile d’argan pressée à froid infusée aux pétales de rose de Damas et vitamine E pour une peau éclatante.',
      de: 'Kaltgepresstes Arganöl mit Damaszener-Rosenblättern und Vitamin E für strahlende Haut.'
    },
    contact: '@botanica.femme'
  }
];

const INITIAL_CHARITY_ITEMS = [
  {
    id: 'aid-1',
    type: 'donation',
    title: {
      en: 'Electric Hospital Bed & Anti-Bedsore Mattress (Free Donation)',
      ar: 'سرير طبي كهربائي مع فراش طبي مضاد للتقرحات (تبرع مجاني)',
      fr: 'Lit médicalisé électrique & matelas anti-escarres (Don gratuit)',
      de: 'Elektrisches Pflegebett & Anti-Dekubitus-Matratze (Kostenlose Spende)'
    },
    location: { en: 'Boumerdès / Algiers', ar: 'بومرداس / الجزائر', fr: 'Boumerdès / Alger', de: 'Boumerdès / Algier' },
    postedBy: 'Meriem S.',
    time: { en: '1h ago', ar: 'منذ ساعة', fr: 'Il y a 1h', de: 'Vor 1 Std.' },
    details: {
      en: 'In excellent working condition after my grandmother recovered. Ready to be given free of charge to any family caring for a patient at home.',
      ar: 'في حالة ممتازة جداً بعد شفاء جدتي والحمد لله. جاهز للتسليم مجاناً لأي عائلة ترعى مريضاً في المنزل.',
      fr: 'En excellent état après le rétablissement de ma grand-mère. À donner gratuitement à une famille dans le besoin.',
      de: 'In sehr gutem Zustand nach Genesung meiner Großmutter. Kostenlos abzugeben an eine pflegende Familie.'
    },
    contact: '+213 554 33 22 11'
  },
  {
    id: 'aid-2',
    type: 'urgent',
    title: {
      en: 'Urgent Need: Pediatric Thyroid Medication (L-Thyroxine 50mcg)',
      ar: 'حالة مستعجلة: دواء الغدة الدرقية للأطفال (L-Thyroxine 50mcg)',
      fr: 'Besoin Urgent : Médicament Thyroïde Pédiatrique (L-Thyroxine 50mcg)',
      de: 'Dringender Bedarf: Schilddrüsenmedikament für Kinder (L-Thyroxine 50mcg)'
    },
    location: { en: 'Oran / Nationwide', ar: 'وهران / كل الولايات', fr: 'Oran / National', de: 'Oran / Landesweit' },
    postedBy: 'Amina R.',
    time: { en: '3h ago', ar: 'منذ 3 ساعات', fr: 'Il y a 3h', de: 'Vor 3 Std.' },
    details: {
      en: 'Searching for 2 boxes of L-Thyroxine 50mcg for my 7-year-old daughter while awaiting pharmacy restock. Any sister who has spare boxes, please reach out.',
      ar: 'أبحث عن علبتين من دواء L-Thyroxine 50mcg لابنتي ذات الـ 7 سنوات ريثما يتوفر في الصيدليات. أي أخت لديها علب إضافية تتواصل معي جزاكن الله خيراً.',
      fr: 'Recherche 2 boîtes de L-Thyroxine 50mcg pour ma fille de 7 ans en attendant le réapprovisionnement. Merci de me contacter.',
      de: 'Suche dringend 2 Packungen L-Thyroxine 50mcg für meine 7-jährige Tochter. Bitte melden, falls jemand etwas übrig hat.'
    },
    contact: '+213 770 44 55 66'
  },
  {
    id: 'aid-3',
    type: 'donation',
    title: {
      en: 'Complete Newborn Baby Stroller, Crib & Winter Clothes (0-12m)',
      ar: 'عربة أطفال وسرير رضيع وملابس شتوية كاملة (0-12 شهر)',
      fr: 'Poussette bébé, berceau & vêtements d’hiver complets (0-12 mois)',
      de: 'Kompletter Kinderwagen, Babybett & Winterkleidung (0-12 Mon.)'
    },
    location: { en: 'Constantine', ar: 'قسنطينة', fr: 'Constantine', de: 'Constantine' },
    postedBy: 'Selma H.',
    time: { en: '5h ago', ar: 'منذ 5 ساعات', fr: 'Il y a 5h', de: 'Vor 5 Std.' },
    details: {
      en: 'Clean, gently used neutral-toned baby essentials bundled with love for an expecting mother in need.',
      ar: 'مستلزمات رضيع نظيفة جداً وبألوان هادئة، مجهزة بكل حب لأم مقبلة على الولادة وتحتاج للمساعدة.',
      fr: 'Affaires de bébé très propres et peu utilisées, préparées avec amour pour une future maman.',
      de: 'Saubere, kaum genutzte Babyausstattung liebevoll zusammengestellt für eine werdende Mutter.'
    },
    contact: '@selma.solidarity'
  },
  {
    id: 'aid-4',
    type: 'urgent',
    title: {
      en: 'Wheelchair & Blood Glucose Monitor Needed for Elderly Mother',
      ar: 'مطلوب كرسي متحرك وجهاز قياس السكري لأم مسنّة',
      fr: 'Fauteuil roulant & lecteur de glycémie recherchés pour maman âgée',
      de: 'Rollstuhl & Blutzuckermessgerät für ältere Mutter gesucht'
    },
    location: { en: 'Blida', ar: 'البليدة', fr: 'Blida', de: 'Blida' },
    postedBy: 'Houda T.',
    time: { en: 'Yesterday', ar: 'أمس', fr: 'Hier', de: 'Gestern' },
    details: {
      en: 'Looking for a foldable wheelchair and glucose strips for an elderly widow living alone.',
      ar: 'نبحث عن كرسي متحرك قابل للطي وشرائط قياس السكري لأرملة مسنّة تعيش بمفردها.',
      fr: 'Recherche un fauteuil roulant pliant et des bandelettes de glycémie pour une dame âgée.',
      de: 'Suche einen faltbaren Rollstuhl und Teststreifen für eine ältere Dame.'
    },
    contact: '+213 662 11 00 99'
  }
];

const PRINTABLE_TEMPLATES = [
  {
    id: 'vault-1',
    title: {
      en: 'The Burgundy Weekly Meal & Grocery Planner',
      ar: 'مخطط الوجبات وقائمة التسوق الأسبوعية',
      fr: 'Planificateur Hebdomadaire de Repas & Courses',
      de: 'Burgunder Wochen-Essens- & Einkaufsplaner'
    },
    tag: 'Culinary Edition',
    pages: 'A4 Luxury Sheet',
    description: {
      en: 'Aesthetic 7-day culinary layout with categorized shopping lists and pantry inventory.',
      ar: 'جدول أسبوعي أنيق لتنظيم الفطور والغداء والعشاء مع قائمة تسوق مقسمة وجاهزة للطباعة.',
      fr: 'Mise en page élégante sur 7 jours avec liste de courses catégorisée.',
      de: 'Elegantes 7-Tage-Layout mit kategorisierter Einkaufsliste zum Ausdrucken.'
    },
    sections: {
      en: [
        { heading: '7-Day Meal Matrix', items: ['Monday — Breakfast / Lunch / Dinner', 'Tuesday — Breakfast / Lunch / Dinner', 'Wednesday — Breakfast / Lunch / Dinner', 'Thursday — Breakfast / Lunch / Dinner', 'Friday — Family Feast & Special Dish', 'Saturday & Sunday — Light Prep & Reset'] },
        { heading: 'Categorized Grocery Checklist', items: ['Fresh Produce & Herbs', 'Proteins & Legumes', 'Grains, Semolina & Spices', 'Pantry & Healthy Snacks'] }
      ],
      ar: [
        { heading: 'جدول الوجبات الأسبوعي (7 أيام)', items: ['الإثنين — فطور / غداء / عشاء', 'الثلاثاء — فطور / غداء / عشاء', 'الأربعاء — فطور / غداء / عشاء', 'الخميس — فطور / غداء / عشاء', 'الجمعة — طبق العائلة التقليدي المميز', 'السبت والأحد — تحضيرات خفيفة وبداية الأسبوع'] },
        { heading: 'قائمة التسوق المقسمة', items: ['خضر وفواكه وأعشاب طازجة', 'لحوم، أسماك وبقوليات', 'حبوب، سميد، أرز وتوابل', 'مستلزمات المونة والوجبات الخفيفة الصحية'] }
      ],
      fr: [
        { heading: 'Semainier Culinaire (7 Jours)', items: ['Lundi — Petit-déjeuner / Déjeuner / Dîner', 'Mardi — Petit-déjeuner / Déjeuner / Dîner', 'Mercredi — Petit-déjeuner / Déjeuner / Dîner', 'Jeudi — Petit-déjeuner / Déjeuner / Dîner', 'Vendredi — Plat Traditionnel en Famille', 'Samedi & Dimanche — Préparation Douce'] },
        { heading: 'Liste de Courses Catégorisée', items: ['Fruits, Légumes & Herbes Fraîches', 'Protéines & Légumineuses', 'Céréales, Semoule & Épices', 'Placard & Collations Saines'] }
      ],
      de: [
        { heading: '7-Tage-Essensplan', items: ['Montag — Frühstück / Mittag / Abendessen', 'Dienstag — Frühstück / Mittag / Abendessen', 'Mittwoch — Frühstück / Mittag / Abendessen', 'Donnerstag — Frühstück / Mittag / Abendessen', 'Freitag — Besonderes Familiengericht', 'Samstag & Sonntag — Leichte Vorbereitung'] },
        { heading: 'Kategorisierte Einkaufsliste', items: ['Frisches Obst, Gemüse & Kräuter', 'Proteine & Hülsenfrüchte', 'Getreide, Reis & Gewürze', 'Vorratsschrank & Gesunde Snacks'] }
      ]
    }
  },
  {
    id: 'vault-2',
    title: {
      en: 'Muslim Woman’s Salah & Quran Reflection Journal',
      ar: 'دفتر متابعة الصلوات والورد القرآني والأذكار',
      fr: 'Journal Spirituel : Prières & Lecture du Coran',
      de: 'Muslima Gebets- & Koran-Reflexionsjournal'
    },
    tag: 'Faith & Serenity',
    pages: 'A4 Luxury Sheet',
    description: {
      en: 'Daily prayer tracker, morning/evening Adhkar checklist, and gratitude duas.',
      ar: 'متتبع يومي للصلوات الخمس، أذكار الصباح والمساء، وجدول ختمة القرآن الكريم.',
      fr: 'Suivi quotidien des prières, invocations du matin/soir et notes de gratitude.',
      de: 'Täglicher Gebets-Tracker, Morgen-/Abend-Adhkar und Dankbarkeits-Notizen.'
    },
    sections: {
      en: [
        { heading: 'Daily 5 Prayers & Sunnah Grid', items: ['Fajr + 2 Sunnah Before', 'Dhuhr + Sunnah Rawatib', 'Asr on Time', 'Maghrib + Evening Adhkar', 'Isha + Witr Prayer'] },
        { heading: 'Quran Wird & Heartfelt Duas', items: ['Surah / Juz Read Today: __________', 'Morning Adhkar [ ]  •  Evening Adhkar [ ]', 'Istighfar Counter (100x) [ ]', '3 Blessings & Personal Duas Today'] }
      ],
      ar: [
        { heading: 'جدول الصلوات الخمس والسنن الرواتب', items: ['صلاة الفجر + ركعتا سنة الفجر', 'صلاة الظهر + السنن الرواتب', 'صلاة العصر في وقتها', 'صلاة المغرب + أذكار المساء', 'صلاة العشاء + صلاة الوتر'] },
        { heading: 'الورد القرآني والدعاء اليومي', items: ['السورة / الجزء المقروء اليوم: __________', 'أذكار الصباح [ ]  •  أذكار المساء [ ]', 'ورد الاستغفار والصلاة على النبي ﷺ (100 مرة) [ ]', 'دعواتي الخاصة ونِعم أشكر الله عليها اليوم'] }
      ],
      fr: [
        { heading: 'Suivi des 5 Prières & Sunnah', items: ['Fajr + 2 Rak’ahs Sunnah', 'Dhuhr + Sunnah Rawatib', 'Asr à l’heure', 'Maghrib + Invocations du soir', 'Isha + Prière du Witr'] },
        { heading: 'Lecture du Coran & Invocations', items: ['Sourate / Juz lu aujourd’hui : __________', 'Adhkar du Matin [ ]  •  Adhkar du Soir [ ]', 'Istighfar (100x) [ ]', '3 Gratitudes & Douas Personnelles'] }
      ],
      de: [
        { heading: 'Tägliche 5 Gebete & Sunnah', items: ['Fajr + 2 Sunnah davor', 'Dhuhr + Sunnah Rawatib', 'Asr pünktlich', 'Maghrib + Abend-Adhkar', 'Isha + Witr-Gebet'] },
        { heading: 'Koran-Wird & Persönliche Duas', items: ['Gelesene Sure / Juz heute: __________', 'Morgen-Adhkar [ ]  •  Abend-Adhkar [ ]', 'Istighfar-Zähler (100x) [ ]', '3 Dankbarkeiten & Duas für heute'] }
      ]
    }
  },
  {
    id: 'vault-3',
    title: {
      en: 'Sacred Me-Time & Skill Mastery Tracker',
      ar: 'مخطط وقتي الخاص وتعلم المهارات الجديدة',
      fr: 'Suivi Temps pour Soi & Apprentissage',
      de: 'Ich-Zeit & Lern-Fortschritts-Tracker'
    },
    tag: 'Personal Growth',
    pages: 'A4 Gold Edition',
    description: {
      en: '30-day habit tracker for crafts, coding, language learning, and screen-free rest.',
      ar: 'متتبع 30 يوماً لتعلم حرفة أو لغة أو برمجة وتخصيص ساعة يومية للراحة والقراءة.',
      fr: 'Suivi sur 30 jours pour l’artisanat, le code, les langues et la lecture.',
      de: '30-Tage-Tracker für Handwerk, Programmieren, Sprachen und Ruhezeit.'
    },
    sections: {
      en: [
        { heading: 'My Chosen Skill / Passion Track', items: ['Focus Track: [ ] Craft   [ ] Coding   [ ] Language   [ ] Pure Rest', 'My 30-Day Milestone Goal: __________________________', 'Daily Sacred Time Slot (60 Mins): From ____ to ____'] },
        { heading: '30-Day Consistency Bubbles', items: ['Week 1:  [1]  [2]  [3]  [4]  [5]  [6]  [7]', 'Week 2:  [8]  [9]  [10] [11] [12] [13] [14]', 'Week 3:  [15] [16] [17] [18] [19] [20] [21]', 'Week 4:  [22] [23] [24] [25] [26] [27] [28] [29] [30]'] }
      ],
      ar: [
        { heading: 'مسار تطوير الذات ووقتي الخاص', items: ['المجال المختار: [ ] حرفة يدوية  [ ] برمجة  [ ] لغة جديدة  [ ] استرخاء وقراءة', 'هدفي خلال 30 يوماً: __________________________', 'ساعتي المقدسة اليومية (60 دقيقة): من الساعة ____ إلى ____'] },
        { heading: 'متتبع الالتزام لـ 30 يوماً', items: ['الأسبوع 1:  (1)  (2)  (3)  (4)  (5)  (6)  (7)', 'الأسبوع 2:  (8)  (9)  (10) (11) (12) (13) (14)', 'الأسبوع 3:  (15) (16) (17) (18) (19) (20) (21)', 'الأسبوع 4:  (22) (23) (24) (25) (26) (27) (28) (29) (30)'] }
      ],
      fr: [
        { heading: 'Mon Parcours Temps pour Soi', items: ['Choix : [ ] Artisanat  [ ] Code  [ ] Langue  [ ] Détente & Lecture', 'Mon Objectif à 30 Jours : __________________________', 'Créneau Sacré Quotidien (60 min) : De ____ à ____'] },
        { heading: 'Suivi de Régularité sur 30 Jours', items: ['Semaine 1 :  [1]  [2]  [3]  [4]  [5]  [6]  [7]', 'Semaine 2 :  [8]  [9]  [10] [11] [12] [13] [14]', 'Semaine 3 :  [15] [16] [17] [18] [19] [20] [21]', 'Semaine 4 :  [22] [23] [24] [25] [26] [27] [28] [29] [30]'] }
      ],
      de: [
        { heading: 'Mein Ich-Zeit & Lern-Fokus', items: ['Fokus: [ ] Handwerk  [ ] Coding  [ ] Sprache  [ ] Ruhe & Lesen', 'Mein 30-Tage-Ziel: __________________________', 'Tägliche Ich-Zeit (60 Min.): Von ____ bis ____'] },
        { heading: '30-Tage-Fortschritts-Tracker', items: ['Woche 1:  [1]  [2]  [3]  [4]  [5]  [6]  [7]', 'Woche 2:  [8]  [9]  [10] [11] [12] [13] [14]', 'Woche 3:  [15] [16] [17] [18] [19] [20] [21]', 'Woche 4:  [22] [23] [24] [25] [26] [27] [28] [29] [30]'] }
      ]
    }
  },
  {
    id: 'vault-4',
    title: {
      en: 'Sunday Reset & Home Sanctuary Checklist',
      ar: 'جدول الترتيب الأسبوعي وتنظيف البيت',
      fr: 'Checklist Rangement & Maison Sereine',
      de: 'Wöchentliche Haushalts- & Reset-Checkliste'
    },
    tag: 'Home Ritual',
    pages: 'A4 Minimalist Print',
    description: {
      en: 'Room-by-room reset checklist, linen rotation schedule, and mindful decluttering.',
      ar: 'قائمة ترتيب المنزل غرفة بغرفة لتبدأي أسبوعكِ بهدوء ونظام بدون إرهاق.',
      fr: 'Checklist pièce par pièce pour démarrer la semaine dans le calme.',
      de: 'Raum-für-Raum-Checkliste für einen entspannten Wochenstart.'
    },
    sections: {
      en: [
        { heading: 'Room-by-Room Weekly Reset', items: ['Living Room: Declutter surfaces, fluff cushions & scent with oud/lavender', 'Kitchen: Wipe counters, organize fridge & sanitize sink', 'Bedrooms: Change fresh bed linens, air out windows & fold laundry', 'Bathroom: Restock fresh towels, polish mirrors & scrub basin'] },
        { heading: 'Mindful Weekly Prep', items: ['Plan 7-day menu & grocery list [ ]', 'Prepare outfits & kids’ school bags [ ]', '15-minute evening aromatherapy & tea ritual [ ]'] }
      ],
      ar: [
        { heading: 'تنظيم البيت غرفة بغرفة', items: ['غرفة المعيشة: ترتيب الأسطح، تهوية الغرفة وتعطيرها بالعود أو الخزامى', 'المطبخ: مسح الأسطح، تنظيم الثلاجة وتعقيم الحوض', 'غرف النوم: تغيير أغطية السرير، تهوية النوافذ وطيّ الملابس', 'الحمام: تجديد المناشف النظيفة، تلميع المرايا وتنظيف المغسلة'] },
        { heading: 'تحضيرات بداية الأسبوع بهدوء', items: ['تحديد جدول الطبخ الأسبوعي وقائمة التسوق [ ]', 'تجهيز الملابس وحقائب الدراسة مسبقاً [ ]', 'جلسة استرخاء مسائية مع كوب شاي أعشاب [ ]'] }
      ],
      fr: [
        { heading: 'Rangement Pièce par Pièce', items: ['Salon : Désencombrer, aérer et parfumer à la lavande', 'Cuisine : Nettoyer les plans de travail, trier le frigo', 'Chambres : Changer les draps, aérer et ranger le linge', 'Salle de bain : Serviettes propres et miroirs brillants'] },
        { heading: 'Préparation Sereine de la Semaine', items: ['Planifier les repas et courses de la semaine [ ]', 'Préparer les tenues et sacs à l’avance [ ]', 'Rituel tisane apaisante le dimanche soir [ ]'] }
      ],
      de: [
        { heading: 'Wöchentlicher Reset Raum für Raum', items: ['Wohnzimmer: Oberflächen ordnen, lüften & Raumduft auffrischen', 'Küche: Arbeitsflächen reinigen, Kühlschrank sortieren', 'Schlafzimmer: Frische Bettwäsche aufziehen & Wäsche falten', 'Badezimmer: Frische Handtücher bereitlegen & Spiegel polieren'] },
        { heading: 'Achtsame Wochenvorbereitung', items: ['Wochen-Essensplan & Einkaufsliste erstellen [ ]', 'Outfits & Taschen für Montag vorbereiten [ ]', '15 Minuten Abendtee & Entspannung [ ]'] }
      ]
    }
  }
];

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================

export default function App() {
  const [lang, setLang] = useState('en');
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  // Helper to resolve either a localized object {en, ar, fr, de} or a plain user-created string
  const tr = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    return val[lang] || val.en || '';
  };

  const CATEGORY_LABELS = {
    All: { en: 'All Topics', ar: 'جميع المواضيع', fr: 'Tous les sujets', de: 'Alle Themen' },
    'Recipes & Kitchen': { en: 'Recipes & Kitchen', ar: 'وصفات ومطبخ', fr: 'Recettes & Cuisine', de: 'Rezepte & Küche' },
    'Muslim Sisterhood': { en: 'Muslim Sisterhood', ar: 'حياة المسلمة', fr: 'Sororité Musulmane', de: 'Muslima-Kreis' },
    'Career & Glow-Up': { en: 'Career & Glow-Up', ar: 'تطوير الذات والعمل', fr: 'Carrière & Évolution', de: 'Karriere & Glow-Up' },
    'Home & Organization': { en: 'Home & Organization', ar: 'تنظيم البيت', fr: 'Maison & Organisation', de: 'Haus & Organisation' }
  };

  const BOUTIQUE_CAT_LABELS = {
    'Handmade Crafts': { en: 'Handmade Crafts', ar: 'حرف يدوية وتطريز', fr: 'Artisanat fait main', de: 'Handarbeit' },
    'Digital Templates': { en: 'Digital Templates', ar: 'قوالب رقمية', fr: 'Modèles digitaux', de: 'Digitale Vorlagen' },
    'Homemade Culinary': { en: 'Homemade Culinary', ar: 'حلويات ومأكولات بيتية', fr: 'Pâtisserie & Cuisine', de: 'Hausgemachtes' },
    'Natural Beauty': { en: 'Natural Beauty', ar: 'عناية طبيعية', fr: 'Beauté naturelle', de: 'Naturkosmetik' }
  };

  const DAY_LABELS = {
    Monday: { en: 'Monday', ar: 'الإثنين', fr: 'Lundi', de: 'Montag' },
    Tuesday: { en: 'Tuesday', ar: 'الثلاثاء', fr: 'Mardi', de: 'Dienstag' },
    Wednesday: { en: 'Wednesday', ar: 'الأربعاء', fr: 'Mercredi', de: 'Mittwoch' },
    Thursday: { en: 'Thursday', ar: 'الخميس', fr: 'Jeudi', de: 'Donnerstag' },
    Friday: { en: 'Friday', ar: 'الجمعة', fr: 'Vendredi', de: 'Freitag' },
    Saturday: { en: 'Saturday', ar: 'السبت', fr: 'Samedi', de: 'Samstag' },
    Sunday: { en: 'Sunday', ar: 'الأحد', fr: 'Dimanche', de: 'Sonntag' }
  };

  const PRAYER_LABELS = {
    Fajr: { en: 'Fajr', ar: 'الفجر', fr: 'Fajr', de: 'Fajr' },
    Dhuhr: { en: 'Dhuhr', ar: 'الظهر', fr: 'Dhuhr', de: 'Dhuhr' },
    Asr: { en: 'Asr', ar: 'العصر', fr: 'Asr', de: 'Asr' },
    Maghrib: { en: 'Maghrib', ar: 'المغرب', fr: 'Maghrib', de: 'Maghrib' },
    Isha: { en: 'Isha', ar: 'العشاء', fr: 'Isha', de: 'Isha' }
  };

  const [activeTab, setActiveTab] = useState('lounge');
  const [toastMessage, setToastMessage] = useState('');
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  // Register Mobile App Manifest & PWA Install Prompt so phones recognize Anoura as a native-style app
  useEffect(() => {
    const manifestObj = {
      name: 'ANOURA — Luxury Women’s Sanctuary',
      short_name: 'ANOURA',
      start_url: '.',
      display: 'standalone',
      background_color: '#FDFBF9',
      theme_color: '#5C1A2B',
      icons: [
        {
          src: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2224%22 fill=%22%235C1A2B%22/><text x=%2250%22 y=%2268%22 font-size=%2256%22 font-family=%22Georgia,serif%22 fill=%22%23C5A059%22 text-anchor=%22middle%22>A</text></svg>',
          sizes: '192x192',
          type: 'image/svg+xml'
        }
      ]
    };
    const manifestBlob = new Blob([JSON.stringify(manifestObj)], { type: 'application/json' });
    const manifestUrl = URL.createObjectURL(manifestBlob);
    let linkEl = document.querySelector("link[rel='manifest']");
    if (!linkEl) {
      linkEl = document.createElement('link');
      linkEl.rel = 'manifest';
      document.head.appendChild(linkEl);
    }
    linkEl.href = manifestUrl;

    const handleBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      URL.revokeObjectURL(manifestUrl);
    };
  }, []);

  const handleInstallMobileApp = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
    } else {
      showToast(
        lang === 'ar'
          ? 'لتثبيت التطبيق: اضغطي على قائمة المتصفح (⋮ أو زر المشاركة) ثم اختاري "إضافة إلى الشاشة الرئيسية"'
          : 'Tap browser menu (⋮ or Share) → "Add to Home Screen" to install Anoura!'
      );
    }
  };

  // Community Lounge State
  const [posts, setPosts] = useState(() => {
    try {
      const saved = localStorage.getItem('anoura_posts_v4');
      return saved ? JSON.parse(saved) : INITIAL_POSTS;
    } catch {
      return INITIAL_POSTS;
    }
  });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedComments, setExpandedComments] = useState({ 'post-1': true });
  const [commentInputs, setCommentInputs] = useState({});
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);
  const [newPostForm, setNewPostForm] = useState({
    author: '',
    category: 'Recipes & Kitchen',
    title: '',
    content: '',
    image: '',
    videoUrl: ''
  });

  // Fitness Video Category & Click Monetization State
  const [selectedWorkoutCat, setSelectedWorkoutCat] = useState('core');
  const [monetizedVideoGate, setMonetizedVideoGate] = useState(null);
  const [videoGateTimer, setVideoGateTimer] = useState(3);
  const [adClickCount, setAdClickCount] = useState(142);

  // Culinary Photo Recipe & Cooking Video Recorder State
  const [customRecipes, setCustomRecipes] = useState([
    {
      id: 'rec-1',
      title: {
        en: 'Royal Saffron & Almond Couscous',
        ar: 'كسكس ملكي بالزعفران واللوز المحمص',
        fr: 'Couscous Royal au Safran & Amandes Grillées',
        de: 'Königlicher Safran-Mandel-Couscous'
      },
      chef: 'Amira K.',
      prepTime: '40 mins',
      ingredients: {
        en: 'Fine semolina, saffron threads, roasted almonds, cinnamon, chickpeas, seasonal vegetables',
        ar: 'سميد ناعم، زعفران حر، لوز محمص، قرفة، حمص، خضر موسمية طازجة',
        fr: 'Semoule fine, safran, amandes grillées, cannelle, pois chiches, légumes frais',
        de: 'Feiner Grieß, Safranfäden, geröstete Mandeln, Zimt, Kichererbsen, Gemüse'
      },
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80',
      videoUrl: ''
    }
  ]);
  const [newRecipeForm, setNewRecipeForm] = useState({
    title: '',
    chef: '',
    prepTime: '30 mins',
    ingredients: '',
    image: '',
    videoUrl: ''
  });
  const [isRecordingCooking, setIsRecordingCooking] = useState(false);
  const [mediaRecorderRef, setMediaRecorderRef] = useState(null);

  // Boutique Marketplace State
  const [boutiqueItems, setBoutiqueItems] = useState(() => {
    try {
      const saved = localStorage.getItem('anoura_boutique_v2');
      return saved ? JSON.parse(saved) : INITIAL_BOUTIQUE_ITEMS;
    } catch {
      return INITIAL_BOUTIQUE_ITEMS;
    }
  });
  const [isNewProductOpen, setIsNewProductOpen] = useState(false);
  const [newProductForm, setNewProductForm] = useState({
    title: '',
    seller: '',
    price: '',
    category: 'Handmade Crafts',
    description: '',
    contact: ''
  });

  // Sisterhood Charity & Medical Aid State
  const [charityItems, setCharityItems] = useState(() => {
    try {
      const saved = localStorage.getItem('anoura_charity_v2');
      return saved ? JSON.parse(saved) : INITIAL_CHARITY_ITEMS;
    } catch {
      return INITIAL_CHARITY_ITEMS;
    }
  });
  const [charityFilter, setCharityFilter] = useState('all');
  const [isNewCharityOpen, setIsNewCharityOpen] = useState(false);
  const [newCharityForm, setNewCharityForm] = useState({
    type: 'donation',
    title: '',
    location: '',
    postedBy: '',
    details: '',
    contact: ''
  });

  // Muslim Sanctuary State
  const [prayers, setPrayers] = useState({
    Fajr: true,
    Dhuhr: true,
    Asr: false,
    Maghrib: false,
    Isha: false
  });
  const [adhkar, setAdhkar] = useState({ morning: true, evening: false });
  const [quranPages, setQuranPages] = useState(4);

  // Fitness & Measurements State
  const [measurements, setMeasurements] = useState(INITIAL_MEASUREMENTS);
  const [newMeasure, setNewMeasure] = useState({ weight: '', waist: '', hips: '', chest: '' });
  const [completedWorkouts, setCompletedWorkouts] = useState({ w1: true });
  const [motivationWall, setMotivationWall] = useState(INITIAL_MOTIVATION_WALL);
  const [newMotivationText, setNewMotivationText] = useState('');

  // Planner & Cuisine State
  const [plannerSubTab, setPlannerSubTab] = useState('meals');
  const [selectedCuisine, setSelectedCuisine] = useState('algerian');
  const [weeklyMeals, setWeeklyMeals] = useState(CUISINE_PLANS.algerian.days);
  const [groceries, setGroceries] = useState(() =>
    CUISINE_PLANS.algerian.groceries.map((item, idx) => ({
      id: `algerian-${idx}`,
      text: item,
      checked: false
    }))
  );
  const [newGroceryItem, setNewGroceryItem] = useState('');
  const [waterGlasses, setWaterGlasses] = useState(5);

  // Personality & Me-Time State
  const [selectedPersonality, setSelectedPersonality] = useState('crafter');
  const [meTimeCompleted, setMeTimeCompleted] = useState(false);
  const [checkedPersonalityTasks, setCheckedPersonalityTasks] = useState({});

  // Anoura AI Chat State
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      id: 'welcome-ai',
      sender: 'ai',
      text: 'Welcome to Anoura ✨ Ask me for meal plans by nationality, a 60-minute Me-Time learning schedule, or daily self-care rituals.'
    }
  ]);

  // Revenue & Ad Network Simulator State
  const [dailyVisitors, setDailyVisitors] = useState(25000);
  const [rpmRate, setRpmRate] = useState(9);
  const [featuredSlotsSold, setFeaturedSlotsSold] = useState(5);
  const [affiliateSalesDaily, setAffiliateSalesDaily] = useState(25);
  const [adNetworkScript, setAdNetworkScript] = useState('');

  // Shared Cloud Database (Supabase Free Tier) & Viral Growth Kit State
  const [supabaseUrl, setSupabaseUrl] = useState(() => localStorage.getItem('anoura_sb_url') || '');
  const [supabaseKey, setSupabaseKey] = useState(() => localStorage.getItem('anoura_sb_key') || '');
  const [cloudConnected, setCloudConnected] = useState(() => Boolean(localStorage.getItem('anoura_sb_url')));

  const estimatedAdRevenue = ((dailyVisitors / 1000) * rpmRate).toFixed(2);
  const estimatedSponsorRevenue = (featuredSlotsSold * 10).toFixed(2);
  const totalDailyRevenue = (
    parseFloat(estimatedAdRevenue) +
    parseFloat(estimatedSponsorRevenue) +
    affiliateSalesDaily
  ).toFixed(2);

  // Sync Lounge Posts, Boutique & Charity Items to Shared Cloud (Supabase REST API) when configured
  useEffect(() => {
    if (!supabaseUrl || !supabaseKey) return;
    const syncFromCloud = async () => {
      try {
        const res = await fetch(`${supabaseUrl}/rest/v1/anoura_posts?select=*&order=created_at.desc`, {
          headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`
          }
        });
        if (res.ok) {
          const rows = await res.json();
          if (Array.isArray(rows) && rows.length > 0) {
            setPosts(rows.map((r) => r.payload));
          }
        }
      } catch {
        // Fallback silently to local state if table is not created yet
      }
    };
    syncFromCloud();
  }, [supabaseUrl, supabaseKey]);

  const handleSaveCloudConfig = () => {
    localStorage.setItem('anoura_sb_url', supabaseUrl.trim());
    localStorage.setItem('anoura_sb_key', supabaseKey.trim());
    setCloudConnected(Boolean(supabaseUrl.trim() && supabaseKey.trim()));
    showToast(
      lang === 'ar'
        ? 'تم حفظ إعدادات قاعدة البيانات السحابية المشتركة!'
        : 'Shared Cloud Database connected!'
    );
  };

  // Vault Download Modal State
  const [downloadModalItem, setDownloadModalItem] = useState(null);
  const [countdown, setCountdown] = useState(5);

  // Countdown timers for Ad-Supported PDF Vault and Monetized Video Clicks
  useEffect(() => {
    if (!downloadModalItem || countdown <= 0) return;
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [downloadModalItem, countdown]);

  useEffect(() => {
    if (!monetizedVideoGate || videoGateTimer <= 0) return;
    const timer = setTimeout(() => setVideoGateTimer((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [monetizedVideoGate, videoGateTimer]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3200);
  };

  // Helper to convert uploaded image or video file into previewable URL
  const handleFileUpload = (file, callback) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => callback(reader.result);
    reader.readAsDataURL(file);
  };

  // Start / Stop Live Cooking Video Recording via Camera
  const handleToggleCookingRecorder = async () => {
    if (isRecordingCooking && mediaRecorderRef) {
      mediaRecorderRef.stop();
      setIsRecordingCooking(false);
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const videoObjectUrl = URL.createObjectURL(blob);
        setNewRecipeForm((prev) => ({ ...prev, videoUrl: videoObjectUrl }));
        stream.getTracks().forEach((track) => track.stop());
        showToast(lang === 'ar' ? 'تم حفظ فيديو الطبخ بنجاح!' : 'Cooking video recorded!');
      };
      recorder.start();
      setMediaRecorderRef(recorder);
      setIsRecordingCooking(true);
      showToast(lang === 'ar' ? 'جاري تسجيل فيديو الطبخ الآن...' : 'Recording cooking video...');
    } catch {
      showToast(
        lang === 'ar'
          ? 'يرجى السماح بالوصول للكاميرا أو اختيار ملف فيديو من جهازكِ'
          : 'Please allow camera access or upload a video file from your device.'
      );
    }
  };

  const handlePublishCustomRecipe = (e) => {
    e.preventDefault();
    if (!newRecipeForm.title.trim()) return;
    const createdRecipe = {
      id: `rec-${Date.now()}`,
      title: newRecipeForm.title.trim(),
      chef: newRecipeForm.chef.trim() || 'Anoura Chef',
      prepTime: newRecipeForm.prepTime.trim() || '30 mins',
      ingredients: newRecipeForm.ingredients.trim(),
      image:
        newRecipeForm.image ||
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
      videoUrl: newRecipeForm.videoUrl
    };
    setCustomRecipes([createdRecipe, ...customRecipes]);

    // Also share directly into The Lounge feed so sisters can see & comment
    const sharedPost = {
      id: `post-${Date.now()}`,
      author: createdRecipe.chef,
      badge: { en: 'Recipe & Video', ar: 'وصفة وفيديو طبخ', fr: 'Recette & Vidéo', de: 'Rezept & Kochvideo' },
      time: { en: 'Just now', ar: 'الآن', fr: 'À l’instant', de: 'Gerade eben' },
      category: 'Recipes & Kitchen',
      title: createdRecipe.title,
      content: createdRecipe.ingredients || 'Freshly shared from Anoura Culinary Studio!',
      image: createdRecipe.image,
      videoUrl: createdRecipe.videoUrl,
      upvotes: 1,
      userVote: 1,
      comments: []
    };
    setPosts([sharedPost, ...posts]);
    setNewRecipeForm({ title: '', chef: '', prepTime: '30 mins', ingredients: '', image: '', videoUrl: '' });
    showToast(
      lang === 'ar'
        ? 'تم نشر وصفتكِ بالصورة والفيديو ومشاركتها في الصالون!'
        : 'Recipe & cooking video published and shared to The Lounge!'
    );
  };

  // Generates a real downloadable/printable luxury HTML/PDF edition file
  const handleDownloadPrintableFile = (tpl) => {
    const titleText = tpl.title[lang] || tpl.title.en;
    const descText = tpl.description[lang] || tpl.description.en;
    const sections = tpl.sections[lang] || tpl.sections.en;
    const isRtl = lang === 'ar';

    const sectionsHtml = sections
      .map(
        (sec) => `
        <div style="border:1px solid #C5A059; border-radius:16px; padding:18px 22px; margin-bottom:18px; background:#FFFFFF;">
          <h3 style="color:#5C1A2B; font-size:16px; margin:0 0 12px 0; border-bottom:1px solid #E8DFD1; padding-bottom:8px;">${sec.heading}</h3>
          <ul style="list-style:none; padding:0; margin:0;">
            ${sec.items
              .map(
                (it) =>
                  `<li style="padding:7px 0; border-bottom:1px dashed #E8DFD1; font-size:13px; color:#221D1E;">☐ &nbsp; ${it}</li>`
              )
              .join('')}
          </ul>
        </div>`
      )
      .join('');

    const htmlDoc = `<!DOCTYPE html>
<html lang="${lang}" dir="${isRtl ? 'rtl' : 'ltr'}">
<head>
  <meta charset="UTF-8" />
  <title>ANOURA — ${titleText}</title>
  <style>
    body { font-family: Georgia, serif; background:#FDFBF9; color:#221D1E; padding:40px; max-width:800px; margin:auto; }
    .header { text-align:center; border-bottom:2px solid #C5A059; padding-bottom:20px; margin-bottom:28px; }
    .brand { letter-spacing:6px; color:#5C1A2B; font-size:26px; font-weight:bold; margin:0; }
    .sub { color:#8C6D2E; font-size:11px; letter-spacing:3px; text-transform:uppercase; margin-top:4px; }
    h1 { color:#5C1A2B; font-size:22px; margin:16px 0 8px 0; }
    p.desc { color:#6E6365; font-size:13px; margin:0; }
    .footer { text-align:center; margin-top:30px; font-size:11px; color:#8C6D2E; border-top:1px solid #E8DFD1; padding-top:14px; }
    @media print { body { padding:16px; background:#FFFFFF; } }
  </style>
</head>
<body>
  <div class="header">
    <p class="brand">ANOURA</p>
    <p class="sub">${tpl.tag} • ${tpl.pages}</p>
    <h1>${titleText}</h1>
    <p class="desc">${descText}</p>
  </div>
  ${sectionsHtml}
  <div class="footer">ANOURA — Luxury Women's Sanctuary • Printable Edition</div>
  <script>window.onload = function() { window.print(); };</script>
</body>
</html>`;

    const blob = new Blob([htmlDoc], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Anoura-${tpl.id}-${lang}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast(t.ui.downloadReady);
  };

  // ==========================================================================
  // HANDLERS
  // ==========================================================================

  const handleVote = (postId, direction) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id !== postId) return post;
        const newVote = post.userVote === direction ? 0 : direction;
        const diff = newVote - post.userVote;
        return { ...post, userVote: newVote, upvotes: post.upvotes + diff };
      })
    );
  };

  const handleAddComment = (postId) => {
    const text = (commentInputs[postId] || '').trim();
    if (!text) return;
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, { id: `c-${Date.now()}`, author: 'Sister Member', text }] }
          : post
      )
    );
    setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
    setExpandedComments((prev) => ({ ...prev, [postId]: true }));
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newPostForm.title.trim() || !newPostForm.content.trim()) return;
    const created = {
      id: `post-${Date.now()}`,
      author: newPostForm.author.trim() || 'Anoura Member',
      badge: 'Verified Member',
      time: 'Just now',
      category: newPostForm.category,
      title: newPostForm.title.trim(),
      content: newPostForm.content.trim(),
      image: newPostForm.image.trim(),
      videoUrl: newPostForm.videoUrl,
      upvotes: 1,
      userVote: 1,
      comments: []
    };
    setPosts([created, ...posts]);
    if (supabaseUrl && supabaseKey) {
      fetch(`${supabaseUrl}/rest/v1/anoura_posts`, {
        method: 'POST',
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ payload: created })
      }).catch(() => {});
    }
    setNewPostForm({ author: '', category: 'Recipes & Kitchen', title: '', content: '', image: '', videoUrl: '' });
    setIsNewPostOpen(false);
    showToast('Published to The Lounge!');
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProductForm.title.trim() || !newProductForm.price.trim()) return;
    const item = {
      id: `prod-${Date.now()}`,
      featured: false,
      title: newProductForm.title.trim(),
      seller: newProductForm.seller.trim() || 'Anoura Creator',
      price: newProductForm.price.trim(),
      category: newProductForm.category,
      description: newProductForm.description.trim(),
      contact: newProductForm.contact.trim() || 'Direct Message via Anoura'
    };
    setBoutiqueItems([item, ...boutiqueItems]);
    setNewProductForm({
      title: '',
      seller: '',
      price: '',
      category: 'Handmade Crafts',
      description: '',
      contact: ''
    });
    setIsNewProductOpen(false);
    showToast('Your product is now live in Her Boutique!');
  };

  const handleToggleFeaturedProduct = (id) => {
    setBoutiqueItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, featured: !item.featured } : item))
        .sort((a, b) => Number(b.featured) - Number(a.featured))
    );
    showToast('★ Featured Spotlight updated! (+$10 Sponsor Slot)');
  };

  const handleAddCharity = (e) => {
    e.preventDefault();
    if (!newCharityForm.title.trim() || !newCharityForm.details.trim()) return;
    const entry = {
      id: `aid-${Date.now()}`,
      type: newCharityForm.type,
      title: newCharityForm.title.trim(),
      location: newCharityForm.location.trim() || 'Community Network',
      postedBy: newCharityForm.postedBy.trim() || 'Sister',
      time: 'Just now',
      details: newCharityForm.details.trim(),
      contact: newCharityForm.contact.trim() || 'Contact via Anoura'
    };
    setCharityItems([entry, ...charityItems]);
    setNewCharityForm({
      type: 'donation',
      title: '',
      location: '',
      postedBy: '',
      details: '',
      contact: ''
    });
    setIsNewCharityOpen(false);
    showToast('Posted to Sisterhood Aid!');
  };

  const handleSelectCuisine = (cuisineKey) => {
    setSelectedCuisine(cuisineKey);
    const plan = CUISINE_PLANS[cuisineKey];
    setWeeklyMeals(plan.days);
    setGroceries(plan.groceries.map((item, idx) => ({ id: `${cuisineKey}-${idx}`, text: item, checked: false })));
    showToast(`${plan.label[lang]} ✓`);
  };

  const handleMealChange = (day, slot, value) => {
    setWeeklyMeals((prev) => ({
      ...prev,
      [day]: { ...prev[day], [slot]: value }
    }));
  };

  const handleAddGrocery = (e) => {
    e.preventDefault();
    if (!newGroceryItem.trim()) return;
    setGroceries([...groceries, { id: `g-${Date.now()}`, text: newGroceryItem.trim(), checked: false }]);
    setNewGroceryItem('');
  };

  const handleAddMeasurement = (e) => {
    e.preventDefault();
    if (!newMeasure.weight.trim()) return;
    const today = new Date().toISOString().slice(0, 10);
    setMeasurements([
      ...measurements,
      {
        id: `m-${Date.now()}`,
        date: today,
        weight: newMeasure.weight.trim(),
        waist: newMeasure.waist.trim() || '-',
        hips: newMeasure.hips.trim() || '-',
        chest: newMeasure.chest.trim() || '-'
      }
    ]);
    setNewMeasure({ weight: '', waist: '', hips: '', chest: '' });
    showToast(lang === 'ar' ? 'تم تسجيل قياساتكِ الجديدة بنجاح!' : 'Measurements logged!');
  };

  const handleAddMotivation = (e) => {
    e.preventDefault();
    if (!newMotivationText.trim()) return;
    setMotivationWall([
      {
        id: `mot-${Date.now()}`,
        author: lang === 'ar' ? 'أخت نشيطة' : 'Active Sister',
        badge: { en: 'Daily Check-in', ar: 'تحديث اليوم', fr: 'Suivi du jour', de: 'Tages-Check-in' },
        message: newMotivationText.trim(),
        cheers: 1
      },
      ...motivationWall
    ]);
    setNewMotivationText('');
    showToast(lang === 'ar' ? 'تم نشر رسالتكِ التحفيزية!' : 'Motivation shared!');
  };

  const generateAiReply = (prompt) => {
    if (lang === 'ar') {
      return `بكل سرور يا عزيزتي ✨\n\nبناءً على طلبكِ ("${prompt}"):\n1. **الطبخ والتغذية:** أنصحكِ بتحضير شوربة فريك خفيفة مع سلطة خضراء، وتجهيز التتبيلات مسبقاً لتوفير 45 دقيقة يومياً.\n2. **وقتكِ الخاص (60 دقيقة):** خصصي الساعة 9:00 مساءً لهوايتكِ أو تعلم مهارة جديدة بدون هاتف.\n3. **السكينة:** حافظي على أذكار المساء وكوب شاي دافئ قبل النوم.`;
    }
    if (lang === 'fr') {
      return `Avec plaisir, chère amie ✨\n\nVoici votre plan personnalisé pour "${prompt}" :\n1. **Cuisine & Organisation :** Préparez vos bases d'herbes et légumes le dimanche pour gagner 40 minutes chaque soir.\n2. **Temps pour Soi (60 min) :** Réservez un créneau sans écran de 21h à 22h pour votre passion ou apprentissage.\n3. **Sérénité :** Terminez la journée avec une tisane apaisante.`;
    }
    if (lang === 'de') {
      return `Sehr gerne ✨\n\nHier ist dein persönlicher Plan für "${prompt}":\n1. **Küche & Planung:** Bereite Kräuter- und Gemüsebasis am Sonntag vor, um unter der Woche 40 Minuten zu sparen.\n2. **Ich-Zeit (60 Min.):** Reserviere dir abends eine bildschirmfreie Stunde für dein Hobby oder Lernen.\n3. **Ruhe:** Beende den Tag mit einem warmen Kräutertee.`;
    }
    return `With pleasure, darling ✨\n\nHere is your tailored Anoura blueprint for "${prompt}":\n1. **Culinary Flow:** Prep your aromatics and grains on Sunday so weeknight dinners take under 25 minutes.\n2. **Sacred Me-Time (60 mins):** Block 9:00 PM – 10:00 PM strictly for your craft, coding, language practice, or quiet reading.\n3. **Evening Serenity:** Unwind with warm herbal tea and gratitude journaling.`;
  };

  const handleSendChat = (customPrompt) => {
    const query = (customPrompt || chatInput).trim();
    if (!query) return;
    const userMsg = { id: `u-${Date.now()}`, sender: 'user', text: query };
    const aiMsg = { id: `ai-${Date.now() + 1}`, sender: 'ai', text: generateAiReply(query) };
    setChatMessages((prev) => [...prev, userMsg, aiMsg]);
    if (!customPrompt) setChatInput('');
  };

  const filteredPosts =
    selectedCategory === 'All' ? posts : posts.filter((p) => p.category === selectedCategory);

  const filteredCharity =
    charityFilter === 'all' ? charityItems : charityItems.filter((c) => c.type === charityFilter);

  const currentPersonality = PERSONALITY_TRACKS[selectedPersonality];

  // ==========================================================================
  // RENDER
  // ==========================================================================

  return (
    <div dir={t.dir} className="min-h-screen bg-[#FDFBF9] text-[#221D1E] font-sans selection:bg-[#5C1A2B] selection:text-white">
      {/* Subtle Luxury Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full border border-[#C5A059] bg-[#5C1A2B] px-5 py-3 text-xs font-semibold text-white shadow-xl">
          <Sparkles className="h-4 w-4 text-[#C5A059]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ==================================================================== */}
      {/* TOP NAVIGATION & LANGUAGE BAR                                        */}
      {/* ==================================================================== */}
      <header className="sticky top-0 z-40 border-b border-[#E8DFD1] bg-[#FDFBF9]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C5A059] bg-[#5C1A2B] text-[#C5A059] shadow-sm">
              <span className="font-serif text-xl font-bold tracking-wider">A</span>
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold tracking-[0.18em] text-[#5C1A2B]">
                ANOURA
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C6D2E] font-medium">
                {t.tagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-[#E8DFD1] bg-white p-1 shadow-sm">
            {[
              { id: 'lounge', label: t.nav.lounge, icon: MessageSquare },
              { id: 'muslim', label: t.nav.muslim, icon: Moon },
              { id: 'boutique', label: t.nav.boutique, icon: Store },
              { id: 'charity', label: t.nav.charity, icon: HandHeart },
              { id: 'fitness', label: t.nav.fitness, icon: Dumbbell },
              { id: 'ai', label: t.nav.ai, icon: Sparkles },
              { id: 'planner', label: t.nav.planner, icon: Calendar },
              { id: 'vault', label: t.nav.vault, icon: Gift },
              { id: 'revenue', label: t.nav.revenue, icon: BadgeDollarSign }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#5C1A2B] text-white shadow-sm'
                      : 'text-[#6E6365] hover:bg-[#FDFBF9] hover:text-[#5C1A2B]'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 text-[#C5A059]" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Language Switcher & Primary CTA */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleInstallMobileApp}
              className="flex items-center gap-1 rounded-full border border-[#C5A059] bg-white px-3 py-1.5 text-[11px] font-bold text-[#5C1A2B] hover:bg-[#C5A059]/10"
              title="Install App on Phone"
            >
              <Download className="h-3.5 w-3.5 text-[#C5A059]" />
              <span className="hidden md:inline">{lang === 'ar' ? 'تثبيت التطبيق' : 'Install App'}</span>
            </button>

            <div className="flex items-center gap-1 rounded-full border border-[#E8DFD1] bg-white px-2.5 py-1.5">
              <Globe className="h-3.5 w-3.5 text-[#C5A059]" />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                aria-label="Language"
                className="bg-transparent text-xs font-bold text-[#5C1A2B] focus:outline-none cursor-pointer"
              >
                <option value="en">EN</option>
                <option value="ar">عربي</option>
                <option value="fr">FR</option>
                <option value="de">DE</option>
              </select>
            </div>

            <button
              onClick={() => setIsNewPostOpen(true)}
              className="flex items-center gap-1.5 rounded-full border border-[#C5A059] bg-[#5C1A2B] px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] hover:bg-[#461220]"
            >
              <Plus className="h-3.5 w-3.5 text-[#C5A059]" />
              <span className="hidden sm:inline">{t.shareStory}</span>
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Strip */}
        <div className="flex lg:hidden items-center justify-between border-t border-[#E8DFD1] bg-white px-2 py-2 overflow-x-auto gap-1">
          {[
            { id: 'lounge', label: t.nav.lounge, icon: MessageSquare },
            { id: 'muslim', label: t.nav.muslim, icon: Moon },
            { id: 'boutique', label: t.nav.boutique, icon: Store },
            { id: 'charity', label: t.nav.charity, icon: HandHeart },
            { id: 'fitness', label: t.nav.fitness, icon: Dumbbell },
            { id: 'ai', label: t.nav.ai, icon: Sparkles },
            { id: 'planner', label: t.nav.planner, icon: Calendar },
            { id: 'vault', label: t.nav.vault, icon: Gift },
            { id: 'revenue', label: t.nav.revenue, icon: BadgeDollarSign }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-1 rounded-xl px-2.5 py-1 text-[10px] font-medium whitespace-nowrap transition-colors ${
                  isActive ? 'bg-[#5C1A2B]/8 text-[#5C1A2B] font-bold' : 'text-[#6E6365]'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-[#5C1A2B]' : 'text-[#C5A059]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* ==================================================================== */}
      {/* EDITORIAL HERO BANNER                                                */}
      {/* ==================================================================== */}
      <section className="border-b border-[#E8DFD1] bg-gradient-to-b from-white to-[#FDFBF9] py-6 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 px-3 py-1 text-[11px] font-semibold text-[#8C6D2E] mb-2">
              <Sparkles className="h-3 w-3 text-[#C5A059]" />
              <span>{t.heroBadge}</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#5C1A2B]">
              {t.heroTitles[activeTab]}
            </h2>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-[#E8DFD1] bg-white px-4 py-2.5 shadow-sm">
            <div className="text-center px-2">
              <p className="font-serif text-base font-bold text-[#5C1A2B]">{posts.length}</p>
              <p className="text-[10px] uppercase tracking-wider text-[#6E6365]">{t.stats.discussions}</p>
            </div>
            <div className="h-7 w-px bg-[#E8DFD1]" />
            <div className="text-center px-2">
              <p className="font-serif text-base font-bold text-[#5C1A2B]">{boutiqueItems.length}</p>
              <p className="text-[10px] uppercase tracking-wider text-[#6E6365]">{t.nav.boutique}</p>
            </div>
            <div className="h-7 w-px bg-[#E8DFD1]" />
            <div className="text-center px-2">
              <p className="font-serif text-base font-bold text-[#C5A059]">{PRINTABLE_TEMPLATES.length}</p>
              <p className="text-[10px] uppercase tracking-wider text-[#6E6365]">{t.stats.vault}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* MAIN CONTENT AREA                                                    */}
      {/* ==================================================================== */}
      <main className="mx-auto max-w-7xl px-4 py-7 sm:px-6">
        {/* ================================================================== */}
        {/* TAB 1: THE LOUNGE (REDDIT-STYLE WOMEN'S FORUM + AD SLOTS)          */}
        {/* ================================================================== */}
        {activeTab === 'lounge' && (
          <div className="space-y-6">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {['All', 'Recipes & Kitchen', 'Muslim Sisterhood', 'Career & Glow-Up', 'Home & Organization'].map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all ${
                      selectedCategory === cat
                        ? 'border-[#5C1A2B] bg-[#5C1A2B] text-white'
                        : 'border-[#E8DFD1] bg-white text-[#6E6365] hover:border-[#C5A059] hover:text-[#5C1A2B]'
                    }`}
                  >
                    {tr(CATEGORY_LABELS[cat])}
                  </button>
                )
              )}
            </div>

            {/* Posts Feed */}
            <div className="space-y-5">
              {filteredPosts.map((post, idx) => (
                <React.Fragment key={post.id}>
                  <article className="rounded-3xl border border-[#E8DFD1] bg-white p-5 sm:p-6 shadow-sm transition-all hover:border-[#C5A059]/70">
                    <div className="flex items-start gap-4">
                      {/* Reddit-style Vote Pill */}
                      <div className="flex flex-col items-center rounded-2xl border border-[#E8DFD1] bg-[#FDFBF9] px-2 py-1.5">
                        <button
                          onClick={() => handleVote(post.id, 1)}
                          className={`p-1 rounded-lg transition-colors ${
                            post.userVote === 1 ? 'text-[#5C1A2B]' : 'text-[#6E6365] hover:text-[#5C1A2B]'
                          }`}
                        >
                          <ArrowBigUp className="h-5 w-5" />
                        </button>
                        <span className="text-xs font-bold text-[#5C1A2B]">{post.upvotes}</span>
                        <button
                          onClick={() => handleVote(post.id, -1)}
                          className={`p-1 rounded-lg transition-colors ${
                            post.userVote === -1 ? 'text-[#C5A059]' : 'text-[#6E6365] hover:text-[#C5A059]'
                          }`}
                        >
                          <ArrowBigDown className="h-5 w-5" />
                        </button>
                      </div>

                      {/* Post Body */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#6E6365] mb-1.5">
                          <span className="font-bold text-[#5C1A2B]">{post.author}</span>
                          <span className="rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#8C6D2E]">
                            {tr(post.badge)}
                          </span>
                          <span>• {tr(post.time)}</span>
                        </div>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#221D1E] mb-2">
                          {tr(post.title)}
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed text-[#221D1E]/85 mb-4">
                          {tr(post.content)}
                        </p>

                        {/* Shared Dish / Lifestyle Photo */}
                        {post.image && (
                          <div className="mb-4 overflow-hidden rounded-2xl border border-[#C5A059]/40 bg-[#FDFBF9]">
                            <img
                              src={post.image}
                              alt={tr(post.title)}
                              className="max-h-72 w-full object-cover"
                            />
                          </div>
                        )}

                        {/* Shared Cooking Video */}
                        {post.videoUrl && (
                          <div className="mb-4 overflow-hidden rounded-2xl border border-[#C5A059] bg-black">
                            <video src={post.videoUrl} controls className="max-h-72 w-full" />
                          </div>
                        )}

                        {/* Comment Toggle */}
                        <button
                          onClick={() =>
                            setExpandedComments((prev) => ({ ...prev, [post.id]: !prev[post.id] }))
                          }
                          className="inline-flex items-center gap-1.5 rounded-full border border-[#E8DFD1] bg-[#FDFBF9] px-3.5 py-1.5 text-xs font-semibold text-[#5C1A2B] hover:border-[#C5A059]"
                        >
                          <MessageCircle className="h-3.5 w-3.5 text-[#C5A059]" />
                          <span>
                            {post.comments.length} {t.ui.comments}
                          </span>
                        </button>

                        {/* Comments Drawer */}
                        {expandedComments[post.id] && (
                          <div className="mt-4 space-y-3 border-t border-[#E8DFD1] pt-4">
                            {post.comments.map((c) => (
                              <div
                                key={c.id}
                                className="rounded-2xl border border-[#E8DFD1]/70 bg-[#FDFBF9] px-4 py-2.5 text-xs"
                              >
                                <span className="font-bold text-[#5C1A2B] mx-1.5">{c.author}:</span>
                                <span className="text-[#221D1E]/90">{tr(c.text)}</span>
                              </div>
                            ))}

                            <div className="flex items-center gap-2">
                              <input
                                type="text"
                                value={commentInputs[post.id] || ''}
                                onChange={(e) =>
                                  setCommentInputs((prev) => ({ ...prev, [post.id]: e.target.value }))
                                }
                                placeholder={t.ui.addCommentPlaceholder}
                                className="flex-1 rounded-full border border-[#E8DFD1] bg-white px-4 py-2 text-xs focus:border-[#C5A059] focus:outline-none"
                              />
                              <button
                                onClick={() => handleAddComment(post.id)}
                                className="rounded-full bg-[#5C1A2B] px-4 py-2 text-xs font-semibold text-white hover:bg-[#461220]"
                              >
                                {t.ui.postBtn}
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>

                  {/* Native Ad Slot every 2 posts for AdSense / Adsterra */}
                  {(idx + 1) % 2 === 0 && (
                    <div className="rounded-2xl border border-dashed border-[#C5A059] bg-gradient-to-r from-[#FDFBF9] via-white to-[#FDFBF9] p-4 text-center">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#8C6D2E]">
                        {t.ui.adLabel}
                      </p>
                      <p className="font-serif text-sm font-semibold text-[#5C1A2B] mt-1">
                        {t.ui.adText}
                      </p>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 2: MUSLIM WOMEN'S SANCTUARY (حياة المسلمة)                      */}
        {/* ================================================================== */}
        {activeTab === 'muslim' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Salah, Adhkar & Quran Wird */}
            <div className="lg:col-span-5 space-y-5">
              {/* Salah Tracker */}
              <div className="rounded-3xl border border-[#C5A059]/60 bg-white p-6 shadow-2xs">
                <div className="flex items-center gap-2 mb-4">
                  <Moon className="h-5 w-5 text-[#C5A059]" />
                  <h3 className="font-serif text-xl font-bold text-[#5C1A2B]">{t.ui.dailyPrayers}</h3>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {Object.entries(prayers).map(([name, done]) => (
                    <button
                      key={name}
                      onClick={() => setPrayers((prev) => ({ ...prev, [name]: !prev[name] }))}
                      className={`flex flex-col items-center gap-1.5 rounded-2xl border p-3 text-xs font-bold transition-all ${
                        done
                          ? 'border-[#5C1A2B] bg-[#5C1A2B] text-white'
                          : 'border-[#E8DFD1] bg-[#FDFBF9] text-[#6E6365] hover:border-[#C5A059]'
                      }`}
                    >
                      <span>{tr(PRAYER_LABELS[name])}</span>
                      {done ? (
                        <CheckCircle2 className="h-4 w-4 text-[#C5A059]" />
                      ) : (
                        <Circle className="h-4 w-4 text-[#C5A059]/60" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Morning & Evening Adhkar + Quran Wird */}
              <div className="rounded-3xl border border-[#E8DFD1] bg-white p-6 shadow-2xs space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#5C1A2B]">{t.ui.morningAdhkar}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { key: 'morning', label: lang === 'ar' ? 'أذكار الصباح' : 'Morning Adhkar' },
                    { key: 'evening', label: lang === 'ar' ? 'أذكار المساء' : 'Evening Adhkar' }
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setAdhkar((prev) => ({ ...prev, [item.key]: !prev[item.key] }))}
                      className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-xs font-semibold ${
                        adhkar[item.key]
                          ? 'border-[#C5A059] bg-[#C5A059]/15 text-[#5C1A2B]'
                          : 'border-[#E8DFD1] bg-[#FDFBF9] text-[#6E6365]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {adhkar[item.key] ? (
                        <CheckCircle2 className="h-4 w-4 text-[#5C1A2B]" />
                      ) : (
                        <Circle className="h-4 w-4 text-[#C5A059]" />
                      )}
                    </button>
                  ))}
                </div>

                <div className="border-t border-[#E8DFD1] pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-[#C5A059]" />
                    <span className="text-xs font-bold text-[#5C1A2B]">{t.ui.quranPages}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuranPages((p) => Math.max(0, p - 1))}
                      className="h-7 w-7 rounded-full border border-[#E8DFD1] bg-[#FDFBF9] font-bold text-[#5C1A2B]"
                    >
                      -
                    </button>
                    <span className="font-serif text-lg font-bold text-[#5C1A2B] px-2">{quranPages}</span>
                    <button
                      onClick={() => setQuranPages((p) => p + 1)}
                      className="h-7 w-7 rounded-full bg-[#5C1A2B] font-bold text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Spiritual Reflection & Sisterhood Circle */}
            <div className="lg:col-span-7 space-y-5">
              <div className="rounded-3xl border border-[#C5A059] bg-gradient-to-br from-[#5C1A2B] to-[#3A0E19] p-6 text-white shadow-md">
                <p className="text-[11px] uppercase tracking-widest text-[#C5A059] font-bold mb-2">
                  {lang === 'ar' ? 'إشراقة قرآنية اليوم' : 'Daily Quranic Serenity'}
                </p>
                <p className="font-serif text-xl sm:text-2xl leading-relaxed mb-3">
                  {lang === 'ar'
                    ? '﴿ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ ﴾'
                    : '“Verily, in the remembrance of Allah do hearts find rest.” (Surah Ar-Ra’d 13:28)'}
                </p>
                <p className="text-xs text-white/80">
                  {lang === 'ar'
                    ? 'خصصي 10 دقائق بعد صلاة العصر للاستغفار والدعاء لنفسكِ ولعائلتكِ.'
                    : 'Pause for 10 mindful minutes after Asr prayer for Istighfar and heartfelt dua.'}
                </p>
              </div>

              <div className="rounded-3xl border border-[#E8DFD1] bg-white p-6 shadow-2xs space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#5C1A2B]">{t.ui.muslimCircleTitle}</h3>
                {posts
                  .filter((p) => p.category === 'Muslim Sisterhood' || p.id === 'post-2')
                  .map((p) => (
                    <div key={p.id} className="rounded-2xl border border-[#E8DFD1] bg-[#FDFBF9] p-4">
                      <p className="text-xs font-bold text-[#5C1A2B] mb-1">{tr(p.title)}</p>
                      <p className="text-xs text-[#221D1E]/85 leading-relaxed">{tr(p.content)}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 3: HER BOUTIQUE (WOMEN'S MARKETPLACE)                          */}
        {/* ================================================================== */}
        {activeTab === 'boutique' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-3xl border border-[#C5A059]/60 bg-white p-6 shadow-2xs">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#5C1A2B]">{t.nav.boutique}</h2>
                <p className="text-xs text-[#6E6365] mt-1">{t.ui.boutiqueSubtitle}</p>
              </div>
              <button
                onClick={() => setIsNewProductOpen(true)}
                className="shrink-0 rounded-full border border-[#C5A059] bg-[#5C1A2B] px-5 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-[#461220]"
              >
                {t.ui.addProductBtn}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {boutiqueItems.map((item) => (
                <div
                  key={item.id}
                  className={`flex flex-col justify-between rounded-3xl border p-6 shadow-2xs transition-all ${
                    item.featured
                      ? 'border-[#C5A059] bg-gradient-to-b from-[#FDFBF9] to-white ring-1 ring-[#C5A059]/40'
                      : 'border-[#E8DFD1] bg-white hover:border-[#C5A059]'
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5">
                        {item.featured && (
                          <span className="rounded-full bg-[#C5A059] px-2.5 py-1 text-[10px] font-bold text-[#221D1E]">
                            {t.ui.featuredSponsor}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8C6D2E]">
                          <Tag className="h-3 w-3 text-[#C5A059]" />
                          <span>{tr(BOUTIQUE_CAT_LABELS[item.category]) || item.category}</span>
                        </span>
                      </div>
                      <span className="rounded-full bg-[#5C1A2B] px-3.5 py-1 text-xs font-bold text-[#C5A059]">
                        {item.price}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#5C1A2B] mb-1">{tr(item.title)}</h3>
                    <p className="text-xs font-semibold text-[#8C6D2E] mb-3">{tr(item.seller)}</p>
                    <p className="text-xs leading-relaxed text-[#221D1E]/85 mb-4">{tr(item.description)}</p>
                  </div>

                  <div className="space-y-3 border-t border-[#E8DFD1] pt-3.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-medium text-[#6E6365]">{item.contact}</span>
                      <button
                        onClick={() => showToast(`${t.ui.contactSeller}: ${item.contact}`)}
                        className="flex items-center gap-1.5 rounded-full border border-[#C5A059] bg-[#FDFBF9] px-4 py-2 text-xs font-semibold text-[#5C1A2B] hover:bg-[#5C1A2B] hover:text-white transition-colors"
                      >
                        <PhoneCall className="h-3.5 w-3.5 text-[#C5A059]" />
                        <span>{t.ui.contactSeller}</span>
                      </button>
                    </div>
                    <button
                      onClick={() => handleToggleFeaturedProduct(item.id)}
                      className="w-full rounded-full border border-dashed border-[#C5A059]/70 py-1.5 text-[11px] font-semibold text-[#8C6D2E] hover:bg-[#C5A059]/10 transition-colors"
                    >
                      {item.featured ? '★ Featured Active' : t.ui.promoteProductBtn}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 4: SISTERHOOD AID & CHARITY (ركن الخير والتكافل)               */}
        {/* ================================================================== */}
        {activeTab === 'charity' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-3xl border border-[#C5A059]/60 bg-white p-6 shadow-2xs">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#5C1A2B]">{t.nav.charity}</h2>
                <p className="text-xs text-[#6E6365] mt-1">{t.ui.charitySubtitle}</p>
              </div>
              <button
                onClick={() => setIsNewCharityOpen(true)}
                className="shrink-0 rounded-full border border-[#C5A059] bg-[#5C1A2B] px-5 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-[#461220]"
              >
                {t.ui.addAidBtn}
              </button>
            </div>

            {/* Charity Filter Bar */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: t.ui.allItems },
                { id: 'donation', label: t.ui.offerDonation },
                { id: 'urgent', label: t.ui.urgentNeed }
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setCharityFilter(f.id)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all ${
                    charityFilter === f.id
                      ? 'border-[#5C1A2B] bg-[#5C1A2B] text-white'
                      : 'border-[#E8DFD1] bg-white text-[#6E6365] hover:border-[#C5A059]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCharity.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-between rounded-3xl border border-[#E8DFD1] bg-white p-6 shadow-2xs hover:border-[#C5A059]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                          item.type === 'donation'
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : 'bg-rose-50 text-[#5C1A2B] border border-[#5C1A2B]/30'
                        }`}
                      >
                        {item.type === 'donation' ? t.ui.offerDonation : t.ui.urgentNeed}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#6E6365]">
                        <MapPin className="h-3 w-3 text-[#C5A059]" />
                        <span>{tr(item.location)}</span>
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#221D1E] mb-2">{tr(item.title)}</h3>
                    <p className="text-xs leading-relaxed text-[#221D1E]/85 mb-4">{tr(item.details)}</p>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#E8DFD1] pt-3.5">
                    <span className="text-[11px] text-[#6E6365]">
                      {item.postedBy} • {tr(item.time)}
                    </span>
                    <button
                      onClick={() => showToast(`${t.ui.helpNow}: ${item.contact}`)}
                      className="flex items-center gap-1.5 rounded-full bg-[#5C1A2B] px-4 py-2 text-xs font-semibold text-white hover:bg-[#461220]"
                    >
                      <HandHeart className="h-3.5 w-3.5 text-[#C5A059]" />
                      <span>{t.ui.helpNow}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 4B: WOMEN'S FITNESS, MEASUREMENTS TABLE & MOTIVATION           */}
        {/* ================================================================== */}
        {activeTab === 'fitness' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left 7 Cols: Weight & Body Measurements Tracker Table */}
              <div className="lg:col-span-7 space-y-5">
                <div className="rounded-3xl border border-[#C5A059]/60 bg-white p-6 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 border-b border-[#E8DFD1] pb-3">
                    <Scale className="h-5 w-5 text-[#5C1A2B]" />
                    <h3 className="font-serif text-xl font-bold text-[#5C1A2B]">
                      {t.ui.measurementsTable}
                    </h3>
                  </div>

                  {/* Form to Log New Measurements */}
                  <form onSubmit={handleAddMeasurement} className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    <input
                      type="number"
                      step="0.1"
                      required
                      placeholder={t.ui.currentWeight}
                      value={newMeasure.weight}
                      onChange={(e) => setNewMeasure({ ...newMeasure, weight: e.target.value })}
                      className="rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-3 py-2 text-xs focus:border-[#C5A059] focus:outline-none"
                    />
                    <input
                      type="number"
                      placeholder={t.ui.waistCm}
                      value={newMeasure.waist}
                      onChange={(e) => setNewMeasure({ ...newMeasure, waist: e.target.value })}
                      className="rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-3 py-2 text-xs focus:border-[#C5A059] focus:outline-none"
                    />
                    <input
                      type="number"
                      placeholder={t.ui.hipsCm}
                      value={newMeasure.hips}
                      onChange={(e) => setNewMeasure({ ...newMeasure, hips: e.target.value })}
                      className="rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-3 py-2 text-xs focus:border-[#C5A059] focus:outline-none"
                    />
                    <input
                      type="number"
                      placeholder={t.ui.chestCm}
                      value={newMeasure.chest}
                      onChange={(e) => setNewMeasure({ ...newMeasure, chest: e.target.value })}
                      className="rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-3 py-2 text-xs focus:border-[#C5A059] focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="col-span-2 sm:col-span-1 rounded-xl bg-[#5C1A2B] px-3 py-2 text-xs font-semibold text-white hover:bg-[#461220]"
                    >
                      +
                    </button>
                  </form>

                  {/* Measurements History Table */}
                  <div className="overflow-x-auto rounded-2xl border border-[#E8DFD1]">
                    <table className="w-full text-xs">
                      <thead className="bg-[#FDFBF9] text-[#5C1A2B] border-b border-[#E8DFD1]">
                        <tr>
                          <th className="px-3 py-2.5 text-start font-bold">Date</th>
                          <th className="px-3 py-2.5 text-start font-bold">{t.ui.currentWeight}</th>
                          <th className="px-3 py-2.5 text-start font-bold">{t.ui.waistCm}</th>
                          <th className="px-3 py-2.5 text-start font-bold">{t.ui.hipsCm}</th>
                          <th className="px-3 py-2.5 text-start font-bold">{t.ui.chestCm}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8DFD1]">
                        {measurements.map((row) => (
                          <tr key={row.id} className="hover:bg-[#FDFBF9]/60">
                            <td className="px-3 py-2.5 font-medium text-[#6E6365]">{row.date}</td>
                            <td className="px-3 py-2.5 font-bold text-[#5C1A2B]">{row.weight} kg</td>
                            <td className="px-3 py-2.5 text-[#221D1E]">{row.waist} cm</td>
                            <td className="px-3 py-2.5 text-[#221D1E]">{row.hips} cm</td>
                            <td className="px-3 py-2.5 text-[#221D1E]">{row.chest} cm</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Daily Home & Gym Workout Cards */}
                <div className="rounded-3xl border border-[#E8DFD1] bg-white p-6 shadow-sm space-y-4">
                  <div className="flex items-center gap-2">
                    <Dumbbell className="h-5 w-5 text-[#C5A059]" />
                    <h3 className="font-serif text-xl font-bold text-[#5C1A2B]">{t.ui.workoutPlan}</h3>
                  </div>
                  <div className="space-y-3">
                    {WORKOUT_ROUTINES.map((w) => {
                      const isDone = !!completedWorkouts[w.id];
                      return (
                        <div
                          key={w.id}
                          className={`flex items-center justify-between gap-4 rounded-2xl border p-4 transition-all ${
                            isDone ? 'border-emerald-300 bg-emerald-50/40' : 'border-[#E8DFD1] bg-[#FDFBF9]'
                          }`}
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-serif text-sm font-bold text-[#5C1A2B]">{tr(w.day)}</span>
                              <span className="inline-flex items-center gap-1 rounded-full bg-[#C5A059]/15 px-2.5 py-0.5 text-[10px] font-bold text-[#8C6D2E]">
                                <Flame className="h-3 w-3 text-[#C5A059]" />
                                {w.duration} • {w.calories}
                              </span>
                            </div>
                            <p className="text-xs text-[#221D1E]/85">{tr(w.exercises)}</p>
                          </div>
                          <button
                            onClick={() =>
                              setCompletedWorkouts((prev) => ({ ...prev, [w.id]: !prev[w.id] }))
                            }
                            className="shrink-0 text-[#5C1A2B]"
                          >
                            {isDone ? (
                              <CheckCircle2 className="h-6 w-6 text-emerald-700" />
                            ) : (
                              <Circle className="h-6 w-6 text-[#C5A059]" />
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* YouTube Workout Video Selector + Monetized Click Gate */}
                <div className="rounded-3xl border border-[#C5A059]/70 bg-white p-6 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8DFD1] pb-3">
                    <div className="flex items-center gap-2">
                      <Play className="h-5 w-5 text-[#5C1A2B]" />
                      <h3 className="font-serif text-xl font-bold text-[#5C1A2B]">
                        {t.ui.fitnessVideosTitle}
                      </h3>
                    </div>
                    <span className="rounded-full bg-[#C5A059]/15 px-3 py-1 text-[10px] font-bold text-[#8C6D2E]">
                      CPC/Ad Clicks: {adClickCount}
                    </span>
                  </div>

                  {/* Workout Category Selector Pills */}
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(FITNESS_VIDEO_CATEGORIES).map(([catKey, catData]) => (
                      <button
                        key={catKey}
                        onClick={() => setSelectedWorkoutCat(catKey)}
                        className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all ${
                          selectedWorkoutCat === catKey
                            ? 'border-[#5C1A2B] bg-[#5C1A2B] text-white'
                            : 'border-[#E8DFD1] bg-[#FDFBF9] text-[#6E6365] hover:border-[#C5A059]'
                        }`}
                      >
                        {tr(catData.label)}
                      </button>
                    ))}
                  </div>

                  {/* Video Cards with Monetized YouTube Link Gate */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {FITNESS_VIDEO_CATEGORIES[selectedWorkoutCat].videos.map((vid) => (
                      <div
                        key={vid.id}
                        className="flex flex-col justify-between rounded-2xl border border-[#E8DFD1] bg-[#FDFBF9] overflow-hidden"
                      >
                        <div
                          className={`bg-gradient-to-br ${vid.thumbColor} p-5 text-white flex flex-col justify-between min-h-[120px]`}
                        >
                          <span className="self-end rounded-full bg-black/40 px-2.5 py-0.5 text-[10px] font-bold">
                            {vid.duration}
                          </span>
                          <p className="font-serif text-sm font-bold leading-snug">{tr(vid.title)}</p>
                        </div>
                        <div className="p-3.5">
                          <button
                            onClick={() => {
                              setAdClickCount((c) => c + 1);
                              setMonetizedVideoGate(vid);
                              setVideoGateTimer(3);
                            }}
                            className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#5C1A2B] px-4 py-2 text-xs font-semibold text-white hover:bg-[#461220]"
                          >
                            <ExternalLink className="h-3.5 w-3.5 text-[#C5A059]" />
                            <span>{t.ui.watchMonetizedVideo}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right 5 Cols: Sisterhood Motivation & Progress Wall */}
              <div className="lg:col-span-5 space-y-5">
                <div className="rounded-3xl border border-[#C5A059]/60 bg-white p-6 shadow-sm space-y-4">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-[#C5A059]" />
                    <h3 className="font-serif text-xl font-bold text-[#5C1A2B]">{t.ui.motivationBoard}</h3>
                  </div>

                  <form onSubmit={handleAddMotivation} className="flex gap-2">
                    <input
                      type="text"
                      value={newMotivationText}
                      onChange={(e) => setNewMotivationText(e.target.value)}
                      placeholder={
                        lang === 'ar'
                          ? 'شاركي إنجازكِ الرياضي أو شجعي أخواتكِ...'
                          : 'Share your workout win or cheer sisters...'
                      }
                      className="flex-1 rounded-full border border-[#E8DFD1] bg-[#FDFBF9] px-4 py-2 text-xs focus:border-[#C5A059] focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="rounded-full bg-[#5C1A2B] px-4 py-2 text-xs font-semibold text-white hover:bg-[#461220]"
                    >
                      {t.ui.postBtn}
                    </button>
                  </form>

                  <div className="space-y-3">
                    {motivationWall.map((m) => (
                      <div key={m.id} className="rounded-2xl border border-[#E8DFD1] bg-[#FDFBF9] p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#5C1A2B]">{m.author}</span>
                          <span className="rounded-full bg-[#C5A059]/15 px-2.5 py-0.5 text-[10px] font-bold text-[#8C6D2E]">
                            {tr(m.badge)}
                          </span>
                        </div>
                        <p className="text-xs text-[#221D1E]/90 leading-relaxed">{tr(m.message)}</p>
                        <button
                          onClick={() =>
                            setMotivationWall((prev) =>
                              prev.map((item) =>
                                item.id === m.id ? { ...item, cheers: item.cheers + 1 } : item
                              )
                            )
                          }
                          className="inline-flex items-center gap-1.5 rounded-full border border-[#E8DFD1] bg-white px-3 py-1 text-[11px] font-semibold text-[#5C1A2B] hover:border-[#C5A059]"
                        >
                          <Heart className="h-3 w-3 text-[#5C1A2B]" />
                          <span>{m.cheers}</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 5: ANOURA AI ASSISTANT                                         */}
        {/* ================================================================== */}
        {activeTab === 'ai' && (
          <div className="mx-auto max-w-3xl rounded-3xl border border-[#C5A059]/60 bg-white shadow-2xs overflow-hidden">
            <div className="border-b border-[#E8DFD1] bg-[#FDFBF9] px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5C1A2B] text-[#C5A059]">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#5C1A2B]">{t.nav.ai}</h3>
                  <p className="text-[11px] text-[#8C6D2E]">
                    {lang === 'ar'
                      ? 'متاحة باللغات الأربع: العربية، الإنجليزية، الفرنسية، والألمانية'
                      : 'Multilingual Concierge • EN / AR / FR / DE'}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Suggestion Chips */}
            <div className="flex flex-wrap gap-2 border-b border-[#E8DFD1] bg-white px-6 py-3">
              {[
                lang === 'ar' ? 'اقترحي لي جدول وجبات جزائري صحي' : 'Algerian healthy weekly meal plan',
                lang === 'ar' ? 'نظمي لي ساعة يومية لتعلم البرمجة' : '60-min daily coding routine',
                lang === 'ar' ? 'روتين مسائي للاسترخاء والعناية بالنفس' : '15-min evening self-care ritual'
              ].map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleSendChat(chip)}
                  className="rounded-full border border-[#C5A059]/50 bg-[#FDFBF9] px-3 py-1 text-[11px] font-medium text-[#5C1A2B] hover:bg-[#5C1A2B] hover:text-white transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto p-6 space-y-4 bg-[#FDFBF9]/50">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-3 text-xs leading-relaxed whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-[#5C1A2B] text-white'
                        : 'border border-[#C5A059]/60 bg-white text-[#221D1E] shadow-2xs'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendChat();
              }}
              className="flex items-center gap-2 border-t border-[#E8DFD1] bg-white p-4"
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder={
                  lang === 'ar'
                    ? 'اسألي أنورا عن وصفة، تنظيم وقت، أو خطة تعلم...'
                    : 'Ask Anoura for a recipe, time block, or skill plan...'
                }
                className="flex-1 rounded-full border border-[#E8DFD1] bg-[#FDFBF9] px-4 py-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5C1A2B] text-[#C5A059] hover:bg-[#461220]"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 6: MY PLANNER (NATIONALITY MEALS + PERSONALITY ME-TIME)        */}
        {/* ================================================================== */}
        {activeTab === 'planner' && (
          <div className="space-y-6">
            {/* Sub-Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'meals', label: t.plannerTabs.meals, icon: Utensils },
                { id: 'recipes', label: t.plannerTabs.recipes, icon: ChefHat },
                { id: 'metime', label: t.plannerTabs.metime, icon: Compass },
                { id: 'daily', label: t.plannerTabs.daily, icon: Clock }
              ].map((sub) => {
                const Icon = sub.icon;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setPlannerSubTab(sub.id)}
                    className={`flex items-center gap-2 rounded-full border px-5 py-2 text-xs font-semibold transition-all ${
                      plannerSubTab === sub.id
                        ? 'border-[#5C1A2B] bg-[#5C1A2B] text-white'
                        : 'border-[#E8DFD1] bg-white text-[#6E6365] hover:border-[#C5A059]'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5 text-[#C5A059]" />
                    <span>{sub.label}</span>
                  </button>
                );
              })}
            </div>

            {/* SUB-TAB A2: PHOTO RECIPES & COOKING VIDEO CREATOR STUDIO */}
            {plannerSubTab === 'recipes' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left 5 Cols: Create Recipe with Photo & Record Cooking Video */}
                <div className="lg:col-span-5">
                  <div className="rounded-3xl border border-[#C5A059] bg-white p-6 shadow-sm space-y-4">
                    <div className="flex items-center gap-2 border-b border-[#E8DFD1] pb-3">
                      <ChefHat className="h-5 w-5 text-[#5C1A2B]" />
                      <h3 className="font-serif text-lg font-bold text-[#5C1A2B]">
                        {t.ui.recipeStudioTitle}
                      </h3>
                    </div>

                    <form onSubmit={handlePublishCustomRecipe} className="space-y-3">
                      <input
                        type="text"
                        required
                        placeholder={lang === 'ar' ? 'اسم الطبق أو الوصفة' : 'Dish / Recipe Name'}
                        value={newRecipeForm.title}
                        onChange={(e) => setNewRecipeForm({ ...newRecipeForm, title: e.target.value })}
                        className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-4 py-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder={lang === 'ar' ? 'اسم الطاهية' : 'Your Name'}
                          value={newRecipeForm.chef}
                          onChange={(e) => setNewRecipeForm({ ...newRecipeForm, chef: e.target.value })}
                          className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-3 py-2 text-xs focus:border-[#C5A059] focus:outline-none"
                        />
                        <input
                          type="text"
                          placeholder={lang === 'ar' ? 'مدة التحضير' : 'Prep Time'}
                          value={newRecipeForm.prepTime}
                          onChange={(e) => setNewRecipeForm({ ...newRecipeForm, prepTime: e.target.value })}
                          className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-3 py-2 text-xs focus:border-[#C5A059] focus:outline-none"
                        />
                      </div>
                      <textarea
                        rows={3}
                        required
                        placeholder={
                          lang === 'ar'
                            ? 'المقادير وطريقة التحضير...'
                            : 'Ingredients & step-by-step preparation...'
                        }
                        value={newRecipeForm.ingredients}
                        onChange={(e) =>
                          setNewRecipeForm({ ...newRecipeForm, ingredients: e.target.value })
                        }
                        className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-4 py-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
                      />

                      {/* Dish Photo Upload */}
                      <div className="rounded-2xl border border-dashed border-[#C5A059] bg-[#FDFBF9] p-3 space-y-2">
                        <label className="flex items-center justify-between text-xs font-semibold text-[#5C1A2B] cursor-pointer">
                          <span className="flex items-center gap-1.5">
                            <ImageIcon className="h-4 w-4 text-[#C5A059]" />
                            <span>{t.ui.addRecipePhoto}</span>
                          </span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              handleFileUpload(e.target.files?.[0], (url) =>
                                setNewRecipeForm((prev) => ({ ...prev, image: url }))
                              )
                            }
                            className="hidden"
                          />
                          <span className="rounded-full bg-[#5C1A2B] px-3 py-1 text-[10px] text-white">
                            + Photo
                          </span>
                        </label>
                        {newRecipeForm.image && (
                          <img
                            src={newRecipeForm.image}
                            alt="Preview"
                            className="h-28 w-full rounded-xl object-cover"
                          />
                        )}
                      </div>

                      {/* Record Live Cooking Video or Upload Video */}
                      <div className="rounded-2xl border border-dashed border-[#C5A059] bg-[#FDFBF9] p-3 space-y-2">
                        <p className="text-xs font-semibold text-[#5C1A2B] flex items-center gap-1.5">
                          <Video className="h-4 w-4 text-[#C5A059]" />
                          <span>{t.ui.recordCookingVideo}</span>
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={handleToggleCookingRecorder}
                            className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-semibold text-white ${
                              isRecordingCooking ? 'bg-rose-700 animate-pulse' : 'bg-[#5C1A2B]'
                            }`}
                          >
                            <Camera className="h-3.5 w-3.5 text-[#C5A059]" />
                            <span>
                              {isRecordingCooking
                                ? lang === 'ar'
                                  ? 'إيقاف وحفظ الفيديو'
                                  : 'Stop & Save Video'
                                : lang === 'ar'
                                ? 'بدء تصوير فيديو الطبخ'
                                : 'Record Live Video'}
                            </span>
                          </button>
                          <label className="cursor-pointer rounded-full border border-[#5C1A2B] bg-white px-3.5 py-1.5 text-[11px] font-semibold text-[#5C1A2B]">
                            <span>{lang === 'ar' ? 'رفع فيديو جاهز' : 'Upload Video'}</span>
                            <input
                              type="file"
                              accept="video/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const url = URL.createObjectURL(file);
                                  setNewRecipeForm((prev) => ({ ...prev, videoUrl: url }));
                                }
                              }}
                              className="hidden"
                            />
                          </label>
                        </div>
                        {newRecipeForm.videoUrl && (
                          <video
                            src={newRecipeForm.videoUrl}
                            controls
                            className="h-32 w-full rounded-xl bg-black"
                          />
                        )}
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-full bg-[#5C1A2B] py-3 text-xs font-semibold text-white hover:bg-[#461220]"
                      >
                        {t.ui.shareRecipeBtn}
                      </button>
                    </form>
                  </div>
                </div>

                {/* Right 7 Cols: Community Recipe & Cooking Video Showcase */}
                <div className="lg:col-span-7 space-y-4">
                  {customRecipes.map((rec) => (
                    <div
                      key={rec.id}
                      className="rounded-3xl border border-[#E8DFD1] bg-white p-5 shadow-sm space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-serif text-xl font-bold text-[#5C1A2B]">{tr(rec.title)}</h4>
                          <p className="text-[11px] font-semibold text-[#8C6D2E]">
                            {rec.chef} • {rec.prepTime}
                          </p>
                        </div>
                      </div>
                      {rec.image && (
                        <img
                          src={rec.image}
                          alt={tr(rec.title)}
                          className="h-56 w-full rounded-2xl object-cover border border-[#E8DFD1]"
                        />
                      )}
                      {rec.videoUrl && (
                        <video
                          src={rec.videoUrl}
                          controls
                          className="h-60 w-full rounded-2xl bg-black border border-[#C5A059]"
                        />
                      )}
                      <p className="text-xs leading-relaxed text-[#221D1E]/85 bg-[#FDFBF9] p-3.5 rounded-2xl border border-[#E8DFD1]">
                        {tr(rec.ingredients)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SUB-TAB A: MEALS BY NATIONALITY & GROCERY LIST */}
            {plannerSubTab === 'meals' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 space-y-5">
                  {/* Cuisine / Nationality Selector */}
                  <div className="rounded-3xl border border-[#C5A059]/60 bg-white p-5 shadow-2xs">
                    <p className="text-xs font-bold text-[#5C1A2B] mb-3">{t.ui.chooseCuisine}</p>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(CUISINE_PLANS).map(([key, plan]) => (
                        <button
                          key={key}
                          onClick={() => handleSelectCuisine(key)}
                          className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                            selectedCuisine === key
                              ? 'border-[#C5A059] bg-[#5C1A2B] text-white'
                              : 'border-[#E8DFD1] bg-[#FDFBF9] text-[#221D1E] hover:border-[#C5A059]'
                          }`}
                        >
                          {plan.label[lang]}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 7-Day Meal Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(weeklyMeals).map(([day, slots]) => (
                      <div
                        key={day}
                        className="rounded-3xl border border-[#E8DFD1] bg-white p-5 shadow-2xs space-y-2.5"
                      >
                        <h4 className="font-serif text-lg font-bold text-[#5C1A2B] border-b border-[#E8DFD1] pb-2">
                          {tr(DAY_LABELS[day])}
                        </h4>
                        {[
                          { key: 'breakfast', label: t.ui.breakfast },
                          { key: 'lunch', label: t.ui.lunch },
                          { key: 'dinner', label: t.ui.dinner }
                        ].map((mealSlot) => (
                          <div key={mealSlot.key}>
                            <label className="text-[10px] font-bold uppercase tracking-wider text-[#8C6D2E]">
                              {mealSlot.label}
                            </label>
                            <input
                              type="text"
                              value={tr(slots[mealSlot.key])}
                              onChange={(e) => handleMealChange(day, mealSlot.key, e.target.value)}
                              className="w-full rounded-xl border border-[#E8DFD1]/80 bg-[#FDFBF9] px-3 py-1.5 text-xs text-[#221D1E] focus:border-[#C5A059] focus:outline-none"
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Smart Grocery Sidebar */}
                <div className="lg:col-span-4">
                  <div className="sticky top-24 rounded-3xl border border-[#C5A059]/60 bg-white p-6 shadow-2xs space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-xl font-bold text-[#5C1A2B]">{t.ui.groceryList}</h3>
                      <button
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-1 rounded-full border border-[#E8DFD1] bg-[#FDFBF9] px-3 py-1 text-[11px] font-semibold text-[#5C1A2B] hover:border-[#C5A059]"
                      >
                        <Printer className="h-3 w-3 text-[#C5A059]" />
                        <span>{t.ui.printMenu}</span>
                      </button>
                    </div>

                    <form onSubmit={handleAddGrocery} className="flex gap-2">
                      <input
                        type="text"
                        value={newGroceryItem}
                        onChange={(e) => setNewGroceryItem(e.target.value)}
                        placeholder={t.ui.addIngredient}
                        className="flex-1 rounded-full border border-[#E8DFD1] bg-[#FDFBF9] px-3.5 py-2 text-xs focus:border-[#C5A059] focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="rounded-full bg-[#5C1A2B] px-3.5 py-2 text-xs font-bold text-white"
                      >
                        +
                      </button>
                    </form>

                    <ul className="space-y-2 max-h-96 overflow-y-auto">
                      {groceries.map((item) => (
                        <li
                          key={item.id}
                          className="flex items-center justify-between rounded-xl border border-[#E8DFD1]/70 bg-[#FDFBF9] px-3 py-2 text-xs"
                        >
                          <button
                            onClick={() =>
                              setGroceries((prev) =>
                                prev.map((g) => (g.id === item.id ? { ...g, checked: !g.checked } : g))
                              )
                            }
                            className="flex items-center gap-2 text-start"
                          >
                            {item.checked ? (
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5C1A2B]" />
                            ) : (
                              <Circle className="h-4 w-4 shrink-0 text-[#C5A059]" />
                            )}
                            <span className={item.checked ? 'line-through text-[#6E6365]' : 'text-[#221D1E]'}>
                              {tr(item.text)}
                            </span>
                          </button>
                          <button
                            onClick={() => setGroceries((prev) => prev.filter((g) => g.id !== item.id))}
                            className="text-[#6E6365] hover:text-rose-700"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* SUB-TAB B: PERSONALITY & SACRED ME-TIME STUDIO */}
            {plannerSubTab === 'metime' && (
              <div className="space-y-6">
                <div className="rounded-3xl border border-[#C5A059]/60 bg-white p-6 shadow-2xs">
                  <h3 className="font-serif text-xl font-bold text-[#5C1A2B] mb-4">
                    {t.ui.choosePersonality}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(PERSONALITY_TRACKS).map(([key, track]) => {
                      const isSelected = selectedPersonality === key;
                      return (
                        <button
                          key={key}
                          onClick={() => {
                            setSelectedPersonality(key);
                            setMeTimeCompleted(false);
                          }}
                          className={`rounded-3xl border p-5 text-start transition-all ${
                            isSelected
                              ? 'border-[#C5A059] bg-[#5C1A2B] text-white shadow-md'
                              : 'border-[#E8DFD1] bg-[#FDFBF9] text-[#221D1E] hover:border-[#C5A059]'
                          }`}
                        >
                          <span className="text-2xl mb-2 block">{track.icon}</span>
                          <p
                            className={`font-serif text-base font-bold mb-1 ${
                              isSelected ? 'text-[#C5A059]' : 'text-[#5C1A2B]'
                            }`}
                          >
                            {track.title[lang]}
                          </p>
                          <p className={`text-xs leading-relaxed ${isSelected ? 'text-white/85' : 'text-[#6E6365]'}`}>
                            {track.desc[lang]}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Active 60-Minute Me-Time Ritual Card */}
                <div className="rounded-3xl border border-[#C5A059] bg-white p-6 sm:p-8 shadow-2xs space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8DFD1] pb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D2E]">
                        {currentPersonality.icon} {currentPersonality.title[lang]}
                      </span>
                      <h4 className="font-serif text-2xl font-bold text-[#5C1A2B] mt-1">
                        {t.ui.dailyMeTimeGoal}
                      </h4>
                    </div>
                    <button
                      onClick={() => setMeTimeCompleted(!meTimeCompleted)}
                      className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${
                        meTimeCompleted
                          ? 'bg-emerald-700 text-white'
                          : 'bg-[#5C1A2B] text-white hover:bg-[#461220]'
                      }`}
                    >
                      {meTimeCompleted ? t.ui.meTimeDone : t.ui.markMeTimeDone}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {currentPersonality.tasks[lang].map((taskText, idx) => {
                      const taskKey = `${selectedPersonality}-${idx}`;
                      const checked = !!checkedPersonalityTasks[taskKey];
                      return (
                        <button
                          key={taskKey}
                          onClick={() =>
                            setCheckedPersonalityTasks((prev) => ({ ...prev, [taskKey]: !prev[taskKey] }))
                          }
                          className={`flex items-start gap-3 rounded-2xl border p-4 text-start transition-all ${
                            checked
                              ? 'border-[#C5A059] bg-[#C5A059]/10'
                              : 'border-[#E8DFD1] bg-[#FDFBF9] hover:border-[#C5A059]'
                          }`}
                        >
                          {checked ? (
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-[#5C1A2B]" />
                          ) : (
                            <Circle className="h-5 w-5 shrink-0 text-[#C5A059]" />
                          )}
                          <span className="text-xs font-medium leading-relaxed text-[#221D1E]">{taskText}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* SUB-TAB C: DAILY FLOW & HYDRATION */}
            {plannerSubTab === 'daily' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-3xl border border-[#E8DFD1] bg-white p-6 shadow-2xs space-y-4">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-[#C5A059]" />
                    <h3 className="font-serif text-xl font-bold text-[#5C1A2B]">
                      {lang === 'ar' ? 'شرب الماء اليومي (8 أكواب)' : 'Daily Hydration (8 Glasses)'}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setWaterGlasses(i + 1)}
                        className={`h-11 w-11 rounded-2xl border font-bold text-xs transition-all ${
                          i < waterGlasses
                            ? 'border-[#5C1A2B] bg-[#5C1A2B] text-[#C5A059]'
                            : 'border-[#E8DFD1] bg-[#FDFBF9] text-[#6E6365]'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-[#E8DFD1] bg-white p-6 shadow-2xs space-y-3">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-[#C5A059]" />
                    <h3 className="font-serif text-xl font-bold text-[#5C1A2B]">
                      {lang === 'ar' ? 'ركن الامتنان والهدوء' : 'Daily Gratitude & Calm'}
                    </h3>
                  </div>
                  <textarea
                    rows={3}
                    placeholder={
                      lang === 'ar'
                        ? 'اكتبي 3 نعم تشكرين الله عليها اليوم...'
                        : 'Write 3 blessings you are grateful for today...'
                    }
                    className="w-full rounded-2xl border border-[#E8DFD1] bg-[#FDFBF9] p-3.5 text-xs focus:border-[#C5A059] focus:outline-none"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 7: FREE VAULT (AD-SUPPORTED PRINTABLES)                        */}
        {/* ================================================================== */}
        {activeTab === 'vault' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRINTABLE_TEMPLATES.map((tpl) => {
              const sections = tpl.sections[lang] || tpl.sections.en;
              return (
                <div
                  key={tpl.id}
                  className="flex flex-col justify-between rounded-3xl border border-[#E8DFD1] bg-white p-6 shadow-sm hover:border-[#C5A059] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8C6D2E]">
                        {tpl.tag}
                      </span>
                      <span className="text-[11px] font-medium text-[#6E6365]">{tpl.pages}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#5C1A2B] mb-2">
                      {tpl.title[lang]}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#6E6365] mb-4">{tpl.description[lang]}</p>

                    {/* Live Luxury Sheet Preview inside the Vault Card */}
                    <div className="mb-5 rounded-2xl border border-[#C5A059]/50 bg-[#FDFBF9] p-4 space-y-3">
                      {sections.map((sec, sIdx) => (
                        <div key={sIdx}>
                          <p className="text-[11px] font-bold text-[#5C1A2B] border-b border-[#E8DFD1] pb-1 mb-1.5">
                            {sec.heading}
                          </p>
                          <ul className="space-y-1">
                            {sec.items.slice(0, 3).map((item, iIdx) => (
                              <li key={iIdx} className="text-[11px] text-[#221D1E]/80 flex items-center gap-1.5">
                                <span className="text-[#C5A059]">✦</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setDownloadModalItem(tpl);
                      setCountdown(5);
                    }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#C5A059] bg-[#5C1A2B] py-3 text-xs font-semibold text-white hover:bg-[#461220]"
                  >
                    <Download className="h-4 w-4 text-[#C5A059]" />
                    <span>{t.ui.downloadFree}</span>
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 8: CREATOR REVENUE & MONETIZATION STUDIO (أرباح المنصة)        */}
        {/* ================================================================== */}
        {activeTab === 'revenue' && (
          <div className="space-y-6">
            {/* Hero Revenue Summary Card */}
            <div className="rounded-3xl border border-[#C5A059] bg-gradient-to-br from-[#5C1A2B] to-[#3A0E19] p-6 sm:p-8 text-white shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-[#C5A059]">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>Anoura $0-Capital Monetization Blueprint</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    {lang === 'ar'
                      ? 'كيف تربحين 300$+ يومياً من منصة Anoura؟'
                      : 'Your 4-Stream Path to $300+/Day with Anoura'}
                  </h2>
                  <p className="text-xs text-white/85 leading-relaxed">
                    {lang === 'ar'
                      ? 'المنصة مجانية بالكامل للنساء لجذب أكبر عدد من الزوار، بينما تربحين أنتِ من 4 مصادر: إعلانات الصفحات والتحميلات، تثبيت المنتجات في البوتيك، وروابط التسويق بالعمولة.'
                      : 'Keep Anoura 100% free for women to maximize traffic, while monetizing through Display Ads, PDF Vault countdown banners, Boutique Featured Spotlights, and Curated Affiliate Links.'}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#C5A059] bg-white/10 backdrop-blur-xs p-5 text-center min-w-[220px]">
                  <p className="text-[11px] uppercase tracking-widest text-[#C5A059] font-bold">
                    {lang === 'ar' ? 'الدخل اليومي المتوقع' : 'Projected Daily Income'}
                  </p>
                  <p className="font-serif text-4xl font-bold text-white my-1">
                    ${totalDailyRevenue}
                    <span className="text-sm font-normal text-white/70">/day</span>
                  </p>
                  <p className="text-xs text-[#C5A059] font-semibold">
                    ≈ ${(parseFloat(totalDailyRevenue) * 30).toLocaleString()}/month
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Revenue Simulator + Ad Network Connector */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left: Interactive 300$/Day Simulator */}
              <div className="lg:col-span-7 rounded-3xl border border-[#E8DFD1] bg-white p-6 shadow-2xs space-y-5">
                <div className="flex items-center gap-2 border-b border-[#E8DFD1] pb-3">
                  <BadgeDollarSign className="h-5 w-5 text-[#5C1A2B]" />
                  <h3 className="font-serif text-xl font-bold text-[#5C1A2B]">
                    {lang === 'ar' ? 'حاسبة الأرباح التفاعلية' : 'Interactive Revenue Simulator'}
                  </h3>
                </div>

                {/* Slider 1: Daily Visitors */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-[#221D1E]">
                      {lang === 'ar'
                        ? '1. عدد الزيارات اليومية (Pinterest / TikTok / SEO)'
                        : '1. Daily Pageviews (Pinterest / TikTok / Google)'}
                    </span>
                    <span className="text-[#5C1A2B] font-bold">{dailyVisitors.toLocaleString()} views/day</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="60000"
                    step="1000"
                    value={dailyVisitors}
                    onChange={(e) => setDailyVisitors(Number(e.target.value))}
                    className="w-full accent-[#5C1A2B]"
                  />
                  <p className="text-[11px] text-[#8C6D2E]">
                    {lang === 'ar'
                      ? `أرباح الإعلانات (AdSense / Adsterra) بسعر ${rpmRate}$ لكل 1000 ظهور = $${estimatedAdRevenue}/يوم`
                      : `Ad Network Earnings at $${rpmRate} RPM = $${estimatedAdRevenue}/day`}
                  </p>
                </div>

                {/* Slider 2: Ad RPM */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-[#221D1E]">
                      {lang === 'ar'
                        ? '2. سعر الألف ظهور للإعلان (RPM — حسب بلد الزوار)'
                        : '2. Ad RPM ($5 Global — $15 US/EU Women Niche)'}
                    </span>
                    <span className="text-[#5C1A2B] font-bold">${rpmRate} / 1k views</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="18"
                    step="1"
                    value={rpmRate}
                    onChange={(e) => setRpmRate(Number(e.target.value))}
                    className="w-full accent-[#5C1A2B]"
                  />
                </div>

                {/* Slider 3: Featured Boutique Sellers */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-[#221D1E]">
                      {lang === 'ar'
                        ? '3. بائعات يدفعن 10$ لتثبيت منتجاتهن في البوتيك'
                        : '3. Featured Boutique Spotlights ($10/slot)'}
                    </span>
                    <span className="text-[#5C1A2B] font-bold">
                      {featuredSlotsSold} slots (${estimatedSponsorRevenue}/day)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="1"
                    value={featuredSlotsSold}
                    onChange={(e) => setFeaturedSlotsSold(Number(e.target.value))}
                    className="w-full accent-[#C5A059]"
                  />
                </div>

                {/* Slider 4: Affiliate Commissions */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-[#221D1E]">
                      {lang === 'ar'
                        ? '4. عمولات التسويق بالعمولة (Amazon / أدوات المطبخ والعناية)'
                        : '4. Daily Curated Affiliate Commissions'}
                    </span>
                    <span className="text-[#5C1A2B] font-bold">${affiliateSalesDaily}/day</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="150"
                    step="5"
                    value={affiliateSalesDaily}
                    onChange={(e) => setAffiliateSalesDaily(Number(e.target.value))}
                    className="w-full accent-[#C5A059]"
                  />
                </div>
              </div>

              {/* Right: Ad Network Integration & Payout Guide */}
              <div className="lg:col-span-5 space-y-5">
                <div className="rounded-3xl border border-[#C5A059]/60 bg-white p-6 shadow-2xs space-y-4">
                  <div className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-[#C5A059]" />
                    <h3 className="font-serif text-xl font-bold text-[#5C1A2B]">
                      {lang === 'ar' ? 'ربط شبكة الإعلانات (0$)' : 'Ad Network Code Integration'}
                    </h3>
                  </div>
                  <p className="text-xs text-[#6E6365] leading-relaxed">
                    {lang === 'ar'
                      ? 'الصقي هنا كود Google AdSense أو Adsterra لتفعيله في جميع المساحات الإعلانية المدمجة داخل الصالون ومكتبة التحميل.'
                      : 'Paste your Google AdSense Publisher ID or Adsterra Banner Script below to activate live ad units across all 4 built-in placements.'}
                  </p>
                  <textarea
                    rows={3}
                    value={adNetworkScript}
                    onChange={(e) => setAdNetworkScript(e.target.value)}
                    placeholder="ca-pub-XXXXXXXXXXXXXXXX or <script src='//adsterra...'></script>"
                    className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] p-3 text-xs font-mono text-[#221D1E] focus:border-[#C5A059] focus:outline-none"
                  />
                  <button
                    onClick={() => showToast('Ad Unit configuration saved!')}
                    className="w-full rounded-full bg-[#5C1A2B] py-2.5 text-xs font-semibold text-white hover:bg-[#461220]"
                  >
                    {lang === 'ar' ? 'حفظ وتفعيل الإعلانات' : 'Save & Activate Ad Units'}
                  </button>
                </div>

                {/* How to Withdraw Money in Algeria */}
                <div className="rounded-3xl border border-[#E8DFD1] bg-[#FDFBF9] p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-[#5C1A2B] font-bold text-xs">
                    <Award className="h-4 w-4 text-[#C5A059]" />
                    <span>
                      {lang === 'ar'
                        ? 'طرق استلام الأرباح في الجزائر بدون شركة أمريكية:'
                        : 'Zero-Cost Payout Methods:'}
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-[#6E6365] leading-relaxed">
                    <li>
                      • <strong>Google AdSense:</strong> تحويل بنكي مباشر (SWIFT) لحسابك بالعملة الصعبة في الجزائر
                      (BADR / BEA / AGB).
                    </li>
                    <li>
                      • <strong>Adsterra / Monetag:</strong> يقبل الموقع من اليوم الأول ويدفع عبر{' '}
                      <strong>Payoneer</strong> أو <strong>USDT</strong>.
                    </li>
                    <li>
                      • <strong>تثبيت المنتجات في البوتيك:</strong> تستلمي محلياً عبر{' '}
                      <strong>BaridiMob / CCP</strong> ودولياً عبر <strong>Payoneer / Wise</strong>.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Shared Cloud Sync & Ready-to-Use Viral Marketing Kit */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Cloud Database Connector (Supabase Free Tier) */}
              <div className="lg:col-span-5 rounded-3xl border border-[#C5A059] bg-white p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-[#5C1A2B]">
                    {lang === 'ar'
                      ? '1. ربط قاعدة البيانات المشتركة (Supabase مجاني)'
                      : '1. Shared Global Database (Free Supabase)'}
                  </h3>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                      cloudConnected ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {cloudConnected ? '● Live Cloud' : 'Local Mode'}
                  </span>
                </div>
                <p className="text-xs text-[#6E6365] leading-relaxed">
                  {lang === 'ar'
                    ? 'افتحي حساباً مجانياً في Supabase.com وأنشئي جدولاً باسم anoura_posts (عمود payload من نوع jsonb)، ثم الصقي الرابط والمفتاح هنا لتصبح المنشورات مشتركة بين كل النساء في العالم:'
                    : 'Create a free project on Supabase.com with table anoura_posts (column: payload jsonb) and paste your URL & Anon Key so all women share live posts globally:'}
                </p>
                <input
                  type="url"
                  value={supabaseUrl}
                  onChange={(e) => setSupabaseUrl(e.target.value)}
                  placeholder="https://xyzcompany.supabase.co"
                  className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-3.5 py-2 text-xs focus:border-[#C5A059] focus:outline-none"
                />
                <input
                  type="password"
                  value={supabaseKey}
                  onChange={(e) => setSupabaseKey(e.target.value)}
                  placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                  className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-3.5 py-2 text-xs focus:border-[#C5A059] focus:outline-none"
                />
                <button
                  onClick={handleSaveCloudConfig}
                  className="w-full rounded-full bg-[#5C1A2B] py-2.5 text-xs font-semibold text-white hover:bg-[#461220]"
                >
                  {lang === 'ar' ? 'تفعيل المزامنة السحابية المشتركة' : 'Connect Shared Cloud'}
                </button>
              </div>

              {/* Ready-to-Copy Viral TikTok & Pinterest Content Plan */}
              <div className="lg:col-span-7 rounded-3xl border border-[#E8DFD1] bg-white p-6 shadow-sm space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#5C1A2B]">
                  {lang === 'ar'
                    ? '2. خطة المحتوى الجاهزة لجلب الزوار مجاناً (TikTok & Pinterest)'
                    : '2. Ready-to-Copy Viral Traffic Hooks (TikTok & Pinterest)'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      platform: 'Pinterest Pin #1 (US/EU Traffic)',
                      hook: '“Free Aesthetic Weekly Meal Planner & Auto Grocery List for Busy Women ✨ Download Printable PDF”'
                    },
                    {
                      platform: 'TikTok / Reels #1 (عربي / جزائري)',
                      hook: '«تطبيق مجاني ينظم لك جدول الطبخ الجزائري والسعودي والرجيم ويخرجلك قائمة المقاضي بضغطة زر! الرابط في البايو»'
                    },
                    {
                      platform: 'Pinterest Pin #2 (Wellness & Fitness)',
                      hook: '“30-Day Feminine Glow-Up, Body Measurement Tracker & Home Pilates Schedule (100% Free Sanctuary)”'
                    },
                    {
                      platform: 'TikTok / Reels #2 (Muslim Women)',
                      hook: '«أجمل مساحة رقمية للمرأة المسلمة: متابعة الصلوات، الورد القرآني، وساعة يومية لتعلم حرفة أو لغة جديدة مجاناً»'
                    }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col justify-between rounded-2xl border border-[#E8DFD1] bg-[#FDFBF9] p-3.5 space-y-2"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6D2E]">
                        {item.platform}
                      </span>
                      <p className="text-xs text-[#221D1E] leading-relaxed">{item.hook}</p>
                      <button
                        onClick={() => {
                          navigator.clipboard?.writeText(item.hook);
                          showToast(lang === 'ar' ? 'تم نسخ النص التسويقي!' : 'Viral hook copied!');
                        }}
                        className="self-start rounded-full border border-[#C5A059] bg-white px-3 py-1 text-[10px] font-semibold text-[#5C1A2B] hover:bg-[#5C1A2B] hover:text-white transition-colors"
                      >
                        {lang === 'ar' ? 'نسخ النص' : 'Copy Hook'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ==================================================================== */}
      {/* MODAL 1: NEW LOUNGE POST                                             */}
      {/* ==================================================================== */}
      {isNewPostOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-3xl border border-[#C5A059] bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#E8DFD1] pb-3 mb-4">
              <h3 className="font-serif text-xl font-bold text-[#5C1A2B]">{t.shareStory}</h3>
              <button onClick={() => setIsNewPostOpen(false)} className="text-[#6E6365] hover:text-[#5C1A2B]">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleCreatePost} className="space-y-3">
              <input
                type="text"
                placeholder={lang === 'ar' ? 'اسمكِ' : 'Your Name'}
                value={newPostForm.author}
                onChange={(e) => setNewPostForm({ ...newPostForm, author: e.target.value })}
                className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-4 py-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
              />
              <select
                value={newPostForm.category}
                onChange={(e) => setNewPostForm({ ...newPostForm, category: e.target.value })}
                className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-4 py-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
              >
                <option value="Recipes & Kitchen">Recipes & Kitchen</option>
                <option value="Muslim Sisterhood">Muslim Sisterhood</option>
                <option value="Career & Glow-Up">Career & Glow-Up</option>
                <option value="Home & Organization">Home & Organization</option>
              </select>
              <input
                type="text"
                required
                placeholder={lang === 'ar' ? 'عنوان الموضوع' : 'Post Title'}
                value={newPostForm.title}
                onChange={(e) => setNewPostForm({ ...newPostForm, title: e.target.value })}
                className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-4 py-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
              />
              <textarea
                rows={4}
                required
                placeholder={lang === 'ar' ? 'شاركي تجربتكِ أو نصيحتكِ مع الأخوات...' : 'Share your wisdom or recipe...'}
                value={newPostForm.content}
                onChange={(e) => setNewPostForm({ ...newPostForm, content: e.target.value })}
                className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-4 py-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
              />
              {/* Photo Attachment in Lounge Modal */}
              <div className="rounded-2xl border border-dashed border-[#C5A059] bg-[#FDFBF9] p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#5C1A2B] flex items-center gap-1.5">
                    <ImageIcon className="h-4 w-4 text-[#C5A059]" />
                    <span>{t.ui.attachPhotoLabel}</span>
                  </span>
                  <label className="cursor-pointer rounded-full bg-[#5C1A2B] px-3 py-1 text-[10px] font-semibold text-white">
                    <span>+ Upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload(e.target.files?.[0], (url) =>
                          setNewPostForm((prev) => ({ ...prev, image: url }))
                        )
                      }
                      className="hidden"
                    />
                  </label>
                </div>
                <input
                  type="url"
                  placeholder="https://..."
                  value={newPostForm.image.startsWith('data:') ? '' : newPostForm.image}
                  onChange={(e) => setNewPostForm({ ...newPostForm, image: e.target.value })}
                  className="w-full rounded-xl border border-[#E8DFD1] bg-white px-3 py-1.5 text-xs focus:border-[#C5A059] focus:outline-none"
                />
                {newPostForm.image && (
                  <img src={newPostForm.image} alt="Preview" className="h-24 w-full rounded-xl object-cover" />
                )}
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[#5C1A2B] py-3 text-xs font-semibold text-white hover:bg-[#461220]"
              >
                {t.ui.postBtn}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODAL 5: AD-MONETIZED YOUTUBE WORKOUT LINK GATE                      */}
      {/* ==================================================================== */}
      {monetizedVideoGate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-3xl border border-[#C5A059] bg-white p-6 text-center shadow-2xl space-y-4">
            <div className="flex justify-end">
              <button
                onClick={() => setMonetizedVideoGate(null)}
                className="text-[#6E6365] hover:text-[#5C1A2B]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <Play className="mx-auto h-10 w-10 text-[#C5A059]" />
            <h3 className="font-serif text-xl font-bold text-[#5C1A2B]">
              {tr(monetizedVideoGate.title)}
            </h3>

            {/* Designated Ad Banner for Per-Click Revenue */}
            <div className="rounded-2xl border border-dashed border-[#C5A059] bg-[#FDFBF9] p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#8C6D2E]">
                {t.ui.adLabel} • CPC / Link Monetization
              </p>
              <p className="text-xs text-[#6E6365] mt-1">{t.ui.adText}</p>
            </div>

            {videoGateTimer > 0 ? (
              <p className="text-xs font-semibold text-[#5C1A2B]">
                {lang === 'ar'
                  ? `جاري تجهيز رابط يوتيوب (${videoGateTimer} ثوانٍ)...`
                  : `Unlocking YouTube Workout Session (${videoGateTimer}s)...`}
              </p>
            ) : (
              <a
                href={monetizedVideoGate.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMonetizedVideoGate(null)}
                className="inline-flex items-center gap-2 rounded-full bg-[#5C1A2B] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#461220]"
              >
                <ExternalLink className="h-4 w-4 text-[#C5A059]" />
                <span>
                  {lang === 'ar' ? 'فتح الفيديو على يوتيوب الآن' : 'Open YouTube Workout Now'}
                </span>
              </a>
            )}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODAL 2: ADD PRODUCT TO HER BOUTIQUE                                 */}
      {/* ==================================================================== */}
      {isNewProductOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-3xl border border-[#C5A059] bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#E8DFD1] pb-3 mb-4">
              <h3 className="font-serif text-xl font-bold text-[#5C1A2B]">{t.ui.addProductBtn}</h3>
              <button onClick={() => setIsNewProductOpen(false)} className="text-[#6E6365] hover:text-[#5C1A2B]">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleAddProduct} className="space-y-3">
              <input
                type="text"
                required
                placeholder={lang === 'ar' ? 'اسم المنتج' : 'Product Title'}
                value={newProductForm.title}
                onChange={(e) => setNewProductForm({ ...newProductForm, title: e.target.value })}
                className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-4 py-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder={lang === 'ar' ? 'السعر (مثال: 25$ أو 3500 دج)' : 'Price (e.g. $25)'}
                  value={newProductForm.price}
                  onChange={(e) => setNewProductForm({ ...newProductForm, price: e.target.value })}
                  className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-4 py-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
                />
                <select
                  value={newProductForm.category}
                  onChange={(e) => setNewProductForm({ ...newProductForm, category: e.target.value })}
                  className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-4 py-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
                >
                  <option value="Handmade Crafts">Handmade Crafts</option>
                  <option value="Homemade Culinary">Homemade Culinary</option>
                  <option value="Digital Templates">Digital Templates</option>
                  <option value="Natural Beauty">Natural Beauty</option>
                </select>
              </div>
              <input
                type="text"
                placeholder={lang === 'ar' ? 'اسم المتجر أو المدينة' : 'Shop Name & City'}
                value={newProductForm.seller}
                onChange={(e) => setNewProductForm({ ...newProductForm, seller: e.target.value })}
                className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-4 py-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
              />
              <input
                type="text"
                required
                placeholder={lang === 'ar' ? 'رقم الهاتف أو حساب إنستغرام للتواصل' : 'Phone / Instagram / Email'}
                value={newProductForm.contact}
                onChange={(e) => setNewProductForm({ ...newProductForm, contact: e.target.value })}
                className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-4 py-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
              />
              <textarea
                rows={3}
                required
                placeholder={lang === 'ar' ? 'وصف المنتج وتفاصيل التوصيل...' : 'Describe your product...'}
                value={newProductForm.description}
                onChange={(e) => setNewProductForm({ ...newProductForm, description: e.target.value })}
                className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-4 py-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-[#5C1A2B] py-3 text-xs font-semibold text-white hover:bg-[#461220]"
              >
                {t.ui.postBtn}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODAL 3: ADD CHARITY / MEDICAL AID POST                              */}
      {/* ==================================================================== */}
      {isNewCharityOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-3xl border border-[#C5A059] bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#E8DFD1] pb-3 mb-4">
              <h3 className="font-serif text-xl font-bold text-[#5C1A2B]">{t.ui.addAidBtn}</h3>
              <button onClick={() => setIsNewCharityOpen(false)} className="text-[#6E6365] hover:text-[#5C1A2B]">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleAddCharity} className="space-y-3">
              <select
                value={newCharityForm.type}
                onChange={(e) => setNewCharityForm({ ...newCharityForm, type: e.target.value })}
                className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-4 py-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
              >
                <option value="donation">{t.ui.offerDonation}</option>
                <option value="urgent">{t.ui.urgentNeed}</option>
              </select>
              <input
                type="text"
                required
                placeholder={
                  lang === 'ar'
                    ? 'العنوان (مثال: سرير طبي للتبرع أو دواء مفقود)'
                    : 'Title (e.g. Medical Bed Donation or Urgent Medication)'
                }
                value={newCharityForm.title}
                onChange={(e) => setNewCharityForm({ ...newCharityForm, title: e.target.value })}
                className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-4 py-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder={lang === 'ar' ? 'الولاية / المدينة' : 'City / Region'}
                  value={newCharityForm.location}
                  onChange={(e) => setNewCharityForm({ ...newCharityForm, location: e.target.value })}
                  className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-4 py-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
                />
                <input
                  type="text"
                  required
                  placeholder={lang === 'ar' ? 'رقم الهاتف للتواصل' : 'Contact Phone'}
                  value={newCharityForm.contact}
                  onChange={(e) => setNewCharityForm({ ...newCharityForm, contact: e.target.value })}
                  className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-4 py-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
                />
              </div>
              <textarea
                rows={3}
                required
                placeholder={lang === 'ar' ? 'تفاصيل الحالة أو الغرض المتبرع به...' : 'Details about the item or medical need...'}
                value={newCharityForm.details}
                onChange={(e) => setNewCharityForm({ ...newCharityForm, details: e.target.value })}
                className="w-full rounded-xl border border-[#E8DFD1] bg-[#FDFBF9] px-4 py-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-[#5C1A2B] py-3 text-xs font-semibold text-white hover:bg-[#461220]"
              >
                {t.ui.postBtn}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODAL 4: AD-SUPPORTED VAULT DOWNLOAD COUNTDOWN                       */}
      {/* ==================================================================== */}
      {downloadModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-3xl border border-[#C5A059] bg-white p-6 text-center shadow-2xl space-y-4">
            <div className="flex justify-end">
              <button
                onClick={() => setDownloadModalItem(null)}
                className="text-[#6E6365] hover:text-[#5C1A2B]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <Gift className="mx-auto h-10 w-10 text-[#C5A059]" />
            <h3 className="font-serif text-xl font-bold text-[#5C1A2B]">
              {downloadModalItem.title[lang]}
            </h3>

            {/* Designated Ad Slot inside Download Gate */}
            <div className="rounded-2xl border border-dashed border-[#C5A059] bg-[#FDFBF9] p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#8C6D2E]">
                {t.ui.adLabel}
              </p>
              <p className="text-xs text-[#6E6365] mt-1">{t.ui.adText}</p>
            </div>

            {countdown > 0 ? (
              <p className="text-xs font-semibold text-[#5C1A2B]">
                {t.ui.preparingPdf} ({countdown}s)
              </p>
            ) : (
              <div className="space-y-3">
                <p className="text-xs font-bold text-emerald-700">{t.ui.downloadReady}</p>
                <button
                  onClick={() => {
                    handleDownloadPrintableFile(downloadModalItem);
                    setDownloadModalItem(null);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-[#5C1A2B] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#461220]"
                >
                  <Download className="h-4 w-4 text-[#C5A059]" />
                  <span>{t.ui.downloadFree}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
