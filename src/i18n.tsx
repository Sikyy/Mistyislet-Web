import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type Locale = "en" | "id" | "zh";

type LanguageOption = {
  locale: Locale;
  label: string;
  shortLabel: string;
  htmlLang: string;
};

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (text: string) => string;
};

export const languageOptions: LanguageOption[] = [
  { locale: "en", label: "English", shortLabel: "EN", htmlLang: "en" },
  { locale: "id", label: "Bahasa Indonesia", shortLabel: "ID", htmlLang: "id" },
  { locale: "zh", label: "中文", shortLabel: "中文", htmlLang: "zh-CN" },
];

const dictionaries: Record<Locale, Record<string, string>> = {
  en: {},
  id: {
    "Mistyislet - Cloud access control for modern places":
      "Mistyislet - Kontrol akses cloud untuk ruang modern",
    "Cloud access control for readers, edge gateways, mobile credentials, and every place you operate.":
      "Kontrol akses cloud untuk reader, edge gateway, kredensial mobile, dan setiap lokasi yang Anda operasikan.",
    Language: "Bahasa",
    Navigation: "Navigasi",
    Product: "Produk",
    Solutions: "Solusi",
    Resources: "Sumber daya",
    Partners: "Mitra",
    Pricing: "Harga",
    Preview: "Pratinjau",
    Monthly: "Bulanan",
    Yearly: "Tahunan",
    "20% OFF": "Diskon 20%",
    "Billing period": "Periode tagihan",
    "Toggle billing period": "Ganti periode tagihan",
    Features: "Fitur",
    Popular: "Populer",
    Custom: "Kustom",
    "/quote": "/penawaran",
    "/door/mo": "/pintu/bln",
    "All rights reserved.": "Seluruh hak dilindungi.",
    "© 2026 Mistyislet | All rights reserved.": "© 2026 Mistyislet | Seluruh hak dilindungi.",
    "Cloud access control for modern places.": "Kontrol akses cloud untuk ruang modern.",

    "Every door, quietly in control.": "Setiap pintu, terkendali dengan tenang.",
    "Readers and edge gateways, built for every door.": "Reader dan edge gateway, dibuat untuk setiap pintu.",
    "Cloud SaaS and mobile access, connected in one control plane.":
      "Cloud SaaS dan akses mobile, terhubung dalam satu control plane.",
    "From access rule to door unlock in three steps.":
      "Dari aturan akses hingga pintu terbuka dalam tiga langkah.",
    "A calmer control plane for physical access.": "Control plane yang lebih tenang untuk akses fisik.",
    "Built with an ecosystem mindset.": "Dibangun dengan pola pikir ekosistem.",
    "Questions before deployment": "Pertanyaan sebelum deployment",
    "Plans for pilots, buildings, and multi-site operations":
      "Paket untuk pilot, gedung, dan operasi multi-site",
    "Preview the access-control stack": "Pratinjau stack kontrol akses",
    "See how cloud rules, edge gateways, readers, and mobile credentials work together.":
      "Lihat bagaimana aturan cloud, edge gateway, reader, dan kredensial mobile bekerja bersama.",

    Hardware: "Perangkat keras",
    Platform: "Platform",
    "Product stack": "Stack produk",
    "Misty Reader": "Misty Reader",
    "Misty Edge Gateway": "Misty Edge Gateway",
    "Misty Cloud": "Misty Cloud",
    "NFC, BLE, QR, and card access at the door.": "Akses NFC, BLE, QR, dan kartu di pintu.",
    "Local rules, offline unlocks, and event sync.": "Aturan lokal, buka pintu offline, dan sinkronisasi event.",
    "Manage sites, doors, people, credentials, and events.":
      "Kelola site, pintu, orang, kredensial, dan event.",
    "Reader, edge gateway, and cloud": "Reader, edge gateway, dan cloud",
    "A focused access-control stack for modern building deployments.":
      "Stack kontrol akses yang fokus untuk deployment gedung modern.",
    "NFC, BLE, QR, and mobile credentials at the door, ready for modern access workflows.":
      "NFC, BLE, QR, dan kredensial mobile di pintu, siap untuk alur akses modern.",
    "Local decisions, offline cache, device heartbeat, and event sync for every connected door.":
      "Keputusan lokal, cache offline, heartbeat perangkat, dan sinkronisasi event untuk setiap pintu.",
    "Manage sites, doors, users, credentials, access rules, and audit events from one cloud console.":
      "Kelola site, pintu, pengguna, kredensial, aturan akses, dan audit event dari satu konsol cloud.",

    "Core solutions": "Solusi utama",
    "Use cases": "Use case",
    "Cloud SaaS": "Cloud SaaS",
    "Mobile Access Control": "Kontrol Akses Mobile",
    "Central access management for every site.": "Manajemen akses terpusat untuk setiap site.",
    "Phone-first credentials for staff, tenants, and visitors.":
      "Kredensial berbasis ponsel untuk staf, tenant, dan pengunjung.",
    Factories: "Pabrik",
    Coworking: "Coworking",
    "Fitness & Gyms": "Fitness & Gym",
    "Office Buildings": "Gedung Perkantoran",
    Schools: "Sekolah",
    Hospitals: "Rumah Sakit",
    "Cloud access with mobile credentials": "Akses cloud dengan kredensial mobile",
    "Keep the operator workflow simple while doors stay responsive at the edge.":
      "Jaga alur operator tetap sederhana sementara pintu tetap responsif di edge.",
    "Centralize sites, doors, people, groups, schedules, credentials, and events in one browser-based console.":
      "Sentralisasi site, pintu, orang, grup, jadwal, kredensial, dan event dalam satu konsol browser.",
    "Mobile Access": "Akses Mobile",
    "Turn phones into secure credentials with NFC, BLE, QR, and time-bound passes for tenants, staff, and visitors.":
      "Ubah ponsel menjadi kredensial aman dengan NFC, BLE, QR, dan pass berbatas waktu untuk tenant, staf, dan pengunjung.",
    "Access Integrations": "Integrasi Akses",
    "Connect identity, HR, visitor workflows, and building systems through APIs and event webhooks.":
      "Hubungkan identity, HR, alur pengunjung, dan sistem gedung lewat API dan webhook event.",
    "Visitor Access": "Akses Pengunjung",
    "Send temporary QR or mobile passes, set schedules, and audit every visit from invite to unlock.":
      "Kirim QR atau pass mobile sementara, atur jadwal, dan audit setiap kunjungan dari undangan hingga unlock.",

    Configure: "Konfigurasi",
    Present: "Presentasi",
    Audit: "Audit",
    "Create places, doors, users, groups, and time-based access rules in the cloud.":
      "Buat lokasi, pintu, pengguna, grup, dan aturan akses berbasis waktu di cloud.",
    "Users unlock with mobile credentials, NFC cards, QR passes, or reader events at the door.":
      "Pengguna membuka pintu dengan kredensial mobile, kartu NFC, QR pass, atau event reader di pintu.",
    "Gateways sync decisions and events back to the console for real-time review.":
      "Gateway menyinkronkan keputusan dan event kembali ke konsol untuk peninjauan real-time.",
    "Mobile Credentials": "Kredensial Mobile",
    "Phone-first access without plastic-card bottlenecks.": "Akses berbasis ponsel tanpa bottleneck kartu fisik.",
    "Offline Ready": "Siap Offline",
    "Gateways keep access decisions available when the network is unstable.":
      "Gateway menjaga keputusan akses tetap tersedia saat jaringan tidak stabil.",
    "Real-time Revocation": "Pencabutan Real-time",
    "Remove access instantly when roles, tenants, or risk changes.":
      "Cabut akses seketika saat role, tenant, atau risiko berubah.",
    "Centralized Events": "Event Terpusat",
    "Search door events, credential use, and admin actions in one timeline.":
      "Cari event pintu, penggunaan kredensial, dan tindakan admin dalam satu timeline.",
    "Hardware Visibility": "Visibilitas Perangkat",
    "Monitor readers, gateways, and door health before issues reach users.":
      "Pantau reader, gateway, dan kesehatan pintu sebelum masalah dirasakan pengguna.",
    "Built-in Trust": "Kepercayaan Bawaan",
    "Least-privilege roles, audit trails, and secure credential lifecycle controls.":
      "Role least-privilege, audit trail, dan kontrol lifecycle kredensial yang aman.",

    "Hardware partners": "Mitra perangkat keras",
    "Software partners": "Mitra perangkat lunak",
    "Partner program": "Program mitra",
    Hikvision: "Hikvision",
    ZKTeco: "ZKTeco",
    Fingerspot: "Fingerspot",
    Suprema: "Suprema",
    "Camera and building-security hardware ecosystem.":
      "Ekosistem kamera dan perangkat keamanan gedung.",
    "Access-control terminals, readers, and site hardware.":
      "Terminal kontrol akses, reader, dan perangkat site.",
    "Attendance and access hardware for regional deployments.":
      "Perangkat absensi dan akses untuk deployment regional.",
    "Biometric readers and enterprise access hardware.":
      "Reader biometrik dan perangkat akses enterprise.",
    "HR SaaS": "HR SaaS",
    "Identity & SSO": "Identity & SSO",
    "Visitor Software": "Software Pengunjung",
    "Property & Ops Apps": "Aplikasi Properti & Operasi",
    "Provision and revoke access from employee lifecycle systems.":
      "Provisioning dan pencabutan akses dari sistem lifecycle karyawan.",
    "Connect login, roles, and access policy ownership.":
      "Hubungkan login, role, dan kepemilikan kebijakan akses.",
    "Issue temporary access from visitor workflows.":
      "Terbitkan akses sementara dari alur kerja pengunjung.",
    "Sync access events with building-operation software.":
      "Sinkronkan event akses dengan software operasi gedung.",
    "Become our partner": "Menjadi mitra kami",
    "Work with Mistyislet on hardware, software, installation, or channel partnerships.":
      "Bekerja sama dengan Mistyislet untuk kemitraan hardware, software, instalasi, atau channel.",
    "Hardware and software around the door": "Hardware dan software di sekitar pintu",
    "Build a partner ecosystem that connects readers, cameras, HR data, identity, visitors, and operations.":
      "Bangun ekosistem mitra yang menghubungkan reader, kamera, data HR, identity, pengunjung, dan operasi.",
    "Reader, camera, attendance, and biometric hardware partners help Mistyislet fit into real buildings without forcing one rigid stack.":
      "Mitra reader, kamera, absensi, dan biometrik membantu Mistyislet masuk ke gedung nyata tanpa memaksakan satu stack kaku.",
    "HR SaaS, identity, visitor, and operations software":
      "HR SaaS, identity, visitor, dan software operasi",
    "Software partners connect access decisions with employee lifecycle, SSO roles, visitor workflows, and daily building operations.":
      "Mitra software menghubungkan keputusan akses dengan lifecycle karyawan, role SSO, alur pengunjung, dan operasi gedung harian.",
    "Integrator network": "Jaringan integrator",
    "Deployment and on-site commissioning support": "Dukungan deployment dan commissioning di lokasi",
    "Installation partners help plan wiring, reader placement, gateway commissioning, handover, and support for each site.":
      "Mitra instalasi membantu merencanakan wiring, penempatan reader, commissioning gateway, handover, dan dukungan tiap site.",
    "Hardware, software, installation, and channel partnerships":
      "Kemitraan hardware, software, instalasi, dan channel",
    "Partner with Mistyislet to package software, hardware, and service into clearer deployment paths for real building operators.":
      "Bermitra dengan Mistyislet untuk mengemas software, hardware, dan layanan menjadi jalur deployment yang lebih jelas bagi operator gedung.",

    Pilot: "Pilot",
    Building: "Gedung",
    Enterprise: "Enterprise",
    "Validate one site with core cloud access, mobile credentials, and gateway setup.":
      "Validasi satu site dengan akses cloud inti, kredensial mobile, dan setup gateway.",
    "Operate doors, users, groups, schedules, and real-time events for one property.":
      "Operasikan pintu, pengguna, grup, jadwal, dan event real-time untuk satu properti.",
    "Multi-site controls, integration support, dedicated onboarding, and security review.":
      "Kontrol multi-site, dukungan integrasi, onboarding khusus, dan review keamanan.",
    "Cloud console": "Konsol cloud",
    "Reader and gateway setup": "Setup reader dan gateway",
    "Mobile credential pilot": "Pilot kredensial mobile",
    "Doors, users, schedules": "Pintu, pengguna, jadwal",
    "Live event search": "Pencarian event live",
    "Admin roles and audit trails": "Role admin dan audit trail",
    "API/webhook basics": "Dasar API/webhook",
    "Support for launch": "Dukungan peluncuran",
    "Multi-site governance": "Governance multi-site",
    "Integration support": "Dukungan integrasi",
    "Security review": "Review keamanan",
    "Dedicated onboarding": "Onboarding khusus",
    "Custom hardware rollout": "Rollout hardware kustom",

    "Can Mistyislet work with existing readers and controllers?":
      "Apakah Mistyislet bisa bekerja dengan reader dan controller yang sudah ada?",
    "Mistyislet is designed for modern reader and gateway deployments, with integration planning for compatible existing building hardware.":
      "Mistyislet dirancang untuk deployment reader dan gateway modern, dengan perencanaan integrasi untuk hardware gedung yang kompatibel.",
    "Does the edge gateway keep doors working offline?":
      "Apakah edge gateway menjaga pintu tetap berjalan saat offline?",
    "Yes. The edge gateway keeps local access rules and event queues so doors can continue working during network interruptions.":
      "Ya. Edge gateway menyimpan aturan akses lokal dan antrean event agar pintu tetap berjalan saat jaringan terganggu.",
    "Which mobile credentials are supported?": "Kredensial mobile apa yang didukung?",
    "Mobile passes can be issued for NFC, BLE, and QR workflows, alongside cards where a site still needs them.":
      "Mobile pass dapat diterbitkan untuk alur NFC, BLE, dan QR, bersama kartu jika site masih membutuhkannya.",
    "Can we integrate with HR, SSO, or SCIM?": "Bisakah kami terintegrasi dengan HR, SSO, atau SCIM?",
    "Yes. APIs and webhooks connect access events and users with HR, identity, visitor, and operations systems; SSO and SCIM can be scoped for enterprise rollouts.":
      "Bisa. API dan webhook menghubungkan event akses dan pengguna dengan sistem HR, identity, visitor, dan operasi; SSO dan SCIM dapat dicakup untuk rollout enterprise.",
    "How are access events audited?": "Bagaimana event akses diaudit?",
    "Door events, credential usage, admin changes, and revocations are stored in the cloud console for search and review.":
      "Event pintu, penggunaan kredensial, perubahan admin, dan pencabutan akses disimpan di konsol cloud untuk pencarian dan review.",
    "How do pricing and hardware deployment work?": "Bagaimana harga dan deployment hardware bekerja?",
    "Pricing is quoted by site size, door count, hardware scope, integrations, and support needs so pilots can start small.":
      "Harga diberikan berdasarkan ukuran site, jumlah pintu, cakupan hardware, integrasi, dan kebutuhan support agar pilot bisa dimulai kecil.",

    "At the door": "Di pintu",
    "Managed from Misty Cloud": "Dikelola dari Misty Cloud",
    "Misty Reader is the user-facing access point for modern buildings and shared spaces.":
      "Misty Reader adalah titik akses yang digunakan pengguna untuk gedung modern dan ruang bersama.",
    "Supports card and phone-first access": "Mendukung akses kartu dan ponsel",
    "Works with time-bound visitor credentials": "Bekerja dengan kredensial pengunjung berbatas waktu",
    "Designed for reader and gateway deployments": "Dirancang untuk deployment reader dan gateway",
    "Reader behavior is configured from the same cloud console that manages users, doors, and events.":
      "Perilaku reader dikonfigurasi dari konsol cloud yang sama untuk mengelola pengguna, pintu, dan event.",
    "Credential lifecycle controls": "Kontrol lifecycle kredensial",
    "Door-level configuration": "Konfigurasi per pintu",
    "Event visibility after unlock attempts": "Visibilitas event setelah percobaan unlock",
    "Local control": "Kontrol lokal",
    "Cloud connected": "Terhubung ke cloud",
    "A local gateway that keeps door decisions responsive even when the network is unstable.":
      "Gateway lokal yang menjaga keputusan pintu tetap responsif meski jaringan tidak stabil.",
    "The gateway keeps key access logic close to the door, reducing dependency on a live cloud round trip.":
      "Gateway menjaga logika akses utama dekat dengan pintu, mengurangi ketergantungan pada koneksi cloud langsung.",
    "Cached access rules": "Aturan akses tersimpan",
    "Offline event queue": "Antrean event offline",
    "Door and reader heartbeat monitoring": "Pemantauan heartbeat pintu dan reader",
    "Control plane": "Control plane",
    "Operations layer": "Lapisan operasi",
    "The SaaS control plane for places, doors, users, credentials, rules, and events.":
      "Control plane SaaS untuk lokasi, pintu, pengguna, kredensial, aturan, dan event.",
    "Misty Cloud gives operators one place to configure access without jumping between device tools.":
      "Misty Cloud memberi operator satu tempat untuk mengonfigurasi akses tanpa berpindah alat perangkat.",
    "People, groups, and roles": "Orang, grup, dan role",
    "Schedules and exceptions": "Jadwal dan pengecualian",
    "Reader and gateway configuration": "Konfigurasi reader dan gateway",
    "The same platform carries the daily workflows: issue access, review events, and revoke permissions.":
      "Platform yang sama menjalankan alur harian: menerbitkan akses, meninjau event, dan mencabut izin.",
    "Event search": "Pencarian event",
    "Admin audit trail": "Audit trail admin",
    "API and webhook integration": "Integrasi API dan webhook",
    Solution: "Solusi",
    "Use case": "Use case",
    "Hardware partner": "Mitra perangkat keras",
    "Software partner": "Mitra perangkat lunak",
    Docs: "Dokumentasi",
    Build: "Bangun",
    Learn: "Pelajari",
    "API Reference": "Referensi API",
    "Deployment Guide": "Panduan Deployment",
    "Security Notes": "Catatan Keamanan",
    "Product concepts, setup notes, and release guides.":
      "Konsep produk, catatan setup, dan panduan rilis.",
    "Doors, credentials, events, users, and webhooks.":
      "Pintu, kredensial, event, pengguna, dan webhook.",
    "Reader placement, gateway wiring, and launch steps.":
      "Penempatan reader, wiring gateway, dan langkah peluncuran.",
    "Credential lifecycle, roles, audit, and revocation controls.":
      "Lifecycle kredensial, role, audit, dan kontrol pencabutan.",
    "Docs and APIs without the clutter": "Docs dan API tanpa kerumitan",
    "Find the core technical references for planning, integrating, and operating Mistyislet.":
      "Temukan referensi teknis inti untuk merencanakan, mengintegrasikan, dan mengoperasikan Mistyislet.",
    "NFC and BLE": "NFC dan BLE",
    "QR access": "Akses QR",
    "Offline decisions": "Keputusan offline",
    "Event sync": "Sinkronisasi event",
    "Device heartbeat": "Heartbeat perangkat",
    "Sites and doors": "Site dan pintu",
    Credentials: "Kredensial",
    "Audit events": "Audit event",
    "Central console": "Konsol terpusat",
    "Multi-site ready": "Siap multi-site",
    "Audit-first": "Audit-first",
    "Mobile credentials": "Kredensial mobile",
    "Phone-first": "Berbasis ponsel",
    "Temporary passes": "Pass sementara",
    "Fast revocation": "Pencabutan cepat",
    "Door schedules": "Jadwal pintu",
    "Event audit": "Audit event",
    "Access model": "Model akses",
    "Operational view": "Tampilan operasional",
    "Zone-based permissions": "Izin berbasis zona",
    "Temporary visitor passes": "Pass pengunjung sementara",
    "Offline-ready edge decisions": "Keputusan edge siap offline",
    "Door and gateway status": "Status pintu dan gateway",
    "Searchable unlock events": "Event unlock yang dapat dicari",
    "Fast access revocation": "Pencabutan akses cepat",
    "Control access across shifts, production zones, and restricted areas.":
      "Kontrol akses lintas shift, zona produksi, dan area terbatas.",
    "Manage members, guests, meeting rooms, and shared-space access from the cloud.":
      "Kelola anggota, tamu, ruang meeting, dan akses ruang bersama dari cloud.",
    "Give members mobile access while keeping staff, rooms, and service areas controlled.":
      "Berikan akses mobile untuk anggota sambil menjaga kontrol staf, ruang, dan area layanan.",
    "Unify tenant access, lobby flows, elevators, and operator oversight.":
      "Satukan akses tenant, alur lobi, elevator, dan pengawasan operator.",
    "Coordinate staff, student, visitor, and after-hours access with clear audit trails.":
      "Koordinasikan akses staf, siswa, pengunjung, dan akses luar jam dengan audit trail yang jelas.",
    "Protect clinical, pharmacy, staff, visitor, and support areas with role-aware access.":
      "Lindungi area klinis, farmasi, staf, pengunjung, dan pendukung dengan akses berbasis role.",
    "A use-case page maps the building context to doors, people, credentials, and time-based rules.":
      "Halaman use case memetakan konteks gedung ke pintu, orang, kredensial, dan aturan berbasis waktu.",
    "Operators get the everyday controls they need without exposing unnecessary setup complexity.":
      "Operator mendapatkan kontrol harian yang dibutuhkan tanpa kompleksitas setup yang tidak perlu.",
    "For operators": "Untuk operator",
    "For integrations": "Untuk integrasi",
    "Credential lifecycle": "Lifecycle kredensial",
    "User experience": "Pengalaman pengguna",
    Concepts: "Konsep",
    "Setup notes": "Catatan setup",
    "Release guidance": "Panduan rilis",
    "Product documentation": "Dokumentasi produk",
    "Deployment guidance": "Panduan deployment",
    "Core objects": "Objek inti",
    "Integration flows": "Alur integrasi",
    "Before installation": "Sebelum instalasi",
    "Go-live": "Go-live",
    "Access governance": "Governance akses",
    "Credential safety": "Keamanan kredensial",
    "Hardware ecosystem": "Ekosistem hardware",
    "Site deployments": "Deployment site",
    "Integrator support": "Dukungan integrator",
    "Hardware context": "Konteks hardware",
    "Operator workflow": "Alur operator",
    "Lifecycle automation": "Otomasi lifecycle",
    "Operator workflows": "Alur operator",
    "Software integration": "Integrasi software",
    "Access outcome": "Hasil akses",
    "Partner paths": "Jalur mitra",
    "How we work together": "Cara kita bekerja sama",
    "Show previous partner": "Tampilkan mitra sebelumnya",
    "Show next partner": "Tampilkan mitra berikutnya",
    "Hikvision, ZKTeco, Fingerspot, Suprema": "Hikvision, ZKTeco, Fingerspot, Suprema",
    "Custom /quote": "Kustom /penawaran",
    "€29 /door/mo": "€29 /pintu/bln",
    "A door reader for NFC, BLE, QR, card, and mobile credential workflows.":
      "Reader pintu untuk alur NFC, BLE, QR, kartu, dan kredensial mobile.",
    "Events and configuration sync back to Misty Cloud so operators can manage sites centrally.":
      "Event dan konfigurasi tersinkron kembali ke Misty Cloud agar operator dapat mengelola site secara terpusat.",
    "Real-time event forwarding": "Forwarding event real-time",
    "Remote rule updates": "Pembaruan aturan jarak jauh",
    "Multi-site device visibility": "Visibilitas perangkat multi-site",
    "Centralize physical access across buildings, doors, people, schedules, and credentials.":
      "Sentralisasi akses fisik lintas gedung, pintu, orang, jadwal, dan kredensial.",
    "Cloud SaaS keeps access management understandable for teams that operate real buildings.":
      "Cloud SaaS menjaga manajemen akses tetap mudah dipahami untuk tim yang mengoperasikan gedung nyata.",
    "One console for sites and doors": "Satu konsol untuk site dan pintu",
    "Roles for admins and operators": "Role untuk admin dan operator",
    "Searchable event history": "Riwayat event yang dapat dicari",
    "Misty Cloud can connect access events and user lifecycle changes with external systems.":
      "Misty Cloud dapat menghubungkan event akses dan perubahan lifecycle pengguna dengan sistem eksternal.",
    Webhooks: "Webhook",
    "API reference": "Referensi API",
    "Identity and HR workflow support": "Dukungan workflow identity dan HR",
    "Issue phone-first access for staff, tenants, members, and visitors without plastic-card bottlenecks.":
      "Terbitkan akses berbasis ponsel untuk staf, tenant, anggota, dan pengunjung tanpa bottleneck kartu plastik.",
    "Mobile access should be easy to issue, easy to audit, and easy to revoke.":
      "Akses mobile harus mudah diterbitkan, mudah diaudit, dan mudah dicabut.",
    "QR visitor passes": "Pass QR pengunjung",
    "Time-based permissions": "Izin berbasis waktu",
    "Users get familiar access flows while operators keep control of every credential.":
      "Pengguna mendapat alur akses yang familiar sementara operator tetap mengontrol setiap kredensial.",
    "Tenant and staff access": "Akses tenant dan staf",
    "Guest and visitor workflows": "Workflow tamu dan pengunjung",
    "Central event visibility": "Visibilitas event terpusat",
    "Product concepts, deployment notes, and operating guidance for Mistyislet.":
      "Konsep produk, catatan deployment, dan panduan operasi untuk Mistyislet.",
    "Docs should give operators and builders a shared language for every access-control object.":
      "Dokumentasi harus memberi operator dan builder bahasa yang sama untuk setiap objek kontrol akses.",
    "Places, doors, readers, and gateways": "Tempat, pintu, reader, dan gateway",
    "Users, groups, schedules, and credentials": "Pengguna, grup, jadwal, dan kredensial",
    "Events, audits, and admin roles": "Event, audit, dan role admin",
    "Documentation also supports planning before a site goes live.":
      "Dokumentasi juga mendukung perencanaan sebelum site go-live.",
    "Door inventory": "Inventaris pintu",
    "Reader and gateway mapping": "Pemetaan reader dan gateway",
    "Launch checklist": "Checklist peluncuran",
    "API surfaces for doors, credentials, users, events, and webhooks.":
      "Permukaan API untuk pintu, kredensial, pengguna, event, dan webhook.",
    "REST API": "REST API",
    "Event data": "Data event",
    "The API should make physical access programmable without hiding operational context.":
      "API harus membuat akses fisik dapat diprogram tanpa menyembunyikan konteks operasional.",
    "Users and credentials": "Pengguna dan kredensial",
    "Doors and devices": "Pintu dan perangkat",
    "Access events and admin audit": "Event akses dan audit admin",
    "Teams can connect Mistyislet to identity, HR, visitor, and operations software.":
      "Tim dapat menghubungkan Mistyislet dengan software identity, HR, visitor, dan operasi.",
    "Provisioning workflows": "Workflow provisioning",
    "Event subscriptions": "Langganan event",
    "Revocation and lifecycle automation": "Otomasi pencabutan dan lifecycle",
    "A planning guide for reader placement, gateway wiring, credentials, and site launch.":
      "Panduan perencanaan untuk penempatan reader, wiring gateway, kredensial, dan peluncuran site.",
    "Site planning": "Perencanaan site",
    Wiring: "Wiring",
    "Good deployment starts with a clean model of doors, users, zones, and exceptions.":
      "Deployment yang baik dimulai dari model pintu, pengguna, zona, dan pengecualian yang jelas.",
    "Access zones": "Zona akses",
    "Credential plan": "Rencana kredensial",
    "Launch steps keep site teams, integrators, and operators aligned.":
      "Langkah peluncuran menjaga tim site, integrator, dan operator tetap selaras.",
    "Gateway commissioning": "Commissioning gateway",
    "Reader validation": "Validasi reader",
    "Operator handover": "Handover operator",
    "Credential lifecycle, least-privilege roles, auditability, and revocation controls.":
      "Lifecycle kredensial, role least-privilege, auditability, dan kontrol pencabutan.",
    "Least privilege": "Least privilege",
    "Audit trail": "Jejak audit",
    Revocation: "Pencabutan",
    "Operators need clear controls for who can grant access and how changes are reviewed.":
      "Operator membutuhkan kontrol jelas atas siapa yang dapat memberi akses dan bagaimana perubahan ditinjau.",
    "Admin roles": "Role admin",
    "Group-based access": "Akses berbasis grup",
    "Change audit": "Audit perubahan",
    "Credential workflows should make it easy to remove access when risk changes.":
      "Workflow kredensial harus memudahkan penghapusan akses saat risiko berubah.",
    "Immediate revocation": "Pencabutan segera",
    "Temporary credentials": "Kredensial sementara",
    "Event review": "Review event",
    "Hardware partner pages explain where third-party devices may fit around the Mistyislet stack.":
      "Halaman mitra hardware menjelaskan bagaimana perangkat pihak ketiga dapat masuk ke stack Mistyislet.",
    "Readers and terminals": "Reader dan terminal",
    "Camera and security context": "Konteks kamera dan keamanan",
    "Deployment planning": "Perencanaan deployment",
    "Mistyislet keeps the operator experience centered around cloud rules, credentials, and events.":
      "Mistyislet menjaga pengalaman operator tetap berpusat pada aturan cloud, kredensial, dan event.",
    "Access rules in Misty Cloud": "Aturan akses di Misty Cloud",
    "Gateway and reader visibility": "Visibilitas gateway dan reader",
    "Software partner pages describe how business systems can connect with access-control operations.":
      "Halaman mitra software menjelaskan bagaimana sistem bisnis dapat terhubung dengan operasi kontrol akses.",
    "User lifecycle": "Lifecycle pengguna",
    "Access event sync": "Sinkronisasi event akses",
    "Role and permission mapping": "Pemetaan role dan izin",
    "The goal is to reduce manual access work while keeping physical security auditable.":
      "Tujuannya adalah mengurangi pekerjaan akses manual sambil menjaga keamanan fisik tetap dapat diaudit.",
    "Automated provisioning": "Provisioning otomatis",
    "Cross-system visibility": "Visibilitas lintas sistem",
    "The partner program supports teams that help buildings adopt modern access control.":
      "Program mitra mendukung tim yang membantu gedung mengadopsi kontrol akses modern.",
    Installation: "Instalasi",
    "Hardware ecosystem partnerships": "Kemitraan ekosistem hardware",
    "Software and API integrations": "Integrasi software dan API",
    "Installation and deployment support": "Dukungan instalasi dan deployment",
    "The goal is to make the whole deployment feel coherent for operators and end users.":
      "Tujuannya adalah membuat seluruh deployment terasa koheren bagi operator dan pengguna akhir.",
    "Shared deployment planning": "Perencanaan deployment bersama",
    "Technical enablement": "Enablement teknis",
    "Case studies and co-selling": "Studi kasus dan co-selling",
    "Related paths": "Jalur terkait",
    "Continue through the product, solution, resource, or partner path without going back to the main page.":
      "Lanjutkan ke jalur produk, solusi, resource, atau mitra tanpa kembali ke halaman utama.",
  },
  zh: {
    "Mistyislet - Cloud access control for modern places": "Mistyislet - 面向现代空间的云门禁",
    "Cloud access control for readers, edge gateways, mobile credentials, and every place you operate.":
      "面向读卡器、边缘网关、移动凭证，以及你运营的每一个空间的云门禁。",
    Language: "语言",
    Navigation: "导航",
    Product: "产品",
    Solutions: "解决方案",
    Resources: "资源",
    Partners: "合作伙伴",
    Pricing: "价格",
    Preview: "预览",
    Monthly: "月付",
    Yearly: "年付",
    "20% OFF": "八折",
    "Billing period": "计费周期",
    "Toggle billing period": "切换计费周期",
    Features: "功能",
    Popular: "推荐",
    Custom: "定制",
    "/quote": "/报价",
    "/door/mo": "/门/月",
    "© 2026 Mistyislet | All rights reserved.": "© 2026 Mistyislet | 保留所有权利。",
    "Cloud access control for modern places.": "面向现代空间的云门禁。",

    "Every door, quietly in control.": "每一扇门，都被安静掌控。",
    "Readers and edge gateways, built for every door.": "为每一扇门而生的读卡器与边缘网关。",
    "Cloud SaaS and mobile access, connected in one control plane.":
      "云 SaaS 与移动门禁，连接在同一个控制平面。",
    "From access rule to door unlock in three steps.": "从访问规则到门锁打开，只需三步。",
    "A calmer control plane for physical access.": "更清晰、更从容的物理门禁控制平面。",
    "Built with an ecosystem mindset.": "以生态协作的方式构建。",
    "Questions before deployment": "部署前常见问题",
    "Plans for pilots, buildings, and multi-site operations": "面向试点、楼宇与多站点运营的方案",
    "Preview the access-control stack": "预览门禁技术栈",
    "See how cloud rules, edge gateways, readers, and mobile credentials work together.":
      "了解云端规则、边缘网关、读卡器与移动凭证如何协同工作。",

    Hardware: "硬件",
    Platform: "平台",
    "Product stack": "产品栈",
    "Misty Reader": "Misty Reader",
    "Misty Edge Gateway": "Misty Edge Gateway",
    "Misty Cloud": "Misty Cloud",
    "NFC, BLE, QR, and card access at the door.": "在门端支持 NFC、BLE、二维码与卡片访问。",
    "Local rules, offline unlocks, and event sync.": "本地规则、离线开门与事件同步。",
    "Manage sites, doors, people, credentials, and events.": "管理站点、门、人、凭证与事件。",
    "Reader, edge gateway, and cloud": "读卡器、边缘网关与云平台",
    "A focused access-control stack for modern building deployments.": "面向现代楼宇部署的聚焦型门禁产品栈。",
    "NFC, BLE, QR, and mobile credentials at the door, ready for modern access workflows.":
      "在门端支持 NFC、BLE、二维码与移动凭证，适配现代门禁流程。",
    "Local decisions, offline cache, device heartbeat, and event sync for every connected door.":
      "为每一扇接入的门提供本地决策、离线缓存、设备心跳与事件同步。",
    "Manage sites, doors, users, credentials, access rules, and audit events from one cloud console.":
      "通过一个云控制台管理站点、门、用户、凭证、访问规则与审计事件。",

    "Core solutions": "核心方案",
    "Use cases": "使用场景",
    "Cloud SaaS": "云 SaaS",
    "Mobile Access Control": "移动门禁",
    "Central access management for every site.": "为每个站点提供集中式访问管理。",
    "Phone-first credentials for staff, tenants, and visitors.": "面向员工、租户与访客的手机优先凭证。",
    Factories: "工厂",
    Coworking: "联合办公室",
    "Fitness & Gyms": "健身房",
    "Office Buildings": "办公楼",
    Schools: "学校",
    Hospitals: "医院",
    "Cloud access with mobile credentials": "带移动凭证的云门禁",
    "Keep the operator workflow simple while doors stay responsive at the edge.":
      "让运营流程保持简单，同时让门端在边缘保持快速响应。",
    "Centralize sites, doors, people, groups, schedules, credentials, and events in one browser-based console.":
      "在一个浏览器控制台中集中管理站点、门、人、组、时间表、凭证与事件。",
    "Mobile Access": "移动访问",
    "Turn phones into secure credentials with NFC, BLE, QR, and time-bound passes for tenants, staff, and visitors.":
      "用 NFC、BLE、二维码与限时通行证，让手机成为租户、员工和访客的安全凭证。",
    "Access Integrations": "门禁集成",
    "Connect identity, HR, visitor workflows, and building systems through APIs and event webhooks.":
      "通过 API 与事件 Webhook 连接身份、HR、访客流程与楼宇系统。",
    "Visitor Access": "访客访问",
    "Send temporary QR or mobile passes, set schedules, and audit every visit from invite to unlock.":
      "发送临时二维码或移动通行证，设置时间表，并审计从邀请到开门的每次访问。",

    Configure: "配置",
    Present: "出示凭证",
    Audit: "审计",
    "Create places, doors, users, groups, and time-based access rules in the cloud.":
      "在云端创建空间、门、用户、组与基于时间的访问规则。",
    "Users unlock with mobile credentials, NFC cards, QR passes, or reader events at the door.":
      "用户通过移动凭证、NFC 卡、二维码通行证或门端读卡事件开门。",
    "Gateways sync decisions and events back to the console for real-time review.":
      "网关将决策与事件同步回控制台，便于实时查看。",
    "Mobile Credentials": "移动凭证",
    "Phone-first access without plastic-card bottlenecks.": "手机优先访问，减少实体卡瓶颈。",
    "Offline Ready": "离线可用",
    "Gateways keep access decisions available when the network is unstable.":
      "网络不稳定时，网关仍可保持访问决策可用。",
    "Real-time Revocation": "实时撤销",
    "Remove access instantly when roles, tenants, or risk changes.":
      "当角色、租户或风险变化时，可即时移除访问权限。",
    "Centralized Events": "集中事件",
    "Search door events, credential use, and admin actions in one timeline.":
      "在同一时间线中搜索门事件、凭证使用与管理员操作。",
    "Hardware Visibility": "硬件可见性",
    "Monitor readers, gateways, and door health before issues reach users.":
      "在问题影响用户前监控读卡器、网关与门状态。",
    "Built-in Trust": "内建信任",
    "Least-privilege roles, audit trails, and secure credential lifecycle controls.":
      "最小权限角色、审计轨迹与安全的凭证生命周期控制。",

    "Hardware partners": "硬件合作伙伴",
    "Software partners": "软件合作伙伴",
    "Partner program": "合作伙伴计划",
    Hikvision: "海康威视",
    ZKTeco: "ZKTeco",
    Fingerspot: "Fingerspot",
    Suprema: "Suprema",
    "Camera and building-security hardware ecosystem.": "摄像头与楼宇安防硬件生态。",
    "Access-control terminals, readers, and site hardware.": "门禁终端、读卡器与现场硬件。",
    "Attendance and access hardware for regional deployments.": "面向区域部署的考勤与门禁硬件。",
    "Biometric readers and enterprise access hardware.": "生物识别读卡器与企业门禁硬件。",
    "HR SaaS": "HR SaaS",
    "Identity & SSO": "身份与 SSO",
    "Visitor Software": "访客软件",
    "Property & Ops Apps": "物业与运营应用",
    "Provision and revoke access from employee lifecycle systems.":
      "从员工生命周期系统中开通与撤销访问权限。",
    "Connect login, roles, and access policy ownership.": "连接登录、角色与访问策略归属。",
    "Issue temporary access from visitor workflows.": "从访客流程中发放临时访问权限。",
    "Sync access events with building-operation software.": "将访问事件同步到楼宇运营软件。",
    "Become our partner": "成为我们的合作伙伴",
    "Work with Mistyislet on hardware, software, installation, or channel partnerships.":
      "与 Mistyislet 在硬件、软件、安装或渠道合作上共同推进。",
    "Hardware and software around the door": "围绕门的硬件与软件生态",
    "Build a partner ecosystem that connects readers, cameras, HR data, identity, visitors, and operations.":
      "构建连接读卡器、摄像头、HR 数据、身份、访客与运营的合作伙伴生态。",
    "Reader, camera, attendance, and biometric hardware partners help Mistyislet fit into real buildings without forcing one rigid stack.":
      "读卡器、摄像头、考勤与生物识别硬件伙伴，帮助 Mistyislet 融入真实楼宇，而不是强行要求单一硬件栈。",
    "HR SaaS, identity, visitor, and operations software": "HR SaaS、身份、访客与运营软件",
    "Software partners connect access decisions with employee lifecycle, SSO roles, visitor workflows, and daily building operations.":
      "软件合作伙伴将访问决策连接到员工生命周期、SSO 角色、访客流程与日常楼宇运营。",
    "Integrator network": "集成商网络",
    "Deployment and on-site commissioning support": "部署与现场调试支持",
    "Installation partners help plan wiring, reader placement, gateway commissioning, handover, and support for each site.":
      "安装合作伙伴协助规划布线、读卡器点位、网关调试、交付与每个站点的支持。",
    "Hardware, software, installation, and channel partnerships": "硬件、软件、安装与渠道合作",
    "Partner with Mistyislet to package software, hardware, and service into clearer deployment paths for real building operators.":
      "与 Mistyislet 合作，将软件、硬件与服务打包成更清晰的楼宇部署路径。",

    Pilot: "试点",
    Building: "楼宇",
    Enterprise: "企业版",
    "Validate one site with core cloud access, mobile credentials, and gateway setup.":
      "用核心云门禁、移动凭证与网关设置验证一个站点。",
    "Operate doors, users, groups, schedules, and real-time events for one property.":
      "为一个物业运营门、用户、组、时间表与实时事件。",
    "Multi-site controls, integration support, dedicated onboarding, and security review.":
      "多站点控制、集成支持、专属上线与安全审查。",
    "Cloud console": "云控制台",
    "Reader and gateway setup": "读卡器与网关设置",
    "Mobile credential pilot": "移动凭证试点",
    "Doors, users, schedules": "门、用户、时间表",
    "Live event search": "实时事件搜索",
    "Admin roles and audit trails": "管理员角色与审计轨迹",
    "API/webhook basics": "API/Webhook 基础",
    "Support for launch": "上线支持",
    "Multi-site governance": "多站点治理",
    "Integration support": "集成支持",
    "Security review": "安全审查",
    "Dedicated onboarding": "专属上线",
    "Custom hardware rollout": "定制硬件 rollout",

    "Can Mistyislet work with existing readers and controllers?":
      "Mistyislet 能与现有读卡器和控制器配合吗？",
    "Mistyislet is designed for modern reader and gateway deployments, with integration planning for compatible existing building hardware.":
      "Mistyislet 面向现代读卡器与网关部署设计，也会为兼容的现有楼宇硬件规划集成路径。",
    "Does the edge gateway keep doors working offline?": "边缘网关能让门在离线时继续工作吗？",
    "Yes. The edge gateway keeps local access rules and event queues so doors can continue working during network interruptions.":
      "可以。边缘网关保存本地访问规则与事件队列，因此网络中断时门仍可继续工作。",
    "Which mobile credentials are supported?": "支持哪些移动凭证？",
    "Mobile passes can be issued for NFC, BLE, and QR workflows, alongside cards where a site still needs them.":
      "可为 NFC、BLE 与二维码流程发放移动通行证；如果站点仍需要，也可以与卡片并行使用。",
    "Can we integrate with HR, SSO, or SCIM?": "可以和 HR、SSO 或 SCIM 集成吗？",
    "Yes. APIs and webhooks connect access events and users with HR, identity, visitor, and operations systems; SSO and SCIM can be scoped for enterprise rollouts.":
      "可以。API 与 Webhook 可将访问事件和用户连接到 HR、身份、访客与运营系统；SSO 和 SCIM 可纳入企业部署范围。",
    "How are access events audited?": "访问事件如何审计？",
    "Door events, credential usage, admin changes, and revocations are stored in the cloud console for search and review.":
      "门事件、凭证使用、管理员变更与权限撤销会保存在云控制台中，便于搜索和复查。",
    "How do pricing and hardware deployment work?": "价格与硬件部署如何计算？",
    "Pricing is quoted by site size, door count, hardware scope, integrations, and support needs so pilots can start small.":
      "价格会根据站点规模、门数量、硬件范围、集成与支持需求报价，因此可以从小规模试点开始。",

    "At the door": "在门端",
    "Managed from Misty Cloud": "通过 Misty Cloud 管理",
    "Misty Reader is the user-facing access point for modern buildings and shared spaces.":
      "Misty Reader 是现代楼宇与共享空间中面向用户的访问入口。",
    "Supports card and phone-first access": "支持卡片与手机优先访问",
    "Works with time-bound visitor credentials": "支持限时访客凭证",
    "Designed for reader and gateway deployments": "面向读卡器与网关部署设计",
    "Reader behavior is configured from the same cloud console that manages users, doors, and events.":
      "读卡器行为通过同一个云控制台配置，该控制台也管理用户、门与事件。",
    "Credential lifecycle controls": "凭证生命周期控制",
    "Door-level configuration": "门级配置",
    "Event visibility after unlock attempts": "开门尝试后的事件可见性",
    "Local control": "本地控制",
    "Cloud connected": "连接云端",
    "A local gateway that keeps door decisions responsive even when the network is unstable.":
      "一个本地网关，即使网络不稳定，也能让门端决策保持响应。",
    "The gateway keeps key access logic close to the door, reducing dependency on a live cloud round trip.":
      "网关将关键访问逻辑放在门附近，减少对实时云端往返的依赖。",
    "Cached access rules": "缓存访问规则",
    "Offline event queue": "离线事件队列",
    "Door and reader heartbeat monitoring": "门与读卡器心跳监控",
    "Control plane": "控制平面",
    "Operations layer": "运营层",
    "The SaaS control plane for places, doors, users, credentials, rules, and events.":
      "用于空间、门、用户、凭证、规则与事件的 SaaS 控制平面。",
    "Misty Cloud gives operators one place to configure access without jumping between device tools.":
      "Misty Cloud 让运营者在一个地方配置访问，而不必在多个设备工具之间切换。",
    "People, groups, and roles": "人员、组与角色",
    "Schedules and exceptions": "时间表与例外",
    "Reader and gateway configuration": "读卡器与网关配置",
    "The same platform carries the daily workflows: issue access, review events, and revoke permissions.":
      "同一平台承载日常流程：发放访问权限、查看事件、撤销权限。",
    "Event search": "事件搜索",
    "Admin audit trail": "管理员审计轨迹",
    "API and webhook integration": "API 与 Webhook 集成",
    Solution: "解决方案",
    "Use case": "使用场景",
    "Hardware partner": "硬件合作伙伴",
    "Software partner": "软件合作伙伴",
    Docs: "文档",
    Build: "构建",
    Learn: "学习",
    "API Reference": "API 参考",
    "Deployment Guide": "部署指南",
    "Security Notes": "安全说明",
    "Product concepts, setup notes, and release guides.": "产品概念、设置说明与发布指南。",
    "Doors, credentials, events, users, and webhooks.": "门、凭证、事件、用户与 Webhook。",
    "Reader placement, gateway wiring, and launch steps.": "读卡器点位、网关布线与上线步骤。",
    "Credential lifecycle, roles, audit, and revocation controls.":
      "凭证生命周期、角色、审计与撤销控制。",
    "Docs and APIs without the clutter": "清晰的文档与 API",
    "Find the core technical references for planning, integrating, and operating Mistyislet.":
      "查找用于规划、集成与运营 Mistyislet 的核心技术参考。",
    "NFC and BLE": "NFC 与 BLE",
    "QR access": "二维码访问",
    "Offline decisions": "离线决策",
    "Event sync": "事件同步",
    "Device heartbeat": "设备心跳",
    "Sites and doors": "站点与门",
    Credentials: "凭证",
    "Audit events": "审计事件",
    "Central console": "集中控制台",
    "Multi-site ready": "支持多站点",
    "Audit-first": "审计优先",
    "Mobile credentials": "移动凭证",
    "Phone-first": "手机优先",
    "Temporary passes": "临时通行证",
    "Fast revocation": "快速撤销",
    "Door schedules": "门禁时间表",
    "Event audit": "事件审计",
    "Access model": "访问模型",
    "Operational view": "运营视图",
    "Zone-based permissions": "基于区域的权限",
    "Temporary visitor passes": "临时访客通行证",
    "Offline-ready edge decisions": "可离线的边缘决策",
    "Door and gateway status": "门与网关状态",
    "Searchable unlock events": "可搜索的开门事件",
    "Fast access revocation": "快速撤销访问",
    "Control access across shifts, production zones, and restricted areas.":
      "跨班次、生产区域与限制区域控制访问。",
    "Manage members, guests, meeting rooms, and shared-space access from the cloud.":
      "从云端管理会员、访客、会议室与共享空间访问。",
    "Give members mobile access while keeping staff, rooms, and service areas controlled.":
      "为会员提供移动访问，同时保持员工、房间与服务区域受控。",
    "Unify tenant access, lobby flows, elevators, and operator oversight.":
      "统一租户访问、大堂流程、电梯权限与运营监督。",
    "Coordinate staff, student, visitor, and after-hours access with clear audit trails.":
      "通过清晰审计轨迹协调员工、学生、访客与非工作时间访问。",
    "Protect clinical, pharmacy, staff, visitor, and support areas with role-aware access.":
      "通过基于角色的访问保护临床、药房、员工、访客与支持区域。",
    "A use-case page maps the building context to doors, people, credentials, and time-based rules.":
      "使用场景页面将楼宇上下文映射到门、人员、凭证与基于时间的规则。",
    "Operators get the everyday controls they need without exposing unnecessary setup complexity.":
      "运营者获得日常所需控制，而不暴露不必要的设置复杂度。",
    "For operators": "面向运营者",
    "For integrations": "面向集成",
    "Credential lifecycle": "凭证生命周期",
    "User experience": "用户体验",
    Concepts: "概念",
    "Setup notes": "设置说明",
    "Release guidance": "发布指南",
    "Product documentation": "产品文档",
    "Deployment guidance": "部署指导",
    "Core objects": "核心对象",
    "Integration flows": "集成流程",
    "Before installation": "安装前",
    "Go-live": "上线",
    "Access governance": "访问治理",
    "Credential safety": "凭证安全",
    "Hardware ecosystem": "硬件生态",
    "Site deployments": "站点部署",
    "Integrator support": "集成商支持",
    "Hardware context": "硬件背景",
    "Operator workflow": "运营者流程",
    "Lifecycle automation": "生命周期自动化",
    "Operator workflows": "运营者流程",
    "Software integration": "软件集成",
    "Access outcome": "访问结果",
    "Partner paths": "合作路径",
    "How we work together": "我们如何合作",
    "Show previous partner": "显示上一个合作伙伴",
    "Show next partner": "显示下一个合作伙伴",
    "Hikvision, ZKTeco, Fingerspot, Suprema": "海康威视、ZKTeco、Fingerspot、Suprema",
    "Custom /quote": "定制 /报价",
    "€29 /door/mo": "€29 /门/月",
    "A door reader for NFC, BLE, QR, card, and mobile credential workflows.":
      "面向 NFC、BLE、二维码、卡片与移动凭证流程的门端读卡器。",
    "Events and configuration sync back to Misty Cloud so operators can manage sites centrally.":
      "事件与配置会同步回 Misty Cloud，便于运营者集中管理站点。",
    "Real-time event forwarding": "实时事件转发",
    "Remote rule updates": "远程规则更新",
    "Multi-site device visibility": "多站点设备可见性",
    "Centralize physical access across buildings, doors, people, schedules, and credentials.":
      "集中管理跨楼宇、门、人员、时间表与凭证的物理访问。",
    "Cloud SaaS keeps access management understandable for teams that operate real buildings.":
      "Cloud SaaS 让真实楼宇运营团队也能轻松理解和管理访问。",
    "One console for sites and doors": "一个控制台管理站点与门",
    "Roles for admins and operators": "面向管理员与运营者的角色",
    "Searchable event history": "可搜索的事件历史",
    "Misty Cloud can connect access events and user lifecycle changes with external systems.":
      "Misty Cloud 可将访问事件与用户生命周期变化连接到外部系统。",
    Webhooks: "Webhook",
    "API reference": "API 参考",
    "Identity and HR workflow support": "身份与 HR 流程支持",
    "Issue phone-first access for staff, tenants, members, and visitors without plastic-card bottlenecks.":
      "为员工、租户、会员与访客发放手机优先访问，减少实体卡瓶颈。",
    "Mobile access should be easy to issue, easy to audit, and easy to revoke.":
      "移动访问应该易于发放、易于审计，也易于撤销。",
    "QR visitor passes": "访客二维码通行证",
    "Time-based permissions": "基于时间的权限",
    "Users get familiar access flows while operators keep control of every credential.":
      "用户获得熟悉的访问流程，同时运营者仍能控制每一张凭证。",
    "Tenant and staff access": "租户与员工访问",
    "Guest and visitor workflows": "来宾与访客流程",
    "Central event visibility": "集中事件可见性",
    "Product concepts, deployment notes, and operating guidance for Mistyislet.":
      "Mistyislet 的产品概念、部署说明与运营指南。",
    "Docs should give operators and builders a shared language for every access-control object.":
      "文档应为运营者与建设者提供描述每个门禁对象的共同语言。",
    "Places, doors, readers, and gateways": "空间、门、读卡器与网关",
    "Users, groups, schedules, and credentials": "用户、组、时间表与凭证",
    "Events, audits, and admin roles": "事件、审计与管理员角色",
    "Documentation also supports planning before a site goes live.":
      "文档也支持站点上线前的规划。",
    "Door inventory": "门点清单",
    "Reader and gateway mapping": "读卡器与网关映射",
    "Launch checklist": "上线检查清单",
    "API surfaces for doors, credentials, users, events, and webhooks.":
      "面向门、凭证、用户、事件与 Webhook 的 API 能力。",
    "REST API": "REST API",
    "Event data": "事件数据",
    "The API should make physical access programmable without hiding operational context.":
      "API 应让物理访问可编程，同时保留必要的运营上下文。",
    "Users and credentials": "用户与凭证",
    "Doors and devices": "门与设备",
    "Access events and admin audit": "访问事件与管理员审计",
    "Teams can connect Mistyislet to identity, HR, visitor, and operations software.":
      "团队可将 Mistyislet 连接到身份、HR、访客与运营软件。",
    "Provisioning workflows": "开通流程",
    "Event subscriptions": "事件订阅",
    "Revocation and lifecycle automation": "撤销与生命周期自动化",
    "A planning guide for reader placement, gateway wiring, credentials, and site launch.":
      "面向读卡器点位、网关布线、凭证与站点上线的规划指南。",
    "Site planning": "站点规划",
    Wiring: "布线",
    "Good deployment starts with a clean model of doors, users, zones, and exceptions.":
      "良好的部署始于清晰的门、用户、区域与例外模型。",
    "Access zones": "访问区域",
    "Credential plan": "凭证计划",
    "Launch steps keep site teams, integrators, and operators aligned.":
      "上线步骤让站点团队、集成商与运营者保持一致。",
    "Gateway commissioning": "网关调试",
    "Reader validation": "读卡器验证",
    "Operator handover": "运营者交接",
    "Credential lifecycle, least-privilege roles, auditability, and revocation controls.":
      "凭证生命周期、最小权限角色、可审计性与撤销控制。",
    "Least privilege": "最小权限",
    "Audit trail": "审计轨迹",
    Revocation: "撤销",
    "Operators need clear controls for who can grant access and how changes are reviewed.":
      "运营者需要清晰控制谁可以授权访问，以及变更如何被复核。",
    "Admin roles": "管理员角色",
    "Group-based access": "基于组的访问",
    "Change audit": "变更审计",
    "Credential workflows should make it easy to remove access when risk changes.":
      "凭证流程应让风险变化时移除访问权限变得简单。",
    "Immediate revocation": "即时撤销",
    "Temporary credentials": "临时凭证",
    "Event review": "事件复核",
    "Hardware partner pages explain where third-party devices may fit around the Mistyislet stack.":
      "硬件合作伙伴页面说明第三方设备如何围绕 Mistyislet 技术栈接入。",
    "Readers and terminals": "读卡器与终端",
    "Camera and security context": "摄像头与安防背景",
    "Deployment planning": "部署规划",
    "Mistyislet keeps the operator experience centered around cloud rules, credentials, and events.":
      "Mistyislet 让运营体验始终围绕云端规则、凭证与事件展开。",
    "Access rules in Misty Cloud": "Misty Cloud 中的访问规则",
    "Gateway and reader visibility": "网关与读卡器可见性",
    "Software partner pages describe how business systems can connect with access-control operations.":
      "软件合作伙伴页面说明业务系统如何连接门禁运营。",
    "User lifecycle": "用户生命周期",
    "Access event sync": "访问事件同步",
    "Role and permission mapping": "角色与权限映射",
    "The goal is to reduce manual access work while keeping physical security auditable.":
      "目标是在减少手动访问工作的同时，让物理安全保持可审计。",
    "Automated provisioning": "自动开通",
    "Cross-system visibility": "跨系统可见性",
    "The partner program supports teams that help buildings adopt modern access control.":
      "合作伙伴计划支持帮助楼宇采用现代门禁的团队。",
    Installation: "安装",
    "Hardware ecosystem partnerships": "硬件生态合作",
    "Software and API integrations": "软件与 API 集成",
    "Installation and deployment support": "安装与部署支持",
    "The goal is to make the whole deployment feel coherent for operators and end users.":
      "目标是让整个部署对运营者和最终用户都保持一致、清晰。",
    "Shared deployment planning": "共同部署规划",
    "Technical enablement": "技术赋能",
    "Case studies and co-selling": "案例研究与联合销售",
    "Related paths": "相关路径",
    "Continue through the product, solution, resource, or partner path without going back to the main page.":
      "无需回到主页，可以继续浏览产品、解决方案、资源或合作伙伴路径。",
  },
};

function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "id" || value === "zh";
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return getConfiguredDefaultLocale();
  }

  const saved = window.localStorage.getItem("mistyislet-locale");
  if (isLocale(saved)) {
    return saved;
  }

  const browserLanguage = window.navigator.language.toLowerCase();
  if (browserLanguage.startsWith("id")) {
    return "id";
  }
  if (browserLanguage.startsWith("zh")) {
    return "zh";
  }
  return getConfiguredDefaultLocale();
}

function getConfiguredDefaultLocale(): Locale {
  const configuredLocale = import.meta.env.VITE_DEFAULT_LOCALE ?? null;
  return isLocale(configuredLocale) ? configuredLocale : "en";
}

export function translate(locale: Locale, text: string) {
  return dictionaries[locale][text] ?? text;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem("mistyislet-locale", nextLocale);
  };

  useEffect(() => {
    const option = languageOptions.find((item) => item.locale === locale);
    document.documentElement.lang = option?.htmlLang ?? "en";
    document.title = translate(locale, "Mistyislet - Cloud access control for modern places");
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        translate(
          locale,
          "Cloud access control for readers, edge gateways, mobile credentials, and every place you operate.",
        ),
      );
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: (text: string) => translate(locale, text),
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return context;
}
