const botSvg = `
<svg
class="avatar"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
version="1.1"
x="0px"
y="0px"
viewBox="0 0 64 64"
style="enable-background: new 0 0 64 64"
xml:space="preserve"
>
<g>
  <path
    d="M52,25h-2c0-4.411-3.589-8-8-8h-9v-2.142c1.72-0.447,3-2,3-3.858c0-2.206-1.794-4-4-4s-4,1.794-4,4   c0,1.858,1.28,3.411,3,3.858V17h-9c-4.411,0-8,3.589-8,8h-2c-2.757,0-5,2.243-5,5v2c0,2.757,2.243,5,5,5h2c0,4.411,3.589,8,8,8h20   c4.411,0,8-3.589,8-8h2c2.757,0,5-2.243,5-5v-2C57,27.243,54.757,25,52,25z M30,11c0-1.103,0.897-2,2-2s2,0.897,2,2s-0.897,2-2,2   S30,12.103,30,11z M12,35c-1.654,0-3-1.346-3-3v-2c0-1.654,1.346-3,3-3h2v8H12z M48,37c0,3.309-2.691,6-6,6H22   c-3.309,0-6-2.691-6-6v-1V26v-1c0-3.309,2.691-6,6-6h20c3.309,0,6,2.691,6,6v1v10V37z M55,32c0,1.654-1.346,3-3,3h-2v-8h2   c1.654,0,3,1.346,3,3V32z"
  />
  <path
    d="M40,22H24c-3.309,0-6,2.691-6,6v7c0,3.309,2.691,6,6,6h16c3.309,0,6-2.691,6-6v-7C46,24.691,43.309,22,40,22z M44,35   c0,2.206-1.794,4-4,4H24c-2.206,0-4-1.794-4-4v-7c0-2.206,1.794-4,4-4h16c2.206,0,4,1.794,4,4V35z"
  />
  <path
    d="M42,57c0.552,0,1-0.448,1-1v-4c0-3.309-2.691-6-6-6H27c-3.309,0-6,2.691-6,6v4c0,0.552,0.448,1,1,1s1-0.448,1-1v-4   c0-2.206,1.794-4,4-4h10c2.206,0,4,1.794,4,4v4C41,56.552,41.448,57,42,57z"
  />
  <path
    d="M29,29c0-1.654-1.346-3-3-3s-3,1.346-3,3s1.346,3,3,3S29,30.654,29,29z M26,30c-0.551,0-1-0.449-1-1s0.449-1,1-1   s1,0.449,1,1S26.551,30,26,30z"
  />
  <path
    d="M38,26c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S39.654,26,38,26z M38,30c-0.551,0-1-0.449-1-1s0.449-1,1-1   s1,0.449,1,1S38.551,30,38,30z"
  />
  <path
    d="M35,33c-0.552,0-1,0.448-1,1c0,1.103-0.897,2-2,2s-2-0.897-2-2c0-0.552-0.448-1-1-1s-1,0.448-1,1c0,2.206,1.794,4,4,4   s4-1.794,4-4C36,33.448,35.552,33,35,33z"
  />
</g>
</svg>
`;

