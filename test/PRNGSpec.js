/**
 * rkgttr-prng
 *
 * Copyright © 2016 Erik Guittiere. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import PRNG from '../src/PRNG';

describe('PRNG', () => {

  describe('prng.gen()', () => {

    it('should return the first random number with the default seed (1)', () => {
      const prng = new PRNG();
      const message = prng.gen();
      expect(message).to.be.equal(0.7098480789645691);
    });

    it('should return the first random number with a custom seed (8)', () => {
      const prng = new PRNG(8);
      const message = prng.gen();
      expect(message).to.be.equal(0.5824662338181952);
    });

  });

});
