
const STORAGE_KEY = 'citrus-kiosk-profiles-v3';
const ACTIVE_PROFILE_KEY = 'citrus-kiosk-active-profile-v3';

const PROFILE_PRESETS = {
  '34428': {
    zipCode: '34428',
    title: 'Citrus County Tides, Weather & Rain Forecast',
    subtitle: 'Crystal River Live Coastal Display',
    countyLabel: 'Crystal River / Citrus County, Florida',
    timePanelTitle: 'Current Local Time',
    overviewTitle: 'At A Glance',
    fishingTitle: 'Fishing Conditions',
    tidesTitle: 'Upcoming Tides',
    tidesTag: 'Next 4',
    windTitle: 'Wind Details',
    windTag: 'Live Marine Snapshot',
    weatherDetailsTitle: 'Weather Details',
    weatherDetailsTag: 'Next 4 Hours',
    adContactCopy: 'For Advertising Opportunities Please Call (352) 302-2882',
    topAdTitle: 'Premium Sponsor Placement',
    topAdBody: 'Promote your restaurant, charter, shop, or local event to customers in real time.',
    bottomAdTitle: 'Video Sponsorship Available',
    bottomAdBody: 'Full-screen sponsor video placements rotate automatically on this kiosk.',
    topAdImage: '',
    bottomAdImage: '',
    videoUrls: ['sponsor.mp4'],
    sponsorIntervalMinutes: 3,
    tideStation: '8727343',
    windStation: '8727520',
    latitude: 28.96080,
    longitude: -82.63421
  },
  '34429': {
    zipCode: '34429',
    title: 'Citrus County Tides, Weather & Rain Forecast',
    subtitle: 'Crystal River Live Coastal Display',
    countyLabel: 'Crystal River / Citrus County, Florida',
    timePanelTitle: 'Current Local Time',
    overviewTitle: 'At A Glance',
    fishingTitle: 'Fishing Conditions',
    tidesTitle: 'Upcoming Tides',
    tidesTag: 'Next 4',
    windTitle: 'Wind Details',
    windTag: 'Live Marine Snapshot',
    weatherDetailsTitle: 'Weather Details',
    weatherDetailsTag: 'Next 4 Hours',
    adContactCopy: 'For Advertising Opportunities Please Call (352) 302-2882',
    topAdTitle: 'Premium Sponsor Placement',
    topAdBody: 'Promote your restaurant, charter, shop, or local event to customers in real time.',
    bottomAdTitle: 'Video Sponsorship Available',
    bottomAdBody: 'Full-screen sponsor video placements rotate automatically on this kiosk.',
    topAdImage: '',
    bottomAdImage: '',
    videoUrls: ['sponsor.mp4'],
    sponsorIntervalMinutes: 3,
    tideStation: '8727343',
    windStation: '8727520',
    latitude: 28.85737,
    longitude: -82.65152
  },
  '34433': {
    zipCode: '34433',
    title: 'Citrus County Tides, Weather & Rain Forecast',
    subtitle: 'Dunnellon Live Coastal Display',
    countyLabel: 'Dunnellon / Citrus County, Florida',
    timePanelTitle: 'Current Local Time',
    overviewTitle: 'At A Glance',
    fishingTitle: 'Fishing Conditions',
    tidesTitle: 'Upcoming Tides',
    tidesTag: 'Next 4',
    windTitle: 'Wind Details',
    windTag: 'Live Marine Snapshot',
    weatherDetailsTitle: 'Weather Details',
    weatherDetailsTag: 'Next 4 Hours',
    adContactCopy: 'For Advertising Opportunities Please Call (352) 302-2882',
    topAdTitle: 'Premium Sponsor Placement',
    topAdBody: 'Promote your restaurant, charter, shop, or local event to customers in real time.',
    bottomAdTitle: 'Video Sponsorship Available',
    bottomAdBody: 'Full-screen sponsor video placements rotate automatically on this kiosk.',
    topAdImage: '',
    bottomAdImage: '',
    videoUrls: ['sponsor.mp4'],
    sponsorIntervalMinutes: 3,
    tideStation: '8727343',
    windStation: '8727520',
    latitude: 28.99600,
    longitude: -82.52383
  },
  '34434': {
    zipCode: '34434',
    title: 'Citrus County Tides, Weather & Rain Forecast',
    subtitle: 'Dunnellon Live Coastal Display',
    countyLabel: 'Dunnellon / Citrus County, Florida',
    timePanelTitle: 'Current Local Time',
    overviewTitle: 'At A Glance',
    fishingTitle: 'Fishing Conditions',
    tidesTitle: 'Upcoming Tides',
    tidesTag: 'Next 4',
    windTitle: 'Wind Details',
    windTag: 'Live Marine Snapshot',
    weatherDetailsTitle: 'Weather Details',
    weatherDetailsTag: 'Next 4 Hours',
    adContactCopy: 'For Advertising Opportunities Please Call (352) 302-2882',
    topAdTitle: 'Premium Sponsor Placement',
    topAdBody: 'Promote your restaurant, charter, shop, or local event to customers in real time.',
    bottomAdTitle: 'Video Sponsorship Available',
    bottomAdBody: 'Full-screen sponsor video placements rotate automatically on this kiosk.',
    topAdImage: '',
    bottomAdImage: '',
    videoUrls: ['sponsor.mp4'],
    sponsorIntervalMinutes: 3,
    tideStation: '8727343',
    windStation: '8727520',
    latitude: 28.99535,
    longitude: -82.43775
  },
  '34436': {
    zipCode: '34436',
    title: 'Citrus County Tides, Weather & Rain Forecast',
    subtitle: 'Floral City Live Coastal Display',
    countyLabel: 'Floral City / Citrus County, Florida',
    timePanelTitle: 'Current Local Time',
    overviewTitle: 'At A Glance',
    fishingTitle: 'Fishing Conditions',
    tidesTitle: 'Upcoming Tides',
    tidesTag: 'Next 4',
    windTitle: 'Wind Details',
    windTag: 'Live Marine Snapshot',
    weatherDetailsTitle: 'Weather Details',
    weatherDetailsTag: 'Next 4 Hours',
    adContactCopy: 'For Advertising Opportunities Please Call (352) 302-2882',
    topAdTitle: 'Premium Sponsor Placement',
    topAdBody: 'Promote your restaurant, charter, shop, or local event to customers in real time.',
    bottomAdTitle: 'Video Sponsorship Available',
    bottomAdBody: 'Full-screen sponsor video placements rotate automatically on this kiosk.',
    topAdImage: '',
    bottomAdImage: '',
    videoUrls: ['sponsor.mp4'],
    sponsorIntervalMinutes: 3,
    tideStation: '8727293',
    windStation: '8727520',
    latitude: 28.72672,
    longitude: -82.29134
  },
  '34442': {
    zipCode: '34442',
    title: 'Citrus County Tides, Weather & Rain Forecast',
    subtitle: 'Hernando Live Coastal Display',
    countyLabel: 'Hernando / Citrus County, Florida',
    timePanelTitle: 'Current Local Time',
    overviewTitle: 'At A Glance',
    fishingTitle: 'Fishing Conditions',
    tidesTitle: 'Upcoming Tides',
    tidesTag: 'Next 4',
    windTitle: 'Wind Details',
    windTag: 'Live Marine Snapshot',
    weatherDetailsTitle: 'Weather Details',
    weatherDetailsTag: 'Next 4 Hours',
    adContactCopy: 'For Advertising Opportunities Please Call (352) 302-2882',
    topAdTitle: 'Premium Sponsor Placement',
    topAdBody: 'Promote your restaurant, charter, shop, or local event to customers in real time.',
    bottomAdTitle: 'Video Sponsorship Available',
    bottomAdBody: 'Full-screen sponsor video placements rotate automatically on this kiosk.',
    topAdImage: '',
    bottomAdImage: '',
    videoUrls: ['sponsor.mp4'],
    sponsorIntervalMinutes: 3,
    tideStation: '8727343',
    windStation: '8727520',
    latitude: 28.93084,
    longitude: -82.39122
  },
  '34445': {
    zipCode: '34445',
    title: 'Citrus County Tides, Weather & Rain Forecast',
    subtitle: 'Holder Live Coastal Display',
    countyLabel: 'Holder / Citrus County, Florida',
    timePanelTitle: 'Current Local Time',
    overviewTitle: 'At A Glance',
    fishingTitle: 'Fishing Conditions',
    tidesTitle: 'Upcoming Tides',
    tidesTag: 'Next 4',
    windTitle: 'Wind Details',
    windTag: 'Live Marine Snapshot',
    weatherDetailsTitle: 'Weather Details',
    weatherDetailsTag: 'Next 4 Hours',
    adContactCopy: 'For Advertising Opportunities Please Call (352) 302-2882',
    topAdTitle: 'Premium Sponsor Placement',
    topAdBody: 'Promote your restaurant, charter, shop, or local event to customers in real time.',
    bottomAdTitle: 'Video Sponsorship Available',
    bottomAdBody: 'Full-screen sponsor video placements rotate automatically on this kiosk.',
    topAdImage: '',
    bottomAdImage: '',
    videoUrls: ['sponsor.mp4'],
    sponsorIntervalMinutes: 3,
    tideStation: '8727343',
    windStation: '8727520',
    latitude: 28.97143,
    longitude: -82.42414
  },
  '34446': {
    zipCode: '34446',
    title: 'Citrus County Tides, Weather & Rain Forecast',
    subtitle: 'Homosassa Live Coastal Display',
    countyLabel: 'Homosassa / Citrus County, Florida',
    timePanelTitle: 'Current Local Time',
    overviewTitle: 'At A Glance',
    fishingTitle: 'Fishing Conditions',
    tidesTitle: 'Upcoming Tides',
    tidesTag: 'Next 4',
    windTitle: 'Wind Details',
    windTag: 'Live Marine Snapshot',
    weatherDetailsTitle: 'Weather Details',
    weatherDetailsTag: 'Next 4 Hours',
    adContactCopy: 'For Advertising Opportunities Please Call (352) 302-2882',
    topAdTitle: 'Premium Sponsor Placement',
    topAdBody: 'Promote your restaurant, charter, shop, or local event to customers in real time.',
    bottomAdTitle: 'Video Sponsorship Available',
    bottomAdBody: 'Full-screen sponsor video placements rotate automatically on this kiosk.',
    topAdImage: '',
    bottomAdImage: '',
    videoUrls: ['sponsor.mp4'],
    sponsorIntervalMinutes: 3,
    tideStation: '8727293',
    windStation: '8727520',
    latitude: 28.74904,
    longitude: -82.52344
  },
  '34448': {
    zipCode: '34448',
    title: 'Citrus County Tides, Weather & Rain Forecast',
    subtitle: 'Homosassa Live Coastal Display',
    countyLabel: 'Homosassa / Citrus County, Florida',
    timePanelTitle: 'Current Local Time',
    overviewTitle: 'At A Glance',
    fishingTitle: 'Fishing Conditions',
    tidesTitle: 'Upcoming Tides',
    tidesTag: 'Next 4',
    windTitle: 'Wind Details',
    windTag: 'Live Marine Snapshot',
    weatherDetailsTitle: 'Weather Details',
    weatherDetailsTag: 'Next 4 Hours',
    adContactCopy: 'For Advertising Opportunities Please Call (352) 302-2882',
    topAdTitle: 'Premium Sponsor Placement',
    topAdBody: 'Promote your restaurant, charter, shop, or local event to customers in real time.',
    bottomAdTitle: 'Video Sponsorship Available',
    bottomAdBody: 'Full-screen sponsor video placements rotate automatically on this kiosk.',
    topAdImage: '',
    bottomAdImage: '',
    videoUrls: ['sponsor.mp4'],
    sponsorIntervalMinutes: 3,
    tideStation: '8727274',
    windStation: '8727520',
    latitude: 28.77009,
    longitude: -82.61201
  },
  '34450': {
    zipCode: '34450',
    title: 'Citrus County Tides, Weather & Rain Forecast',
    subtitle: 'Inverness Live Coastal Display',
    countyLabel: 'Inverness / Citrus County, Florida',
    timePanelTitle: 'Current Local Time',
    overviewTitle: 'At A Glance',
    fishingTitle: 'Fishing Conditions',
    tidesTitle: 'Upcoming Tides',
    tidesTag: 'Next 4',
    windTitle: 'Wind Details',
    windTag: 'Live Marine Snapshot',
    weatherDetailsTitle: 'Weather Details',
    weatherDetailsTag: 'Next 4 Hours',
    adContactCopy: 'For Advertising Opportunities Please Call (352) 302-2882',
    topAdTitle: 'Premium Sponsor Placement',
    topAdBody: 'Promote your restaurant, charter, shop, or local event to customers in real time.',
    bottomAdTitle: 'Video Sponsorship Available',
    bottomAdBody: 'Full-screen sponsor video placements rotate automatically on this kiosk.',
    topAdImage: '',
    bottomAdImage: '',
    videoUrls: ['sponsor.mp4'],
    sponsorIntervalMinutes: 3,
    tideStation: '8727293',
    windStation: '8727520',
    latitude: 28.82699,
    longitude: -82.25767
  },
  '34452': {
    zipCode: '34452',
    title: 'Citrus County Tides, Weather & Rain Forecast',
    subtitle: 'Inverness Live Coastal Display',
    countyLabel: 'Inverness / Citrus County, Florida',
    timePanelTitle: 'Current Local Time',
    overviewTitle: 'At A Glance',
    fishingTitle: 'Fishing Conditions',
    tidesTitle: 'Upcoming Tides',
    tidesTag: 'Next 4',
    windTitle: 'Wind Details',
    windTag: 'Live Marine Snapshot',
    weatherDetailsTitle: 'Weather Details',
    weatherDetailsTag: 'Next 4 Hours',
    adContactCopy: 'For Advertising Opportunities Please Call (352) 302-2882',
    topAdTitle: 'Premium Sponsor Placement',
    topAdBody: 'Promote your restaurant, charter, shop, or local event to customers in real time.',
    bottomAdTitle: 'Video Sponsorship Available',
    bottomAdBody: 'Full-screen sponsor video placements rotate automatically on this kiosk.',
    topAdImage: '',
    bottomAdImage: '',
    videoUrls: ['sponsor.mp4'],
    sponsorIntervalMinutes: 3,
    tideStation: '8727293',
    windStation: '8727520',
    latitude: 28.76231,
    longitude: -82.37986
  },
  '34453': {
    zipCode: '34453',
    title: 'Citrus County Tides, Weather & Rain Forecast',
    subtitle: 'Inverness Live Coastal Display',
    countyLabel: 'Inverness / Citrus County, Florida',
    timePanelTitle: 'Current Local Time',
    overviewTitle: 'At A Glance',
    fishingTitle: 'Fishing Conditions',
    tidesTitle: 'Upcoming Tides',
    tidesTag: 'Next 4',
    windTitle: 'Wind Details',
    windTag: 'Live Marine Snapshot',
    weatherDetailsTitle: 'Weather Details',
    weatherDetailsTag: 'Next 4 Hours',
    adContactCopy: 'For Advertising Opportunities Please Call (352) 302-2882',
    topAdTitle: 'Premium Sponsor Placement',
    topAdBody: 'Promote your restaurant, charter, shop, or local event to customers in real time.',
    bottomAdTitle: 'Video Sponsorship Available',
    bottomAdBody: 'Full-screen sponsor video placements rotate automatically on this kiosk.',
    topAdImage: '',
    bottomAdImage: '',
    videoUrls: ['sponsor.mp4'],
    sponsorIntervalMinutes: 3,
    tideStation: '8727343',
    windStation: '8727520',
    latitude: 28.89276,
    longitude: -82.33663
  },
  '34461': {
    zipCode: '34461',
    title: 'Citrus County Tides, Weather & Rain Forecast',
    subtitle: 'Lecanto Live Coastal Display',
    countyLabel: 'Lecanto / Citrus County, Florida',
    timePanelTitle: 'Current Local Time',
    overviewTitle: 'At A Glance',
    fishingTitle: 'Fishing Conditions',
    tidesTitle: 'Upcoming Tides',
    tidesTag: 'Next 4',
    windTitle: 'Wind Details',
    windTag: 'Live Marine Snapshot',
    weatherDetailsTitle: 'Weather Details',
    weatherDetailsTag: 'Next 4 Hours',
    adContactCopy: 'For Advertising Opportunities Please Call (352) 302-2882',
    topAdTitle: 'Premium Sponsor Placement',
    topAdBody: 'Promote your restaurant, charter, shop, or local event to customers in real time.',
    bottomAdTitle: 'Video Sponsorship Available',
    bottomAdBody: 'Full-screen sponsor video placements rotate automatically on this kiosk.',
    topAdImage: '',
    bottomAdImage: '',
    videoUrls: ['sponsor.mp4'],
    sponsorIntervalMinutes: 3,
    tideStation: '8727293',
    windStation: '8727520',
    latitude: 28.81544,
    longitude: -82.48029
  },
  '34465': {
    zipCode: '34465',
    title: 'Citrus County Tides, Weather & Rain Forecast',
    subtitle: 'Beverly Hills Live Coastal Display',
    countyLabel: 'Beverly Hills / Citrus County, Florida',
    timePanelTitle: 'Current Local Time',
    overviewTitle: 'At A Glance',
    fishingTitle: 'Fishing Conditions',
    tidesTitle: 'Upcoming Tides',
    tidesTag: 'Next 4',
    windTitle: 'Wind Details',
    windTag: 'Live Marine Snapshot',
    weatherDetailsTitle: 'Weather Details',
    weatherDetailsTag: 'Next 4 Hours',
    adContactCopy: 'For Advertising Opportunities Please Call (352) 302-2882',
    topAdTitle: 'Premium Sponsor Placement',
    topAdBody: 'Promote your restaurant, charter, shop, or local event to customers in real time.',
    bottomAdTitle: 'Video Sponsorship Available',
    bottomAdBody: 'Full-screen sponsor video placements rotate automatically on this kiosk.',
    topAdImage: '',
    bottomAdImage: '',
    videoUrls: ['sponsor.mp4'],
    sponsorIntervalMinutes: 3,
    tideStation: '8727343',
    windStation: '8727520',
    latitude: 28.92869,
    longitude: -82.49092
  },
  '34487': {
    zipCode: '34487',
    title: 'Citrus County Tides, Weather & Rain Forecast',
    subtitle: 'Homosassa Live Coastal Display',
    countyLabel: 'Homosassa / Citrus County, Florida',
    timePanelTitle: 'Current Local Time',
    overviewTitle: 'At A Glance',
    fishingTitle: 'Fishing Conditions',
    tidesTitle: 'Upcoming Tides',
    tidesTag: 'Next 4',
    windTitle: 'Wind Details',
    windTag: 'Live Marine Snapshot',
    weatherDetailsTitle: 'Weather Details',
    weatherDetailsTag: 'Next 4 Hours',
    adContactCopy: 'For Advertising Opportunities Please Call (352) 302-2882',
    topAdTitle: 'Premium Sponsor Placement',
    topAdBody: 'Promote your restaurant, charter, shop, or local event to customers in real time.',
    bottomAdTitle: 'Video Sponsorship Available',
    bottomAdBody: 'Full-screen sponsor video placements rotate automatically on this kiosk.',
    topAdImage: '',
    bottomAdImage: '',
    videoUrls: ['sponsor.mp4'],
    sponsorIntervalMinutes: 3,
    tideStation: '8727293',
    windStation: '8727520',
    latitude: 28.78148,
    longitude: -82.61272
  }
};

