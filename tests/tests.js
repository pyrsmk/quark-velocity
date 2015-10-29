var $ = quark.$,
	$$ = quark.$$;

QUnit.test('Animate', function(assert) {
	var done = assert.async();
	assert.expect(1);
	$('.test').animate({
		left: 100
	}, {
		duration: 100,
		complete: function() {
			assert.ok($('.test').left() == 100);
			done();
		}
	});
});

QUnit.start();