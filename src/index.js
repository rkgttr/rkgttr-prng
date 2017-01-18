/**
 * rkgttr-prng
 *
 * Copyright © 2016 Erik Guittiere. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

 export default class {
   constructor(seed = 1) {
     this.x = 0;
     this.seed = seed;
   }
   gen() {
     this.x = Math.sin(this.seed++) * 10000;
     return this.x - Math.floor(this.x);
   }
 }
