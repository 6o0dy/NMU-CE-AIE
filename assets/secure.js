//<![CDATA[
(function() {
    // 1. الإعدادات الأساسية
    const validDomain = "nmu-ce.giize.com";
    const developerName = "ABDELRHMAN ELSAYED";
    const hostname = window.location.hostname;

    // 2. دالة الحظر الاحترافية
    const blockSiteUI = () => {
        document.body.innerHTML = `
        <div style="margin:0;padding:0;font-family:sans-serif;background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);height:100vh;display:flex;justify-content:center;align-items:center;color:#fff;overflow:hidden;direction:rtl;position:fixed;top:0;left:0;width:100%;z-index:999999;">
            <div style="position:relative;z-index:1;background:rgba(255,255,255,0.05);backdrop-filter:blur(15px);border:1px solid rgba(255,255,255,0.1);padding:40px;border-radius:24px;text-align:center;max-width:500px;width:90%;box-shadow:0 25px 50px -12px rgba(0,0,0,0.5)">
                <div style="display:inline-block;padding:5px 15px;background:rgba(245,158,11,.2);color:#f59e0b;border-radius:50px;font-size:13px;font-weight:700;margin-bottom:20px;border:1px solid rgba(245,158,11,.3)">⚠️ نطاق غير مصرح به</div>
                <h1 style="font-size:24px;margin-bottom:10px;color:#f8fafc">تم إيقاف عرض الموقع</h1>
                <p style="font-size:16px;color:#94a3b8;line-height:1.6;margin-bottom:30px">عذراً، هذا النظام محمي ولا يُسمح باستضافته على نطاقات غير رسمية حفاظاً على الحقوق.</p>
                <a href="https://${validDomain}" style="display:inline-block;text-decoration:none;background:#2563eb;color:#fff;padding:12px 30px;border-radius:12px;font-weight:700;transition:.3s;box-shadow:0 10px 15px -3px rgba(37,99,235,.4)">العودة للموقع الرسمي</a>
                <div style="margin-top:30px;font-size:13px;color:#64748b;border-top:1px solid rgba(255,255,255,0.1);padding-top:20px;">
                    Powered By <span style="color:#00f2ff; font-weight:bold;">${developerName}</span> &#169; ${new Date().getFullYear()}
                </div>
            </div>
        </div>`;
        document.body.style.margin = "0";
    };

    // 3. التحقق (يسمح بالدومين الرسمي + روابط المعاينة من بلوجر)
    const isAuthorized = hostname.includes(validDomain) || hostname.includes("blogger.com") || hostname.includes("post-preview");

    if (!isAuthorized) {
        if (document.body) { blockSiteUI(); } 
        else { window.addEventListener('DOMContentLoaded', blockSiteUI); }
        throw new Error("Unauthorized Domain.");
    }

    // 4. حماية ضد المطورين (خفيفة للأداء)
    setInterval(() => {
        (function() { return false; }['constructor']('debugger')['call']());
    }, 5000);

    // تعريف متغير عالمي للتأكد من تحميل الملف بنجاح
    window.externalSecureLoaded = true;
})();
//]]>
