import React, { useState, useEffect } from 'react';
import { Home, CreditCard, PieChart, Wallet, 
  DollarSign, PiggyBank, ArrowUpRight, ArrowDownRight,
  Settings, LogOut, Search, Bell 
} from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';


//  تصميم أزرار القائمة الجانبية
function MenuItem({ icon, text, active, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ x: -10, color: '#4f46e5' }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        padding: '12px 20px',
        cursor: 'pointer',
        borderRadius: '12px',
        transition: 'all 0.3s ease',
        backgroundColor: active ? '#f5f3ff' : 'transparent',
        color: active ? '#4f46e5' : '#6b7280',
        fontWeight: active ? 'bold' : 'normal'
      }}
    >
      {icon}
      <span>{text}</span>
    </motion.div>
  );
}

function App() {
  
const [userInfo, setUserInfo] = useState({
  name: "آية رمضان",
  email: "aya@example.com",
  profilePic: null 
});
const handleSave = () => {
  alert("تم حفظ التعديلات بنجاح!");
};

  const [activePage, setActivePage] = useState(localStorage.getItem('activePage') || 'الرئيسية');
useEffect(() => {
  localStorage.setItem('activePage', activePage);
}, [activePage]);


  // بيانات الإحصائيات
  const stats = [
    { id: 1, title: 'إجمالي الدخل', amount: '$8,450.00', icon: <DollarSign />, color: '#22c55e' },
    { id: 2, title: 'المصاريف', amount: '$3,240.00', icon: <Wallet />, color: '#ef4444' },
    { id: 3, title: 'المدخرات', amount: '$5,210.00', icon: <PiggyBank />, color: '#3b82f6' }
  ];

  // بيانات النشاط الأخير
  const activities = [
    { id: 1, title: 'راتب شهري', date: 'اليوم، 09:00 ص', amount: '+$4,500.00', type: 'income', icon: <ArrowUpRight size={20} /> },
    { id: 2, title: 'اشتراك نتفليكس', date: 'أمس، 08:30 م', amount: '-$15.99', type: 'expense', icon: <ArrowDownRight size={20} /> },
    { id: 3, title: 'سوبر ماركت', date: '12 أكتوبر، 06:15 م', amount: '-$124.50', type: 'expense', icon: <ArrowDownRight size={20} /> }
  ];

  //بيانات البطاقات
  const [cards, setCards] = useState([
    { id: 1, balance: '5,420', cardNumber: '**** **** **** 4532', expiry: '12/26', type: 'Visa', color: 'bg-gradient-to-r from-blue-600 to-blue-800' },
    { id: 2, balance: '1,200', cardNumber: '**** **** **** 8891', expiry: '09/25', type: 'MasterCard', color: 'bg-gradient-to-r from-purple-600 to-purple-800' }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [newCard, setNewCard] = useState({ balance: '', cardNumber: '', expiry: '', type: 'Visa' });

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f3f4f6', fontFamily: 'system-ui, sans-serif' }} dir="rtl">
      
      {/* =================  (القائمة الجانبية) ================= */}
      <div style={{ width: '280px', backgroundColor: '#ffffff', padding: '30px 20px', display: 'flex', flexDirection: 'column', borderLeft: '1px solid #e5e7eb' }}>
        
<div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '50px', padding: '0 10px' }}>
  <div style={{ 
    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)', 
    width: '40px', 
    height: '40px', 
    borderRadius: '12px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    boxShadow: '0 10px 15px -3px rgba(79, 70, 229, 0.3)' 
  }}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  </div>
  <h2 style={{ margin: 0, color: '#1f2937', fontSize: '26px', fontWeight: '900' }}>
    المستقبل <span style={{ color: '#4f46e5' }}>تك</span>
  </h2>