const userSvg = `
  <svg
    class="avatar"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    enable-background="new 0 0 100 100"
    xml:space="preserve"
  >
    <symbol viewBox="-27.299 -39.024 54.598 78.047">
      <path
        fill="none"
        d="M11.157,34.02c-1.275-1.85-3.408-3.026-5.733-3.026c-2.13,0-4.118,0.985-5.424,2.607   c-1.306-1.622-3.294-2.607-5.423-2.607c-2.325,0-4.457,1.176-5.734,3.026c-1.275-1.85-3.408-3.026-5.733-3.026   c-1.913,0-3.648,0.776-4.908,2.029v-66.474c1.26,1.253,2.995,2.029,4.908,2.029c2.325,0,4.458-1.176,5.733-3.026   c1.277,1.85,3.409,3.026,5.734,3.026c2.129,0,4.117-0.986,5.423-2.607c1.306,1.622,3.294,2.607,5.424,2.607   c2.325,0,4.458-1.176,5.733-3.026c1.277,1.85,3.409,3.026,5.734,3.026c1.913,0,3.647-0.776,4.907-2.028v66.473   c-1.26-1.253-2.994-2.028-4.907-2.028C14.567,30.995,12.435,32.17,11.157,34.02z"
      />
      <path
        stroke-width="3"
        stroke-miterlimit="10"
        d="M-20.463-37.524   c0.391,1.615,1.839,2.822,3.573,2.822c1.733,0,3.181-1.207,3.572-2.822h4.323c0.391,1.615,1.839,2.822,3.573,2.822   s3.182-1.207,3.573-2.822h3.701c0.391,1.615,1.839,2.822,3.573,2.822s3.182-1.207,3.573-2.822h4.322   c0.391,1.615,1.839,2.822,3.573,2.822s3.182-1.207,3.573-2.822h5.335v75.047h-5.266c-0.219-1.825-1.759-3.25-3.641-3.25   s-3.423,1.425-3.641,3.25H9.065c-0.219-1.825-1.759-3.25-3.641-3.25s-3.423,1.425-3.641,3.25h-3.564   c-0.219-1.825-1.759-3.25-3.641-3.25s-3.423,1.425-3.641,3.25h-4.186c-0.219-1.825-1.758-3.25-3.641-3.25   c-1.883,0-3.423,1.425-3.641,3.25h-5.267v-75.047H-20.463z"
      />
    </symbol>
    <symbol viewBox="-30.282 -48.056 60.563 94.113">
      <path
        stroke-width="6"
        stroke-miterlimit="10"
        d="M16.006,43.056   c-3.233-4.883-8.77-8.108-15.065-8.108s-11.832,3.225-15.065,8.108h-10.584v-88.113h10.584c3.233,4.883,8.77,8.108,15.065,8.108   s11.832-3.224,15.065-8.108H26.59v88.113H16.006z"
      />
      <line
        fill="none"
        stroke="#000000"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-dasharray="7,8"
        x1="27.781"
        y1="-20.755"
        x2="-27.782"
        y2="-20.755"
      />
    </symbol>
    <symbol viewBox="-24.712 -42.834 54.356 85.667">
      <path
        stroke-width="5"
        stroke-miterlimit="10"
        d="M17.181,40.333h-4.475   c-0.466-2.355-2.539-4.131-5.031-4.131c-2.491,0-4.565,1.776-5.03,4.131h-4.883c-0.466-2.355-2.539-4.131-5.031-4.131   c-2.491,0-4.565,1.776-5.03,4.131h-4.883c-0.466-2.355-2.539-4.131-5.03-4.131v-72.023c2.622,0,4.76-1.974,5.069-4.512h4.806   c0.309,2.539,2.447,4.512,5.069,4.512c2.622,0,4.76-1.974,5.069-4.512h4.806c0.309,2.539,2.447,4.512,5.069,4.512   c2.622,0,4.76-1.974,5.069-4.512h4.398c0.309,2.539,2.447,4.512,5.069,4.512v72.023C19.72,36.202,17.647,37.978,17.181,40.333z"
      />
      <line
        fill="none"
        stroke="#000000"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-dasharray="7,6"
        x1="-22.644"
        y1="-17.395"
        x2="27.644"
        y2="-17.395"
      />
    </symbol>
    <symbol viewBox="-23.971 -42.094 47.944 84.188">
      <g>
        <path
          stroke-width="3.521"
          stroke-miterlimit="10"
          d="M17.182,40.333h-4.475    c-0.466-2.355-2.539-4.131-5.031-4.131c-2.491,0-4.565,1.776-5.03,4.131h-4.883c-0.466-2.355-2.539-4.131-5.031-4.131    c-2.491,0-4.565,1.776-5.03,4.131h-4.883c-0.466-2.355-2.539-4.131-5.03-4.131v-72.023c2.622,0,4.76-1.974,5.069-4.512h4.806    c0.309,2.539,2.447,4.512,5.069,4.512c2.622,0,4.76-1.974,5.069-4.512h4.806c0.309,2.539,2.447,4.512,5.069,4.512    c2.622,0,4.76-1.974,5.069-4.512h4.398c0.309,2.539,2.447,4.512,5.069,4.512v72.023C19.721,36.202,17.648,37.978,17.182,40.333z"
        />
      </g>
      <polygon
        stroke-width="3.8113"
        stroke-miterlimit="10"
        points="5.14,17.02 11.952,13.853    8.431,7.217 7.524,-0.241 0.124,1.057 -7.248,-0.385 -8.301,7.053 -11.951,13.62 -5.201,16.919 -0.084,22.42  "
      />
    </symbol>
    <symbol id="a" viewBox="-21.087 -31.266 42.17 72.87">
      <path
        stroke-width="5"
        stroke-miterlimit="10"
        d="M6.373,39.104h5.21c0-3.87,3.13-7,7-7v-53.87   c-3.87,0-7-3.14-7-7h-5.21"
      />
      <path
        stroke-width="5"
        stroke-miterlimit="10"
        d="M-6.377-28.766h-5.21c0,3.86-3.13,7-7,7v53.87   c3.87,0,7,3.13,7,7h5.21"
      />
      <line
        fill="none"
        stroke="#000000"
        stroke-width="5"
        stroke-miterlimit="10"
        x1="2.373"
        y1="39.104"
        x2="-2.377"
        y2="39.104"
      />
      <line
        fill="none"
        stroke="#000000"
        stroke-width="5"
        stroke-miterlimit="10"
        x1="2.373"
        y1="-28.766"
        x2="-2.377"
        y2="-28.766"
      />
      <g>
        <path
          stroke="#000000"
          stroke-width="0.9"
          stroke-miterlimit="10"
          d="M-9.901-10.118c0-0.994-0.806-1.8-1.8-1.8    s-1.8,0.806-1.8,1.8s0.806,1.8,1.8,1.8S-9.901-9.124-9.901-10.118z"
        />
        <path
          stroke="#000000"
          stroke-width="0.9"
          stroke-miterlimit="10"
          d="M-2.101-10.118c0-0.994-0.806-1.8-1.8-1.8    s-1.8,0.806-1.8,1.8s0.806,1.8,1.8,1.8S-2.101-9.124-2.101-10.118z"
        />
        <path
          stroke="#000000"
          stroke-width="0.9"
          stroke-miterlimit="10"
          d="M5.699-10.118c0-0.994-0.806-1.8-1.8-1.8s-1.8,0.806-1.8,1.8    s0.806,1.8,1.8,1.8S5.699-9.124,5.699-10.118z"
        />
        <path
          stroke="#000000"
          stroke-width="0.9"
          stroke-miterlimit="10"
          d="M13.499-10.118c0-0.994-0.806-1.8-1.8-1.8    s-1.8,0.806-1.8,1.8s0.806,1.8,1.8,1.8S13.499-9.124,13.499-10.118z"
        />
      </g>
    </symbol>
    <symbol viewBox="-21.086 -31.266 42.17 72.87">
      <use
        xlink:href="#a"
        width="42.17"
        height="72.87"
        x="-21.087"
        y="-31.266"
        transform="matrix(1 0 0 1 6.996482e-004 -2.671033e-004)"
        overflow="visible"
      />
      <line
        fill="none"
        stroke="#000000"
        stroke-width="4"
        stroke-miterlimit="10"
        x1="9.224"
        y1="13.75"
        x2="-9.223"
        y2="13.75"
      />
    </symbol>
    <g display="none">
      <path
        display="inline"
        fill="#000000"
        d="M1068.792,834.743H-169.006c-2.084,0-3.789-1.705-3.789-3.789V-356.211   c0-2.084,1.705-3.789,3.789-3.789h1237.798c2.084,0,3.789,1.705,3.789,3.789V830.954   C1072.582,833.038,1070.877,834.743,1068.792,834.743z"
      />
    </g>
    <g>
      <g>
        <path d="M49,14.34c-19.663,0-35.66,15.997-35.66,35.66S29.337,85.66,49,85.66S84.66,69.663,84.66,50S68.663,14.34,49,14.34z     M49,82.66c-7.894,0-15.141-2.815-20.794-7.494c2.298-6.381,8.431-10.763,15.259-10.763H54.43c6.86,0,13.013,4.403,15.303,10.813    C64.09,79.864,56.866,82.66,49,82.66z M72.103,73.063c-3.011-6.963-9.963-11.66-17.672-11.66H43.465    c-7.674,0-14.604,4.673-17.621,11.604C19.974,67.099,16.34,58.966,16.34,50c0-18.009,14.651-32.66,32.66-32.66    S81.66,31.991,81.66,50C81.66,58.994,78.005,67.151,72.103,73.063z" />
        <path d="M49,31.697c-7.841,0-14.221,6.379-14.221,14.221c0,7.842,6.379,14.221,14.221,14.221s14.221-6.379,14.221-14.221    C63.221,38.076,56.841,31.697,49,31.697z M49,57.139c-6.187,0-11.221-5.034-11.221-11.221c0-6.187,5.034-11.221,11.221-11.221    s11.221,5.034,11.221,11.221C60.221,52.105,55.187,57.139,49,57.139z" />
      </g>
    </g>
  </svg>
</html>
`;

export {userSvg, botSvg};