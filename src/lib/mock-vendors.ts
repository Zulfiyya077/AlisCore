/**
 * Representative vendor / network ecosystem brands (mock / portfolio positioning).
 * Replace logo URLs with your own assets in /public if you prefer self-hosted marks.
 */
export interface MockVendorBrand {
  name: string;
  logoSrc: string;
}

export const MOCK_VENDOR_BRANDS: MockVendorBrand[] = [
  {
    name: 'Fortinet',
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Fortinet_logo.svg',
  },
  {
    name: 'Cisco',
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg',
  },
  {
    name: 'Aruba',
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Aruba_Networks_logo.svg',
  },
  {
    name: 'HP',
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/43/HP_logo_2008.svg',
  },
  {
    name: 'TP-Link',
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/74/TP-Link_logo.svg',
  },
  {
    name: 'Juniper',
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Juniper_Networks_logo.svg',
  },
  {
    name: 'Huawei',
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Huawei_Standard_logo.svg',
  },
];
