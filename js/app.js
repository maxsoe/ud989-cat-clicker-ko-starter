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

  this.title = ko.computed(function(){
    var title;
    var clicks = this.clickCount();
    if (clicks < 10) {
      title = 'Newborn';
    } else if ( clicks < 20) {
      title = 'Twenties';
    } else {
      title = 'Adult';
    }
    return title;
  }, this);


}

ko.applyBindings(new viewModel());