</div>


        {/* أزرار التنقل الأساسية */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
          <MenuItem icon={<Home size={22} />} text="الرئيسية" active={activePage === 'الرئيسية'} onClick={() => setActivePage('الرئيسية')} />
          <MenuItem icon={<CreditCard size={22} />} text="البطاقات" active={activePage === 'البطاقات'} onClick={() => setActivePage('البطاقات')} />
          <MenuItem icon={<PieChart size={22} />} text="الإحصائيات" active={activePage === 'الإحصائيات'} onClick={() => setActivePage('الإحصائيات')} />
        </div>

        {/* أزرار الإعدادات والخروج */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'auto' }}>
          <MenuItem icon={<Settings size={22} />} text="الإعدادات" active={activePage === 'الإعدادات'} onClick={() => setActivePage('الإعدادات')} />
          <MenuItem icon={<LogOut size={22} />} text="تسجيل الخروج" active={activePage === 'تسجيل الخروج'} onClick={() => setActivePage( 'تسجيل الخروج')} />
        </div>
      </div>

      {/* ================= المحتوى الرئيسي ================= */}
      <div style={{ flex: 1, padding: '40px 50px', overflowY: 'auto' }}>
        
        {/* الشريط العلوي */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div style={{ position: 'relative', width: '300px' }}>
            <Search size={20} style={{ position: 'absolute', right: '15px', top: '12px', color: '#9ca3af' }} />
            <input 
              type="text" 
              placeholder="ابحث هنا..." 
              style={{ width: '100%', padding: '12px 45px 12px 15px', borderRadius: '12px', border: 'none', backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', outline: 'none' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ position: 'relative', cursor: 'pointer', width: '45px', height: '45px', backgroundColor: '#ffffff', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
              <Bell size={22} color="#4b5563" />
              <div style={{ position: 'absolute', top: '10px', right: '12px', width: '8px', height: '8px', backgroundColor: '#ef4444', borderRadius: '50%' }}></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}>
              <div style={{ textAlign: 'left' }}>
                <p style={{ margin: 0, fontWeight: 'bold', color: '#1f2937' }}>Aya Engineer</p>
                <p style={{ margin: 0, fontSize: '12px', color: '#6b7280' }}>aya@example.com</p>
              </div>
              <img src="https://ui-avatars.com/api/?name=Aya&background=e0e7ff&color=4f46e5" alt="Profile" style={{ width: '45px', height: '45px', borderRadius: '50%' }} />
            </div>
          </div>
        </div>

        {/* ----------------- صفحة: الرئيسية ----------------- */}
        {activePage === 'الرئيسية' && (
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
           <h1 style={{ color: '#1f2937', marginBottom: '5px' }}>مرحبا بك في المستقبل تك✨</h1>
           <p style={{ color: '#6b7280', marginBottom: '30px' }}>آخر تحديث اليوم</p>

           <motion.div
              whileHover={{ scale: 1.02, rotateY: 2 }}
              style={{
                width: '350px',
                height: '210px',
                padding: '25px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #4f46e5 0%, #9333ea 100%)',
                color: 'white',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(79, 70, 229, 0.3)',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignitems: 'flex-start' }}>
                <div style={{ width: '45px', height: '35px', background: 'linear-gradient(135deg, #ffd700, #ffb800)', borderRadius: '6px', opacity: 0.9 }} />
                <h2 style={{ fontStyle: 'italic', margin: 0, opacity: 0.9, fontSize: '24px' }}>VISA</h2>
              </div>
              <div style={{ marginTop: '35px' }}>
                <p style={{ fontSize: '20px', letterSpacing: '4px', opacity: 0.9, margin: 0 }}>**** **** **** 4421</p>
              </div>
              <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'space-between', alignitems: 'flex-end' }}>
                <div>
                  <p style={{ fontSize: '13px', opacity: 0.8, marginBottom: '5px' }}>الرصيد الكلي</p>
                  <h2 style={{ margin: 0, fontSize: '26px', fontWeight: 'bold' }}>$12,450.00</h2>
                </div>
                <p style={{ fontSize: '14px', opacity: 0.9, margin: 0 }}>Aya Engineer</p>
              </div>
              <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '120px', height: '120px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }} />
            </motion.div>

            {/* مربعات الإحصائيات الملونة */}
            <div style={{ display: 'flex', gap: '20px', marginTop: '40px', flexWrap: 'wrap' }}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  style={{
                    flex: 1, minWidth: '220px', background: '#fff', padding: '25px', borderRadius: '20px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.02)', display: 'flex', alignitems: 'center', gap: '20px'
                  }}
                >
                  <div style={{ 
                    fontSize: '24px', background: stat.color, color: 'white', 
                    width: '55px', height: '55px', display: 'flex', justifyContent: 'center', 
                    alignitems: 'center', borderRadius: '15px' 
                  }}>
                    {stat.icon}
                  </div>
                  <div>
                    <p style={{ color: '#6b7280', fontSize: '14px', margin: '0 0 5px 0' }}>{stat.title}</p>
                    <h3 style={{ margin: 0, color: '#1f2937', fontSize: '22px' }}>{stat.amount}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* النشاط الأخير */}
            <div style={{ marginTop: '50px', background: '#fff', borderRadius: '20px', padding: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
              <h3 style={{ color: '#1f2937', margin: '0 0 25px 0', fontSize: '20px' }}>النشاط الأخير</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {activities.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    style={{ 
                      display: 'flex', justifyContent: 'space-between', alignitems: 'center', 
                      padding: '15px', borderRadius: '15px', backgroundColor: '#f9fafb', cursor: 'pointer'
                    }}
                    whileHover={{ backgroundColor: '#f3f4f6' }}
                  >
                    <div style={{ display: 'flex', alignitems: 'center', gap: '15px' }}>
                      <div style={{ 
                        width: '45px', height: '45px', borderRadius: '12px', 
                        display: 'flex', justifyContent: 'center', alignitems: 'center',
                        backgroundColor: item.type === 'income' ? '#dcfce7' : '#fee2e2',
                        color: item.type === 'income' ? '#22c55e' : '#ef4444'
                      }}>
                        {item.icon}
                      </div>
                      <div>
                        <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', color: '#1f2937' }}>{item.title}</p>
                        <p style={{ margin: 0, fontSize: '12px', color: '#6b7280' }}>{item.date}</p>
                      </div>
                    </div>
                    <div style={{ fontWeight: 'bold', fontSize: '16px', color: item.type === 'income' ? '#22c55e' : '#ef4444' }}>
                      {item.amount}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )
    }

        {/* ----------------- صفحة: البطاقات ----------------- */}
        {activePage === 'البطاقات' && (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 relative min-h-screen">
  
    <div className="flex justify-between items-center mb-10">
      <div>
        <h1 className="text-3xl font-extrabold text-[#1f2937]">إدارة محفظتك الرقمية</h1>
        <p className="text-gray-500 italic">المستقبل تك - كود 407</p>
      </div>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsModalOpen(true)}
        className="bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white px-8 py-3 rounded-2xl shadow-xl font-bold"
      >
        + إضافة بطاقة مميزة
      </motion.button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <motion.div 
          key={card.id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className={`${card.color || 'bg-gradient-to-br from-gray-700 to-black'} p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden h-64 flex flex-col justify-between group`}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/20 transition-all"></div>
          
          <div className="flex justify-between items-start z-10">
            <div>
              <p className="text-xs opacity-70 mb-1 tracking-tighter">الرصيد المتوفر</p>
              <h2 className="text-3xl font-bold font-mono">${card.balance}</h2>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full border border-white/30 text-sm font-black italic lowercase">
              {card.type}
            </div>
          </div>
          
          <div className="z-10">
            <p className="text-2xl tracking-[0.3em] font-medium mb-6 drop-shadow-md">
              {card.cardNumber}
            </p>
            <div className="flex justify-between items-end border-t border-white/10 pt-4">
              <div className="flex flex-col">
                <span className="text-[10px] opacity-50 uppercase">صاحب الحساب</span>
                <span className="text-sm tracking-wide">AYA RAMADAN</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] opacity-50 block uppercase">Exp</span>
                <span className="text-sm font-mono">{card.expiry}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {isModalOpen && (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-[2rem] p-10 w-full max-w-md shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">بيانات البطاقة الجديدة</h2>
          <div className="space-y-4">
            <input 
              type="text" placeholder="الرصيد (مثال: 2,500)" 
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              onChange={(e) => setNewCard({...newCard, balance: e.target.value})}
            />
            <input 
              type="text" placeholder="رقم البطاقة (16 رقم)" 
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none"
              onChange={(e) => setNewCard({...newCard, cardNumber: e.target.value})}
            />
            <div className="flex gap-4">
               <input 
                type="text" placeholder="MM/YY" 
                className="w-1/2 p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none"
                onChange={(e) => setNewCard({...newCard, expiry: e.target.value})}
              />
               <select 
                className="w-1/2 p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none"
                onChange={(e) => setNewCard({...newCard, type: e.target.value})}
               >
                 <option value="Visa">Visa</option>
                 <option value="MasterCard">MasterCard</option>
               </select>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="flex-1 py-4 text-gray-500 font-semibold hover:bg-gray-100 rounded-xl transition-all"
            >
              إلغاء
            </button>
            <button 
              onClick={() => {
                setCards([...cards, { ...newCard, id: Date.now(), color: 'bg-gradient-to-br from-indigo-600 to-purple-700' }]);
                setIsModalOpen(false);
              }}
              className="flex-1 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200"
            >
              حفظ البطاقة
            </button>
          </div>
        </motion.div>
      </div>
    )}
  </motion.div>
)}
     


        {/* ----------------- صفحة: الإحصائيات ----------------- */}
        {activePage === 'الإحصائيات' && (
  <motion.div 
    initial={{ opacity: 0, y: 30 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.6, ease: "easeOut" }}
    Style={{ padding: '30px' }}
  >
    <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
      لوحة التحكم – كود 407
    </h2>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '30px' }}>
      {[
        { title: 'إجمالي الأرصدة', amount: '$45,200.00', color: '#10b981' },
        { title: 'الديون المستحقة', amount: '$12,400.00', color: '#ef4444' },
        { title: 'المصروفات الشهرية', amount: '$3,850.00', color: '#4f46e5' }
      ].map((stat, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '25px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #f3f4f6' }}
        >
          <p style={{ color: '#6b7280', fontSize: '14px' }}>{stat.title}</p>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: stat.color }}>{stat.amount}</h3>
        </motion.div>
      ))}
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '25px' }}>
      <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '30px', border: '1px solid #f3f4f6' }}>
        <h4 style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 'bold' }}>تحليل حركة الأموال</h4>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '15px', height: '200px', paddingBottom: '10px' }}>
          <motion.div initial={{ height: 0 }} animate={{ height: '70%' }} transition={{ duration: 1 }} style={{ flex: 1, backgroundColor: '#4f46e5', borderRadius: '10px' }}></motion.div>
          <motion.div initial={{ height: 0 }} animate={{ height: '40%' }} transition={{ duration: 1, delay: 0.2 }} style={{ flex: 1, backgroundColor: '#ef4444', borderRadius: '10px' }}></motion.div>
          <motion.div initial={{ height: 0 }} animate={{ height: '90%' }} transition={{ duration: 1, delay: 0.4 }} style={{ flex: 1, backgroundColor: '#4f46e5', borderRadius: '10px' }}></motion.div>
          <motion.div initial={{ height: 0 }} animate={{ height: '25%' }} transition={{ duration: 1, delay: 0.6 }} style={{ flex: 1, backgroundColor: '#ef4444', borderRadius: '10px' }}></motion.div>
        </div>
      </div>
      <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '30px', border: '1px solid #f3f4f6' }}>
        <h4 style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 'bold' }}>آخر العمليات</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {[
            { name: 'توريد بضاعة', price: '+ $1,200', color: '#10b981' },
            { name: 'فاتورة كهرباء', price: '- $150', color: '#ef4444' }
          ].map((item, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f9fafb', borderRadius: '15px' }}>
              <span style={{ fontSize: '13px' }}>{item.name}</span>
              <span style={{ fontSize: '13px', fontWeight: 'bold', color: item.color }}>{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
)}


{/* //صفحة الاعدادات */}
{activePage === 'الإعدادات' && (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '35px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px' }}>
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '30px', textAlign: 'center' }}>
        <div style={{ width: '100px', height: '100px', background: '#4f46e5', borderRadius: '50%', margin: '0 auto 20px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px' }}>
          {userInfo.name.charAt(0)}
        </div>
        <h3>{userInfo.name}</h3>
        <p style={{ color: '#6b7280' }}>{userInfo.email}</p>
        <input type="file" id="fileInput" style={{ display: 'none' }} onChange={() => alert('تم اختيار صورة جديدة')} />
        <button onClick={() => document.getElementById('fileInput').click()} style={{ marginTop: '15px', padding: '8px 15px', cursor: 'pointer', borderRadius: '10px', border: '1px solid #ddd' }}>
          تغيير الصورة
        </button>
      </div>
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '30px' }}>
        <label>الاسم الكامل</label>
        <input 
          type="text" 
          value={userInfo.name} 
          onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
          style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '10px', border: '1px solid #f3f4f6' }}
        />

        <label>البريد الإلكتروني</label>
        <input 
          type="email" 
          value={userInfo.email} 
          onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
          style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '10px', border: '1px solid #f3f4f6', textAlign: 'left' }}
        />

        <button 
          onClick={handleSave}
          style={{ width: '100%', padding: '15px', backgroundColor: '#4f46e5', color: 'white', borderRadius: '15px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
        >
          حفظ التغييرات
        </button>
      </div>
    </div>
  </motion.div>
)}

