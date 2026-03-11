export const CARGO_LOCATIONS = [
  "AT AIRPORT",
  "NOT ARRIVED",
  "WESTPORT",
  "NORTHPORT",
  "SOUTHPORT",
  "PKG OFFICE",
  "SEREMBAN OFFICE",
  "PTP OFFICE",
  "PTP CABIN",
  "PGU CABIN",
  "DELIVERED"
];

export const COMMODITY_TYPES = [
  "SHIP SPARE",
  "PROVISION",
  "GENERAL CARGO"
];

export const VESSEL_TYPES = [
  "CONTAINER VESSEL",
  "BULK CARRIER",
  "TANKER VESSEL",
  "CRUISE VESSEL",
  "RORO VESSEL",
  "NAVY VESSEL",
  "TUG BOARD",
  "BOAT SUPPLY"
];

export const ZB_LIST = [
  "ZB1",
  "ZB2"
];

export const PORT_LOCATIONS = [
  "WESTPOR8",
  "NORTHPORT- B10",
  "SOUTHPORT-B11",
  "WESTPORT LBT- B7X",
  "WESTPORT DRY BULK- B7Y",
  "PULAU KETAM JETTY",
  "KAPAR POWERSTATION-B11",
  "WESTPORT CRIUSE TERMINAL-B7S",
  "PTP-J33",
  "PASIRGUDANG PORT- J15",
  "TANJUNG LANGSAT-J76",
  "TANJUNG BIN- J33",
  "PASIR  PUTIH JETTY",
  "PENGERENG PORT-J15",
  "PENDAS JETTY",
  "PARMESWARA JETTY MELAKA- M14",
  "TANJUNG BRUAS MELAKA-M14",
  "SUNGAI UDANG MELAKA-M15",
  "SUNGAI LINGGI-M23",
  "PORT DICKSON- N11",
  "KUANTAN PORT -C13",
  "KEMAMAN PORT (KSB)- T16",
  "LIKIR BULK TERMINAL LUMUT A22",
  "MARITIME TERMINAL  LUMUT A22",
  "VALI PORT A13",
  "KERTEH",
  "MMHE",
  "BWCT -PENANG P15",
  "BUTTERWORTH",
  "PBCT-PENANG P88",
  "NBCT-PENANG P14",
  "SPCT-PENANG  P20",
  "TOK BALI",
  "KSB  WEST KEMAMAN T15",
  "KPK KEMAMAN T16",
  "KEMAMAN PORT (KSB) T16",
  "LUMUT PORT-A22",
  "SAPANGAR BAY CONTAINER PORT",
  "KOTA KINABALU PORT",
  "SAPANGAR BAY OIL TERMINAL",
  "KUDAT PORT",
  "SANDAKAN PORT",
  "LAHAD DATU PORT",
  "KUNAK PORT",
  "TAWAU PORT",
  "LABUAN PORT",
  "MIRI PORT",
  "SAMALAJU PORT",
  "RAJANG PORT",
  "TANJUNG MANIS PORT",
  "KUCHING PORT",
  "SIBU PORT",
  "SARIKEI PORT",
  "BINTULU PORT"
];

export const cargoOptions = CARGO_LOCATIONS.map(location => ({
  value: location,
  label: location
}));

export const commodityOptions = COMMODITY_TYPES.map(type => ({
  value: type,
  label: type
}));

export const portOptions = PORT_LOCATIONS.map(port => ({
  value: port,
  label: port
}));

export const vesselTypeOptions = VESSEL_TYPES.map(type => ({
  value: type,
  label: type
}));

export const zbOptions = ZB_LIST.map(zb => ({
  value: zb,
  label: zb
}));
