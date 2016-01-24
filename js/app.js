var viewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com/photos/whoever');
  // this.level = ko.observable('Baby');
  this.nickNames = ko.observableArray([
    {name: 'Tabtab'},
    {name: 'T-bone'},
    {name: 'Mr T'},
    {name: 'Tabitha'}
  ]);

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  // this.level = ko.computed(function() {
  //   if (this.clickCount < 100) {
  //     this.level('still baby');
  //     // return this.level();
  //   }
  //   return this.level();
  // }, this);


}

ko.applyBindings(new viewModel());
