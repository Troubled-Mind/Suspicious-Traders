// Set the value (red text) to whatever you named new the label for new emails that come into your account :)
var labelForInboundEmails = 'New Label Scammers'
var labelForScammers = 'Bad Reputation Trader'


// --------------- DO NOT EDIT BELOW THIS LINE --------------- 
var scammerArray

function scammerDetection() {

  // This checks your email client for new inbound emails with the label
  const inboundThreads = GmailApp.search('label:"'+labelForInboundEmails+'"')
  // Get the label for known scammers
  var scammerLabel = GmailApp.getUserLabelByName(labelForScammers)
  // If there's at least 1 new Inbound email, get scammer details from Github
  // This should prevent it hitting GitHub API limit hopefully :)
  if(inboundThreads.length > 0) { 
    // Run the "fetchScammers()" function to get the details from Github
    fetchScammers()
  }
  // For each "thread" of messages which have that label on
  for (const thread of inboundThreads) {
    // Get all messages in that thread
    const messages = thread.getMessages()
    // Set a variable for use in next loop
    var messageNum = 1
    // Loop through messages
    for (message of messages) {
      //if it's the only message in the thread
      if(messageNum === thread.getMessageCount()) {
        // String manipulation to only get email of sender
        var sender = message.getFrom().substring(
          message.getFrom().indexOf("<")+1,
          message.getFrom().lastIndexOf(">")
        )
        // If sender email exists in known scammer list, add the label
        if(scammerArray.includes(sender)) {
          thread.addLabel(scammerLabel)
          Logger.log("Scammer detected: " + sender + "- Adding scam label!")
        }
      }
    }
    // Remove the label whether scammer or not
    var inboundLabel = GmailApp.getUserLabelByName(labelForInboundEmails)
    thread.removeLabel(inboundLabel)
  }
}

function fetchScammers() {
  // The URL to fetch scammers from
  var url = 'https://raw.githubusercontent.com/Troubled-Mind/Suspicious-Traders/main/Files/Suspicious-Traders.csv'
  
  // Store the contents of Github file into a variable for use later
  var scammerList = UrlFetchApp.fetch(url).getContentText();
  
  // Split the scammerList variable based on new lines
  // This means we can check if the emailer is in the scammer list!
  scammerArray = scammerList.split(/\r?\n/);
}
