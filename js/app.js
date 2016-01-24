var initialCats = [
  {
    clickCount:0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'somewhere from flickr',
    nickNames: ['Tabtab', 'T-bone', 'Mr-T', 'Tabitha']
  },
  {
    clickCount:0,
    name: 'Tiger',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    imgAttribution: 'somewhere from flickr',
    nickNames: ['Stripes']
  },
  {
    clickCount:0,
    name: 'Scaredy',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    imgAttribution: 'somewhere from flickr',
    nickNames: ['Boo', 'Ghost']
  },
  {
    clickCount:0,
    name: 'Shadow',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    imgAttribution: 'somewhere from flickr',
    nickNames: ['Ninja', 'Law', 'Clan']
  },
  {
    clickCount:0,
    name: 'Sleepy',
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    imgAttribution: 'somewhere from flickr',
    nickNames: ['Zzzzz']
  }
];

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

// [x] Make the cats show up in a list
// [ ] Make the currentCat change when you click on a cat in the list

var viewModel = function() {

  // self model
  var self = this;

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

  // clean model
  // this.incrementCounter = function() {
  //   this.clickCount(this.clickCount() + 1);
  // };

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);


};

ko.applyBindings(new viewModel());
