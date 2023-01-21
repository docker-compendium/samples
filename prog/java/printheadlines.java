// Datei: prog/java/printheadlines.java
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;

public class printheadlines {

  private static String url = "https://heise.de/newsticker/";
  public static void main(String[] args) throws IOException {
    System.out.println("Fetching "+ url);

    Document doc = Jsoup.connect(url).get();
    Elements news = doc.select("article.a-article-teaser");

    System.out.println("\nNews: "+ news.size());
    for (Element item : news) {
      System.out.println("* "+ item.text());
    }
  }
}

