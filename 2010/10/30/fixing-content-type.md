# Fixing Content Type

I ran a curl command to get my curl-md-attachment.md document, and saw that the
`content-type` was set to `application/x-www-form-urlencoded`. I think this must
be because I didn't specify the content type when I ran curl. To fix this, I'm
going to read the curl man page and use sed to extract the revision id, so I
can write a stand-alone script.

* date: 2010-10-30 5:48PM MST
* tags: attachments, bash, curl, http, sed

# Before

Run the Before section in [curl-md-attachment.md](../29/curl-md-attachment.md).

# Up

    export REV=$(curl $DOC | sed 's/.*_rev"[^"]*"//;s/".*//')
    export HEADER="Content-Type:text/plain"
    curl -X PUT --data-binary @../29/$THISFILE $ATT?rev=$REV -H $HEADER

# Result

Instead of trying to download the file, visiting 
[curl-md-attachment.md](http://benatkin.cloudant.com/jsonista/quuxzzrt/curl-md-attachment.md)
on Cloudant now shows the plain text in the browser.
