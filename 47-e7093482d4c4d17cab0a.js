(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{otDW:function(e,n,t){"use strict";t.r(n);var a=t("ERkP"),o=t.n(a),r=t("Wbzz"),l=t("Nhdc");n.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.e,{title:"bInterpolatePath - SVG"}),o.a.createElement("h1",null,"bInterpolatePath(progress, path1, path2): path"),o.a.createElement("p",null,"Interpolate from one SVG point to the other, this function assumes that each path has the same number of points."),o.a.createElement(l.b,{code:'\nconst rhino = "M 217.765 29.683 C 225.855 29.683 ";\nconst elephant = "M 223.174 43.413 ...";\n\nreturn (\n  <>\n    <Animated.Code>\n      {() =>\n        set(\n          progress,\n          timing(clock, progress, {\n            to: 1,\n            duration: 2000,\n            easing: Easing.linear\n          })\n        )\n      }\n    </Animated.Code>\n\n    <Svg style={styles.container} viewBox="0 0 409 280">\n      <AnimatedPath\n        d={bInterpolatePath(progress, rhino, elephant)}\n        fill="#7d8f9b"\n      />\n    </Svg>\n  </>\n);\n      '}),o.a.createElement("p",null,"See also: ",o.a.createElement(r.Link,{to:"/svg/interpolatePath/"},"interpolatePath")))}}}]);
//# sourceMappingURL=47-e7093482d4c4d17cab0a.js.map