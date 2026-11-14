<!DOCTYPE html>
<html lang="bn" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Bd Official - Admin Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = { darkMode: 'class' }
    </script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-slate-950 text-slate-100 font-sans min-h-screen pb-16">

    <div class="max-w-4xl mx-auto p-4 space-y-6">
        
        <div class="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 p-5 rounded-2xl shadow-2xl flex justify-between items-center">
            <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg"><i class="fa-solid fa-user-shield"></i></div>
                <div>
                    <h1 class="text-lg font-black text-white">Task Bd Official - Admin Dashboard</h1>
                    <p class="text-xs text-indigo-400">সিস্টেম কন্ট্রোল ও ক্লায়েন্ট ম্যানেজমেন্ট প্যানেল</p>
                </div>
            </div>
            <a href="index.html" class="bg-rose-600/20 hover:bg-rose-600 border border-rose-500/30 text-rose-400 hover:text-white px-4 py-2 rounded-xl text-xs font-bold transition shadow">ইউজার হোম পেজে যান</a>
        </div>

        <div class="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-3 shadow-xl">
            <h3 class="font-bold text-sm text-amber-400 flex items-center"><i class="fa-solid fa-bullhorn mr-2"></i> গ্লোবাল নোটিশ ও পপআপ এনাউন্সমেন্ট আপডেট</h3>
            <textarea id="admin-global-notice-input" rows="2" class="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-500" placeholder="সকল ইউজারের হোম পেজে দেখানোর জন্য নোটিশ লিখুন..."></textarea>
            <button onclick="updateGlobalNotice()" class="bg-amber-600 hover:bg-amber-700 px-4 py-2.5 rounded-xl text-xs font-bold text-white transition shadow">নোটিশ আপডেট করুন</button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-3 shadow-xl">
                <h3 class="font-bold text-sm text-emerald-400 flex items-center"><i class="fa-solid fa-wallet mr-2"></i> ডিপোজিট রিকোয়েস্ট লিস্ট</h3>
                <div id="admin-deposits-list" class="space-y-2.5 max-h-60 overflow-y-auto text-xs"></div>
            </div>

            <div class="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-3 shadow-xl">
                <h3 class="font-bold text-sm text-amber-400 flex items-center"><i class="fa-solid fa-money-bill-transfer mr-2"></i> উইথড্র রিকোয়েস্ট লিস্ট</h3>
                <div id="admin-withdraws-list" class="space-y-2.5 max-h-60 overflow-y-auto text-xs"></div>
            </div>
        </div>

        <div class="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-3 shadow-xl">
            <h3 class="font-bold text-sm text-indigo-400 flex items-center"><i class="fa-solid fa-users-gear mr-2"></i> রেজিস্টার্ড ইউজার লিস্ট ও ব্যালেন্স কন্ট্রোল</h3>
            <div id="admin-users-list" class="space-y-3 max-h-96 overflow-y-auto text-xs"></div>
        </div>

    </div>

    <script src="admin.js"></script>
</body>
</html>