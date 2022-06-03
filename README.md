# Suspicious-Traders

## Purpose: 
Automatically label (and optionally response to) known scammers when they email you.

See the [Wiki](https://github.com/Troubled-Mind/Suspicious-Traders/wiki) for the reasons each email is on the list    

## Disclaimer
This list is sourced elsewhere and is just a mirror. I will not be removing people unless the main external list is updated.
Any communications to me regarding why an email is on there/removal requests will be deleted.

## Setup Guide

## Step 1 - Creating Gmail Labels
The script requires TWO labels to be created.
1. A label which will be applied to all new inbound emails 
2. A label which will be applied to scammers (I recommend colouring this in RED)

To do this, find this button in your Gmail sidebar, and create the two labels, with whatever name you desire.    
![image](https://user-images.githubusercontent.com/102833637/161351269-e3fdfecf-a5ca-45c5-a3ab-7d2a89d3d317.png)

## Step 2 - Apply the label to all inbound emails
Don't worry - it'll be auto-removed by the script :) 
In your Gmail, search for this:
`label:unread -in:chats `    
Then click this icon     
![image](https://user-images.githubusercontent.com/102833637/161351398-e9d2a428-4277-40dd-a0dd-004350a6b5e8.png)

Ignore the rest of the settings and "Create Filter"    
![image](https://user-images.githubusercontent.com/102833637/161351423-eec38130-12a2-4540-b86e-3bbb6ed912b8.png)      
And click OK on the confirmation.

On the next screen, you want to apply your new label.
Then create filter    
![image](https://user-images.githubusercontent.com/102833637/161351463-a6c94da1-6dee-4c7a-a722-599330504c53.png)


Once this is done, Gmail is ready. Now to Google scripts!

## Step 3 - Google Scripts
Go to https://script.google.com

**Make sure you're logged in using your trading email. if not at the top right click your picture and change to your trading email**

Create a new project (you might need to open the sidebar)    
![image](https://user-images.githubusercontent.com/102833637/161351610-0a9f223f-71c5-446a-bd32-556035a75171.png)

Paste in all of the code from the github file:

https://raw.githubusercontent.com/Troubled-Mind/Suspicious-Traders/main/scammerDetection.gs

Set the two variables on line 2 and 3 to whatever you named the labels in step 1.

Make sure that it says "scammerDetection" at the top (you might need to **save**) and click Run, then click Allow to let it access your emails to detect new scammers.
    
![image](https://user-images.githubusercontent.com/102833637/161351769-83a4f619-861a-4878-add8-9a7459707b14.png)

There's just one more step now - AUTOMATION!

## Step 4 - Automation!
In Google Scripts, go to "Triggers" on the left    
![image](https://user-images.githubusercontent.com/102833637/161351968-17dafa3d-d688-464b-9ed1-2f3bf17b4131.png)      
Then "Add trigger" at the very bottom right    
![image](https://user-images.githubusercontent.com/102833637/161351990-baca61c2-8906-42ce-bf03-5932024b69dd.png)


Make sure it's set to "scammerDetection", "Time-driven", "Minutes timer", and *"5 Minutes"*    
![image](https://user-images.githubusercontent.com/102833637/161352012-448fdcb8-23e3-4462-9239-b0e19427a5fa.png)


* Note- Set to every 5 minutes instead of every minute if you get errors

Click "Save" and you're done!
