'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const orders = [
  { id: 'ORD-9902', date: 'June 12, 2024', total: '$4,520.00', status: 'In Transit', items: 3 },
  { id: 'ORD-9844', date: 'May 28, 2024', total: '$12,800.00', status: 'Delivered', items: 12 },
  { id: 'ORD-9712', date: 'May 15, 2024', total: '$2,150.00', status: 'Delivered', items: 1 },
];

export function AccountView() {
  return (
    <main className="min-h-screen bg-surface text-on-surface pt-20 pb-24 px-4 max-w-md mx-auto lg:max-w-6xl lg:px-8">
      {/* Profile Header Section */}
      <section className="mt-4 p-6 bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden lg:p-8">
        <div className="absolute top-0 right-0 p-4">
          <span className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full font-headline text-[10px] font-bold uppercase tracking-widest">
            Verified
          </span>
        </div>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full border-2 border-primary-container p-1 bg-surface">
            <Image
              width={76}
              height={76}
              src="https://i.pravatar.cc/200?img=33"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-on-surface">
              Hitech Partner
            </h2>
            <p className="text-xs font-label text-on-surface-variant uppercase tracking-widest mt-1">
              Verified Industrial Buyer
            </p>
            <p className="text-xs font-label text-outline mt-1">ID: 8829-01</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-container-low p-3 rounded-lg">
            <span className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
              Company Status
            </span>
            <span className="text-sm font-semibold text-tertiary">Platinum Tier</span>
          </div>
          <div className="bg-surface-container-low p-3 rounded-lg">
            <span className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
              Credit Limit
            </span>
            <span className="text-sm font-semibold text-on-surface">$250,000.00</span>
          </div>
        </div>
      </section>

      {/* Company Profile / Credentials */}
      <section className="mt-6 space-y-3">
        <div className="flex items-center justify-between px-2">
          <h3 className="font-headline font-bold text-sm uppercase tracking-widest text-on-surface-variant">
            Company Profile
          </h3>
          <button className="text-xs font-bold text-secondary flex items-center gap-1">
            Edit Profile
            <span className="material-symbols-outlined text-xs">edit</span>
          </button>
        </div>
        <div className="bg-surface-container-low rounded-xl p-4 space-y-4">
          <div className="flex justify-between items-center border-b border-outline-variant/20 pb-3">
            <span className="text-xs font-label text-on-surface-variant">Business Name</span>
            <span className="text-sm font-semibold text-on-surface">
              Precision Mechtronics Ltd.
            </span>
          </div>
          <div className="flex justify-between items-center border-b border-outline-variant/20 pb-3">
            <span className="text-xs font-label text-on-surface-variant">VAT/PAN Number</span>
            <span className="text-sm font-mono text-on-surface">GB9823471012</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-label text-on-surface-variant">Primary Site</span>
            <span className="text-sm font-semibold text-on-surface">Manchester Industrial Hub</span>
          </div>
        </div>
      </section>

      {/* Bento Grid for Quick Actions & History */}
      <section className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {/* Order History Card */}
        <div className="col-span-2 bg-surface-container-lowest p-5 rounded-xl shadow-sm space-y-4 border border-surface-variant/30 lg:col-span-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">receipt_long</span>
              <h3 className="font-headline font-bold text-sm uppercase tracking-widest">
                Order History
              </h3>
            </div>
            <span className="text-[10px] bg-primary/5 text-primary px-2 py-0.5 rounded font-bold">
              3 Recent
            </span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-on-surface">INV-2024-082</span>
                <span className="text-[10px] text-outline">Oct 12, 2024</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs font-bold text-secondary">$12,450.00</span>
                <span className="text-[10px] text-tertiary flex items-center gap-1">
                  In Transit
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-on-surface">INV-2024-079</span>
                <span className="text-[10px] text-outline">Sep 28, 2024</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs font-bold text-on-surface">$3,120.00</span>
                <span className="text-[10px] text-outline-variant flex items-center gap-1">
                  Delivered
                  <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                </span>
              </div>
            </div>
          </div>
          <button className="w-full py-2 bg-surface-container-low text-on-surface text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-surface-variant transition-colors">
            View All History
          </button>
        </div>

        {/* Saved Quotes Card */}
        <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-surface-variant/30 flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-tertiary mb-2">description</span>
            <h3 className="font-headline font-bold text-[11px] uppercase tracking-wider mb-1">
              Saved Quotes
            </h3>
            <p className="text-[10px] text-outline leading-tight">
              4 pending quotations awaiting approval.
            </p>
          </div>
          <button className="mt-4 text-[10px] font-bold text-primary flex items-center gap-1">
            View Docs
            <span className="material-symbols-outlined text-xs">arrow_forward</span>
          </button>
        </div>

        {/* Attendance Systems */}
        <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-surface-variant/30 flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-on-surface-variant mb-2">
              fingerprint
            </span>
            <h3 className="font-headline font-bold text-[11px] uppercase tracking-wider mb-1">
              Site Access
            </h3>
            <p className="text-[10px] text-outline leading-tight">
              Manage employee biometrics & logs.
            </p>
          </div>
          <button className="mt-4 text-[10px] font-bold text-primary flex items-center gap-1">
            Access Logs
            <span className="material-symbols-outlined text-xs">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* Account Settings Links */}
      <section className="mt-6 space-y-2">
        <h3 className="font-headline font-bold text-sm uppercase tracking-widest text-on-surface-variant px-2">
          Account Settings
        </h3>
        <div className="bg-surface-container-lowest rounded-xl divide-y divide-outline-variant/10 shadow-sm border border-surface-variant/30 overflow-hidden">
          <Link
            className="flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors group"
            href="#"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-outline group-hover:text-primary">
                shield_person
              </span>
              <span className="text-sm font-medium text-on-surface">Security & Authentication</span>
            </div>
            <span className="material-symbols-outlined text-outline text-lg">chevron_right</span>
          </Link>
          <Link
            className="flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors group"
            href="#"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-outline group-hover:text-primary">
                notifications_active
              </span>
              <span className="text-sm font-medium text-on-surface">Procurement Alerts</span>
            </div>
            <span className="material-symbols-outlined text-outline text-lg">chevron_right</span>
          </Link>
          <Link
            className="flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors group"
            href="#"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-outline group-hover:text-primary">
                payments
              </span>
              <span className="text-sm font-medium text-on-surface">Payment Methods</span>
            </div>
            <span className="material-symbols-outlined text-outline text-lg">chevron_right</span>
          </Link>
          <Link
            className="flex items-center justify-between p-4 hover:bg-red-50 transition-colors group"
            href="#"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-error">logout</span>
              <span className="text-sm font-medium text-error">Sign Out</span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default AccountView;
