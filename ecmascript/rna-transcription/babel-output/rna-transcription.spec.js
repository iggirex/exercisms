'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _rna = require('./rna');

var _rna2 = _interopRequireDefault(_rna);

describe('Transcriptor', function () {
  var transcriptor = new _rna2['default']();

  it('transcribes cytosine to guanine', function () {
    expect(transcriptor.toRna('C')).toEqual('G');
  });

  it('transcribes guanine to cytosine', function () {
    expect(transcriptor.toRna('G')).toEqual('C');
  });

  it('transcribes adenine to uracil', function () {
    expect(transcriptor.toRna('A')).toEqual('U');
  });

  it('transcribes thymine to adenine', function () {
    expect(transcriptor.toRna('T')).toEqual('A');
  });

  it('transcribes all dna nucleotides to their rna complements', function () {
    expect(transcriptor.toRna('ACGTGGTCTTAA')).toEqual('UGCACCAGAAUU');
  });
});