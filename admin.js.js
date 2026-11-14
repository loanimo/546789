let usersList = JSON.parse(localStorage.getItem('taskbd_users_db')) || [];
let withdrawRequests = JSON.parse(localStorage.getItem('taskbd_withdraws')) || [];
let depositRequests = JSON.parse(localStorage.getItem('taskbd_deposits')) || [];
let globalNotice = localStorage.getItem('taskbd_global_notice') || "";

function saveAdminData() {
    localStorage.setItem('taskbd_users_db', JSON.stringify(usersList));
    localStorage.setItem('taskbd_withdraws', JSON.stringify(withdrawRequests));
    localStorage.setItem('taskbd_deposits', JSON.stringify(depositRequests));
    localStorage.setItem('taskbd_global_notice', globalNotice);
}

function renderAdminPanel() {
    let noticeInput = document.getElementById('admin-global-notice-input');
    if(noticeInput) noticeInput.value = globalNotice;

    let depContainer = document.getElementById('admin-deposits-list');
    if(depContainer) {
        depContainer.innerHTML = depositRequests.length === 0 ? `<p class="text-slate-500">কোনো ডিপোজিট নেই।</p>` : depositRequests.map(d => `
            <div class="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                <div class="flex justify-between font-bold text-white"><span>${d.identifier}</span><span class="text-emerald-400">${d.amount} ৳</span></div>
                <div class="text-[10px] text-slate-400">TrxID: ${d.trxId}</div>
                ${d.status === 'Pending' ? `<button onclick="approveDeposit(${d.id})" class="bg-emerald-600 px-3 py-1 rounded text-white font-bold text-[10px] mt-1">এপ্রুভ করুন</button>` : '<span class="text-emerald-400 text-[10px]">সফল</span>'}
            </div>
        `).join('');
    }

    let wdContainer = document.getElementById('admin-withdraws-list');
    if(wdContainer) {
        wdContainer.innerHTML = withdrawRequests.length === 0 ? `<p class="text-slate-500">কোনো উইথড্র নেই।</p>` : withdrawRequests.map(w => `
            <div class="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                <div class="flex justify-between font-bold text-white"><span>${w.identifier}</span><span class="text-amber-400">${w.amount} ৳</span></div>
                ${w.status === 'Pending' ? `<button onclick="approveWithdraw(${w.id})" class="bg-amber-600 px-3 py-1 rounded text-white font-bold text-[10px] mt-1">পরিশোধ করুন</button>` : '<span class="text-emerald-400 text-[10px]">পরিশোধিত</span>'}
            </div>
        `).join('');
    }

    let usersContainer = document.getElementById('admin-users-list');
    if(usersContainer) {
        usersContainer.innerHTML = usersList.length === 0 ? `<p class="text-slate-500">কোনো ইউজার নেই।</p>` : usersList.map((u, index) => `
            <div class="bg-slate-950 p-3 rounded-xl border border-slate-800 flex justify-between items-center">
                <div><span class="font-bold text-white text-xs">${u.identifier}</span><span class="block text-[10px] text-emerald-400">ব্যালেন্স: ${u.balance} ৳</span></div>
                <button onclick="adminAddBalance(${index})" class="bg-emerald-600/20 text-emerald-300 px-3 py-1 rounded text-[10px]">ব্যালেন্স যোগ</button>
            </div>
        `).join('');
    }
}

function updateGlobalNotice() {
    let val = document.getElementById('admin-global-notice-input').value.trim();
    if(val) { globalNotice = val; saveAdminData(); alert("নোটিশ আপডেট হয়েছে!"); }
}

function approveDeposit(id) {
    let dep = depositRequests.find(d => d.id === id);
    if(dep && dep.status === 'Pending') {
        dep.status = 'Success';
        let u = usersList.find(user => user.identifier === dep.identifier);
        if(u) { u.balance += dep.amount * 2; u.recharge += dep.amount; }
        saveAdminData();
        renderAdminPanel();
    }
}

function approveWithdraw(id) {
    let wd = withdrawRequests.find(w => w.id === id);
    if(wd && wd.status === 'Pending') { wd.status = 'Success'; saveAdminData(); renderAdminPanel(); }
}

function adminAddBalance(index) {
    let u = usersList[index];
    let amt = prompt("কত টাকা যোগ করতে চান?", "100");
    if(amt && !isNaN(amt)) { u.balance += parseFloat(amt); saveAdminData(); renderAdminPanel(); }
}

renderAdminPanel();