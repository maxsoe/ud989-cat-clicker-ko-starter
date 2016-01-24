var Cat = function(input) {
  this.clickCount = ko.observable(input.clickCount);
  this.name = ko.observable(input.name);
  this.imgSrc = ko.observable(input.imgSrc);
  this.imgAttribution = ko.observable(input.imgAttribution)
  this.nickNames = ko.observableArray(input.nickNames);

  this.title = ko.computed(function() {
    var title;
    var clicks = this.clickCount();
    if (clicks < 10) {
      title = 'Newborn';
    } else if (clicks < 20) {
      title = 'Teens';
    } else {
      title = 'Adult';
    }
    return title;
  }, this);
};

var viewModel = function() {
  this.currentCat = ko.observable(new Cat({
    clickCount:0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'somewhere from flickr',
    nickNames: ['Tabtab', 'T-bone', 'Mr-T', 'Tabitha']
  }));

  // alternate model
  // var self = this;
  // this.incrementCounter = function() {
  //   self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  // };

  // current model
  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
};

ko.applyBindings(new viewModel());
