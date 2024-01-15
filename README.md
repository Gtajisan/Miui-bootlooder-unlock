# Miui-bootlooder-unlock
### STEP 1: Enable USB Debugging and OEM Unlocking
**To begin with, you will have to enable USB Debugging as well as OEM Unlocking. The former will be used to make your device get recognized by your PC in the ADB Mode. The latter will allow us to unlock the device’s bootloader. Here are the required instructions to enable both of them:**
*1. Head over to Settings on your Xiaomi device
*2.Then go to About Phone and tap on the MIUI version 7 times.
*3.Then go back to Settings and tap on Additional Settings System.
*3.Within that, head over to Developer Options and enable both the USB Debugging and OEM Unlock toggles.
![image](https://github.com/Gtajisan/Miui-bootlooder-unlock/assets/124022055/a0ce3ff3-1c3e-48e3-b8b0-bd5cb76537fe)
### STEP 2: Bind your Account to your Xiaomi Device
**You will now have to bid your Mi Account to your device. For that, you need to have a Mi Account, if you don’t already have one then [register](https://account.xiaomi.com/pass/register) and create it right away. When that is done, follow the below steps:**
![image](https://github.com/Gtajisan/Miui-bootlooder-unlock/assets/124022055/765cc3c6-2594-4e58-9396-c0457cb5802e)
*1.Go to the Settings page on your Xiaomi device
*2.Head over to Additional Settings followed by Developer options.
*3.There you should see the Mi Unlock Status option, tap on it.
*4.Tap on the Add account and device button situated at the bottom and follow the on-screen instructions. Make sure to enter the same phone number that is currently on your device.
*5.Once the account is successfully bound, you should get the message that “Added successfully. MI account is associated with this device now”.

After this, you may now proceed ahead and unlock the bootloader on your Xiaomi device.
### STEP 3: Boot Xiaomi to Fastboot
![image](https://github.com/Gtajisan/Miui-bootlooder-unlock/assets/124022055/76543286-e3a1-43e1-9bfe-d36594cdd082)
*1.The unlocking process requires your device to be booted to the Fastboot Mode. Follow the below steps to do so:
*2.Connect your device to PC via USB cable. Make sure Debugging is enabled.
*3.Head over to the platform-tools folder on your PC. Type in CMD in its address bar and hit Enter. This will launch the Command Prompt.
*4.Now execute the below command to boot your device to Fastboot Mode:
```
adb reboot bootloader
```
*5.Once that is done, you should see the famous Mi Bunny logo with the Fastboot text. With this, you may now make use of the Mi Unlock Tool and unlock the bootloader on your Xiaomi device. Follow along.

### STEP 4: Unlock Xiaomi Bootloader using Mi Flash Tool
*1.Launch the Mi Unlock Tool on your PC. Make sure your Xiaomi device booted to Fastboot Mode and connected to PC as well.

*2.Now sign in with your credentials. The server will then check whether this account is bound to your Xiaomi device or not. Since you have already done so, you should get the Phone Connected message on the tool.
![image](https://github.com/Gtajisan/Miui-bootlooder-unlock/assets/124022055/f44dee9e-42c2-48fe-9b73-b7c3d5d1f52a)
*3.So go ahead and click on the Unlock button. A confirmation pop up will then appear. Click on the Unlock anyway button. At this point, your device will be wiped as well. So make sure you have taken a backup beforehand.
![image](https://github.com/Gtajisan/Miui-bootlooder-unlock/assets/124022055/e5e909c4-2c71-436c-93ba-ee097014dd32)
*4.The process will then start and should take a few minutes. Once that is done, you will see the Unlocked Success message. Click on the Reboot phone button to restart your device.
![image](https://github.com/Gtajisan/Miui-bootlooder-unlock/assets/124022055/968980fb-9d77-42f2-9a96-61e770317ff1)
done bro enjoy 😓
