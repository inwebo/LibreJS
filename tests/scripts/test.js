var w = window;
var d = w.document;
var L   = w.LibreJs = window.LibreJs || {};
var _ = L.Selector;

test('Select #qunit',function(){
    notEqual(null,_('#qunit'));
});

test('Select false id',function(){
    equal(null,_('#arf'));
});

test('Select .qunit',function(){
    notEqual(null,_('.classSelector'));
});

test('Select false class',function(){
    equal(null,_('.pouet'));
});

test('Select tag',function(){
    notEqual(null,_('div'));
});

test('Select false tag',function(){
    equal(null,_('pouet'));
});

test('Select tag with class',function(){
    notEqual(null,_('div.classeSelector'));
});

test('Select tag with false class',function(){
    equal(null,_('div.pouet'));
});


test('Select multiple classes',function(){
    notEqual(null,_('.classeSelector.hip.hop'));
});

test('Select tag with false class',function(){
    equal(null,_('.classeSelector.hip.hopla'));
});