const DEFAULT_PROFILE = PROFILE_PRESETS['34428'];

function toTitleCase(str = '') {
  return str.replace(/\w\S*/g, (txt) =>
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}


function readProfiles() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return { ...PROFILE_PRESETS, ...parsed };
  } catch {
    return { ...PROFILE_PRESETS };
  }
}

function writeProfiles(profiles) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
}

function getProfileIdFromUrl() {
  const url = new URL(window.location.href);
  return url.searchParams.get('zip') || url.searchParams.get('code') || localStorage.getItem(ACTIVE_PROFILE_KEY) || DEFAULT_PROFILE.zipCode;
}

function setActiveProfile(profileId) {
  localStorage.setItem(ACTIVE_PROFILE_KEY, profileId);
}

function getConfig(profileId = getProfileIdFromUrl()) {
  const profiles = readProfiles();
  const cfg = profiles[profileId] || DEFAULT_PROFILE;
  return { ...DEFAULT_PROFILE, ...cfg, zipCode: profileId };
}

function saveConfig(config, profileId = config.zipCode || getProfileIdFromUrl()) {
  const profiles = readProfiles();
  profiles[profileId] = { ...DEFAULT_PROFILE, ...config, zipCode: profileId };
  writeProfiles(profiles);
  setActiveProfile(profileId);
}

