# Pivotal Tracker & Resources

* date: 2010-11-02 1:45 PM MST
* tags: pivotal tracker, rest, ui

The more I learn about Pivotal Tracker, the more I like it. The first thing I liked
was the UI, that is complex and yet still simple. After getting involved in a project
that uses it, I've started to appreciate the story workflow. What I really like is
the idea of following through on stories.

This post isn't about what I like about Pivotal Tracker; it's about what I think
could be done to make it more powerful and more straightforward to use.

# Linking to Stories

I think it could be more resource-oriented and less action-oriented. One thing
I noticed when I started thinking about linking to stories and perhaps developing
against their API is that URLs for stories are like this:

    https://www.pivotaltracker.com/story/show/6005185

Basecamp to-do list urls, on the other hand, are like this:

    https://jsonista.basecamphq.com/projects/3421512/todo_lists/3421512

The BaseCamp url has breadcrumbs built into it, which are quite useful if I see
it appear in, for example, a github wiki. (I think it's a serious limitation of
mobile browsers that I can't see the url targets before clicking on them.)
The pivotal tracker url has an action before the id. It says less about what it
links to than how the router of the application is set up.

Now, this is just the url and it could be argued that urls aren't very important,
but it's reflected in their UI as well. It's much easier to go to a page for a
single to-do list in BaseCamp than it is to go to a single page for a story in
Pivotal Tracker. I like the dashboard view of Pivotal Tracker, but I'd like to
be able to focus on a single thing, and link to a single thing more easily as well.
This is also a complaint I have about GMail.

What makes it hard to link to a Pivotal Tracker story is this:

* There is no page for an individual pivotal tracker story. Instead, links to a pivotal
  tracker story brings me to a project page and selects the story.
* There is no way to get a link without expanding a story's view.
* The link to a story is at the bottom of the expanded view, and is only offered as a
  text box. (I am more used to copying a link, whether on my desktop or on an iOS
  device, than copying the contents of a text box.)

# Viewing Stories

Another thing that has a more direct effect on its usability for me, is that there
isn't a view for displaying a story that's separate from the view for editing it.
The editing controls clutter up the view when I'm just viewing, and I view much more
often than I edit. I think it would be better if the editing took place on the same
page, and if after I clicked an edit button the display view was replaced with an
editing view without a page refresh.

# "Label Actions"

Why have the text "Label Actions" on the label box instead of just "Labels"? The text
fields don't need their labels next to them saying that they're for editing; why do
drop-down boxes need it? I'm also a fan of taking advantage of mental models that come
from other applications, and the label actions page is very much like.

Also, the current design, where when you click on a label it brings up a search with
the title "label:nounverb" (for my nounverb label) doesn't lend itself to being able
to add descriptions to labels later (which could be very useful, as there isn't much
space for label text).

# Conclusion

To sum it up in one sentence, I think Pivotal Tracker's design would be improved by 
making it more resource-oriented and less action-oriented.

I think the front-end development for Pivotal Tracker is awesome, as is its mental 
model for story tracking. The design could be improved by making the data model more
transparent, though. Also, I think the design of urls often finds its way into the
design of the UI.