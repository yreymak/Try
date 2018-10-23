function firstFunc(func) {
  console.log('1st func');
  func();
}

firstFunc(function() {
  console.log('2nd func');
});

