import { TimelineEvent, MapPoint } from './types';

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: '1881',
    title: 'Selanik\'te Doğan Güneş',
    description: 'Osmanlı\'nın kozmopolit şehri Selanik\'te, Kocakasım Mahallesi\'ndeki pembe boyalı evde; Ali Rıza Efendi ve Zübeyde Hanım\'ın oğlu olarak dünyaya geldi. Bir ulusun kaderini değiştirecek yolculuk burada başladı.',
    category: 'life'
  },
  {
    year: '1915',
    title: 'Çanakkale Destanı',
    description: 'Yarbay Mustafa Kemal, 19. Tümen Komutanı olarak Arıburnu ve Conkbayırı\'nda tarih yazdı. Verdiği "Ben size taarruzu değil, ölmeyi emrediyorum" emriyle savaşın ve İstanbul\'un kaderini değiştirdi.',
    category: 'war'
  },
  {
    year: '1919',
    title: 'Milli Mücadele Başlıyor',
    description: 'Bandırma Vapuru ile zorlu bir yolculuktan sonra 19 Mayıs\'ta Samsun\'a ayak bastı. Bu adım emperyalizme karşı Türk milletinin topyekün direnişinin ve Kurtuluş Savaşı\'nın fiili başlangıcı oldu.',
    category: 'war'
  },
  {
    year: '1920',
    title: 'TBMM\'nin Açılışı',
    description: '23 Nisan\'da Ankara\'da "Hâkimiyet kayıtsız şartsız milletindir" düsturuyla Türkiye Büyük Millet Meclisi dualarla açıldı. Yeni Türk devletinin temelleri atıldı.',
    category: 'republic'
  },
  {
    year: '1921',
    title: 'Sakarya Zaferi',
    description: '22 gün 22 gece süren, dünyanın en uzun meydan muharebelerinden biri. Türk ordusunun 1683 Viyana Kuşatması\'ndan beri süregelen geri çekilişinin durduğu son savunma savaşıdır.',
    category: 'war'
  },
  {
    year: '1922',
    title: 'Büyük Zafer',
    description: '26 Ağustos\'ta başlayan Büyük Taarruz, 30 Ağustos\'ta Dumlupınar\'da Başkomutanlık Meydan Muharebesi ile taçlandı. Düşman ordusu imha edildi ve Anadolu\'nun sonsuza dek Türk yurdu olduğu tescillendi.',
    category: 'war'
  },
  {
    year: '1923',
    title: 'Cumhuriyet\'in İlanı',
    description: '29 Ekim\'de "Türkiye Devleti\'nin hükümet şekli Cumhuriyettir" hükmü kabul edildi. Mustafa Kemal Atatürk, Türkiye Cumhuriyeti\'nin ilk Cumhurbaşkanı seçildi.',
    category: 'republic'
  },
  {
    year: '1938',
    title: 'Ebediyete İntikal',
    description: '10 Kasım sabahı saat 09.05\'te Dolmabahçe Sarayı\'nda hayata gözlerini yumdu. Sadece Türk milleti değil, tüm dünya büyük bir liderin yasını tuttu.',
    category: 'life'
  }
];

