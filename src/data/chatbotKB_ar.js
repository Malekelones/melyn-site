/* ============================================================
   MELYN — Arabic Chatbot Knowledge Base (KB)
   ============================================================ */

/**
 * Arabic Intent Matching
 * @param {string} msg 
 * @returns {object} { response, entry }
 */
export function matchIntent_ar(msg) {
    const text = msg.toLowerCase();

    // 1. GREETING
    if (text.includes('مرحبا') || text.includes('سلام') || text.includes('أهلا')) {
        return {
            response: "مرحباً! أنا مساعد MELYN الذكي. كيف يمكنني مساعدتك اليوم في مشاريع البيانات والذكاء الاصطناعي الخاصة بك؟",
            entry: { intent: 'greeting' }
        };
    }

    // 2. SERVICES
    if (text.includes('خدمات') || text.includes('ماذا تفعل')) {
        return {
            response: "نحن نقدم خبرة كاملة في: الذكاء الاصطناعي التوليدي، الأتمتة (RPA)، إدارة البيانات، ذكاء الأعمال (BI)، السحابة والأمان. أي من هذه المجالات يهمك أكثر؟",
            entry: { intent: 'services' }
        };
    }

    // 3. METHODOLOGY
    if (text.includes('منهجية') || text.includes('كيف تعمل')) {
        return {
            response: "نهجنا يعتمد على 3 ركائز: الاستراتيجية (تحديد الحالات ذات القيمة العالية)، التنفيذ (بناء حلول آمنة)، والنتائج (ضمان عائد استثمار ملموس).",
            entry: { intent: 'methodology' }
        };
    }

    // 4. TUNIS OFFICE
    if (text.includes('تونس') || text.includes('عنوان تونس')) {
        return {
            response: "يقع مكتبنا في تونس في: مركز العمران، نهج الشام، تونس 1002. نحن فخورون بالمساهمة في التحول الرقمي في المنطقة!",
            entry: { intent: 'tunis_office' }
        };
    }

    // 5. CASE STUDIES
    if (text.includes('دراسات حالة') || text.includes('أمثلة')) {
        return {
            response: "لقد ساعدنا العديد من العملاء في قطاعات مثل التأمين والخدمات اللوجستية والمالية على تحسين عملياتهم باستخدام IA. هل تود معرفة المزيد عن مشروع محدد؟",
            entry: { intent: 'case_studies' }
        };
    }

    // DEFAULT
    return {
        response: "عذراً، لم أفهم طلبك تماماً. هل يمكنك إعادة صياغته؟ يمكنني إخبارك عن خدماتنا، مكتبنا في تونس، أو كيف نعمل.",
        entry: null
    };
}

/**
 * Arabic Quick Replies
 * @param {object} entry 
 * @returns {Array} 
 */
export function getQuickReplies_ar(entry) {
    if (!entry) return ['خدماتنا', 'منهجيتنا', 'مكتب تونس'];

    switch (entry.intent) {
        case 'greeting':
            return ['خدماتنا', 'مكتب تونس', 'دراسات حالة'];
        case 'services':
            return ['الذكاء الاصطناعي', 'الأتمتة', 'إدارة البيانات'];
        case 'methodology':
            return ['خدماتنا', 'اتصل بنا'];
        case 'tunis_office':
            return ['اتصل بنا', 'خدماتنا'];
        default:
            return ['خدماتنا', 'منهجيتنا', 'مكتب تونس'];
    }
}
