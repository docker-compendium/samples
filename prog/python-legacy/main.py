import matplotlib
matplotlib.use('Agg')
import numpy as np
from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt
from datetime import datetime
plt.figure(figsize=(10.24, 7.68), dpi=100)
map = Basemap(projection='merc',llcrnrlat=-80,urcrnrlat=80,\
    llcrnrlon=-180,urcrnrlon=180,lat_ts=20,resolution='c')
map.drawcoastlines()
map.drawparallels(np.arange(-90,90,30),labels=[1,0,0,0])
map.drawmapboundary(fill_color='aqua')
map.fillcontinents(color='coral',lake_color='aqua')
date = datetime.utcnow()
CS=map.nightshade(date)
plt.title('Day and night at %s (UTC)' % date.strftime("%Y-%m-%d %H:%M:%S"))
plt.savefig('/src/out/tag_nacht.png')

