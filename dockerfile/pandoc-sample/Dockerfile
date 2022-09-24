# Dockerfile
FROM ubuntu:20.04
ENV TZ="Europe/Berlin" 
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
    echo $TZ > /etc/timezone && \
    apt-get update -y && \
    apt-get install -y -o Acquire::Retries=10 \
                     --no-install-recommends \
      texlive-latex-recommended \
      texlive-latex-extra \
      texlive-fonts-recommended \
      texlive-lang-german \
      texlive-pstricks \
      texlive-fonts-extra \
      imagemagick \
      unzip \
      python3 \
      ghostscript \
      locales \
      joe \
      vim \
      curl \
      wget \
      ca-certificates \
      less && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# install a specific Pandoc version
RUN curl -L https://github.com/jgm/pandoc/releases/download/2.14/pandoc-2.14-1-amd64.deb \
   -o /tmp/pandoc.deb && \
   dpkg -i /tmp/pandoc.deb && \
   rm /tmp/pandoc.deb

# alternative: install specific Pandoc version for 1/ARM architektur
#RUN curl -L https://github.com/jgm/pandoc/releases/download/2.17.0.1/pandoc-2.17.0.1-1-arm64.deb \
#   -o /tmp/pandoc.deb && \
#   dpkg -i /tmp/pandoc.deb && \
#   rm /tmp/pandoc.deb
   
# install fonts
# (unfortunately, we cannot provide the fonts file)
# ADD myfonts.tgz /usr/local/share/texmf
# RUN texhash 

# /data volume
# connect to your local directory with *.md files
# when executing docker run:
# - docker run -v $(pwd):/data 
# - docker run -v $(pwd):/data:z   (:z option necessary for RHEL, Fedora)
VOLUME  ["/data"]

# start command
ENTRYPOINT ["/bin/bash"]
