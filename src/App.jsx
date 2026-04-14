import React, { useState } from 'react';
import { 
  Home, CreditCard, PieChart, Wallet, 
  DollarSign, PiggyBank, ArrowUpRight, ArrowDownRight,
  Settings, LogOut, Search, Bell 
} from 'lucide-react';
import { motion } from 'framer-motion';

// دالة تصميم أزرار القائمة الجانبية
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
  // حالة التنقل بين الصفحات
  const [activePage, setActivePage] = useState('الرئيسية');

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

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f3f4f6', fontFamily: 'system-ui, sans-serif' }} dir="rtl">
      
      {/* ================= السايدبار (القائمة الجانبية) ================= */}
      <div style={{ width: '280px', backgroundColor: '#ffffff', padding: '30px 20px', display: 'flex', flexDirection: 'column', borderLeft: '1px solid #e5e7eb' }}>
        
        {/* اللوغو */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '50px', padding: '0 10px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold', fontSize: '20px' }}>
            A
          </div>
          <h2 style={{ margin: 0, color: '#1f2937', fontSize: '22px' }}>(Al-Mustaqbal Tech) المستقبل تك</h2>
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
          <MenuItem icon={<LogOut size={22} />} text="تسجيل الخروج" active={false} onClick={() => console.log('logout')} />
        </div>
      </div>

      {/* ================= المحتوى الرئيسي ================= */}
      <div style={{ flex: 1, padding: '40px 50px', overflowY: 'auto' }}>
        
        {/* الشريط العلوي (بحث وبروفايل) */}
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
            <h1 style={{ color: '#1f2937', marginBottom: '5px' }}>نظرة عامة على الحساب ✨</h1>
            <p style={{ color: '#6b7280', marginBottom: '30px' }}>آخر تحديث اليوم</p>

            {/* كرت الرصيد (VISA) */}
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ width: '45px', height: '35px', background: 'linear-gradient(135deg, #ffd700, #ffb800)', borderRadius: '6px', opacity: 0.9 }} />
                <h2 style={{ fontStyle: 'italic', margin: 0, opacity: 0.9, fontSize: '24px' }}>VISA</h2>
              </div>
              <div style={{ marginTop: '35px' }}>
                <p style={{ fontSize: '20px', letterSpacing: '4px', opacity: 0.9, margin: 0 }}>**** **** **** 4421</p>
              </div>
              <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
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
                    boxShadow: '0 4px 15px rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', gap: '20px'
                  }}
                >
                  <div style={{ 
                    fontSize: '24px', background: stat.color, color: 'white', 
                    width: '55px', height: '55px', display: 'flex', justifyContent: 'center', 
                    alignItems: 'center', borderRadius: '15px' 
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
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                      padding: '15px', borderRadius: '15px', backgroundColor: '#f9fafb', cursor: 'pointer'
                    }}
                    whileHover={{ backgroundColor: '#f3f4f6' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <div style={{ 
                        width: '45px', height: '45px', borderRadius: '12px', 
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
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
        )}

        {/* ----------------- صفحة: البطاقات ----------------- */}
        {activePage === 'البطاقات' && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <h1 style={{ color: '#1f2937' }}>بطاقاتي البنكية 💳</h1>
            <p style={{ color: '#6b7280' }}>محفظتك الرقمية لإدارة بطاقاتك بسهولة.</p>
          </motion.div>
        )}

        {/* ----------------- صفحة: الإحصائيات ----------------- */}
        {activePage === 'الإحصائيات' && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <h1 style={{ color: '#1f2937' }}>تحليلات الحساب 📈</h1>
            <p style={{ color: '#6b7280' }}>تتبع مصاريفك ودخلك بدقة.</p>
          </motion.div>
        )}

      </div>
    </div>
  );
}

export default App;
