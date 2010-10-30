# Curl a Markdown Attachment

Use curl to create a document with a markdown-formatted attachment. 

* slug: curl-md-attachment
* tags: curl, markdown, attachment, bash
* date: 2010-10-29 7:37 PM MST
* location: Metropolis Coffee in Denver, CO

# Huh?

I'm building a custom blog & wiki engine for jsonista.com. I may extract it later.

# Why curl?

After seeing Matthias Meyer's recent CouchDB presentation, I want to become fluent in talking to CouchDB with curl.

# Why markdown?

It's nice in Writer on my iPad, and nice on Github. I also want to make it nice on CouchDB. My plan is to parse the XML and grab data from li's.

# Why in an attachment?

Because I haven't wired up something that views multiline strings in JSON nicely, that's why!

# Before

    export UPASS=benatkin:$(cat ~/.cloudantpw)    
    export CLOUDANT=https://$UPASS@benatkin.cloudant.com
    export COUCH=$CLOUDANT/jsonista
    export THISFILE=curl-md-attachment.md
    export JSON={\"src\":\"$THISFILE\"}
    export DOC=$COUCH/quuxzzrt
    export ATT=$COUCH/_attachments/$THISFILE

    echo JSON: $JSON
    echo DOC: $DOC
    echo ATT: $ATT

# Up

This hasn't yet been certified to work on my machine.   
        
    curl -X PUT -d $JSON $DOC
    curl -X PUT -d @$THISFILE $ATT

# Down

    curl -X DELETE $ATT

# Steps

* Run upload commands on terminal, fixing any errors
* Remove not-tested statement, delete doc, re-run
* Visit and share [link](http://benatkin.cloudant.com/jsonista/quuxzzrt/_attachments/curl-md-attachment.md)
* Note what headers couchdb sends for the attachment

