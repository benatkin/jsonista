# CouchDB Guide Intro

I'm doing a full reading of the [CouchDB Guide](http://guide.couchdb.org/draft/index.html). I started from the beginning yesterday and just finished Chapter 5.

* slug: couchdb-guide-intro
* url: http://guide.couchdb.org/draft/index.html
* tags: couchdb, curl, intro, views
* date: 2010-10-31 11:59PM
* location: Home

# [Foreward](http://guide.couchdb.org/draft/foreword.html)

I found the foreward by Damien Katz very inspirational. It got me thinking about the ever-increasing importance of
databases.

# [Chapter 1: Why CouchDB?](http://guide.couchdb.org/draft/why.html)

* relaxing
* modeling data
* operations: query, map, combine, filter
* A Better Fit
* real-world data & real-world documents
* building blocks
* replication
* fallacies of distributed computing
* local data

* Modeling the real world is an important challenge
* Got me thinking about how CouchDB can get people to set up things they might not otherwise set up.

# [Chapter 2: Eventual Consistency](http://guide.couchdb.org/draft/consistency.html)

* working with the grain
* making good tradeoffs for local computing
* distributed consistency

# [Chapter 3: Getting Started](http://guide.couchdb.org/draft/tour.html)

* creating databases
* futon
* an introduction to views

# [Chapter 4: The Core API](http://guide.couchdb.org/draft/api.html)

* server
* databases
* documents
* attachments
* replication

* I followed along, mostly on Cloudant
* I didn't get replication working on Cloudant right away, so I did that example locally. I'll look into getting it
  working on Cloudant later.
* I learned a lot about the headers. For example, if I don't tell it that I only want application/json, it will send me
  text/plain for the mimetype.
* I liked the album example
* This made me comfortable with the idea of creating lots of databases for playing around, to minimize breaking things

## Attachments

It clicked that attachments are truly part of the documents that contain them. When attachments are changed, the
document's revision id is changed. Attachments don't have a revision id of their own. Attachments use the same
Etag as the documents they're attached to.

This makes me want to use attachments liberally. I'm really liking the idea of extracting JSON from Markdown, HTML, and
XML.

# [Chapter 5: Design Documents](http://guide.couchdb.org/draft/design.html)

* Code in documents
  * Yes, CouchDB stores code in JSON
  * The idea of storing code for other languages, like Ruby, in JSON goes well with the CouchDB model
* Applications Are Documents
* Full applications in CouchDB
  * views, shows, lists
  * validation functions
  * change notifications, filters
  * update handlers for parsing non-JSON input
  * events, rewrites

# Plan

At the rate I'm going through the book, I hope to finish it in the next week. After this I'd like to read:

* A ruby web development book
  * Agile Web Development With Rails 3 (I own a copy)
  * Agile Web Development With Rails 4
  * The Rails Way by Obie Fernandez
* A RESTful API book
  * Service Oriented Design with Ruby and Rails by Paul Dix (I own a copy)
  * Restful Web Services by Leonard Richardson and Sam Ruby
* Read JavaScript: The Good Parts more thoroughly