export const MAP_POINTS: MapPoint[] = [
  // === 1915: ÇANAKKALE CEPHESİ ===
  {
    id: 'anafartalar',
    city: 'Anafartalar',
    date: '10 Ağustos 1915',
    title: 'Anafartalar Zaferi',
    description: 'Mustafa Kemal\'in askeri dehasını tüm dünyaya kanıtladığı ve "Anafartalar Kahramanı" olarak tarihe geçtiği yer.',
    type: 'battle',
    x: 40,
    y: 115,
    significance: 5,
    details: 'Mermisi biten askerlere süngü taktırarak zaman kazanıldı. Mustafa Kemal "Ben size taarruzu değil, ölmeyi emrediyorum" emrini burada vererek tarihin akışını değiştirdi.',
    importance: 'Mustafa Kemal\'in liderlik vasfı ve askeri dehası dünya tarafından tanındı. Milli Mücadele liderliği için halk nezdinde güven oluştu.',
    quote: 'Biz Anafartalar\'da bir darülfünun (üniversite) gömdük!'
  },
  {
    id: 'canakkale-merkez',
    city: 'Çanakkale',
    date: '18 Mart 1915',
    title: 'Çanakkale Deniz Zaferi',
    description: 'Yenilmez sanılan İtilaf donanmasının, Türk topçusu ve mayınları karşısında boğazın derinliklerine gömüldüğü büyük zafer.',
    type: 'battle',
    x: 35,
    y: 150,
    significance: 5,
    details: 'Nusret Mayın Gemisi\'nin döşediği mayınlar ve Seyit Onbaşı\'nın kahramanlığıyla dev zırhlılar batırıldı. Tarihe "Çanakkale Geçilmez" sözü altın harflerle yazıldı.',
    importance: 'İstanbul\'un işgali deniz yoluyla önlendi. Çarlık Rusyası\'na yardım gidemedi ve I. Dünya Savaşı en az 2 yıl uzadı.'
  },

  // === 1919: UYANIŞ ===
  {
    id: 'samsun',
    city: 'Samsun',
    date: '19 Mayıs 1919',
    title: 'Samsun\'a Çıkış',
    description: 'Mondros Ateşkesi\'nin karanlığına karşı, Anadolu\'da bir güneşin doğduğu ve Milli Mücadele\'nin fiilen başladığı nokta.',
    type: 'arrival',
    x: 530,
    y: 55,
    significance: 5,
    details: 'Mustafa Kemal Paşa ve 18 silah arkadaşı Bandırma Vapuru ile Anadolu\'ya ayak bastı. Görünürdeki görev asayişi sağlamak olsa da asıl amaç kurtuluşu örgütlemekti.',
    importance: 'Kurtuluş Savaşı\'nın ve Türkiye Cumhuriyeti\'ne giden yolun başlangıç noktasıdır. Atatürk\'ün "Doğum günüm" dediği tarihtir.'
  },
  {
    id: 'havza',
    city: 'Havza',
    date: '28 Mayıs 1919',
    title: 'Havza Genelgesi',
    description: 'İşgallere karşı ilk resmi başkaldırı ve ulusal direniş çağrısı.',
    type: 'congress',
    x: 555,
    y: 85,
    significance: 4,
    details: 'Mustafa Kemal Paşa, İzmir\'in işgaline karşı tüm yurtta protesto mitingleri düzenlenmesini ve İtilaf Devletlerine protesto telgrafları çekilmesini istedi.',
    importance: 'Milli bilinç ilk kez uyandırıldı ve halkın işgallere karşı tepkisi örgütlü hale getirilmeye başlandı.'
  },
  {
    id: 'amasya',
    city: 'Amasya',
    date: '22 Haziran 1919',
    title: 'Amasya Genelgesi',
    description: 'Milli Mücadele\'nin manifestosu, gerekçesi ve yönteminin dünyaya ilanı.',
    type: 'congress',
    x: 515,
    y: 118,
    significance: 5,
    details: 'Genelgede "Milletin istiklalini yine milletin azim ve kararı kurtaracaktır" maddesi yer aldı. Bu madde ile kurtuluş meşalesi ve ihtilal fitili ateşlendi.',
    importance: 'Savaşın amacı, gerekçesi ve yöntemi belirlendi. İstanbul Hükümeti yok sayıldı ve egemenliğin millete ait olduğu ilk kez vurgulandı.'
  },
  {
    id: 'erzurum',
    city: 'Erzurum',
    date: '23 Temmuz 1919',
    title: 'Erzurum Kongresi',
    description: 'Mustafa Kemal\'in sivil olarak katıldığı, Doğu illerinin bütünlüğünün sağlandığı kongre.',
    type: 'congress',
    x: 820,
    y: 150,
    significance: 4,
    details: 'Bölgesel toplanan kongrede "Milli sınırlar içinde vatan bir bütündür, bölünemez" kararı alındı. Manda ve himaye fikri ilk kez reddedildi.',
    importance: 'Mustafa Kemal\'in kongre başkanlığına seçilmesiyle liderliği pekişti. Temsil Heyeti ilk kez burada oluşturuldu.'
  },
  {
    id: 'sivas',
    city: 'Sivas',
    date: '4 Eylül 1919',
    title: 'Sivas Kongresi',
    description: 'Yurdun her yerinden gelen delegelerle tam bağımsızlık ve milli birliğin kesin olarak sağlandığı kongre.',
    type: 'congress',
    x: 610,
    y: 180,
    significance: 5,
    details: 'Tüm cemiyetler birleştirildi ve manda fikri kesin olarak reddedildi. Kongrede "Ya istiklal ya ölüm" parolası temel ilke olarak benimsendi.',
    importance: 'Temsil Heyeti tüm yurdu temsil eder hale geldi. Ali Fuat Paşa Batı Cephesi komutanlığına atanarak ilk yürütme yetkisi kullanıldı.'
  },

  // === 1920: MECLİS VE CEPHLER ===
  {
    id: 'istanbul',
    city: 'İstanbul',
    date: '16 Mart 1920',
    title: 'İstanbul\'un İşgali',
    description: 'Misak-ı Milli kararlarına tepki olarak İngilizlerin şehri resmen işgali ve Meclis-i Mebusan\'ı basması.',
    type: 'battle',
    x: 195,
    y: 75,
    significance: 5,
    details: 'Şehzadebaşı Karakolu basılarak askerlerimiz şehit edildi. Milletvekilleri tutuklanıp Malta\'ya sürüldü ve Meclis-i Mebusan dağıtıldı.',
    importance: 'İstanbul\'daki meclisin kapanması, Ankara\'da TBMM\'nin açılmasını hukuki ve fiili bir zorunluluk haline getirdi.'
  },
  {
    id: 'ankara',
    city: 'Ankara',
    date: '23 Nisan 1920',
    title: 'TBMM Açılışı',
    description: 'Türk milletinin kendi kaderini eline aldığı, egemenliğin saraydan alınıp millete verildiği tarihi gün.',
    type: 'republic',
    x: 365,
    y: 170,
    significance: 5,
    details: 'Ankara\'nın en eski binasında, gaz lambası ışığında ve yokluklar içinde yeni Türk Devleti kuruldu. Mustafa Kemal oy birliğiyle Meclis Başkanı seçildi.',
    importance: 'Temsil Heyeti\'nin görevi sona erdi. Milli irade yönetime hakim kılındı. Kurtuluş Savaşı artık bu meclis tarafından yönetilecekti.',
    quote: 'Hakimiyet kayıtsız şartsız milletindir.'
  },
  {
    id: 'kars',
    city: 'Kars',
    date: '30 Ekim 1920',
    title: 'Doğu Cephesi Zaferi',
    description: 'Şark Fatihi Kazım Karabekir Paşa komutasındaki 15. Kolordu\'nun Ermenilere karşı kazandığı zafer.',
    type: 'battle',
    x: 900,
    y: 115,
    significance: 4,
    details: 'Ermeniler yenilgiye uğratılarak Kars kurtarıldı. TBMM\'nin uluslararası alandaki ilk siyasi başarısı olan Gümrü Antlaşması imzalandı.',
    importance: 'Doğu sınırı güvenceye alındı. Buradaki birlikler Batı cephesine kaydırılarak büyük zaferin yolu açıldı.'
  },
  {
    id: 'maras',
    city: 'K.Maraş',
    date: '12 Şubat 1920',
    title: 'Maraş Savunması',
    description: 'Düzenli ordu desteği olmadan, halkın kendi imkanlarıyla Fransız işgaline karşı kazandığı destansı direniş.',
    type: 'battle',
    x: 590,
    y: 300,
    significance: 4,
    details: 'Sütçü İmam\'ın işgalci askerlere attığı ilk kurşunla direniş başladı. Rıdvan Hoca\'nın hutbesiyle halk ayaklanarak şehri savundu.',
    importance: 'Milli Mücadele\'de düzenli ordu olmadan kazanılan ilk şehir zaferidir. Maraş halkına TBMM tarafından "Kahraman" unvanı verilmiştir.'
  },
  {
    id: 'antep',
    city: 'G.Antep',
    date: '8 Şubat 1921',
    title: 'Antep Savunması',
    description: 'Açlık ve cephanesizliğe rağmen Şahin Bey ve Karayılan öncülüğünde 11 ay süren efsanevi direniş.',
    type: 'battle',
    x: 640,
    y: 315,
    significance: 4,
    details: 'Şehir teslim olmadı ama açlık sebebiyle direniş sona erdi. 6317 şehit verildi. Halkın bu fedakarlığı "Ölürsem şehit, kalırsam gazi" anlayışının simgesi oldu.',
    importance: 'Bu fedakarlık nedeniyle TBMM tarafından şehre "Gazi" unvanı verildi.'
  },
  {
    id: 'urfa',
    city: 'Şanlıurfa',
    date: '11 Nisan 1920',
    title: 'Urfa Savunması',
    description: 'Ali Saip Bey önderliğinde "Onikiler"in örgütlediği halkın, Fransızları şehirden atarak kazandığı zafer.',
    type: 'battle',
    x: 690,
    y: 310,
    significance: 4,
    details: 'Halkın inançlı direnişi karşısında Fransızlar şehri boşaltmak zorunda kaldı. Böylece güneydeki işgallerin kalıcı olamayacağı anlaşıldı.',
    importance: 'Güney cephesi kapandı, Fransızlarla Ankara Antlaşması\'na giden süreç hızlandı. Şehre daha sonra "Şanlı" unvanı verildi.'
  },

  // === BATI CEPHESİ ===
  {
    id: 'inonu-savaslari',
    city: 'İnönü',
    date: '1921',
    title: 'I. ve II. İnönü Savaşları',
    description: 'Çerkez Ethem isyanına ve Yunan ilerleyişine karşı TBMM\'nin kurduğu düzenli ordunun kazandığı ilk zaferler.',
    type: 'battle',
    x: 255,
    y: 150,
    significance: 4,
    details: 'İsmet Paşa komutasındaki ordu Yunanları iki kez durdurdu. Mustafa Kemal Paşa "Siz orada sadece düşmanı değil, milletin makus talihini de yendiniz" diyerek zaferi kutladı.',
    importance: 'Halkın düzenli orduya ve TBMM\'ye güveni arttı. Londra Konferansı ile İtilaf devletleri TBMM\'yi resmen tanıdı.'
  },
  {
    id: 'kutahya',
    city: 'Kütahya',
    date: 'Temmuz 1921',
    title: 'Kütahya-Eskişehir Savaşları',
    description: 'Yunan ordusunun büyük taarruzu karşısında Türk ordusunun imha olmamak için yaptığı stratejik geri çekilme.',
    type: 'battle',
    x: 200,
    y: 195,
    significance: 5,
    details: 'Ordu Sakarya Nehri\'nin doğusuna çekildi. Meclis\'te tartışmalar yaşandı ve Başkomutanlık yetkisi Mustafa Kemal\'e verildi.',
    importance: 'Taktiksel bir geri çekilmedir. Ordu daha uygun koşullarda savaşmak için zaman kazandı. Tekalif-i Milliye emirleri yayınlanarak ordu donatıldı.'
  },
  {
    id: 'sakarya',
    city: 'Polatlı',
    date: '23 Ağustos 1921',
    title: 'Sakarya Meydan Muharebesi',
    description: 'Türk tarihinin en kritik ve en kanlı meydan savaşı. "Melhame-i Kübra" (Büyük Kıyım) olarak adlandırılır.',
    type: 'battle',
    x: 320,
    y: 160,
    significance: 5,
    details: '22 gün süren savaşta Mustafa Kemal Paşa "Hattı müdafaa yoktur, sathı müdafaa vardır" stratejisiyle savaş tarihine yeni bir doktrin kazandırdı.',
    importance: 'Viyana Kuşatması\'ndan beri süren Türk geri çekilişi son buldu. Mustafa Kemal\'e "Mareşal" rütbesi ve "Gazi" unvanı verildi.',
    quote: 'Hattı müdafaa yoktur, sathı müdafaa vardır.'
  },
  {
    id: 'dumlupinar',
    city: 'Dumlupınar',
    date: '30 Ağustos 1922',
    title: 'Başkomutanlık Meydan Muharebesi',
    description: 'Yunan ordusunun kuşatılarak tamamen imha edildiği, Kurtuluş Savaşı\'nın askeri safhasını bitiren kesin zafer.',
    type: 'battle',
    x: 240,
    y: 215,
    significance: 5,
    details: 'Gazi Mustafa Kemal Paşa savaşı bizzat Zafertepe\'den yönetti. Yunan Başkomutanı Trikopis esir alındı ve düşman İzmir\'e doğru kaçmaya başladı.',
    importance: 'Anadolu\'daki Yunan varlığı sona erdi. Sevr Antlaşması tarihin çöp sepetine atıldı.',
    quote: 'Ordular! İlk hedefiniz Akdeniz\'dir. İleri!'
  },
  {
    id: 'buyuk-taarruz',
    city: 'Afyon (Kocatepe)',
    date: '26 Ağustos 1922',
    title: 'Büyük Taarruz',
    description: 'Hazırlıkları büyük bir gizlilikle yürütülen, Türk ordusunun nihai darbeyi vurmak için şafak vakti başlattığı harekat.',
    type: 'battle',
    x: 280,
    y: 240,
    significance: 5,
    details: 'Topçu ateşiyle başlayan harekatta Mustafa Kemal Paşa, Kocatepe\'den harekatı adım adım yönetti. Türk ordusu aşılmaz denilen Yunan siperlerini saatler içinde aştı.',
    importance: 'Türk ordusunun taarruz gücüne ulaştığını gösterdi. 15 gün içinde İzmir\'e ulaşıldı.'
  },
  {
    id: 'izmir',
    city: 'İzmir',
    date: '9 Eylül 1922',
    title: 'İzmir\'in Kurtuluşu',
    description: 'Hasan Tahsin\'in ilk kurşunu attığı yerde, 3 yıl sonra Türk bayrağının yeniden Hükümet Konağı\'na çekildiği zafer günü.',
    type: 'arrival',
    x: 70,
    y: 245,
    significance: 5,
    details: 'Fahrettin Altay komutasındaki Türk süvarileri İzmir\'e girdi. Yüzbaşı Şerafettin Bey Hükümet Konağı\'na şanlı bayrağımızı çekti.',
    importance: 'Anadolu işgalden tamamen temizlendi. Mudanya Ateşkes Antlaşması\'na giden yol açıldı. Milli Mücadele\'nin askeri safhası bitti.'
  },
  {
    id: 'mudanya',
    city: 'Mudanya',
    date: '11 Ekim 1922',
    title: 'Mudanya Ateşkesi',
    description: 'Sıcak savaşın bitip diplomatik mücadelenin başladığı, İtilaf Devletlerinin Türk zaferini kabul ettiği antlaşma.',
    type: 'congress',
    x: 175,
    y: 115,
    significance: 5,
    details: 'İsmet Paşa\'nın diplomatik başarısıyla tek kurşun atılmadan İstanbul, Boğazlar ve Doğu Trakya savaşsız olarak kurtarıldı.',
    importance: 'Osmanlı Devleti hukuken sona erdi. Lozan Barış Antlaşması\'na zemin hazırlandı.'
  }
];

