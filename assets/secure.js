(function() {
    // 1. البيانات الأساسية (يجب تعريفها هنا لتجنب أخطاء التوقف)
    const validDomain = "nmu-ce.giize.com";
    const developerName = "ABDELRHMAN ELSAYED";
    
    // 2. التحقق من النطاق
    if (!window.location.hostname.includes(validDomain)) {
        // حماية: إذا لم يكن هناك body بعد (تحميل سريع)، ننتظر تحميله
        const blockSite = () => {
            document.body.innerHTML = `
            <div style="margin:0;padding:0;font-family:sans-serif;background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);height:100vh;display:flex;justify-content:center;align-items:center;color:#fff;overflow:hidden;direction:rtl;position:fixed;top:0;left:0;width:100%;z-index:999999;">
                <div style="position:relative;z-index:1;background:rgba(255,255,255,0.05);backdrop-filter:blur(15px);border:1px solid rgba(255,255,255,0.1);padding:40px;border-radius:24px;text-align:center;max-width:500px;width:90%;box-shadow:0 25px 50px -12px rgba(0,0,0,0.5)">
                    <div style="display:inline-block;padding:5px 15px;background:rgba(245,158,11,.2);color:#f59e0b;border-radius:50px;font-size:13px;font-weight:700;margin-bottom:20px;border:1px solid rgba(245,158,11,.3)">⚠️ نطاق غير مصرح به</div>
                    <h1 style="font-size:24px;margin-bottom:10px;color:#f8fafc">تم إيقاف عرض الموقع</h1>
                    <p style="font-size:16px;color:#94a3b8;line-height:1.6;margin-bottom:30px">عذراً، هذا النظام محمي ولا يُسمح باستضافته على نطاقات غير رسمية.</p>
                    <a href="https://${validDomain}" style="display:inline-block;text-decoration:none;background:#2563eb;color:#fff;padding:12px 30px;border-radius:12px;font-weight:700;transition:.3s;">العودة للموقع الرسمي</a>
                    <div style="margin-top:30px;font-size:13px;color:#64748b;border-top:1px solid rgba(255,255,255,0.1);padding-top:20px;">
                        Powered By <span style="color:#00f2ff; font-weight:bold;">${developerName}</span> &#169; ${new Date().getFullYear()}
                    </div>
                </div>
            </div>`;
        };

        if (document.body) {
            blockSite();
        } else {
            window.addEventListener('DOMContentLoaded', blockSite);
        }
        throw new Error("Unauthorized Domain: Access Denied.");
    }

    // 3. منع أدوات المطورين (خفيف للأداء)
    setInterval(() => {
        (function() { return false; }['constructor']('debugger')['call']());
    }, 5000); // رفعنا الوقت لـ 5 ثواني عشان نريح الـ Performance
    
    console.log("System Protected by " + developerName);
})();
