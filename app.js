(() => {
  const LESSONS = [
    { id: 0,  num: '00', kind: 'intro', title: 'סרטון המבוא', term: 'INTRODUCTION', yt: 'Wq3JAyT-N2I', desc: 'סרטון הפתיחה של האקדמיה — מה כולל הקורס, איך בנויים השיעורים ואיך מתרגלים נכון בבית. הצעד הראשון לפני שיעור 01.' },
    { id: 1,  num: '01', title: 'עמידת קרב', term: 'STANCE', yt: 'mlmJwV4OIf8', desc: 'הבסיס לכל טכניקה. איפה הרגליים, איפה הידיים ואיך נשארים יציבים גם כשזזים.' },
    { id: 2,  num: '02', title: 'ג׳אב', term: 'JAB', yt: 'XMmUtNV4F74', desc: 'אגרוף ישר ומהיר מהיד הקדמית. משמש למדידת טווח, לעצירת היריב ולהכנת התקפות נוספות.' },
    { id: 3,  num: '03', title: 'קרוס', term: 'CROSS', yt: 'JZQsmmTS4Rw', desc: 'אגרוף ישר מהיד האחורית. הכוח מגיע מסיבוב האגן והרגל האחורית, לא מהכתף.' },
    { id: 4,  num: '04', title: 'הוק קדמי', term: 'LEAD HOOK', yt: 'HFCxTpZZkhY', desc: 'אגרוף מעגלי קצר מהיד הקדמית. מיועד לטווח קרוב, מסביב להגנה של היריב.' },
    { id: 5,  num: '05', title: 'הוק אחורי', term: 'REAR HOOK', yt: 'E4IsbbwXeWg', desc: 'אותה תנועה מהיד האחורית, עם סיבוב גוף מלא. האגרוף החזק בסדרה.' },
    { id: 6,  num: '06', title: 'אפרקאט', term: 'UPPERCUT', yt: 'z7qrFHCpyIY', desc: 'אגרוף מלמטה למעלה בטווח קרוב. חודר בין הידיים כשההגנה סגורה.' },
    { id: 7,  num: '07', title: 'הגנה חזיתית', term: 'BLOCK', yt: 'M63-Plab3Ns', desc: 'חסימה וקליטה של אגרופים ישרים. הידיים גבוהות, המבט קדימה, הגוף ממשיך לנוע.' },
    { id: 8,  num: '08', title: 'הגנה מהוקים', term: 'HOOK DEFENSE', yt: 'HbtUMGtDoMo', desc: 'כיסוי הצדדים והראש מול אגרופים מעגליים, ויציאה מיידית להתקפה נגדית.' },
    { id: 9,  num: '09', title: 'בעיטות בסיס', term: 'KICKS', yt: '7wtKoSV0nOo', desc: 'בעיטות היסוד — נקודת המגע, סיבוב הרגל התומכת וחזרה מהירה לעמידת קרב.' },
    { id: 10, num: '10', title: 'תרגול מסכם', term: 'COMBINATION', yt: 'GYUrn0hUbmI', desc: 'חיבור של כל מה שנלמד לסדרה אחת רציפה. תרגול שאפשר לחזור עליו בכל אימון.' },
  ];

  const GROUPS = [
    { letter: 'א׳', title: 'עמידה ואגרופים ישרים', hint: 'הבסיס שכל השאר נשען עליו', ids: [1, 2, 3] },
    { letter: 'ב׳', title: 'אגרופים בטווח קרוב', hint: 'כשהמרחק נסגר וההגנה סגורה', ids: [4, 5, 6] },
    { letter: 'ג׳', title: 'הגנה ובעיטות', hint: 'לקלוט מכה נכון, ולהוסיף את הרגליים', ids: [7, 8, 9] },
  ];

  const GLOSSARY = [
    {
      title: 'יסודות ה־MMA',
      sub: 'מה שצריך להכיר לפני שעולים למזרן',
      intro: 'MMA היא אומנות לחימה המשלבת מכות, היאבקות ועבודה על הקרקע. הקרב יכול להתנהל בעמידה, בצמוד ליריב או על המזרן.',
      remember: 'עמידה טובה, טווח נכון ותזמון מדויק הם הבסיס לכל פעולה ב־MMA.',
      terms: [
        { en: 'STANCE', he: 'עמידת מוצא', desc: 'העמידה הבסיסית שממנה מתחילים לנוע, לתקוף ולהגן. יציבה, מאוזנת ומוכנה לתנועה.' },
        { en: 'ORTHODOX', he: 'אורתודוקס', desc: 'עמידה שבה רגל שמאל קדימה ורגל ימין מאחור. נפוצה אצל לוחמים ימניים.' },
        { en: 'SOUTHPAW', he: 'סאות׳פו', desc: 'עמידה שבה רגל ימין קדימה ורגל שמאל מאחור. נפוצה אצל לוחמים שמאליים.' },
        { en: 'SWITCH', he: 'החלפת עמידה', desc: 'מעבר בין אורתודוקס לסאות׳פו במהלך תנועה, התקפה או הגנה.' },
        { en: 'RANGE', he: 'טווח', desc: 'המרחק בינך לבין היריב. הטווח קובע אילו מכות או טכניקות אפשר לבצע באותו רגע.' },
        { en: 'TIMING', he: 'תזמון', desc: 'היכולת לבחור את הרגע הנכון לתקוף, להגן או להגיב לפעולה של היריב.' },
        { en: 'FIGHT IQ', he: 'אינטליגנציית קרב', desc: 'היכולת לקבל החלטות נכונות בזמן הקרב ולהתאים את הפעולות למה שקורה מולך.' },
        { en: 'CARDIO', he: 'סיבולת', desc: 'היכולת להמשיך לנוע, לתקוף ולהגן לאורך האימון או הקרב בלי לאבד מהיכולת.' },
      ],
    },
    {
      title: 'תנועה ועבודת רגליים',
      sub: 'שליטה במרחק, איזון וזוויות',
      intro: 'עבודת רגליים טובה מאפשרת להגיע לטווח הנכון, להתחמק מהתקפות ולהישאר מאוזנים בזמן התנועה.',
      remember: 'הרגליים מובילות את הגוף. מי ששולט במרחק, שולט בקצב הקרב.',
      terms: [
        { en: 'FORWARD STEP', he: 'צעד קדימה', desc: 'התקדמות אל היריב תוך שמירה על העמידה ועל המרחק הנכון בין הרגליים.' },
        { en: 'BACK STEP', he: 'צעד אחורה', desc: 'נסיגה מהיריב בלי לאבד שיווי משקל ובלי להצליב את הרגליים.' },
        { en: 'LATERAL', he: 'תנועה לצדדים', desc: 'תנועה ימינה או שמאלה כדי לא להישאר מול היריב בקו ישר.' },
        { en: 'PIVOT', he: 'פיבוט', desc: 'סיבוב על אחת הרגליים כדי לשנות כיוון וליצור זווית חדשה מול היריב.' },
        { en: 'ANGLE EXIT', he: 'יציאה בזווית', desc: 'יציאה מהטווח לצד ולא ישירות לאחור, כדי להימנע מהמשך ההתקפה.' },
        { en: 'CUT THE CAGE', he: 'חיתוך הכלוב', desc: 'תנועה שסוגרת בפני היריב את נתיב הבריחה ומובילה אותו לכיוון הגדר.' },
        { en: 'LEVEL CHANGE', he: 'שינוי גובה', desc: 'הורדה או העלאה של גובה הגוף לצורך הטעיה, הגנה או כניסה להפלה.' },
        { en: 'RESET', he: 'איפוס עמדה', desc: 'חזרה לעמידה יציבה ומאוזנת לאחר התקפה, הגנה או תנועה.' },
      ],
    },
    {
      title: 'אגרופים',
      sub: 'הכלים הבסיסיים',
      intro: 'אגרופים הם הבסיס לכל התקפה בעמידה. שליטה בטכניקה, דיוק ותזמון הם המפתח.',
      remember: 'הכוח באגרוף מגיע מכל הגוף — מהרגליים, דרך האגן ועד היד.',
      terms: [
        { en: 'JAB', he: 'ג׳אב', desc: 'אגרוף ישר ומהיר מהיד הקדמית. משמש למדידת טווח, לעצירת היריב ולהכנת התקפות נוספות.' },
        { en: 'CROSS', he: 'קרוס', desc: 'אגרוף ישר מהיד האחורית. חזק יותר מהג׳אב ומקבל כוח מסיבוב האגן והכתף.' },
        { en: 'HOOK', he: 'הוק', desc: 'אגרוף מעגלי שמגיע מהצד. ניתן לכוון אותו לראש או לגוף.' },
        { en: 'UPPERCUT', he: 'אפרקאט', desc: 'אגרוף שעולה מלמטה למעלה. מכוון לסנטר או לגוף מטווח קרוב.' },
        { en: 'OVERHAND', he: 'אוברהנד', desc: 'אגרוף חזק שמגיע בקשת מלמעלה, בדרך כלל מהיד האחורית.' },
        { en: 'BODY SHOT', he: 'מכה לגוף', desc: 'אגרוף שמכוון לבטן או לצלעות במטרה לפגוע בנשימה ולהחליש את היריב.' },
        { en: 'LIVER SHOT', he: 'מכה לכבד', desc: 'מכה לאזור הכבד, מתחת לצלעות בצד ימין של גוף היריב. פגיעה מדויקת יכולה לעצור אותו מיד.' },
        { en: 'COMBINATION', he: 'קומבינציה', desc: 'רצף של שתי מכות או יותר שמבוצעות אחת אחרי השנייה.' },
      ],
    },
    {
      title: 'בעיטות',
      sub: 'מרחק, כוח וגובה משתנה',
      intro: 'בעיטות מאפשרות לתקוף את הרגליים, הגוף והראש. הן חזקות מאוד, אך דורשות איזון וחזרה מהירה לעמידה.',
      remember: 'בעיטה טובה לא מסתיימת בפגיעה — היא מסתיימת בחזרה לעמדה יציבה.',
      terms: [
        { en: 'TEEP', he: 'בעיטה קדמית', desc: 'בעיטה ישרה קדימה בכרית כף הרגל. משמשת לדחיפה, לעצירת היריב ולשליטה במרחק.' },
        { en: 'ROUND KICK', he: 'בעיטה עגולה', desc: 'בעיטה שמגיעה בתנועה מעגלית ומקבלת כוח מסיבוב האגן.' },
        { en: 'LEG KICK', he: 'בעיטה לירך', desc: 'בעיטה לחלק החיצוני או הפנימי של הירך, כדי לפגוע בתנועה וביציבות.' },
        { en: 'CALF KICK', he: 'בעיטה לשוק', desc: 'בעיטה לחלק החיצוני של השוק, מתחת לברך. מקשה על היריב לעמוד ולנוע.' },
        { en: 'BODY KICK', he: 'בעיטה לגוף', desc: 'בעיטה לצלעות או לבטן, שנועדה לפגוע בנשימה ולגרום נזק מצטבר.' },
        { en: 'HEAD KICK', he: 'בעיטה לראש', desc: 'בעיטה גבוהה שמכוונת לראש. דורשת גמישות, תזמון ושליטה טובה בגוף.' },
        { en: 'QUESTION MARK', he: 'בעיטת סימן שאלה', desc: 'בעיטה שמתחילה כמו בעיטה ישרה או נמוכה ומשנה כיוון בדרך אל הראש.' },
        { en: 'OBLIQUE KICK', he: 'בעיטה אלכסונית', desc: 'בעיטה ישרה ונמוכה לכיוון הירך או קו הברך. מתרגלים בשליטה ולפי הוראות המאמן.' },
      ],
    },
    {
      title: 'הגנות',
      sub: 'להימנע מפגיעה ולהישאר מוכן',
      intro: 'הגנה טובה אינה רק חסימה. היא משלבת שמירה, תנועה, שינוי זווית והכנה להתקפה הבאה.',
      remember: 'הגנה טובה משאירה אותך מאוזן ומוכן להגיב — לא רק מוגן.',
      terms: [
        { en: 'HIGH GUARD', he: 'שמירה גבוהה', desc: 'הרמת הידיים והאמות כדי להגן על הראש מפני אגרופים ובעיטות.' },
        { en: 'PARRY', he: 'הסטה', desc: 'הסטה קטנה של המכה הצידה באמצעות היד, במקום לספוג אותה ישירות.' },
        { en: 'SLIP', he: 'התחמקות ראש', desc: 'הזזה קטנה של הראש לצד כדי לאפשר לאגרוף ישר לעבור לידך.' },
        { en: 'ROLL', he: 'גלגול מתחת למכה', desc: 'הנמכת הראש ותנועה מעגלית מתחת להוק, תוך שמירה על שיווי המשקל.' },
        { en: 'PULL BACK', he: 'משיכת גוף לאחור', desc: 'הזזה קצרה של הראש והגוף לאחור כדי לצאת מטווח המכה.' },
        { en: 'CHECK', he: 'חסימת בעיטה', desc: 'הרמת השוק כדי לחסום בעיטת לג׳־קיק באמצעות העצם החזקה של הרגל.' },
        { en: 'CATCH KICK', he: 'תפיסת בעיטה', desc: 'תפיסת רגלו של היריב לאחר בעיטה, כדי לעצור אותו ולהמשיך להפלה.' },
        { en: 'SPRAWL', he: 'ספראול', desc: 'שליחת הרגליים לאחור והורדת האגן כדי לעצור ניסיון הפלה לרגליים.' },
      ],
    },
    {
      title: 'היאבקות',
      sub: 'להעביר את הקרב לקרקע',
      intro: 'היאבקות ב־MMA כוללת תפיסות, הפלות, שליטה בגוף היריב ומאבק על העמידה. הפלה מעבירה את היריב מעמידתו אל הקרקע תוך שמירה על שליטה.',
      remember: 'הפלה טובה מתחילה בשליטה, לא בכוח בלבד.',
      terms: [
        { en: 'DOUBLE LEG', he: 'תפיסת שתי רגליים', desc: 'כניסה נמוכה, תפיסת שתי הרגליים של היריב והפלתו לקרקע.' },
        { en: 'SINGLE LEG', he: 'תפיסת רגל אחת', desc: 'שליטה ברגל אחת של היריב כדי להוציא אותו משיווי משקל ולהפיל אותו.' },
        { en: 'CLINCH', he: 'קלינץ׳', desc: 'מצב שבו הלוחמים צמודים בעמידה ונאבקים על שליטה, מכות או הפלה.' },
        { en: 'UNDERHOOK', he: 'אנדרהוק', desc: 'הכנסת היד מתחת לבית השחי של היריב כדי לשלוט בגופו ובכיוון התנועה.' },
        { en: 'WHIZZER', he: 'אוברהוק', desc: 'העברת היד מעל זרועו של היריב, כדי להגן מפני הפלה או להגביל תנועה.' },
        { en: 'PUMMEL', he: 'מאבק על אחיזות', desc: 'החלפה מתמשכת של מיקום הידיים בקלינץ׳ כדי להשיג אנדרהוק ושליטה פנימית.' },
        { en: 'CHAIN WRESTLING', he: 'שרשרת הפלות', desc: 'מעבר מניסיון הפלה אחד לאחר כאשר הטכניקה הראשונה נעצרת.' },
        { en: 'SCRAMBLE', he: 'מאבק על עמדה', desc: 'מצב מהיר ולא יציב שבו שני הלוחמים מנסים להשיג שליטה או עמדה טובה יותר.' },
      ],
    },
    {
      title: 'עבודה על הגדר',
      sub: 'שליטה, הפלה וקימה',
      intro: 'הגדר אינה רק גבול הזירה. אפשר להשתמש בה כדי ללחוץ, להגן, לקום או לשנות עמדה.',
      remember: 'על הגדר, מיקום הראש והידיים חשוב לא פחות מהכוח.',
      terms: [
        { en: 'CAGE WRESTLING', he: 'היאבקות על הגדר', desc: 'עבודת קלינץ׳ והפלות כאשר אחד הלוחמים צמוד לגדר.' },
        { en: 'FENCE CONTROL', he: 'שליטה על הגדר', desc: 'הצמדת היריב לגדר והגבלת יכולתו לנוע או להתרחק.' },
        { en: 'HEAD POSITION', he: 'מיקום הראש', desc: 'שימוש במצח או בצד הראש כדי לשלוט ביציבה ובכיוון התנועה של היריב.' },
        { en: 'FENCE UNDERHOOK', he: 'אנדרהוק על הגדר', desc: 'שימוש באנדרהוק כדי לסובב את היריב, למנוע הפלה או לצאת מהגדר.' },
        { en: 'WALL WALK', he: 'קימה בעזרת הגדר', desc: 'שימוש בגדר ובידיים כדי לעלות בהדרגה מעמדת קרקע חזרה לעמידה.' },
        { en: 'MAT RETURN', he: 'החזרה לקרקע', desc: 'הפלה חוזרת של יריב שמתחיל להתרומם או לקום.' },
        { en: 'TURN OFF THE CAGE', he: 'סיבוב מהגדר', desc: 'סיבוב הגוף והיריב כדי לצאת מהמצב שבו הגב שלך צמוד לכלוב.' },
        { en: 'DISENGAGE', he: 'התנתקות', desc: 'יציאה בטוחה מהקלינץ׳ וחזרה לטווח מכות.' },
      ],
    },
    {
      title: 'עמדות קרקע',
      sub: 'מי שולט ומה אפשר לעשות',
      intro: 'בקרקע, מיקום הגוף קובע מי יכול לתקוף, להגן, לקום או לחפש הכנעה. גארד הוא מצב שבו הלוחם התחתון משתמש ברגליו כדי לשלוט בלוחם שמעליו.',
      remember: 'לפני שמנסים לתקוף, צריך להבין את העמדה ולייצב אותה.',
      terms: [
        { en: 'CLOSED GUARD', he: 'גארד סגור', desc: 'הלוחם התחתון סוגר את רגליו סביב הגוף של היריב.' },
        { en: 'OPEN GUARD', he: 'גארד פתוח', desc: 'הרגליים אינן נעולות ומשמשות ליצירת מרחק, שליטה והתקפות.' },
        { en: 'HALF GUARD', he: 'חצי גארד', desc: 'הלוחם התחתון לוכד בין רגליו רגל אחת מרגלי היריב.' },
        { en: 'SIDE CONTROL', he: 'שליטת צד', desc: 'הלוחם העליון נמצא לרוחב גוף היריב ושולט בו מהצד.' },
        { en: 'MOUNT', he: 'מאונט', desc: 'הלוחם העליון יושב מעל גופו של היריב כאשר ברכיו משני הצדדים.' },
        { en: 'BACK CONTROL', he: 'שליטה בגב', desc: 'שליטה מאחורי היריב, בדרך כלל באמצעות הרגליים והידיים.' },
        { en: 'TURTLE', he: 'עמדת צב', desc: 'עמדה שבה הלוחם נמצא על הברכיים והידיים, כשהגב שלו פונה כלפי מעלה.' },
        { en: 'NORTH-SOUTH', he: 'צפון־דרום', desc: 'עמדת שליטה שבה הלוחמים פונים לכיוונים הפוכים והעליון נמצא מעל הראש והחזה.' },
      ],
    },
    {
      title: 'הכנעות',
      sub: 'חניקות ובריחים שמסיימים קרב',
      intro: 'הכנעה גורמת ליריב להיכנע באמצעות חניקה או לחץ מבוקר על מפרק. באימון מסמנים כניעה באמצעות טפיחה.',
      remember: 'באימון טופחים מוקדם ומשחררים מיד. המטרה היא ללמוד, לא להיפצע.',
      terms: [
        { en: 'REAR NAKED CHOKE', he: 'חניקה אחורית', desc: 'חניקה שמבוצעת מאחורי היריב באמצעות הידיים סביב הצוואר.' },
        { en: 'GUILLOTINE', he: 'גיליוטינה', desc: 'חניקה מלפנים שבה הראש והצוואר של היריב נלכדים מתחת לבית השחי.' },
        { en: 'TRIANGLE', he: 'משולש', desc: 'חניקה שמבוצעת באמצעות הרגליים סביב הצוואר ואחת מזרועות היריב.' },
        { en: 'ARM TRIANGLE', he: 'משולש יד', desc: 'חניקה שבה כתפו של היריב וזרועו נלחצות אל צווארו.' },
        { en: 'ARMBAR', he: 'בריח יד', desc: 'הפעלת לחץ מבוקר על מפרק המרפק באמצעות הירכיים והאגן.' },
        { en: 'KIMURA', he: 'קימורה', desc: 'בריח כתף שבו זרועו של היריב מכופפת ומסובבת מאחורי גופו.' },
        { en: 'AMERICANA', he: 'אמריקנה', desc: 'בריח כתף שבו הזרוע מכופפת ומסובבת בכיוון ההפוך מהקימורה.' },
        { en: 'ANKLE LOCK', he: 'בריח קרסול', desc: 'שליטה בכף הרגל והפעלת לחץ מבוקר על הקרסול.' },
      ],
    },
    {
      title: 'עבודה התקפית על הקרקע',
      sub: 'שליטה, מעברים ומכות',
      intro: 'המטרה אינה רק להגיע לקרקע, אלא לשלוט ביריב, לשפר עמדה ולתקוף בצורה בטוחה ומדויקת.',
      remember: 'קודם שולטים בעמדה, אחר כך תוקפים.',
      terms: [
        { en: 'GROUND & POUND', he: 'מכות מהקרקע', desc: 'שימוש באגרופים ובמרפקים כאשר אחד הלוחמים נמצא מעל היריב על הקרקע.' },
        { en: 'POSTURE', he: 'יציבה עליונה', desc: 'הרמת הראש והגוף כדי ליצור מרחב, לשמור על שיווי משקל ולהכות.' },
        { en: 'HAMMERFIST', he: 'מכת פטיש', desc: 'מכה באמצעות החלק התחתון של האגרוף, בתנועה הדומה לפטיש.' },
        { en: 'ELBOW', he: 'מרפק', desc: 'מכה קצרה וחזקה באמצעות המרפק, בעיקר מטווח קרוב.' },
        { en: 'SHORT PUNCH', he: 'אגרוף קצר', desc: 'אגרוף קטן ומהיר מטווח קרוב, כאשר אין מקום לתנועה מלאה.' },
        { en: 'TOP CONTROL', he: 'שליטה מלמעלה', desc: 'שמירה על היריב מתחתיך מתוך מניעת הקימה או הבריחה שלו.' },
        { en: 'GUARD PASS', he: 'מעבר גארד', desc: 'מעבר דרך רגליו של היריב לעמדת שליטה טובה יותר, כמו סייד קונטרול.' },
        { en: 'TRANSITION', he: 'מעבר עמדה', desc: 'תנועה מעמדה אחת לאחרת בהתאם לתגובה של היריב.' },
      ],
    },
    {
      title: 'תוצאות קרב ושיפוט',
      sub: 'איך קרב MMA מסתיים',
      intro: 'קרב יכול להסתיים לפני הזמן בנוקאאוט או בהכנעה. אם הקרב מגיע לסיום הזמן, השופטים קובעים את המנצח.',
      remember: 'כשאין סיום מוקדם, השופטים בוחנים בעיקר פגיעה אפקטיבית ושליטה אפקטיבית.',
      terms: [
        { en: 'KO', he: 'נוקאאוט', desc: 'סיום שבו לוחם אינו מסוגל להמשיך לאחר מכה חוקית.' },
        { en: 'TKO', he: 'נוקאאוט טכני', desc: 'עצירת הקרב על ידי השופט, הרופא או הפינה כאשר לוחם אינו מגן על עצמו.' },
        { en: 'SUBMISSION', he: 'ניצחון בהכנעה', desc: 'סיום הקרב לאחר שהיריב טופח, מודיע על כניעה או מאבד את היכולת להמשיך.' },
        { en: 'DECISION', he: 'החלטת שופטים', desc: 'קביעת המנצח על פי ניקוד השופטים כאשר הקרב אינו מסתיים לפני הזמן.' },
        { en: 'UNANIMOUS', he: 'החלטה פה אחד', desc: 'כל השופטים מעניקים את הניצחון לאותו לוחם.' },
        { en: 'SPLIT DECISION', he: 'החלטה חצויה', desc: 'שני שופטים מעניקים את הניצחון ללוחם אחד ושופט אחד ליריבו.' },
        { en: 'DRAW', he: 'תיקו', desc: 'תוצאה שבה ניקוד השופטים אינו מעניק ניצחון לאף אחד מהלוחמים.' },
        { en: 'NO CONTEST', he: 'ללא תוצאה', desc: 'קרב שמבוטל ללא מנצח, בדרך כלל בעקבות אירוע בלתי חוקי או מקרי.' },
      ],
    },
    {
      title: 'מושגים שתשמעו בקרב',
      sub: 'השפה שמסביב לאימון ולתחרות',
      intro: 'השפה שמסביב לזירה — מושגי האירוע והמושגים שמתארים את הלוחם עצמו.',
      remember: 'ככל שמכירים את השפה, קל יותר להבין את המאמן, את האימון ואת מה שקורה בקרב.',
      terms: [
        { en: 'OCTAGON', he: 'כלוב / אוקטגון', desc: 'הזירה המגודרת שבה מתקיימים קרבות MMA. אוקטגון הוא זירה בעלת שמונה צלעות.' },
        { en: 'FIGHT CARD', he: 'כרטיס הקרבות', desc: 'רשימת כל הקרבות שמתקיימים באירוע מסוים.' },
        { en: 'MAIN EVENT', he: 'הקרב המרכזי', desc: 'הקרב האחרון והמרכזי של האירוע.' },
        { en: 'WEIGHT CLASS', he: 'קטגוריית משקל', desc: 'קבוצת המשקל שבה הלוחם מתחרה.' },
        { en: 'WEIGHT CUT', he: 'הורדת משקל', desc: 'תהליך זמני של ירידה במשקל לפני השקילה. צריך להתבצע רק בליווי מקצועי.' },
        { en: 'REACH', he: 'מוטת ידיים', desc: 'המרחק בין קצות האצבעות כאשר הידיים פרושות לצדדים. משפיע על טווח המכות.' },
        { en: 'CORNER', he: 'הפינה', desc: 'המאמנים והצוות שמלווים את הלוחם ונותנים לו הנחיות בין הסיבובים.' },
        { en: 'GAS TANK', he: 'מאגר האנרגיה', desc: 'ביטוי שמתאר את יכולתו של הלוחם לשמור על קצב לאורך הקרב.' },
      ],
    },
  ];

  const state = {
    watched: loadWatched(),
    activeId: null,
    open: false,
    menuOpen: false,
    returnEl: null,
    watchTimer: null,
    prevOverflow: null,
    prevBodyOverflow: null,
    prevPadLeft: null,
  };

  function loadWatched() {
    try {
      const raw = localStorage.getItem('msa.progress.v1');
      const arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr.filter((n) => typeof n === 'number') : [];
    } catch (_) { return []; }
  }

  function persist() {
    try { localStorage.setItem('msa.progress.v1', JSON.stringify(state.watched)); } catch (_) {}
  }

  function markWatched(id) {
    if (state.watched.indexOf(id) >= 0) return;
    state.watched = state.watched.concat([id]);
    persist();
    renderProgress();
    renderCards();
  }

  function toggleWatched(id) {
    const has = state.watched.indexOf(id) >= 0;
    state.watched = has ? state.watched.filter((n) => n !== id) : state.watched.concat([id]);
    persist();
    renderProgress();
    renderCards();
    if (state.open && state.activeId === id) renderModal();
  }

  function ytThumb(yt) { return 'https://i.ytimg.com/vi/' + yt + '/maxresdefault.jpg'; }

  function ytEmbed(yt) {
    return 'https://www.youtube.com/embed/' + yt + '?autoplay=1&rel=0&playsinline=1&hl=he&cc_lang_pref=he';
  }

  function svgPlay() {
    return '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><path d="M7 4.5l13 7.5-13 7.5z"></path></svg>';
  }

  function svgCheck() {
    return '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"></path></svg>';
  }

  function cardHTML(l) {
    const watched = state.watched.indexOf(l.id) >= 0;
    const aria = l.kind === 'intro' ? 'נגן את סרטון המבוא' : 'נגן שיעור ' + l.num + ' — ' + l.title;
    const alt = l.kind === 'intro' ? 'פריים מתוך סרטון המבוא' : 'פריים מתוך שיעור ' + l.num + ' — ' + l.title;
    return (
      '<article data-msa="card" data-open-lesson="' + l.id + '" role="button" tabindex="0" aria-label="' + escapeAttr(aria) + '" style="position:relative;display:flex;flex-direction:column;background:var(--bg-surface);border:1px solid var(--white-a08);border-radius:var(--radius-md);overflow:hidden;cursor:pointer">' +
        '<div data-msa="thumb" style="position:relative;aspect-ratio:16/9;overflow:hidden;background:#000">' +
          '<img data-msa="thumbimg" data-yt-fallback src="' + ytThumb(l.yt) + '" alt="' + escapeAttr(alt) + '" loading="lazy" style="width:100%;height:100%;object-fit:cover;filter:saturate(0.75) contrast(1.06);transition:transform var(--dur-slow) var(--ease-out)">' +
          '<div aria-hidden="true" style="position:absolute;inset:0;background:linear-gradient(to top,rgba(5,5,6,0.9) 0%,rgba(5,5,6,0.3) 48%,rgba(5,5,6,0.1) 100%)"></div>' +
          '<span data-msa="num" aria-hidden="true" style="position:absolute;top:8px;inset-inline-start:14px;font-family:var(--font-display);font-weight:700;font-size:44px;line-height:0.9;color:var(--accent);transition:color var(--dur-fast) var(--ease-out);text-shadow:0 2px 20px rgba(0,0,0,0.75)">' + l.num + '</span>' +
          '<span data-msa="play" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:52px;height:52px;border-radius:999px;display:flex;align-items:center;justify-content:center;background:rgba(5,5,6,0.5);border:2px solid rgba(255,255,255,0.5);color:var(--white)">' + svgPlay() + '</span>' +
          (watched ? ('<span title="הושלם" style="position:absolute;top:12px;inset-inline-end:12px;width:26px;height:26px;border-radius:999px;display:flex;align-items:center;justify-content:center;background:var(--accent);color:var(--white)">' + svgCheck() + '</span>') : '') +
        '</div>' +
        '<div data-msa="cardbody" style="display:flex;flex-direction:column;gap:5px;padding:18px 22px 20px;flex:1 1 auto">' +
          '<div dir="ltr" style="text-align:right;font-family:var(--font-body);font-weight:700;font-size:11px;letter-spacing:0.18em;color:var(--text-faint)">' + l.term + '</div>' +
          '<h4 data-msa="cardtitle" style="margin:0;font-family:var(--font-display-he);font-weight:700;font-size:33px;line-height:1.02;letter-spacing:-0.01em;color:var(--white)">' + l.title + '</h4>' +
        '</div>' +
      '</article>'
    );
  }

  function escapeAttr(s) {
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function renderCards() {
    const container = document.getElementById('lessonGroups');
    if (!container) return;
    let html = '';
    GROUPS.forEach((g) => {
      html += '<div data-anim style="margin-top:clamp(38px,5vw,68px)">';
      html += '<div style="display:flex;flex-wrap:wrap;align-items:baseline;gap:16px;margin-bottom:20px">' +
                '<span style="font-family:var(--font-display-he);font-weight:700;font-size:33px;line-height:0.9;color:var(--accent)">' + g.letter + '</span>' +
                '<h3 style="margin:0;font-family:var(--font-display-he);font-weight:700;font-size:clamp(26px,2.6vw,33px);line-height:1.04;letter-spacing:-0.01em;white-space:nowrap;color:var(--white)">' + g.title + '</h3>' +
                '<span aria-hidden="true" style="flex:1 1 40px;height:1.5px;background:var(--rule-accent)"></span>' +
                '<span data-msa="grouphint" style="flex:0 0 auto;white-space:nowrap;font-family:var(--font-body);font-size:13px;color:var(--text-muted)">' + g.hint + '</span>' +
              '</div>';
      html += '<div data-msa="lessongrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:clamp(14px,1.6vw,22px)">';
      g.ids.forEach((id) => { html += cardHTML(LESSONS[id]); });
      html += '</div></div>';
    });
    container.innerHTML = html;
    armReveals();
    updateFinaleCheck();
  }

  function updateFinaleCheck() {
    const done = state.watched.indexOf(10) >= 0;
    const el = document.getElementById('finaleCheck');
    if (!el) return;
    if (done) { el.hidden = false; el.style.display = 'flex'; }
    else { el.hidden = true; el.style.display = 'none'; }
  }

  function svgBulb() {
    return '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex:0 0 auto;display:block"><path d="M9 18h6"></path><path d="M10 21h4"></path><path d="M12 3a6 6 0 0 0-3.6 10.8c.5.4.8.9.9 1.5l.1.7h5.2l.1-.7c.1-.6.4-1.1.9-1.5A6 6 0 0 0 12 3z"></path></svg>';
  }

  function svgCaret() {
    return '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"></path></svg>';
  }

  function pad2(n) { return n < 10 ? '0' + n : '' + n; }

  function renderGlossary() {
    const container = document.getElementById('glossaryChapters');
    if (!container) return;
    let html = '';
    GLOSSARY.forEach((ch, ci) => {
      const chapterNum = pad2(ci + 1);
      html += '<details data-anim class="ms-chapter">';
      html += '<summary>' +
                '<span class="ms-chapter-num">' + chapterNum + '</span>' +
                '<span class="ms-chapter-headings">' +
                  '<span class="ms-chapter-title">' + ch.title + '</span>' +
                  '<span class="ms-chapter-sub">' + ch.sub + '</span>' +
                '</span>' +
                '<span class="ms-chapter-caret" aria-hidden="true">' + svgCaret() + '</span>' +
              '</summary>';
      html += '<div class="ms-chapter-body">';
      if (ch.intro) html += '<p class="ms-chapter-intro">' + ch.intro + '</p>';
      html += '<div class="ms-term-grid">';
      ch.terms.forEach((t, ti) => {
        html += '<div class="ms-term">' +
                  '<span class="ms-term-num">' + pad2(ti + 1) + '</span>' +
                  '<span class="ms-term-divider" aria-hidden="true"></span>' +
                  '<div class="ms-term-body">' +
                    '<div class="ms-term-en">' + t.en + '</div>' +
                    '<div class="ms-term-he">' + t.he + '</div>' +
                    '<p class="ms-term-desc">' + t.desc + '</p>' +
                  '</div>' +
                '</div>';
      });
      html += '</div>';
      if (ch.remember) {
        html += '<div class="ms-chapter-remember ms-remember" dir="rtl">' +
                  svgBulb() +
                  '<div class="ms-remember-text"><span>זכור:</span> ' + ch.remember + '</div>' +
                '</div>';
      }
      html += '</div></details>';
    });
    container.innerHTML = html;
    armReveals();
  }

  function renderProgress() {
    const done = LESSONS.filter((l) => l.kind !== 'intro' && state.watched.indexOf(l.id) >= 0).length;
    document.getElementById('progressLabel').textContent = done + '/10';
    document.getElementById('progressBar').style.width = (done * 10) + '%';
    const continueBtn = document.getElementById('continueBtn');
    const resetBtn = document.getElementById('resetBtn');
    if (done > 0) {
      continueBtn.querySelector('span') ? (continueBtn.querySelector('span').textContent = 'המשך מהשיעור הבא') : (continueBtn.textContent = 'המשך מהשיעור הבא');
      resetBtn.hidden = false;
    } else {
      continueBtn.textContent = 'התחילו משיעור 01';
      resetBtn.hidden = true;
    }
    updateFinaleCheck();
  }

  function nextUnwatched() {
    const data = LESSONS;
    return data.find((d) => state.watched.indexOf(d.id) < 0) || data[0];
  }

  function lockScroll() {
    const d = document.documentElement;
    const b = document.body;
    state.prevOverflow = d.style.overflow;
    state.prevBodyOverflow = b.style.overflow;
    state.prevPadLeft = b.style.paddingLeft;
    const bar = window.innerWidth - d.clientWidth;
    d.style.overflow = 'hidden';
    b.style.overflow = 'hidden';
    if (bar > 0) b.style.paddingLeft = bar + 'px';
  }

  function unlockScroll() {
    if (state.prevOverflow === null) return;
    document.documentElement.style.overflow = state.prevOverflow || '';
    document.body.style.overflow = state.prevBodyOverflow || '';
    document.body.style.paddingLeft = state.prevPadLeft || '';
    state.prevOverflow = state.prevBodyOverflow = state.prevPadLeft = null;
  }

  function openLesson(id) {
    if (!state.open) {
      state.returnEl = document.activeElement;
      lockScroll();
    }
    state.activeId = id;
    state.open = true;
    state.menuOpen = false;
    closeMenuPanel();
    renderModal();
    document.getElementById('modalWrap').hidden = false;
    document.getElementById('modalWrap').style.display = 'flex';
    setTimeout(() => document.getElementById('modalPanel').focus(), 0);
    clearTimeout(state.watchTimer);
    state.watchTimer = setTimeout(() => markWatched(id), 20000);
  }

  function closeModal() {
    if (!state.open) return;
    clearTimeout(state.watchTimer);
    state.open = false;
    state.activeId = null;
    const wrap = document.getElementById('modalWrap');
    wrap.hidden = true;
    wrap.style.display = 'none';
    document.getElementById('modalIframe').src = '';
    unlockScroll();
    if (state.returnEl && state.returnEl.focus) {
      try { state.returnEl.focus({ preventScroll: true }); } catch (_) { state.returnEl.focus(); }
    }
    state.returnEl = null;
  }

  function renderModal() {
    const a = state.activeId != null ? LESSONS[state.activeId] : null;
    if (!a) return;
    document.getElementById('modalNum').textContent = a.num;
    document.getElementById('msa-modal-title').textContent = a.title;
    document.getElementById('modalTerm').textContent = a.term;
    document.getElementById('modalDesc').textContent = a.desc;
    const iframe = document.getElementById('modalIframe');
    iframe.src = ytEmbed(a.yt);
    iframe.title = (a.kind === 'intro' ? 'סרטון המבוא' : 'שיעור ' + a.num) + ' — ' + a.title;
    const prev = document.getElementById('modalPrev');
    const next = document.getElementById('modalNext');
    prev.disabled = a.id <= 0;
    prev.setAttribute('aria-disabled', prev.disabled ? 'true' : 'false');
    next.disabled = a.id >= LESSONS.length - 1;
    next.setAttribute('aria-disabled', next.disabled ? 'true' : 'false');
    const mark = document.getElementById('modalMark');
    const isWatched = state.watched.indexOf(a.id) >= 0;
    mark.classList.remove('ms-btn--primary', 'ms-btn--secondary');
    mark.classList.add(isWatched ? 'ms-btn--primary' : 'ms-btn--secondary');
    mark.querySelector('span').textContent = isWatched ? 'הושלם' : 'סמן כהושלם';
  }

  function trapKey(e) {
    if (e.key === 'Escape') { e.stopPropagation(); closeModal(); return; }
    if (e.key !== 'Tab') return;
    const panel = document.getElementById('modalPanel');
    const nodes = panel.querySelectorAll('a[href],button:not([disabled]),iframe,[tabindex]:not([tabindex="-1"])');
    if (!nodes.length) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    const act = document.activeElement;
    if (e.shiftKey && (act === first || act === panel)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && act === last) { e.preventDefault(); first.focus(); }
  }

  function toggleMenu() {
    state.menuOpen = !state.menuOpen;
    const panel = document.getElementById('menuPanel');
    const btn = document.getElementById('menuBtn');
    if (state.menuOpen) {
      panel.hidden = false;
      panel.style.display = 'flex';
      btn.setAttribute('aria-expanded', 'true');
    } else {
      closeMenuPanel();
    }
  }

  function closeMenuPanel() {
    state.menuOpen = false;
    const panel = document.getElementById('menuPanel');
    const btn = document.getElementById('menuBtn');
    panel.hidden = true;
    panel.style.display = 'none';
    btn.setAttribute('aria-expanded', 'false');
  }

  // Reveal-on-scroll
  let io;
  function armReveals() {
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    if (!('IntersectionObserver' in window)) return;
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.remove('msa-off'); io.unobserve(en.target); } });
      }, { threshold: 0 });
    }
    document.querySelectorAll('[data-anim]').forEach((el) => {
      if (el.dataset.armed) return;
      el.dataset.armed = '1';
      if (el.getBoundingClientRect().top > window.innerHeight * 0.9) {
        el.classList.add('msa-off');
        io.observe(el);
      }
    });
  }

  function updateScrollBar() {
    const bar = document.getElementById('scrollBar');
    if (!bar) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0) + '%';
    document.querySelectorAll('[data-anim].msa-off').forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.remove('msa-off');
    });
  }

  function wireStaticThumbFallback() {
    document.querySelectorAll('img[data-yt-fallback]').forEach(bindFallback);
  }
  function bindFallback(img) {
    if (img.dataset.fbBound) return;
    img.dataset.fbBound = '1';
    img.addEventListener('error', () => {
      if (img.dataset.fb) return;
      img.dataset.fb = '1';
      img.src = img.src.replace('/maxresdefault.jpg', '/hqdefault.jpg');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    renderProgress();
    renderGlossary();
    wireStaticThumbFallback();
    // wire delegated fallback for newly-rendered thumbs
    document.querySelectorAll('img[data-yt-fallback]').forEach(bindFallback);
    armReveals();

    // Splash removal
    setTimeout(() => {
      const s = document.querySelector('[data-msa=splash]');
      if (s && s.parentNode) s.parentNode.removeChild(s);
    }, 2400);

    // Click delegation for lesson cards / finale / intro tile
    document.body.addEventListener('click', (e) => {
      const openEl = e.target.closest && e.target.closest('[data-open-lesson]');
      if (openEl) {
        e.preventDefault();
        const id = parseInt(openEl.getAttribute('data-open-lesson'), 10);
        if (!Number.isNaN(id)) openLesson(id);
        return;
      }
    });

    // Keyboard: cards + finale (Enter/Space)
    document.body.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const openEl = e.target.closest && e.target.closest('[data-open-lesson][role="button"]');
      if (openEl) {
        e.preventDefault();
        const id = parseInt(openEl.getAttribute('data-open-lesson'), 10);
        if (!Number.isNaN(id)) openLesson(id);
      }
    });

    // Header buttons
    document.getElementById('menuBtn').addEventListener('click', toggleMenu);
    document.querySelectorAll('#menuPanel [data-menu-link]').forEach((a) => {
      a.addEventListener('click', () => closeMenuPanel());
    });

    // Progress panel
    document.getElementById('continueBtn').addEventListener('click', () => {
      const done = LESSONS.filter((l) => l.kind !== 'intro' && state.watched.indexOf(l.id) >= 0).length;
      openLesson(done > 0 ? nextUnwatched().id : 1);
    });
    document.getElementById('resetBtn').addEventListener('click', () => {
      state.watched = [];
      persist();
      renderProgress();
      renderCards();
    });

    // Modal wiring
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalWrap').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) closeModal();
    });
    document.getElementById('modalPanel').addEventListener('keydown', trapKey);
    document.getElementById('modalPrev').addEventListener('click', () => {
      if (state.activeId != null && state.activeId > 0) openLesson(state.activeId - 1);
    });
    document.getElementById('modalNext').addEventListener('click', () => {
      if (state.activeId != null && state.activeId < LESSONS.length - 1) openLesson(state.activeId + 1);
    });
    document.getElementById('modalMark').addEventListener('click', () => {
      if (state.activeId != null) toggleWatched(state.activeId);
    });

    // Scroll listeners
    window.addEventListener('scroll', updateScrollBar, { passive: true });
    updateScrollBar();

    // Escape closes modal (global)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.open) closeModal();
    });
    // Resize closes mobile menu when going wide
    window.addEventListener('resize', () => {
      if (state.menuOpen && window.innerWidth > 860) closeMenuPanel();
    });
  });
})();
