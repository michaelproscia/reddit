function DarkMode() {
  return (
    <div className="flex">
      <svg
        className="h-10"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m0 0h24v24h-24z" fill="#fff" opacity="0" />
        <path
          d="m12.3 22h-.1a10.31 10.31 0 0 1 -7.34-3.15 10.46 10.46 0 0 1 -.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29 10.16 10.16 0 0 1 -2.34 3.63 10.28 10.28 0 0 1 -7.3 3z"
          fill="#fff"
        />
      </svg>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m0 0h24v24h-24z"
          fill="#fff"
          opacity="0"
          transform="matrix(-1 0 0 -1 24 24)"
        />
        <g fill="#231f20">
          <path d="m12 6a1 1 0 0 0 1-1v-2a1 1 0 0 0 -2 0v2a1 1 0 0 0 1 1z" />
          <path d="m21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z" />
          <path d="m6 12a1 1 0 0 0 -1-1h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z" />
          <path d="m6.22 5a1 1 0 0 0 -1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z" />
          <path d="m17 8.14a1 1 0 0 0 .69-.28l1.44-1.39a1 1 0 0 0 -1.35-1.47l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z" />
          <path d="m12 18a1 1 0 0 0 -1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0 -1-1z" />
          <path d="m17.73 16.14a1 1 0 0 0 -1.39 1.44l1.44 1.42a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z" />
          <path d="m6.27 16.14-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0 -1.39-1.44z" />
          <path d="m12 8a4 4 0 1 0 4 4 4 4 0 0 0 -4-4z" />
        </g>
      </svg>
    </div>
  );
}
export default DarkMode;
