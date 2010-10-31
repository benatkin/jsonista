# Fixing Content Type

I ran a curl command to get my curl-md-attachment.md document, and saw that the
`content-type` was set to `application/x-www-form-urlencoded`. I think this must
be because I didn't specify the content type when I ran curl. To fix this, I'm
going to read the curl man page and use sed to extract the revision id, so I
can write a stand-alone script.

# 

* date: 2010-10-30 5:48PM MST
* tags: attachments, bash, curl, http, sed
