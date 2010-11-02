# RESTful and Routy

* slug: restful-and-routy
* tags: apis, bookmarklets, links, mapping, rest, routes
* date: 2010-11-01 11:05PM
* location: Home

Social sites often do clever things with URLs that make the URLs a lot less intelligable, unless you've seen the sites
before. For example, `http://bit.ly/quux` and `http://bit.ly/quux+` is a lot less clear to someone without prior 
experience than http://bit.ly/links/quux/redirect and http://bit.ly/links/quux would be. The latter urls are arranged
into neat little buckets, while the former are terse, which makes sense for an url shortener.

Another example is Facebook. Facebook lets people shorten pages (businesses) and profiles (people) in the same
namespace. The different types of users have widely differing actions that can be performed on them. Having them in the
same space makes them fit better on business cards, though.

I think the routes make sense in both of these cases for the public-facing sites, but perhaps not for the apis. In fact,
there is often a mismatch between api urls and site urls. For example, on twitter, if I remember correctly, my url is
`http://twitter.com/benatkin` for browsers and `http://api.twitter.com/v2/users/benatkin` for api clients. I don't know
of a way to ask what the api url is for a browser url. One way would be to output the api url in the headers, but that
would mean pulling down the content twice.

It also could complicate the design of the application code, if it's not made explicit where the api urls and the
application urls diverge.

I think it would be nice to have a pre-router, one that converts urls from the browser into api urls, and a router that
describes the api. This pre-router could also have an API, for bookmarklets and link analyzers to use rather than
performing the mapping themselves.