{/* //تسجيل الخروج// */}
{activePage === 'تسجيل الخروج' && (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }} 
    animate={{ opacity: 1, scale: 1 }} 
    transition={{ duration: 0.4 }}
    style={{ 
      height: '80vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '20px'
    }}
  >
    <div style={{ 
      backgroundColor: '#ffffff', 
      padding: '50px 40px', 
      borderRadius: '40px', 
      boxShadow: '0 20px 40px rgba(0,0,0,0.05)', 
      textAlign: 'center', 
      maxWidth: '450px', 
      width: '100%',
      border: '1px solid #f3f4f6'
    }}>
    
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ 
          width: '90px', 
          height: '90px', 
          backgroundColor: '#fee2e2', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          margin: '0 auto 25px',
          color: '#ef4444'
        }}
      >
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      </motion.div>

      <h2 style={{ fontSize: '26px', fontWeight: 'bold', color: '#1f2937', marginBottom: '15px' }}>مغادرة النظام؟</h2>
      <p style={{ color: '#6b7280', fontSize: '15px', marginBottom: '35px', lineHeight: '1.6' }}>
        هل أنتِ متأكدة من رغبتك في تسجيل الخروج من منصة <span style={{ color: '#4f46e5', fontWeight: 'bold' }}>المستقبل تك</span>؟ سيتم إنهاء الجلسة الحالية.
      </p>

      {/* أزرار القرار */}
      <div style={{ display: 'flex', gap: '15px' }}>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActivePage('الرئيسية')}
          style={{ 
            flex: 1, 
            padding: '16px', 
            borderRadius: '18px', 
            border: '1.5px solid #e5e7eb', 
            backgroundColor: '#fff', 
            color: '#374151', 
            fontWeight: 'bold', 
            cursor: 'pointer' 
          }}
        >
          إلغاء
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: '#dc2626' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            localStorage.clear(); 
            window.location.reload(); 
          }}
          style={{ 
            flex: 1, 
            padding: '16px', 
            borderRadius: '18px', 
            border: 'none', 
            backgroundColor: '#ef4444', 
            color: '#ffffff', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(239, 68, 68, 0.2)'
          }}
        >
          تأكيد الخروج
        </motion.button>
      </div>

      <p style={{ marginTop: '25px', fontSize: '12px', color: '#9ca3af' }}>كود التدريب المعتمد: 407</p>
    </div>
  </motion.div>
)}



      </div>
    </div>
  );
}

export default App;
