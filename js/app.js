var Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com/photos/whoever')
  this.nickNames = ko.observableArray([{
    name: 'Tabtab'
  }, {
    name: 'T-bone'
  }, {
    name: 'Mr T'
  }, {
    name: 'Tabitha'
  }]);

  this.title = ko.computed(function() {
    var title;
    var clicks = this.clickCount();
    if (clicks < 10) {
      title = 'Newborn';
    } else if (clicks < 20) {
      title = 'Twenties';
    } else {
      title = 'Adult';
    }
    return title;
  }, this);
};

var viewModel = function() {

  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = function() {
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  };
};

ko.applyBindings(new viewModel());
