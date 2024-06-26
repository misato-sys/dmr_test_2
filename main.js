
const quiz = [
  {
  question: 'Q1. 医薬品医療機器等法の規制の対象になるのは、「医薬品」、「医薬部外品」、「化粧品」、「医療機器」の４種類である。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕',
  memo: '「再生医療等製品」で５種類【テキスト1/p.53】'
  },
  {
    question: 'Q2. 体外診断用医薬品の新しい品目（新規品目）については、承認後しばらくはクラスⅠの品目として取り扱われる。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '✕',
    memo: 'クラスⅢとして取り扱われる【テキスト1/p.55】'
    },
  {
    question: 'Q3. 体外診断用医薬品では、医薬品医療機器等法の規定により、「体外診断用医薬品基本要件基準」が制定されている。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '〇',
    memo: '【テキスト1/p.59】'
  },
  {
    question: 'Q4. 承認前の体外診断用医薬品の名称、製造方法、効能・効果または性能に関する広告を行うことは、医療関係者を対象とする場合に限って認められている。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '✕',
    memo: '承認前は禁止【テキスト1/p.61】'
  },
  {
    question: 'Q5. 臨床検査技師等に関する法律には衛生検査所の構造設備、管理組織その他の事項について必要最低限の基準が定められている。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '〇',
    memo: '【テキスト1/p.66】'
  },
  {
    question: 'Q6. ＳＤＳ(Safety Data Sheet)制度は、水質汚濁防止法により交付が義務付けられている。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '✕',
    memo: '労働安全衛生法、化管法、毒物及び劇物取締法【テキスト1/p.70】'
  },
  {
    question: 'Q7. 臨床検査薬情報担当者が、卸売販売業者の納入価格について医療機関等と意見を交換することは、独占禁止法上特に問題はない。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '✕',
    memo: '意見交換は避けるべき【テキスト1/p.76】'
  },
  {
    question: 'Q8. PL法において、製造物とは製造または加工された動産のことをいう。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '〇',
    memo: '【テキスト1/p.78】'
  },
  {
    question: 'Q9. 医療にかかる費用の保障のため、勤め人（会社員、公務員など）は就職したら会社などが運営する健康保険（組合健保、共済組合など）に加入する。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '〇',
    memo: '【テキスト1/p.88】'
  },
  {
    question: 'Q10. 診療所とは患者を入院させるための施設を有しないもののみをいう。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '✕',
    memo: '入院施設を有しないもの又は19床以下【テキスト1/p.91】'
  },
  {
    question: 'Q11. 臨床検査には尿や便、血液の成分を測ったり、取り出した組織の状態をみる（　　　）がある。',
    choices: [
    '生体検査',
    /*'生理学検査',*/
    '検体検査',
    ],
    correct: '検体検査',
    memo: '【テキスト1/p.3】'
  },
  {
    question: 'Q12. 一般用医薬品メーカーは自分自身の健康に責任を持つ（　　　）の推進を通じて、健康寿命の延伸に貢献する立場といえる。',
    choices: [
    'セルフメディケーション',
    /*'セルフケア',*/
    'セルフコントロール',
    ],
    correct: 'セルフメディケーション',
    memo: '【テキスト1/p.9】'
  },
  {
    question: 'Q13. 血液学的検査は、血球の数と形態、機能に関する検査および（　　　）に関連した検査に分けることができる。',
    choices: [
    '出血・凝固',
    '血の匂い',
    /*'血の色'*/,
    ],
    correct: '出血・凝固',
    memo: '【テキスト1/p.15】'
  },
  {
    question: 'Q14. 体外診断用医薬品の認可で、承認・認証不要基準品目はクラス（　　　）である。',
    choices: [
    'Ⅰ',
    'Ⅱ',
    /*'Ⅲ',*/
    ],
    correct: 'Ⅰ',
    memo: '【テキスト1/p.16】'
  },
  {
    question: 'Q15. 特定健康診査では、検査データは全国の医療機関で共通に用いられる必要があり、そのため（　　　）により標準物質が整備され、検査値の標準化が行われた。',
    choices: [
    'IVDD',
    'JCCLS',
    /*'IFCC',*/
    ],
    correct: 'JCCLS',
    memo: '日本臨床検査標準協議会（JCCLS）【テキスト1/p.18】'
  },
  {
    question: 'Q16. 医薬品卸の販売担当者を（　　　）という。',
    choices: [
    /*'DMR',*/
    'MR',
    'MS',
    ],
    correct: 'MS',
    memo: 'MS(Marketing Specialist)【テキスト1/p.27】'
  },
  {
    question: 'Q17. 医薬品卸において法を遵守するため医薬品の管理や医薬品情報の収集と社内外への発信や指導教育等で重要な役割を担うのが（　　　）である。',
    choices: [
    '臨床検査技師',
    /*'薬剤師',*/
    '管理薬剤師',
    ],
    correct: '管理薬剤師',
    memo: '【テキスト1/p.27】'
  },
  {
    question: 'Q18. インフォームドコンセント（十分な説明に基づく同意）の精神は１９４７年の（　　　）に始まった。',
    choices: [
    'ニュールンベルグ倫理綱領',
    'ヘルシンキ宣言',
    /*'リスボン宣言',*/
    ],
    correct: 'ニュールンベルグ倫理綱領',
    memo: '【テキスト1/p.37】'
  },
  {
    question: 'Q19. 体外診断用医薬品を製造販売する企業は、「製造販売業許可」を取得するために、（　　　）およびＧＶＰ省令の要求事項を満たしていなければならない。',
    choices: [
    /*'QOL省令',*/
    'QMS体制省令',
    'GCP体制省令',
    ],
    correct: 'QMS体制省令',
    memo: '【テキスト1/p.41】'
  },
  {
    question: 'Q20. 試用体外診断用医薬品は、（　　　）・品質・有効性・安全性等に関する確認および評価の一助として用いられる。',
    choices: [
    '価格',
    /*'性能',*/
    '外観',
    ],
    correct: '外観',
    memo: '【テキスト1/p.43】'
  },
  {
    question: 'Q21. ＤＭＲ認定制度の目的は、ＤＭＲとして持つべき共通知識の客観的評価を確認するものであって、（　　　）である。',
    choices: [
    '業界の自主制度',
    '業界の必須制度',
    /*'業界の推奨制度',*/
    ],
    correct: '業界の自主制度',
    memo: '【テキスト1/p.49】'
  },
  {
    question: 'Q22. 体外診断用医薬品のクラス分類に関して腫瘍関連検査試薬は（　　　）である。',
    choices: [
    'クラスⅠ',
    /*'クラスⅡ',*/
    'クラスⅢ',
    ],
    correct: 'クラスⅢ',
    memo: '【テキスト1/p.55】'
  },
  {
    question: 'Q23. 体外診断用医薬品の製造販売業者は、薬剤師を（　　　）として置かなければならない。',
    choices: [
    '総括製造販売責任者',
    '登録販売者',
    /*'販売責任者'*/,
    ],
    correct: '総括製造販売責任者',
    memo: '【テキスト1/p.57】'
  },
  {
    question: 'Q24. 毒性または劇性が強く、人に直接危害を及ぼすおそれがある物質については、（　　　）により保健衛生上の見地から必要な取り締まりが行われている。',
    choices: [
    '毒物及び劇物取締法',
    '毒物及び麻薬取締法',
    /*'劇物及び麻薬取締法',*/
    ],
    correct: '毒物及び麻薬取締法',
    memo: '【テキスト1/p.68】'
  },
  {
    question: 'Q25. （　　　）は独占的状態があるとき、営業の一部の譲渡そのほか競争を回復させるために必要な措置を命ずることができる。',
    choices: [
    /*'厚生労働省',*/
    '経済産業省',
    '公正取引委員会',
    ],
    correct: '公正取引委員会',
    memo: '【テキスト1/p.75】'
  },
  {
    question: 'Q26. 体外診断用医薬品の添付文書は、医薬品医療機器等法で規定されている使用者への情報提供のための公的な文書である。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '〇',
    memo: '【テキスト1/p.113】'
  },
  {
    question: 'Q27. 体外診断用医薬品添付文書の記載項目には、製品コード番号が必ず記載されている。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '✕',
    memo: '必要に応じて記載【テキスト1/p.113】'
  },
  {
    question: 'Q28. 体外診断用医薬品添付文書が改訂された場合、その年月および版数が添付文書の右または左上隅等に記載される。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '〇',
    memo: '【テキスト1/p.115】'
  },
  {
    question: 'Q29. 体外診断用医薬品添付文書の「名称」欄には、製造販売承認（認証）を受けた販売名、あるいは製造販売届出を行った販売名が記載されている。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '〇',
    memo: '【テキスト1/p.115】'
  },
  {
    question: 'Q30. 体外診断用医薬品添付文書の「形状・構造等（キットの構成）」欄において、反応系に関与する成分名称のうち抗体（抗血清）については、その由来（動物種）を記載し、モノクローナル抗体かポリクローナル抗体かの別を記載する必要はない。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '✕',
    memo: 'モノかポリかの別の記載アリ【テキスト1/p.116】'
  },
  {
    question: 'Q31. 体外診断用医薬品の添付文書は、（　　　）のホームページにデータベース化されている。',
    choices: [
    '医薬品医療機器総合機構',
    '日本製薬工業協会',
    /*'厚生労働省',*/
    ],
    correct: '医薬品医療機器総合機構',
    memo: '【テキスト1/p.113】'
  },
  {
    question: 'Q32. 体外診断用医薬品の添付文書の作成年月または改訂年月の記載は、（　　　）改訂が行われるまで継続して表示される。',
    choices: [
    '次回',
    '次々回',
    /*'1年後',*/
    ],
    correct: '次々回',
    memo: '【テキスト1/p.115】'
  },
  {
    question: 'Q33. 体外診断用医薬品添付文書の記載項目「名称」に関して、シリーズ製品の場合には、シリーズ名の他に（　　　）も記載されている。',
    choices: [
    '構成製品名',
    /*'効能',*/
    '使用目的',
    ],
    correct: '構成製品名',
    memo: '【テキスト1/p.115】'
  },
  {
    question: 'Q34. 体外診断用医薬品の添付文書における「重要な基本的注意」の記載事項は（　　　）記載されている。',
    choices: [
    '黒枠内に項目名を含めて赤字で',
    '赤枠内に項目名を含めて黒字で',
    /*'赤枠内に項目名を含めて赤字で',*/
    ],
    correct: '赤枠内に項目名を含めて黒字で',
    memo: '【テキスト1/p.116】'
  },
  {
    question: 'Q35. 体外診断用医薬品添付文書において「体外診断用であること及びそれ以外の目的に使用できない」旨は、（　　　）に記載されている。',
    choices: [
    '全般的な注意',
    '操作上の注意',
    /*'使用目的',*/
    ],
    correct: '全般的な注意',
    memo: '【テキスト1/p.116】'
  },
  {
    question: 'Q36. 体外診断用医薬品添付文書において、使用者があらかじめ用意しなければならない器具・機材等は、（　　　）の項目に記載されている。 ',
    choices: [
    '操作上の注意',
    /*'測定原理',*/
    '用法・用量',
    ],
    correct: '用法・用量',
    memo: '用法・用量（使用方法）【テキスト1/p.117】'
  },
  {
    question: 'Q37. 体外診断用医薬品添付文書の「使用上または取扱い上の注意」には、試料および試薬を取り扱ううえで（　　　）等注意すべき事項が記載されている。',
    choices: [
    '保管方法',
    '危険防止',
    /*'有効期間',*/
    ],
    correct: '危険防止',
    memo: '【テキスト1/p.118】'
  },
  {
    question: 'Q38. 検査データの互換性確保に対応するため、生化学項目の殆どにおいて（　　　）が作成されている。',
    choices: [
    /*'標準物資',*/
    '認証標準物質',
    '承認標準物質',
    ],
    correct: '認証標準物質',
    memo: '【テキスト1/p.133】'
  },
  {
    question: 'Q39. 現在の測定系の多くは「吸光度は濃度と光路長の積に比例する」と定義される（　　　）に則って検体中に存在する物質の濃度を測定している。',
    choices: [
    /*'メンデルの法則',*/
    'Calibration Curveの法則',
    'Lambert-Beerの法則',
    ],
    correct: 'Lambert-Beerの法則',
    memo: '【テキスト1/p.135】'
  },
  {
    question: 'Q40. 適切な精度と正確さを伴って定量的に測定できる最低の値を（　　　）という。',
    choices: [
    '定量限界',
    '検出限界',
    /*'ブランク上限'*/
    ],
    correct: '定量限界',
    memo: '定量限界（LOQ）【テキスト1/p.140】'
  },
  {
    question: 'Q41. アンチトロンビン（AT）活性が５０％以下になると出血傾向を示す。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '✕',
    memo: '血栓傾向【テキスト2/p.181】'
  },
  {
    question: 'Q42. AST、ALTのアミノ基転移酵素でＡＬＴのみが高値を呈する場合は、肝臓以外の臓器障害を示唆する所見となる。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '✕',
    memo: 'ASTのみが高値を呈する場合（ALTの方が肝臓特異的）【テキスト2/p.189】'
  },
  {
    question: 'Q43. 尿素はアンモニアの体外排泄のため、腎臓で合成される。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '✕',
    memo: '肝臓で合成される【テキスト2/p.190】'
  },
  {
    question: 'Q44. ＨｂＡ１ｃは採血前1ないし２か月の平均血糖値を反映する。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '〇',
    memo: '【テキスト2/p.192】'
  },
  {
    question: 'Q45. 電解質の調節は肝臓を中心として厳格にコントロールされている。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '✕',
    memo: '腎臓【テキスト2/p.194】'
  },
  {
    question: 'Q46. 血中薬物濃度測定（TDM）では、薬物投与直前の値をトラフ値と呼ぶ。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '〇',
    memo: '【テキスト2/p.195】'
  },
  {
    question: 'Q47. ルイス血液型陰性者に発生した膵がんでは、CA19-9は上昇しない。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '〇',
    memo: '【テキスト2/p.202】'
  },

  {
    question: 'Q48. 尿中Ｃペプチドの測定でインスリンの１日分泌量の評価が可能である。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '〇',
    memo: '【テキスト2/p.203】'
  },
  {
    question: 'Q49. リン脂質（カルジオリピン）に対する抗体を検出するＳＴＳ検査は梅毒の血清学的診断に用いられる。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '〇',
    memo: '【テキスト2/p.123,204】'
  }, 
  {
    question: 'Q50. Ｂ型肝炎ウイルスは、血液などの体液や輸血製剤を介して侵入し、感染成立の確率はＣ型肝炎ウイルスより低い。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '✕',
    memo: 'C型の10倍高い【テキスト2/p.205】'
  }, 
  {
    question: 'Q51. 食後の血清が白く濁っているのは（　）の増加のためである。',
    choices: [
    'カイロミクロン',
    'グルコース',
    /*'カルシウム',*/
    ],
    correct: 'カイロミクロン',
    memo: '【テキスト2/p.193】'
  }, 
  {
    question: 'Q52. 電解質異常のなかで、特に（　）の異常は生命を脅かす危険が高い。',
    choices: [
    'カリウム',
    'ナトリウム',
    /*'塩化物イオン'*/
    ],
    correct: 'カリウム',
    memo: '【テキスト2/p.194】'
  }, 
  {
    question: 'Q53. 尿中の（　）は、妊娠判定の検査として測定される。',
    choices: [
    'hCG',
    'FSH',
    /*'PRG',*/
    ],
    correct: 'hCG',
    memo: 'hCG（ヒト絨毛性ゴナドトロピン）【テキスト2/p.203】'
  }, 
  {
    question: 'Q54. Ｂ型肝炎ウイルス感染のスクリ－ニング検査は（　）で行う。',
    choices: [
    'HBs抗原',
    'HBe抗原',
    /*'HBs抗体'*/
    ],
    correct: 'HBs抗原',
    memo: '【テキスト2/p.205】'
  }, 
  {
    question: 'Q55. （　　）は関節内で産生され、軟骨破壊を起こす酵素であることから、関節破壊を予知するマ－カ－となる。',
    choices: [
    'MMP-3',
    'LD',
    /*'AST',*/
    ],
    correct: 'MMP-3',
    memo: 'マトリックスメタロプロテナーゼ（MMP-3）【テキスト2/p.207】'
  }, 
  {
    question: 'Q56. 抗原抗体反応でどちらかが過剰になると複合体の形成がうまくいかないので測定値が低くなることを（　　　）という。',
    choices: [
    'プロゾーン現象',
    'キャリーオーバー',
    /*'ハイアンチボディ現象',*/
    ],
    correct: 'プロゾーン現象',
    memo: '【テキスト2/p.214】'
  }, 
  {
    question: 'Q57. 微生物学検査に供する材料は、抗生物質（抗菌薬）の投与（　　）に採取するのが原則である。',
    choices: [
    '前',
    /*'中',*/
    '後',
    ],
    correct: '前',
    memo: '【テキスト2/p.215】'
  }, 
  {
    question: 'Q58. （　　）による抗酸菌の分離培養は、培養結果が出るまでに４～８週間ほどかかる。',
    choices: [
    'BTB培地',
    /*'SS寒天培地',*/
    '小川培地',
    ],
    correct: '小川培地',
    memo: '【テキスト2/p.220】'
  }, 
  {
    question: 'Q59. （　　）は、真菌の細胞膜を構成している多糖体である。',
    choices: [
    'β2マイクログロブリン',
    'β-D-グルカン',
    /*'β-ヒドロキシ酪酸',*/
    ],
    correct: 'β-D-グルカン',
    memo: '【テキスト2/p.222】'
  }, 
  {
    question: 'Q60. 抽出されたＤＮＡは冷蔵(２ ～ ８℃)保存で少なくとも（　　）は安定である。',
    choices: [
    '1週間以上',
    /*'半年以上',*/
    '1年間以上',
    ],
    correct: '1年間以上',
    memo: '【テキスト2/p.225】'
  }, 
  {
    question: 'Q61. ＨＢＶの遺伝子分類で、日本で一番多いのは（　　）である。',
    choices: [
    '遺伝子型A',
    /*'遺伝子型B',*/
    '遺伝子型C',
    ],
    correct: '遺伝子型C',
    memo: '【テキスト2/p.228】'
  }, 
  {
    question: 'Q62. 遺伝子関連検査に用いる（　　）は試薬調製をドラフト内で行う。',
    choices: [
    'ポリアクリルアミド',
    /*'エチジウムブロマイド',*/
    'クロロホルム',
    ],
    correct: 'クロロホルム',
    memo: '【テキスト2/p.234】'
  }, 
  {
    question: 'Q63. 医療機関での輸血記録の保管・管理については製品名、製品番号、投与日、患者氏名、住所を （　　　）年間保存しなければならない。',
    choices: [
    '2',
    /*'10年間',*/
    '20',
    ],
    correct: '20',
    memo: '【テキスト2/p.236】'
  }, 
  {
    question: 'Q64. 赤血球がA抗原を保有していれば、血清中には抗B抗体が存在するというような抗原と抗体の関係を「（　　　）の法則」という。',
    choices: [
    /*'メンデル',*/
    'Landsteiner',
    'Rantz-Randall',
    ],
    correct: 'Landsteiner',
    memo: '【テキスト2/p.237】'
  }, 
  {
    question: 'Q65. 交差適合試験の結果の判定で（　　　）なら輸血して良い。',
    choices: [
    '主試験も副試験もともに陽性',
    '主試験も副試験もともに陰性',
    /*'主試験が陰性・副試験が陽性',*/
    ],
    correct: '主試験も副試験もともに陰性',
    memo: '【テキスト2/p.245】'
  }, 
  {
    question: 'Q66. 病理検査は大別して、病理組織検査、細胞診検査、（　　）の３種類がある。',
    choices: [
    '司法解剖',
    /*'死因解剖',*/
    '病理解剖',
    ],
    correct: '病理解剖',
    memo: '【テキスト2/p.250】'
  }, 
  {
    question: 'Q67. 婦人科子宮頸部の細胞診では、（　　）という新しい報告様式が広く使われている。',
    choices: [
    'ベセスダ方式',
    'ロータリー式',
    /*'インサイチューハイブリダイゼーション法',*/
    ],
    correct: 'ベセスダ方式',
    memo: '【テキスト2/p.255】'
  }, 
  {
    question: 'Q68. 血液ガス分析でガス交換能力の評価に用いられるのはどれか。 Ａ： ＰＯ2 Ｂ： ｐＨ Ｃ： ＨＣＯ3- Ｄ： ＰＣＯ2',
    choices: [
    /*'A・C',*/
    'A・D',
    'B・D',
    ],
    correct: 'A・D',
    memo: '【テキスト2/p.182】'
  }, 
  {
    question: 'Q69. 副腎皮質で産生されるホルモンはどれか。 Ａ：トリヨ－ドサイロニン Ｂ：コルチゾ－ル Ｃ：インスリン Ｄ：アルドステロン',
    choices: [
    'A・C',
    /*'B・C',*/
    'B・D',
    ],
    correct: 'B・D',
    memo: '【テキスト2/p.18】'
  }, 
  {
    question: 'Q70. リポ蛋白の構成成分としての２大脂質はどれか。 Ａ：遊離脂肪酸 Ｂ：コレステロール Ｃ：中性脂肪 Ｄ：リン脂質',
    choices: [
    'A・B',
    /*'B・C',*/
    'C・D',
    ],
    correct: 'C・D',
    memo: '【テキスト2/p.88】'
  }, 
  {
    question: 'Q71. 乳がんの大多数は浸潤がんである。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '〇',
    memo: '【テキスト2/p.100】'
  }, 
  {
    question: 'Q72. 抗原がいったん免疫機構に認識されると、リンパ球によって記憶されるため、再侵入した際にはすばやく排除されるようになる',
    choices: [
    '〇',
    '✕',
    ],
    correct: '〇',
    memo: '【テキスト2/p.102】'
  }, 
  {
    question: 'Q73. Ｂ細胞は抗体を産生し、液性免疫の中心的な役割を担う。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '〇',
    memo: '【テキスト2/p.105】'
  }, 
  {
    question: 'Q74. 全身性エリテマト－デス(ＳＬＥ)の９９％で抗ＣＣＰ抗体が陽性となる。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '✕',
    memo: '抗核抗体【テキスト2/p.113】'
  }, 
  {
    question: 'Q75. ある限られた時期に伝染病患者が多発して、世界的な規模での大流行をパンデミックという。',
    choices: [
    '〇',
    '✕',
    ],
    correct: '〇',
    memo: '【テキスト2/p.114】'
  }, 
  {
    question: 'Q76. 解糖系は、グルコースを（　　　）まで分解する代謝経路である。',
    choices: [
    'グリコーゲン',
    'ピルビン酸',
    /*'ガラクトース',*/
    ],
    correct: 'ピルビン酸',
    memo: '【テキスト2/p.23】'
  }, 
  {
    question: 'Q77. ＤＮＡの遺伝子情報がＲＮＡに写し取られる過程を（　　　）という。',
    choices: [
    '転写',
    '翻訳',
    /*'伝達',*/
    ],
    correct: '転写',
    memo: '【テキスト2/p.27】'
  }, 
  {
    question: 'Q78. 冠動脈の一部の壁の筋肉が痙攣して一過性に収縮して起こる狭心症を（　　　）という。',
    choices: [
    /*'労作狭心症',*/
    '異型狭心症',
    '不安定狭心症',
    ],
    correct: '異型狭心症',
    memo: '【テキスト2/p.48】'
  }, 
  {
    question: 'Q79. 間質性肺炎は（　　　）の炎症である',
    choices: [
    '肺胞壁',
    /*'肺胞',*/
    '気管支',
    ],
    correct: '肺胞壁',
    memo: '間質（肺胞壁）【テキスト2/p.54】'
  }, 
  {
    question: 'Q80. 感染症法では肺結核は（　　　）感染症に分類される。',
    choices: [
    '一類',
    '二類',
    /*'三類',*/
    ],
    correct: '二類',
    memo: '【テキスト2/p.56】'
  }, 
  {
    question: 'Q81. 血便、便柱細小、残便感など排便に関する症状が多いのは、Ｓ状結腸や（　　　）に発生したがんに起きやすい症状である。',
    choices: [
    /*'盲腸',*/
    '直腸',
    '結腸',
    ],
    correct: '直腸',
    memo: '【テキスト2/p.63】'
  }, 
  {
    question: 'Q82. 膵臓がんの多数を占めるのは（　　　）がんである。',
    choices: [
    /*'大腸がん',*/
    '肝がん',
    '膵管がん',
    ],
    correct: '膵管がん',
    memo: '【テキスト2/p.72】'
  }, 
  {
    question: 'Q83. 前立腺がんの確定検査は（　　　）である。',
    choices: [
    'PSA測定',
    /*'直腸診および経直腸的超音波検査',*/
    '生検',
    ],
    correct: '生検',
    memo: '【テキスト2/p.75】'
  }, 
  {
    question: 'Q84. 白血病は、造血器腫瘍の一つで（　　　）に異常クローンが発生し、腫瘍性増殖を起こす疾患である。',
    choices: [
    '骨髄',
    '白血球',
    /*'リンパ',*/
    ],
    correct: '骨髄',
    memo: '【テキスト2/p.78】'
  }, 
  {
    question: 'Q85. 糖尿病患者のインスリン抵抗性の指標には、（　　　）がある。',
    choices: [
    /*'GCT',*/
    'SMBG',
    'HOMA-R',
    ],
    correct: 'HOMA-R',
    memo: '【テキスト2/p.86】'
  }, 
  {
    question: 'Q86. 甲状腺腫瘍の９０％以上が（　　　）である。',
    choices: [
    '乳頭がん',
    /*'未分化がん',*/
    '髄様がん',
    ],
    correct: '乳頭がん',
    memo: '【テキスト2/p.87】'
  }, 
  {
    question: 'Q87. 子宮頸がんの原因として、（　　　）が関わっている。',
    choices: [
    'NIPT',
    'HPV',
    /*'SCC',*/
    ],
    correct: 'HPV',
    memo: 'ヒトパピローマウイルス（HPV）【テキスト2/p.96】'
  }, 
  {
    question: 'Q88. （　　　）は細かいカルシウムの沈着(石灰化)の発見に他の検査より優れており、乳がんの早期発見に役立つ。',
    choices: [
    'マンモグラフィ',
    '画像診断',
    /*'腫瘍マーカー',*/
    ],
    correct: 'マンモグラフィ',
    memo: '【テキスト2/p.100】'
  }, 
  {
    question: 'Q89. 母乳、特に初乳に多く含まれている免疫グロブリンは（　　　）である。',
    choices: [
    'IgA',
    'IgM',
    /*'IgE'*/
    ],
    correct: 'IgA',
    memo: '【テキスト2/p.106】'
  }, 
  {
    question: 'Q90. ある抗原に対してＩｇＥ型の抗体がすでに産生されている状態で、同じ抗原に２回目以降に曝された際に即時に起こる免疫反応を（　　　）という。',
    choices: [
    'Ⅰ型アレルギー',
    'Ⅱ型アレルギー',
    /*'Ⅲ型アレルギー',*/
    ],
    correct: 'Ⅰ型アレルギー',
    memo: 'Ⅰ型アレルギー（即時型）【テキスト2/p.108】'
  },    
  {
    question: 'Q91. 病原性微生物に感染してから発症するまでの症状のない期間を（　　　）という。',
    choices: [
    '無症状期',
    '潜伏期',
    /*'発症期',*/
    ],
    correct: '潜伏期',
    memo: '【テキスト2/p.114】'
  },    
  {
    question: 'Q92. 細胞性免疫応答により、血液中のリンパ球が放出するＩＦＮ－γを測定して、結核に感染しているかどうかを診断する検査方法を（　　　）法という。',
    choices: [
    /*'real-timePCR法',*/
    'LAMP法',
    'IGRA法',
    ],
    correct: 'IGRA法',
    memo: '【テキスト2/p.122】'
  },    
  {
    question: 'Q93. インフルエンザウイルスの中で世界的な大流行を引き起こすのは（　　　）である。',
    choices: [
    'A型',
    'B型',
    /*'C型',*/
    ],
    correct: 'A型',
    memo: '【テキスト2/p.126】'
  },    
  {
    question: 'Q94. 細胞は、環境が生存に適さない場合や、自身に遺伝子異常など重大な障害が起きた場合に自ら死ぬ細胞内機構をもっており、これを（　　　）という。',
    choices: [
    '点変異',
    /*'不死化',*/
    'アポトーシス',
    ],
    correct: 'アポトーシス',
    memo: '【テキスト2/p.135】'
  },    
  {
    question: 'Q95. 腫瘍マーカーである CEAは（　　　）である。',
    choices: [
    '前立腺特異抗原',
    '癌胎児性抗原',
    /*'α-フェトプロテイン',*/
    ],
    correct: '癌胎児性抗原',
    memo: '【テキスト2/p.138】'
  },    
  {
    question: 'Q96. がんの診断に最も多く使用される遺伝子検査は、（　　　）である。',
    choices: [
    '病原体核酸検査',
    '体細胞遺伝子検査',
    /*'遺伝学的検査',*/
    ],
    correct: '体細胞遺伝子検査',
    memo: '【テキスト2/p.139】'
  },    
  {
    question: 'Q97. 予防接種には、国が奨励し公費で負担する（　　　）と、希望者が各自で受ける任意接種がある。',
    choices: [
    /*'推奨接種',*/
    '定期接種',
    '任意接種',
    ],
    correct: '定期接種',
    memo: '【テキスト2/p.152】'
  },    
  {
    question: 'Q98. 心不全で高値となるのはどれか。 Ａ：ＢＮＰ Ｂ：ＮＴ－ｐｒｏＢＮＰ Ｃ：Ｈ－ＦＡＢＰ Ｄ：ＣＫ－ＭＢ',
    choices: [
    'A・B',
    'B・C',
    /*'C・D',*/
    ],
    correct: 'A・B',
    memo: '【テキスト2/p.47】'
  },    
  {
    question: 'Q99. 非定型肺炎の原因菌はどれか。 Ａ：マイコプラズマ Ｂ：クラミジア Ｃ：肺炎球菌 Ｄ：クレブシエラ',
    choices: [
    'A・B',
    /*'B・C',*/
    'C・D',
    ],
    correct: 'A・B',
    memo: '【テキスト2/p.51】'
  },    
  {
    question: 'Q100. 血清鉄が増加する疾患はどれか。 Ａ：鉄芽球性貧血 Ｂ：鉄欠乏性貧血 Ｃ：慢性炎症 Ｄ：再生不良性貧血',
    choices: [
    /*'A・C',*/
    'A・D',
    'B・C',
    ],
    correct: 'A・D',
    memo: '【テキスト2/p.77】'
  },
    
 ]
 
 const quizLength = quiz.length;
 let quizIndex = 0;
 let score = 0;
  
 const button = document.getElementsByTagName('button');
 const buttonLength = button.length;
  
 const setupQuiz = () => {
  document.getElementById('question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength) {
   button[buttonIndex].textContent = quiz[quizIndex].choices[buttonIndex];
   buttonIndex++;
  }
 }
  
 setupQuiz();
 
 let missIndex = 0;
 var miss=new Array();
 
 const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！  "+quiz[quizIndex].memo);
    score++;
  } else {
    miss[missIndex]=quizIndex;
    window.alert("不正解！  "+quiz[quizIndex].memo);
    missIndex++;
  }
  
  quizIndex++;
   if (quizIndex < quizLength) {
     setupQuiz();
  } else {
   window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
   document.write("<h1>間違えた問題("+missIndex+")</h1>");
   let cnt=0;
   while(cnt<missIndex){
     document.write(quiz[miss[cnt]].question+"<br>")
     document.write(quiz[miss[cnt]].memo+"<br><br>");
     cnt++;
   }
  }
  /*document.write("memo:"+quiz[0].memo)*/
 }
  
 let handlerIndex = 0;
 while(handlerIndex < buttonLength) {
  button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
 }
