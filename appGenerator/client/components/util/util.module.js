'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('appGeneratorApp.util', [])
  .factory('Util', UtilService)
  .name;
