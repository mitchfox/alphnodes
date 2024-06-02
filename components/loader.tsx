// components/Loader.js
import '../app/css/additional-styles/theme.css';

export default function Loader() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: 'auto' }}>
        <div style={{ margin: 'auto' }}>
          <svg className="mx-auto d-block svgcontain"  width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="loader_24">
              <g className="loader_circle_1" id="loader_24_01">
                <circle id="Ellipse 81" cx="30" cy="30" r="30" fill="transparent" />
                <circle id="Ellipse 76" cx="30" cy="2" r="2" fill="#dcfce7" />
                <circle id="Ellipse 82" cx="30" cy="58" r="2" fill="#dcfce7" />
              </g>
              <g className="loader_circle_2" id="loader_24_02">
                <circle id="Ellipse 83" cx="30" cy="30" r="24" fill="transparent" />
                <circle id="Ellipse 77" cx="30" cy="8" r="2" fill="#bbf7d0" />
                <circle id="Ellipse 84" cx="30" cy="52" r="2" fill="#bbf7d0" />
              </g>
              <g className="loader_circle_3" id="loader_24_03">
                <circle id="Ellipse 85" cx="30" cy="30" r="18" fill="transparent" />
                <circle id="Ellipse 78" cx="30" cy="14" r="2" fill="#86efac" />
                <circle id="Ellipse 86" cx="30" cy="46" r="2" fill="#86efac" />
              </g>
              <g className="loader_circle_4" id="loader_24_04">
                <circle id="Ellipse 87" cx="30" cy="30" r="12" fill="transparent" />
                <circle id="Ellipse 79" cx="30" cy="20" r="2" fill="#4ade80" />
                <circle id="Ellipse 88" cx="30" cy="40" r="2" fill="#4ade80" />
              </g>
              <g className="loader_circle_5" id="loader_24_05">
                <circle id="Ellipse 89" cx="30" cy="30" r="6" fill="transparent" />
                <circle id="Ellipse 80" cx="30" cy="26" r="2" fill="#22c55e" />
                <circle id="Ellipse 90" cx="30" cy="34" r="2" fill="#22c55e" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  