function deleteProfile(profileId) {
  const profiles = readProfiles();
  delete profiles[profileId];
  writeProfiles(profiles);
  if (localStorage.getItem(ACTIVE_PROFILE_KEY) === profileId) {
    setActiveProfile(DEFAULT_PROFILE.zipCode);
  }
}

function normalizeDateLike(dateLike) {
  if (!dateLike) return null;
  const d = typeof dateLike === 'string'
    ? new Date(dateLike.includes('T') ? dateLike : dateLike.replace(' ', 'T'))
    : dateLike;
  return Number.isNaN(+d) ? null : d;
}

function formatClock(dateLike, includeSeconds = false) {
  const d = normalizeDateLike(dateLike);
  if (!d) return '—';
  return d.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    second: includeSeconds ? '2-digit' : undefined
  });
}

function formatDateLong(date = new Date()) {
  return date.toLocaleDateString([], {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

function formatDateTime(date = new Date()) {
  return date.toLocaleString([], {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
}

function formatMonthDayTime(dateLike) {
  const d = normalizeDateLike(dateLike);
  if (!d) return '—';
  return d.toLocaleString([], {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
}

function degToRad(deg) { return deg * Math.PI / 180; }
function radToDeg(rad) { return rad * 180 / Math.PI; }

function dayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 1);
  return Math.floor((date - start) / 86400000) + 1;
}

function calculateSunEvent(date, lat, lng, isSunrise) {
  const N = dayOfYear(date);
  const lngHour = lng / 15;
  const t = isSunrise ? N + ((6 - lngHour) / 24) : N + ((18 - lngHour) / 24);
  let M = 0.9856 * t - 3.289;
  let L = M + 1.916 * Math.sin(degToRad(M)) + 0.02 * Math.sin(degToRad(2 * M)) + 282.634;
  L = (L + 360) % 360;
  let RA = radToDeg(Math.atan(0.91764 * Math.tan(degToRad(L))));
  RA = (RA + 360) % 360;
  const Lquadrant = Math.floor(L / 90) * 90;
  const RAquadrant = Math.floor(RA / 90) * 90;
  RA += (Lquadrant - RAquadrant);
  RA /= 15;
  const sinDec = 0.39782 * Math.sin(degToRad(L));
  const cosDec = Math.cos(Math.asin(sinDec));
  const cosH = (Math.cos(degToRad(90.833)) - sinDec * Math.sin(degToRad(lat))) / (cosDec * Math.cos(degToRad(lat)));
  if (cosH > 1 || cosH < -1) return null;
  let H = isSunrise ? 360 - radToDeg(Math.acos(cosH)) : radToDeg(Math.acos(cosH));
  H /= 15;
  let T = H + RA - (0.06571 * t) - 6.622;
  let UT = (T - lngHour) % 24;
  if (UT < 0) UT += 24;
  const hr = Math.floor(UT);
  const min = Math.round((UT - hr) * 60);
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), hr, min));
}

function calculateSunTimes(date, lat, lng) {
  return {
    sunrise: calculateSunEvent(date, lat, lng, true),
    sunset: calculateSunEvent(date, lat, lng, false),
  };
}

function tideApiUrl(station) {
  const d = new Date();
  const begin = d.toISOString().slice(0,10).replace(/-/g,'');
  return `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=${begin}&range=36&station=${station}&product=predictions&datum=MLLW&time_zone=lst_ldt&units=english&interval=hilo&format=json&application=CitrusKiosk`;
}

function windApiUrl(station) {
  return `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=latest&station=${station}&product=wind&time_zone=lst_ldt&units=english&format=json&application=CitrusKiosk`;
}

function pointsApiUrl(lat, lng) {
  return `https://api.weather.gov/points/${lat},${lng}`;
}

async function safeFetchJson(url) {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.json();
}

function sampleTides() {
  const now = new Date();
  const base = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return [
    { t: new Date(base.getTime() + 2 * 3600e3).toISOString(), type: 'L', v: '0.44' },
    { t: new Date(base.getTime() + 8 * 3600e3).toISOString(), type: 'H', v: '1.95' },
    { t: new Date(base.getTime() + 14 * 3600e3).toISOString(), type: 'L', v: '0.39' },
    { t: new Date(base.getTime() + 20 * 3600e3).toISOString(), type: 'H', v: '2.07' },
    { t: new Date(base.getTime() + 26 * 3600e3).toISOString(), type: 'L', v: '0.41' },
  ];
}

function sampleWind() {
  return { s: '8', d: '124', g: '11', t: new Date().toISOString() };
}

function sampleRain() {
  return {
    now: 15,
    summary: 'Low chance of rain in the next several hours.'
  };
}

function currentTideSummary(predictions) {
  if (!Array.isArray(predictions) || predictions.length < 2) {
    return {
      label: 'Current Tide',
      time: 'Current level unavailable',
      height: '—',
      minutesAway: 0,
      currentHeight: null,
      trend: 'Unknown',
      nextEventLabel: 'Next change',
      nextEventTime: '—'
    };
  }

  const now = new Date();
  const enriched = predictions
    .map(p => ({ ...p, date: normalizeDateLike(p.t), value: Number(p.v) }))
    .filter(p => p.date && Number.isFinite(p.value))
    .sort((a, b) => a.date - b.date);

  if (enriched.length < 2) {
    return {
      label: 'Current Tide',
      time: 'Current level unavailable',
      height: '—',
      minutesAway: 0,
      currentHeight: null,
      trend: 'Unknown',
      nextEventLabel: 'Next change',
      nextEventTime: '—'
    };
  }

  let prev = enriched[0];
  let next = enriched[enriched.length - 1];

  for (let i = 0; i < enriched.length; i++) {
    if (enriched[i].date <= now) prev = enriched[i];
    if (enriched[i].date > now) {
      next = enriched[i];
      break;
    }
  }

  const totalMs = Math.max(1, next.date - prev.date);
  const elapsedMs = Math.min(totalMs, Math.max(0, now - prev.date));
  const ratio = elapsedMs / totalMs;
  const currentHeight = prev.value + (next.value - prev.value) * ratio;

  const rising = next.type === 'H';
  const nextEventLabel = next.type === 'H' ? 'Next High' : 'Next Low';
  const minutesAway = Math.max(0, Math.round((next.date - now) / 60000));

  return {
    label: rising ? 'Rising Tide' : 'Falling Tide',
    time: `${nextEventLabel} ${formatClock(next.date)}`,
    height: `${currentHeight.toFixed(2)} ft`,
    minutesAway,
    currentHeight,
    trend: rising ? 'Rising' : 'Falling',
    nextEventLabel,
    nextEventTime: formatClock(next.date)
  };
}

function nextTideSummary(predictions) {
  return currentTideSummary(predictions);
}

function pickRainSummary(periods = []) {
  const first = periods.slice(0, 6);
  const pops = first.map(p => Number(p.probabilityOfPrecipitation?.value ?? 0));
  const now = pops[0] ?? 0;
  const rainy = first.find(p => (p.probabilityOfPrecipitation?.value ?? 0) >= 30);
  const summary = rainy ? rainy.shortForecast : 'Low chance of rain in the next several hours.';
  return { now, summary };
}

function weatherIconFromForecast(text = '') {
  const t = String(text).toLowerCase();
  if (t.includes('thunder')) return '⛈️';
  if (t.includes('rain') || t.includes('showers') || t.includes('drizzle')) return '🌧️';
  if (t.includes('cloud') || t.includes('overcast') || t.includes('mostly cloudy') || t.includes('partly cloudy')) return '☁️';
  return '☀️';
}

function cloudCoverFromForecast(text = '') {
  const t = String(text).toLowerCase();
  if (t.includes('overcast')) return '100%';
  if (t.includes('mostly cloudy')) return '75%';
  if (t.includes('partly cloudy') || t.includes('partly sunny')) return '50%';
  if (t.includes('mostly sunny')) return '25%';
  if (t.includes('sunny') || t.includes('clear')) return '10%';
  if (t.includes('cloud')) return '60%';
  return '—';
}

function formatShortHour(dateLike) {
  const d = normalizeDateLike(dateLike);
  if (!d) return '—';
  return d.toLocaleTimeString([], { hour: 'numeric' });
}

function sampleHourlyWeather() {
  const now = new Date();
  return Array.from({ length: 3 }, (_, i) => {
    const d = new Date(now.getTime() + i * 3600e3);
    const forecasts = ['Sunny', 'Partly Cloudy', 'Slight Chance Rain Showers'];
    const temps = [78, 80, 79];
    const uvs = [7, 8, 5];
    return {
      startTime: d.toISOString(),
      temperature: temps[i] ?? 78,
      shortForecast: forecasts[i] ?? 'Sunny',
      uvIndex: { value: uvs[i] ?? 6 }
    };
  });
}

function computeFishingScore({ windSpeed = 0, rainChance = 0, minutesToTide = 0 }) {
  let score = 10;
  score -= Math.min(windSpeed / 3, 3.5);
  score -= Math.min(rainChance / 20, 3);
  if (minutesToTide <= 90) score += 1.6;
  else if (minutesToTide <= 180) score += 1.0;
  else if (minutesToTide <= 300) score += 0.4;
  score = Math.max(1, Math.min(10, score));
  return Math.round(score * 10) / 10;
}

function fishingMessage(score) {
  if (score >= 8.5) return 'Excellent fishing window approaching';
  if (score >= 7) return 'Very good conditions for getting on the water';
  if (score >= 5.5) return 'Fair conditions with some watch-outs';
  if (score >= 4) return 'Mixed conditions today';
  return 'Tougher conditions right now';
}

function scoreClass(score) {
  if (score >= 8) return 'score-good';
  if (score >= 5.5) return 'score-mid';
  return 'score-bad';
}
