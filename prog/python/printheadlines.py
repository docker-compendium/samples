#!/usr/bin/env python3

import feedparser
import time

feed = feedparser.parse("https://www.heise.de/newsticker/heise-atom.xml")

[ print("* [%s]: %s" %
    (time.strftime("%Y-%m-%d %H:%M:%S", entry.published_parsed),
     entry.title))
    for entry in feed.entries ]
