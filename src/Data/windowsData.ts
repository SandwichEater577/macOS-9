export type WindowState = {
  id: string;
  title: string;
  isOpen: boolean;
  isShaded: boolean;
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  lastHeight: number;
  content: any;
};

export const initialWindows: Record<string, WindowState> = {
  about: {
    id: "about",
    title: "About This Computer",
    isOpen: false,
    isShaded: false,
    x: 80,
    y: 80,
    z: 10,
    width: 530,
    height: 320,
    lastHeight: 320,
    content: {},
  },
  profiler: {
    id: "profiler",
    title: "Apple System Profiler",
    isOpen: false,
    isShaded: false,
    x: 100,
    y: 100,
    z: 10,
    width: 750,
    height: 550,
    lastHeight: 550,
    content: {
      tabs: [
        "System Profile",
        "Devices and Volumes",
        "Control Panels",
        "Extensions",
        "Applications",
        "System Folders",
      ],
      systemProfile: [
        {
          title: "Software overview",
          type: "box",
          boxTitle: "Mac OS overview",
          rows: [
            [
              { label: "Finder:", value: "9.0" },
              { label: "QuickTime:", value: "4.1" },
            ],
            [
              { label: "System:", value: "9.0.4 US" },
              { label: "File sharing:", value: "is off" },
            ],
            [
              { label: "Active enabler:", value: "PowerPC Enabler 9.0.4" },
              { label: "Multiple Users:", value: "1.1" },
            ],
          ],
          note: "Note: No startup disk was selected.",
        },
        {
          title: "Memory overview",
          type: "list",
          rows: [
            { label: "Disk cache:", value: "7.96 MB" },
            { label: "Virtual memory:", value: "is off" },
            { label: "Built-in memory:", value: "256 MB", toggle: "right" },
            { label: "External L2 cache:", value: "256 MB" },
          ],
        },
        {
          title: "Hardware overview",
          type: "grid",
          rows: [
            [
              { label: "Machine ID:", value: "67" },
              { label: "Processor info:", value: "PowerPC G4" },
            ],
            [
              { label: "Model name:", value: "Power Macintosh 9500 series" },
              { label: "Machine speed:", value: "100 MHz" },
            ],
            [
              {
                label: "Keyboard type:",
                value: "Apple Extended Keyboard (ISO)",
              },
              { label: "", value: "" },
            ],
          ],
        },
        {
          title: "Network overview",
          type: "network",
          rows: [
            {
              type: "grid",
              rows: [
                [
                  { label: "Ethernet built-in", value: "" },
                  { label: "Link:", value: "n/a" },
                  { label: "Speed:", value: "n/a" },
                ],
                [
                  { label: "LocalTalk (printer) built-in", value: "" },
                  { label: "", value: "n/a" },
                  { label: "", value: "n/a" },
                ],
              ],
            },
            {
              type: "row-list",
              title: "Open Transport",
              header: [
                { label: "Installed:", value: "Yes" },
                { label: "Active:", value: "Yes" },
                { label: "Version:", value: "2.6.1" },
              ],
            },
            {
              type: "row-list",
              title: "AppleTalk",
              toggle: "down",
              header: [
                { label: "Installed:", value: "Yes" },
                { label: "Active:", value: "Yes" },
                { label: "Version:", value: "60" },
              ],
              rows: [
                { label: "File sharing:", value: "is off" },
                { label: "Default AppleTalk zone:", value: "Not available" },
                {
                  label: "Active network port(s):",
                  value: "Ethernet built-in\nLocalTalk (printer) built-in",
                },
                {
                  label: "This network:",
                  value: "0",
                  extra: {
                    label: "Hardware Address:",
                    value: "B2.1D.C5.1F.C3.08",
                  },
                },
                {
                  label: "This node:",
                  value: "1",
                  extra: { label: "Router:", value: "<not available>" },
                },
              ],
            },
            {
              type: "row-list",
              title: "TCP/IP",
              toggle: "down",
              header: [
                { label: "Installed:", value: "Yes" },
                { label: "Active:", value: "Yes" },
                { label: "Version:", value: "2.6.1" },
              ],
              rows: [
                { label: "Personal Web Sharing:", value: "is off" },
                { label: "Multihoming:", value: "is off" },
                {
                  label: "Netmask:",
                  value: "255.255.0.0",
                  extra: {
                    label: "Default gateway address:",
                    value: "169.254.150.53",
                  },
                },
                {
                  label: "IP address:",
                  value: "169.254.150.53",
                  extra: { label: "Domain:", value: "" },
                },
                {
                  label: "",
                  value: "",
                  extra: {
                    label: "Name server address:",
                    value: "239.255.255.251",
                  },
                },
              ],
            },
          ],
        },
        {
          title: "Printer overview",
          type: "note",
          toggle: "right",
          note: "Note: No printer has been chosen.",
        },
        {
          title: "Production information",
          type: "list",
          rows: [
            { label: "ROM revision:", value: "$77D.44B5" },
            { label: "Serial number:", value: "Not applicable" },
            { label: "Software bundle:", value: "Not applicable" },
            { label: "Sales order number:", value: "Not applicable" },
          ],
        },
      ],
    },
  },
};
