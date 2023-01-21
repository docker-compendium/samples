require 'rss'
require 'time'

feed = RSS::Parser.parse("https://www.heise.de/newsticker/"\
       "heise-atom.xml")
feed.items.each do |item|
    d = Time.parse(item.updated.content.to_s)
    puts "* [#{d.strftime('%Y-%m-%d %H:%M:%S')}]:"\
    "#{item.title.content}"
end
