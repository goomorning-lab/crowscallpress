/**
 * Crow's Call Press — Teaching Library
 * Shared utilities for login and dashboard pages
 */

// Token helpers
var TL = {
  getToken: function () { return localStorage.getItem('tl_token'); },
  getName:  function () { return localStorage.getItem('tl_name'); },
  clear:    function () { localStorage.removeItem('tl_token'); localStorage.removeItem('tl_name'); }
};