export const PRINCIPLES = [
  {
    title: "Cumhuriyetçilik",
    desc: "Egemenliğin bir kişiye veya zümreye değil, kayıtsız şartsız millete ait olmasıdır. Devlet yönetiminde milli iradeyi esas alır."
  },
  {
    title: "Milliyetçilik",
    desc: "Irkçılığı reddeden, 'Ne mutlu Türk'üm diyene' anlayışıyla ortak tarih, dil ve kültür birliğine dayanan, vatanı ve milleti sevme ülküsüdür."
  },
  {
    title: "Halkçılık",
    desc: "Hiçbir aileye, zümreye veya sınıfa ayrıcalık tanınmaması; kanun önünde herkesin eşit olması ve devletin halk için çalışmasıdır."
  },
  {
    title: "Devletçilik",
    desc: "Özel teşebbüsün yetersiz kaldığı alanlarda, özellikle stratejik sanayi ve ekonomide devletin doğrudan yatırımcı ve düzenleyici olmasıdır."
  },
  {
    title: "Laiklik",
    desc: "Sadece din ve devlet işlerinin ayrılması değil, aynı zamanda din ve vicdan hürriyetinin güvencesi, aklın ve bilimin rehber kabul edilmesidir."
  },
  {
    title: "İnkılapçılık",
    desc: "Statükoyu reddederek, çağa ayak uydurmak için sürekli yenilenmeyi, modernleşmeyi ve daima ileriye gitmeyi hedefleyen dinamik yapıdır."
  }
];