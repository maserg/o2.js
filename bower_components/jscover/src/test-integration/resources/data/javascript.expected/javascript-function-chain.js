if (! _$jscoverage['javascript-function-chain.js']) {
  _$jscoverage['javascript-function-chain.js'] = {};
  _$jscoverage['javascript-function-chain.js'].lineData = [];
  _$jscoverage['javascript-function-chain.js'].lineData[2] = 0;
  _$jscoverage['javascript-function-chain.js'].lineData[5] = 0;
  _$jscoverage['javascript-function-chain.js'].lineData[9] = 0;
}
_$jscoverage['javascript-function-chain.js'].lineData[2]++;
someObject.mouseenter(function() {
  _$jscoverage['javascript-function-chain.js'].lineData[5]++;
  x++;
}).click(function() {
  _$jscoverage['javascript-function-chain.js'].lineData[9]++;
  x--;
});
